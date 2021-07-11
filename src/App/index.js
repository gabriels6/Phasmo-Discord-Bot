const Discord = require("discord.js");
const { help,
        randomizeMap,
        randomizeEquipment,
        getGhost,
        joinVoiceChannel,
        playSong,
        leaveChannel,
        playRandomSound,
        stopRandomSounds
     } = require('../Routes/index');
require('dotenv').config({path:__dirname + '/../../.env'});

const prefix = "#";


const Client = new Discord.Client();

Client.on("ready", () => {
    Client.user.setActivity("Aguardando atividade, use #help para obter ajuda.");
});


Client.on("message", async function(message){

    var voiceChannel;
    var soundInterval;

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");

    const command = args.shift().toLowerCase();
    switch(command){
        case "help":
                await help(message);
            break;
        case "random-map":
                await randomizeMap(message);
            break;
        case "random-equip":
                randomizeEquipment(message,args);
            break;


        case "join-voice-channel":
                voiceChannel = await joinVoiceChannel(message,args,Client);
            break;
        case "play":
                await playSong(message,args,Client);
            break;
        case "leave":
                await leaveChannel(message,args,Client);
            break;
        
        case "random-sounds":
                soundInterval = setInterval(function(){
                    playRandomSound(Client)
                },args[0]);
            break;

        case "stop-sounds":
                console.log(soundInterval)
                
                clearInterval(soundInterval);
            break;

        case "ghost":
                await getGhost(message,args);
            break;
        default: 
                message.reply("Command not found!");
    }

});

Client.on("disconnect", async (message) => {
    await leaveChannel(message,args,Client);
});
        


Client.login(process.env.BOT_TOKEN);