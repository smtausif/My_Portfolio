import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Standard Framer Motion transition for smoothness
const transition = { type: "spring", stiffness: 150, damping: 15 };

// Variants for staggered skill tag animations on hover
const containerVariants = {
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, x: -10 },
  hover: { opacity: 1, x: 0 },
};

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  // Motion values for the interactive 3D perspective effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse position to degree rotations
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  return (
    <motion.div
      className="relative group w-full max-w-2xl cursor-pointer"
      style={{ rotateX, rotateY }}
      onClick={() => navigate(`/project/${project.slug}`)}
      onMouseMove={(e) => {
        // Calculate mouse position relative to the center of the card
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
      }}
      onMouseLeave={() => {
        // Reset rotation on mouse leave
        x.set(0);
        y.set(0);
      }}
      // Master hover state triggers global scale and staggered children animations
      whileHover="hover"
      initial="initial"
      animate="animate"
      transition={transition}
    >
      {/* Dynamic Acid-Themed Glow */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-acid via-emerald-400 to-sky-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
      />

      {/* Main Card Container */}
      <div className="bg-ink border border-white/5 rounded-2xl overflow-hidden relative z-10 transition-colors group-hover:border-acid/20 flex flex-col h-full">
        
        {/* Project Image Section */}
        <div className="aspect-[16/9] overflow-hidden border-b border-white/5 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Subtle overlay to keep text readable and theme consistent */}
          <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-acid transition-colors">
                {project.title}
              </h3>
              {/* Subtle visual link indication */}
              <div className="text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                →
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2">
              {project.desc}
            </p>
          </div>

          {/* Animate-in-on-hover Skill Tags */}
          <motion.div 
            variants={containerVariants} 
            className="flex flex-wrap gap-2 pt-4 border-t border-white/5"
          >
            {project.stack.map((skill, index) => (
              <motion.span 
                key={index} 
                variants={itemVariants}
                className="text-[10px] font-mono uppercase px-3 py-1 bg-white/5 text-white/50 rounded border border-white/10 group-hover:border-acid/30 group-hover:text-acid transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}