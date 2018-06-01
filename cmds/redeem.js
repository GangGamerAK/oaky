const fs = require('fs');
const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    let uuid = require("./uuid.json")

    let input = args.join(" ");


    let file = uuid[`${input}`]

    if (file === undefined) return message.channel.send("Not a valid code !")

    console.log(file)
        //  if (input !== file[`${input}`]) return message.reply("Not a valid code !");



    let inv = await bot.channels.get('353963586659418123').createInvite({ maxUses: 1, unique: true });

    //353963586659418123


    let embed = new Discord.RichEmbed()

    .setTitle("The user redeemed code !")
        .setColor("#3dafdb")
        .addField("User :", message.author.tag)
        .addField("Code Generator's name  :", file.Code_generater_name)
        .addField("Code used : " , input)
        .addField("Invite sent", inv)

    bot.users.get("226355941048713217").send({ embed: embed });
    bot.users.get("148477987426140160").send({ embed: embed });


    delete bot.codeis[input];


    fs.writeFile("./cmds/uuid.json", JSON.stringify(bot.codeis), err => {
        if (err) throw err;
        message.channel.send(inv + " Don't share with anyone");
    });

};

module.exports.help = {
    name: "redeem"

}