const { EmbedBuilder } = require("@discordjs/builders");
const { default: axios } = require("axios");
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('lick')
    .setDescription('Lick someone UwU')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Who do you wanna lick? :P')
    .setRequired(true)),
    category: 'Fun',
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        if(!user) return interaction.reply('No user provided :/')

        let data = await axios.get(`https://purrbot.site/api/img/sfw/lick/gif`);
        // console.log(data.data.link)
        let embed = new EmbedBuilder()
        .setDescription(`<@${interaction.user.id}> licked <@${user.id}>`)
        .setImage(data.data.link)
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        })
    }
}