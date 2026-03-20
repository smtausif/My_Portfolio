import React from 'react';
import { EXPERIENCES } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#0f172a] text-slate-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-16 text-white border-l-4 border-sky-500 pl-4">
          Professional Experience
        </h2>

        <div className="space-y-20">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Line */}
              <div className="hidden md:block absolute -left-10 top-2 w-px h-full bg-slate-800 group-last:h-0"></div>
              <div className="hidden md:block absolute -left-[43px] top-2 w-2 h-2 rounded-full border-2 border-sky-500 bg-[#0f172a]"></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-medium text-sky-500 mt-1">
                    {exp.company} <span className="text-slate-500 mx-2">•</span> {exp.location}
                  </p>
                </div>
                <span className="text-sm font-mono text-slate-500 mt-2 md:mt-1 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                  {exp.duration}
                </span>
              </div>

              <p className="text-slate-400 mb-6 max-w-3xl leading-relaxed italic">
                {exp.desc}
              </p>

              <ul className="grid grid-cols-1 gap-4 mb-8">
                {exp.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sky-500 mt-1.5 text-xs">◆</span>
                    <span className="leading-relaxed">{metric}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] uppercase tracking-wider font-bold px-3 py-1 bg-sky-950/30 text-sky-400 border border-sky-900/50 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;