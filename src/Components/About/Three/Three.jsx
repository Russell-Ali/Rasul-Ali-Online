import styles from "./Three.module.css";
import reactDom from "react-dom";
import { Canvas } from "@react-three/fiber";
import { softShadows, OrbitControls } from "@react-three/drei";
softShadows();
const Three = () => {
  return (
    <div className={styles.canvas}>
      <Canvas
        shadows
        colorManagement
        camera={{ fov: 60, near: 1, far: 500, position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, -1, 10]} intensity={1} />
        <pointLight position={[-5, 1, 0]} intensity={1} />
        <pointLight position={[5, 1, 0]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

reactDom.render(
  <Three />,

  document.getElementById("root")
);
export default Three;
