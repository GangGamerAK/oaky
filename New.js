const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });

bot.on('ready', () => {
    console.log(`Logged in as bot!`);
});

bot.on('message', message => {

    let messageArray = message.content
    let command = messageArray[0];


    if (command === `!`) {
        if (message.channel.id !== "233256748402606081") return;
        message.delete()
        message.channel.send("#Bot_commands")
    }



    if (command === `--`) {
        if (message.channel.id !== "233256748402606081") return;


        message.delete()
        message.channel.send("#Bot_commands")


    }


});

bot.login("MzUzOTEzMjQ3MzYwODc2NTQ2.DI2m8A.IJfOu5oIpKTbjKYkN78TERToi-w")

/*    if (!bot.channels.get('233256748402606081')) return;
    if (bot.channels.get('233256748402606081')) {
        message.delete()
        message.channel.send("I am taking over no commands in general !")
    }*/