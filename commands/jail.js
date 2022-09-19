const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('jail')
    .setDescription('Put someone behind bars >_<')
    .addUserOption((option) => 
    option.setName('target')
    .setDescription('Who should be jailed?')
    .setRequired(true)),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('target');
        if(!user) return interaction.reply('No user mentioned :/');

        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.jail(avatar, true);
        let attachment = new AttachmentBuilder(image, { name: 'jail.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}