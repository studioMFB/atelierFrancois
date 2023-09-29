import './assets/main.css';
// import { Vector3 } from "./../node_modules/three";
// import { Vector3 } from "three";
import { createApp } from "./../node_modules/vue";
import App from "./App.vue";
import {ModelViewer} from "./components/modelViewer/ModelViewer";
// import router from './router.vue';
// import { Terrain } from "./components/modelViewer/Terrain";


async function run() {
    console.log("RUN");
    
    const container = document.getElementById("App");
    const modelViewer = new ModelViewer(container);
    
    modelViewer.start();
}


createApp(App).mount('#App');

run();
