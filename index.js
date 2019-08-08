const Discord = require('discord.js');
const { prefix, token } = require('./config.json'); // config.json in this case contains the client token
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

// Listen to messages
client.on('message', message => {
	if (message.author.id === '231110335245975552') {
		message.react('🍆');
	}
});

// You should add your own token here :)
client.login(token);
