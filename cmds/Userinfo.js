const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
  let avatar = await target.avatarURL
    let embed = new Discord.RichEmbed()
        .setAuthor(target.username)
        .setDescription("This is User's name and info!")
        .setColor("#ffffff")
        .setThumbnail(avatar)
        .setFooter('Atmosphere Script hub - Bot', 'https://cdn.discordapp.com/attachments/353949164964413443/355630527274811393/avatar.png')  
        .addField("Full Username", target.tag)
        .addField("ID", target.id)
        .addField("ID Created at :" ,target.createdAt);

    message.channel.send({ embed: embed });
  exports.conf = {
  aliases: ["info" ,"uf"]
  
};

}
module.exports.help = {
    name: "userinfo"

}