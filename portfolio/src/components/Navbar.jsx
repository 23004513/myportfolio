function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white flex justify-between items-center px-10 py-5 border-b border-gray-800 z-50">

      <h1 className="text-2xl font-bold text-purple-400">
        NS
      </h1>

      <ul className="flex gap-8 text-lg">

        <a href="#about">
          <li className="hover:text-purple-400 cursor-pointer transition duration-300">
            About
          </li>
        </a>

        <a href="#skills">
          <li className="hover:text-purple-400 cursor-pointer transition duration-300">
            Skills
          </li>
        </a>

        <a href="#projects">
          <li className="hover:text-purple-400 cursor-pointer transition duration-300">
            Projects
          </li>
        </a>

        <a href="#contact">
          <li className="hover:text-purple-400 cursor-pointer transition duration-300">
            Contact
          </li>
        </a>

      </ul>

    </nav>
  )
}

export default Navbar