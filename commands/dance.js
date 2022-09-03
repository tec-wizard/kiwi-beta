const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { EmbedBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('dance')
    .setDescription('Show them moves :D'),
    async execute(interaction) {
        let data = await axios.get(`https://nekos.best/api/v2/dance`);
        
        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> is in the groove!`)
        .setImage(data.data.results[0].url)
        .setTimestamp()

        return interaction.reply({
            embeds: [embed]
        })
    }
}