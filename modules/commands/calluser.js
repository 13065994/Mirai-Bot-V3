module.exports.config = {
	name: "ping",
	version: "1.0.5",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "tag toàn bộ thành viên",
	commandCategory: "group",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  try {
    const first = args[1];
    api.sendMessage(`you are now texting with ${args[0]}.`, event.threadID);
    const { messageID } = api.sendMessage(`You have a new message,\n- From: ` + event.senderID + `to ` + args[0], args[0]);
    api.editMessage(first + " use +sendmessage [the Number see in the *from*] to continue chat", messageID);
  }
};
