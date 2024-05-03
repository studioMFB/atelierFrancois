<script setup lang="ts">
import { Color, DoubleSide, ExtrudeGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, Scene, ShadowMaterial, Shape, Vector2, Vector3 } from 'three';
import { type Ref, computed, ref, inject } from 'vue';


const props = defineProps<{
    dimension: Vector2,
    segment: Vector2,
    position: Vector3,
}>();

const scene = computed(() => inject("MainScene") as Scene);
const dimension = computed(() => props.dimension);
const segment = computed(() => props.segment);
const position = computed(() => props.position);

function initMesh(isVisible: boolean, opacity: number, colour?: Color): void {
    // GROUND //
    const geometry: Ref<PlaneGeometry> = ref(new PlaneGeometry(dimension.value.x, dimension.value.y, segment.value.x, segment.value.y));
    geometry.value.rotateX(- Math.PI / 2);

    const material = new MeshStandardMaterial({
        color: colour || new Color(0xff0000),
        visible: isVisible,
        opacity: opacity,
    });
    const ground = new Mesh(geometry.value, material);
    ground.name = "Main Plane";
    ground.receiveShadow = false;

    ground.position.set(position.value.x, position.value.y, position.value.z);

    // SHADOW GROUND //
    const shadowGround:Mesh = ground.clone();
    shadowGround.material = new ShadowMaterial({
        opacity: .5,
        color: "#888888",
        side: DoubleSide,
        transparent: true
    });

    shadowGround.receiveShadow = true;
    shadowGround.position.set(position.value.x + 0.01, position.value.y + 0.01, position.value.z + 0.01);

    // roundEdgedBox();

    scene.value.add(ground as THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>);
    scene.value.add(shadowGround as THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>);
}

function roundEdgedBox() {
    const w = 5.2;
    const d = 5.2;
    const r = 0.2;
    const h = 0.1;

    //Generate the rounded rect shape
    const shape = new Shape();

    shape.moveTo(-w / 2, -d / 2 + r);
    shape.lineTo(-w / 2, d / 2 - r);
    shape.absarc(-w / 2 + r, d / 2 - r, r, 1 * Math.PI, 0.5 * Math.PI, true);
    shape.lineTo(w / 2 - r, d / 2);
    shape.absarc(w / 2 - r, d / 2 - r, r, 0.5 * Math.PI, 0 * Math.PI, true);
    shape.lineTo(w / 2, -d / 2 + r);
    shape.absarc(w / 2 - r, -d / 2 + r, r, 2 * Math.PI, 1.5 * Math.PI, true);
    shape.lineTo(-w / 2 + r, -d / 2);
    shape.absarc(-w / 2 + r, -d / 2 + r, r, 1.5 * Math.PI, 1 * Math.PI, true);

    //This is the material that is used to stop the
    //lines in the back from showing
    const mat = new MeshBasicMaterial({
        color: new Color(0xe5e0d8),
        side: DoubleSide,
        depthTest: true,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
    });

    const geom = new ExtrudeGeometry(shape, { depth: h, bevelEnabled: false });

    const mesh = new Mesh(geom, mat);
    mesh.rotateX(1.57);
    mesh.position.y = -0.01;

    scene.value.add(mesh);
}

initMesh(false, 1);
</script>