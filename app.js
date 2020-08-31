const Discord = require('discord.js');
const client = new Discord.Client();
const { connect, connection } = require('mongoose');

require('dotenv').config();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
dirs = ['command', 'event'];

dirs.forEach((h) => require(`./handlers/${h}`)(client));

connect('mongodb://localhost/nxte', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

connection.on('error', console.error.bind(console, "connection error:"));
connection.on('open', () => console.log('Connected to NXTE database.'));

client.login(process.env.DISCORD_TOKEN);