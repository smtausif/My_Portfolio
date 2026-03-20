// src/components/ProjectPage.jsx
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Code2, Sparkles, Layout } from "lucide-react";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-white/50 font-mono">
        {">"} Project_Not_Found.exe
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-ink text-slate-200 selection:bg-acid selection:text-ink"
    >
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        
        {/* Back Navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-mono text-white/40 hover:text-acid transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          BACK_TO_HOME
        </Link>

        {/* Header Section */}
        <header className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
            >
              {project.title.replace(/[^\w\s]/gi, '')} <span className="text-acid">.</span>
            </motion.h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              {project.desc}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Technologies</span>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-acid/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              {project.url && (
                <a href={project.url} target="_blank" className="flex items-center justify-between group text-sm font-bold text-white hover:text-acid transition-colors">
                  LIVE_DEMO <ExternalLink size={14} />
                </a>
              )}
              {project.repo && (
                <a href={project.repo} target="_blank" className="flex items-center justify-between group text-sm font-bold text-white hover:text-acid transition-colors">
                  SOURCE_CODE <Github size={14} />
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Main Banner */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video mb-24 shadow-2xl shadow-acid/5"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Column: Overview & Features */}
          <div className="space-y-16">
            <section className="space-y-4">
              <h2 className="text-sm font-mono uppercase tracking-widest text-acid flex items-center gap-2">
                <Code2 size={16} /> 01. Overview
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {project.overview || project.desc}
              </p>
            </section>

            {project.features && (
              <section className="space-y-6">
                <h2 className="text-sm font-mono uppercase tracking-widest text-acid flex items-center gap-2">
                  <Sparkles size={16} /> 02. Core Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-4 text-white/80 p-4 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-acid font-mono">0{i+1}</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column: Screenshots */}
          <div className="space-y-16">
            {project.images && (
              <section className="space-y-6">
                <h2 className="text-sm font-mono uppercase tracking-widest text-acid flex items-center gap-2">
                  <Layout size={16} /> 03. Visuals
                </h2>
                <div className="grid gap-6">
                  {project.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg"
                    >
                      <img src={img} alt={`Screenshot ${i}`} className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}