import './assets/main.css';
import { Vector3 } from "three";
import { createApp } from 'vue';
import App from './App.vue';
import {ModelViewer} from './components/modelViewer/ModelViewer';
import router from './router';
import { Terrain } from "./components/modelViewer/Terrain";


async function run() {
    console.log("RUN");
    
    const container = document.getElementById("App") as HTMLElement;
    const modelViewer = new ModelViewer(container);
    
    const terrain01 = new Terrain("T01", new Vector3(2, .5, 2), new Vector3(50, 1, 50), new Vector3(1,0,0));
    terrain01.initMesh();
    modelViewer.addObject(terrain01);

    const terrain02 = new Terrain("T02", new Vector3(2, .5, 2), new Vector3(50, 1, 50), new Vector3(-1,0,0));
    terrain02.initMesh();
    modelViewer.addObject(terrain02);

    const terrain03 = new Terrain("T02", new Vector3(2, .5, 2), new Vector3(50, 1, 50), new Vector3(-1,0,2));
    terrain03.initMesh();
    modelViewer.addObject(terrain03);

    modelViewer.start();
}


createApp(App).use(router).mount('#App');

run();
