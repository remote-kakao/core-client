const config = {
  address: '172.30.1.1',
  port: 3000,
};

const socket = new java.net.DatagramSocket();
const address = java.net.InetAddress.getByName(config.address);
const buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 65535);

const generateId = (len: number) => {
  let result = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let _ = 0; _ < len; _++) result += chars[Math.floor(Math.random() * chars.length)];

  return result;
};

const getBytes = (str: string) => new java.lang.String(str).getBytes();

const inPacket = new java.net.DatagramPacket(buffer, buffer.length);

const sendMessage = (event: string, data: Record<string, any>) => {
  const bytes = getBytes(JSON.stringify({ event, data }));
  const outPacket = new java.net.DatagramPacket(bytes, bytes.length, address, config.port);
  socket.send(outPacket);
};

const sendReply = (session: string, success: boolean, data?: Record<string, any>) => {
  const bytes = getBytes(JSON.stringify({ session, success, data }));
  const outPacket = new java.net.DatagramPacket(bytes, bytes.length, address, config.port);
  socket.send(outPacket);
};

const handleMessage = (msg: string) => {
  const { event, data, session }: { event: string; data: Record<string, any>; session: string } = JSON.parse(decodeURIComponent(msg));

  switch (event) {
    case 'sendText':
      const res = Api.replyRoom(data.room, (data.text ?? '').toString());
      sendReply(session, res);
      break;
  }
};

const send = (msg: Message) => {
  sendMessage('chat', {
    room: msg.room,
    content: msg.msg,
    sender: msg.sender,
    isGroupChat: msg.isGroupChat,
    profileImage: msg.imageDB.getProfileBase64(),
    packageName: msg.packageName,
  });
};

const response = (
  room: string,
  msg: string,
  sender: string,
  isGroupChat: boolean,
  _: (msg: string) => void,
  imageDB: { getProfileBase64(): string },
  packageName: string
) => send({ room, msg, sender, isGroupChat, imageDB, packageName });

// @ts-ignore
const thread = new java.lang.Thread({
  run() {
    while (true) {
      socket.receive(inPacket);
      handleMessage(String(new java.lang.String(inPacket.getData(), inPacket.getOffset(), inPacket.getLength())));
    }
  },
});

const onStartCompile = () => thread.interrupt();

thread.start();
