module.exports = {
    name: 'help',
    description: 'helps user with commands',
    run: async (client, message, args) => {
        if (args[0]) {
            return message.channel.send(`Command Name: ${client.commands.get(args[0]).name}\nDescription: ${client.commands.get(args[0]).description}`)
        }
        return message.channel.send(`There are ${client.commands.size} commands.\n\`${client.commands.map(e => e.name).join(' ')}\n\``)
    }
}