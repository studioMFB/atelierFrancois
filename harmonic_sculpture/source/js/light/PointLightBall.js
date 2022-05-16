import * as THREE from '../../../build/three.module.js';

const POINT_LIGHT_BALL_NAME = "pointLightBall";
export default class PointLightBall {
    constructor(pPosition, pRadius, pColour) {
        this.mPosition = pPosition;
        // this.mScale = pScale;
        this.mRadius = pRadius;
        this.mColour = pColour;

        this.mPointLight;
        this.mBall1;
        this.mBall2;
        this.mMeshGroup = new THREE.Group();
    }

    setMeshName(pName){
        this.mMeshGroup.name = pName;
    }
    getMeshName(){
        return this.mMeshGroup.name;
    }

    setVisible(pVisible){
        this.mMeshGroup.visible = pVisible;
    }
    setVisibleBalls(pVisible){
        this.mBall1.visible = pVisible;
        this.mBall2.visible = pVisible;
    }

    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    copyPosition(pPosition){
        this.mBall1.position.copy(pPosition);
        this.mBall2.position.copy(pPosition);
    }
    getPosition(){
        return this.mPosition;
    }

    setRadius(pRadius){
        this.mBall1.geometry.radius = pRadius;
        const scaledRadius = this.mRadius *0.98;
        this.mBall2.geometry.radius = scaledRadius;
    }
    setScale(pScale){
        this.mBall1.scale.set(pScale.x, pScale.y, pScale.z);
        this.mBall2.scale.set(pScale.x, pScale.y, pScale.z);
    }

    getPointLight(){
        return this.mPointLight;
    }
    getBall1(){
        return this.mBall1;
    }
    getBall2(){
        return this.mBall2;
    }

    dimLight(pIntensity, pIndexBrightness){
        let colour;
        // pIndexBrightness the closer to one, the brighter
        switch(pIndexBrightness){
            case 1:
                colour = 0xffffff; // White
            break;
            case 2:
                colour = 0xE6F7FF; // icy very light blue
            break;
            case 3:
                colour = 0xD1E0E7; // icy light blue
            break;
            case 4:
            colour = 0xABBDC6; // icy light blue
            break;
            default:
        }
        this.setColour(colour);

        this.mPointLight.intensity = pIntensity;
        this.mPointLight.distance = (this.mRadius * 6) *pIntensity;
        this.mPointLight.decay = (3.5 + pIntensity) *2;

    }

    setColour(pColour) {
        this.mBall1.material.color.set(pColour);
        this.mBall2.material.color.set(pColour);
    }

    getMesh(){
        return this.mMeshGroup;
    } 

    setPointLight(pDistance) {
        const pointLight = new THREE.PointLight(this.mColour);
        pointLight.intensity = 8;
        pointLight.distance = pDistance * 12;
        pointLight.decay = 3.5;
        pointLight.position.copy(this.mPosition);
        return pointLight;
    }

    draw() {
        let geometry, material;

        // ball1 
        geometry = new THREE.SphereGeometry(this.mRadius);
        material = new THREE.MeshBasicMaterial({
            color: this.mColour,
            transparent: true,
            opacity: 1,//0.2, TO HELP DEBUG DRONE'S AVOID SUN FUNC
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        this.mBall1 = new THREE.Mesh(geometry, material);
        this.mBall1.position.copy(this.mPosition);

        // ball2
        const scaledRadius = this.mRadius *0.98;
        geometry = new THREE.SphereGeometry(scaledRadius, scaledRadius, scaledRadius);
        material = new THREE.MeshBasicMaterial({color: this.mColour});
        this.mBall2 = new THREE.Mesh(geometry, material);
        this.mBall2.position.copy(this.mPosition);

        // point light
        this.mPointLight = this.setPointLight(this.mRadius);

        this.mMeshGroup.add(this.mBall1);
        // this.mMeshGroup.add(this.mBall2);
        this.mMeshGroup.add(this.mPointLight);

        return this.mMeshGroup;
    }
}