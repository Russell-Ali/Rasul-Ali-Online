import styles from "./Three.module.css";
import reactDom from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  softShadows,
  MeshWobbleMaterial,
  RoundedBox,
  Text,
  OrbitControls,
} from "@react-three/drei";
import { useRef, Suspense } from "react";
import gsap from "gsap";

let Coordinates = { x: "", y: "" };
softShadows();
const eventHandler = (e) => {
  // console.log(`X: ${e.x - 431}, Y: ${e.y - 115}`);
  Coordinates.x = e.x;
  Coordinates.y = e.y;
};
export const AvailableBtn = () => {
  const roundBox = useRef();
  // useFrame(() => {
  //   roundBox.current.rotation.y = 0;
  //   roundBox.current.position.y -= 0.0005;
  // });
  const clicked = () => {};
  return (
    <>
      <RoundedBox
        ref={roundBox}
        args={[4, 1, 1]}
        radius={0.1}
        smoothness={100}
        castShadow
        colorManagement
        onClick={clicked}
        position={[0, 0, 0]}
      >
        <MeshWobbleMaterial
          attach="material"
          color="#fd96a7"
          factor={0}
          speed={0}
          opacity={0.6}
          transparent
        />
        <Text
          color={"#ff0000"}
          fillOpacity={0.7}
          maxWidth={4}
          fontSize={".6"}
          transparent
          // font="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap"
          outlineOffsetX={"10%"}
          outlineOffsetY={"10%"}
          outlineBlur={"30%"}
          outlineOpacity={0.3}
          outlineColor="#000"
        >
          Available Now
        </Text>
      </RoundedBox>
    </>
  );
};

const Three = () => {
  const hover = () => {
    document.body.addEventListener("mousemove", eventHandler);
  };
  const noHover = () => {
    document.body.removeEventListener("mousemove", eventHandler);
  };

  const ref = useRef();

  return (
    <div
      className={styles.canvas}
      ref={ref}
      onMouseEnter={hover}
      onMouseLeave={noHover}
    >
      <Canvas
        shadows
        colorManagement
        camera={{ fov: 60, near: 1, far: 500, position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[-10, 0, -10]} intensity={0.5} />
        <pointLight position={[10, 0, -10]} intensity={0.5} />
        <pointLight position={[0, -10, 10]} intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={0.5} />
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
        <Suspense fallback={<Three />}>
          <AvailableBtn />
        </Suspense>
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
