import myAvatar from './media/Myphoto.jpg'
import myResume from './media/finalResume.pdf'

export const PROFILE = {
    name: 'SM Tausif',
    title: 'CS Major · Full-stack in progress',
    blurb: 'I build clean, fast apps with just enough flair to stand out. Shipping > talking.',
    location: 'Toronto, Canada',
    avatar: myAvatar
  }
  
  export const LINKS = {
    github: 'https://github.com/smtausif',          
    linkedin: 'https://www.linkedin.com/in/s-m-tausif-960524262', 
    email: 'smtausif2000@gmail.com.com',                           
    resume: myResume,                                      
  }
  
  export const PROJECTS = [
    {
      title: '🐾 Pet Adoption Hub',
      stack: ['HTML5', 'Tailwind', 'Node', 'Express', 'MongoDB'],
      desc: 'Browse pets, book adoption appointments with unique codes, and manage them in an admin panel with secure auth and email checks.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1400&auto=format&fit=crop',
      url: 'https://pet-adoption-qp10.onrender.com',
      repo: 'https://github.com/smtausif/pet_adoption' 
    },
    {
      title: 'Sprite Flight (Unity)',
      stack: ['Unity', 'C#'],
      desc: 'Fast arcade dodger: weave a tiny plane through stars and meteors with hit-pause juice, score multipliers, and escalating speed ramps.',
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1400&auto=format&fit=crop',
      repo: 'https://github.com/smtausif/spriteflight' 
    },
    {
      title: 'Mental Wellness Chatbot',
      stack: ['React', 'Node', 'Express', 'Ollama (local LLM)'],
      desc: 'Private, on-device mental-wellness assistant with daily check-ins, coping tips, and a calming UI — no cloud account needed.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
      url: 'https://mental-wellness-chatbot.onrender.com',
      repo: 'https://github.com/smtausif/mental-wellness-chatbot' 
    },
    {
      title: '⚔️ RPG Teams and Guilds',
      stack: ['C++17', 'CLI', 'Rule of 5', 'Templates'],
      desc: 'Teams/Guilds sim with a combat engine (Berserk, Heal), dynamic rosters, and deterministic logs. Shows templates, polymorphism, and full Rule of 5.',
      image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1400&auto=format&fit=crop',
      repo: 'https://github.com/smtausif/rpg-teams-guilds'
    },
    {
      title: '📖 Dictionary Application',
      stack: ['C++17', 'CSV', 'Rule of 5'],
      desc: 'CLI dictionary that loads CSV data, searches words with multiple senses, and includes performance timing. Safe dynamic memory via Rule of 5.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1400&auto=format&fit=crop',
      repo: 'https://github.com/smtausif/dictionary-application'
    }
    
  ]
  