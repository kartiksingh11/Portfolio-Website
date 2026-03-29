import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Kartik<span className="text-accent">Singh</span></span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" className="text-text-body hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com/in/kartik-singh11/" className="text-text-body hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:kartiksingh11a@gmail.com" className="text-text-body hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>

          <p className="text-sm text-text-body">
            © {currentYear} Kartik Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
