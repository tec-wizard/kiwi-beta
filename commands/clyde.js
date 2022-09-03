const { SlashCommandBuilder, AttachmentBuilder } = require("discord.js");
const canvacord = require('canvacord');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('clyde')
    .setDescription('Make clyde say something :O')
    .addStringOption((option) => 
    option.setName('text')
    .setDescription('What do you want clyde to say? (doesnt support emojis!!!)')
    .setRequired(true)),
    async execute(interaction) {
        let text = interaction.options.getString('text');
        if(!text) return interaction.reply('No text provided :/')

        let res = '';
        if(text.length > 44) {
            res=text.slice(0,44)
            res+='..'
        } else {
            res=text
        }

        let image = await canvacord.Canvacord.clyde(res)

        let attachment = new AttachmentBuilder(image, { name: 'clyde.png' })

        await interaction.reply({
            files: [attachment]
        })

    }
}