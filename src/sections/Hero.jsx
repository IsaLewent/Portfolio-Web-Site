import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Astronaut } from "../components/astronaut";
import HeroText from "../components/heroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { easing } from "maath";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const astronautPosition = isMobile ? [0, -0.3, 0] : [1.2, -0.3, 0];

  return (
    <section className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw ", height: "100vh", display: "block" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Astronaut scale={0.45} position={astronautPosition} />
          <OrbitControls enableZoom={false} />
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 7, 1 + state.mouse.y / 7, 3.3],
      0.3,
      delta
    );
  });
}

export default Hero;
