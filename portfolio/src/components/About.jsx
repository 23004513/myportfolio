function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-[#050816] to-black text-white py-28 px-6 relative overflow-hidden"
    >

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-16">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#111827] p-12 md:p-16 rounded-[40px] border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)] hover:shadow-[0_0_100px_rgba(168,85,247,0.45)] hover:scale-[1.02] transition-all duration-700 relative overflow-hidden">

        <div className="absolute inset-0 bg-purple-500/5 blur-3xl"></div>

        <p className="relative z-10 text-xl md:text-2xl leading-[50px] text-gray-300 text-center">

          I am a Computer Science Engineering student passionate about frontend
          development and creating modern, interactive web applications.

          <br /><br />

          I enjoy designing clean user interfaces, learning new technologies,
          and building creative projects that improve my problem-solving and
          development skills.

        </p>

      </div>

    </section>
  )
}

export default About