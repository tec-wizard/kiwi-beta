const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('blush')
    .setDescription('awwwww you are blushing'),
    async execute(interaction) {
        let data = await axios.get(`https://purrbot.site/api/img/sfw/blush/gif`);

        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> is turning red!`)
        .setImage(data.data.link)
        .setTimestamp()

        await interaction.reply({
            embeds : [embed]
        })
    }
}