import React from 'react';
import myPhoto from "../assets/myImage.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-200 pb-2 dark:bg-slate-950 px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl"></div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        <div className="max-w-2xl">
          {/* Availability Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>

            <span className="text-sm text-slate-600 dark:text-slate-400">
              Available for opportunities
            </span>
          </div>

          {/* Small Heading */}
          <p className="mb-4 text-lg font-medium text-blue-500 dark:text-blue-400">Hello, I'm</p>

          {/* Main Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Sudip
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Acharya.
            </span>
          </h1>

          {/* Role */}
          <div className="mt-7 flex items-center gap-3">
            <div className="h-px w-10 bg-blue-500"></div>

            <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-300 md:text-2xl">
              React Developer
            </h2>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
            I build clean, modern and responsive web interfaces with a focus on
            great user experiences and scalable frontend development.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <a
              href="#projects"
              className="
                group inline-flex items-center gap-2
                rounded-xl
                bg-blue-600
                px-6 py-3.5
                font-medium text-white
                shadow-lg shadow-blue-600/20
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-blue-500
                hover:shadow-xl hover:shadow-blue-600/30
              "
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="
                inline-flex items-center
                rounded-xl
                border border-slate-300 dark:border-slate-700
                bg-slate-100/50 dark:bg-slate-900/50
                px-6 py-3.5
                font-medium text-slate-700 dark:text-slate-200
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-blue-400
              "
            >
              Contact Me
            </a>
          </div>

          {/* Mini Stats */}
          <div className="mt-12 flex flex-wrap gap-10 border-t border-slate-200 dark:border-slate-800 pt-7">
            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">React</p>

              <p className="mt-1 text-sm text-slate-500">Frontend</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">JS</p>

              <p className="mt-1 text-sm text-slate-500">JavaScript</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">UI</p>

              <p className="mt-1 text-sm text-slate-500">Development</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-8 rounded-full bg-blue-600/10 blur-3xl"></div>

            {/* Main Card */}
            <div
              className="
                relative
                flex h-[350px] w-[350px]
                items-center justify-center
                rounded-[2rem]
                border border-slate-300/80 dark:border-slate-700/80
                bg-slate-100/60 dark:bg-slate-900/60
                shadow-2xl shadow-blue-950/10 dark:shadow-blue-950/30
                backdrop-blur-xl
                md:h-[430px] md:w-[430px]
              "
            >
              {/* Decorative Circle */}
              <div className="absolute h-64 w-64 rounded-full border border-blue-500/20 md:h-80 md:w-80"></div>

              <div className="absolute h-52 w-52 rounded-full border border-purple-500/20 md:h-64 md:w-64"></div>

              {/* Profile */}
              <div
                className="
                  relative
                  h-48 w-48
                  overflow-hidden
                  rounded-full
                  border-4 border-blue-500/70
                  bg-gradient-to-br from-slate-200 to-slate-50/50 dark:from-slate-800 dark:to-slate-950/50
                  shadow-2xl shadow-blue-600/20
                  md:h-60 md:w-60
                "
              >
                <img
                  src={myPhoto}
                  alt="My Photo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Floating Card - React */}
              <div
                className="
                  absolute -left-8 top-12
                  rounded-xl
                  border border-slate-200 dark:border-slate-700
                  bg-white/90 dark:bg-slate-900/90
                  px-4 py-3
                  shadow-xl
                  backdrop-blur-md
                "
              >
                <p className="text-xs text-slate-500">Currently</p>

                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                  React Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
