import { motion } from 'motion/react';
import { Terminal, Cpu, Layers, Search, Settings, Building, Database, Code } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="w-6 h-6 text-accent" />,
    skills: ["Python", "Java", "SQL"]
  },
  {
    title: "Generative AI",
    icon: <Cpu className="w-6 h-6 text-secondary-accent" />,
    skills: [
      "Large Language Models (LLMs)", "RAG", "Agentic AI", 
      "Multi-Agent Systems", "NLP", "Prompt Engineering", "RAGAS"
    ]
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-6 h-6 text-yellow-500" />,
    skills: ["LangGraph", "LangChain", "LlamaIndex", "FastAPI"]
  },
  {
    title: "Retrieval",
    icon: <Search className="w-6 h-6 text-emerald-400" />,
    skills: [
      "ChromaDB", "Vector Databases", "Embeddings", "BM25", 
      "Hybrid Search", "Cross-Encoder Reranking", "Semantic Search"
    ]
  },
  {
    title: "Engineering",
    icon: <Settings className="w-6 h-6 text-blue-400" />,
    skills: [
      "REST APIs", "AWS", "Git", "CI/CD", "SQLite", 
      "Observability", "Logging", "System Design (HLD)"
    ]
  },
  {
    title: "Domain",
    icon: <Building className="w-6 h-6 text-purple-400" />,
    skills: [
      "BFSI", "Core Banking", "Credit Underwriting", 
      "Financial Document Processing", "Regulatory Compliance", "GDPR"
    ]
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
            End-to-end expertise spanning generative AI agent orchestration, production retrieval architectures, and enterprise engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-8 rounded-3xl hover:border-accent/30 transition-all group flex flex-col justify-between"
            >
              <div>
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
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Code className="w-6 h-6" /> LANGGRAPH</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Terminal className="w-6 h-6" /> PYTHON</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Database className="w-6 h-6" /> RAGAS</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Search className="w-6 h-6" /> HYBRID SEARCH</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Layers className="w-6 h-6" /> CHROMADB</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Cpu className="w-6 h-6" /> FASTAPI</span>
                <span className="text-2xl font-bold text-white/10 flex items-center gap-2"><Building className="w-6 h-6" /> BFSI</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
