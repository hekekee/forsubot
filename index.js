const Discord = require('discord.js');
const config = require('./config.json'); // config.json in this case contains the client token
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
	console.log(message.content);
});

// You should add your own token here :)
client.login(config.token);
