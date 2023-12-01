import { createApp } from "./../node_modules/vue";
import App from "./App.vue";
import { ModelViewer } from "./components/modelViewer/ModelViewer";


async function run() {
    const container = document.getElementById("App") as HTMLElement;
    const modelViewer = new ModelViewer(container);

    modelViewer.start();
}

// createApp(App).mount('#App');
run();
