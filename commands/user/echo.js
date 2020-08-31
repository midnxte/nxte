module.exports = {
    name: 'echo',
    description: 'repeats whatever the user says',
    aliases: [],
    permissions: 0,
    run: async (client, message, args) => {
        await message.delete();
        await message.channel.send(args.join(' '));
    }
}