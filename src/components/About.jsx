import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0b11] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.12),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#60A5FA] to-[#A78BFA] opacity-40 blur-lg transition duration-500 group-hover:opacity-70" />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop"
              alt="Priyanshu Panwar"
              className="relative h-56 w-56 rounded-full object-cover ring-2 ring-white/10 md:h-72 md:w-72"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-white/70">
            I’m Priyanshu Panwar, a computer science student and aspiring full‑stack developer. I enjoy solving
            complex problems and turning ideas into performant, scalable web applications. I focus on clean code,
            smooth UX, and modern tooling. When I’m not coding, you’ll find me exploring system design, DSA,
            and open‑source projects.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70 md:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Clean Architecture</div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Performance Mindset</div>
            <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Problem Solving</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
