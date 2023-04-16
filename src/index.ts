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

function getBytes(str: string) {
	return new java.lang.String(str).getBytes();
}

const thread = new java.lang.Thread(
	new java.lang.Runnable({
		run() {
			const inPacket = new java.net.DatagramPacket(buffer, buffer.length);

			while (true) {
				socket.receive(inPacket);
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
	}),
);

function onStartCompile() {
	return thread.interrupt();
}
thread.start();

const repliers = new Map();

function onNotificationPosted(
	sbn: android.service.notification.StatusBarNotification,
) {
	const packageName = sbn.getPackageName();
	const userId = sbn.getUser().hashCode();
	if (
		!config.packageNames.includes(packageName) ||
		!config.userIds.includes(userId)
	)
		return;

	const noti = sbn.getNotification();
	const actions = noti.actions;
	if (!actions) return;

	Array.from(actions).forEach((action) => {
		if (!action.getRemoteInputs()) return;

		const bundle = noti.extras;

		const sender = bundle.getString("android.title");
		const room =
			bundle.getString("android.subText") ??
			bundle.getString("android.summaryText") ??
			sender;
		const msg = bundle.getString("android.text");
		const isGroupChat = bundle.getBoolean("android.isGroupConversation");

		const icon = (
			(
				(
					bundle.getParcelableArray("android.messages")[0] as android.os.Bundle
				).get("sender_person") as android.app.Person
			).getIcon() as android.graphics.drawable.BitmapDrawable
		).getBitmap();
		const imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, icon);

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

		com.xfl.msgbot.application.service.NotificationListener.Companion.prototype.setSession(
			packageName,
			room,
			action,
		);
	});
}
