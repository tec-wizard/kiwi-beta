const { SlashCommandBuilder } = require('discord.js');
const { TicTacToe } = require('discord-gamecord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('tictactoe')
    .setDescription('Play a game of tictactoe w/ someone! :)')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('Who do you wanna play with?')
    .setRequired(true)),
    async execute(interaction) {
        let user = interaction.options.getUser('user');
        new TicTacToe({
        message: interaction,
        slash_command: true,
        opponent: user,
        embed: {
            title: 'Tic Tac Toe',
            overTitle: 'Game Over',
            color: '#5865F2',
        },
        oEmoji: '🔵',
        xEmoji: '❌',
        blankEmoji: '➖',
        oColor: 'PRIMARY',
        xColor: 'DANGER',
        waitMessage: 'Waiting for the opponent...',
        turnMessage: '{emoji} | Its now **{player}** turn!',
        askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
        cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
        timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
        drawMessage: 'It was a draw!',
        winMessage: '{emoji} | **{winner}** won the game!',
        gameEndMessage: 'The game went unfinished :(',
        }).startGame();
    }
}