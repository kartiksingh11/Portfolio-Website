import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal } from 'lucide-react';

const projects = [
  {
    title: "Multi-Agent RAG Compliance Auditor",
    description: "Autonomous AI auditor to map bank policies against GDPR regulations. Implemented a Multi-Agent 'Critic' loop to eliminate hallucinations and optimized high-volume ingestion using recursive character splitting.",
    image: "https://picsum.photos/seed/compliance/800/500",
    tags: ["LangChain", "LlamaIndex", "ChromaDB", "Llama 3", "OpenAI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Predictive Maintenance for Industry 4.0",
    description: "Dual-task ML system to predict machine failures and classify modes. Mitigated 97% class imbalance using SMOTE-NC and integrated transparency tools using Permutation Feature Importance.",
    image: "https://picsum.photos/seed/maintenance/800/500",
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE-NC", "Graphviz"],
    github: "#",
    demo: "#"
  },
  {
    title: "Brain-Tumor-Detector",
    description: "Detection model using Convolutional Neural Networks. Achieved 99% accuracy on test data and selected as the top project in the cohort.",
    image: "https://picsum.photos/seed/brain/800/500",
    tags: ["CNN", "PyTorch", "Computer Vision", "Deep Learning"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
              <Terminal className="w-4 h-4" />
              <span>My Portfolio</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Featured <span className="text-accent">Projects</span>
            </h2>
          </div>
          <p className="text-text-body max-w-md">
            A selection of my recent work, ranging from AI-powered compliance auditors to complex predictive maintenance systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group hover:border-accent/30 transition-all flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-body text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex gap-4">
                    <a href={project.github} className="text-sm font-bold text-white flex items-center gap-2 hover:text-accent transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} className="text-sm font-bold text-accent flex items-center gap-2 hover:underline">
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-secondary-bg text-white rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
