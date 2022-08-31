const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('changemymind')
    .setDescription('Change my mind meme omg so cool!!!')
    .addStringOption((option) =>
      option.setName('text')
        .setDescription('Whats the text gonna be?')
        .setRequired(true)
    ),
  async execute(interaction) {
    let text = await interaction.options.getString('text');
    if (!text) return interaction.reply('No text provided :/')

    let data = await axios.get(`https://vacefron.nl/api/changemymind?text=${encodeURIComponent(text)}`)
    console.log(data)
    // let embed = new EmbedBuilder()
    // .setTitle("change my mind")
    // .setImage()
    // .setFooter(`Requested by - ${interaction.user.username}`)

    // await interaction.reply({
    //   embeds: [embed]
    // })
  }
}