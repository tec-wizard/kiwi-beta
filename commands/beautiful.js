const { Canvacord } = require("canvacord");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('beautiful')
    .setDescription('so beautiful! :O <3')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('mention someone :)')),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        await interaction.deferReply();
        await wait(3100);

        let avatar = user.displayAvatarURL();
        let image = await Canvacord.beautiful(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'beautiful.png' });

        await interaction.editReply({
            files: [attachment]
        })
    }
}