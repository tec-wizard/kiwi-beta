const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reverse")
    .setDescription("Reverse the given text!")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("Enter your text! (p.s. doesnt support emojis!!!)")
        .setRequired(true)
    ),
    category: 'Fun',
  async execute(interaction) {
    let text = interaction.options.getString("text");
    if (!text) return interaction.reply("No text given :/");
    let data = await axios.get(
      `https://api.any-bot.tech/api/v1/fliptext?text=${encodeURIComponent(
        text
      )}`
    );
    let embed = new EmbedBuilder()
      .setDescription(`**Reversed text** - ${data.data.flipped}`)
      .setFooter({
        text: `Requested by - ${interaction.user.username}`,
      });
    await interaction.reply({
      embeds: [embed],
    });
  },
};
