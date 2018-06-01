const Discord = module.require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
module.exports.run = async(bot, message, args) => {

    if (message.author.id !== "226355941048713217" && message.author.id !== "148477987426140160") return message.channel.send("You are not authorized !");
    const sayMessage = args.join(" ");

    let nicked = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    message.delete().catch(O_o => {});

    nicked.setNickname(sayMessage)
        .then(user => console.log(`The nick is ${sayMessage}`))
        .catch(console.error);

    message.channel.send(`The nick is set to ${sayMessage} `);



}
exports.conf = {
  aliases: []
  
};
module.exports.help = {
    name: "nickhim"

}