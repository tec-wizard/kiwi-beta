const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('updates')
    .setDescription('View the latest updates to the bot! :O'),
    category: 'Info',
    async execute(interaction) {
        let embed = new EmbedBuilder()
        .setDescription('**Last updated** - 21st September 2022')
        .addFields({
            name: 'v1.0.0 | bot made public', value: 'has a total of 49 working commands!'
        })
        .setFooter({
            text: 'Use `/help` to view all latest commands!'
        })

        await interaction.reply({
            embeds: [embed]
        })
    }
}