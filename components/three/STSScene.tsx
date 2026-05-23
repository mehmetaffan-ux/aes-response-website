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
  color: "#9dbad1",
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

const railMaterial = new THREE.MeshStandardMaterial({
  color: "#9fb6c8",
  roughness: 0.42,
  metalness: 0.46,
});

const fenderMaterial = new THREE.MeshStandardMaterial({
  color: "#1f2937",
  emissive: "#0f172a",
  emissiveIntensity: 0.12,
  roughness: 0.82,
  metalness: 0.08,
});

const fenderBandMaterial = new THREE.MeshStandardMaterial({
  color: "#d97706",
  emissive: "#7c2d12",
  emissiveIntensity: 0.18,
  roughness: 0.54,
  metalness: 0.1,
});

const hoseEndMaterial = new THREE.MeshStandardMaterial({
  color: "#fbbf24",
  emissive: "#78350f",
  emissiveIntensity: 0.12,
  roughness: 0.42,
  metalness: 0.34,
});

function StaticSceneBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_20%,rgba(111,156,188,0.14),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.55),rgba(2,6,23,0.9))]" />
      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[repeating-linear-gradient(175deg,rgba(111,156,188,0.12)_0_1px,transparent_1px_28px),linear-gradient(180deg,rgba(8,47,73,0.16),rgba(6,24,39,0.72))]" />
      <div className="absolute left-[17%] top-[31%] h-[18%] w-[25%] -rotate-3 rounded-[22px_10px_18px_22px] border border-cyan-100/10 bg-slate-900/72 shadow-[0_26px_80px_rgba(42,84,112,0.18)]" />
      <div className="absolute right-[17%] top-[33%] h-[18%] w-[25%] rotate-3 rounded-[10px_22px_22px_18px] border border-cyan-100/10 bg-slate-900/72 shadow-[0_26px_80px_rgba(42,84,112,0.18)]" />
      <div className="absolute left-[24%] top-[27%] h-[6%] w-[12%] rounded-sm border border-cyan-100/10 bg-slate-700/45" />
      <div className="absolute right-[24%] top-[29%] h-[6%] w-[12%] rounded-sm border border-cyan-100/10 bg-slate-700/45" />
      <div className="absolute left-[47.5%] top-[36%] flex h-[24%] flex-col justify-between">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            className="block h-7 w-11 rounded-full border border-amber-200/35 bg-slate-950/86 shadow-[0_0_18px_rgba(76,120,150,0.22)]"
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
        color="#082337"
        roughness={0.62}
        metalness={0.22}
        transparent
        opacity={0.96}
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
            <sphereGeometry args={[0.026, 12, 8]} />
            <meshBasicMaterial color="#fef3c7" transparent opacity={0.86} />
          </mesh>
          <pointLight color="#facc15" intensity={0.16} distance={1.1} />
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
  const hullShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -2.38);
    shape.lineTo(-0.52, -1.78);
    shape.lineTo(-0.56, 1.78);
    shape.quadraticCurveTo(-0.52, 2.28, -0.34, 2.42);
    shape.lineTo(0.34, 2.42);
    shape.quadraticCurveTo(0.52, 2.28, 0.56, 1.78);
    shape.lineTo(0.52, -1.78);
    shape.closePath();
    return shape;
  }, []);

  const hullExtrudeSettings = useMemo(
    () => ({
      depth: 0.42,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.028,
      bevelThickness: 0.034,
    }),
    [],
  );

  return (
    <group position={position}>
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]} material={hullMaterial}>
        <extrudeGeometry args={[hullShape, hullExtrudeSettings]} />
      </mesh>
      <mesh position={[0, 0.48, 0.12]} material={deckMaterial}>
        <boxGeometry args={[0.84, 0.08, 3.74]} />
      </mesh>
      <mesh position={[side * 0.46, 0.54, 0.1]} material={railMaterial}>
        <boxGeometry args={[0.035, 0.055, 3.58]} />
      </mesh>
      <mesh position={[-side * 0.46, 0.54, 0.1]} material={railMaterial}>
        <boxGeometry args={[0.026, 0.04, 3.12]} />
      </mesh>
      <mesh position={[0, 0.66, -1.18]} material={deckMaterial}>
        <boxGeometry args={[0.54, 0.28, 0.82]} />
      </mesh>
      <mesh position={[0, 0.86, -1.2]} material={deckMaterial}>
        <boxGeometry args={[0.42, 0.2, 0.54]} />
      </mesh>
      <mesh position={[0, 1.0, -1.22]} material={glassMaterial}>
        <boxGeometry args={[0.38, 0.09, 0.42]} />
      </mesh>
      <mesh position={[side * 0.43, 0.68, -0.52]} material={glassMaterial}>
        <boxGeometry args={[0.035, 0.052, 1.18]} />
      </mesh>
      <mesh position={[side * 0.49, 0.61, 0.22]} material={railMaterial}>
        <boxGeometry args={[0.035, 0.08, 0.82]} />
      </mesh>
      <mesh position={[side * 0.56, 0.56, -0.95]} material={manifoldMaterial}>
        <boxGeometry args={[0.1, 0.16, 0.42]} />
      </mesh>
      <mesh position={[side * 0.58, 0.62, -0.44]} material={manifoldMaterial}>
        <boxGeometry args={[0.08, 0.12, 0.28]} />
      </mesh>
      <Line
        points={[
          [side * 0.47, 0.71, -2.0],
          [side * 0.47, 0.72, -1.22],
          [side * 0.47, 0.7, -0.44],
          [side * 0.47, 0.7, 0.38],
          [side * 0.47, 0.68, 1.58],
        ]}
        color="#8fb5d0"
        transparent
        opacity={0.32}
        lineWidth={1.2}
      />
      <DeckLights side={side} />
      <mesh position={[0, 0.56, 1.42]} rotation={[0, 0, Math.PI / 2]} material={railMaterial}>
        <cylinderGeometry args={[0.02, 0.02, 0.76, 12]} />
      </mesh>
      <mesh position={[side * 0.47, 0.72, 1.82]}>
        <boxGeometry args={[0.04, 0.24, 0.28]} />
        <meshStandardMaterial color="#475569" roughness={0.52} metalness={0.42} />
      </mesh>
      <group position={[0, 0.86, 2.08]}>
        <mesh>
          <boxGeometry args={[0.54, 0.035, 0.055]} />
          <meshBasicMaterial color="#6f9cbc" transparent opacity={0.42} />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.045]} />
          <meshBasicMaterial color="#fef3c7" transparent opacity={0.48} />
        </mesh>
      </group>
      <mesh position={[0, 0.64, 2.34]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.206, 32]} />
        <meshBasicMaterial color="#6f9cbc" transparent opacity={0.16} side={THREE.DoubleSide} />
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
      {[-1.22, -0.38, 0.46, 1.28].map((z) => (
        <group key={z} position={[0, 0.52, z]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.27, 0.27, 0.76, 48]} />
            <primitive object={fenderMaterial} attach="material" />
          </mesh>
          <mesh position={[0, 0, -0.22]} rotation={[Math.PI / 2, 0, 0]} material={fenderBandMaterial}>
            <torusGeometry args={[0.274, 0.014, 10, 40]} />
          </mesh>
          <mesh position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]} material={fenderBandMaterial}>
            <torusGeometry args={[0.274, 0.014, 10, 40]} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.276, 0.008, 8, 40]} />
            <meshBasicMaterial color="#fbbf24" transparent opacity={0.5} />
          </mesh>
          <Line
            points={[
              [-0.18, 0.32, 0],
              [-0.6, 0.62, 0],
            ]}
            color="#94a3b8"
            transparent
            opacity={0.34}
            lineWidth={1}
          />
          <Line
            points={[
              [0.18, 0.32, 0],
              [0.6, 0.62, 0],
            ]}
            color="#94a3b8"
            transparent
            opacity={0.34}
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
        start={[-0.68, 0.76, -0.72]}
        mid={[0, 1.24, -0.98]}
        end={[0.68, 0.76, -0.72]}
        color="#06111f"
        lineWidth={9}
        transparent
        opacity={0.92}
      />
      <QuadraticBezierLine
        start={[-0.68, 0.78, -0.72]}
        mid={[0, 1.28, -1.0]}
        end={[0.68, 0.78, -0.72]}
        color="#6f9cbc"
        lineWidth={5}
        transparent
        opacity={0.9}
      />
      <QuadraticBezierLine
        start={[-0.7, 0.69, -0.46]}
        mid={[0, 1.02, -0.58]}
        end={[0.7, 0.69, -0.46]}
        color="#0b1220"
        lineWidth={7}
        transparent
        opacity={0.86}
      />
      <QuadraticBezierLine
        start={[-0.68, 0.84, -0.92]}
        mid={[0, 1.46, -1.2]}
        end={[0.68, 0.84, -0.92]}
        color="#d4e5f1"
        lineWidth={1.8}
        transparent
        opacity={0.64}
      />
      {[
        [-0.68, 0.76, -0.72],
        [0.68, 0.76, -0.72],
      ].map((position) => (
        <mesh key={position.join(":")} position={position as [number, number, number]} rotation={[0, 0, Math.PI / 2]} material={hoseEndMaterial}>
          <cylinderGeometry args={[0.055, 0.055, 0.16, 16]} />
        </mesh>
      ))}
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
          <meshBasicMaterial color="#6f9cbc" transparent opacity={0.2} />
        </mesh>
      ))}
      <mesh rotation={[0, 0, 0.64]}>
        <circleGeometry args={[0.78, 48, 0, 0.72]} />
        <meshBasicMaterial color="#6f9cbc" transparent opacity={0.12} side={THREE.DoubleSide} />
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

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, 4.4 + pointer.x * 0.2, 0.04);
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      3.05 + pointer.y * 0.14 + Math.sin(clock.elapsedTime * 0.28) * 0.035,
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
      <PerspectiveCamera makeDefault position={[4.4, 3.05, 5.85]} fov={37} />
      <SceneCameraRig reduceMotion={reduceMotion} />
      <ambientLight intensity={0.52} />
      <hemisphereLight args={["#dbeaf4", "#020617", 0.32]} />
      <directionalLight position={[-3.5, 5.6, 4.2]} intensity={1.35} color="#dbeaf4" />
      <directionalLight position={[3.8, 2.4, -3.8]} intensity={0.64} color="#6f9cbc" />
      <pointLight position={[1.7, 1.45, -1.6]} intensity={0.62} color="#6f9cbc" distance={4.6} />
      <pointLight position={[-2.2, 1.2, 1.8]} intensity={0.3} color="#fbbf24" distance={3.6} />
      <fog attach="fog" args={["#020617", 6.2, 13]} />

      <group ref={groupRef} position={[0, -0.14, 0]} rotation={[0, -0.08, 0]}>
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
          color="#6f9cbc"
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
          color="#5e9e99"
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
      data-hero-visual
      className="relative mx-auto aspect-[1.82] w-full max-w-[650px] overflow-hidden rounded-lg border border-cyan-200/20 bg-slate-950/78 shadow-2xl shadow-cyan-950/35 backdrop-blur-xl sm:aspect-[1.04]"
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
      <div className="pointer-events-none absolute inset-0 z-20 rounded-lg bg-[radial-gradient(circle_at_70%_20%,rgba(111,156,188,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0)_58%,rgba(2,6,23,0.56))]" />
      <div className="pointer-events-none absolute left-3 top-3 z-30 rounded-lg border border-cyan-200/16 bg-slate-950/70 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:py-3">
        <p className="text-xs font-semibold uppercase text-cyan-200">
          STS transfer control
        </p>
        <p className="mt-1 text-xs text-slate-300 sm:text-sm">Fenders, hose, watchkeeping</p>
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-30 hidden gap-2 sm:grid sm:grid-cols-3">
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
