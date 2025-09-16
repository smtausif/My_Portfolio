// src/components/Projects.jsx
import { motion } from "framer-motion";
import { PROJECTS } from "../data";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Safe helpers
const fallbackImg =
  "https://images.unsplash.com/photo-1517519014922-8fc06f3cbfcd?q=80&w=1400&auto=format&fit=crop";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </motion.div>

        {/* Projects list */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-col items-center gap-16"
        >
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p?.title || i}
              variants={cardVariant}
              className="group w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {/* Image */}
              <div className="aspect-[16/12] overflow-hidden">
                <img
                  src={typeof p?.image === "string" && p.image.trim() ? p.image : fallbackImg}
                  alt={p?.title || "Project"}
                  onError={(e) => {
                    e.currentTarget.src = fallbackImg;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-semibold text-2xl">
                  {p?.title || "Untitled Project"}
                </h3>

                <div className="text-sm text-white/60 mt-2">
                  {Array.isArray(p?.stack)
                    ? p.stack.join(" · ")
                    : typeof p?.stack === "string"
                    ? p.stack
                    : ""}
                </div>

                <p className="text-white/70 mt-4 text-base leading-relaxed">
                  {p?.desc || ""}
                </p>

                <div className="mt-6 flex gap-6 text-base">
                  {p?.url && (
                    <a
                      className="underline hover:text-sky-300"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {p?.repo && (
                    <a
                      className="underline hover:text-sky-300"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
