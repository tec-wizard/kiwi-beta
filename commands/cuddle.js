const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('cuddle')
    .setDescription('Cuddle with someone UwU')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Who do you wanna cuddle? :P')
    .setRequired(true)),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user provided :/');

        let data = await axios.get(`https://nekos.life/api/v2/img/cuddle`);
        // console.log(data)

        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> wants to cuddle with <@${user.id}>`)
        .setImage(data.data.url)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        })
    }
}