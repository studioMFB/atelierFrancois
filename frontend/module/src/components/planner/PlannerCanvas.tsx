import type { PlannerItem, PlannerScene } from "@atelierfrancois/lilwud-sdk";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

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
  const cameraPosition: [number, number, number] = [
    largestDimension * 0.9,
    Math.max(5.5, largestDimension * 0.72),
    largestDimension * 1.02,
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
        <color args={["#eef1e7"]} attach="background" />
        <fog args={["#eef1e7", largestDimension * 1.5, largestDimension * 3.8]} attach="fog" />
        <ambientLight intensity={1.05} />
        <hemisphereLight color="#fff8ee" groundColor="#c9d6c4" intensity={0.7} />
        <directionalLight
          castShadow
          intensity={1.4}
          position={[largestDimension * 0.72, largestDimension * 1.3, largestDimension * 0.5]}
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
        />

        <OrbitCameraControls
          enabled={orbitEnabled}
          maxDistance={Math.max(16, largestDimension * 2.4)}
          minDistance={Math.max(4.5, largestDimension * 0.62)}
          target={[0, 0.45, 0]}
        />

        <gridHelper
          args={[largestDimension, Math.round(largestDimension * 2), "#8ba18b", "#cbd6c8"]}
          position={[0, 0.01, 0]}
        />

        <mesh
          receiveShadow
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
          <meshStandardMaterial color={groundColor} />
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
