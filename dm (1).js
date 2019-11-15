//Run unlocker if you want to use this as a selfbot

const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NjQ0MTUwMjY0ODk4NzgxMTky.Xcv3QA.2cBtbxAJ9Qxk-MmRH7hW-gYJQAM");

bot.on("ready", function() {
console.log("Bot/Selfbot started.");
});

bot.on("message", function(message) {
	if(message.content.toLowerCase() == "dm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`Attempting to DM through selfbot API`)
			console.log(`DM'ed ${member1.user.tag}`)
			member1.send('** Salut tu peu rejoindre, si tu aime quitte** : https://discord.gg/FqQqsRC')
		
		});
	}
	});
