import * as dat from '../../../library/libs/dat.gui.module.js';

import AudioAnalyser from './audioAnalyser.js';

export default class AudioPlayerManager {
    constructor() {
        this.mPlayer = document.getElementById("player");
        this.mPlayButton = document.getElementById("playButton");
        this.mPauseButton = document.getElementById("pauseButton");

        this.mIsAudioPlaying = false;

        this.mMedia = new WeakMap();
        this.mAudioAnalyser = new AudioAnalyser();
        this.mGui = new dat.GUI();
    }

    // Analyser
    getAnalyser(){
        return this.mAudioAnalyser;
    }

    getAudioContext() {
        return this.mAudioAnalyser.getAudioContext();
    }

    getAudio() {
        return this.mAudioAnalyser.getAudio();
    }
    setAudioSource(pSrc) {
        this.mAudioAnalyser.setAudioSource(pSrc);
    }

    assignNewSource(pNewSource){
        this.mAudioAnalyser.assignNewSource(pNewSource)
    }
    setSource(pSrc) {
        return this.mAudioAnalyser.setSource(pSrc);
    }
    getSource() {
        return this.mAudioAnalyser.getSource();
    }

    performFrequencyDataInByte(){
        return this.mAudioAnalyser.performFrequencyDataInByte();
    }
    getFrequencyDataInByteAtIndex(pIndex){
        return this.mAudioAnalyser.getFrequencyDataInByteAtIndex(pIndex);
    }
    // getFrequencyDataInByteArray(){
    //     return this.mAudioAnalyser.getFrequencyDataInByteArray();
    // }
    getFrequencyBufferLength(){
        return this.mAudioAnalyser.getFrequencyBufferLength();
    }
    calculateAmplitudeAverage(pRangeMin, pRangeMax){
        return this.mAudioAnalyser.calculateAmplitudeAverage(pRangeMin, pRangeMax);
    }
    //

    getControlsPanelSplitData(){
        return this.mControlsPanel.split;
    }

    isAudioPlaying(){
        return this.mIsAudioPlaying;
    }

    audioPlayerManager(pIndex, pPlaylist) {
        this.mAudioAnalyser.initAudioElements();
        this.setAudioSource(pPlaylist[pIndex]["src"]);

        for (let i = 0; i < pPlaylist.length; ++i) {
            if (i == pIndex) {
                pPlaylist[i]["row"].classList.add("now");
            } else {
                pPlaylist[i]["row"].classList.remove("now");
            }
        }

        this.setSource(pPlaylist[pIndex]["src"]);

        if (this.mMedia.has(this.getAudio())) {
            this.assignNewSource(this.mMedia.get(this.mAudioAnalyser.getAudio()));
        } else {
            this.assignNewSource(this.mAudioAnalyser.getAudioContext().createMediaElementSource(this.getAudio()));
            this.mMedia.set(this.getAudio(), this.getSource());
        }

        this.mAudioAnalyser.analyse();
        this.initControlsPanel();
        this.controlPlayer();
    };

    controlPlayer() {
        this.mPauseButton.style.visibility = "hidden";
        this.mPlayButton.style.visibility = "visible";

        const player = this.mPlayer;
        const playButton = this.mPlayButton;
        const pauseButton = this.mPauseButton;
        const audioAnalyser = this.mAudioAnalyser;
        let isAudioPlaying = this.mIsAudioPlaying;
        const thisTemp = this;

        player.onclick = function yes() {

            if (player.classList.contains("playerPlay")) {
                playButton.style.visibility = "hidden";
                pauseButton.style.visibility = "visible";
                player.classList.remove("playerPlay");
                player.classList.add("playerPause");
                audioAnalyser.getAudio().play();
                thisTemp.mIsAudioPlaying = true;
            } else {
                playButton.style.visibility = "visible";
                pauseButton.style.visibility = "hidden";
                player.classList.remove("playerPause");
                player.classList.add("playerPlay");
                audioAnalyser.getAudio().pause();
                thisTemp.mIsAudioPlaying = false;
            }
        };   
    }

    /* UI PANEL. Only visible when audio starts */
    initControlsPanel() {
        this.mControlsPanel = new function () {
            this.split = 1;
        }
        this.addOptionsToControlPanel();
    }

    addOptionsToControlPanel() {
        // Set Frequency split slider max + start value.
        if (this.mGui.__controllers.length == 0) {
            this.mGui.add(this.mControlsPanel, 'split').name("frequency Split").min(1).max(this.getFrequencyBufferLength()).step(1);
        }
    }

}