const Discord = module.require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
module.exports.run = async(bot, message, args) => {

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    if (message.author.id !== "148477987426140160") return message.reply("You are not maker f0ck kid !");
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        let k = await message.channel.send('```\n' + code + '```');
        message.channel.send("Output :" + clean(evaled), { code: "xl" });
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);


    };


}
 exports.conf = {
  aliases: []
  
};
module.exports.help = {
    name: "eval"

}