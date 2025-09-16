import { Github, Linkedin, FileDown } from 'lucide-react'
import { LINKS } from '../data'

export default function Navbar(){
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-ink/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-wide">
          tausif<span className="text-acid">.dev</span>
        </a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:text-acid">Projects</a>
          <a href="#skills" className="hover:text-acid">Skills</a>
          <a href="#contact" className="hover:text-acid">Contact</a>
          <div className="w-px h-5 bg-white/10" />
          <a href={LINKS.github} aria-label="GitHub" className="hover:text-acid"><Github size={18}/></a>
          <a href={LINKS.linkedin} aria-label="LinkedIn" className="hover:text-acid"><Linkedin size={18}/></a>
          <a href={LINKS.resume} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
            <FileDown size={16}/> Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
