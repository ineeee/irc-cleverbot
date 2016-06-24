const Cleverbot = require('cleverbot-node');

module.exports = function AI(client, config) {
	var cbot = new Cleverbot();
	Cleverbot.prepare(() => {
		console.log('Cleverbot AI has loaded');
	});

	client.addListener('message', (from, to, text) => {
		// private message bug
		if(to === client.nick) to = from;

		// skip messages not related to the bot
		if(text.includes(client.nick) === false) return;

		if( text.startsWith(client.nick) || text.endsWith(client.nick) ) {
			// remove the bot name from the message
			// example: "chatbot: hello!" becomes "hello!"
			text = text.replace(client.nick, '');
		} else {
			// otherwise lets just call him John because why not
			text = text.replace(client.nick, 'John');
		}

		cbot.write(text, (res) => {
			client.say(to, from + ': ' + res.message);
		});
	});
};
