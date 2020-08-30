module.exports = {
    name: 'echo',
    description: 'repeats whatever the user says',
    run: async (client, message, args) => {
        await message.delete();
        await message.channel.send(args.join(' '));
    }
}