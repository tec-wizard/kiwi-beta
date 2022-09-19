const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const canvacord = require('canvacord');
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
        .setName('wantedbypolice')
        .setDescription('wanted by the police! 5 STARS!!!')
        .addUserOption((option) =>
        option.setName('user')
        .setDescription('Who is it gonna be? :c')),
        category: 'Image',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) user = interaction.user;
        // console.log(user)
        
        await interaction.deferReply();
		await wait(3100);
        let avatar = user.displayAvatarURL();
        let image = await canvacord.Canvacord.wanted(avatar)
        let attachment = new AttachmentBuilder(image, { name : 'w.png' })

        await interaction.editReply({
            files: [attachment]
        })
    }
}