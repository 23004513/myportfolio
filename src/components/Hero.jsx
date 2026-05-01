import { TypeAnimation } from "react-type-animation"

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#0f172a] to-black text-white px-8 md:px-20 flex items-center">

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE CONTENT */}
        <div className="text-center md:text-left">

          <p className="text-purple-400 text-xl mb-4 font-semibold">
            Hello 👋
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            I'm <span className="text-purple-400">Navya Sree</span>
          </h1>

          <TypeAnimation
            sequence={[
              "FrontEnd Stack Developer",
              2000,
              "DSA Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-gray-300 font-semibold"
          />

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl">
            Passionate about frontend development, problem solving,
            and building modern interactive web applications with clean UI.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">

            <a
              href="/navya_resume.pdf"
              download
              className="px-8 py-3 bg-purple-600 rounded-xl hover:scale-105 hover:bg-purple-700 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-purple-500 rounded-xl hover:bg-purple-500/10 transition-all duration-300"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">

          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 rounded-full"></div>

          <img
            src="/me.png"
            alt="Navya"
            className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full border-4 border-purple-500 object-cover object-top shadow-[0_0_80px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-500"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero