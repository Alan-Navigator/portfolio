import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Mail, Phone, FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'es' | 'en';
  onOpenPdf: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenPdf, onOpenContact }) => {
  const isEs = lang === 'es';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050913] border-t border-slate-900 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <span className="font-display text-lg font-bold text-white block">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs font-mono text-sky-400">
              {isEs ? 'Ingeniero Estructural Aeroespacial' : 'Aerospace Structural Engineer'} · Chihuahua, México
            </span>
          </div>

          {/* Clean Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Email</span>
            </a>

            <button
              onClick={onOpenPdf}
              className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>{isEs ? 'Curriculum PDF' : 'Resume PDF'}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer p-1 rounded bg-slate-900 border border-slate-800"
              title={isEs ? 'Volver al inicio' : 'Scroll to top'}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Mario Alan Soto Delgado. {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </div>
          <div>
            {isEs ? 'Substanciación Estructural · Certificación FAA · Dinámica Orbital' : 'Structural Substantiation · FAA Certification · Orbital Dynamics'}
          </div>
        </div>

      </div>
    </footer>
  );
};
