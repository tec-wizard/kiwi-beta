const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('blur')
    .setDescription('Blur someone ;)')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Who do you wanna blur?')
    .setRequired(true)),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user mentioned :/')

        let avatar = await user.displayAvatarURL()
        let image = await canvacord.Canvacord.blur(avatar)
        let attachment = new AttachmentBuilder(image, { name: 'blur.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}