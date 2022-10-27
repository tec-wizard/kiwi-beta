const { SlashCommandBuilder } = require('discord.js');
const TMath = require("tmath");
module.exports = {
    data: new SlashCommandBuilder()
    .setName('calculator')
    .setDescription('yep.. a calculator..'),
    async execute(interaction) {

        const calculator = new TMath({
            destroy: "calculator cant be used!", // Optional, default is "Calculator Locked"
            invalid: "invalid input!", // Optional, default is "Invalid Calculation"
            notOwner: "you cant use this calculator! sowwy", // Optional, default is "Only the author can use the calculator! Run the command to create you're own."
            deactivateMessage: "calculator has been disabled.", // Optional, default is "The Calculator got deactivated"
            deactivateTimeout: "10m", // optional, default are 10 minutes
            request: interaction, // A Interaction or Message
            user: interaction.user // Required, the user who called the request
        });

        // Replying with the calculator setup
        const reply = calculator.getReply();
        const message = await interaction.reply(reply); // or channel.send, message.reply, etc

        // Handling the calculations
        calculator.handle(message);
    }
}