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
} from "react-icons/fa";
import {
  SiWireshark,
  SiNextdotjs,
  SiNestjs,
  SiKubernetes,
  SiPostgresql,
} from "react-icons/si";
import { ThemeToggle } from "./components/ThemeToggle";

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
              {["Sobre", "Skills", "Projetos", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-(--accent) transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
          {/* Barra do topo do Terminal */}
          <div className="bg-[#2d2d2d] px-4 py-3 border-b border-slate-700 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-slate-400 text-xs ml-4 font-mono select-none">
              bash - matheus@linux-mint
            </span>
          </div>

          {/* Corpo do Terminal */}
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
            <p className="text-lg text-slate-300 font-sans">
              Fullstack Developer | DevOps Engineering Student | Cybersecurity
              Enthusiast
            </p>
            <p className="text-sm text-slate-400 pt-2">
              Currently strictly using:{" "}
              <span className="text-emerald-400">Linux Mint</span>
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-6 flex gap-4 font-sans"
            >
              {/* Botões com cores fixas para combinar com o terminal escuro */}
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

      {/* Skills Section */}
      <section id="skills" className="section-bg">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3"
          >
            <FaTerminal className="text-emerald-600 dark:text-emerald-400" />{" "}
            Tech Radar
          </motion.h2>

          <div className="space-y-16">
            {/* BLOCO 1: Core Stack */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-l-4 border-blue-500 pl-4">
                <h3 className="text-2xl font-bold">Core Stack</h3>
                <span className="text-sm text-(--text-muted) font-normal">
                  O que eu construo e entrego hoje
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
                  {
                    icon: SiNextdotjs,
                    name: "Next.js",
                  },
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
                    <h3 className="text-lg font-bold text-center">
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* BLOCO 2: DevOps & Infra */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-l-4 border-purple-500 pl-4">
                <h3 className="text-2xl font-bold">DevOps & Infra</h3>
                <span className="text-sm text-(--text-muted) font-normal">
                  Minha base de operações
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
                    desc: "SO",
                    color: "text-orange-500",
                  },
                  {
                    icon: VscGear,
                    name: "CI/CD",
                    desc: "Pipelines & Automation",
                    color: "text-purple-500",
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
                    className="card card-hover hover:border-purple-500 relative group"
                  >
                    {skill.isLearning && (
                      <span className="badge-learning bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                        Learning
                      </span>
                    )}
                    <skill.icon
                      className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-(--text-muted) mt-1">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* BLOCO 3: Security */}
            <div>
              <div className="mb-6 flex items-center gap-3 border-l-4 border-red-500 pl-4">
                <h3 className="text-2xl font-bold">Security Interest</h3>
                <span className="text-sm text-(--text-muted) font-normal">
                  Foco e curiosidade técnica
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
                    icon: SiWireshark,
                    name: "Wireshark",
                    desc: "Network Analysis",
                    color: "text-blue-400",
                  },
                  {
                    icon: BsEye,
                    name: "Nmap",
                    desc: "Port Scanning & Enum",
                    color: "text-blue-600",
                  },
                  {
                    icon: FaShieldAlt,
                    name: "Pentesting",
                    desc: "Basics / Hashcat / John",
                    color: "text-red-500",
                    isLearning: true,
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="card card-hover hover:border-red-500 relative group"
                  >
                    {skill.isLearning && (
                      <span className="badge-learning bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300">
                        Explorando
                      </span>
                    )}
                    <skill.icon
                      className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-(--text-muted) mt-1">
                      {skill.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section (Simplificada com as novas classes) */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 border-b border-(--border-color) pb-4 inline-block w-full">
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
                <h3 className="text-2xl font-bold group-hover:text-emerald-500 transition-colors">
                  WanderSync
                </h3>
                <span className="text-xs bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-2 py-1 rounded border border-cyan-200 dark:border-cyan-700">
                  Em Desenvolvimento
                </span>
              </div>
              <p className="text-(--text-muted) mb-6">
                Sistema de sincronização de arquivos focado em segurança e
                eficiência. Desenvolvido aplicando conceitos modernos de DevOps.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["DevOps", "Cloud", "Automation", "Python"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-(--bg-main) text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-(--border-color)"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://sitewandersync.vercel.app/"
                target="_blank"
                className="inline-flex items-center gap-2 text-(--accent) hover:underline"
              >
                Ver Projeto <FaGithub />
              </a>
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
            className="text-(--text-muted) hover:text-(--text-main) hover:scale-110 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/matheusiost/"
            target="_blank"
            className="text-(--text-muted) hover:text-[#0a66c2] hover:scale-110 transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="text-(--text-muted)">
          © 2026 Matheus Luiz Iost. Desenvolvido com Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}
