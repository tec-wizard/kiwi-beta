const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('nickname')
    .setDescription('Set a new nickname for a user!')
    .addUserOption((option) =>
    option.setName('user')
    .setDescription('Mention the user you wanna the nickname of')
    .setRequired(true))
    .addStringOption((str) =>
    str.setName('nick')
    .setDescription('What do you want the nickname to be?')
    .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageNicknames),
    async execute(interaction) {
        let member = interaction.options.getMember('user');
        if(!member) return interaction.reply('No user provided');
        let nick = interaction.options.getString('nick');
        if(!nick) return interaction.reply('No nickname provided');


        member.setNickname(nick)
        await interaction.reply({
            content: 'Successfully changed the nickname!'
        })
    }
}