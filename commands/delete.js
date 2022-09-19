const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('delete')
    .setDescription('Delete someone from earth(jk dont do that)')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Who do you wanna delete?')
    .setRequired(true)),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user mentioned :/')

        let avatar = await user.displayAvatarURL()
        let image = await canvacord.Canvacord.delete(avatar, true)
        let attachment = new AttachmentBuilder(image, { name: 'delete.png' })

        await interaction.reply({
            files: [attachment]
        })
    }
}