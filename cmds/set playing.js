const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {

    if (message.author.id !== "226355941048713217" && message.author.id !== "148477987426140160") return message.channel.send("You are not authorized ! *#FAILED*");

    const sayMessage = args.join(" ");

    message.delete().catch(O_o => {});

    bot.user.setGame(sayMessage);
    message.channel.send(`The Bot playing is changed too ${sayMessage}`)


}
module.exports.help = {
    name: "set"
}