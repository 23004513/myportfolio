function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-28 px-6"
    >

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-20">
        My Projects
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* PROJECT 1 */}

        <div className="bg-[#111827] border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all duration-500">

          {/* Top */}
          <div className="h-56 bg-gradient-to-r from-purple-900 to-black flex items-center justify-center">

            <h1 className="text-4xl font-bold text-purple-300 text-center px-6">
              Virtual Brain Twin
            </h1>

          </div>

          {/* Content */}
          <div className="p-8">

            <h3 className="text-3xl font-bold mb-5">
              Virtual Brain Twin for Personalized Treatment
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              A healthcare-focused AI project designed to assist in
              personalized psychiatric treatment planning using intelligent
              behavioral analysis and modern technologies.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                Python
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                AI
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                Healthcare
              </span>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition duration-300"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* PROJECT 2 */}

        <div className="bg-[#111827] border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all duration-500">

          {/* Top */}
          <div className="h-56 bg-gradient-to-r from-[#312e81] to-black flex items-center justify-center">

            <h1 className="text-4xl font-bold text-purple-300 text-center px-6">
              Online Library Management
            </h1>

          </div>

          {/* Content */}
          <div className="p-8">

            <h3 className="text-3xl font-bold mb-5">
              Online Library Management System
            </h3>

            <p className="text-gray-300 leading-8 mb-8">
              A full-stack web application developed for managing library
              operations including book records, issue tracking, student
              management, and authentication features.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                Django
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                Python
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                SQLite
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500">
                HTML/CSS
              </span>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/23004513/online-library-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition duration-300"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects