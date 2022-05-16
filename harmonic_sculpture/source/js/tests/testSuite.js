// Performance timer
import {
    startTimer
} from "./test_util.js";
import {
    endTimer
} from "./test_util.js";
import {
    calculateExecutionTime
} from "./test_util.js";
// Date and Time
import {
    getCurrentDate
} from "./test_util.js";
import {
    getCurrentTime
} from "./test_util.js";
// Matrix
import {
    generateMatrix
} from "./test_util.js";
import {
    implementMatrix
} from "./test_util.js";
// Table
import {
    createTable
} from "./test_util.js";
import {
    implementTable
} from "./test_util.js";
// .CSV
import {
    exportTableToCSV
} from "./test_util.js";

const COLUMNS = 5;
const ROWS = 10;
const PASS = "pass";
const FAIL = "fail";
const N_A = "n/a";

export default class TestSuite {
    constructor(pTestWindow) {
        this.mTestWindow = pTestWindow
        this.mTestWindow.document.write("<p>Test Suite</p>");
        this.mMatrix = generateMatrix(ROWS, COLUMNS);
        this.mLog = [];
    }

    setAudioAnalysisDataInByte(pAudioDataInByte) {
        this.mAudioDataInByte = pAudioDataInByte;
    }
    getAudioAnalysisDataInByte() {
        return this.mAudioDataInByte;
    }
    setAudioAnalysisDataInFloat(pAudioDataInFloat) {
        this.mAudioDataInFloat = pAudioDataInFloat;
    }
    getAudioAnalysisDataInFloat() {
        return this.mAudioDataInFloat;
    }
    setFramerate(pFramrate) {
        this.mFramrate = pFramrate;
    }
    getFramerate() {
        return this.mFramrate;
    }

    // -- Output --
    writeToTable(pTestWindow, pMatrix) {
        const table = createTable(pTestWindow);
        implementTable(table, pMatrix, pTestWindow);
    }
    tableToCsv(pFilename, pTestWindow, pMatrix, pRows, pColumns) {
        exportTableToCSV(pFilename, pTestWindow, pMatrix, pRows, pColumns);
    }

    initialiseTest(pTestId) {
        const currentDate = getCurrentDate();
        const currentTime = getCurrentTime();
        return [pTestId, currentDate, currentTime];
    }

    // -- TestSuite --
    run() {
        let startTime, endTime;
        let pass;
        let rowIndex = 0;

        startTime = startTimer();
        pass = this.test_perform_FFT_while_audio_playing_and_collect_amplitude_of_frequency_in_byte("1.2", this.getAudioAnalysisDataInByte());
        endTime = endTimer();
        this.mLog.push(pass);
        this.mLog.push(calculateExecutionTime(startTime, endTime));
        this.mMatrix = implementMatrix(this.mMatrix, rowIndex++, this.mLog);

        // startTime = startTimer();
        // pass = this.test_perform_FFT_while_audio_playing_and_collect_amplitude_of_frequency_in_float("1.2", this.getAudioAnalysisDataInFloat());
        // endTime = endTimer();
        // this.mLog.push(pass);
        // this.mLog.push(calculateExecutionTime(startTime, endTime));
        // this.mMatrix = implementMatrix(this.mMatrix, rowIndex++, this.mLog);

        startTime = startTimer();
        pass = this.test_average_framerate_above_60Fps_with_1000_geometry_objects("5.1", this.getFramerate())
        endTime = endTimer();
        this.mLog.push(pass);
        this.mLog.push(calculateExecutionTime(startTime, endTime));
        this.mMatrix = implementMatrix(this.mMatrix, rowIndex++, this.mLog);

        // Save
        this.writeToTable(this.mTestWindow, this.mMatrix);
        this.tableToCsv("testsToCsv", this.mTestWindow, this.mMatrix, ROWS, COLUMNS);
    }

    // -- Tests --
    test_perform_FFT_while_audio_playing_and_collect_amplitude_of_frequency_in_byte(pId, pAudioData) {
        this.mLog = this.initialiseTest(pId);
        const threshold = 0; // No audio
        const max = 255; // Refers to Max decibel
        const range = [threshold, max];
        for (const amplitude in pAudioData) {
            if (amplitude > range[0] && amplitude <= range[1]) {
                return PASS;
            } else if (amplitude < range[0] || amplitude > range[1]) {
                return N_A;
            }
        }
        return FAIL;
    }

    // test_perform_FFT_while_audio_playing_and_collect_amplitude_of_frequency_in_float(pId, pAudioData) {
    //     this.mLog = this.initialiseTest(pId);
    //     const threshold = "-infinity"; // No audio
    //     for (const amplitude in pAudioData) {
    //         if (amplitude != threshold) {
    //             return PASS;
    //         }
    //     }
    //     return FAIL;
    // }

    test_average_framerate_above_60Fps_with_1000_geometry_objects(pId, pFramrate) {
        this.mLog = this.initialiseTest(pId);
        const threshold = 60; // fps
        if (pFramrate >= threshold) {
            return PASS;
        }
        return FAIL;
    }

}
