const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setTitle("Atmosphere Script Hub")
        .setDescription(`.



📍  PayPal》10$  (Recommended)

📍  PayPal》9€  (Recommended)

📍  Steam Gift Card: 10$ :3

📍  Robux 2k Group Payment

📍  NO REFUND 

pay at  https://www.paypal.me/AtmosphereScriptHub/6 . And then send a screenshot of the Transaction to Arpon or Developers or Moderators


.`)
        .setColor("#3dafdb")



    message.channel.send({ embed: embed });
}
module.exports.help = {
    name: "pay"

}