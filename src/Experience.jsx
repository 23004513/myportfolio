function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          💼 Experience
        </h2>

        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-800">

          <h3 className="text-2xl font-bold text-purple-400">
            Full Stack Development Intern
          </h3>

          <p className="text-lg text-gray-300 mt-2">
            ReTech Solutions Pvt. Ltd.
          </p>

          <p className="text-gray-500 mb-6">
            📅 February 2024
          </p>

          <h4 className="text-xl font-semibold text-white mb-4">
            What I Worked On
          </h4>

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>
              Developed an <strong>Online Library Management System</strong> using <strong>Django</strong>.
            </li>

            <li>
              Built responsive frontend interfaces and integrated them with backend functionality.
            </li>

            <li>
              Managed databases for books, users, issue, and return operations.
            </li>

            <li>
              Collaborated on a Django-based project by implementing frontend components, backend logic, and database operations, gaining hands-on experience with real-world full-stack development.
            </li>
          </ul>

          <h4 className="text-xl font-semibold text-white mt-8 mb-4">
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "Django",
              "Python",
              "HTML",
              "CSS",
              "JavaScript",
              "SQL",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-purple-600 px-4 py-2 rounded-full text-white text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;