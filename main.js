const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

const fs = require('fs');
const { cpuUsage } = require('process');


client.commands=new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
    const command = require (`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('mierlaesefulmeu is online!');
});




client.on('message', message => {
     if (!message.content.startsWith(prefix) || message.author.bot) return ;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();

  
     if (command === 'play')
     {
         client.commands.get('play').execute(message, args);
     } else  if (command === 'leave')
     {
         client.commands.get('leave').execute(message, args);
     }
     else if (command === 'linkinfo')
     {
         client.commands.get('linkinfo').execute(message, args);
     }
     else if (command ==='plagiat')
     {
        client.commands.get('plagiat').execute(message, args);
     } else if (command === 'haz')
     {
         client.commands.get('haz').execute(client,message,args);
     } else if (command === 'snipe')
     {
         client.commands.get('snipe').execute(client,message,args);
     }
     else if (command ==='nota10')
     {
        client.commands.get('nota10').execute(message, args);
     }  else if (command ==='luni')
     {
        client.commands.get('luni').execute(message, args);
     } else if (command ==='marti')
     {
        client.commands.get('marti').execute(message, args);
     } else if (command ==='miercuri')
     {
        client.commands.get('miercuri').execute(message, args);
     } else if (command ==='joi')
     {
        client.commands.get('joi').execute(message, args);
     } else if (command ==='vineri')
     {
        client.commands.get('vineri').execute(message, args);
     } else if (command ==='ore')
     {
        client.commands.get('ore').execute(message, args);
     } else if (command =='iacobeni')
     {
        client.commands.get('iacobeni').execute(message, args);
     } 
     try {
        client.commands.get(command).run(client, message, args);

    } catch (error){
    }
     
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