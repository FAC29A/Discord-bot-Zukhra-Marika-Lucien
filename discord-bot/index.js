const { Client, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    // Add more intents as needed, Empty array here after trial
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Message event listener
client.on("messageCreate", (message) => {
  // Ignore messages from bots to prevent infinite loops
  if (message.author.bot) return;

  // Your message handling code goes here
  if (message.content.toLowerCase() === "ping") {
    message.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
