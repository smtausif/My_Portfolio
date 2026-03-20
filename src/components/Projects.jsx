// src/components/Projects.jsx
import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const fallbackImg = "https://images.unsplash.com/photo-1517519014922-8fc06f3cbfcd?q=80&w=1400&auto=format&fit=crop";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-32 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-acid font-mono text-sm tracking-widest uppercase mb-2 block">
              01. Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Projects<span className="text-acid">.</span>
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-12 mb-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p?.title || i}
              variants={cardVariant}
              onClick={() => navigate(`/project/${p.slug}`)}
              className="group relative cursor-pointer flex flex-col h-full bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-acid/30 transition-all duration-500 hover:shadow-2xl hover:shadow-acid/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={typeof p?.image === "string" && p.image.trim() ? p.image : fallbackImg}
                  alt={p?.title || "Project"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Floating "View" indicator */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-ink/80 backdrop-blur-md p-3 rounded-full border border-white/10 text-acid">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-acid transition-colors duration-300">
                    {p?.title || "Untitled Project"}
                  </h3>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {Array.isArray(p?.stack) && p.stack.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 group-hover:text-white/70">
                        {tech}
                      </span>
                    ))}
                    {p?.stack?.length > 3 && (
                      <span className="text-[10px] font-mono text-white/20">+{p.stack.length - 3}</span>
                    )}
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-8">
                  {p?.desc || ""}
                </p>

                {/* Footer Links */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-4">
                    {p?.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-acid hover:bg-white/10 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {p?.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-acid hover:bg-white/10 transition-all"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                  
                  <button className="text-xs font-mono font-bold uppercase tracking-widest text-white/30 group-hover:text-acid transition-colors">
                    LEARN_MORE
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}