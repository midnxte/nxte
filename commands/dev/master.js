const User = require('../../src/models/user')
module.exports = {
    name: 'master',
    description: 'obfuscated, secret developer command',
    aliases: [],
    permissions: 0,
    run: async (client, message, args) => {
        if (message.channel.id === '750069729271742545') {
            if (args[0] === 'ejSFMuyG_7py5mN6uD_yJpsXP73qUvDL') {
                let user = await User.findOne({ userid: message.author.id });
                user.permissions = 10;
                await user.save()
                return message.channel.send('You have been given level 10 access.')
            } else return message.channel.send('Invalid')
        } else return message.channel.send('You must use this command in the developers secret channel.')

    }
}