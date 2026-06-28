import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, User, BookOpen, FileText } from 'lucide-react';

const stats = [
  { label: "CGPA", value: "9.2", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Experience", value: "2 Years", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Publications", value: "1 IEEE", icon: <BookOpen className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
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
              Designing & Shipping <span className="text-accent">Agentic AI Systems</span>
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              I am an AI Engineer with 2 years of experience designing and shipping multi-agent GenAI systems and RAG pipelines for enterprise banking. I specialize in agent orchestration (LangGraph), retrieval architectures (RAG, vector search), and LLMOps, drawing from my strong systems-design background in core banking platform engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
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

            {/* Bento details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              {/* Left Box: Education & Publications */}
              <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-8 hover:border-accent/20 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    Education
                  </h3>
                  <div className="border-l-2 border-accent/20 pl-4 space-y-2">
                    <div className="text-white font-bold text-base">Bachelor of Engineering, Computer Science and Engineering</div>
                    <div className="text-accent font-medium text-sm">SRM University</div>
                    <div className="text-xs text-text-body flex justify-between">
                      <span>2020 – 2024</span>
                      <span className="font-mono">CGPA: 9.2</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Publications
                  </h3>
                  <div className="border-l-2 border-accent/20 pl-4 space-y-2">
                    <div className="text-white font-bold text-sm">“Psychological Analysis using Social Media Tweets”</div>
                    <div className="text-text-body text-xs leading-relaxed">
                      IEEE 2024 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Box: Certifications & Competencies */}
              <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-8 hover:border-accent/20 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-secondary-accent" />
                    Certifications & Accomplishments
                  </h3>
                  <ul className="space-y-4 pl-4 list-disc text-text-body text-sm">
                    <li>
                      <span className="text-white font-semibold">TCS AI Hackathon Winner</span>
                      <p className="text-xs text-text-body mt-0.5">Awarded for innovative AI solutions built under strict resource constraints.</p>
                    </li>
                    <li>
                      <span className="text-white font-semibold">Google GenAI Leader Certification</span>
                      <p className="text-xs text-text-body mt-0.5">Demonstrated expertise in enterprise generative AI architectures and business alignment.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
