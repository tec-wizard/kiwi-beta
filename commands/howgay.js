const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('howgay')
    .setDescription('Check how gay someone is')
    .addUserOption((option) =>
    option.setName('user')
    .setDescription('Mention someone to check :P')),
    category: 'Fun',
    async execute(interaction) {
        let user = await interaction.options.getUser('user');
        if(!user) user = interaction.user;

        // console.log(user)
		let Result = Math.floor(Math.random() * 101);

        // console.log(user.username)
        let embed = new EmbedBuilder()
        .setColor("BLURPLE")
        .setDescription(`<@${user.id}> Is ${Result}% Gay 🏳️‍🌈`)
        .setFooter({
            text: `Requested by ${interaction.user.username}`
        })
        .setTimestamp();

        await interaction.reply({
            embeds : [embed]
        })
    }
}