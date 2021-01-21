const Discord = require('discord.js');

const client = new Discord.Client();


const fs = require('fs');
const { cpuUsage } = require('process');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler => {
   require(`./handlers/${handler}`)(client, Discord);
})

client.snipes = new Map();
client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null

})
});
client.login('Nzk5OTg5MjgzNzUzNTU4MDM2.YALmFA.8oNXdtHcl9UcfqlGiJT-373t3KA');