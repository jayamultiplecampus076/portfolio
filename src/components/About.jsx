import React from 'react';
import myPhoto from "../assets/myImage.jpg";

const About = () => {
  return (
    <section id="about" className="bg-[#e1e4e6] dark:bg-slate-900 px-6 py-24 transition-colors duration-300 relative overflow-hidden">
      
      {/* Light/Dark Mode Decorative Ambient Background Elements (Khali thau bharna ko lagi) */}
      <div className="pointer-events-none absolute -left-12 top-1/3 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10"></div>
      <div className="pointer-events-none absolute -right-12 bottom-12 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-500">
            Get To Know Me
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-blue-600"></div>
        </div>

        {/* Content */}
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* Left: Image Container with Visual Depth Layout */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Decorative Accent Background Box Frame - Light mode ko khalipan hatauna */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 dark:opacity-30 blur-sm group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div
                className="
                  relative flex h-85 w-72 items-center justify-center rounded-2xl 
                  border-2 border-white dark:border-slate-800
                  bg-cover bg-center bg-no-repeat shadow-xl shadow-slate-400/30 dark:shadow-none
                "
                style={{ backgroundImage: `url(${myPhoto})` }}
              ></div>
            </div>
          </div>

          {/* Right: Structured Text & Info Blocks */}
          <div className="bg-white/40  dark:bg-transparent p-6 md:p-10 rounded-2xl border border-white/60 dark:border-transparent backdrop-blur-[2px] dark:backdrop-blur-none">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              React Developer
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            </h3>

            <p className="mt-6 leading-8 text-slate-700 dark:text-slate-400 font-normal">
              I'm Sudip Acharya, a passionate developer interested in building
              modern and user-friendly web applications. I enjoy turning ideas
              into clean and functional interfaces.
            </p>

            <p className="mt-4 leading-8 text-slate-700 dark:text-slate-400 font-normal">
              My current focus is on React, JavaScript, Tailwind CSS, and
              frontend development. I continuously work on improving my
              problem-solving and development skills.
            </p>

            {/* Info Grid: Redesigned into distinct mini-cards to eliminate whitespace issues */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-300/60 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4 shadow-sm shadow-slate-200/50 dark:shadow-none transition-all hover:border-blue-500/30">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Name</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white text-base">Sudip Acharya</p>
              </div>

              <div className="rounded-xl border border-slate-300/60 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4 shadow-sm shadow-slate-200/50 dark:shadow-none transition-all hover:border-blue-500/30">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Role</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white text-base">React Developer</p>
              </div>

              <div className="rounded-xl border border-slate-300/60 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4 shadow-sm shadow-slate-200/50 dark:shadow-none transition-all hover:border-blue-500/30">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Location</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white text-base">Kathmandu, Nepal</p>
              </div>

              <div className="rounded-xl border border-slate-300/60 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4 shadow-sm shadow-slate-200/50 dark:shadow-none transition-all hover:border-blue-500/30">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Experience</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-white text-base">Growing Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
