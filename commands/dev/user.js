const User = require('../../src/models/user')
module.exports = {
    name: 'user',
    description: 'allows user promotion, demotion and blacklist',
    usage: 'n!user <userid> -flag <value>',
    aliases: [],
    permissions: 10,
    run: async (client, message, args) => {
        try {
            if (!args[0]) return message.channel.send('You need to enter userid or mention user.');
            const member = message.mentions.users.first() || await client.users.fetch(args[0]);
            if (member.bot) return message.channel.send('You can\'t use this command on a bot.')
            if (!args[1]) return message.channel.send('You didn\'t input a flag');

            const user = await User.findOne({ userid: member.id });

            switch (args[1]) {
                case "-b": //blacklist
                    if (!args[2]) return message.channel.send('You didn\'t input a value');
                    if (args[2] === 'true' || args[2] === 'false') {
                        user.blacklisted = args[2];
                        await user.save();
                        return message.channel.send(`Set <@${user.userid}> to blacklisted ${user.blacklisted}`);
                    } else return message.channel.send('Invalid value (enter **true** or **false**)');
                    break;

                case "-p": //permissions
                    if (!args[2]) return message.channel.send('You didn\'t input a value');
                    let value = Number(args[2])
                    if (value >= 0 && value <= 10) {
                        user.permissions = value;
                        await user.save()
                        return message.channel.send(`Set <@!${user.userid}> permissions to ${user.permissions}`);
                    } else return message.channel.send('Invalid permission level');
                    break;

                case "-s": //show user
                    return message.channel.send(
                        `\`${member.username}\`\nPermission Level: ${user.permissions}\nUser Blacklisted: ${user.blacklisted}`
                    )
                    break;
            }
        } catch (e) {
            if (e.message.includes('snowflake')) return message.channel.send('You need to enter a valid user.')
            else if (e.message.includes('Unknown User')) return message.channel.send('This user is not available.')
        }
    }
}