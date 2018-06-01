const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setTitle("Atmosphere Script Hub")
        .setDescription(`The features are
        
        [¤] Really Nice GUI
        [¤] Rare, common, FE & op scripts
        [¤] All scripts are organised
        [¤] All scripts are tested and working 
        [¤] Auto update ( coming soon )
        [¤] Clients are able to request scripts
        [¤] HWID login 
        [¤] Updates broken scripts fast
        [¤] Lua & Lua C scripts  
        [¤] In update`)
        .setColor("#3dafdb")



    message.channel.send({ embed: embed });
}
 exports.conf = {
  aliases: ["feat","ft"]
  
};
module.exports.help = {
    name: "feature"

}