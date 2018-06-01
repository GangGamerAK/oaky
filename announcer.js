const dc = require("discord.js");
const bot = new dc.Client();
let ownerid = "148477987426140160"; // This is your Id 
let prefix = "!"; // Your prefix !





bot.on('ready', () => {
    console.log(`${bot.user.username} Is up`)
});


bot.on('message', message => {


    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);



    if (!command.startsWith(prefix)) return;

    if (message.author.id !== ownerid) return;
    // The stream command



    // The normal playing command 
    if (command === `${prefix}an`) {
        let Guild = message.guild;
        let too = Guild.members;

        const wutToplay = args.join(" ");

        message.delete().catch(c => {});

        bot.user.setGame(wutToplay);
        too.send(`Dming user ${wutToplay}`)
    }

});


bot.login("Mzc2MDQwNDMyNzI5MDYzNDI0.DN4mdg.VvejYZueqSIc7wGMPiQJiA5CjHs")