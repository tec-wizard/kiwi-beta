const { SlashCommandBuilder } = require("discord.js");
const { Slots } = require('discord-gamecord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('slots')
    .setDescription('slots machine! high stakes high reward(jk dont gamble)'),
    category: 'Games',
    async execute(interaction) {
        new Slots({
            message: interaction,
            slash_command: true,
            embed: {
                title: '🎰 Slot Machine',
                color: '#5865F2'
            }
        }).startGame();
    }
}