const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('yeet')
    .setDescription('Yeet someone you dont like! OwO')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Mention the person you wanna yeeeet')
    .setRequired(true)),
    category: 'Fun',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('Mention someone to yeet!');

        let data = await axios.get(`https://nekos.best/api/v2/yeet`);

        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> yeeted <@${user.id}>`)
        .setImage(data.data.results[0].url)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        });
    }
};