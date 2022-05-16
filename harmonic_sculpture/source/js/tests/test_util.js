const ONE_SECOND = 1000;
const PASS = "pass";
const FAIL = "fail";
const N_A =  "N/A";

// -- Performance Timer --
export function startTimer() {
    const startTime = performance.now();
    return startTime;
}
export function endTimer() {
    const endTime = performance.now();
    return endTime;
}
export function calculateExecutionTime(pStartTime, pEndTime) {
    let executionTime = pEndTime - pStartTime;
    // convert to seconds.
    executionTime *= ONE_SECOND;

    return executionTime.toFixed(2);
}

// -- Date and Time --
export function getCurrentDate() {
    const newDate = new Date();
    const currentDate = newDate.getDate() + "/" +
        (newDate.getMonth() +1) + "/" +
        newDate.getFullYear();

    return currentDate;
}
export function getCurrentTime() {
    const newDate = new Date();
    const currentTime = newDate.getHours() + ":" +
        newDate.getMinutes() + ":" +
        newDate.getSeconds();

    return currentTime;
}

// -- Matrix --
export function generateMatrix(pRows, pColumns) {
    let matrix = new Array(pRows);
    // create 2D array using 1D array
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(pColumns);
    }
    return matrix;
}
export function implementMatrix(pMatrix, pRow, pLog) {
    for (let column = 0; column < pLog.length; ++column) {
        pMatrix[pRow][column] = pLog[column];
    }
    return pMatrix;
}

// -- Table --
export function createTable(pTestWindow) {
    const table = pTestWindow.document.createElement('table');
    // table.align = "center";
    table.border = "2";
    table.style.fontFamily = "Consolas, monaco, monospace";

    const header = ["ID", "Date", "Time", "Result", "Execution Time (seconds)"];
    const tr = pTestWindow.document.createElement('tr');
    for (const column in header) {
        const cell = pTestWindow.document.createElement('th');
        cell.align = "center";
        cell.style.fontWeight = "900"; // Bold font
        cell.innerHTML = header[column];
        tr.appendChild(cell)
    }
    table.appendChild(tr);

    return table;
}
export function implementTable(pTable, pMatrix, pTestWindow) {
    for (const row in pMatrix) {
        const tr = pTestWindow.document.createElement('tr');

        for (const column in pMatrix[row]) {
            let cell = pTestWindow.document.createElement('td');
            let value = pMatrix[row][column];
            value = formatTestResultValue(cell, value);
            cell.innerHTML = value;
            tr.appendChild(cell)
        }
        pTable.appendChild(tr);
    }
    pTestWindow.document.body.appendChild(pTable);
}
function formatTestResultValue(pCell, pValue){
    if(pValue === PASS){
        pCell.style.color = "green";
    }
    else if(pValue === FAIL){
        pCell.style.color = "red";
    }
    else if(pValue === N_A){
        pCell.style.color = "yellow";
    }
    else{
        pCell.style.color = "black";
    }
    return pValue;
}

// - .CSV --
function addButtonToDownloadCsv(pCSV, pFilename, pTestWindow) {
    // pTestWindow.document.write(" <p><b> Click the Download CSV button to download the created data </b></p> ");

    let button = pTestWindow.document.createElement("button");
    button.innerHTML = "download table as .csv";

    button.addEventListener("click", function () {
        downloadCSV(pCSV, pFilename, pTestWindow);
        alert("Csv file downloaded.");
    });

    pTestWindow.document.body.appendChild(button);
}

export function exportTableToCSV(pFilename, pTestWindow) {
    // Get the exact number of row currently implemented.
    const rows = pTestWindow.document.querySelectorAll("table tr");
    let csvFile = [];

    for (let i = 0; i < rows.length; i++) {
        // This will prevent writing to an empty row.
        let row = [];
        let cols = rows[i].querySelectorAll("td, th");

        for (let j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }
        csvFile.push(row.join(","));
    }
    csvFile = csvFile.join("\n");

    addButtonToDownloadCsv(csvFile, pFilename, pTestWindow);
}

function downloadCSV(pCSV, pFilename, pTestWindow) {
    let csvFile = new Blob([pCSV], {
        type: 'text/csv'
    });

    const downloadLink = pTestWindow.document.createElement("a");
    downloadLink.download = pFilename;
    downloadLink.href = pTestWindow.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";

    pTestWindow.document.body.appendChild(downloadLink);
    downloadLink.click();
}