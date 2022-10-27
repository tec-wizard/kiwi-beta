const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('bed')
    .setDescription('sleep with someone! OwO')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('who do you wanna sleep with?')
    .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        let user = interaction.user;
        if(!user) return interaction.reply(`Error!`);

        let target = interaction.options.getUser('user');
        if(!target) return interaction.reply(`Error!`);

        let user_av = user.displayAvatarURL();
        let target_av = target.displayAvatarURL();
        let image = await canvacord.Canvacord.bed(user_av, target_av);
        let attachment = new AttachmentBuilder(image, { name: 'bed.png' });

        await interaction.editReply({
            files: [attachment]
        })
    }
}