import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NodeGraphProps {
  progress: number; // 0 = nuage chaotique, 1 = cadre structuré
}

const HALF = 2.2; // demi-taille du cube cible
const POINTS_PER_EDGE = 4;

// les 8 sommets d'un cube, et les 12 arêtes qui les relient
const CORNERS: [number, number, number][] = [
  [-HALF, -HALF, -HALF],
  [HALF, -HALF, -HALF],
  [HALF, HALF, -HALF],
  [-HALF, HALF, -HALF],
  [-HALF, -HALF, HALF],
  [HALF, -HALF, HALF],
  [HALF, HALF, HALF],
  [-HALF, HALF, HALF],
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 0], // face arrière
  [4, 5], [5, 6], [6, 7], [7, 4], // face avant
  [0, 4], [1, 5], [2, 6], [3, 7], // arêtes reliant les deux faces
];

const cyan = new THREE.Color('#4CC9F0');
const amber = new THREE.Color('#FFB020');

export function NodeGraph({ progress }: NodeGraphProps) {
  const groupRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const cornersRef = useRef<THREE.InstancedMesh>(null);

  const { scattered, structured, count } = useMemo(() => {
    const structured: THREE.Vector3[] = [];
    EDGES.forEach(([a, b]) => {
      const start = new THREE.Vector3(...CORNERS[a]);
      const end = new THREE.Vector3(...CORNERS[b]);
      for (let i = 1; i <= POINTS_PER_EDGE; i++) {
        const t = i / (POINTS_PER_EDGE + 1);
        structured.push(start.clone().lerp(end, t));
      }
    });

    const count = structured.length;
    const scattered: THREE.Vector3[] = Array.from({ length: count }, () => {
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 7
      );
      return v;
    });

    return { scattered, structured, count };
  }, []);

  const scatteredCorners = useMemo(
    () =>
      CORNERS.map(
        () =>
          new THREE.Vector3(
            (Math.random() - 0.5) * 7,
            (Math.random() - 0.5) * 7,
            (Math.random() - 0.5) * 7
          )
      ),
    []
  );

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const edgeGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(EDGES.length * 2 * 3), 3)
    );
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.15,
        0.05
      );
    }

    const t = state.clock.elapsedTime;

    // nœuds intérieurs
    if (nodesRef.current) {
      for (let i = 0; i < count; i++) {
        const jitter = (1 - progress) * 0.15;
        const pos = scattered[i].clone().lerp(structured[i], progress);
        pos.x += Math.sin(t * 0.6 + i) * jitter;
        pos.y += Math.cos(t * 0.5 + i * 1.3) * jitter;

        dummy.position.copy(pos);
        dummy.scale.setScalar(0.06);
        dummy.updateMatrix();
        nodesRef.current.setMatrixAt(i, dummy.matrix);

        const color = cyan.clone().lerp(amber, progress);
        nodesRef.current.setColorAt(i, color);
      }
      nodesRef.current.instanceMatrix.needsUpdate = true;
      if (nodesRef.current.instanceColor) nodesRef.current.instanceColor.needsUpdate = true;
    }

    // sommets du cube
    const cornerPositions: THREE.Vector3[] = [];
    if (cornersRef.current) {
      for (let i = 0; i < CORNERS.length; i++) {
        const target = new THREE.Vector3(...CORNERS[i]);
        const pos = scatteredCorners[i].clone().lerp(target, progress);
        cornerPositions.push(pos);

        dummy.position.copy(pos);
        dummy.scale.setScalar(0.1);
        dummy.updateMatrix();
        cornersRef.current.setMatrixAt(i, dummy.matrix);
      }
      cornersRef.current.instanceMatrix.needsUpdate = true;
    }

    // arêtes — se dessinent au fur et à mesure que la structure se forme
    if (edgesRef.current && cornerPositions.length === CORNERS.length) {
      const posAttr = edgeGeometry.getAttribute('position') as THREE.BufferAttribute;
      EDGES.forEach(([a, b], i) => {
        const pa = cornerPositions[a];
        const pb = cornerPositions[b];
        posAttr.setXYZ(i * 2, pa.x, pa.y, pa.z);
        posAttr.setXYZ(i * 2 + 1, pb.x, pb.y, pb.z);
      });
      posAttr.needsUpdate = true;

      const material = edgesRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.15 + progress * 0.55;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={nodesRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>

      <instancedMesh ref={cornersRef} args={[undefined, undefined, CORNERS.length]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial color="#FFB020" toneMapped={false} />
      </instancedMesh>

      <lineSegments ref={edgesRef} geometry={edgeGeometry}>
        <lineBasicMaterial color="#4CC9F0" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}
