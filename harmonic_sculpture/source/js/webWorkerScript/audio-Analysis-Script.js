// // var i = 0;

// // function timedCount() {
// //   ++i;
// //   postMessage(i);
// //   // setTimeout("timedCount()",500);
// // }

// // timedCount();


// // self.addEventListener('message', function(e) {
// //   self.postMessage(e.data);
// // }, false);


// // self.onmessage = function(e) {
// //   console.log('Worker: Message received from Main.');

// //   const result = e.data[0] * e.data[1];

// //   if (isNaN(result)) {
// //     postMessage('Please write two numbers');
// //   } else {
// //     const workerResult = 'Result: ' + result;
// //     console.log('Worker: Posting message back to Main.');
// //     postMessage(workerResult);
// //   }
// // }

// // onconnect = function(e) {
// //   var port = e.ports[0];

// //   port.onmessage = function(e) {
// //     var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
// //     port.postMessage(workerResult);
// //   }
// // }

// let i = 0;
// function countNumbers() {
//     if(i < 100000) {
//         i = i + 1;
//         postMessage(i);
//     }

//     // Wait for sometime before running this script again
//     setTimeout("countNumbers()", 500);
// }
// countNumbers();


///////////////////////////////////////////////////////////////////////

/**
 * Adds hiss into each channel.
 *
 * @class AudioAnalysisScript
 * @extends AudioWorkletProcessor
 **/

class AudioAnalysisScript extends AudioWorkletProcessor {
    constructor() {
        super();
    }

    static get parameterDescriptors() {
        return [{
            name: "getByteFrequencyData",
            //   defaultValue: 0.2,
            //   minValue: 0,
            //   maxValue: 1
        }];
    }

    /**
     * Called by the browser's audio subsystem with
     * packets of audio data to be processed.
     *
     * @param[in] input    Array of inputs
     * @param[in] output   Array of outputs
     * @param[in] parameters   Parameters object
     *
     * `inputList` and `outputList` are each arrays of inputs
     * or outputs, each of which is in turn an array of `Float32Array`s,
     * each of which contains the audio data for one channel (left/right/etc)
     * for the current sample packet.
     *
     * `parameters` is an object containing the `AudioParam` values
     * for the current block of audio data.
     **/

    process(input, output, parameters) {
        // const analyser = parameters.getByteFrequencyData[0];
        // const sourceLimit = Math.min(inputList.length, outputList.length);

        let input = input[0];
        let output = output[0];
        // let channelCount = Math.min(input.length, output.length);

        // for (let channel = 0; channel < channelCount; channel++) {
        //     let sampleCount = input[channel].length;

        //     for (let i = 0; i < sampleCount; i++) {
        //       let sample = input[channel][i];

        // output[channel][i] = sample;
        //     }
        // }    

        output[0][0] = 222;

        return true;
    }
}

registerProcessor("audio-Analysis-Script", AudioAnalysisScript);