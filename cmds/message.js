const Discord = require("discord.js");
const guildID = "353949164964413442";

module.exports.run = async(bot, message, args) => {
    
 let  memberCount = bot.guilds.get(guildID).members.size()
console.log("There are " + memberCount + "people in this server!")

};

module.exports.help = {
    name: "message"

}