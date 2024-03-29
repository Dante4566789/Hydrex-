

/**const {Client , IntentsBitField} = require('discord.js');

const clients = new Client({
    intents : [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,

    ]
})

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});
*/

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const {token} = require("./config/config.json");


// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("PeggyClose" , message =>{
    if(message.content = "il cucciolo"){
        message.reply("Di Peggy");

    }else{
        console.log("Unlucky");
    }
})//peggy close


//read and load file in commands directory
const commandsFile = require("./commands/");
    for(const file of commandsFile){
        const commandsName = file.split(".")[0];// prende il nome del file prima del .js
        console.log("Loading Event" + commandsFile);
        const command = require(`./commands/${file}`)
    }

//read and load file in events directory
const eventsFile = readdirSync("./events/");
    for(const file of eventsFile){
        const eventName = file.split(".")[0];
        console.log(`Loading Event ${eventName}` );
        const event = require(`./events/${file}`);
        client.on(eventName, event.bind(null, client));

    }



// Log in to Discord with your client's token

client.login(token);
