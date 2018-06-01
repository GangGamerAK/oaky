const fs = module.require("fs");


module.exports.run = async(bot, message, args) => {



    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have permission to use this command !!!");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.send("You did not mentioned a user or ID");

    let role = message.guild.roles.find(r => r.name === "Muted By Bot");
    let member = message.mentions.users.first() || message.guilds.members.get(args[0]) || null;


    if (!role || !toMute.roles.has(role.id)) return message.channel.send("This person is NOT !!! muted TBH !!!!");
    await toMute.removeRole(role);

    delete bot.mutes[toMute.id];

    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
        if (err) throw err;
        message.channel.send(`I have unmuted ${toMute.user.tag}.`);
    });
}

module.exports.help = {
        name: "unmute"

    }