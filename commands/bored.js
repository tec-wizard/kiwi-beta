const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bored')
    .setDescription('im bored AF'),
    async execute(interaction) {
        let data = await axios.get(`https://nekos.best/api/v2/bored`);
        // console.log(data.data.results[0].url);
        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> is bored!`)
        .setImage(data.data.results[0].url)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        })
    }
}