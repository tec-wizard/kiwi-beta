const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flip a coin!"),
    category: 'Fun',
  async execute(interaction) {
    const flip = ["heads", "tails", "heads", "tails", "heads", "tails"];
    let response = flip[Math.floor(Math.random() * flip.length)];
    let Embed = new EmbedBuilder()
      .setTitle(`Coin Flip`)
      .setDescription(`**${response}**`);
    interaction.reply({
      embeds: [Embed],
    });
  },
};
