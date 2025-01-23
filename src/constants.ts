import { Vector3 } from 'three';


// Colors
export const COLOURS = {
    DEFAULT_FILL: 0xe2eab8,
    DEFAULT_OUTLINE: 0x3c3c3c,
    SELECTED_OUTLINE: 0xf47653,
    // DEFAULT_OUTLINE: '#e2eab8',
    // SELECTED: '#f47653',
    PREVIEW: 0xf47653,
    GIZMOS: 0x0e73e6
} as const;

// Grid Configuration
export const GRID = {
    LIMITS: {
        MIN_X: -2.5,
        MAX_X: 2.5,
        MIN_Y: 0,
        MAX_Y: 0,
        MIN_Z: -2.5,
        MAX_Z: 2.5
    },
    SIZE: 0.5,  // Grid cell size for snapping
    GROUND_Y_POSITION: 0
} as const;

// Preview Configuration
export const PREVIEW = {
    SIZE: 0.3,
    HEIGHT: 0.5,  // Height above ground
    PULSE: {
        SPEED: 0.7,
        MIN_OPACITY: 0.3,
        MAX_OPACITY: 0.5
    }
} as const;

// Raycaster Configuration
export const RAYCASTER = {
    NEAR: 0.1,
    FAR: 1000
} as const;

// Model Scales
export const MODEL_SCALES = {
    TABLE: 1,
    GARLIC: 10,
    ROCK: 0.4
} as const;

// Default Positions
export const DEFAULT_POSITIONS = {
    MODEL: new Vector3(-0.5, 0, -0.5),
    GROUND_Y_POSITION: 0,
} as const;

export const GLTF_URL = {
    TABLE: new URL('@/assets/models/tables/table_001.glb', import.meta.url).toString(),
    BENCH: new URL('@/assets/models/benches/bench_001.glb', import.meta.url).toString(),
    GARLIC: new URL('@/assets//models/garlic/scene.gltf', import.meta.url).toString(),
    ROCK: new URL('@/assets//models/rock/scene.gltf', import.meta.url).toString()
} as const;

export const ROTATION = {
    SPEED: Math.PI / 2  // Rotation speed for wheel rotation
} as const;

export const MODEL_NAMES = {
    FLOOR: 'Floor',
    TABLE: 'table',
    BENCH: 'bench',
    ROCK: 'rock',
    GARLIC: 'garlic'
} as const;

export const MODEL_SUB_NAMES = {
    ROOT: 'root_model',
    CHILD: 'child_model',
    OUTLINE: 'outline',
    GROUND: 'ground'
} as const;

export const KEYS = {
    TABLE: 'KeyT',
    GARLIC: 'KeyG',
    ROCK: 'KeyR'
} as const;