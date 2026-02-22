"use client";

import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";
import { VscGear } from "react-icons/vsc";
import {
  FaDocker,
  FaLinux,
  FaShieldAlt,
  FaReact,
  FaTerminal,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiWireshark,
  SiNextdotjs,
  SiNestjs,
  SiKubernetes,
  SiPostgresql,
} from "react-icons/si";
import { ThemeToggle } from "./components/ThemeToggle";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-(--accent) selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 nav-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-(--accent)"
          >
            Matheus
            <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
          </motion.div>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-8 font-medium">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Skills", href: "#skills" },
                { label: "Projetos", href: "#projetos" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-(--accent) transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="sobre"
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden bg-[#1e1e1e] border border-slate-700"
        >
          <div className="bg-[#2d2d2d] px-4 py-3 border-b border-slate-700 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-400 text-xs ml-4 font-mono">
              bash - matheus@linux-mint
            </span>
          </div>

          <div className="p-8 font-mono space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-emerald-400"
            >
              $ whoami
            </motion.p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 font-sans">
              Matheus Luiz Iost
            </h1>

<p className="text-lg text-slate-300 font-sans leading-relaxed">
  Fullstack Developer com foco em <span className="text-emerald-400">React / Next.js</span> e{" "}
  <span className="text-emerald-400">NestJS</span>. Construo APIs REST seguras (JWT),
  integração com <span className="text-emerald-400">PostgreSQL</span> e deploy com{" "}
  <span className="text-emerald-400">Docker</span>.
</p>

<p className="text-sm text-slate-400 pt-2 font-sans">
  Em aprendizado: CI/CD, Kubernetes • Interesse: Wireshark, Nmap
</p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-6 flex flex-wrap gap-4 font-sans"
            >
              <a
                href="#projetos"
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded font-bold transition-all"
              >
                Ver Projetos
              </a>

              <a
                href="#contato"
                className="px-6 py-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded font-bold transition-all"
              >
                Contato
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-bg">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3"
          >
            <FaTerminal className="text-emerald-600 dark:text-emerald-400" />
            Tech Radar
          </motion.h2>

          <div className="space-y-16">
            {/* Core */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-bold">Core Stack</h3>
                <span className="text-sm text-(--text-muted)">
                  O que eu construo hoje
                </span>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4"
              >
                {[
                  { icon: FaReact, name: "React", color: "text-[#00d8ff]" },
                  { icon: SiNextdotjs, name: "Next.js" },
                  { icon: SiNestjs, name: "NestJS", color: "text-[#e0234e]" },
                  { icon: FaDocker, name: "Docker", color: "text-[#2496ed]" },
                  {
                    icon: SiPostgresql,
                    name: "Postgres",
                    color: "text-[#336791]",
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card card-hover hover:border-blue-500 flex flex-col items-center justify-center"
                  >
                    <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* DevOps */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-4">
                <h3 className="text-2xl font-bold">DevOps & Infra</h3>
                <span className="text-sm text-(--text-muted)">
                  Base operacional
                </span>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: FaLinux,
                    name: "Linux",
                    desc: "Daily driver",
                    color: "text-orange-500",
                  },
                  {
                    icon: VscGear,
                    name: "CI/CD",
                    desc: "GitHub Actions (learning)",
                    color: "text-purple-500",
                    isLearning: true,
                  },
                  {
                    icon: SiKubernetes,
                    name: "Kubernetes",
                    desc: "Orchestration",
                    color: "text-blue-500",
                    isLearning: true,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card card-hover hover:border-purple-500 relative"
                  >
                    {skill.isLearning && (
                      <span className="badge-learning">Learning</span>
                    )}
                    <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-(--text-muted)">{skill.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Security */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-l-4 border-red-500 pl-4">
                <h3 className="text-2xl font-bold">Security Interest</h3>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: SiWireshark,
                    name: "Wireshark",
                    desc: "Network Analysis",
                    color: "text-blue-400",
                  },
                  {
                    icon: BsEye,
                    name: "Nmap",
                    desc: "Port Scanning",
                    color: "text-blue-600",
                  },
                  {
                    icon: FaShieldAlt,
                    name: "Pentesting",
                    desc: "Basics",
                    color: "text-red-500",
                    isLearning: true,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card card-hover hover:border-red-500 relative"
                  >
                    {skill.isLearning && (
                      <span className="badge-learning">Explorando</span>
                    )}
                    <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-(--text-muted)">{skill.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b border-(--border-color) pb-4">
            Projetos Recentes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card card-hover hover:border-emerald-500 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold group-hover:text-emerald-500">
                  WanderSync
                </h3>

                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                  Em Desenvolvimento
                </span>
              </div>

              <p className="text-(--text-muted) mb-6">
                Plataforma colaborativa para planejamento de viagens com
                autenticação JWT, dashboards interativos e backend em NestJS.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "NestJS", "Postgres", "JWT", "Docker"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-(--bg-main) text-emerald-500 px-3 py-1 rounded-full border border-(--border-color)"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <Link
                href="/wandersync"
                className="inline-flex items-center gap-2 text-(--accent) hover:underline font-bold"
              >
                Ver detalhes <FaExternalLinkAlt className="text-sm" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contato"
        className="bg-(--bg-secondary) py-12 border-t border-(--border-color) text-center"
      >
        <div className="flex justify-center gap-8 mb-8 text-2xl">
          <a
            href="https://github.com/theusinhoiost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-(--text-muted) hover:text-(--text-main) hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/matheusiost/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-(--text-muted) hover:text-[#0a66c2] hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-(--text-muted)">
          © 2026 Matheus Luiz Iost — Built with Next.js & Tailwind
        </p>
      </footer>
    </div>
  );
}
