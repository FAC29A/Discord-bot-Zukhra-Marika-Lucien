const { Client, Intents } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    // Add more intents as needed, Empty array here after trial
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
