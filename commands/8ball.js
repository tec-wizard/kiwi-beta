const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask the wise 8ball a question!")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("whats your question?")
        .setRequired(true)
    ),
  category: 'Fun',
  async execute(interaction) {
    const question = interaction.options.getString("question");
    if (!question) {
      return interaction.channel.send(`You did not specify your question!`);
    } else {
      let responses = [
        "Yes",
        "No",
        "Definitely",
        "Absolutely",
        "Not in a million years",
        "Never",
        "Perhaps",
        "IDC",
        "Don't ask me, I ain't a human !",
      ];
      let response = responses[Math.floor(Math.random() * responses.length)];
      let Embed = new EmbedBuilder()
        .setTitle(`8Ball!`)
        .setDescription(
          `Your question: **${question}**\n\nMy reply: **${response}**`
        )
        .setColor(`BLURPLE`);
      interaction.reply({
        embeds: [Embed],
      });
    }
  },
};
