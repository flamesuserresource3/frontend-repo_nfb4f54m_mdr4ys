import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0b11] font-inter text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold text-white/90">Priyanshu Panwar</a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#projects"
          className="rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/15 backdrop-blur-md hover:bg-white/15 md:text-sm"
        >
          View Work
        </a>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="relative w-full bg-[#0b0b11] py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.15),transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <h2 className="bg-gradient-to-r from-[#6EE7F9] to-[#A78BFA] bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              Let’s build something great
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              I’m open to internships, freelance, and collaboration. Reach out and let’s make ideas happen.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 transition-colors hover:bg-white/15"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 transition-colors hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="mailto:priyanshu@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 transition-colors hover:bg-white/15"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0b11] py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Priyanshu Panwar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Top</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
