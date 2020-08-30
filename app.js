const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
dirs = ['command', 'event'];

dirs.forEach((h) => {
    require(`./handlers/${h}`)(client)
})

client.login(process.env.DISCORD_TOKEN);