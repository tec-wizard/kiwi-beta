const { RockPaperScissors } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('rps')
    .setDescription('play a game of rps w/ someone! :)')
    .addUserOption((option) => 
    option.setName('user')
    .setDescription('who do u wanna play with?')
    .setRequired(true)),
    async execute(interaction) {
        new RockPaperScissors({
            message: interaction,
            slash_command: true,
            opponent: interaction.options.getUser('user'),
            embed: {
              title: 'Rock Paper Scissors',
              description: 'Press a button below to make a choice!',
              color: '#5865F2',
            },
            buttons: {
              rock: 'Rock',
              paper: 'Paper',
              scissors: 'Scissors',
            },
            emojis: {
              rock: '🌑',
              paper: '📃',
              scissors: '✂️',
            },
            othersMessage: 'You are not allowed to use buttons for this message!',
            chooseMessage: 'You choose {emoji}!',
            noChangeMessage: 'You cannot change your selection!',
            askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Rock Paper Scissors!',
            cancelMessage: 'Looks like they refused to have a game of Rock Paper Scissors. \:(',
            timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
            drawMessage: 'It was a draw!',
            winMessage: '{winner} won the game!',
            gameEndMessage: 'The game went unfinished :(',
          }).startGame();
    }
}