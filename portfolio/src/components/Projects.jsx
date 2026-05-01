function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-28 px-6"
    >

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-16">
        Featured Project
      </h2>

      <div className="max-w-6xl mx-auto bg-[#111827] border border-purple-500 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-500">

        {/* Project Image */}
        <div className="h-72 bg-gradient-to-r from-purple-900 via-black to-[#0f172a] flex items-center justify-center relative overflow-hidden">

          <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

          <h1 className="text-5xl md:text-6xl font-bold text-purple-300 z-10 text-center px-4">
            Virtual Brain Twin
          </h1>

        </div>

        {/* Content */}
        <div className="p-10">

          <h3 className="text-4xl font-bold mb-6 leading-tight">
            Virtual Brain Twin for Personalized Treatment of Psychiatric Disorders
          </h3>

          <p className="text-xl text-gray-300 leading-10 mb-8">
            An AI-powered healthcare project focused on building a virtual brain
            model to assist in personalized treatment planning for psychiatric
            disorders. The system analyzes behavioral and neurological patterns
            using machine learning techniques to support better diagnosis and
            treatment recommendations.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 mb-10">

            <span className="px-5 py-2 bg-purple-600/20 border border-purple-500 rounded-full hover:bg-purple-500/20 transition duration-300">
              Python
            </span>

            <span className="px-5 py-2 bg-purple-600/20 border border-purple-500 rounded-full hover:bg-purple-500/20 transition duration-300">
              Machine Learning
            </span>

            <span className="px-5 py-2 bg-purple-600/20 border border-purple-500 rounded-full hover:bg-purple-500/20 transition duration-300">
              AI
            </span>

            <span className="px-5 py-2 bg-purple-600/20 border border-purple-500 rounded-full hover:bg-purple-500/20 transition duration-300">
              Healthcare
            </span>

          </div>

          {/* Buttons */}
          <div className="flex gap-6 flex-wrap">

            <a
              href="https://github.com/23004513/Virtual-Brain-Twin-for-Personalized-Treatment-of-Psychiatric-Disorders"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-purple-600 rounded-xl hover:scale-105 hover:bg-purple-700 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.5)] inline-block"
            >
              GitHub
            </a>

            

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects