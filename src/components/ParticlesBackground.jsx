import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="fixed inset-0 -z-10">

      <Particles
        id="tsparticles"
        init={particlesInit}

        options={{
          background: {
            color: {
              value: "#000000",
            },
          },

          fpsLimit: 60,

          particles: {
            color: {
              value: "#a855f7",
            },

            links: {
              color: "#a855f7",
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 1,
            },

            move: {
              enable: true,
              speed: 2,
            },

            number: {
              value: 90,
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: { min: 1, max: 4 },
            },
          },

          detectRetina: true,
        }}
      />

    </div>
  )
}

export default ParticlesBackground