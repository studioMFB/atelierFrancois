import AudioPlayerManager from './audioPlayerManager.js';
export default class AudioPlayer {
    constructor() {
        const playlistDiv = document.getElementById("playlist");
        this.initAudioPlayer(playlistDiv);

        this.mAudioPlayerManager = new AudioPlayerManager();
    }

    getManager(){
        return this.mAudioPlayerManager;
    }
    
    initAudioPlayer(pPlaylistDiv) {

        let playlist = [{
                name: "Vivaldi - The Four Seasons - Summer",
                src: "../../assets/sounds/Vivaldi_The Four Seasons_Summer.mp3"
            },
            {
                name: "Nino Ferrer - Le Sud",
                src: "../../assets/sounds/Nino Ferrer_Le Sud.mp3"
            },  
            {
                name: "Farben",
                src: "../../assets/sounds/farben.mp3"
            },    
            {
                name: "A Tribe Called Quest - Check The Rhime",
                src: "../../assets/sounds/A Tribe Called Quest_Check The Rhime.mp3"
            },
            {
                name: "Robert Wyatt - At Last I Am Free",
                src: "../../assets/sounds/Robert Wyatt_At Last I Am Free.mp3"
            },
            {
                name: "Black Sabbath - Paranoid",
                src: "../../assets/sounds/Black Sabbath_Paranoid.mp3"
            },
            {
                name: "Drum sample",
                src: "../../assets/sounds/drum.mp3"
            },
            {
                name: "Sin wave 120Hz",
                src: "../../assets/sounds/sin_120Hz.wav"
            }
        ];

        for (let i = 0; i < playlist.length; ++i) {
            let row = document.createElement("div");
            row.className = "aRow";
            row.innerHTML = playlist[i]["name"];
            // row.style.cursor = "pointer";

            row.addEventListener("click", () => {
                this.mAudioPlayerManager.audioPlayerManager(i, playlist);
            });

            playlist[i]["row"] = row;
            pPlaylistDiv.appendChild(row);
        }
    }

}