module.exports = {
    name: "eval",
    description: "evaluates code",
    run: async (client, message, args) => {
        if (message.author.id === '258970604005359616') {
            message.delete();
            const clean = (text) => {
                if (typeof text === "string") {
                    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                }
                else {
                    return text;
                }
            };

            try {
                const code = args.join(" ");
                let evaled = eval(code);

                if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                if (err.message.includes('Invalid Form Body')) return message.channel.send('Content must be less than 2000 characters.')
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        } else return message.reply('no perms bro')
    },
};
