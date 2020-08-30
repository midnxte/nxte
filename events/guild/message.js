require('dotenv').config();
const prefix = process.env.PREFIX
module.exports = async (client, message) => {
    if (message.mentions.has(client.user)) message.reply('Leave me alone, I\'m on a secret operation.');
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

    if (cmd.length === 0 || !command) return message.reply('Use a valid command.');
    else command.run(client, message, args);
}