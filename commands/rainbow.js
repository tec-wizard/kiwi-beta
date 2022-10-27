const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('rainbow')
    .setDescription('Rainbow!')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('who?')),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.rainbow(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'rainbow.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}