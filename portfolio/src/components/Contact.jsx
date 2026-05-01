import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

import { SiLeetcode } from "react-icons/si"

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#050816] to-black text-white py-28 px-6"
    >

      <h2 className="text-5xl font-bold text-center text-purple-400 mb-16">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#111827] border border-purple-500/40 rounded-[40px] p-12 md:p-16 text-center shadow-[0_0_60px_rgba(168,85,247,0.25)] hover:shadow-[0_0_100px_rgba(168,85,247,0.45)] transition-all duration-700 relative overflow-hidden">

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-purple-500/5 blur-3xl"></div>

        <div className="relative z-10">

          

          {/* Email */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=nuthalapatinavyasree2005@gmail.com&su=Interested+to+hire+you&body=Hello+Navya,%0D%0A%0D%0AI+am+interested+to+hire+you..."
  target="_blank"
  className="flex justify-center items-center gap-4 mb-8 hover:text-purple-400 transition duration-300"
>
            <FaEnvelope className="text-3xl text-purple-400" />

            <p className="text-xl md:text-2xl">
              nuthalapatinavyasree2005@gmail.com
            </p>

          </a>

          {/* Location */}
          <div className="flex justify-center items-center gap-4 mb-14">

            <FaMapMarkerAlt className="text-3xl text-purple-400" />

            <p className="text-xl md:text-2xl text-gray-300">
              Chennai, India
            </p>

          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-10 flex-wrap">

            {/* GitHub */}
            <a
              href="https://github.com/23004513"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] border border-purple-500/40 p-6 rounded-3xl hover:-translate-y-3 hover:scale-110 transition-all duration-500 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
            >

              <FaGithub className="text-5xl text-purple-400 mb-4 mx-auto" />

              <p className="text-lg font-semibold">
                GitHub
              </p>

            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nuthalapati-navya-sree-bb2268383"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] border border-purple-500/40 p-6 rounded-3xl hover:-translate-y-3 hover:scale-110 transition-all duration-500 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
            >

              <FaLinkedin className="text-5xl text-purple-400 mb-4 mx-auto" />

              <p className="text-lg font-semibold">
                LinkedIn
              </p>

            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/nuthalapatinavyasree/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f172a] border border-purple-500/40 p-6 rounded-3xl hover:-translate-y-3 hover:scale-110 transition-all duration-500 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
            >

              <SiLeetcode className="text-5xl text-purple-400 mb-4 mx-auto" />

              <p className="text-lg font-semibold">
                LeetCode
              </p>

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact