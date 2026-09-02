import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-slate-950 px-6 py-20 transition-colors duration-300">

      <div className="mx-auto max-w-6xl">

        {/* Top Heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Contact Me
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have a project or idea in mind? Feel free to reach out.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* Left: Info Panel */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Let's work together.
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              I'm always interested in learning, building new projects and
              connecting with other developers.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">Email</p>
                <p className="font-semibold text-slate-900 dark:text-white">sudipacharya1145@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-500">Location</p>
                <p className="font-semibold text-slate-900 dark:text-white">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Right: Email CTA + Social Links */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8 transition-colors duration-300">

            {/* Big Email CTA (FIXED: Added <a tag) */}
            <a
              href="mailto:sudipacharya1145@gmail.com"
              className="flex items-center justify-between rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-6 py-5 transition hover:border-blue-500 group"
            >
              <div>
                <p className="text-sm text-slate-500">Send me an email</p>
                <p className="mt-1 text-base sm:text-lg font-semibold text-slate-900 dark:text-white break-all">
                  sudipacharya1145@gmail.com
                </p>
              </div>
              <span className="text-2xl text-blue-500 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              <span className="text-xs text-slate-500 whitespace-nowrap">OR FIND ME ON</span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* GitHub Button (FIXED: Added <a tag & Icon) */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-5 py-4 text-slate-700 dark:text-white transition hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white"
              >
                <FaGithub size={20} />
                <span className="font-medium">GitHub</span>
              </a>

              {/* LinkedIn Button (FIXED: Added <a tag & Icon) */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-5 py-4 text-slate-700 dark:text-white transition hover:border-[#0077B5] dark:hover:border-[#0077B5] hover:text-[#0077B5] dark:hover:text-[#0077B5]"
              >
                <FaLinkedin size={20} className="text-[#0077B5]" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
