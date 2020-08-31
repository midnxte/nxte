module.exports = {
    name: 'help',
    description: 'helps user with commands',
    aliases: [],
    permissions: 0,
    run: async (client, message, args) => {
        const command = args[0];
        const getCommand = client.commands.get(command);
        if (command) {
            return message.channel.send(`Command Name: ${getCommand.name}\nDescription: ${getCommand.description}\nAccess Level: ${getCommand.permissions}`)
        }
        return message.channel.send(`There are ${client.commands.size} commands.\n\`${client.commands.map(e => e.name).join(' ')}\n\``)
    }
}