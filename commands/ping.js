  
const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",

    async execute (message, args, cmd, client, Discord) {


        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}
