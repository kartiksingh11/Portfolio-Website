import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';


const roles = ["AI Engineer", "GenAI Specialist", "RAG Systems Builder", "LLMOps Practitioner"];

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
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono font-medium mb-6 border border-accent/20">
            AI Engineer @ TCS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-white">Kartik Singh</span>
            <br />
            <span className="text-accent min-h-[1.2em] inline-block">
              {displayText}
              <span className="animate-pulse border-r-4 border-accent ml-1"></span>
            </span>
          </h1>
          <p className="text-lg text-text-body mb-8 max-w-2xl leading-relaxed">
            AI Engineer with 2 years of experience designing and shipping multi-agent GenAI systems and RAG pipelines for enterprise banking. Specialized in agent orchestration (LangGraph), retrieval architectures (RAG, vector search), and LLMOps.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
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
      </div>
    </section>
  );
}
