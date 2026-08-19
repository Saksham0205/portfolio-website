"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const GRID_X = 96;
const GRID_Z = 64;
const SPACING = 0.16;

function WaveSculpture({ pointer, scroll }: { pointer: React.RefObject<{ x: number; y: number }>; scroll: React.RefObject<number> }) {
  const pointsRef = useRef<THREE.Points>(null);
  const group = useRef<THREE.Group>(null);

  const { geometry, base } = useMemo(() => {
    const count = GRID_X * GRID_Z;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const baseArr = new Float32Array(count * 2);
    let i = 0;
    for (let x = 0; x < GRID_X; x++) {
      for (let z = 0; z < GRID_Z; z++) {
        const px = (x - GRID_X / 2) * SPACING;
        const pz = (z - GRID_Z / 2) * SPACING;
        positions[i * 3] = px;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = pz;
        baseArr[i * 2] = px;
        baseArr[i * 2 + 1] = pz;
        sizes[i] = 1;
        i++;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    return { geometry: g, base: baseArr };
  }, []);

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uAccent: { value: new THREE.Color("#c6f24e") },
        uBloom: { value: new THREE.Color("#8b5cf6") },
      },
      vertexShader: /* glsl */ `
        attribute float aSize;
        varying float vH;
        void main() {
          vH = clamp(position.y * 1.4 + 0.35, 0.0, 1.0);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (28.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uAccent;
        uniform vec3 uBloom;
        varying float vH;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          vec3 col = mix(uBloom, uAccent, vH);
          gl_FragColor = vec4(col, a * (0.2 + vH * 0.85));
        }
      `,
    });
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pts = pointsRef.current;
    if (!pts) return;
    const pos = pts.geometry.getAttribute("position") as THREE.BufferAttribute;
    const size = pts.geometry.getAttribute("aSize") as THREE.BufferAttribute;
    const p = pointer.current ?? { x: 0, y: 0 };
    const mx = p.x * 6;
    const mz = -p.y * 4;
    const s = scroll.current ?? 0;
    const squeeze = 1 - Math.min(s, 1) * 0.55;

    for (let i = 0; i < pos.count; i++) {
      const bx = base[i * 2] ?? 0;
      const bz = base[i * 2 + 1] ?? 0;
      const r = Math.sqrt(bx * bx + bz * bz);
      let h =
        Math.sin(bx * 1.1 + t * 1.5) * 0.28 +
        Math.sin(bz * 1.6 - t * 1.1) * 0.2 +
        Math.sin(r * 2.2 - t * 2.4) * 0.22;
      const dx = bx - mx;
      const dz = bz - mz;
      const dm = Math.sqrt(dx * dx + dz * dz);
      h += Math.exp(-dm * dm * 0.35) * 0.85 * Math.cos(dm * 3.0 - t * 4.0);
      h *= squeeze;
      pos.setY(i, h);
      size.setX(i, 0.9 + Math.abs(h) * 3.4);
    }
    pos.needsUpdate = true;
    size.needsUpdate = true;

    if (group.current) {
      group.current.rotation.y = t * 0.06 + p.x * 0.18;
      group.current.position.y = -0.4 - s * 1.6;
    }
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0]}>
      <points ref={pointsRef} geometry={geometry} material={material} />
    </group>
  );
}

function Starfield({ scroll }: { scroll: React.RefObject<number> }) {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = -6 - Math.random() * 20;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.getElapsedTime() * 0.01;
    ref.current.position.y = (scroll.current ?? 0) * 2.2;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.045} color="#9ca3af" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function Rig({ scroll }: { scroll: React.RefObject<number> }) {
  const { camera } = useThree();
  useFrame(() => {
    const s = Math.min(scroll.current ?? 0, 1.4);
    camera.position.z = 8.5 - s * 2.4;
    camera.position.y = 2.6 + s * 1.4;
    camera.position.x = Math.sin(s * 1.2) * 2.6;
    camera.lookAt(0, -s * 0.6, 0);
  });
  return null;
}

export default function WaveScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const w = window.innerWidth || 1920;
      const h = window.innerHeight || 1080;
      pointer.current = { x: (e.clientX / w) * 2 - 1, y: (e.clientY / h) * 2 - 1 };
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 2.6, 8.5], fov: 55 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearAlpha(0);
      }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <ScrollTracker scroll={scroll} />
      <Rig scroll={scroll} />
      <Starfield scroll={scroll} />
      <WaveSculpture pointer={pointer} scroll={scroll} />
    </Canvas>
  );
}

function ScrollTracker({ scroll }: { scroll: React.RefObject<number> }) {
  useFrame(() => {
    const max = (window.innerHeight || 900) * 2.2;
    scroll.current = Math.min(window.scrollY / max, 1.4);
  });
  return null;
}
