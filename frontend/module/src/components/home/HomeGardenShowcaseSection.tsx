import type { Product } from "@atelierfrancois/lilwud-sdk";
import { Canvas, useFrame, type ThreeEvent, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three/examples/jsm/controls/OrbitControls.js";

import { getPlannerAsset } from "@/components/planner/plannerAssets";
import { FurnitureModel, getFurnitureStage } from "@/components/scene/FurnitureModel";
import { OrbitCameraControls } from "@/components/scene/OrbitCameraControls";
import { toProductRoute } from "@/router";

interface HomeGardenShowcaseSectionProps {
  products: Product[];
  error: string | null;
}

interface HomeSceneProduct {
  product: Product;
  position: [number, number, number];
  rotationY: number;
  scale: number;
}

interface HomeGardenPreviewLayout {
  left: number;
  side: "left" | "right";
  top: number;
}

interface HomeGardenFocusItem {
  assetKey: string;
  description: string;
  eyebrow: string;
  id: string;
  plannerAssetKey: string;
  position: [number, number, number];
  product?: Product;
  rotationY: number;
  scale: number;
  tagline?: string;
  title: string;
}

const homeSceneProductSlots: Array<{
  position: [number, number, number];
  rotationY: number;
  scale: number;
}> = [
  {
    position: [-4.6, 0, 1.2],
    rotationY: Math.PI / 5.4,
    scale: 1,
  },
  {
    position: [0.6, 0, -1.6],
    rotationY: -Math.PI / 7,
    scale: 1,
  },
  {
    position: [5.3, 0, 1.4],
    rotationY: -Math.PI / 4.8,
    scale: 0.92,
  },
  {
    position: [0.8, 0, 4.4],
    rotationY: Math.PI / 6.6,
    scale: 0.88,
  },
];

const homeSceneProductOrder = [
  "mori-bench",
  "atelier-table",
  "nest-reading-nook",
  "cloud-lookout",
];

const homeSceneDecorItems: Array<{
  assetKey: string;
  position: [number, number, number];
  rotationY?: number;
  scale?: number;
}> = [
  {
    assetKey: "pine-tree",
    position: [-8.4, 0, -3.4],
    rotationY: Math.PI / 8,
    scale: 1.15,
  },
  {
    assetKey: "pine-tree",
    position: [8.1, 0, -4.8],
    rotationY: -Math.PI / 5,
    scale: 1.08,
  },
  {
    assetKey: "tall-shrub",
    position: [-6.2, 0, 4.5],
    rotationY: Math.PI / 6,
    scale: 1,
  },
  {
    assetKey: "moss-bush",
    position: [-7.2, 0, 2.6],
    rotationY: Math.PI / 4,
    scale: 0.95,
  },
  {
    assetKey: "moss-bush",
    position: [7.4, 0, 3],
    rotationY: -Math.PI / 4,
    scale: 1.02,
  },
  {
    assetKey: "stone-cluster",
    position: [-1.8, 0, 5.8],
    rotationY: Math.PI / 7,
    scale: 0.92,
  },
  {
    assetKey: "stone-cluster",
    position: [3.6, 0, -4.9],
    rotationY: -Math.PI / 6,
    scale: 0.9,
  },
  {
    assetKey: "pomu-tanuki",
    position: [-2.9, 0, 3.8],
    rotationY: Math.PI / 3.2,
    scale: 0.92,
  },
  {
    assetKey: "sunhat-moss",
    position: [6.6, 0, 0.3],
    rotationY: -Math.PI / 4.2,
    scale: 0.9,
  },
];

export function HomeGardenShowcaseSection({
  products,
  error,
}: HomeGardenShowcaseSectionProps) {
  const [entered, setEntered] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [previewLayout, setPreviewLayout] = useState<HomeGardenPreviewLayout | null>(null);
  const introCopyRef = useRef<HTMLDivElement | null>(null);
  const introCueRef = useRef<HTMLSpanElement | null>(null);
  const sceneProducts = useMemo(() => buildHomeSceneProducts(products), [products]);
  const selectedItem = useMemo(
    () => buildHomeGardenFocusItems(sceneProducts).find((entry) => entry.id === selectedId) ?? null,
    [sceneProducts, selectedId],
  );

  useEffect(() => {
    if (!entered) {
      setSelectedId(null);
      setPreviewLayout(null);
    }
  }, [entered]);

  useEffect(() => {
    if (!selectedId) {
      setPreviewLayout(null);
    }
  }, [selectedId]);

  const updateEnterCuePosition = (clientX: number, clientY: number) => {
    const container = introCopyRef.current;
    const cue = introCueRef.current;

    if (!container || !cue) {
      return;
    }

    const bounds = container.getBoundingClientRect();
    const cueWidth = cue.offsetWidth || 220;
    const cueHeight = cue.offsetHeight || 64;
    const nextX = clamp(clientX - bounds.left + 24, 16, bounds.width - cueWidth - 16);
    const nextY = clamp(clientY - bounds.top + 18, 16, bounds.height - cueHeight - 16);

    container.style.setProperty("--enter-cue-x", `${nextX}px`);
    container.style.setProperty("--enter-cue-y", `${nextY}px`);
  };

  return (
    <section className={`home-garden ${entered ? "home-garden--entered" : ""}`}>
      <div className="home-garden__canvas-shell">
        <div className="home-garden__canvas">
          <HomeGardenScene
            entered={entered}
            interactive={entered}
            onSelect={setSelectedId}
            onSelectionLayoutChange={setPreviewLayout}
            products={sceneProducts}
            selectedId={selectedId}
          />
        </div>

        <div
          aria-hidden={entered}
          className={`home-garden__copy ${entered ? "home-garden__copy--hidden" : ""}`}
          ref={introCopyRef}
        >
          <button
            aria-label="Enter the garden"
            className="home-garden__copy-hitarea"
            onClick={() => setEntered(true)}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") {
                updateEnterCuePosition(event.clientX, event.clientY);
              }
            }}
            onPointerMove={(event) => {
              if (event.pointerType !== "touch") {
                updateEnterCuePosition(event.clientX, event.clientY);
              }
            }}
            tabIndex={entered ? -1 : 0}
            type="button"
          />
          <p className="eyebrow">Lil&apos; Wud makes handmade outdoor furniture for children</p>

          <header className="home-garden__copy-text">
            <h1 className="home-garden__title">
              <span className="home-garden__title-line">Calm</span>
              <span className="home-garden__title-line home-garden__title-line--offset">
                and playful.
              </span>
            </h1>
            <p className="lede">
              Plan the garden first, then step into a quiet scene where every piece already lives among
              shrubs, paths, and small discoveries.
            </p>
          </header>

          <div className="home-garden__copy-actions">
            {error ? <p className="muted-copy">{error}</p> : null}
          </div>

          <span aria-hidden className="home-garden__enter-cue" ref={introCueRef}>
            Enter the garden
          </span>
        </div>

        {entered ? (
          <button className="ghost-button home-garden__overview-button" onClick={() => setEntered(false)} type="button">
            Return to the overview
          </button>
        ) : null}

        {entered && selectedItem && previewLayout ? (
          <aside
            className={`home-garden__preview home-garden__preview--${previewLayout.side}`}
            style={{ left: `${previewLayout.left}px`, top: `${previewLayout.top}px` }}
          >
            <button
              aria-label="Close details"
              className="home-garden__preview-close"
              onClick={() => setSelectedId(null)}
              type="button"
            >
              ×
            </button>
            <p className="eyebrow">{selectedItem.eyebrow}</p>
            <h2>{selectedItem.title}</h2>
            {selectedItem.tagline ? (
              <p className="home-garden__preview-tagline">{selectedItem.tagline}</p>
            ) : null}
            <p>{selectedItem.description}</p>
            <div className="home-garden__preview-footer">
              {selectedItem.product ? <strong>£{selectedItem.product.price.toFixed(0)}</strong> : null}
              <div className="button-row button-row--compact">
                <Link className="ghost-button" to={`/planner?asset=${selectedItem.plannerAssetKey}`}>
                  Open in planner
                </Link>
                {selectedItem.product ? (
                  <Link className="ghost-button" to={toProductRoute(selectedItem.product.slug)}>
                    View piece
                  </Link>
                ) : null}
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

function buildHomeSceneProducts(products: Product[]): HomeSceneProduct[] {
  const ordered = [...products].sort((left, right) => {
    const leftIndex = homeSceneProductOrder.indexOf(left.slug);
    const rightIndex = homeSceneProductOrder.indexOf(right.slug);

    if (leftIndex === -1 && rightIndex === -1) {
      return 0;
    }

    if (leftIndex === -1) {
      return 1;
    }

    if (rightIndex === -1) {
      return -1;
    }

    return leftIndex - rightIndex;
  });

  return ordered.slice(0, homeSceneProductSlots.length).map((product, index) => ({
    product,
    ...homeSceneProductSlots[index],
  }));
}

function buildHomeGardenFocusItems(products: HomeSceneProduct[]): HomeGardenFocusItem[] {
  const productItems = products.map((entry) => ({
    assetKey: entry.product.plannerAssetKey,
    description: entry.product.description,
    eyebrow: entry.product.category,
    id: entry.product.slug,
    plannerAssetKey: entry.product.plannerAssetKey,
    position: entry.position,
    product: entry.product,
    rotationY: entry.rotationY,
    scale: entry.scale,
    tagline: entry.product.tagline,
    title: entry.product.name,
  }));

  const mascotItems = homeSceneDecorItems.flatMap((item) => {
    const asset = getPlannerAsset(item.assetKey);

    if (!asset?.description) {
      return [];
    }

    return [
      {
        assetKey: item.assetKey,
        description: asset.description,
        eyebrow: "Garden mascot",
        id: item.assetKey,
        plannerAssetKey: item.assetKey,
        position: item.position,
        rotationY: item.rotationY ?? 0,
        scale: item.scale ?? 1,
        title: asset.label,
      },
    ];
  });

  return [...productItems, ...mascotItems];
}

function HomeGardenScene({
  products,
  entered,
  interactive,
  onSelectionLayoutChange,
  onSelect,
  selectedId,
}: {
  products: HomeSceneProduct[];
  entered: boolean;
  interactive: boolean;
  onSelectionLayoutChange: (layout: HomeGardenPreviewLayout | null) => void;
  onSelect: (id: string | null) => void;
  selectedId: string | null;
}) {
  const focusItems = useMemo(() => buildHomeGardenFocusItems(products), [products]);
  const selectedItem = focusItems.find((entry) => entry.id === selectedId) ?? null;

  return (
    <Canvas
      camera={{ position: [24.8, 15.6, 29.8], fov: 34 }}
      shadows
    >
      <HomeGardenCameraRig entered={entered} selectedItem={selectedItem} />
      <color args={["#ece8ff"]} attach="background" />
      <fog args={["#f2ecdf", 14, 28]} attach="fog" />
      <ambientLight color="#fff8f1" intensity={1.08} />
      <hemisphereLight color="#eef4ff" groundColor="#c7d0b9" intensity={0.84} />
      <directionalLight
        castShadow
        color="#fff3df"
        intensity={1.42}
        position={[10, 14, 6]}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
      />

      <GardenGround />

      {homeSceneDecorItems.map((item) => (
        getPlannerAsset(item.assetKey)?.description ? null : (
          <group
            key={`${item.assetKey}-${item.position.join("-")}`}
            position={item.position}
            rotation={[0, item.rotationY ?? 0, 0]}
            scale={item.scale ?? 1}
          >
            <FurnitureModel assetKey={item.assetKey} />
          </group>
        )
      ))}

      {selectedItem ? (
        <HomeGardenSelectionAnchor item={selectedItem} onLayoutChange={onSelectionLayoutChange} />
      ) : null}

      {products.map((entry) => (
        <HomeGardenProductPiece
          entry={entry}
          interactive={interactive}
          key={entry.product.slug}
          onSelect={onSelect}
          selected={selectedId === entry.product.slug}
        />
      ))}

      {homeSceneDecorItems.map((item) => {
        const asset = getPlannerAsset(item.assetKey);

        if (!asset?.description) {
          return null;
        }

        return (
          <HomeGardenDecorPiece
            assetKey={item.assetKey}
            interactive={interactive}
            key={`${item.assetKey}-detail`}
            onSelect={onSelect}
            position={item.position}
            rotationY={item.rotationY ?? 0}
            scale={item.scale ?? 1}
            selected={selectedId === item.assetKey}
          />
        );
      })}
    </Canvas>
  );
}

function HomeGardenCameraRig({
  entered,
  selectedItem,
}: {
  entered: boolean;
  selectedItem: HomeGardenFocusItem | null;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const currentLookAt = useRef(new THREE.Vector3(0, 1.5, 1));
  const fromPosition = useRef(new THREE.Vector3(24.8, 15.6, 29.8));
  const toPosition = useRef(new THREE.Vector3(24.8, 15.6, 29.8));
  const fromTarget = useRef(new THREE.Vector3(0, 1.5, 1));
  const toTarget = useRef(new THREE.Vector3(0, 1.5, 1));
  const progress = useRef(1);
  const overviewTarget = useMemo<[number, number, number]>(() => [0, 1.5, 1], []);
  const canNavigate = entered;
  const distanceLimits = selectedItem
    ? { maxDistance: 12, minDistance: 3 }
    : entered
      ? { maxDistance: 22, minDistance: 5 }
      : { maxDistance: 24, minDistance: 10 };

  useEffect(() => {
    const nextState = getHomeGardenCameraState(entered, selectedItem);
    const controls = controlsRef.current;
    const currentTarget = controls
      ? readOrbitTarget(controls)
      : currentLookAt.current;

    fromPosition.current.copy(camera.position);
    toPosition.current.copy(nextState.position);
    fromTarget.current.copy(currentTarget);
    toTarget.current.copy(nextState.target);
    progress.current = 0;
  }, [camera, entered, selectedItem]);

  useFrame((_, delta) => {
    const controls = controlsRef.current;

    if (progress.current < 1) {
      progress.current = Math.min(1, progress.current + delta / 1.15);
      const eased = 1 - Math.pow(1 - progress.current, 3);
      const nextTarget = currentLookAt.current.lerpVectors(
        fromTarget.current,
        toTarget.current,
        eased,
      );

      camera.position.lerpVectors(fromPosition.current, toPosition.current, eased);

      if (controls) {
        setOrbitTarget(controls, nextTarget);
        controls.update();
      } else {
        camera.lookAt(nextTarget);
      }

      return;
    }

    currentLookAt.current.copy(controls ? readOrbitTarget(controls) : toTarget.current);
    controls?.update();
  });

  return (
    <OrbitCameraControls
      enabled={canNavigate}
      maxDistance={distanceLimits.maxDistance}
      minDistance={distanceLimits.minDistance}
      onReady={(controls) => {
        controlsRef.current = controls;

        if (!controls) {
          return;
        }

        setOrbitTarget(controls, currentLookAt.current);
        controls.update();
      }}
      target={overviewTarget}
    />
  );
}

function HomeGardenProductPiece({
  entry,
  interactive,
  onSelect,
  selected,
}: {
  entry: HomeSceneProduct;
  interactive: boolean;
  onSelect: (id: string | null) => void;
  selected: boolean;
}) {
  const stage = getFurnitureStage(entry.product.plannerAssetKey);
  const ringRadius = Math.max(stage.footprint[0], stage.footprint[1]) * 0.62;
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!interactive) {
      setHovered(false);
      document.body.style.cursor = "";
    }
  }, [interactive]);

  const handlePointerEnter = (event: ThreeEvent<PointerEvent>) => {
    if (!interactive) {
      return;
    }

    event.stopPropagation();
    setHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerLeave = (event: ThreeEvent<PointerEvent>) => {
    if (!interactive) {
      return;
    }

    event.stopPropagation();
    setHovered(false);
    document.body.style.cursor = "";
  };

  return (
    <group
      position={entry.position}
      rotation={[0, entry.rotationY, 0]}
      scale={entry.scale}
      onClick={(event) => {
        if (!interactive) {
          return;
        }

        event.stopPropagation();
        onSelect(entry.product.slug);
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[ringRadius * 0.84, ringRadius, 40]} />
        <meshBasicMaterial
          color={selected || hovered ? "#ff6f3d" : "#736ef2"}
          opacity={selected ? 0.9 : hovered ? 0.82 : 0.28}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh position={[0, 0.012, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[ringRadius * 0.92, 40]} />
        <meshStandardMaterial color="#c5ccb7" opacity={0.16} roughness={1} transparent />
      </mesh>
      <FurnitureModel assetKey={entry.product.plannerAssetKey} />
    </group>
  );
}

function HomeGardenDecorPiece({
  assetKey,
  interactive,
  onSelect,
  position,
  rotationY,
  scale,
  selected,
}: {
  assetKey: string;
  interactive: boolean;
  onSelect: (id: string | null) => void;
  position: [number, number, number];
  rotationY: number;
  scale: number;
  selected: boolean;
}) {
  const stage = getFurnitureStage(assetKey);
  const ringRadius = Math.max(stage.footprint[0], stage.footprint[1]) * 0.58;
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!interactive) {
      setHovered(false);
      document.body.style.cursor = "";
    }
  }, [interactive]);

  return (
    <group
      position={position}
      rotation={[0, rotationY, 0]}
      scale={scale}
      onClick={(event) => {
        if (!interactive) {
          return;
        }

        event.stopPropagation();
        onSelect(assetKey);
      }}
      onPointerEnter={(event) => {
        if (!interactive) {
          return;
        }

        event.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={(event) => {
        if (!interactive) {
          return;
        }

        event.stopPropagation();
        setHovered(false);
        document.body.style.cursor = "";
      }}
    >
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[ringRadius * 0.84, ringRadius, 40]} />
        <meshBasicMaterial
          color={selected || hovered ? "#ff6f3d" : "#736ef2"}
          opacity={selected ? 0.88 : hovered ? 0.78 : 0.24}
          toneMapped={false}
          transparent
        />
      </mesh>
      <FurnitureModel assetKey={assetKey} />
    </group>
  );
}

function HomeGardenSelectionAnchor({
  item,
  onLayoutChange,
}: {
  item: HomeGardenFocusItem;
  onLayoutChange: (layout: HomeGardenPreviewLayout | null) => void;
}) {
  const { camera, size } = useThree();
  const lastLayout = useRef<string>("");
  const stage = useMemo(() => getFurnitureStage(item.assetKey), [item.assetKey]);

  useEffect(() => {
    return () => {
      onLayoutChange(null);
    };
  }, [onLayoutChange]);

  useFrame(() => {
    const anchor = new THREE.Vector3(
      item.position[0],
      stage.targetY + Math.max(stage.height * 0.34, 0.7),
      item.position[2],
    );

    anchor.project(camera);

    if (anchor.z < -1 || anchor.z > 1) {
      if (lastLayout.current !== "hidden") {
        lastLayout.current = "hidden";
        onLayoutChange(null);
      }
      return;
    }

    const screenX = (anchor.x * 0.5 + 0.5) * size.width;
    const screenY = (-anchor.y * 0.5 + 0.5) * size.height;
    const cardWidth = size.width < 640 ? Math.min(size.width - 24, 280) : 320;
    const cardHeight = size.width < 640 ? 216 : 248;
    const side: HomeGardenPreviewLayout["side"] =
      screenX < size.width * 0.54 ? "right" : "left";
    const nextLeft = clamp(
      side === "right" ? screenX + 28 : screenX - cardWidth - 28,
      12,
      size.width - cardWidth - 12,
    );
    const nextTop = clamp(screenY - cardHeight * 0.42, 76, size.height - cardHeight - 12);
    const signature = `${Math.round(nextLeft)}:${Math.round(nextTop)}:${side}`;

    if (lastLayout.current === signature) {
      return;
    }

    lastLayout.current = signature;
    onLayoutChange({
      left: nextLeft,
      side,
      top: nextTop,
    });
  });

  return null;
}

function getHomeGardenCameraState(
  entered: boolean,
  selectedItem: HomeGardenFocusItem | null,
) {
  if (!entered) {
    return {
      position: new THREE.Vector3(24.8, 15.6, 29.8),
      target: new THREE.Vector3(0, 1.5, 1),
    };
  }

  if (!selectedItem) {
    return {
      position: new THREE.Vector3(5.8, 4.2, 5.9),
      target: new THREE.Vector3(1.1, 1, 1.6),
    };
  }

  const stage = getFurnitureStage(selectedItem.assetKey);
  const target = new THREE.Vector3(
    selectedItem.position[0],
    stage.targetY + 0.16,
    selectedItem.position[2],
  );
  const focusDistance = Math.max(stage.maxSpan * 2.2, 4.6);
  const offset = new THREE.Vector3(
    focusDistance * 0.78,
    Math.max(stage.height * 1.5, 2.4),
    focusDistance * 0.88,
  );

  offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), selectedItem.rotationY + Math.PI / 12);

  return {
    position: target.clone().add(offset),
    target,
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function readOrbitTarget(controls: OrbitControlsImpl) {
  const target = controls.target as unknown as THREE.Vector3;
  return new THREE.Vector3(target.x, target.y, target.z);
}

function setOrbitTarget(controls: OrbitControlsImpl, target: THREE.Vector3) {
  controls.target.set(target.x, target.y, target.z);
}

function GardenGround() {
  return (
    <group>
      <mesh position={[0, -0.06, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[28, 24]} />
        <meshStandardMaterial color="#efe7d7" roughness={0.98} />
      </mesh>

      <mesh position={[0, -0.01, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[11.5, 80]} />
        <meshStandardMaterial color="#d6dfc5" roughness={0.96} />
      </mesh>

      <mesh position={[-2.2, 0.02, 2.6]} receiveShadow rotation={[-Math.PI / 2, 0.12, 0]}>
        <circleGeometry args={[4.8, 70]} />
        <meshStandardMaterial color="#e7ddc9" roughness={0.98} />
      </mesh>

      <mesh position={[5.8, 0.015, -1.8]} receiveShadow rotation={[-Math.PI / 2, -0.18, 0]}>
        <circleGeometry args={[3.9, 60]} />
        <meshStandardMaterial color="#e3d6bf" roughness={0.98} />
      </mesh>

      <mesh position={[-6.8, 0.03, -1.6]} receiveShadow rotation={[-Math.PI / 2, 0.24, 0]}>
        <circleGeometry args={[2.4, 42]} />
        <meshStandardMaterial color="#d5e0c7" roughness={0.98} />
      </mesh>

      <mesh position={[7.4, 0.03, 4.2]} receiveShadow rotation={[-Math.PI / 2, -0.12, 0]}>
        <circleGeometry args={[2.2, 40]} />
        <meshStandardMaterial color="#d0dcc2" roughness={0.98} />
      </mesh>
    </group>
  );
}
