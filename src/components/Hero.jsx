import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0f172a] to-black text-white flex flex-col items-center justify-center text-center px-6">

      <img
  src="/me.png"
  alt="Navya"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-500 mb-10 shadow-[0_0_80px_rgba(168,85,247,0.9)] object-cover hover:scale-105 transition-all duration-500"
/>

      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        Hi, I'm <span className="text-purple-400">Navya Sree</span>
      </h1>

      <TypeAnimation
        sequence={[
          "FrontEnd Stack Developer",
          2000,
          "Problem solver",
          2000,
          
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-2xl md:text-3xl text-gray-300 font-semibold"
      />

      <button className="mt-10 px-8 py-3 bg-purple-600 rounded-xl hover:scale-110 hover:bg-purple-700 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.6)]">
        Download Resume
      </button>

    </section>
  )
}

export default Hero