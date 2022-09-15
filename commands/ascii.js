const { SlashCommandBuilder } = require('discord.js');
const figlet = require('figlet');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('ascii')
    .setDescription('Convert text into ascii characters! :O')
    .addStringOption((option) => 
    option.setName('text')
    .setDescription('Gimme some text to convert!')
    .setRequired(true)),
    async execute(interaction) {
        let text = interaction.options.getString('text');
        if(!text) return interaction.reply('No text provided! :/');

        if(text.length > 20) {
            return interaction.reply(`Please put text that has 20 characters or less because the conversion won't be good!`)
        }
        figlet.text(text, {
            font: "",
        }, async(err,data) => {
            interaction.reply(`\`\`\`${data}\`\`\``)
        })
    }
}