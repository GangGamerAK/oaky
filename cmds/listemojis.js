const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
  
  if(message.channel.type === "dm") return message.channel.send("I didn't knew you could create emoji in DMS ! This Command only shows emoji of a group ! ");

  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");

  message.channel.send(emojiList);

  
  
  
};
exports.conf = {
  aliases: ["le"]
  
};
module.exports.help = {
    name: "listemoji"

}