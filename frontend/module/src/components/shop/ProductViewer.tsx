import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";

import { FurnitureModel, getFurnitureStage } from "@/components/scene/FurnitureModel";
import { OrbitCameraControls } from "@/components/scene/OrbitCameraControls";

export type ProductViewerPreset = "studio" | "garden" | "detail";

interface ProductViewerProps {
  assetKey: string;
  preset?: ProductViewerPreset;
  compact?: boolean;
  interactive?: boolean;
}

const viewerPresets: Record<
  ProductViewerPreset,
  {
    background: string;
    floorColor: string;
    rimColor: string;
    lightColor: string;
    rotationY: number;
  }
> = {
  studio: {
    background: "#f4efe5",
    floorColor: "#efe5d3",
    rimColor: "#d8cab6",
    lightColor: "#fff6eb",
    rotationY: -Math.PI / 5,
  },
  garden: {
    background: "#e7ede1",
    floorColor: "#d6e3cb",
    rimColor: "#a7bf98",
    lightColor: "#fef7ea",
    rotationY: -Math.PI / 4,
  },
  detail: {
    background: "#f5efe8",
    floorColor: "#f1e6d8",
    rimColor: "#d7c6b6",
    lightColor: "#fffaf1",
    rotationY: -Math.PI / 2.5,
  },
};

export function ProductViewer({
  assetKey,
  preset = "studio",
  compact = false,
  interactive = false,
}: ProductViewerProps) {
  const stage = getFurnitureStage(assetKey);
  const presetConfig = viewerPresets[preset];
  const target: [number, number, number] = [0, stage.targetY, 0];
  const viewerDistance = compact
    ? stage.maxSpan * 1.85
    : preset === "detail"
      ? stage.maxSpan * 1.65
      : stage.maxSpan * 2.15;
  const cameraPosition: [number, number, number] = [
    viewerDistance * 0.76,
    stage.targetY + (compact ? stage.maxSpan * 0.44 : stage.maxSpan * 0.6),
    viewerDistance,
  ];
  const floorRadius = compact ? stage.maxSpan * 1.15 : stage.maxSpan * 1.45;

  return (
    <div className={`product-viewer product-viewer--${preset} ${compact ? "product-viewer--compact" : ""}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: compact ? 31 : preset === "detail" ? 28 : 34 }}
        frameloop={interactive ? "always" : "demand"}
        shadows={!compact}
      >
        {!interactive ? <RenderStaticFrame /> : null}
        <color args={[presetConfig.background]} attach="background" />
        <ambientLight intensity={0.9} />
        <hemisphereLight color={presetConfig.lightColor} groundColor="#b8c6b4" intensity={0.72} />
        <directionalLight
          castShadow={!compact}
          intensity={1.25}
          position={[viewerDistance * 0.9, viewerDistance * 1.25, viewerDistance * 0.65]}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
        />

        {interactive ? (
          <OrbitCameraControls
            maxDistance={viewerDistance * 1.85}
            minDistance={Math.max(2.2, viewerDistance * 0.72)}
            target={target}
          />
        ) : null}

        <mesh position={[0, -0.02, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[floorRadius, 52]} />
          <meshStandardMaterial color={presetConfig.floorColor} />
        </mesh>
        <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[floorRadius * 0.96, floorRadius, 60]} />
          <meshBasicMaterial color={presetConfig.rimColor} opacity={0.8} transparent />
        </mesh>

        {preset === "garden" ? <GardenAccents floorRadius={floorRadius} /> : null}

        <group rotation={[0, presetConfig.rotationY, 0]}>
          <FurnitureModel assetKey={assetKey} />
        </group>
      </Canvas>
    </div>
  );
}

function GardenAccents({ floorRadius }: { floorRadius: number }) {
  return (
    <group>
      <mesh position={[-floorRadius * 0.65, 0.16, floorRadius * 0.28]}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial color="#9db88d" roughness={0.95} />
      </mesh>
      <mesh position={[-floorRadius * 0.5, 0.12, floorRadius * 0.45]}>
        <sphereGeometry args={[0.16, 20, 20]} />
        <meshStandardMaterial color="#7f9f78" roughness={0.95} />
      </mesh>
      <mesh position={[floorRadius * 0.55, 0.14, -floorRadius * 0.42]}>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial color="#b8cf92" roughness={0.96} />
      </mesh>
      <mesh position={[floorRadius * 0.46, 0.08, -floorRadius * 0.18]}>
        <cylinderGeometry args={[0.06, 0.06, 0.18, 20]} />
        <meshStandardMaterial color="#83906f" roughness={0.92} />
      </mesh>
    </group>
  );
}

function RenderStaticFrame() {
  const { invalidate } = useThree();

  useEffect(() => {
    invalidate();
  }, [invalidate]);

  return null;
}
