const chalk = require('chalk');
module.exports = (client) => {
    console.log(chalk.blueBright(`nxte (c) 2020 - midnxte@zohomail.com\nThis program comes with ABSOLUTELY NO WARRANTY;\nThis is free software, and you are welcome to redistribute it under certain conditions;`))
    client.user.setActivity('master write my code |', { type: 'WATCHING' });

}