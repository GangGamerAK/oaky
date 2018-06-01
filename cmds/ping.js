module.exports.run = async(bot, message, args) => {

    const m = await message.channel.send("Ping ? getting ping ");
    m.edit(`Your Ping ! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    const Discord = module.require("discord.js");

}
module.exports.help = {
    name: "ping"

}
