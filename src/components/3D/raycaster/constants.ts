import { Vector3 } from 'three';


// Colors
export const COLORS = {
    SELECTED: '#f47653',
    UNSELECTED: '#e2eab8',
    PREVIEW: 0xf47653,  // Hex format for Three.js materials
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
    MODEL: new Vector3(-0.5, 0, -0.5)
} as const;

// GLTF Model Paths
export const GLTF_PATHS = {
    TABLE: new URL('./models/table/1/littlewood_furniture.gltf', import.meta.url).toString(),
    GARLIC: new URL('./models/garlic/scene.gltf', import.meta.url).toString(),
    ROCK: new URL('./models/rock/scene.gltf', import.meta.url).toString()
} as const;

// Rotation
export const ROTATION = {
    SPEED: Math.PI / 2  // Rotation speed for wheel rotation
} as const;

// Model Names
export const MODEL_NAMES = {
    ROOT: 'root_model',
    FLOOR: 'Floor',
    OUTLINE: 'outline'
} as const;

// Event Keys
export const KEYS = {
    TABLE: 'KeyT',
    GARLIC: 'KeyG',
    ROCK: 'KeyR'
} as const;