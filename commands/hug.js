const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Hug someone awwwwww')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Mention the user you wanna hug <3')
    .setRequired(true)),
    category: 'Fun',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('Mention someone to hug!');

        let data = await axios.get(`https://nekos.best/api/v2/hug`);

        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> hugged <@${user.id}>`)
        .setImage(data.data.results[0].url)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        });
    }
};