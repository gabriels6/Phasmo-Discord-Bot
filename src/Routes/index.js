const Discord = require("discord.js");
const {items,lightSource} = require('../Values/Equipment');
const Number = require('../Utils/Number');
const Ghosts = require('../Values/Ghosts');
const {colors} = require('../Values/Colors');
const Sounds = require('../Values/Sounds');
const {maps} = require('../Values/Maps');
const { playAudioFromURL } = require('../Utils/Sound');


let active = false;

async function help(message){
    var embed = new Discord.MessageEmbed()
                        .setTitle("PhasmoPhobia Bot Helper")
                        .setDescription("See commands Here")
                        .setColor("#42a7f5");
        
        embed.addFields({name: "#random-equip <player_name>,[<player_name2>],[<playername3>],... <equipment_amount>", value:"Get Random Equipment from playername", inline:false});
        embed.addFields({name: "#random-map", value:"Get Random Map", inline:false});
        embed.addFields({name: "#ghost <phantom_name>", value:"Get ghost info", inline:false});


        message.channel.send(embed);
}

async function randomizeMap(message){
    let Range = [0,maps.length - 1];
    let usedValues = [999];

        let randomValue = Number.randomize(Range,usedValues);

        var embed = new Discord.MessageEmbed()
                        .setTitle("Selected Map")
                        .setDescription(maps[randomValue])
                        .setColor("#00fffb");

        message.channel.send(embed);
}

async function randomizeEquipment(message,args){
    const playerNames = args[0].split(",");
        const equipmentsInLoadout = args[1] || 3;
        let usedValues = [999]
        let usedColors = [999]

        
        playerNames.forEach((playerName) => {
            let Range = [0,items.length - 1];
            let colorRange = [0,colors.length - 1]
    
            
            let randomValue = Number.randomize(Range,usedValues);
            let randomColor = Number.randomize(colorRange,usedColors);
    
            usedColors.push(randomColor);
            usedValues.push(randomValue);
    
    
            var embed = new Discord.MessageEmbed()
                            .setTitle(playerName + "'s loadout")
                            .setDescription("Equipment and light source selection")
                            .setColor(colors[randomColor]);
    
            for(let cont_equipment = 1;cont_equipment <= equipmentsInLoadout;cont_equipment++){
                randomValue = Number.randomize(Range,usedValues);
                usedValues.push(randomValue);

                embed.addFields({name: "Equipment "+cont_equipment+": ", value:items[randomValue], inline:false});
            }

        
    
            Range = [0,lightSource.length - 1]
    
            randomValue = Number.randomize(Range,usedValues);
    
            embed.addFields({name: "Light Source: ", value:lightSource[randomValue], inline:false});
    
            message.channel.send(embed);
        });

    }

    async function getGhost(message, args){
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

    async function joinVoiceChannel(message,args, Client){
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

        return voiceChannel;
        
    }

    async function playSong(message, args, Client){
        const ytURL = args[0];

        if(args.length === 0){
            return;
        }

        playAudioFromURL(ytURL,Client);

    }

    async function playRandomSound(message,args,Client){

        let soundIntervalTime = parseInt(args[0]);

        let soundRange = [0,Sounds.length - 1];

        active = true
        setTimeout(() => {
            if(active){
            
                let randomNumber = Number.randomize(soundRange,[999]);

                let Sound = Sounds[randomNumber];

                playAudioFromURL(Sound,Client);
                playRandomSound(message,args,Client);
            
                console.log(soundIntervalTime * 1000);
            }
        }, soundIntervalTime * 1000);

    }

    async function stopRandomSounds(){
        active = false;
    }

    async function leaveChannel(message,args,Client){
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

    module.exports = {
        help,
        randomizeMap,
        randomizeEquipment,
        getGhost,
        joinVoiceChannel,
        playSong,
        leaveChannel,
        playRandomSound,
        stopRandomSounds
    }