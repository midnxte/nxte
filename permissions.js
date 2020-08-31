const mongoose = require('mongoose');
const User = require('./src/models/user')

module.exports = {
    checkUserPermissions: async (command, client, message, args) => {
        const commandUser = message.author;
        const channel = message.channel;
        const user = await User.findOne({ userid: commandUser.id });
        const userPermission = user.permissions;
        const userBlacklisted = user.blacklisted;

        switch (command.permissions) {
            case 0:
                return !userBlacklisted ? command.run(client, message, args)
                    : channel.send('You have been blacklisted from using commands.')
                break;

            case 10:
                return userPermission === 10 ? command.run(client, message, args)
                    : channel.send('You don\'t have permission to use this command.')
                break;
        }
    },
    registerUser: async (message) => {
        let findUser = await User.findOne({ userid: message.author.id })
        if (!findUser) {
            let user = await User.create({ userid: message.author.id });
            user.save();
            console.log(user)
        } else return;
    }
}
