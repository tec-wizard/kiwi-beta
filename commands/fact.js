const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const axios = require("axios");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("fact")
    .setDescription("Gives you a random fact"),
  async execute(interaction) {
    data = await axios.get(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const fact = data.data;
    if (!fact)
      return interaction.reply(
        "Sorry, I couldn't get the fact. Try again later."
      );
    let factEmbed = new EmbedBuilder()
      .setTitle("A Fact")
      .setDescription(fact.text)
      .addFields({ name: "Source", value: fact.permalink, inline: true });

    await interaction.reply({
      embeds: [factEmbed],
    });
  },
};
