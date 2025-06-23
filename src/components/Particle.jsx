import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Callback when particles loaded
  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500, // value_area -> area
            },
          },
          links: { // line_linked -> links
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            animation: { // anim -> animation
              enable: true,
              speed: 1,
              minimumValue: 0.05, // opacity_min -> minimumValue
            },
          },
        },
        interactivity: {
          events: {
            onClick: { // onclick -> onClick
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1, // particles_nb -> quantity
            },
          },
        },
        detectRetina: true, // retina_detect -> detectRetina
      }}
    />
  );
}

export default Particle;