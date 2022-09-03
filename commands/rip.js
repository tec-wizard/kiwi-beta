const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('rip')
    .setDescription('RIP! F')
    .addUserOption((option) =>
    option.setName('user')
    .setDescription('Who is it gonna be? :c')),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.rip(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'rip.png' })

        await interaction.reply({
            files: [attachment]
        })
    }
}