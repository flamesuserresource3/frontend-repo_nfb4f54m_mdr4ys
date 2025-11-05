import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Database, Layers, Rocket } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'React', level: 86 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 78 },
  { name: 'C++', level: 82 },
  { name: 'DSA', level: 84 },
];

const SkillBar = ({ name, level }) => {
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${level}%` });
    }
  }, [inView, level, controls]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-white/70">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          onViewportEnter={() => setInView(true)}
          className="h-full rounded-full bg-gradient-to-r from-[#60A5FA] via-[#7C3AED] to-[#A78BFA]"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0b0b11] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(6,182,212,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              Skills
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A blend of front‑end polish and back‑end robustness. I love building seamless, end‑to‑end experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs text-white/70 md:grid-cols-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"><Code className="h-3 w-3" /> Frontend</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"><Layers className="h-3 w-3" /> Full‑stack</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"><Database className="h-3 w-3" /> Databases</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10"><Rocket className="h-3 w-3" /> Deploy</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
