const canvacord = require('canvacord');
const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('jokeoverhead')
    .setDescription('joke over head?')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('who is it gonna be?')),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.jokeOverHead(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'joh.png' });

        await interaction.reply({
            files: [attachment]
        });
    }
}