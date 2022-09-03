const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('hitler')
    .setDescription('WORSE THAN HITLER!!!')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Who is worse than hitler?')
    .setRequired(true)),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user mentioned :/')

        let avatar = await user.displayAvatarURL()
        let image = await canvacord.Canvacord.hitler(avatar)
        let attachment = new AttachmentBuilder(image, { name: 'hitler.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}