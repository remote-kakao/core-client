Device.acquireWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, '');

const scriptName = '$SCRIPT_NAME';

const config: {
  address: string;
  port: number;
  packageNames: string[];
  userIds: number[];
} = {
  address: '172.30.1.41',
  port: 3000,
  packageNames: ['com.kakao.talk'],
  userIds: [95],
};

const RKPlugins: {
  [key: string]: {
    onEvent(
      msg: { event: string; data: Data; session: string },
      sendReply: <T>(data: T) => void,
    ): void;
  };
} = {};

const pluginDir = new java.io.File(
  com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath(),
  `${scriptName}/plugins`,
);

if (!pluginDir.exists())
  new java.io.File(
    com.xfl.msgbot.utils.SharedVar.Companion.getBotsPath(),
    `${scriptName}/plugins`,
  ).mkdir();
else
  Array.from(pluginDir.listFiles()).forEach((file) =>
    require(file.getAbsolutePath()),
  );


const socket = new java.net.DatagramSocket();
const address = java.net.InetAddress.getByName(config.address);
const buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 65535);
const inPacket = new java.net.DatagramPacket(buffer, buffer.length);
const replyActions = new Map<
  number,
  Map<
    string,
    Map<
      string,
      [android.app.Notification.Action, android.app.Notification.Action]
    >
  >
>();
const profileImages = new Map<number, Map<string, Map<string, string>>>();
const roomIcons = new Map<number, Map<string, Map<string, string>>>();

function getBytes(str: string) {
  return new java.lang.String(str).getBytes();
}

function sendEvent<T>(event: string, data: T) {
  const bytes = getBytes(JSON.stringify({ event, data }));
  const outPacket = new java.net.DatagramPacket(
    bytes,
    bytes.length,
    address,
    config.port,
  );
  socket.send(outPacket);
}

function bitmapToBase64(icon: android.graphics.Bitmap) {
  const outStream = new java.io.ByteArrayOutputStream();
  icon.compress(android.graphics.Bitmap.CompressFormat.PNG, 100, outStream);
  const byteArray = outStream.toByteArray();

  try {
    outStream.close();
  } catch (_) {}

  return android.util.Base64.encodeToString(byteArray, 0);
}

interface Data {
  [key: string]: string | number | boolean | undefined | Data;
}

const receiveMessage = (msg: string) => {
  const {
    event,
    data,
    session,
  }: { event: string; data: Data; session: string } = JSON.parse(msg);

  function sendReply<T>(data: T) {
    return sendEvent(`reply:${session}`, data);
  }

  Object.keys(RKPlugins).map((key) =>
    RKPlugins[key].onEvent({ event, data, session }, sendReply),
  );

  switch (event) {
    case 'send_text':
      if (
        data.userId?.toString() &&
        data.packageName &&
        data.roomId &&
        data.text
      ) {
        const action = replyActions
          .get(Number(data.userId))
          ?.get(data.packageName.toString())
          ?.get(data.roomId.toString())?.[1];
        if (action) {
          const intent = new android.content.Intent();
          const bundle = new android.os.Bundle();
          const remoteInputs = action.getRemoteInputs();

          for (const input of Array.from(remoteInputs))
            bundle.putCharSequence(input.getResultKey(), data.text.toString());

          android.app.RemoteInput.addResultsToIntent(
            action.getRemoteInputs(),
            intent,
            bundle,
          );

          try {
            action.actionIntent.send(Api.getContext(), 0, intent);
            sendReply(true);
          } catch (_) {
            sendReply(false);
          }
        }
      }
      sendReply(false);
      break;
    case 'read':
      if (data.userId?.toString() && data.packageName && data.roomId) {
        const action = replyActions
          .get(Number(data.userId))
          ?.get(data.packageName.toString())
          ?.get(data.roomId.toString())?.[0];
        if (action) {
          try {
            action.actionIntent.send(
              Api.getContext(),
              1,
              new android.content.Intent(),
            );
            sendReply(true);
          } catch (_) {
            sendReply(false);
          }
        }
      }
      sendReply(false);
      break;
    case 'get_profile_image':
      if (data.userId?.toString() && data.packageName && data.userHash) {
        const profileImage = profileImages
          .get(Number(data.userId))
          ?.get(data.packageName.toString())
          ?.get(data.userHash.toString());
        if (profileImage) return sendReply(profileImage);
      }
      sendReply(undefined);
      break;
    case 'get_room_icon':
      if (data.userId?.toString() && data.packageName && data.roomId) {
        const icon = roomIcons
          .get(Number(data.userId))
          ?.get(data.packageName.toString())
          ?.get(data.roomId.toString());
        if (icon) return sendReply(icon);
      }
      sendReply(undefined);
      break;
  }
};

function onMessage(data: {
  room: { name: string; id: string; isGroupChat: boolean };
  id: string;
  sender: { name: string; hash: string };
  content: string;
  containsMention: boolean;
  time: number;
  app: { packageName: string; userId: number };
}) {
  sendEvent('message', data);
}

const thread = new java.lang.Thread({
  run() {
    while (true) {
      socket.receive(inPacket);
      const message = decodeURIComponent(
        String(
          new java.lang.String(
            inPacket.getData(),
            inPacket.getOffset(),
            inPacket.getLength(),
          ),
        ),
      );

      receiveMessage(message);
    }
  },
} as unknown as java.lang.Runnable);

function onStartCompile() {
  replyActions.clear();
  return thread.interrupt();
}
thread.start();

function onNotificationPosted(
  sbn: android.service.notification.StatusBarNotification,
): void {
  const packageName = sbn.getPackageName();
  const userId = sbn.getUser().hashCode();
  if (
    !config.packageNames.includes(packageName) ||
    !config.userIds.includes(userId)
  )
    return;

  const noti = sbn.getNotification();
  const actions = noti.actions;
  const bundle = noti.extras;
  if (
    !actions ||
    !bundle ||
    bundle.getString('android.template') !==
      'android.app.Notification$MessagingStyle'
  )
    return;

  const senderName = bundle.getString('android.title');
  const roomName =
    bundle.getString('android.subText') ??
    bundle.getString('android.summaryText') ??
    senderName;

  const androidText = bundle.get('android.text');
  const content = androidText.toString();
  const containsMention = androidText instanceof android.text.SpannableString;
  const isGroupChat = bundle.getBoolean('android.isGroupConversation');

  const messageBundle = bundle.getParcelableArray(
    'android.messages',
  )[0] as android.os.Bundle;
  const senderPerson = messageBundle.get('sender_person') as android.app.Person;
  const senderHash = senderPerson.getKey();
  const time = messageBundle.getLong('time');

  const roomId = sbn.getTag();
  const logId = java.lang.Long.toString(bundle.getLong('chatLogId'));

  const profileImage = bitmapToBase64(
    (
      senderPerson.getIcon() as android.graphics.drawable.BitmapDrawable
    ).getBitmap(),
  );

  if (!profileImages.has(userId)) profileImages.set(userId, new Map());
  if (!profileImages.get(userId)?.has(packageName))
    profileImages.get(userId)?.set(packageName, new Map());
  if (!profileImages.get(userId)?.get(packageName)?.has(senderHash))
    profileImages.get(userId)?.get(packageName)?.set(roomId, profileImage);

  const roomIcon = bitmapToBase64(
    (
      bundle.get(
        'android.largeIcon',
      ) as android.graphics.drawable.BitmapDrawable
    ).getBitmap(),
  );

  if (!roomIcons.has(userId)) roomIcons.set(userId, new Map());
  if (!roomIcons.get(userId)?.has(packageName))
    roomIcons.get(userId)?.set(packageName, new Map());
  if (!roomIcons.get(userId)?.get(packageName)?.has(roomId))
    roomIcons.get(userId)?.get(packageName)?.set(roomId, roomIcon);

  let readAction: android.app.Notification.Action | undefined = undefined;

  for (const action of Array.from(actions)) {
    if (
      action.getRemoteInputs() &&
      ['reply', '답장'].includes(action.title.toLowerCase())
    ) {
      if (!replyActions.has(userId)) replyActions.set(userId, new Map());
      if (!replyActions.get(userId)?.has(packageName))
        replyActions.get(userId)?.set(packageName, new Map());
      if (!replyActions.get(userId)?.get(packageName)?.has(roomId))
        replyActions
          .get(userId)
          ?.get(packageName)
          ?.set(roomId, [readAction ?? actions[1], action]);

      onMessage.call(null, {
        room: { name: roomName, id: roomId, isGroupChat },
        id: logId,
        sender: { name: senderName, hash: senderHash },
        content,
        containsMention,
        time,
        app: { packageName, userId },
      });
    } else if (['read', '읽음'].includes(action.title.toLowerCase())) {
      readAction = action;
      com.xfl.msgbot.application.service.NotificationListener.Companion.setMarkAsRead(
        packageName,
        roomName,
        action,
      );
    }
  }
}
