const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite link for the bot."),
  async execute(interaction) {
    return interaction.reply(`Here you go - [Link](https://google.com)`);
  },
};
