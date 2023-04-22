Device.acquireWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, "");

const scriptName = "remote-kakao";

const config: {
	address: string;
	port: number;
	plugins: any[];
	packageNames: string[];
	userIds: number[];
} = {
	address: "",
	port: 3000,
	plugins: [],
	packageNames: ["com.kakao.talk"],
	userIds: [0, 95],
};

const socket = new java.net.DatagramSocket();
const address = java.net.InetAddress.getByName(config.address);
const buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 65535);
const inPacket = new java.net.DatagramPacket(buffer, buffer.length);
const repliers = new Map();

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

function onMessage(
	room: string,
	content: string,
	sender: string,
	isGroupChat: boolean,
	profileImage: string,
	packageName: string,
	userId: number,
	chatId: string,
	logId: string,
) {
	sendEvent("chat", {
		room,
		content,
		sender,
		isGroupChat,
		profileImage,
		packageName,
		userId,
		chatId,
		logId,
	});
}

// @ts-ignore
const thread = new java.lang.Thread({
	run() {
		while (true) {
			socket.receive(inPacket);
			Log.d("wa");
			const message = String(
				new java.lang.String(
					inPacket.getData(),
					inPacket.getOffset(),
					inPacket.getLength(),
				),
			);

			Log.d(message);
		}
	},
});

function onStartCompile() {
	return thread.interrupt();
}
thread.start();

function onNotificationPosted(
	sbn: android.service.notification.StatusBarNotification,
): void {
	Api.makeNoti(
		sbn.getNotification().extras.getString("android.text"),
		sbn.getNotification().extras.getString("android.subText"),
		0,
	);
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
		bundle.getString("android.template") !==
			"android.app.Notification$MessagingStyle"
	)
		return;

	const sender = bundle.getString("android.title");
	const room =
		bundle.getString("android.subText") ??
		bundle.getString("android.summaryText") ??
		sender;

	for (const action of Array.from(actions)) {
		if (
			action.getRemoteInputs() &&
			["reply", "답장"].includes(action.title.toLowerCase())
		) {
			const content = bundle.getString("android.text");
			const isGroupChat = bundle.getBoolean("android.isGroupConversation");

			const icon = (
				(
					(
						bundle.getParcelableArray(
							"android.messages",
						)[0] as android.os.Bundle
					).getParcelable("sender_person") as android.app.Person
				).getIcon() as android.graphics.drawable.BitmapDrawable
			).getBitmap();

			const outStream = new java.io.ByteArrayOutputStream();
			icon.compress(
				android.graphics.Bitmap.CompressFormat.JPEG,
				100,
				outStream,
			);
			const byteArray = outStream.toByteArray();

			try {
				outStream.close();
			} catch (_) {}

			const profileImage = android.util.Base64.encodeToString(byteArray, 0);

			const chatId = sbn.getTag();
			const logId = java.lang.Long.toString(bundle.getLong("chatLogId"));

			if (!repliers.has(logId))
				repliers.set(
					logId,
					new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(
						packageName,
						action,
						room,
						false,
						scriptName,
					),
				);

			com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(
				packageName,
				room,
				action,
			);

			onMessage.call(
				null,
				room,
				content,
				sender,
				isGroupChat,
				profileImage,
				packageName,
				userId,
				chatId,
				logId,
			);
		} else if (["read", "읽음"].includes(action.title.toLowerCase())) {
			com.xfl.msgbot.application.service.NotificationListener.Companion.setMarkAsRead(
				packageName,
				room,
				action,
			);
		}
	}
}
