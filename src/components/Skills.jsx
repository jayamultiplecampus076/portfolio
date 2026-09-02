import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiC } from "react-icons/si";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      percentage: 90,
      icon: <FaHtml5 size={20} className="text-orange-500" />,
    },
    {
      name: "CSS",
      percentage: 85,
      icon: <FaCss3Alt size={20} className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      percentage: 75,
      icon: <FaJsSquare size={20} className="text-yellow-500" />,
    },
    {
      name: "React",
      percentage: 65,
      icon: <FaReact size={20} className="text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 75,
      icon: <SiTailwindcss size={20} className="text-teal-400" />,
    },
    {
      name: "Git & GitHub",
      percentage: 39,
      icon: <FaGitAlt size={20} className="text-orange-600" />,
    },
    {
      name: "Node.js",
      percentage: 0,
      icon: <FaNodeJs size={20} className="text-green-500" />,
    },
    {
      name: "Java",
      percentage: 40,
      icon: <FaJava size={20} className="text-red-500" />,
    },
    {
      name: "C",
      percentage: 60,
      icon: <SiC size={20} className="text-blue-500" />,
    },
   
  ];

  // Percentage bata level automatically determine garne
  const getLevel = (percentage) => {
    if (percentage >= 80) {
      return "Advanced";
    } else if (percentage >= 60) {
      return "Intermediate";
    } else if (percentage >= 40) {
      return "Learning";
    } else {
      return "Beginner";
    }
  };

  return (
    <section id="skills" className="bg-gray-200 dark:bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
            What I Know
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            My Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 dark:text-slate-400">
            Technologies and tools I use while building web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                rounded-xl
                border border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-500/50
                hover:shadow-lg
                hover:shadow-blue-500/5
              "
            >
              {/* Name + Level */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center justify-center gap-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white ">
                    {skill.name}
                  </h3>
                  <span>{skill.icon}</span>
                </div>
                <span
                  className="
                    rounded-full
                    bg-blue-500/10
                    px-3 py-1
                    text-xs
                    font-medium
                    text-blue-500 dark:text-blue-400
                  "
                >
                  {getLevel(skill.percentage)}
                </span>
              </div>

              {/* Percentage */}
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-slate-500">Proficiency</span>

                <span className="font-medium text-slate-600 dark:text-slate-400">
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
