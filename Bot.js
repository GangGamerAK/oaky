const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const botSettings = require("./botsettings.json");
const Discord = require("discord.js");

const prefix = botSettings.prefix;
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.mutes = require("./mutes.json");
bot.warn = require("./warn.json");

bot.codeis = require("./cmds/uuid.json");



fs.readdir("./cmds/", (err, files) => {
    if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("no commands to load");
        return;
    }
    console.log(`Loading ${jsfiles.length} commands !`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded !`);
        bot.commands.set(props.help.name, props);
    });
});
bot.on('ready', () => {
    bot.user.setGame(`${prefix}help`);
    console.log(bot.user.username);
    
  
   
  
  bot.setInterval(() => {

        for (let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let guildId = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "Muted By Bot");
            if (!mutedRole) continue;

            if (Date.now() > time) {
                console.log(`${i} is now able to be unmuted !`);

                member.removeRole(mutedRole);
                delete bot.mutes[i];

                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                    if (err) throw err;

                });
            }
        }
    }, 5000)
  

});
console.log(`bot is ready ! `);
console.log(bot.commands);

bot.on("message", async message => { 

    if (message.author.bot) return;
    if (message.isMentioned(bot.user)) {
        message.channel.send(`what `)
    };

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);



    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);
});

bot.login(botSettings.token);
