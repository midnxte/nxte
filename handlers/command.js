const { readdirSync } = require('fs')

module.exports = (client) => {
    readdirSync('./commands').forEach((f) => {
        const commands = readdirSync(`./commands/${f}`).filter((f) => f.endsWith('.js'));
        for (c of commands) {
            let command = require(`../commands/${f}/${c}`);
            if (command.name) {
                console.log(`& Functional: ${c}`);
                client.commands.set(command.name, command);
            } else {
                console.log(`& Errored: ${c} (missing help.name or help.name is invalid.)`)
                continue;
            }
            if (command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach((a) => client.aliases.set(a, command.name))
            }
        }
    });
    console.log(`There are ${client.commands.size} commands available.`)
}