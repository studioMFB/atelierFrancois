import type { Group, Intersection, Object3D, Object3DEventMap, PerspectiveCamera, Scene, Vector3 } from 'three';
import type { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export interface ModelMetadata {
    name: string;
    position: Vector3;
    scale: number;
    url: string;
}

export interface GridConfig {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
}

export interface KeyState {
    keyT: boolean;
    keyG: boolean;
    keyR: boolean;
}