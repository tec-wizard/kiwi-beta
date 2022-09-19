const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('wasted')
    .setDescription('wasted! hah noob!! FeelsBadMan')
    .addUserOption((option) =>
    option.setName('user')
    .setDescription('Who is it gonna be? :c')),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.wasted(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'wasted.png' })

        await interaction.reply({
            files: [attachment]
        })
    }
}