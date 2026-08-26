import { Canvas } from '@react-three/fiber';
import { NodeGraph } from './NodeGraph';

interface Hero3DProps {
  progress: number;
}

export function Hero3D({ progress }: Hero3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0 }}
    >
      <NodeGraph progress={progress} />
    </Canvas>
  );
}
