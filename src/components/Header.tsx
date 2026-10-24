import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Linkedin, Mail, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  onOpenContact: () => void;
  onOpenPdf: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenContact, onOpenPdf }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isEs = lang === 'es';

  const navLinks = [
    { href: '#espacio', label: isEs ? 'Misiones Espaciales (ADCS)' : 'Space Missions (ADCS)', highlight: true },
    { href: '#liderazgo-espacial', label: isEs ? 'Iniciativas Espaciales & NASA' : 'Space Initiatives & NASA' },
    { href: '#estructuras', label: isEs ? 'Estructuras & MRB' : 'Structures & MRB' },
    { href: '#experiencia', label: isEs ? 'Trayectoria' : 'Experience' },
    { href: '#educacion', label: isEs ? 'Educación & Skills' : 'Education & Skills' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070d19]/90 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex flex-col justify-center whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
        >
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
            {PORTFOLIO_DATA.personal.name}
          </span>
          <span className="text-xs text-sky-400/90 font-mono tracking-wider">
            {isEs ? 'INGENIERO ESTRUCTURAL AEROESPACIAL' : 'AEROSPACE STRUCTURAL ENGINEER'}
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-white hover:border-b hover:border-sky-400 pb-0.5 transition-all whitespace-nowrap shrink-0 ${
                link.highlight ? 'text-sky-300 font-semibold' : 'text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action & verified links */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-700/80 rounded-md p-0.5 text-xs">
            <button
              onClick={() => setLang('es')}
              className={`px-2.5 py-1 rounded transition-colors font-mono ${
                isEs ? 'bg-sky-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
              title="Cambiar a Español"
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded transition-colors font-mono ${
                !isEs ? 'bg-sky-600 text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* LinkedIn verified profile link */}
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg hover:text-white transition-colors whitespace-nowrap"
            title="Ver perfil oficial en LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>

          {/* Resume PDF quick preview */}
          <button
            onClick={onOpenPdf}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg hover:text-white transition-colors whitespace-nowrap"
            title={isEs ? 'Ver Curriculum Vitae en PDF' : 'View Resume PDF'}
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>{isEs ? 'Ver CV' : 'Resume'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-sky-500/20 transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>{isEs ? 'Contactar' : 'Get in Touch'}</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070d19] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-400" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdf();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>{isEs ? 'Ver CV (PDF)' : 'View Resume'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
