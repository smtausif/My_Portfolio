import { motion } from 'framer-motion'
import { PROFILE } from '../data'

export default function Hero(){
  return (
    <header id="top" className="relative">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hi, I’m <span className="gradient-text">{PROFILE.name}</span>.
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {PROFILE.title}
          </motion.p>
          <motion.p
            className="mt-3 max-w-prose text-white/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {PROFILE.blurb}
          </motion.p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-acid/90 text-ink font-semibold shadow-glow hover:bg-acid">See Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/5">Contact</a>
          </div>
        </div>
        <motion.div
        className="relative aspect-square rounded-3xl border border-white/10 overflow-hidden bg-black"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        >
        <img
            src={PROFILE.avatar}
            alt="avatar"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ mixBlendMode: 'normal', opacity: 1 }}
        />
        </motion.div>

      </div>
    </header>
  )
}
