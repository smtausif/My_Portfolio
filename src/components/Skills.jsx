// Skills.jsx
import { useState, useMemo } from "react";

const CATEGORIES = [
  {
    key: "languages",
    label: "Programming Languages",
    items: [
      { name: "JavaScript", grad: "from-yellow-400/40 to-amber-500/40" },
      { name: "TypeScript", grad: "from-sky-400/40 to-blue-500/40" },
      { name: "Python", grad: "from-yellow-400/40 to-blue-500/40" },
      { name: "C#", grad: "from-violet-400/40 to-purple-500/40" },
      { name: "C++", grad: "from-indigo-400/40 to-blue-600/40" },
      { name: "Bash", grad: "from-lime-400/40 to-emerald-600/40" },
    ],
  },
  {
    key: "web",
    label: "Web Dev & Frameworks",
    items: [
      { name: "React", grad: "from-cyan-400/40 to-teal-500/40" },
      { name: "Node.js", grad: "from-emerald-400/40 to-green-500/40" },
      { name: "Express.js", grad: "from-zinc-400/40 to-neutral-500/40" },
      { name: "Flask", grad: "from-slate-300/40 to-slate-600/40" },
      { name: "Vite", grad: "from-purple-400/40 to-fuchsia-500/40" },
      { name: "Tailwind CSS", grad: "from-cyan-400/40 to-sky-500/40" },
      { name: "HTML", grad: "from-orange-400/40 to-amber-500/40" },
      { name: "CSS", grad: "from-sky-400/40 to-indigo-500/40" },
    ],
  },
  {
    key: "db",
    label: "Databases",
    items: [
      { name: "MongoDB", grad: "from-lime-400/40 to-green-500/40" },
      { name: "PostgreSQL", grad: "from-sky-400/40 to-indigo-500/40" },
      { name: "MySQL", grad: "from-amber-400/40 to-yellow-500/40" },
    ],
  },
  {
    key: "tools",
    label: "Developer Tools",
    items: [
      { name: "Git", grad: "from-orange-400/40 to-red-500/40" },
      { name: "GitHub", grad: "from-slate-400/40 to-zinc-600/40" },
      { name: "Postman", grad: "from-amber-400/40 to-orange-500/40" },
      { name: "Jira", grad: "from-blue-400/40 to-indigo-600/40" },
      { name: "Visual Paradigm", grad: "from-purple-400/40 to-violet-500/40" },
    ],
  },
  {
    key: "other",
    label: "Other Technical Skills",
    items: [
      { name: "Full-stack Development", grad: "from-pink-400/40 to-rose-500/40" },
      { name: "API Integration", grad: "from-teal-400/40 to-cyan-500/40" },
      { name: "Testing & Debugging", grad: "from-slate-400/40 to-zinc-600/40" },
      { name: "AI Prompting", grad: "from-emerald-400/40 to-green-600/40" },
      { name: "Clean Architecture & UI", grad: "from-fuchsia-400/40 to-purple-600/40" },
      { name: "Version Control", grad: "from-amber-400/40 to-yellow-600/40" },
    ],
  },
  {
    key: "transferable",
    label: "Transferable Skills",
    items: [
      { name: "Problem-solving", grad: "from-indigo-400/40 to-blue-500/40" },
      { name: "Independent Task Management", grad: "from-cyan-400/40 to-sky-500/40" },
      { name: "Teamwork & Adaptability", grad: "from-green-400/40 to-emerald-500/40" },
      { name: "Attention to Detail", grad: "from-rose-400/40 to-red-500/40" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState("all");

  const items = useMemo(() => {
    if (active === "all") return CATEGORIES.flatMap((c) => c.items);
    return CATEGORIES.find((c) => c.key === active)?.items || [];
  }, [active]);

  return (
    <section id="skills" className="py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <p className="text-white/70 mt-2">Organized by category for clarity.</p>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={`px-4 py-2 rounded-full text-sm ${
              active === "all"
                ? "bg-white/20 text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm ${
                active === c.key
                  ? "bg-white/20 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-6 flex flex-wrap gap-3">
          {items.map((s) => (
            <span
              key={s.name}
              className={`
                relative inline-flex items-center gap-2
                rounded-full border border-white/10 bg-white/[0.04]
                px-4 py-2 text-sm text-white/90 backdrop-blur-sm
                transition-all duration-300
                hover:scale-105 hover:-translate-y-0.5 hover:border-white/20
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                bg-gradient-to-r ${s.grad}
              `}
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
