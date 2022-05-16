function drawBarsOnHorizontalLine() {
    // Get the visualiser container.
    const visualiserContainer = document.querySelector(".visualiser-container");

    // Create a set of pre-defined bars.
    for (let i = 0; i < mFrequencyDataInByte.length; ++i) {
        const bar = document.createElement("DIV");
        bar.setAttribute("id", "bar" + i);
        bar.setAttribute("class", "visualiser-container_bar");
        visualiserContainer.appendChild(bar);
    }
}

/*
    Adjust the height of the bars according to the frequency data.
*/
function animateBarsOnFrequencies() {
    // Update the frequencyData array with the latest frequency data.
    mAnalyser.getByteFrequencyData(mFrequencyDataInByte);

    let average = 1;

    for (let i = 0; i < mFrequencyDataInByte.length; ++i) {
        // fd is the frequency data (value will be 0 and 255).
        const fd = mFrequencyDataInByte[i];
        // Fetch the bar.
        // const bar = document.querySelector("#bar" + i);
        // if (!bar) {
        //     continue;
        // }
        // 0 if fd is undefined.
        // Then minimum height will be at least 4.
        const barHeight = Math.max(4, fd || 0);
        // Set height in css.
        // bar.style.height = barHeight + "px";
        average += fd;
    }
    if (average > 1) {
        average = average / mFrequencyDataInByte.length;
    }
    return average;
}

function drawCubesOnHorizontalLine() {
    let cube, material;

    mCubes = new Array();
    // Create a set of pre-defined cubes.
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const canvasWidth = document.getElementById("mainCanvas").width;

    //for (let i = 0; i < frequencyData.length; ++i) {
    for (let i = 0; i < NUM_OF_CUBES; ++i) {
        if (i % 2 == 0) {
            material = new THREE.MeshLambertMaterial({
                color: 0x0095DD
            });
        } else {
            material = new THREE.MeshLambertMaterial({
                color: 0xFF5733
            });
        }
        cube = new THREE.Mesh(geometry, material);
        cube.position.x = -canvasWidth / 2 + i * 5;
        mScene.add(cube);
        mCubes.push(cube);
    }
}

function drawCubesOnHorizontalPlane() {
    let cube, material;

    mCubesMatrix = new Array(NUM_OF_CUBES);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const canvasWidth = document.getElementById("mainCanvas").width;

    // initialise 2d array
    for (let i = 0; i < mCubesMatrix.length; ++i) {
        mCubesMatrix[i] = new Array(PLANE_DEPTH);
    }

    for (let i = 0; i < NUM_OF_CUBES; ++i) {
        if (i % 2 == 0) {
            material = new THREE.MeshLambertMaterial({
                color: 0x0095DD
            });
        } else {
            material = new THREE.MeshLambertMaterial({
                color: 0xFF5733
            });
        }
        for (let y = 0; y < PLANE_DEPTH; ++y) {
            cube = new THREE.Mesh(geometry, material);
            cube.position.x = -canvasWidth / 2 + i * 5;
            cube.position.z = 10 + y * 5;
            mScene.add(cube);
            mCubesMatrix[i][y] = cube;
        }
    }
}

function animateCubesOnFrequencies() {
    mAnalyser.getByteFrequencyData(mFrequencyDataInByte);

    for (let i = 0; i < NUM_OF_CUBES; ++i) {
        const index = (i + 10) * 2;
        const fd = mFrequencyDataInByte[index];

        for (let y = 0; y < PLANE_DEPTH; ++y) {
            const cubeHeight = Math.max(8, fd || 0);
            mCubesMatrix[i][y].position.y = cubeHeight * 0.5 * i;
        }
    }
}