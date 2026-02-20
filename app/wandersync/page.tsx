/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function WanderSyncShowcase() {
  return (
    <div className="min-h-screen font-sans selection:bg-(--accent) selection:text-white pb-20">
      {/* Navbar Minimalista para a Vitrine */}
      <nav className="w-full top-0 z-50 nav-blur sticky">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--accent) transition-colors font-medium"
          >
            <FaArrowLeft /> Voltar para o Portfólio
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        {/* Cabeçalho */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-(--text-main)">
            WanderSync
          </h1>
          <p className="text-xl text-(--text-muted) mb-8">
            Real-time Collaborative Travel Planner
          </p>

          {/* Tech Stack que você passou */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Next.js", "TypeScript", "Recharts", "Vercel"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-bold bg-(--bg-secondary) border border-(--border-color) text-(--accent)"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Botões de Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wandersync.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FaExternalLinkAlt /> View Live Demo
            </a>
            <a
              href="https://github.com/theusinhoiost/wandersync"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <FaGithub size={20} /> Front-End
            </a>
            <a
              href="https://github.com/theusinhoiost/wandersyncback"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <FaGithub size={20} /> Back-End
            </a>
          </div>
        </motion.div>

        {/* Galeria de Fotos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { src: "/imgs/criar.png", alt: "Planejamento de viagem" },
            { src: "/imgs/news.png", alt: "Páginas de notícias" },
            {
              src: "/imgs/estatisticas.png",
              alt: "Páginas de estatísticas de viagem",
            },
            { src: "/imgs/diario.png", alt: "Páginas de diários" },
          ].map((img, index) => (
            <div key={index} className="card p-2 overflow-hidden group">
              <div className="relative overflow-hidden rounded-md border border-(--border-color)">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center font-medium text-(--text-muted) mt-4 mb-2">
                {img.alt}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-20 pt-8 border-t border-(--border-color)"
        >
          <p className="text-(--text-muted)">
            Built by{" "}
            <a
              href="https://linkedin.com/in/matheusiost"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--accent) hover:underline font-bold"
            >
              Matheus Iost
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
