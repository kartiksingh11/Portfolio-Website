import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Basic validation
      if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all fields.');
      }

      // Save to Firestore
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // Send Email Notification
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (emailError) {
        // We don't fail the whole process if email fails, 
        // as the message is already saved in Firestore.
        console.error('Email notification failed:', emailError);
      }

      setStatus('success');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
                  <a href="mailto:kartikchinu9@gmail.com" className="text-xl font-bold text-white hover:text-accent transition-colors">kartikchinu9@gmail.com</a>
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
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-text-body">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white ml-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white ml-1">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-primary-bg border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg">
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage}
                  </div>
                )}

                <button 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-2 glow-accent hover:bg-accent-hover transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
