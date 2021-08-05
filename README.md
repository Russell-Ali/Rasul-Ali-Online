# Instructions For Later!

# Simple is Better, Less is more.

# Keep it simple no one care about source code it will be packed with bundler anyway and become mess.

# But You should need some sort of animation library for more advanced animation. Start simple and build up step by step

# Take Care !

# Clean All The console.log at the end!

# Right side of the page missing 6pixels, try to keep there simple and don't add anything here that will loose some of its parts

Keep working on animations of logo and available button;
import more 3d effects one for available button definitely
Add Dark Mode

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import styles from "./Three.module.css";
import reactDom from "react-dom";
import { OrbitControls, MeshWobbleMaterial } from "@react-three/drei";

export const Box = () => {
const mesh = useRef(null);
useFrame(() => {
mesh.current.rotation.x += 0.07;
});
return (
<mesh ref={mesh} position={[0, 0, 0]}>
<boxBufferGeometry attach="geometry" args={[5, 1, 1]} />
<MeshWobbleMaterial
        attach="material"
        color="pink"
        factor={0.4}
        speed={1}
      />
<OrbitControls />
</mesh>
);
};
const Three = () => {
return (
<div className={styles.tempCanvas}>
<div className={styles.canvas}>
<Canvas
colorManagement
shadowMap
camera={{ fov: 60, near: 0.1, far: 1000, position: [0, 0, 5] }} >
<ambientLight intensity={0.3} />
<pointLight position={[-10, 0, 20]} intensity={0.5} />
<pointLight position={[-10, 0, -20]} intensity={0.5} />
<directionalLight position={[10, 10, 0]} intensity={1} />
<directionalLight position={[-10, 10, 0]} intensity={1} />
<Box />
</Canvas>
</div>
</div>
);
};
