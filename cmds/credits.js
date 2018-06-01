const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {

    let embed = new Discord.RichEmbed()
        .setAuthor("GangGamerAK")
        .setDescription("The Bot was made by GangGamerAK  !")
        .setColor("#ffffff")
        .addField("GangGamerAK#9102", "If want to add or support !")
        .addField("It is made for Atmosphere - Script Hub Group for whitelisting  ! ", " Only arpon can ! ")
        .addField("Intrested in buying ? Script hub of roblox then join this group ", " [Buy here](https://rocketr.net/buy/63309b4a6eb4)")
        

    message.channel.send({ embed: embed });
}
 exports.conf = {
  aliases: []
  
};
module.exports.help = {
    name: "credits"

}