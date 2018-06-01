const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setTitle("The Hub", "[Atmosphere Script Hub](https://discord.gg/e9vHe8K)")
        .setDescription(`This hub has scripts for level 6 executors ! [Buy It !](https://rocketr.net/buy/63309b4a6eb4) \n\n To see it's features do !feature `)
        .setColor("#3dafdb")
      .addField("To see payment options do","!pay")
       




    message.channel.send({ embed: embed });
}
exports.conf = {
  aliases: []
  };

module.exports.help = {
    name: "buy"


}