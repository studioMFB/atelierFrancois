import * as THREE from '../../../build/three.module.js';

onmessage = function(e) {
    let circleCenter = e.data;

    setInterval(e => {
        const CIRCLE_DISTANCE = 200; // 10; // 100;
        const CIRCLE_RADIUS = 22; //25;

        // let circleCenter = this.mVelocity.clone();
        circleCenter.normalize();
        circleCenter.multiplyScalar(CIRCLE_DISTANCE);

        let wander = this.generateRandomCoords(-1, 1);
        wander.multiplyScalar(CIRCLE_RADIUS);
        this.mWanderAngle += Math.random() * ANGLE_CHANGE - ANGLE_CHANGE * 0.5;
        this.setAngleOf(wander);

        circleCenter.add(wander);

        postMessage(circleCenter);
    }, 100)
};