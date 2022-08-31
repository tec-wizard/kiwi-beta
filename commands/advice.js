const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("advice")
    .setDescription("Free advice, take it or leave it!"),
  async execute(interaction) {
    data = await axios.get("https://api.adviceslip.com/advice");
    const advice = data.data.slip;
    if (!advice)
      return interaction.reply(
        "Sorry, I couldn't get the fact. Try again later."
      );
    let embed = new EmbedBuilder()
      .setTitle("Advice")
      .setDescription(advice.advice);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
