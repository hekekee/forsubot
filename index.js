const Discord = require('discord.js');
const { token, users_id } = require('./config.json'); // config.json in this case contains the client token
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


// Listen to messages and add reactions to specific user's messages
client.on('message', message => {
	if (message.author.id === users_id) {
		message.react('🍆');
	}
});

// You should add your own token here :)
client.login(token);
