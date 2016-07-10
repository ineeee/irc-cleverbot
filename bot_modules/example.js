function ExampleModule(client, config) {
	client.addListener('message', (from, to, text) => {
		if(text === 'hello world')
			client.notice(from, 'I am an example!');
	}
}

module.exports = ExampleModule;
