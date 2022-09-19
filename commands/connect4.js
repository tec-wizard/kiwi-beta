const { SlashCommandBuilder } = require('discord.js');
const { Connect4 } = require('discord-gamecord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('connect4')
    .setDescription('Play a game of connect4 w/ someone!')
    .addUserOption((option) => 
    option.setName('opponent')
    .setDescription('Who do you wanna play with?')
    .setRequired(true)),
    category: 'Games',
    async execute(interaction) {
        let user = interaction.options.getUser('opponent');
        if(!user) return interaction.reply('Mention someone! :/');
        new Connect4({
            message: interaction,
            slash_command: true,
            opponent: user,
            embed: {
              title: 'Connect 4',
              color: '#5865F2',
            },
            emojis: {
              player1: '🔵',
              player2: '🟡'
            },
            waitMessage: 'Waiting for the opponent...',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{winner}** won the game!',
            gameEndMessage: 'The game went unfinished :(',
            drawMessage: 'It was a draw!',
            othersMessage: 'You are not allowed to use buttons for this message!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Connect 4!',
            cancelMessage: 'Looks like they refused to have a game of Connect4. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
          }).startGame()
    }
}