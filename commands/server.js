const Discord = require("discord.js");

module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	guildOnly:'true',
	 execute(message) {
		msgEmbed = new Discord.MessageEmbed()
		.setColor('#f55742')
		.setThumbnail(message.guild.bannerURL({format:'webp',size:16}))
		.setTitle('Server Stats')
		.addFields(
			{name: 'Server Name', value: `${message.guild.name}`},
			{name: 'Server ID',value:`${message.guild.id}`},
			{name:'Server members',value:`${message.guild.memberCount}`},
			{name:'Created' , value:`${message.guild.createdAt}`},
			)
		
		
		message.channel.send(msgEmbed);
	},
};
