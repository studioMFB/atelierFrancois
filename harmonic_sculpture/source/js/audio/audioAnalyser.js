export default class AudioAnalyser {
    constructor() {
        // this.initAudioElements();
        this.mAudioContext;
        this.mAudio;
        this.mSource = document.getElementById("audioSource");
    }

    getAudioContext() {
        return this.mAudioContext;
    }

    getAudio() {
        return this.mAudio;
    }
    setAudioSource(pSrc) {
        this.mAudio.src = pSrc;
    }

    assignNewSource(pNewSource){
        this.mSource = pNewSource
    }
    setSource(pSrc) {
        return this.mSource.src = pSrc;
    }
    getSource() {
        return this.mSource;
    }

    performFrequencyDataInByte(){
        this.mAnalyser.getByteFrequencyData(this.mFrequencyDataInByte);
        return this.mFrequencyDataInByte;
    }
    // getFrequencyDataInByteArray(){
    //     return this.mFrequencyDataInByte;
    // }  
    getFrequencyDataInByteAtIndex(pIndex){
        return this.mFrequencyDataInByte[pIndex];
    }
    getFrequencyBufferLength(){
        return this.mFrequencyBufferLength;
    }

    initAudioElements() {
        if (!this.mAudioContext) {
            try {
                this.mAudioContext = new AudioContext();
            } catch (e) {
                console.log("** Error: Unable to create audio context");
                return null;
            }
        }
        if (!this.mAudio) {
            try {
                this.mAudio = new Audio();
            } catch (e) {
                console.log("** Error: Unable to create audio");
                return null;
            }
        }
    }

    analyse() {
        //Create an audio analyser.
        this.mAnalyser = this.mAudioContext.createAnalyser();

        // Connect the source to the analyser.
        // and back to the context's destination.
        this.mSource.connect(this.mAnalyser);
        // this.mSource.connect(this.mAudioContext.destination);
        this.mAnalyser.connect(this.mAudioContext.destination);

        //mAnalyser.fftSize = 256;
        // Print analysed frequencies.
        this.mFrequencyBufferLength = this.mAnalyser.frequencyBinCount;
        this.mFrequencyDataInByte = new Uint8Array(this.mFrequencyBufferLength);
        // mTimeDomainDataInByte = new Uint8Array(frequencyBufferLength);
        // mTimeDomainDataInFloat = new Float32Array(frequencyBufferLength);
    }

    calculateAmplitudeAverage(pRangeMin, pRangeMax) {
        // Update the frequencyData array with the latest frequency data.

        // const frequencyDataInByte = mAudioPlayer.getManager().getFrequencyDataInByte();

        let average = 1;
        for (let i = pRangeMin; i < pRangeMax; ++i) {
            average += this.mFrequencyDataInByte[i];
        }
        if (average > 1) {
            average = average / this.mFrequencyBufferLength;
        }
        return average;
    }

}