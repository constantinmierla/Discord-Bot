module.exports = {
    name: 'leave',
    description: 'opreste stiinta',
    async execute(message, args, cmd, client, Discord)
    {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send("teapa");
        await voiceChannel.leave();
        await message.channel.send('Nuuu :smiling_face_with_tear:')
    }
}
