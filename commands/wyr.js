const { WouldYouRather } = require('discord-gamecord');
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('wouldyourather')
    .setDescription('Would You Rather?'),
    category: 'Fun',
    async execute(interaction) {
        new WouldYouRather({
            message: interaction,
            slash_command: true,
            embed: {
              title: 'Would You Rather?',
              color: '#5865F2',
            },
            thinkMessage: '**Hmmmm. Lets see**',
            buttons: { option1: 'Choice 1', option2: 'Choice 2' },
            othersMessage: 'You are not allowed to use buttons for this message!',
          }).startGame();
    }
}