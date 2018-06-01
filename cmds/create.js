const fs = require("fs");
const randomstring = require("randomstring");


module.exports.run = async(bot, message, args) => {
    if (message.author.id !== "226355941048713217" && message.author.id !== "148477987426140160") return message.channel.send("You are not authorized !");
    if (message.channel.type === "text") return message.channel.send("It's private so run command in DM");
  const uuidv4 = require('uuid/v4');
  let thing = uuidv4();
   let string = randomstring.generate({
        length: 2 ,
        charset: 'alphabetic'
    });


    message.channel.send(`The code is = ${thing} `);


    bot.codeis[thing] = {
        
        Code_generater_name : message.author.tag

    }
    fs.writeFile("./cmds/uuid.json", JSON.stringify(bot.codeis, null, 4), err => {

        if (err) throw err;
        message.channel.send("Saved the random code !")
    });

};
 exports.conf = {
  aliases: []
  
};

module.exports.help = {
    name: "create"

}