const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('facepalm')
    .setDescription('bruh moment...facepalm')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('really nothing to say here.......')),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.facepalm(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'fp.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}