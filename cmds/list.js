module.exports.run = async(bot, message, args) => {
    if (message.author.id !== "226355941048713217" && message.author.id !== "148477987426140160") return message.channel.send("You are not Arpon !");
    if (message.channel.type === "text") return message.channel.send("It's private so run command in DM!");

    const fs = require('fs');


    fs.readFile('./cmds/uuid.json', 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
        message.channel.send("```\n\n" + data + "```");
    });



};
 exports.conf = {
  aliases: []
  
};

module.exports.help = {
    name: "list"

}