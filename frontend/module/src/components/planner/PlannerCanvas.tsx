import type {
  PlannerItem,
  PlannerMoodLighting,
  PlannerScene,
} from "@atelierfrancois/lilwud-sdk";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import {
  clampItemPosition,
  getPlannerAsset,
  plannerThemeColors,
} from "@/components/planner/plannerAssets";
import { FurnitureModel } from "@/components/scene/FurnitureModel";
import { OrbitCameraControls } from "@/components/scene/OrbitCameraControls";

interface PlannerUpdateOptions {
  recordHistory?: boolean;
}

interface PlannerCanvasProps {
  scene: PlannerScene;
  activeAssetKey: string | null;
  selectedItemId: string | null;
  onAddItem: (position: [number, number, number]) => void;
  onSelectItem: (itemId: string | null) => void;
  onBeginItemInteraction: () => void;
  onUpdateItem: (
    itemId: string,
    patch: Partial<PlannerItem>,
    options?: PlannerUpdateOptions,
  ) => void;
}

export function PlannerCanvas({
  scene,
  activeAssetKey,
  selectedItemId,
  onAddItem,
  onSelectItem,
  onBeginItemInteraction,
  onUpdateItem,
}: PlannerCanvasProps) {
  const groundColor = plannerThemeColors[scene.surfaceTheme];
  const largestDimension = Math.max(scene.width, scene.depth);
  const moodLighting = plannerMoodLightingPresets[scene.moodLighting];
  const plannerTheme = usePlannerCanvasTheme();
  // Keep the orbit center on the board itself, then bias the framing with the
  // camera position so the scene reads slightly left against the right dock.
  const cameraTarget: [number, number, number] = [0, 0.02, 0];
  const cameraPosition: [number, number, number] = [
    largestDimension * 0.68,
    Math.max(5.2, largestDimension * 0.68),
    largestDimension * 1.04,
  ];
  const [orbitEnabled, setOrbitEnabled] = useState(true);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const selectedItem = scene.items.find((item) => item.id === selectedItemId) ?? null;

  return (
    <div className="planner-stage">
      <Canvas
        camera={{ position: cameraPosition, fov: 40 }}
        onPointerMissed={() => {
          setOrbitEnabled(true);
          setHoveredItemId(null);
          document.body.style.cursor = "";
        }}
        shadows
      >
        <color args={[moodLighting.background]} attach="background" />
        <fog
          args={[
            moodLighting.fog,
            largestDimension * moodLighting.fogNearMultiplier,
            largestDimension * moodLighting.fogFarMultiplier,
          ]}
          attach="fog"
        />
        <ambientLight color={moodLighting.ambientColor} intensity={moodLighting.ambientIntensity} />
        <hemisphereLight
          color={moodLighting.hemisphereColor}
          groundColor={moodLighting.hemisphereGroundColor}
          intensity={moodLighting.hemisphereIntensity}
        />
        <directionalLight
          castShadow
          color={moodLighting.directionalColor}
          intensity={moodLighting.directionalIntensity}
          position={[largestDimension * 0.68, largestDimension * 1.18, largestDimension * 0.58]}
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        />

        <OrbitCameraControls
          enabled={orbitEnabled}
          maxDistance={Math.max(16, largestDimension * 2.4)}
          minDistance={Math.max(4.5, largestDimension * 0.62)}
          target={cameraTarget}
        />

          <RoundedStagePlatform
            depth={scene.depth + 0.9}
            groundColor={groundColor}
            width={scene.width + 0.9}
          />

        <gridHelper
          args={[
            largestDimension,
            Math.round(largestDimension * 2),
            plannerTheme.gridColor,
            plannerTheme.gridSoftColor,
          ]}
          position={[0, 0.05, 0]}
        />

        <mesh
          position={[0, 0.045, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={(event: any) => {
            event.stopPropagation();
            setOrbitEnabled(true);
            setHoveredItemId(null);
            document.body.style.cursor = "";

            const wantsPlacement =
              Boolean(event.shiftKey) || Boolean(event.nativeEvent?.shiftKey);

            if (!wantsPlacement) {
              if (selectedItemId) {
                onSelectItem(null);
              }
              return;
            }

            if (!activeAssetKey) {
              return;
            }

            const point = getGroundPoint(event);
            if (!point) {
              return;
            }

            onAddItem([snapPoint(point.x), 0, snapPoint(point.z)]);
          }}
        >
          <planeGeometry args={[scene.width, scene.depth]} />
          <meshStandardMaterial color={groundColor} opacity={0} transparent />
        </mesh>

        {scene.items.map((item) => (
          <PlannerObject
            hovered={item.id === hoveredItemId}
            item={item}
            key={item.id}
            onBeginItemInteraction={onBeginItemInteraction}
            onHoverChange={setHoveredItemId}
            onInteractionChange={setOrbitEnabled}
            onSelect={() => onSelectItem(item.id)}
            onUpdateItem={onUpdateItem}
            sceneDepth={scene.depth}
            sceneWidth={scene.width}
            selected={item.id === selectedItemId}
          />
        ))}
      </Canvas>

      <div className="planner-stage__hint">
        <span className="pill">
          {selectedItem
            ? selectedItem.locked
              ? "This piece is locked. Unlock it from the sidebar to move or rotate it."
              : "Drag the piece to move it, drag the coral ring to rotate it, or use keys and buttons for nudging"
            : activeAssetKey
              ? "Drag empty space to orbit. Hold Shift and click the ground to place the active piece."
              : "Pick a piece from the palette to begin"}
        </span>
      </div>
    </div>
  );
}

interface PlannerMoodLightingPreset {
  ambientColor: string;
  ambientIntensity: number;
  background: string;
  directionalColor: string;
  directionalIntensity: number;
  fog: string;
  fogFarMultiplier: number;
  fogNearMultiplier: number;
  hemisphereColor: string;
  hemisphereGroundColor: string;
  hemisphereIntensity: number;
}

interface PlannerCanvasTheme {
  gridColor: string;
  gridSoftColor: string;
}

const defaultPlannerCanvasTheme: PlannerCanvasTheme = {
  gridColor: "#73777d",
  gridSoftColor: "#b8b7b2",
};

const plannerMoodLightingPresets: Record<PlannerMoodLighting, PlannerMoodLightingPreset> = {
  evening: {
    ambientColor: "#ffffff",
    ambientIntensity: 0.92,
    background: "#d8ccd4",
    directionalColor: "#fff7ef",
    directionalIntensity: 1.25,
    fog: "#ddd5da",
    fogFarMultiplier: 3.6,
    fogNearMultiplier: 1.2,
    hemisphereColor: "#fff7ef",
    hemisphereGroundColor: "#d8d5cf",
    hemisphereIntensity: 0.72,
  },
  dawn: {
    ambientColor: "#f9faf6",
    ambientIntensity: 0.88,
    background: "#e2e8df",
    directionalColor: "#fff8f0",
    directionalIntensity: 1.12,
    fog: "#edf2eb",
    fogFarMultiplier: 3.85,
    fogNearMultiplier: 1.35,
    hemisphereColor: "#f7fbf3",
    hemisphereGroundColor: "#d6ddd3",
    hemisphereIntensity: 0.66,
  },
  morning: {
    ambientColor: "#fff7e8",
    ambientIntensity: 0.88,
    background: "#ecd8af",
    directionalColor: "#ffe6b8",
    directionalIntensity: 1.02,
    fog: "#f2e4bf",
    fogFarMultiplier: 4.05,
    fogNearMultiplier: 1.48,
    hemisphereColor: "#fff1cf",
    hemisphereGroundColor: "#dccba8",
    hemisphereIntensity: 0.62,
  },
  midday: {
    ambientColor: "#edf2ff",
    ambientIntensity: 0.76,
    background: "#cdd7e6",
    directionalColor: "#f7e8df",
    directionalIntensity: 0.92,
    fog: "#d8e0ee",
    fogFarMultiplier: 4.1,
    fogNearMultiplier: 1.52,
    hemisphereColor: "#e4edff",
    hemisphereGroundColor: "#bfcad7",
    hemisphereIntensity: 0.58,
  },
};

function usePlannerCanvasTheme(): PlannerCanvasTheme {
  const [theme, setTheme] = useState<PlannerCanvasTheme>(defaultPlannerCanvasTheme);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const readTheme = () => {
      const styles = window.getComputedStyle(document.documentElement);
      setTheme({
        gridColor: styles.getPropertyValue("--planner-grid-color").trim() || defaultPlannerCanvasTheme.gridColor,
        gridSoftColor:
          styles.getPropertyValue("--planner-grid-soft-color").trim() ||
          defaultPlannerCanvasTheme.gridSoftColor,
      });
    };

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-style-mode"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return theme;
}

interface RoundedStagePlatformProps {
  width: number;
  depth: number;
  groundColor: string;
}

function RoundedStagePlatform({ width, depth, groundColor }: RoundedStagePlatformProps) {
  const geometry = useMemo(() => createRoundedPlatformGeometry(width, depth), [depth, width]);
  const insetGeometry = useMemo(
    () => createRoundedInsetGeometry(Math.max(width - 0.2, 1), Math.max(depth - 0.2, 1)),
    [depth, width],
  );
  const { rimColor, insetColor } = useMemo(() => {
    const inset = new THREE.Color(groundColor);
    const rim = new THREE.Color(groundColor);
    inset.offsetHSL(0, -0.05, 0.03);
    rim.offsetHSL(0, -0.1, 0.1);

    return {
      rimColor: `#${rim.getHexString()}`,
      insetColor: `#${inset.getHexString()}`,
    };
  }, [groundColor]);

  return (
    <group>
      <mesh castShadow receiveShadow geometry={geometry}>
        <meshStandardMaterial color={rimColor} roughness={0.96} metalness={0} />
      </mesh>
      <mesh geometry={insetGeometry} position={[0, 0.012, 0]}>
        <meshStandardMaterial color={insetColor} roughness={0.98} metalness={0} />
      </mesh>
    </group>
  );
}

interface PlannerObjectProps {
  item: PlannerItem;
  selected: boolean;
  hovered: boolean;
  sceneWidth: number;
  sceneDepth: number;
  onSelect: () => void;
  onHoverChange: (itemId: string | null) => void;
  onBeginItemInteraction: () => void;
  onUpdateItem: (
    itemId: string,
    patch: Partial<PlannerItem>,
    options?: PlannerUpdateOptions,
  ) => void;
  onInteractionChange: (enabled: boolean) => void;
}

function PlannerObject({
  item,
  selected,
  hovered,
  sceneWidth,
  sceneDepth,
  onSelect,
  onHoverChange,
  onBeginItemInteraction,
  onUpdateItem,
  onInteractionChange,
}: PlannerObjectProps) {
  const asset = getPlannerAsset(item.assetKey);
  const ringRadius = Math.max(asset?.footprint[0] ?? 1, asset?.footprint[1] ?? 1) * 0.55 + 0.28;
  const ringThickness = 0.12;
  const interactionRef = useRef<PlannerInteractionState | null>(null);
  const highlightColor = selected ? "#d67558" : "#7f9f78";

  function handleHoverStart(event: any) {
    event.stopPropagation();
    onHoverChange(item.id);
    document.body.style.cursor = item.locked ? "pointer" : "grab";
  }

  function handleHoverEnd(event: any) {
    event.stopPropagation();
    onHoverChange(null);
    document.body.style.cursor = "";
  }

  function handleMoveStart(event: any) {
    event.stopPropagation();
    onSelect();

    if (item.locked) {
      onInteractionChange(true);
      document.body.style.cursor = "pointer";
      return;
    }

    const point = getGroundPoint(event);
    if (!point) {
      return;
    }

    capturePointer(event);
    interactionRef.current = {
      historyRecorded: false,
      kind: "move",
      pointerId: event.pointerId,
      offsetX: item.position[0] - point.x,
      offsetZ: item.position[2] - point.z,
    };
    onInteractionChange(false);
    document.body.style.cursor = "grabbing";
  }

  function handleMove(event: any) {
    const interaction = interactionRef.current;
    if (!interaction || interaction.kind !== "move" || interaction.pointerId !== event.pointerId) {
      return;
    }

    event.stopPropagation();
    const point = getGroundPoint(event);
    if (!point) {
      return;
    }

    const nextPosition = clampItemPosition(
      item,
      sceneWidth,
      sceneDepth,
      snapPoint(point.x + interaction.offsetX),
      snapPoint(point.z + interaction.offsetZ),
    );

    if (!interaction.historyRecorded && !positionsMatch(item.position, nextPosition)) {
      interaction.historyRecorded = true;
      onBeginItemInteraction();
    }

    onUpdateItem(item.id, { position: nextPosition }, { recordHistory: false });
  }

  function handleRotateStart(event: any) {
    event.stopPropagation();
    onSelect();

    if (item.locked) {
      onInteractionChange(true);
      document.body.style.cursor = "pointer";
      return;
    }

    const point = getGroundPoint(event);
    if (!point) {
      return;
    }

    capturePointer(event);
    interactionRef.current = {
      historyRecorded: false,
      kind: "rotate",
      pointerId: event.pointerId,
      rotationOffset: item.rotationY - getRotationAngle(point.x, point.z, item.position),
    };
    onInteractionChange(false);
    document.body.style.cursor = "grabbing";
  }

  function handleRotate(event: any) {
    const interaction = interactionRef.current;
    if (!interaction || interaction.kind !== "rotate" || interaction.pointerId !== event.pointerId) {
      return;
    }

    event.stopPropagation();
    const point = getGroundPoint(event);
    if (!point) {
      return;
    }

    const nextRotation = normalizeRotation(
      getRotationAngle(point.x, point.z, item.position) + interaction.rotationOffset,
    );

    if (!interaction.historyRecorded && Math.abs(nextRotation - item.rotationY) > 0.0001) {
      interaction.historyRecorded = true;
      onBeginItemInteraction();
    }

    onUpdateItem(item.id, { rotationY: nextRotation }, { recordHistory: false });
  }

  function handleInteractionEnd(event: any) {
    const interaction = interactionRef.current;
    if (!interaction || interaction.pointerId !== event.pointerId) {
      return;
    }

    event.stopPropagation();
    releasePointer(event);
    interactionRef.current = null;
    onInteractionChange(true);
    document.body.style.cursor = hovered ? (item.locked ? "pointer" : "grab") : "";
  }

  return (
    <group
      onPointerCancel={handleInteractionEnd}
      onPointerDown={handleMoveStart}
      onPointerMove={handleMove}
      onPointerOut={handleHoverEnd}
      onPointerOver={handleHoverStart}
      onPointerUp={handleInteractionEnd}
      position={item.position}
      rotation={[0, item.rotationY, 0]}
      scale={[item.scale, item.scale, item.scale]}
    >
      <FurnitureModel assetKey={item.assetKey} selected={selected} />

      {selected || hovered ? (
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[ringRadius - 0.02, ringRadius + 0.02, 48]} />
          <meshBasicMaterial color={highlightColor} opacity={selected ? 0.95 : 0.55} transparent />
        </mesh>
      ) : null}

      {selected ? (
        <mesh
          onPointerCancel={handleInteractionEnd}
          onPointerDown={handleRotateStart}
          onPointerMove={handleRotate}
          onPointerOut={handleHoverEnd}
          onPointerOver={handleHoverStart}
          onPointerUp={handleInteractionEnd}
          position={[0, 0.05, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[ringRadius, ringRadius + ringThickness, 48]} />
          <meshBasicMaterial
            color={item.locked ? "#61766f" : "#d67558"}
            opacity={item.locked ? 0.6 : 0.9}
            transparent
          />
        </mesh>
      ) : null}
    </group>
  );
}

interface PlannerInteractionMoveState {
  historyRecorded: boolean;
  kind: "move";
  pointerId: number;
  offsetX: number;
  offsetZ: number;
}

interface PlannerInteractionRotateState {
  historyRecorded: boolean;
  kind: "rotate";
  pointerId: number;
  rotationOffset: number;
}

type PlannerInteractionState =
  | PlannerInteractionMoveState
  | PlannerInteractionRotateState;

function capturePointer(event: any) {
  event.target.setPointerCapture?.(event.pointerId);
}

function releasePointer(event: any) {
  event.target.releasePointerCapture?.(event.pointerId);
}

function snapPoint(value: number) {
  const snap = 0.25;
  return Math.round(value / snap) * snap;
}

function normalizeRotation(value: number) {
  const fullTurn = Math.PI * 2;
  const normalized = value % fullTurn;
  return normalized < 0 ? normalized + fullTurn : normalized;
}

function getRotationAngle(
  pointX: number,
  pointZ: number,
  position: [number, number, number],
) {
  return Math.atan2(pointX - position[0], pointZ - position[2]);
}

function getGroundPoint(event: any) {
  const ray = event?.ray;
  if (!ray) {
    return null;
  }

  const directionY = ray.direction?.y ?? 0;
  if (Math.abs(directionY) < 0.00001) {
    return null;
  }

  const distance = -(ray.origin?.y ?? 0) / directionY;
  if (!Number.isFinite(distance) || distance < 0) {
    return null;
  }

  return {
    x: (ray.origin?.x ?? 0) + (ray.direction?.x ?? 0) * distance,
    z: (ray.origin?.z ?? 0) + (ray.direction?.z ?? 0) * distance,
  };
}

function positionsMatch(
  left: [number, number, number],
  right: [number, number, number],
) {
  return left[0] === right[0] && left[1] === right[1] && left[2] === right[2];
}

function createRoundedPlatformGeometry(width: number, depth: number) {
  const radius = Math.min(Math.max(Math.min(width, depth) * 0.08, 0.35), 0.72);
  const shape = createRoundedRectangleShape(width, depth, radius);
  const geometry = new THREE.ExtrudeGeometry(shape, {
    bevelEnabled: false,
    depth: 0.18,
    steps: 1,
  });
  geometry.rotateX(Math.PI / 2);
  return geometry;
}

function createRoundedInsetGeometry(width: number, depth: number) {
  const radius = Math.min(Math.max(Math.min(width, depth) * 0.08, 0.28), 0.64);
  const shape = createRoundedRectangleShape(width, depth, radius);
  const geometry = new THREE.ShapeGeometry(shape);
  geometry.rotateX(Math.PI / 2);
  return geometry;
}

function createRoundedRectangleShape(width: number, depth: number, radius: number) {
  const boundedRadius = Math.min(radius, width / 2, depth / 2);
  const left = -width / 2;
  const top = depth / 2;
  const right = width / 2;
  const bottom = -depth / 2;
  const shape = new THREE.Shape();

  shape.moveTo(left + boundedRadius, top);
  shape.lineTo(right - boundedRadius, top);
  shape.quadraticCurveTo(right, top, right, top - boundedRadius);
  shape.lineTo(right, bottom + boundedRadius);
  shape.quadraticCurveTo(right, bottom, right - boundedRadius, bottom);
  shape.lineTo(left + boundedRadius, bottom);
  shape.quadraticCurveTo(left, bottom, left, bottom + boundedRadius);
  shape.lineTo(left, top - boundedRadius);
  shape.quadraticCurveTo(left, top, left + boundedRadius, top);

  return shape;
}
