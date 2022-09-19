const { letterTrans } = require("custom-translate");
const { SlashCommandBuilder } = require("discord.js");
const dictionary = {
  a: "🇦",
  b: "🇧",
  c: "🇨",
  d: "🇩",
  e: "🇪",
  f: "🇫",
  g: "🇬",
  h: "🇭",
  i: "🇮",
  j: "🇯",
  k: "🇰",
  l: "🇱",
  m: "🇲",
  n: "🇳",
  o: "🇴",
  p: "🇵",
  q: "🇶",
  r: "🇷",
  s: "🇸",
  t: "🇹",
  u: "🇺",
  v: "🇻",
  w: "🇼",
  x: "🇽",
  y: "🇾",
  z: "🇿",
  0: ":zero:",
  1: ":one:",
  2: ":two:",
  3: ":three:",
  4: ":four:",
  5: ":five:",
  6: ":six:",
  7: ":seven:",
  8: ":eight:",
  9: ":nine:",
  "?": "❓",
  "!": "❗",
  "#": "#⃣",
};
module.exports = {
  data: new SlashCommandBuilder()
    .setName("emojify")
    .setDescription("Emojify your text!")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("Give something to emojify")
        .setRequired(true)
    ),
    category: 'Fun',
  async execute(interaction) {
    let text = await interaction.options.getString("text");
    if (!text) return interaction.reply("No text provided :/");

    await interaction.reply({
      content: letterTrans(text.toLowerCase(), dictionary, " "),
    });
  },
};
