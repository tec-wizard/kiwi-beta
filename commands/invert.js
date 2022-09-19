const { Canvacord } = require("canvacord");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('invert')
    .setDescription('Invert the colors of someone\'s avatar!')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Mention someone to invert the colors :)')),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await Canvacord.invert(avatar);
        let attachment = new AttachmentBuilder(image, { name : 'invert.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}