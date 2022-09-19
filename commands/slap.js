const { Canvacord } = require('canvacord');
const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('Slap someone OwO')
    .addUserOption((option) =>
    option.setName('target')
    .setDescription('Who do you wanna slap?')
    .setRequired(true)),
    category: 'Fun',
    async execute(interaction) {
        let target = interaction.options.getUser('target');
        if(!target) return interaction.reply('No target specified :/');

        let user_av = interaction.user.displayAvatarURL();
        let target_av = target.displayAvatarURL();

        await interaction.deferReply();
        await wait(3100);

        let image = await Canvacord.slap(user_av, target_av);
        let attachment = new AttachmentBuilder(image, { name: 'slap.png' });

        return interaction.editReply({
            files: [attachment]
        });
    }
}