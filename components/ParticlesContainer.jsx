import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
  // init particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    // you can initialize the tsParticles instance (mainPlugin) here, adding custom shapes or presets
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <particle
      className="absolute w-full h-full translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullscreen: {enable: true},
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          }
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#ff5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: {min: 1, max: 5},
          },
          detectRetina: true,
        },
      }}
    />
  );
};

export default ParticlesContainer;
