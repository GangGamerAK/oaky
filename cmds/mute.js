const fs = module.require("fs");


module.exports.run = async(bot, message, args) => {

    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have permission to use this command !!!");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.channel.send("You didn't mentioned a user or ID");
    if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("The user has greater role than you");
    if (toMute === message.author) return message.channel.send("What are you doing ? ");
  let time = args.slice(1).join(' ');
  if (!time) return message.channel.send("Please specify time in minutes !");
    let role = message.guild.roles.find(r => r.name === "Muted By Bot");
    if (!role) {
        try {
            role = await message.guild.createRole({
                name: "Muted By Bot",
                color: "#d40d0d",
                permissions: []
            });

            message.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    if (toMute.roles.has(role.id)) return message.channel.send("This person is already muted !");

    bot.mutes[toMute.id] = {
        guild: message.guild.id,
        time: Date.now() + parseInt(args[1]) * 1000
    }
    await toMute.addRole(role);
    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {

        if (err) throw err;
        message.channel.send("I have muted the user !")

    });

}


exports.conf = {
  aliases: []
  
};

module.exports.help = {
        name: "mute"

    }
    // user has role Clients , If user has the role then he the command wont return if he doesnt the command will return , client will say !wl and his id will be stored :)
    // or the bot messages dm to an id of whitelister