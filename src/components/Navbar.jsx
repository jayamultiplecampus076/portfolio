import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/50 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-3xl font-bold text-slate-900 dark:text-white">
          <span className="text-blue-500">S</span>A
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-m text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Home
          </a>

          <a href="#about" className="text-m text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            About
          </a>

          <a href="#skills" className="text-m text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Skills
          </a>

          <a href="#projects" className="text-m text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Projects
          </a>

          <a href="#contact" className="text-m text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Contact
          </a>
        </div>

        {/* Contact Button + Theme Toggle */}
        <div className="flex gap-1">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Lets Talk
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
