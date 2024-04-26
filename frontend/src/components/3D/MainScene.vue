<script setup lang="ts">
import { Color, Fog, Scene } from 'three';
import { type Ref, computed, ref, provide, onMounted } from 'vue';


const props = defineProps<{
    colour: Color
}>();

const colour = computed(() => props.colour);

const scene: Ref<Scene> = ref(new Scene());
scene.value.background = new Color(colour.value);
scene.value.fog = new Fog(colour.value, 200, 1000);

// provide("MainScene", scene.value);

onMounted(() => {
//     if (scene.value) {
        console.log("MainScene => scene ", scene.value);
        provide("MainScene", scene.value);
    // }
})
</script>

<!-- <template>
    <slot></slot>
</template> -->