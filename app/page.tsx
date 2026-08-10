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
  SiTailwindcss,
} from "react-icons/si";
import { ThemeToggle } from "./components/ThemeToggle";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-(--accent) selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 nav-blur border-b border-(--border-color)/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-(--accent)"
          >
            Matheus
            <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
          </motion.div>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-8 font-medium text-sm">
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

      {/* Hero Section */}
      <section
        id="sobre"
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl w-full rounded-xl overflow-hidden bg-[#1e1e1e] border border-slate-800 shadow-xl"
        >
          <div className="bg-[#2d2d2d] px-4 py-2.5 border-b border-slate-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-slate-400 text-xs ml-2 font-mono">
              bash - matheus@linux-mint
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-emerald-400 text-sm"
            >
              $ whoami
            </motion.p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-sans tracking-tight">
              Matheus Luiz Iost
            </h1>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Fullstack Developer com foco em{" "}
              <span className="text-emerald-400 font-medium">React / Next.js</span>{" "}
              e <span className="text-emerald-400 font-medium">NestJS</span>.
              Construo APIs REST seguras (JWT), integração com{" "}
              <span className="text-emerald-400 font-medium">PostgreSQL</span> e
              deploy com <span className="text-emerald-400 font-medium">Docker</span>.
            </p>

            <p className="text-xs text-slate-400 pt-1 font-sans">
              Em aprendizado: CI/CD, Kubernetes • Interesse: Wireshark, Nmap
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 flex flex-wrap gap-3 font-sans text-sm"
            >
              <a
                href="#projetos"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-medium transition-all"
              >
                Ver Projetos
              </a>

              <a
                href="#contato"
                className="px-5 py-2 border border-slate-700 text-slate-300 hover:bg-slate-800 rounded font-medium transition-all"
              >
                Contato
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
{/* Skills */}
<section id="skills" className="py-20 px-6 border-t border-(--border-color)/40">
  <div className="max-w-5xl mx-auto">
    <motion.h2
      {...fadeInUp}
      className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2"
    >
      <FaTerminal className="text-emerald-500 text-xl" />
      Tech Radar
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* 1. Development (Core) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-l-2 border-emerald-500 pl-3">
          <h3 className="text-lg font-bold">Development</h3>
        </div>
        <p className="text-xs text-(--text-muted)">Construção de aplicações e APIs</p>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <FaReact className="text-2xl text-[#00d8ff]" />
            <span className="text-sm font-semibold">React</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <SiNextdotjs className="text-2xl" />
            <span className="text-sm font-semibold">Next.js</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <SiNestjs className="text-2xl text-[#e0234e]" />
            <span className="text-sm font-semibold">NestJS</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <SiPostgresql className="text-2xl text-[#336791]" />
            <span className="text-sm font-semibold">Postgres</span>
          </div>
        </div>
      </div>

      {/* 2. Infrastructure & DevOps */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-l-2 border-purple-500 pl-3">
          <h3 className="text-lg font-bold">DevOps & Cloud</h3>
        </div>
        <p className="text-xs text-(--text-muted)">Ambiente e deploy</p>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <FaDocker className="text-2xl text-[#2496ed]" />
            <span className="text-sm font-semibold">Docker</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <FaLinux className="text-2xl text-orange-500" />
            <span className="text-sm font-semibold">Linux</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3 col-span-2">
            <SiKubernetes className="text-2xl text-blue-500" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Kubernetes</span>
              <span className="text-[10px] text-purple-400">Estudando</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Security & Networking (Diferencial) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-l-2 border-red-500 pl-3">
          <h3 className="text-lg font-bold">Security & Network</h3>
        </div>
        <p className="text-xs text-(--text-muted)">Fundamentos e análise</p>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <SiWireshark className="text-2xl text-blue-400" />
            <span className="text-sm font-semibold">Wireshark</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
            <BsEye className="text-2xl text-blue-600" />
            <span className="text-sm font-semibold">Nmap</span>
          </div>
          <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3 col-span-2">
            <FaShieldAlt className="text-2xl text-red-500" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold">App Security</span>
              <span className="text-[10px] text-red-400">Práticas de SecDevOps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projetos */}
{/* Projetos */}
<section id="projetos" className="py-20 px-6 border-t border-(--border-color)/40">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-12">
      Projetos Recentes
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {/* LikeDelivery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
      >
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
              LikeDelivery
            </h3>

            <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
              Startup em Dev
            </span>
          </div>

          <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
            Desenvolvimento completo de aplicação web escalável.
            Arquitetura e implementação de APIs RESTful seguras com
            autenticação robusta, integração eficiente front/back-end,
            versionamento Git e padrões Clean Code.
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {["React", "Next.js", "NestJS", "REST API", "Clean Code"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono bg-(--bg-main) text-emerald-400 px-2.5 py-0.5 rounded border border-(--border-color)"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Links do Projeto */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://likedeliveryapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
          >
            Acessar Projeto <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </motion.div>

      {/* PetTracker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-orange-500/50 transition-all flex flex-col justify-between group"
      >
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
              PetTracker
            </h3>

            <span className="text-[11px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded">
              Full Stack
            </span>
          </div>

          <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
            Backend em NestJS/TypeScript com TypeORM e PostgreSQL.
            Autenticação JWT com Refresh Tokens e RBAC. Integração AWS S3
            para upload de imagens e dashboard responsivo com Next.js,
            Tailwind CSS e shadcn/ui.
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {[
              "NestJS",
              "Next.js",
              "PostgreSQL",
              "TypeORM",
              "JWT",
              "AWS S3",
              "shadcn/ui",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono bg-(--bg-main) text-orange-400 px-2.5 py-0.5 rounded border border-(--border-color)"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links do Projeto */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://pet-tracker-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
          >
            Acessar Projeto <FaExternalLinkAlt className="text-xs" />
          </a>

          <a
            href="https://github.com/theusinhoiost/pet-tracker-web" // Cole aqui o link direto do repositório
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-(--text-muted) hover:text-(--text-main) transition-colors font-medium"
          >
            <FaGithub className="text-base" /> Código
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer
        id="contato"
        className="bg-(--bg-secondary)/30 py-12 border-t border-(--border-color)/50 text-center"
      >
        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a
            href="https://github.com/theusinhoiost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-(--text-muted) hover:text-(--text-main) transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/matheusiost/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-(--text-muted) hover:text-[#0a66c2] transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-xs text-(--text-muted)">
          © 2026 Matheus Luiz Iost — Built with Next.js & Tailwind
        </p>
      </footer>
    </div>
  );
}