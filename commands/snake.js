const { Snake } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('snake')
    .setDescription('play a game of snek!'),
    category: 'Games',
    async execute(interaction) {
        new Snake({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Snake',
              color: '#5865F2',
              overTitle: 'Game Over',
            },
            snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
            emojis: {
              board: '⬛', 
              food: '🍎',
              up: '⬆️', 
              right: '➡️',
              down: '⬇️',
              left: '⬅️',
            },
            foods: ['🍎', '🍇', '🍊'],
            stopButton: 'Stop',
            othersMessage: 'You are not allowed to use buttons for this message!',
          }).startGame();
    }
}