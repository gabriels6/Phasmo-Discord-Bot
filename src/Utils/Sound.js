const ytdl = require('ytdl-core');

function playAudioFromURL(ytURL,Client){
    

        const broadcast = Client.voice.createBroadcast();

        broadcast.play(ytdl(ytURL,{filter: 'audioonly'}));

        for (const connection of Client.voice.connections.values()) {
            connection.play(broadcast);

        
        }
}


module.exports = {
    playAudioFromURL
}