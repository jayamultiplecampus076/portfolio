const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Tic Tac Toe",
      description:
        "A simple interactive Tic Tac Toe game built with JavaScript.",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      number: "02",
      title: "Rock Paper Scissors",
      description:
        "A browser-based Rock Paper Scissors game with a clean interface.",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      number: "03",
      title: "To-Do App",
      description:
        "A simple task management interface for adding and organizing tasks.",
      technologies: ["JavaScript", "DOM", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white dark:bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            Some of the projects I have built while learning and
            improving my development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950"
            >

              {/* Project Image */}
              <div className="flex h-52 items-center justify-center bg-slate-100 dark:bg-slate-800">
                <span className="text-6xl font-bold text-slate-300 dark:text-slate-700">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-700 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* UI Button */}
                <div className="mt-7">
                  <button className="w-full rounded-lg border border-slate-300 dark:border-slate-700 py-3 text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
                    View Project
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;