import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, User } from 'lucide-react';

const stats = [
  { label: "CGPA", value: "9.2", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Projects", value: "10+", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Certifications", value: "5+", icon: <Award className="w-5 h-5" /> },
];

import { Settings } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 text-accent font-mono text-sm mb-4">
              <User className="w-4 h-4" />
              <span>About Me</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Bridging Traditional Architecture with <span className="text-accent">Intelligent AI</span>
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8">
              I am a Product Engineer with a background in core banking feature development and a recent shift to focus on integrating AI-driven functionality. I am committed to expanding from traditional product architecture to intelligent, data-driven user experiences.
            </p>
            <p className="text-text-body text-lg leading-relaxed mb-10">
              With a strong foundation in Computer Science and a passion for GenAI and Agentic AI, I build systems that automate complex workflows and provide actionable insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl text-center group hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-text-body uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-sm font-bold text-white">B.Tech. in Computer Science & Engineering</div>
                  <div className="text-xs text-text-body">SRM University, Chennai (2020 – 2024)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
