import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import ModelViewer from './components/modelViewer/ModelViewer';

import router from './router';
import { Terrain } from "./components/modelViewer/Terrain";


async function run() {
    const container = document.getElementById("App") as HTMLElement;
    const modelViewer = new ModelViewer(container);
    
    const terrainCutout = new Terrain(modelViewer.scene, 2, .5, 2, 50, 50);
    
    modelViewer.loop.addToUpdate(terrainCutout);
    modelViewer.start();
}


createApp(App).use(router).mount('#App');

run();
