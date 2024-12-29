module.exports.config = {
	name: "sendmessage",
	version: "1.0",
	hasPermssion: 1,
	credits: "Gerald",
	description: "",
	commandCategory: "",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	if (!args[0]) return api.sendMessage(`provide an id`, event.threadID);
	else if (!args[1]) return message.reply("you didn't provide a message");
	
	try {
		const first = args[1];
		api.sendMessage(`you are now texting with ${args[0]}.`, event.threadID);
		const { messageID } = api.sendMessage(`You have a new message,\n- From: ` + event.senderID + `to ` + args[0], args[0]);
		api.editMessage(first + " use +sendmessage [the Number see in the *from*] to continue chat", messageID);
	} catch (e) {
		message.reply("sh.");
		console.log(e);
	}
};
