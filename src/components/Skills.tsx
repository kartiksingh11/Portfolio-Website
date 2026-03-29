import { motion } from 'motion/react';
import { Code, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Layout className="w-6 h-6 text-accent" />,
    skills: ["GenAI", "Agentic AI", "RAG", "NLP", "LangChain", "Prompt Engineering", "Fine-tuning"]
  },
  {
    title: "Frameworks & Tools",
    icon: <Server className="w-6 h-6 text-secondary-accent" />,
    skills: ["PyTorch", "Hugging Face", "Transformers", "FastAPI", "Scikit-learn", "XGBoost"]
  },
  {
    title: "Core Technical",
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    skills: ["Python", "SQL", "Statistics", "Predictive Modeling", "Model Evaluation"]
  },
  {
    title: "Certifications",
    icon: <Settings className="w-6 h-6 text-green-500" />,
    skills: ["TCS AI Hackathon Winner", "Google GenAI Leader", "Kaggle Expert"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-accent">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-body max-w-2xl mx-auto"
          >
            Specialized in building intelligent systems using state-of-the-art AI frameworks and traditional engineering principles.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-accent/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-bg text-text-body text-xs font-mono rounded-full border border-white/5 hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Strip */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary-bg to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 items-center py-4"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Code className="w-6 h-6" /> GENAI</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Terminal className="w-6 h-6" /> PYTHON</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Database className="w-6 h-6" /> SQL</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Settings className="w-6 h-6" /> PYTORCH</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Layout className="w-6 h-6" /> LANGCHAIN</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Server className="w-6 h-6" /> FASTAPI</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
