const { Spawn } = require("pokecord");
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
// const wait = require('node:timers/promises').setTimeout;
module.exports = {
	data: new SlashCommandBuilder()
	.setName('pokemon')
	.setDescription('Guess the pokemon!'),
	category: 'Fun',
	async execute(interaction) {
		const pokemon = await Spawn().catch(e => {
			console.log(e)
		});
    	if (!pokemon) return interaction.reply("Opps! Something went wrong :(")
		// await interaction.deferReply()
		const embed = new EmbedBuilder()
        .setTitle("Guess the pokemon")
        .setColor("#FFFF00")
        .setImage(pokemon.imageURL)
		.setFooter({
			text: 'Type your guess! You have 20 seconds. (dont google 😒)'
		});

		// const buttonRow = new ActionRowBuilder()
		// 	.addComponents(
		// 		new ButtonBuilder()
		// 			.setCustomId('primary')
		// 			.setLabel('Guess')
		// 			.setStyle(ButtonStyle.Primary),
		// 	);

		const filter = u => {
			return u.author.id === interaction.user.id;
		}
    	await interaction.reply({
			embeds: [embed],
			// components: [buttonRow]
		}).then(() => {
			interaction.channel.awaitMessages({ filter, max: 1, time: 20000, errors: ['time'] })
			.then(collected => {
				if(collected.first().content.toLowerCase() === pokemon.name.toLowerCase()) {
					interaction.followUp('Correct! ✅')
				} else {
					interaction.followUp('Incorrect! :x: The answer was '+`**${pokemon.name}**`)
				}
			})
			.catch(collected => {
				interaction.followUp('Looks like nobody got the answer this time.');
			});
		})







		// const modal = new ModalBuilder()
		// 	.setCustomId('pokeGuess')
		// 	.setTitle('Guess the Pokemon');

		// const nameGuess = new TextInputBuilder()
		// 	.setCustomId('nameInput')
		    
		// 	.setLabel("What's the name of the pokemon?")
		    
		// 	.setStyle(TextInputStyle.Short);


		// const firstActionRow = new ActionRowBuilder().setComponents(nameGuess);

		// modal.addComponents(firstActionRow);

		// // await wait(20000);
		// await interaction.showModal(modal);



		// const guess = interaction.fields.getTextInputValue('nameInput');
		// if(guess.toLowerCase() === pokemon.name.toLowerCase()) {
		// 	return interaction.followUp('Correct!')
		// }

	}
}