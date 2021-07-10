const Discord = require("discord.js");
const {items,items_ptbr,lightSource} = require('../Values/Equipment');
const {maps} = require('../Values/Maps');
const Number = require('../Utils/Number');
const Ghosts = require('../Values/Ghosts');
const ytdl = require('ytdl-core');
const {colors} = require('../Values/Colors');
const { help,
        randomizeMap,
        randomizeEquipment,
        getGhost } = require('../Routes/index');
require('dotenv').config({path:__dirname + '/../../.env'});

const prefix = "#";


const Client = new Discord.Client();

Client.on("ready", () => {
    Client.user.setActivity("Aguardando atividade, use #help para obter ajuda.");
});


Client.on("message", async function(message){

    var voiceChannel;

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");

    const command = args.shift().toLowerCase();

    if(command === "help"){
        await help(message);
    }

    if(command === "random-map"){
        await randomizeMap(message);
    }

    if(command === "random-equip"){

        randomizeEquipment(message,args);
    }

    /* Command do join voice channel */

    if(command === "join-voice-channel"){

        const voiceChannelName = args[0].replace("|"," ").replace("|"," ");
        const voiceChannelGuild = message.guild;

        if(args.length === 0){
            return;
        }

        var voiceChannelPromise;

        const voiceChannels = Client.channels.cache

        voiceChannels.map((voiceChannel) => {
            if(voiceChannel.guild.name !== voiceChannelGuild.name){
                return ;
            }

            if(voiceChannelName !== voiceChannel.name){
                return;
            }

            if(voiceChannel.type !== 'voice'){
                return;
            }

            if(voiceChannel === undefined){
                console.log("Voice Channel undefined");
                return;
            }

            

            voiceChannelPromise = Client.channels.fetch(voiceChannel.id);
        });

        if(voiceChannelPromise == undefined){
            return;
        }

        voiceChannel = await voiceChannelPromise

        voiceChannel.join();
        
    }

    if(command === "play"){
        const ytURL = args[0];

        if(args.length === 0){
            return;
        }

        const broadcast = Client.voice.createBroadcast();

        broadcast.play(ytdl(ytURL,{filter: 'audioonly'}));


  
        for (const connection of Client.voice.connections.values()) {
            connection.play(broadcast);
        }

    }

    if(command === "ghost"){

        let colorRange = [0,colors.length - 1];
        let ghostRange = [0,Ghosts.length - 1];
        const phantomName = args[0];
        let ghostData;

        if(args.length === 0){
            return;
        }

        if(phantomName === "random"){
            ghostData = Ghosts[Number.randomize(ghostRange,[999])];
        }

        Ghosts.forEach((ghost) => {
            if(ghost.name.toLowerCase() === phantomName.toLocaleLowerCase()){
                ghostData = ghost;
            }
        });

        if(ghostData == null) return;

        let randomColor = Number.randomize(colorRange,[999])

        var embed = new Discord.MessageEmbed()
                            .setTitle("Ghost Info")
                            .setDescription("Equipment and light source selection")
                            .setColor(colors[randomColor]);

        embed.addField("Nome",ghostData.name,false);
        embed.addField("Descrição",ghostData.description,false);
        embed.addField("Pontos Fortes",ghostData.Strengths,false);
        embed.addField("Fraquezas",ghostData.Weaknesses,false);

        ghostData.Evidences.forEach((evidence,index) => {
            embed.addField("Evidencia "+(index + 1),evidence,true);
        });

        message.channel.send(embed);

    }

    if(command === "leave"){


        const guild = message.guild;

        Client.channels.cache.forEach((channel) => {
            ChannelPromise = Client.channels.fetch(channel.id);

            ChannelPromise.then((channel) => {

                if(channel.type === 'voice' && channel.guild === guild){
                    channel.leave();
                }

            });
        });
    }
});
        


Client.login(process.env.BOT_TOKEN);