const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = (f) => {
        const events = readdirSync(`./events/${f}/`).filter((f) => f.endsWith('.js'));
        for (e of events) {
            const event = require(`../events/${f}/${e}`);
            let eventName = e.split('.')[0];
            client.on(eventName, event.bind(null, client));
        };
    };
    ['client', 'guild'].forEach((x) => load(x));
}