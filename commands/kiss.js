const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('Kiss someone :3')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Mention the user you wanna kiss :P')
    .setRequired(true)),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('Mention someone to kiss!');

        let data = await axios.get(`https://nekos.best/api/v2/kiss`);

        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> kissed <@${user.id}>`)
        .setImage(data.data.results[0].url)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        });
    }
};