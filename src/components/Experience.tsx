import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "AI Product Engineer",
    company: "Tata Consultancy Services | Saudi National Bank",
    period: "June 2024 - Present",
    description: "Automating credit underwriting engines and developing GenAI agents for financial paperwork interpretation. Leveraging NLP and Statistics to save $4M in annual operational costs.",
    tech: ["GenAI", "NLP", "ExplainableAI", "SQL", "Statistics"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary-bg/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent font-mono text-sm mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Professional <span className="text-accent">Experience</span></h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-0 md:before:left-1/2 before:w-0.5 before:bg-white/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary-bg z-10" />

              <div className="md:w-1/2 flex flex-col items-start md:items-end">
                <div className={`glass-card p-8 rounded-3xl w-full hover:border-accent/30 transition-all ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-accent font-mono text-sm font-bold mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-secondary-accent font-medium mb-4">{exp.company}</div>
                  <p className="text-text-body text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {exp.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-primary-bg text-[10px] font-bold text-text-body rounded-full border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
