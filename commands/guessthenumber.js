const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle, ButtonBuilder } = require("discord.js");
const wait = require('node:timers/promises').setTimeout;
const numObj = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
};
const random = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
module.exports = {
    data: new SlashCommandBuilder()
    .setName('guessthenumber')
    .setDescription('Guess the number!'),
    category: 'Games',
    async execute(interaction) {
        await interaction.deferReply()
        const num = Math.floor(Math.random() * (random.length - 1) + 0);
        let embed = new EmbedBuilder()
        .setTitle('Guess the number')
        .setDescription('You have a total of 3 chances, the number is between 1-9!')
        .setFooter({
            text: 'Click on the buttons to guess!'
        })
        
        const row1 = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('one')
					.setLabel('1')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('two')
					.setLabel('2')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('three')
					.setLabel('3')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('four')
					.setLabel('4')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('five')
					.setLabel('5')
					.setStyle(ButtonStyle.Primary),
			);
            const row2 = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('six')
					.setLabel('6')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('seven')
					.setLabel('7')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('eight')
					.setLabel('8')
					.setStyle(ButtonStyle.Primary),
			)
            .addComponents(
				new ButtonBuilder()
					.setCustomId('nine')
					.setLabel('9')
					.setStyle(ButtonStyle.Primary),
			)

        
		await interaction.editReply({ embeds: [embed] , components: [row1, row2] });

        const filter = i => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 45000, max:3 });
        
        let guess_num = random[num];
        // console.log(guess_num)
        let num_words = numObj[guess_num];
        // console.log(num_words);
        chances=3
        collector.on('collect', async i => {
            chances=chances-1
            if(i.customId === num_words) {
                // await collector.stop()
                await i.deferUpdate()

                await interaction.editReply({ 
                    content: 'Correct! ✅ \nGame won!',
                    embeds: [],
                    components: [

                    ]
            });
            } else {
                await i.deferUpdate()
                
                let msg = await interaction.followUp('Incorrect! :x: \nYou have '+chances+' chances remaining!')
                await wait(3000);
                await msg.delete();
                
            }
        });

        collector.on('end', async() => {
            // await i.deferUpdate()
            await interaction.editReply({
                content: `Game over! Better luck next time :/ \nThe number was **${guess_num}** (_${num_words}_)!`,
                embeds: [],
                components: []
            })
        });
    }
}