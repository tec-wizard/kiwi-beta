const { Canvacord } = require("canvacord");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('trigger')
    .setDescription('TRIGGERED!!! someone is angy')
    .addUserOption((option) =>
    option.setName('user')
    .setDescription('Who is triggered? :/')),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        await interaction.deferReply();
        await wait(3100);

        let avatar = user.displayAvatarURL();
        let image = await Canvacord.trigger(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'trigger.gif' });

        await interaction.editReply({
            files: [attachment]
        })
    }
}