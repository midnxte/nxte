const mongoose = require('mongoose');
const User = require('./src/models/user')
const Channel = require('./src/models/channel')

module.exports = {
    checkUserPermissions: async (command, client, message, args) => {
        const commandUser = message.author;
        const channel = message.channel;
        const user = await User.findOne({ userid: commandUser.id });
        const commandPermission = command.permissions
        const userPermission = user.permissions;
        const userBlacklisted = user.blacklisted;

        switch (commandPermission) {
            // case userPermission:
            //     return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
            //     : userPermission >= commandPermission ? command.run(client, message, args)
            //     : channel.send('You don\'t have permission to use this command.');
            //     break;
            case 0:
                return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
                    : command.run(client, message, args);
                break;

            case 1:
                return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
                    : userPermission >= 1 ? command.run(client, message, args)
                        : channel.send('You don\'t have permission to use this command.');
                break;

            case 2:
                return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
                    : userPermissions >= 2 ? command.run(client, message, args)
                        : channel.send('You don\'t have permission to use this command.');
                break;


            case 3:
                return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
                    : userPermission >= 3 ? command.run(client, message, args)
                        : channel.send('You don\'t have permission to use this command.');
                break;

            case 4:
                return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
                    : userPermission >= 4 ? command.run(client, message, args)
                        : channel.send('You don\'t have permission to use this command.');
                break;

            case 5:
                return userBlacklisted ? channel.send('You have been blacklisted from using commands.')
                    : userPermission >= 5 ? command.run(client, message, args)
                        : channel.send('You don\'t have permission to use this command.')
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
            await user.save();
            console.log(user)
        } else return;
    },
    registerChannel: async (message, channelid) => {
        let findGuild = await Channel.findOne({ guildid: message.guild.id });
        let findChannel = await Channel.findOne({ channelid: channelid });

        if (findGuild) {
            let channel = await Channel.findOneAndUpdate({ channelid: channelid }, { $set: { channelid: channelid } });
            await channel.save()
            return message.channel.send('Updated channel to ' + channelid);
        } else if (!findChannel) {
            let channel = await Channel.create({ guildid: message.guild.id, channelid: channelid })
            await channel.save();
        }
    }
}
