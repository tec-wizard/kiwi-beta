const { SlashCommandBuilder } = require("discord.js");
const { Fun, Image } = require('../../discordjsbot-commands');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('nothing to say really......'),
    async execute(interaction) {
        let data = await Fun.randomuser();
        // await interaction.reply(data)
    }
}