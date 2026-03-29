import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's build something <span className="text-accent">together</span>
            </h2>
            <p className="text-text-body text-lg mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-text-body mb-1">Email Me</div>
                  <a href="mailto:kartiksingh11a@gmail.com" className="text-xl font-bold text-white hover:text-accent transition-colors">kartiksingh11a@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-text-body mb-1">Call Me</div>
                  <a href="tel:+918178041792" className="text-xl font-bold text-white hover:text-accent transition-colors">+91-8178041792</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm text-text-body mb-1">Location</div>
                  <div className="text-xl font-bold text-white">Noida, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-2 glow-accent hover:bg-accent-hover transition-all group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
