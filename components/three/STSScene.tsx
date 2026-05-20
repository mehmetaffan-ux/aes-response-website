"use client";

import { AdaptiveDpr, Float, Line, PerspectiveCamera, QuadraticBezierLine } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type SceneProps = {
  reduceMotion: boolean;
};

const hullMaterial = new THREE.MeshStandardMaterial({
  color: "#132238",
  roughness: 0.58,
  metalness: 0.36,
});

const deckMaterial = new THREE.MeshStandardMaterial({
  color: "#27384f",
  roughness: 0.48,
  metalness: 0.22,
});

const glassMaterial = new THREE.MeshStandardMaterial({
  color: "#8edff2",
  emissive: "#164e63",
  emissiveIntensity: 0.28,
  roughness: 0.18,
  metalness: 0.18,
  transparent: true,
  opacity: 0.74,
});

const rubberMaterial = new THREE.MeshStandardMaterial({
  color: "#0a0f1c",
  roughness: 0.76,
  metalness: 0.12,
});

const manifoldMaterial = new THREE.MeshStandardMaterial({
  color: "#334155",
  roughness: 0.5,
  metalness: 0.38,
});

function StaticSceneBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_20%,rgba(103,232,249,0.14),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.55),rgba(2,6,23,0.9))]" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[repeating-linear-gradient(175deg,rgba(103,232,249,0.12)_0_1px,transparent_1px_28px),linear-gradient(180deg,rgba(8,47,73,0.16),rgba(6,24,39,0.72))]" />
      <div className="absolute left-[17%] top-[31%] h-[18%] w-[25%] -rotate-3 rounded-[22px_10px_18px_22px] border border-cyan-100/10 bg-slate-900/72 shadow-[0_26px_80px_rgba(8,145,178,0.18)]" />
      <div className="absolute right-[17%] top-[33%] h-[18%] w-[25%] rotate-3 rounded-[10px_22px_22px_18px] border border-cyan-100/10 bg-slate-900/72 shadow-[0_26px_80px_rgba(8,145,178,0.18)]" />
      <div className="absolute left-[24%] top-[27%] h-[6%] w-[12%] rounded-sm border border-cyan-100/10 bg-slate-700/45" />
      <div className="absolute right-[24%] top-[29%] h-[6%] w-[12%] rounded-sm border border-cyan-100/10 bg-slate-700/45" />
      <div className="absolute left-[47.5%] top-[36%] flex h-[24%] flex-col justify-between">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className="block h-7 w-11 rounded-full border border-amber-200/35 bg-slate-950/86 shadow-[0_0_18px_rgba(34,211,238,0.22)]"
          />
        ))}
      </div>
      <div className="absolute left-[31%] top-[26%] h-[24%] w-[38%] rounded-[50%] border-t-4 border-cyan-200/42" />
      <div className="absolute left-[18%] top-[43%] h-px w-[64%] bg-gradient-to-r from-transparent via-cyan-200/38 to-transparent" />
      <div className="absolute right-[13%] top-[16%] size-28 rounded-full border border-cyan-200/12" />
      <div className="absolute right-[10%] top-[11%] size-40 rounded-full border border-cyan-200/8" />
    </div>
  );
}

function SeaSurface({ reduceMotion }: SceneProps) {
  const meshRef = useRef<THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial>>(null);
  const segments = useMemo(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return 32;
    }

    return 52;
  }, []);

  useFrame(({ clock }) => {
    if (reduceMotion || !meshRef.current) {
      return;
    }

    const position = meshRef.current.geometry.attributes.position;
    const elapsed = clock.elapsedTime;

    for (let index = 0; index < position.count; index += 1) {
      const x = position.getX(index);
      const y = position.getY(index);
      const wave =
        Math.sin(x * 1.35 + elapsed * 0.75) * 0.035 +
        Math.cos(y * 1.85 + elapsed * 0.58) * 0.028;
      position.setZ(index, wave);
    }

    position.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]}>
      <planeGeometry args={[11.5, 8.2, segments, segments]} />
      <meshStandardMaterial
        color="#061827"
        roughness={0.68}
        metalness={0.18}
        transparent
        opacity={0.92}
      />
    </mesh>
  );
}

function DeckLights({ side = 1 }: { side?: 1 | -1 }) {
  const positions: [number, number, number][] = [
    [side * 0.24, 0.51, -1.62],
    [side * 0.24, 0.51, -0.78],
    [side * 0.24, 0.51, 0.78],
    [side * 0.24, 0.51, 1.62],
  ];

  return (
    <>
      {positions.map((position) => (
        <group key={position.join(":")} position={position}>
          <mesh>
            <sphereGeometry args={[0.035, 12, 8]} />
            <meshBasicMaterial color="#fef3c7" />
          </mesh>
          <pointLight color="#facc15" intensity={0.28} distance={1.4} />
        </group>
      ))}
    </>
  );
}

function Vessel({
  position,
  side,
  name,
}: {
  position: [number, number, number];
  side: 1 | -1;
  name: string;
}) {
  return (
    <group position={position}>
      <mesh position={[0, 0.18, 0]} material={hullMaterial}>
        <boxGeometry args={[0.95, 0.42, 4.4]} />
      </mesh>
      <mesh position={[0, -0.01, -2.22]} material={rubberMaterial}>
        <coneGeometry args={[0.48, 0.8, 4]} />
      </mesh>
      <mesh position={[0, -0.01, 2.22]} rotation={[0, Math.PI, 0]} material={rubberMaterial}>
        <coneGeometry args={[0.48, 0.8, 4]} />
      </mesh>
      <mesh position={[0, 0.44, 0]} material={deckMaterial}>
        <boxGeometry args={[0.78, 0.13, 3.72]} />
      </mesh>
      <mesh position={[0, 0.68, -1.25]} material={deckMaterial}>
        <boxGeometry args={[0.58, 0.34, 0.86]} />
      </mesh>
      <mesh position={[0, 0.91, -1.28]} material={glassMaterial}>
        <boxGeometry args={[0.46, 0.11, 0.5]} />
      </mesh>
      <mesh position={[side * 0.5, 0.58, -0.55]} material={glassMaterial}>
        <boxGeometry args={[0.035, 0.055, 1.22]} />
      </mesh>
      <mesh position={[side * 0.53, 0.61, 0.52]} material={glassMaterial}>
        <boxGeometry args={[0.045, 0.06, 0.5]} />
      </mesh>
      <mesh position={[side * 0.56, 0.56, -0.95]} material={manifoldMaterial}>
        <boxGeometry args={[0.08, 0.14, 0.34]} />
      </mesh>
      <Line
        points={[
          [side * 0.5, 0.71, -2.02],
          [side * 0.5, 0.73, -1.26],
          [side * 0.5, 0.72, -0.46],
          [side * 0.5, 0.72, 0.42],
          [side * 0.5, 0.7, 1.64],
        ]}
        color="#7dd3fc"
        transparent
        opacity={0.26}
        lineWidth={1.2}
      />
      <DeckLights side={side} />
      <mesh position={[0, 0.54, 1.58]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.026, 0.026, 0.8, 10]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.42} metalness={0.6} />
      </mesh>
      <mesh position={[side * 0.47, 0.72, 1.82]}>
        <boxGeometry args={[0.04, 0.24, 0.28]} />
        <meshStandardMaterial color="#475569" roughness={0.52} metalness={0.42} />
      </mesh>
      <group position={[0, 0.86, 2.08]}>
        <mesh>
          <boxGeometry args={[0.66, 0.04, 0.06]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.42} />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.38, 0.025, 0.05]} />
          <meshBasicMaterial color="#fef3c7" transparent opacity={0.72} />
        </mesh>
      </group>
      <mesh position={[0, 0.64, 2.34]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.206, 32]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.16} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.9, 2.55]}>
        <boxGeometry args={[0.7, 0.03, 0.04]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.12} />
      </mesh>
      <mesh position={[0, 0.98, 2.72]}>
        <boxGeometry args={[0.58, 0.03, 0.04]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.1} />
      </mesh>
      <group position={[0, 0.76, 0]}>
        <Line
          points={[
            [-0.24, 0, 1.95],
            [0.24, 0, 1.95],
          ]}
          color="#f8fafc"
          transparent
          opacity={0.16}
          lineWidth={1}
        />
      </group>
      <mesh position={[side * 0.36, 0.68, -1.72]} visible={false}>
        <boxGeometry args={[0.01, 0.01, 0.01]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <group name={name} />
    </group>
  );
}

function Fenders({ reduceMotion }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reduceMotion || !groupRef.current) {
      return;
    }

    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.018;
  });

  return (
    <group ref={groupRef}>
      {[-1.48, -0.52, 0.52, 1.48].map((z, index) => (
        <group key={z} position={[0, 0.45, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.62, 28]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#111827" : "#172033"}
              roughness={0.7}
              metalness={0.1}
            />
          </mesh>
          <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.205, 0.012, 8, 30]} />
            <meshBasicMaterial color="#fbbf24" transparent opacity={0.78} />
          </mesh>
          <Line
            points={[
              [-0.18, 0.32, 0],
              [-0.52, 0.62, 0],
            ]}
            color="#94a3b8"
            transparent
            opacity={0.28}
            lineWidth={1}
          />
          <Line
            points={[
              [0.18, 0.32, 0],
              [0.52, 0.62, 0],
            ]}
            color="#94a3b8"
            transparent
            opacity={0.28}
            lineWidth={1}
          />
        </group>
      ))}
    </group>
  );
}

function TransferLines({ reduceMotion }: SceneProps) {
  const lineRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reduceMotion || !lineRef.current) {
      return;
    }

    lineRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.7) * 0.01;
  });

  return (
    <group ref={lineRef}>
      <QuadraticBezierLine
        start={[-1.04, 0.78, -0.92]}
        mid={[0, 1.28, -1.05]}
        end={[1.04, 0.78, -0.92]}
        color="#67e8f9"
        lineWidth={4}
        transparent
        opacity={0.88}
      />
      <QuadraticBezierLine
        start={[-1.03, 0.7, -0.72]}
        mid={[0, 1.06, -0.83]}
        end={[1.03, 0.7, -0.72]}
        color="#0f172a"
        lineWidth={6}
        transparent
        opacity={0.72}
      />
      <QuadraticBezierLine
        start={[-1.05, 0.84, -1.08]}
        mid={[0, 1.48, -1.32]}
        end={[1.05, 0.84, -1.08]}
        color="#c4f1ff"
        lineWidth={1.4}
        transparent
        opacity={0.56}
      />
    </group>
  );
}

function RadarPulse({ reduceMotion }: SceneProps) {
  const pulseRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reduceMotion || !pulseRef.current) {
      return;
    }

    pulseRef.current.rotation.z = clock.elapsedTime * 0.42;
    pulseRef.current.children.forEach((child, index) => {
      const mesh = child as THREE.Mesh;
      const scale = 1 + ((clock.elapsedTime * 0.45 + index * 0.26) % 1) * 0.2;
      mesh.scale.setScalar(scale);
    });
  });

  return (
    <group ref={pulseRef} position={[2.4, 1.58, -2.12]} rotation={[Math.PI / 2.8, 0, -0.35]}>
      {[0.26, 0.48, 0.72].map((radius) => (
        <mesh key={radius}>
          <torusGeometry args={[radius, 0.006, 8, 58]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={0.2} />
        </mesh>
      ))}
      <mesh rotation={[0, 0, 0.64]}>
        <circleGeometry args={[0.78, 48, 0, 0.72]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function SceneCameraRig({ reduceMotion }: SceneProps) {
  const { camera, pointer } = useThree();

  useFrame(({ clock }) => {
    if (reduceMotion) {
      camera.lookAt(0, 0.48, 0);
      return;
    }

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 4.7 + pointer.x * 0.22, 0.04);
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      3.1 + pointer.y * 0.16 + Math.sin(clock.elapsedTime * 0.28) * 0.04,
      0.04,
    );
    camera.lookAt(0, 0.42, 0);
  });

  return null;
}

function OperationScene({ reduceMotion }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (reduceMotion || !groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.22) * 0.025;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[4.7, 3.1, 6.4]} fov={38} />
      <SceneCameraRig reduceMotion={reduceMotion} />
      <ambientLight intensity={0.46} />
      <directionalLight position={[-3, 6, 4]} intensity={1.25} color="#dff8ff" />
      <pointLight position={[2.2, 1.7, -2]} intensity={0.8} color="#67e8f9" distance={5} />
      <pointLight position={[-2.4, 1.25, 2.2]} intensity={0.42} color="#fbbf24" distance={4} />
      <fog attach="fog" args={["#020617", 6.2, 13]} />

      <group ref={groupRef} position={[0, -0.12, 0]} rotation={[0, -0.14, 0]}>
        <SeaSurface reduceMotion={reduceMotion} />
        <Float speed={reduceMotion ? 0 : 0.8} rotationIntensity={0.08} floatIntensity={0.06}>
          <Vessel position={[-1.15, 0.28, 0]} side={1} name="Casualty vessel" />
        </Float>
        <Float speed={reduceMotion ? 0 : 0.72} rotationIntensity={0.06} floatIntensity={0.05}>
          <Vessel position={[1.15, 0.28, 0]} side={-1} name="Receiving vessel" />
        </Float>
        <Fenders reduceMotion={reduceMotion} />
        <TransferLines reduceMotion={reduceMotion} />
        <RadarPulse reduceMotion={reduceMotion} />

        <Line
          points={[
            [-3.3, 0.02, -2.6],
            [-2.2, 0.02, -2.74],
            [-1.1, 0.02, -2.62],
            [0.2, 0.02, -2.75],
            [1.6, 0.02, -2.58],
            [3.4, 0.02, -2.66],
          ]}
          color="#67e8f9"
          transparent
          opacity={0.22}
          lineWidth={1}
        />
        <Line
          points={[
            [-3.2, 0.02, 2.72],
            [-1.9, 0.02, 2.58],
            [-0.5, 0.02, 2.76],
            [0.8, 0.02, 2.64],
            [2.4, 0.02, 2.74],
            [3.5, 0.02, 2.62],
          ]}
          color="#2dd4bf"
          transparent
          opacity={0.18}
          lineWidth={1}
        />
      </group>
    </>
  );
}

export function STSScene() {
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <div
      className="relative mx-auto aspect-[1.18] w-full max-w-[650px] overflow-hidden rounded-lg border border-cyan-200/20 bg-slate-950/78 shadow-2xl shadow-cyan-950/35 backdrop-blur-xl sm:aspect-[1.04]"
      aria-label="Three-dimensional emergency ship-to-ship transfer scene"
    >
      <StaticSceneBackdrop />
      <Canvas
        className="relative z-10"
        dpr={[1, 1.55]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <OperationScene reduceMotion={reduceMotion} />
        <AdaptiveDpr pixelated />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 z-20 rounded-lg bg-[radial-gradient(circle_at_70%_20%,rgba(103,232,249,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0)_58%,rgba(2,6,23,0.56))]" />
      <div className="pointer-events-none absolute left-5 top-5 z-30 rounded-lg border border-cyan-200/16 bg-slate-950/70 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur">
        <p className="text-xs font-semibold uppercase text-cyan-200">
          STS transfer control
        </p>
        <p className="mt-1 text-sm text-slate-300">Fenders, hose, watchkeeping</p>
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-30 grid gap-2 sm:grid-cols-3">
        {["Casualty vessel", "Pneumatic fenders", "Receiving vessel"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-cyan-200/12 bg-slate-950/72 px-3 py-2 text-center text-xs font-semibold text-slate-200 shadow-lg shadow-black/15 backdrop-blur"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
