const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    execute(message, args, cmd, client, Discord){
        const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("Nu s-a sters niciun mesaj")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
}
