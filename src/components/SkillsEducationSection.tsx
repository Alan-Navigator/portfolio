import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Terminal, 
  Globe2, 
  CheckCircle, 
  FileCheck2, 
  ExternalLink 
} from 'lucide-react';

interface SkillsEducationSectionProps {
  lang: 'es' | 'en';
}

export const SkillsEducationSection: React.FC<SkillsEducationSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const education = PORTFOLIO_DATA.education;
  const certs = PORTFOLIO_DATA.certifications;
  const skills = PORTFOLIO_DATA.skills;

  return (
    <section id="educacion" className="py-20 bg-[#060c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>{isEs ? '05. Formación & Competencias Técnicas' : '05. Academic Foundation & Technical Stack'}</span>
            <span aria-hidden="true">·</span>
            <span>UACH Doble Titulación</span>
            <span aria-hidden="true">·</span>
            <span>CSWA & NASA ARSET</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {isEs ? 'Educación, Certificaciones & Herramientas de Cálculo' : 'Education, Certifications & Engineering Toolkit'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {isEs 
              ? 'Formación dual interdisciplinaria en ingeniería aeroespacial y física teórica, respaldada por certificaciones industriales en diseño CAD y percepción remota de la NASA.'
              : 'Interdisciplinary dual degree in aerospace engineering and engineering physics, backed by industrial CAD credentials and NASA remote sensing qualifications.'}
          </p>
        </div>

        {/* 2-Column Split: Education & Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>{isEs ? 'Doble Titulación Universitaria' : 'Dual Engineering Degrees'}</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-[#0b162a] border border-slate-800 rounded-xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-xs font-mono text-sky-400 font-semibold">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {edu.location}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-white mb-1">
                    {isEs ? edu.degree : edu.degreeEn}
                  </h4>
                  <div className="text-sm font-medium text-slate-300 mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.highlights}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-sky-400" />
                <span>{isEs ? 'Certificaciones Oficiales' : 'Official Certifications'}</span>
              </h3>

              <div className="space-y-3">
                {certs.map((cert, cIdx) => (
                  <div key={cIdx} className="bg-[#0b162a] border border-slate-800 rounded-xl p-5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                    <h4 className="font-display text-base font-bold text-white mb-2">
                      {isEs ? cert.title : cert.titleEn}
                    </h4>
                    <div className="text-xs font-mono text-sky-300 bg-slate-950/70 p-2 rounded border border-slate-800/80 flex items-center justify-between">
                      <span>ID: {cert.id}</span>
                      <span className="text-emerald-400">● {isEs ? 'Verificado' : 'Verified'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#0b162a] border border-slate-800 rounded-xl p-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                <Globe2 className="w-4 h-4 text-sky-400" />
                <span>{isEs ? 'Dominio de Idiomas' : 'Language Proficiency'}</span>
              </h3>
              <div className="space-y-2 text-xs font-mono">
                {skills.languages.map((langItem, lIdx) => (
                  <div key={lIdx} className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-200 font-semibold">{langItem.name}</span>
                    <span className="text-sky-300">{langItem.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Technical Tooling & Core Competencies Matrix */}
        <div className="bg-[#081223] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase mb-2">
            <Terminal className="w-4 h-4" />
            <span>{isEs ? 'Software, Herramientas & Métodos de Ingeniería' : 'Software, Tooling & Engineering Disciplines'}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
            {isEs ? 'Stack de Simulación, CAD y Análisis Estructural' : 'Simulation, CAD & Structural Analysis Stack'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: Engineering Disciplines */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                {isEs ? 'Disciplinas de Ingeniería' : 'Engineering Disciplines'}
              </span>
              {skills.engineering.map((eng, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{eng}</span>
                </div>
              ))}
            </div>

            {/* Column 2: Software & Tools */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                {isEs ? 'Software & Herramientas' : 'Software & Tools'}
              </span>
              {skills.tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200 font-mono">
                  <span className="text-sky-400">❯</span>
                  <span>{tool}</span>
                </div>
              ))}
            </div>

            {/* Column 3: Strengths */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                {isEs ? 'Fortalezas & Liderazgo' : 'Leadership & Core Strengths'}
              </span>
              {skills.strengths.map((str, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
