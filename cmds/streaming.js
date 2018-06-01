const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {

if (message.author.id !== "226355941048713217" && message.author.id !== "148477987426140160") return message.channel.send("You are not authorized ! *#FAILLLLLL*");

    const sayMessage = args.join(" ");

    message.delete().catch(O_o => {});
    let result = bot.user.setGame(`${sayMessage}`, `https://www.twitch.tv/anomalyxd`, 1);
    console.log(result);

    message.channel.send(`The Bot playing is changed too ${sayMessage}`)


}
module.exports.help = {
    name: "stream"

}