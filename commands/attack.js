const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('attack')
    .setDescription('Attack someone >_<')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Mention the user you wanna attack')
    .setRequired(true)),
    category: 'Fun',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user provided :/')

        let data = await axios.get(`https://nekos.best/api/v2/kick`);
        
        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> attacked <@${user.id}>`)
        .setImage(data.data.results[0].url)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        })
    }
}