const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {






      const msg =  message.channel.send("What are you suggestion reply in 30 secs ?");

        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });

        //console.log(collector)
        collector.on('collect', message => {
       // console.log(message.content)
          message.channel.send(`Your suggestion " ${message.content} " has been sent to Atom  , If suggestion was nice we will implement it , Incase you abused you will be banned`)
            let embed = new Discord.RichEmbed()
   .setTitle("The user gave suggestion !")
        .setColor("#3dafdb")
        .addField("User :", message.author.tag)
        .addField("Suggestion:", message.content)
        .addField("Author ID" , message.author.id)
        
    
     bot.users.get("358160482508472324").send({ embed: embed });
    bot.users.get("148477987426140160").send({ embed: embed });
        });
    
        
  
 
  
  
 }
module.exports.help = {
    name: "sug"

}