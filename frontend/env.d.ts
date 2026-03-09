/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  __LIL_WUD_PUBLIC_STATE__?: {
    config?: {
      apiBaseUrl?: string;
    };
  };
}

declare module "three" {
  export type Vector3Tuple = [number, number, number];
  export class Group {
    position: {
      x: number;
      y: number;
      z: number;
      set: (x: number, y: number, z: number) => void;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
  }
  export const MOUSE: {
    ROTATE: number;
    DOLLY: number;
  };
}

declare module "three/examples/jsm/controls/OrbitControls.js" {
  export class OrbitControls {
    constructor(camera: unknown, domElement: HTMLElement);
    enabled: boolean;
    enableDamping: boolean;
    enablePan: boolean;
    minDistance: number;
    maxDistance: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    mouseButtons: {
      LEFT: number;
      MIDDLE: number;
      RIGHT: number;
    };
    target: {
      set: (x: number, y: number, z: number) => void;
    };
    update: () => void;
    dispose: () => void;
  }
}

declare module "three/examples/jsm/controls/TransformControls.js" {
  export class TransformControls {
    constructor(camera: unknown, domElement: HTMLElement);
    showX: boolean;
    showY: boolean;
    showZ: boolean;
    setSize: (size: number) => void;
    setMode: (mode: "translate" | "rotate") => void;
    attach: (object: unknown) => void;
    detach: () => void;
    addEventListener: (type: string, listener: (event: any) => void) => void;
    removeEventListener: (type: string, listener: (event: any) => void) => void;
    dispose: () => void;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    ambientLight: any;
    boxGeometry: any;
    circleGeometry: any;
    color: any;
    coneGeometry: any;
    cylinderGeometry: any;
    directionalLight: any;
    fog: any;
    gridHelper: any;
    group: any;
    hemisphereLight: any;
    mesh: any;
    meshBasicMaterial: any;
    meshStandardMaterial: any;
    planeGeometry: any;
    ringGeometry: any;
    sphereGeometry: any;
  }
}
