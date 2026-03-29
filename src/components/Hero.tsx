import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';


const roles = ["AI Product Engineer", "Product Engineer", "GenAI Specialist", "ML Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono font-medium mb-6 border border-accent/20">
            AI Product Engineer @ TCS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-white">Kartik Singh</span>
            <br />
            <span className="text-accent min-h-[1.2em] inline-block">
              {displayText}
              <span className="animate-pulse border-r-4 border-accent ml-1"></span>
            </span>
          </h1>
          <p className="text-lg text-text-body mb-8 max-w-lg leading-relaxed">
            Product Engineer with a background in core banking and a focus on integrating AI-driven functionality. Committed to building intelligent, data-driven user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-white rounded-xl font-bold flex items-center gap-2 glow-accent hover:bg-accent-hover transition-all group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1b-SO91qXui0C0WVBKC45Q_9-SjNywW3u/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary-bg text-white rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/kartiksingh11" target="_blank" rel="noopener noreferrer" className="text-text-body hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com/in/kartik-singh11/" target="_blank" rel="noopener noreferrer" className="text-text-body hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:kartiksingh11a@gmail.com" className="text-text-body hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-accent/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-2 border-secondary-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-secondary-bg glow-accent">
              <img
                src='../profile.png'
                alt="Kartik Singh"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-secondary-bg p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-white">2+ Years Exp.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
