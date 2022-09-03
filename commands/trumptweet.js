const { default: axios } = require("axios");
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('trumptweet')
    .setDescription('Tweet something as trump :O')
    .addStringOption((option) => 
    option.setName('text')
    .setDescription('What do you wanna tweet?')
    .setRequired(true)),
    async execute(interaction) {
        let text = interaction.options.getString('text');
        if(!text) return interaction.reply('No text provided :/')

        let res = '';
        if(text.length > 64) {
            res=text.slice(0,64)
            res+='...'
        } else {
            res=text
        }

        let data = await axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${encodeURIComponent(res)}`)
        
        // console.log(data)
        let embed = new EmbedBuilder()
        .setImage(data.data.message)
        .setFooter({
            text: `Requested by - ${interaction.user.username}`
        })
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        })
    }
}