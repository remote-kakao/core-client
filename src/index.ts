Device.acquireWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, '');

interface RKPlugin {
  onMessage?(
    event: string,
    data: Record<string, any>,
    session: string,
    sendReply: (
      session: string,
      success: boolean,
      data: Record<string, any> | undefined
    ) => void,
    _eval: (x: string) => string
  ): void;
}

const config: { address: string; port: number; plugins: RKPlugin[] } = {
  address: '172.30.1.1',
  port: 3000,
  plugins: [],
};

const socket = new java.net.DatagramSocket();
const address = java.net.InetAddress.getByName(config.address);
const buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 65535);

const generateId = (len: number) => {
  let result = '';
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let _ = 0; _ < len; _++)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
};

const getBytes = (str: string) => new java.lang.String(str).getBytes();

const inPacket = new java.net.DatagramPacket(buffer, buffer.length);

const sendMessage = (event: string, data: Record<string, any>) => {
  const bytes = getBytes(JSON.stringify({ event, data }));
  const outPacket = new java.net.DatagramPacket(
    bytes,
    bytes.length,
    address,
    config.port
  );
  socket.send(outPacket);
};

const sendReply = (
  session: string,
  success: boolean,
  data?: Record<string, any>
) => {
  const bytes = getBytes(
    JSON.stringify({ event: 'reply', session, success, data })
  );
  const outPacket = new java.net.DatagramPacket(
    bytes,
    bytes.length,
    address,
    config.port
  );
  socket.send(outPacket);
};

const handleMessage = (msg: string) => {
  const {
    event,
    data,
    session,
  }: { event: string; data: Record<string, any>; session: string } = JSON.parse(
    decodeURIComponent(msg)
  );

  switch (event) {
    case 'sendText':
      const res = Api.replyRoom(data.room, (data.text ?? '').toString());
      sendReply(session, res);
      break;
  }

  config.plugins.forEach((plugin) => {
    if (plugin.onMessage)
      plugin.onMessage(event, data, session, sendReply, (x) => eval(x));
  });
};

const send = (msg: Message) => {
  sendMessage('chat', {
    room: msg.room,
    content: msg.msg,
    sender: msg.sender,
    isGroupChat: msg.isGroupChat,
    profileImage: msg.imageDB.getProfileBase64(),
    packageName: msg.packageName,
    userId: msg.userId,
  });
};

// const response = (
//   room: string,
//   msg: string,
//   sender: string,
//   isGroupChat: boolean,
//   _: (msg: string) => void,
//   imageDB: { getProfileBase64(): string },
//   packageName: string
// ) => send({ room, msg, sender, isGroupChat, imageDB, packageName });

const responseFix = (
  room: string,
  msg: string,
  sender: string,
  isGroupChat: boolean,
  _: (msg: string) => void,
  imageDB: { getProfileBase64(): string },
  packageName: string,
  userId: number
) => send({ room, msg, sender, isGroupChat, imageDB, packageName, userId });

// @ts-ignore
const thread = new java.lang.Thread({
  run() {
    while (true) {
      socket.receive(inPacket);
      handleMessage(
        String(
          new java.lang.String(
            inPacket.getData(),
            inPacket.getOffset(),
            inPacket.getLength()
          )
        )
      );
    }
  },
});

const onStartCompile = () => thread.interrupt();

thread.start();

// [출처] responseFix 2.1 (카카오톡 9.7.0 이상에서 발생하는 오류 수정) (메신저봇 공식카페) | 작성자 Dark Tornado
function onNotificationPosted(
  sbn: android.service.notification.StatusBarNotification
) {
  var packageName = sbn.getPackageName();
  if (!packageName.startsWith('com.kakao.tal')) return;
  var actions = sbn.getNotification().actions;
  if (actions == null) return;
  var userId = sbn.getUser().hashCode();
  for (var n = 0; n < actions.length; n++) {
    var action = actions[n];
    if (action.getRemoteInputs() == null) continue;
    var bundle = sbn.getNotification().extras;

    var msg = bundle.get('android.text').toString();
    var sender = bundle.getString('android.title');
    var room = bundle.getString('android.subText');
    if (room == null) room = bundle.getString('android.summaryText');
    var isGroupChat = room != null;
    if (room == null) room = sender;

    // @ts-ignore
    var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(
      packageName,
      action,
      room,
      false,
      ''
    );
    var icon = bundle
      .getParcelableArray('android.messages')[0]
      .get('sender_person')
      .getIcon()
      .getBitmap();
    var image = bundle.getBundle('android.wearable.EXTENSIONS');
    // @ts-ignore
    if (image != null) image = image.getParcelable('background');
    // @ts-ignore
    var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
    // @ts-ignore
    com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(
      packageName,
      room,
      action
    );
    // @ts-ignore
    if (this.hasOwnProperty('responseFix')) {
      responseFix(
        room,
        msg,
        sender,
        isGroupChat,
        replier,
        imageDB,
        packageName,
        userId
      );
    }
  }
}
