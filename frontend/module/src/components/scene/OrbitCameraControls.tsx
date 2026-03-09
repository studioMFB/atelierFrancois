import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MOUSE } from "three";
import { OrbitControls as OrbitControlsImpl } from "three/examples/jsm/controls/OrbitControls.js";

type CameraTarget = [number, number, number];

interface OrbitCameraControlsProps {
  enabled?: boolean;
  target?: CameraTarget;
  minDistance?: number;
  maxDistance?: number;
  minPolarAngle?: number;
  maxPolarAngle?: number;
  onReady?: (controls: OrbitControlsImpl | null) => void;
}

export function OrbitCameraControls({
  enabled = true,
  target = [0, 0.5, 0],
  minDistance = 3,
  maxDistance = 26,
  minPolarAngle = 0.45,
  maxPolarAngle = Math.PI / 2.05,
  onReady,
}: OrbitCameraControlsProps) {
  const { camera, gl } = useThree();
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const onReadyRef = useRef(onReady);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    const controls = new OrbitControlsImpl(camera, gl.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.mouseButtons.LEFT = MOUSE.ROTATE;
    controls.mouseButtons.MIDDLE = MOUSE.DOLLY;
    controls.mouseButtons.RIGHT = MOUSE.ROTATE;
    controlsRef.current = controls;
    onReadyRef.current?.(controls);

    return () => {
      onReadyRef.current?.(null);
      controls.dispose();
      controlsRef.current = null;
    };
  }, [camera, gl]);

  useEffect(() => {
    if (!controlsRef.current) {
      return;
    }

    controlsRef.current.enabled = enabled;
  }, [enabled]);

  useEffect(() => {
    if (!controlsRef.current) {
      return;
    }

    controlsRef.current.target.set(target[0], target[1], target[2]);
    controlsRef.current.update();
  }, [target]);

  useEffect(() => {
    if (!controlsRef.current) {
      return;
    }

    controlsRef.current.minDistance = minDistance;
    controlsRef.current.maxDistance = maxDistance;
    controlsRef.current.minPolarAngle = minPolarAngle;
    controlsRef.current.maxPolarAngle = maxPolarAngle;
  }, [maxDistance, maxPolarAngle, minDistance, minPolarAngle]);

  useFrame(() => {
    controlsRef.current?.update();
  });

  return null;
}
