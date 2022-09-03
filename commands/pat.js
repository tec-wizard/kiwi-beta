const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pat')
    .setDescription('Pat someone for good deeds ;)')
    .addUserOption((option)=> 
    option.setName('user')
    .setDescription('Who do you wanna pat?')
    .setRequired(true)),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user provided :/');

        let data = await axios.get(`https://nekos.best/api/v2/pat`);

        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> patted <@${user.id}>`)
        .setImage(data.data.results[0].url)
        .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        })
    }
}