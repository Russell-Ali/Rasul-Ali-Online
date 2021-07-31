import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import styles from "./Three.module.css";
import reactDom from "react-dom";
import { OrbitControls } from "@react-three/drei";

export const Box = () => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="red" />
      <OrbitControls />
    </mesh>
  );
};

const Three = () => {
  return (
    <div className={styles.canvas}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <Box />
      </Canvas>
    </div>
  );
};
reactDom.render(<Three />, document.getElementById("root"));
export default Three;
