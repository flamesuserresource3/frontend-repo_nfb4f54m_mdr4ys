import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b11] text-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay - allow interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b11]/30 to-[#0b0b11]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-md ring-1 ring-white/10"
        >
          Building delightful experiences with code
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-3xl font-semibold leading-tight md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA] bg-clip-text text-transparent">Priyanshu</span> 👋
          <br className="hidden md:block" />
          <span className="text-white/90">Full Stack Developer & Problem Solver</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/70"
        >
          I craft scalable web apps with modern stacks, clean architecture, and a passion for performance and UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-transform duration-200 hover:scale-[1.02]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="/Priyanshu_Panwar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/15 transition-colors hover:bg-white/15"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>

        {/* Parallax floating accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pointer-events-none absolute left-8 top-28 hidden h-24 w-24 rounded-full bg-gradient-to-br from-[#60A5FA]/40 to-[#A78BFA]/40 blur-2xl md:block"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pointer-events-none absolute bottom-10 right-10 hidden h-32 w-32 rounded-full bg-gradient-to-tr from-[#A78BFA]/30 to-[#06B6D4]/30 blur-2xl md:block"
        />
      </div>
    </section>
  );
};

export default Hero;
