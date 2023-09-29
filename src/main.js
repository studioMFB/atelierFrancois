import { createApp } from "./../node_modules/vue";
import App from "./App.vue";
import {ModelViewer} from "./components/modelViewer/ModelViewer";


async function run() {
    console.log("RUN");
    
    const container = document.getElementById("App");
    const modelViewer = new ModelViewer(container);
    
    modelViewer.start();
}


createApp(App).mount('#App');

run();
