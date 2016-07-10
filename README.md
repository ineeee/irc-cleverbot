# irc-cleverbot
An IRC bot that speaks using [cleverbot-node](https://github.com/fojas/cleverbot-node).

Install by running `npm install` and then `node bot.js`.

### Talking to the bot
Just talk to it:

    <realhuman> bot: hello
    <bot> Hello.

### Commands
- `.join <chan>`: Joins a channel.
- `.part [chan]`: Leaves a channel.
- `.nick <nick>`: Changes the nick.
- `.say <msg>`: Says whatever you want it to say.

### Configuration
You can change nick, channel list and irc host in `CONFIG.json`. Try not to break the JSON file.

### Adding commands/modules
Create a `.js` file in `irc_modules`, it will be automagically loaded. Be sure to export a function!
