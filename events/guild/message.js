require('dotenv').config();
const prefix = process.env.PREFIX
module.exports = async (client, message) => {
    if (message.channel.id === '749680884659126422')
        if (!message.author.bot) client.channels.cache.get('729383866061815822').send(message.content)
    if (message.channel.id === '729383866061815822')
        if (!message.author.bot) client.channels.cache.get('749680884659126422').send(`${message.author.username} (${message.author.id}): ${message.content}`)

    if (message.mentions.has(client.user)) {
        if (!message.author.bot) {
            return message.reply('Leave me alone, I\'m on a secret operation.')
        }
    }

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