const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const axios = require('axios')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('affirmation')
    .setDescription('Positive affirmations do help!'),
  async execute(interaction) {
    let data = await axios.get(`https://www.affirmations.dev/`)
    // console.log(data)

    let embed = new EmbedBuilder()
      .setDescription(`**${data.data.affirmation}**`)
      .setFooter({
        text: `Requested by - ${interaction.user.username}`
      })
    await interaction.reply({
      embeds: [embed]
    })
  }
}