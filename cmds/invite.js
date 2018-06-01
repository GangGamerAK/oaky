const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });

module.exports.run = async(bot, message, args) => {

    let role = message.guild.roles.find(r => r.name === "Seller");
    let userrole = message.guild.roles.find(r => r.name === "Clients");
    let useral = message.member;
    let person = message.guild.member(message.mentions.users.first())
    let inv = await bot.channels.get('353949164964413443').createInvite({ maxUses: 1, unique: true });
    process.on('unhandledRejection', console.error);
    if (!role) return message.channel.send("Thier is no role {Seller} , Make One ");

    if (useral.roles.has(role.id)) {

        person.send(inv + `  Warning ! Do not share this with anyone else if you do you get blacklisted and no refund ! `);

        let embed = new Discord.RichEmbed()


        .setTitle("The user you whited !")
            .setColor("#3dafdb")
            .addField("User :", person.user.username)
            .addField("Whitelister :", useral.user.username)
            .addField("Invite sent", inv)
            .addField("role of the whitelister", role)

        bot.users.get("226355941048713217").send({ embed: embed });
        bot.users.get("148477987426140160").send({ embed: embed });
        message.channel.send("Look at DMs :eyes: .")
        await userrole.removeRole(role);

    } else {
        message.channel.send("You do not have `{Seller}` role ! You have been caught !")

    }
}
 exports.conf = {
  aliases: []
  
};
module.exports.help = {
    name: "inv"

}