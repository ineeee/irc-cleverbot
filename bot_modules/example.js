function ExampleModule(client, config) {
	client.addListener('message', (from, to, text) => {
		if(text === 'hello') {
			client.say(from, 'world');
		}
	});
}

module.exports = ExampleModule;
