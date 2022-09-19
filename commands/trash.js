const { Canvacord } = require("canvacord");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('trash')
    .setDescription('TRASH! BOO!')
    .addUserOption((option) =>
    option.setName('user')
    .setDescription('Who do you wanna throw in the trash can? :O')),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;


        await interaction.deferReply();
		await wait(2000);

        let avatar = user.displayAvatarURL();
        let image = await Canvacord.trash(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'trash.png' });

        await interaction.editReply({
            files: [attachment]
        })
    }
}