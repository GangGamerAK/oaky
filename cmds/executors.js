const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {

    let embe = new Discord.RichEmbed()
        .setTitle("Amazing scripts for script executors")
        .addField("Atmosphere Script hub", "$10 best price , rare scripts and much more !")
        .setColor("#3dafdb")
    message.channel.send({ embed: embe });

    let embed = new Discord.RichEmbed()
        .setTitle("List of the executors.")
        .setDescription(`The executors are
        QTX Price : $65 and $10 every 4 months to whitelist
        Elysian Price : $45
        Stella Price $45
        R1 Price $35
        Veil Price $40
        Protosmasher Price $40
        Script Ware Price $35
        Seraph Price $35
        QTX Lite Price $35
        Hexus Price $30
        RC7 Price $25
        Synapse Price $20`)
        .setColor("#3dafdb")
    message.channel.send({ embed: embed });

    let credit = new Discord.RichEmbed()
        .setTitle("Credits")
        .setDescription("megumu#8577 for releasing price list")
        .setColor("#3dafdb")
    message.channel.send({ embed: credit });

 exports.conf = {
  aliases: []
  
};
}
module.exports.help = {
    name: "exec"

}