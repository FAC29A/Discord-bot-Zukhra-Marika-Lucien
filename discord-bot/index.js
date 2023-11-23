const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    // Intents.FLAGS.GUILDS,
    // Intents.FLAGS.GUILD_MESSAGES,
    // Add more intents as needed, Empty array here after trial
  ],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Message event listener
client.on("messageCreate", async (message) => {
  if (!message.author.bot) {
    try {
      const dmChannel = await message.author.createDM();
      dmChannel.send(`Echo ${message.content}`);
    } catch (error) {
      console.error("Error sending DM:", error);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
