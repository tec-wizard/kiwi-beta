const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
// const axios = require('axios');
const canvacord = require('canvacord')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('changemymind')
    .setDescription('Change my mind meme omg so cool!!!')
    .addStringOption((option) =>
      option.setName('text')
        .setDescription('Whats the text gonna be? (keep it short tho)')
        .setRequired(true)
    ),
    category: 'Image',
  async execute(interaction) {
    let text = await interaction.options.getString('text');
    if (!text) return interaction.reply('No text provided :/')

    let res = '';
        if(text.length > 35) {
            res=text.slice(0,35)
            res+='..'
        } else {
            res=text
        }
      
    // let data = await axios.get(`https://vacefron.nl/api/changemymind?text=${encodeURIComponent(text)}`)
    // console.log(data.config.data)

    let image = await canvacord.Canvacord.changemymind(res)

    let attachment = new AttachmentBuilder(image, { name: 'cmm.png' })

    // let embed = new EmbedBuilder()
    // .setTitle("change my mind")
    // .setImage()
    // .setFooter(`Requested by - ${interaction.user.username}`)

    await interaction.reply({
      files: [attachment]
      // embeds: [embed]
    })

  }
}