const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite link for the bot."),
    category: 'Info',
  async execute(interaction) {
    return interaction.reply(`Here you go - [Link](https://discord.com/api/oauth2/authorize?client_id=856512208170909726&permissions=2281818176&scope=bot%20applications.commands)`);
  },
};
