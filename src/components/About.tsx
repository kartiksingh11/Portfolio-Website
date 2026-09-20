import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, User, ShieldCheck, Building2 } from 'lucide-react';

const stats = [
  { label: "CGPA", value: "9.2/10", icon: <GraduationCap className="w-5 h-5" /> },
  { label: "Experience", value: "2+ Years", icon: <Briefcase className="w-5 h-5" /> },
  { label: "Domain", value: "BFSI & AI", icon: <Building2 className="w-5 h-5" /> },
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
              Building Enterprise <span className="text-accent">GenAI & Agentic Systems</span>
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              AI Engineer with 2+ years of software and product engineering experience in BFSI, building Generative AI, Retrieval-Augmented Generation (RAG), and agentic applications for financial document processing, credit underwriting, and enterprise knowledge retrieval. Experienced in Python, LangGraph, LangChain, FastAPI, ChromaDB, hybrid search, cross-encoder reranking, RAG evaluation with RAGAS, REST APIs, and observability.
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
              {/* Left Box: Education & Domain Expertise */}
              <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-8 hover:border-accent/20 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    Education
                  </h3>
                  <div className="border-l-2 border-accent/20 pl-4 space-y-2">
                    <div className="text-white font-bold text-base">B.Tech, Computer Science Engineering</div>
                    <div className="text-accent font-medium text-sm">SRM Institute of Science and Technology</div>
                    <div className="text-xs text-text-body flex justify-between pt-1">
                      <span>2020 – 2024</span>
                      <span className="font-mono text-accent font-semibold">CGPA: 9.2 / 10</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-accent" />
                    Domain Specialization
                  </h3>
                  <div className="border-l-2 border-accent/20 pl-4 space-y-2">
                    <div className="text-white font-bold text-sm">Banking, Financial Services & Insurance (BFSI)</div>
                    <p className="text-text-body text-xs leading-relaxed">
                      Core Banking Architecture, Automated Credit Underwriting, Financial Document Processing, Regulatory Compliance, and GDPR Audit Automation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Box: Certifications */}
              <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-6 hover:border-accent/20 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Award className="w-6 h-6 text-secondary-accent" />
                    Professional Certifications
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary-bg/60 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        AWS Certified AI Practitioner
                      </div>
                      <p className="text-xs text-text-body mt-1 pl-6">Amazon Web Services foundational AI/ML cloud architecture & solutions.</p>
                    </div>

                    <div className="p-4 bg-primary-bg/60 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm">
                        <ShieldCheck className="w-4 h-4 text-secondary-accent" />
                        Google Generative AI Leader
                      </div>
                      <p className="text-xs text-text-body mt-1 pl-6">Enterprise generative AI strategy, model capabilities, and architecture.</p>
                    </div>

                    <div className="p-4 bg-primary-bg/60 rounded-2xl border border-white/5 hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm">
                        <ShieldCheck className="w-4 h-4 text-yellow-500" />
                        Claude Certified Associate
                      </div>
                      <p className="text-xs text-text-body mt-1 pl-6">Advanced prompt design, reasoning workflows, and Anthropic Claude integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
