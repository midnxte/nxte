module.exports = {
    name: 'dev',
    description: 'just a test command',
    run: (client, message, args) => {
        message.channel.send('I am open-source and currently in development. If you wish to contribute: https://github.com/midnxte/nxte/')
    }
}