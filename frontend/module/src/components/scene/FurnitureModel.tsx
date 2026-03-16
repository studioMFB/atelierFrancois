import { Suspense, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { Box3, Mesh, MeshBasicMaterial, MeshLambertMaterial, Object3D, Vector3 } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

import benchModelUrl from "@/assets/models/furniture/benches/bench_001.glb";
import tableModelUrl from "@/assets/models/furniture/tables/table_001.glb";
import { getPlannerAsset } from "@/components/planner/plannerAssets";

interface FurnitureGlbConfig {
  frameColor: string;
  modelUrl: string;
  outlineColor: string;
  plankColor: string;
  scaleBoost: number;
  verticalScale?: number;
}

const furnitureGlbAssets: Partial<Record<string, FurnitureGlbConfig>> = {
  "atelier-table": {
    frameColor: "#f2ebdf",
    modelUrl: tableModelUrl,
    outlineColor: "#5d729d",
    plankColor: "#d7be97",
    scaleBoost: 1.95,
  },
  "mori-bench": {
    frameColor: "#eee5d7",
    modelUrl: benchModelUrl,
    outlineColor: "#5d729d",
    plankColor: "#d3b28b",
    scaleBoost: 2.15,
    verticalScale: 1.12,
  },
};

const furnitureHeights: Record<string, number> = {
  "mori-bench": 0.85,
  "atelier-table": 0.82,
  "nest-reading-nook": 1.55,
  "sprout-planter-cart": 0.95,
  "cloud-lookout": 2.15,
  "picnic-island": 0.82,
  "moss-bush": 0.75,
  "pine-tree": 1.95,
  "stone-cluster": 0.4,
  "tall-shrub": 1.35,
  "pomu-tanuki": 0.88,
  "mimi-bunny": 0.82,
  "sora-fox": 0.9,
  "sunhat-moss": 0.92,
};

export function getFurniturePalette(assetKey: string, selected = false) {
  const asset = getPlannerAsset(assetKey);

  if (assetKey === "stone-cluster") {
    return {
      wood: selected ? "#d67558" : "#9aa5a8",
      accent: selected ? "#243933" : "#7f8889",
    };
  }

  return {
    wood: selected ? "#d67558" : asset?.color ?? "#b78f70",
    accent: selected ? "#243933" : "#61766f",
  };
}

export function getFurnitureStage(assetKey: string) {
  const asset = getPlannerAsset(assetKey);
  const footprint = asset?.footprint ?? [1.4, 1.1];
  const height = furnitureHeights[assetKey] ?? 1;
  const maxSpan = Math.max(footprint[0], footprint[1], height);

  return {
    footprint,
    height,
    maxSpan,
    targetY: Math.max(0.28, height * 0.42),
  };
}

interface FurnitureModelProps {
  assetKey: string;
  selected?: boolean;
  woodColor?: string;
  accentColor?: string;
}

export function FurnitureModel({
  assetKey,
  selected = false,
  woodColor,
  accentColor,
}: FurnitureModelProps) {
  const palette = getFurniturePalette(assetKey, selected);
  const wood = woodColor ?? palette.wood;
  const accent = accentColor ?? palette.accent;
  const glbConfig = furnitureGlbAssets[assetKey];

  if (glbConfig) {
    return (
      <Suspense fallback={<FurniturePrimitiveModel accent={accent} assetKey={assetKey} wood={wood} />}>
        <FurnitureGlbModel assetKey={assetKey} config={glbConfig} />
      </Suspense>
    );
  }

  return <FurniturePrimitiveModel accent={accent} assetKey={assetKey} wood={wood} />;
}

function FurniturePrimitiveModel({
  assetKey,
  wood,
  accent,
}: {
  assetKey: string;
  wood: string;
  accent: string;
}) {
  switch (assetKey) {
    case "mori-bench":
      return <Bench wood={wood} accent={accent} />;
    case "atelier-table":
      return <Table wood={wood} accent={accent} />;
    case "nest-reading-nook":
      return <ReadingNook wood={wood} accent={accent} />;
    case "sprout-planter-cart":
      return <PlanterCart wood={wood} accent={accent} />;
    case "cloud-lookout":
      return <CloudLookout wood={wood} accent={accent} />;
    case "picnic-island":
      return <PicnicIsland wood={wood} accent={accent} />;
    case "moss-bush":
      return <MossBush wood={wood} accent={accent} />;
    case "pine-tree":
      return <PineTree wood={wood} accent={accent} />;
    case "stone-cluster":
      return <StoneCluster wood={wood} accent={accent} />;
    case "tall-shrub":
      return <TallShrub wood={wood} accent={accent} />;
    case "pomu-tanuki":
      return <PomuMascot wood={wood} accent={accent} />;
    case "mimi-bunny":
      return <MimiMascot wood={wood} accent={accent} />;
    case "sora-fox":
      return <SoraMascot wood={wood} accent={accent} />;
    case "sunhat-moss":
      return <SunhatMossMascot wood={wood} accent={accent} />;
    default:
      return <Bench wood={wood} accent={accent} />;
  }
}

function FurnitureGlbModel({
  assetKey,
  config,
}: {
  assetKey: string;
  config: FurnitureGlbConfig;
}) {
  const gltf = useLoader(GLTFLoader, config.modelUrl) as GLTF;
  const stage = getFurnitureStage(assetKey);
  const scene = useMemo(() => {
    const model = clone(gltf.scene);
    const box = new Box3().setFromObject(model);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const targetWidth = stage.footprint[0];
    const targetDepth = stage.footprint[1];
    const targetHeight = stage.height;
    const scale =
      Math.min(
        targetWidth / Math.max(size.x, 0.001),
        targetHeight / Math.max(size.y, 0.001),
        targetDepth / Math.max(size.z, 0.001),
      ) * config.scaleBoost;
    const scaleVector = new Vector3(scale, scale * (config.verticalScale ?? 1), scale);

    applyGlbTransform(model, box, center, scaleVector);

    model.traverse((child) => {
      if (child instanceof Mesh) {
        const materialNames = Array.isArray(child.material)
          ? child.material.map((material) => material?.name ?? "")
          : [child.material?.name ?? ""];
        const lowerName = child.name.toLowerCase();
        const isOutline =
          lowerName.includes("outline") ||
          materialNames.some((name) => name.toLowerCase().includes("outline"));
        const isTopPlank = lowerName.startsWith("34x6");

        child.material = isOutline
          ? new MeshBasicMaterial({
              color: config.outlineColor,
              toneMapped: false,
            })
          : new MeshLambertMaterial({
              color: isTopPlank ? config.plankColor : config.frameColor,
            });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return model;
  }, [
    config.frameColor,
    config.modelUrl,
    config.outlineColor,
    config.plankColor,
    config.scaleBoost,
    config.verticalScale,
    gltf.scene,
    stage.footprint,
    stage.height,
  ]);

  return <primitive object={scene} />;
}

function applyGlbTransform(scene: Object3D, box: Box3, center: Vector3, scale: Vector3) {
  scene.scale.copy(scale);
  scene.position.set(-center.x * scale.x, -box.min.y * scale.y, -center.z * scale.z);
}

function Bench({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <WoodBox args={[1.4, 0.12, 0.46]} color={wood} position={[0, 0.42, 0]} />
      <WoodBox args={[1.35, 0.12, 0.18]} color={wood} position={[0, 0.74, -0.16]} />
      <WoodBox args={[0.1, 0.45, 0.1]} color={accent} position={[-0.58, 0.18, -0.14]} />
      <WoodBox args={[0.1, 0.45, 0.1]} color={accent} position={[0.58, 0.18, -0.14]} />
      <WoodBox args={[0.1, 0.42, 0.1]} color={accent} position={[-0.58, 0.18, 0.14]} />
      <WoodBox args={[0.1, 0.42, 0.1]} color={accent} position={[0.58, 0.18, 0.14]} />
    </group>
  );
}

function Table({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <WoodBox args={[1.35, 0.1, 0.95]} color={wood} position={[0, 0.72, 0]} />
      <WoodBox args={[0.12, 0.72, 0.12]} color={accent} position={[-0.52, 0.34, -0.34]} />
      <WoodBox args={[0.12, 0.72, 0.12]} color={accent} position={[0.52, 0.34, -0.34]} />
      <WoodBox args={[0.12, 0.72, 0.12]} color={accent} position={[-0.52, 0.34, 0.34]} />
      <WoodBox args={[0.12, 0.72, 0.12]} color={accent} position={[0.52, 0.34, 0.34]} />
    </group>
  );
}

function ReadingNook({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <WoodBox args={[1.9, 0.16, 1.2]} color={wood} position={[0, 0.22, 0]} />
      <WoodBox args={[2.05, 0.12, 1.5]} color={accent} position={[0, 1.42, 0]} />
      <WoodBox args={[0.14, 1.5, 0.14]} color={accent} position={[-0.9, 0.75, -0.55]} />
      <WoodBox args={[0.14, 1.5, 0.14]} color={accent} position={[0.9, 0.75, -0.55]} />
      <WoodBox args={[0.14, 1.5, 0.14]} color={accent} position={[-0.9, 0.75, 0.55]} />
      <WoodBox args={[0.14, 1.5, 0.14]} color={accent} position={[0.9, 0.75, 0.55]} />
      <WoodBox args={[0.18, 0.85, 1.1]} color={wood} position={[-0.95, 0.48, 0]} />
      <WoodBox args={[0.18, 0.85, 1.1]} color={wood} position={[0.95, 0.48, 0]} />
    </group>
  );
}

function PlanterCart({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <WoodBox args={[0.95, 0.34, 0.65]} color={wood} position={[0, 0.36, 0]} />
      <WoodBox args={[0.08, 0.58, 0.08]} color={accent} position={[-0.36, 0.65, -0.18]} />
      <WoodBox args={[0.08, 0.58, 0.08]} color={accent} position={[0.36, 0.65, -0.18]} />
      <mesh castShadow position={[-0.33, 0.1, 0.26]}>
        <cylinderGeometry args={[0.09, 0.09, 0.1, 20]} />
        <meshStandardMaterial color="#243933" />
      </mesh>
      <mesh castShadow position={[0.33, 0.1, 0.26]}>
        <cylinderGeometry args={[0.09, 0.09, 0.1, 20]} />
        <meshStandardMaterial color="#243933" />
      </mesh>
    </group>
  );
}

function CloudLookout({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <WoodBox args={[1.5, 0.16, 1.4]} color={wood} position={[0, 1.05, 0]} />
      <WoodBox args={[0.15, 2.0, 0.15]} color={accent} position={[-0.62, 1.0, -0.55]} />
      <WoodBox args={[0.15, 2.0, 0.15]} color={accent} position={[0.62, 1.0, -0.55]} />
      <WoodBox args={[0.15, 2.0, 0.15]} color={accent} position={[-0.62, 1.0, 0.55]} />
      <WoodBox args={[0.15, 2.0, 0.15]} color={accent} position={[0.62, 1.0, 0.55]} />
      <WoodBox args={[0.12, 0.9, 0.5]} color={wood} position={[-0.98, 0.52, 0]} />
      <WoodBox args={[0.6, 0.08, 0.16]} color={accent} position={[-0.72, 0.2, 0]} />
      <WoodBox args={[0.6, 0.08, 0.16]} color={accent} position={[-0.72, 0.4, 0]} />
      <WoodBox args={[0.6, 0.08, 0.16]} color={accent} position={[-0.72, 0.6, 0]} />
    </group>
  );
}

function PicnicIsland({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <WoodBox args={[1.8, 0.12, 1.1]} color={wood} position={[0, 0.7, 0]} />
      <WoodBox args={[1.5, 0.12, 0.28]} color={accent} position={[0, 0.4, -0.62]} />
      <WoodBox args={[1.5, 0.12, 0.28]} color={accent} position={[0, 0.4, 0.62]} />
      <WoodBox args={[0.12, 0.65, 0.12]} color={accent} position={[-0.68, 0.32, -0.25]} />
      <WoodBox args={[0.12, 0.65, 0.12]} color={accent} position={[0.68, 0.32, -0.25]} />
      <WoodBox args={[0.12, 0.65, 0.12]} color={accent} position={[-0.68, 0.32, 0.25]} />
      <WoodBox args={[0.12, 0.65, 0.12]} color={accent} position={[0.68, 0.32, 0.25]} />
    </group>
  );
}

function MossBush({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <mesh castShadow position={[-0.22, 0.3, 0.08]}>
        <sphereGeometry args={[0.34, 24, 24]} />
        <meshStandardMaterial color={wood} roughness={0.96} />
      </mesh>
      <mesh castShadow position={[0.18, 0.24, -0.1]}>
        <sphereGeometry args={[0.28, 22, 22]} />
        <meshStandardMaterial color={accent} roughness={0.95} />
      </mesh>
      <mesh castShadow position={[0, 0.18, 0.18]}>
        <sphereGeometry args={[0.24, 20, 20]} />
        <meshStandardMaterial color={wood} roughness={0.94} />
      </mesh>
    </group>
  );
}

function PineTree({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <mesh castShadow position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.6, 18]} />
        <meshStandardMaterial color="#7a6048" roughness={0.9} />
      </mesh>
      <mesh castShadow position={[0, 0.84, 0]}>
        <coneGeometry args={[0.46, 0.72, 18]} />
        <meshStandardMaterial color={accent} roughness={0.94} />
      </mesh>
      <mesh castShadow position={[0, 1.24, 0]}>
        <coneGeometry args={[0.34, 0.56, 18]} />
        <meshStandardMaterial color={wood} roughness={0.95} />
      </mesh>
      <mesh castShadow position={[0, 1.54, 0]}>
        <coneGeometry args={[0.22, 0.42, 16]} />
        <meshStandardMaterial color={accent} roughness={0.95} />
      </mesh>
    </group>
  );
}

function StoneCluster({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <mesh castShadow position={[-0.18, 0.12, 0.06]} scale={[1.25, 0.8, 1]}>
        <sphereGeometry args={[0.18, 18, 18]} />
        <meshStandardMaterial color={wood} roughness={0.98} />
      </mesh>
      <mesh castShadow position={[0.08, 0.08, -0.12]} scale={[1, 0.6, 1.18]}>
        <sphereGeometry args={[0.14, 18, 18]} />
        <meshStandardMaterial color={accent} roughness={0.98} />
      </mesh>
      <mesh castShadow position={[0.24, 0.1, 0.08]} scale={[1.05, 0.74, 0.92]}>
        <sphereGeometry args={[0.12, 18, 18]} />
        <meshStandardMaterial color={wood} roughness={0.98} />
      </mesh>
    </group>
  );
}

function TallShrub({ wood, accent }: { wood: string; accent: string }) {
  return (
    <group>
      <mesh castShadow position={[0, 0.24, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.42, 18]} />
        <meshStandardMaterial color="#7a6048" roughness={0.9} />
      </mesh>
      <mesh castShadow position={[0, 0.78, 0]} scale={[0.82, 1.34, 0.82]}>
        <sphereGeometry args={[0.32, 22, 22]} />
        <meshStandardMaterial color={wood} roughness={0.96} />
      </mesh>
      <mesh castShadow position={[0.1, 0.98, -0.04]} scale={[0.56, 0.9, 0.56]}>
        <sphereGeometry args={[0.22, 18, 18]} />
        <meshStandardMaterial color={accent} roughness={0.95} />
      </mesh>
    </group>
  );
}

function PomuMascot({ wood, accent }: { wood: string; accent: string }) {
  return <MossBallMascot hat="cap" moss={wood} accent={accent} />;
}

function MimiMascot({ wood, accent }: { wood: string; accent: string }) {
  return <MossBallMascot hat="plain" moss={wood} accent={accent} />;
}

function SoraMascot({ wood, accent }: { wood: string; accent: string }) {
  return <MossBallMascot hat="beanie" moss={wood} accent={accent} />;
}

function SunhatMossMascot({ wood, accent }: { wood: string; accent: string }) {
  return <MossBallMascot hat="sunhat" moss={wood} accent={accent} />;
}

function MossBallMascot({
  hat,
  moss,
  accent,
}: {
  hat: "cap" | "plain" | "beanie" | "sunhat";
  moss: string;
  accent: string;
}) {
  return (
    <group>
      <mesh castShadow position={[0, 0.42, 0]} scale={[1.08, 0.96, 0.96]}>
        <sphereGeometry args={[0.42, 28, 28]} />
        <meshStandardMaterial color={moss} roughness={0.9} />
      </mesh>
      <mesh castShadow position={[-0.08, 0.54, -0.18]} scale={[0.56, 0.42, 0.48]}>
        <sphereGeometry args={[0.18, 18, 18]} />
        <meshStandardMaterial color={accent} opacity={0.24} transparent roughness={0.94} />
      </mesh>
      <MossBallFace />
      {hat === "cap" ? <CapHat /> : null}
      {hat === "beanie" ? <BeanieHat /> : null}
      {hat === "sunhat" ? <SunhatHat /> : null}
    </group>
  );
}

function MossBallFace() {
  return (
    <group>
      <mesh castShadow position={[-0.14, 0.52, 0.29]} rotation={[0, 0, 0.24]} scale={[0.9, 1.04, 0.34]}>
        <sphereGeometry args={[0.09, 18, 18]} />
        <meshStandardMaterial color="#fffaf4" roughness={0.92} />
      </mesh>
      <mesh castShadow position={[0.16, 0.49, 0.29]} rotation={[0, 0, -0.24]} scale={[0.9, 1.04, 0.34]}>
        <sphereGeometry args={[0.09, 18, 18]} />
        <meshStandardMaterial color="#fffaf4" roughness={0.92} />
      </mesh>
      <mesh castShadow position={[-0.1, 0.53, 0.34]} scale={[0.52, 0.74, 0.2]}>
        <sphereGeometry args={[0.09, 18, 18]} />
        <meshStandardMaterial color="#111" roughness={0.62} />
      </mesh>
      <mesh castShadow position={[0.19, 0.5, 0.34]} scale={[0.52, 0.74, 0.2]}>
        <sphereGeometry args={[0.09, 18, 18]} />
        <meshStandardMaterial color="#111" roughness={0.62} />
      </mesh>
      <mesh castShadow position={[-0.24, 0.34, 0.34]} scale={[1.18, 0.72, 0.26]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#f1b29f" roughness={0.96} />
      </mesh>
      <mesh castShadow position={[0.29, 0.31, 0.34]} scale={[1.18, 0.72, 0.26]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#f1b29f" roughness={0.96} />
      </mesh>
      <mesh castShadow position={[0.04, 0.29, 0.34]} scale={[0.6, 0.3, 0.12]}>
        <torusGeometry args={[0.08, 0.018, 8, 28, Math.PI]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
    </group>
  );
}

function CapHat() {
  return (
    <group>
      <mesh castShadow position={[0.02, 0.86, 0]} rotation={[0.08, 0.2, -0.16]}>
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshStandardMaterial color="#efe2bd" roughness={0.88} />
      </mesh>
      <mesh castShadow position={[-0.14, 0.77, 0.18]} rotation={[0.26, -0.06, -0.36]} scale={[1.32, 0.28, 0.72]}>
        <cylinderGeometry args={[0.2, 0.2, 0.08, 28]} />
        <meshStandardMaterial color="#2f8d49" roughness={0.84} />
      </mesh>
    </group>
  );
}

function BeanieHat() {
  return (
    <group>
      <mesh castShadow position={[0, 0.82, 0]} scale={[1.04, 0.6, 1.04]}>
        <sphereGeometry args={[0.28, 22, 22]} />
        <meshStandardMaterial color="#f1e4c8" roughness={0.92} />
      </mesh>
      <mesh castShadow position={[0, 0.68, 0]} scale={[1.26, 0.44, 1.16]}>
        <cylinderGeometry args={[0.24, 0.26, 0.18, 28]} />
        <meshStandardMaterial color="#f5ebd7" roughness={0.9} />
      </mesh>
      {Array.from({ length: 7 }).map((_, index) => (
        <mesh
          castShadow
          key={index}
          position={[-0.18 + index * 0.06, 0.7, 0.22]}
          rotation={[0.1, 0, index % 2 === 0 ? 0.16 : -0.12]}
        >
          <boxGeometry args={[0.012, 0.14, 0.01]} />
          <meshStandardMaterial color="#9f8e68" roughness={0.84} />
        </mesh>
      ))}
    </group>
  );
}

function SunhatHat() {
  return (
    <group>
      <mesh castShadow position={[0.02, 0.78, 0]} scale={[1.14, 0.5, 1.1]}>
        <sphereGeometry args={[0.26, 22, 22]} />
        <meshStandardMaterial color="#ffd12c" roughness={0.88} />
      </mesh>
      <mesh castShadow position={[0.04, 0.66, 0]} rotation={[0.06, 0.08, -0.12]} scale={[1.5, 0.16, 1.28]}>
        <cylinderGeometry args={[0.26, 0.3, 0.08, 34]} />
        <meshStandardMaterial color="#ffd12c" roughness={0.86} />
      </mesh>
      <mesh castShadow position={[0.08, 0.69, 0.24]} rotation={[0.16, 0.1, -0.08]} scale={[0.7, 0.18, 0.5]}>
        <cylinderGeometry args={[0.16, 0.16, 0.08, 24]} />
        <meshStandardMaterial color="#f0b814" roughness={0.86} />
      </mesh>
    </group>
  );
}

interface WoodBoxProps {
  args: [number, number, number];
  color: string;
  position: [number, number, number];
}

function WoodBox({ args, color, position }: WoodBoxProps) {
  return (
    <mesh castShadow receiveShadow position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} roughness={0.7} metalness={0.02} />
    </mesh>
  );
}
