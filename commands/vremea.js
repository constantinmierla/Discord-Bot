const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "vremea",
    description: "Checks a weather forecast",

    async execute (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('specifică locația')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Vremea în ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Ora', `UTC${location.timezone}`, true)
        .addField('Grade', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Vânt', current.winddisplay, true)
        .addField('Se simte ca', `${current.feelslike}°`, true)
        .addField('Umiditate', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }
}