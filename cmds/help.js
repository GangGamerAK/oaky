const Discord = module.require(`discord.js`);
const botSettings = require(`./botsettings.json`);

module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js');


    const embed = new Discord.RichEmbed()


    .setTitle('Command Help ')

    .setColor("0043CF")

    .setFooter('Atmosphere Script hub - Bot', 'https://cdn.discordapp.com/attachments/353949164964413443/355630527274811393/avatar.png')

    .setThumbnail('https://cdn.discordapp.com/attachments/353949164964413443/355630527274811393/avatar.png')

    .setTimestamp()

    .addField(`The prefix of bot is`, `**${botSettings.prefix}**`)
        .addField(`Fun`, `
    \n\n
    **${botSettings.prefix}avatar** - It shows avatar of the mentioned user . 
    **${botSettings.prefix}Credits** - Shows the credits !
    **${botSettings.prefix}say** - says the specified thing .
    **${botSettings.prefix}Userinfo** - Gives userinfo of a user .  
    **${botSettings.prefix}nick** - Nicknames a user
    **${botSettings.prefix}say** - It says what you ask it to say !
`)
      .addField(`Usefull `, `
\n\n
    **${botSettings.prefix}buy** - If you want to buy The command has information !
    **${botSettings.prefix}feature** - Shows feature of the script hub !
    **${botSettings.prefix}exec** - Shows list of executors with prices !
    **${botSettings.prefix}pay** - Shows payment option of scirpt hub !
    **${botSettings.prefix}ping** - Shows your ping !
    **${botSettings.prefix}redeem** - redeem code given you by arpon or a seller 
    **${botSettings.prefix}mute** - It mutes the user in minute!
    **${botSettings.prefix}unmute** - It unmutes the user  !
`)
        .addField(`For Arpon `, `
\n\n
Don't Try !!!
**${botSettings.prefix}set** - This command is for Arpon to set playing of bot !
**${botSettings.prefix}find** - give half username to find user !
 
 `)
        .addField(`GangGamerAK#9102`, `The Creater of bot ! DM him If you want any command `)
    message.channel.send({ embed });
}
 exports.conf = {
  aliases: ["h","halp"]
  
};
module.exports.help = {
    name: `help`
        ///https://cdn.discordapp.com/attachments/353949164964413443/355630527274811393/avatar.png
}