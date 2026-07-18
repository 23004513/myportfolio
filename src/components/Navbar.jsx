function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white flex justify-between items-center px-10 py-5 border-b border-gray-800 z-50">

      <h1 className="text-2xl font-bold text-purple-400">
        NS
      </h1>

      <ul className="flex gap-8 text-lg">

        <li>
          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="hover:text-purple-400 transition duration-300"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;