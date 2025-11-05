import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DevTrackr',
    desc: 'Project management tool with real‑time updates, Kanban boards, and team collaboration.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
  {
    title: 'ShopSwift',
    desc: 'Full‑stack e‑commerce with authentication, payments, and dashboard analytics.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
  {
    title: 'AlgoViz',
    desc: 'Interactive visualizer for classic algorithms and data structures, built for learning.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
  {
    title: 'ByteBlog',
    desc: 'Minimal blogging platform with markdown, tags, and server‑rendered pages for SEO.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    github: '#',
  },
];

const ProjectCard = ({ p, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 p-0.5 ring-1 ring-white/10"
      style={{ perspective: 1000 }}
    >
      <div className="relative h-full rounded-[1rem] bg-[#0f0f17]/80 p-4 backdrop-blur-xl transition-transform duration-300 group-hover:rotate-0">
        <div className="relative h-44 w-full overflow-hidden rounded-xl">
          <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b11] to-transparent opacity-60" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          <p className="mt-1 text-sm text-white/70">{p.desc}</p>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={p.demo}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
          <a
            href={p.github}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/15 transition-colors hover:bg-white/15"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
        <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#60A5FA]/30 to-[#A78BFA]/30 blur-2xl" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0b0b11] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(96,165,250,0.12),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(167,139,250,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Projects
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">A selection of things I’ve designed and built recently.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>

        {/* Achievements & Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold">Achievements & Certificates</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-xl bg-white/5 p-4 ring-1 ring-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Certificate #{n}</p>
                    <p className="text-xs text-white/60">Issued by Example Org</p>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] px-3 py-1 text-[10px] font-semibold">2024</span>
                </div>
                <div className="mt-3 h-20 w-full rounded-lg bg-[linear-gradient(135deg,rgba(96,165,250,0.2),rgba(167,139,250,0.2))]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
