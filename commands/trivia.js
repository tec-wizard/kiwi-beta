const { Trivia } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('trivia')
    .setDescription('Play a game of trivia!'),
    category: 'Games',
    async execute(interaction) {
    // new Trivia({
    //     message: interaction,
    //     slash_command: true,
    //     embed: {
    //     title: 'Trivia',
    //     description: 'You have {time} seconds to respond!',
    //     color: '#5865F2',
    //     },
    //     difficulty: 'medium',
    //     winMessage: 'GG, Your answer was correct! It was **{answer}**',
    //     loseMessage: 'Your answer was Incorrect! The correct answer was **{answer}**',
    //     othersMessage: 'You are not allowed to use buttons for this message!',
    //     }).startGame();
    }
}