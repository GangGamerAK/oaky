const Discord = module.require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
module.exports.run = async(bot, message, args) => {
    if (message.author.id !== "148477987426140160") return message.reply("Only GangGamerAK owner can do it !");
    const sayMessage = args.join(" ");

    message.delete().catch(O_o => {});

    bot.user.setUsername(sayMessage)
        .then(user => console.log(`My new username is ${user.username}`))
        .catch(console.error);

    message.channel.send(`my new username is ${sayMessage} `)


}
module.exports.help = {
    name: "name"

}