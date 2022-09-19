const { SlashCommandBuilder,EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('HELP'),
    category: 'Info',
    async execute(interaction) {
        const commands = await interaction.client.commands;
        // const prefix = await interaction.client.prefix(message)
        let emx = new EmbedBuilder()
            .setTitle("Help Menu")
            // .setDescription("Use " + prefix + "help `cmd_name` to get info about any command!")
            .setColor("5effcb")
            // .setFooter(interaction.client.user.username, interaction.client.user.displayAvatarURL())
            .setThumbnail(interaction.client.user.displayAvatarURL());

        let com = {};
        let comArray = Array.from(commands);
        // console.log(comArray)
        for (let comm of comArray) {
            // console.log(comm)
            let Category = comm[1].category || "Unknown";
            let name = comm[1].data.name;
            // console.log('name', name)

            if (!com[Category]) {
            com[Category] = [];
            }
            com[Category].push(name);
        }

        for(const [key, value] of Object.entries(com)) {
            let Category = key;

            let desc = "`" + value.join("`, `") + "`";

            emx.addFields({ name : `${Category.toUpperCase()}\t|\t${value.length}`, value : desc});
        }

        return interaction.reply({
            embeds: [emx]
        });
    }
}