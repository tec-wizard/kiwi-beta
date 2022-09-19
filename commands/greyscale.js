const { Canvacord } = require("canvacord");
const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('greyscale')
    .setDescription('any GOT fans? no? thats alr')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('mention someone :c')),
    category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;

        let avatar = user.displayAvatarURL();
        let image = await Canvacord.greyscale(avatar);
        let attachment = new AttachmentBuilder(image, { name: 'gs.png' });

        await interaction.reply({
            files: [attachment]
        })
    }
}