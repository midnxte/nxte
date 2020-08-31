module.exports = {
    name: 'discord',
    description: 'sends discord server',
    aliases: [],
    permissions: 0,
    run: (client, message, args) => {
        message.channel.send('Join our community server, to get any information about upcoming nxte updates/additions. https://discord.gg/p9ebc4j')

    }
}