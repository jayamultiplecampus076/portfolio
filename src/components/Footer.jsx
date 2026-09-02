import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-8 transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Logo */}
        <div className="text-xl font-bold text-slate-900 dark:text-white">
          <span className="text-blue-500">S</span>A
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 Sudip Acharya. All rights reserved.
        </p>

        {/* Social UI */}
        <div className="flex gap-3">
          <a
            href="https://github.com/sudipacharya-programmer"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FaGithub
              size={24}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/sudeep-acharya-9645a934a/"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] transition-colors"
          >
            <FaLinkedin
              size={24}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a
            href="mailto:sudipacharya1145@gmail.com"
            className="text-[#EA4335] hover:opacity-80 transition-opacity"
          >
            <FaEnvelope
              className="hover:scale-110 transition-transform duration-200"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
