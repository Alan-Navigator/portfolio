import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface ExperienceSectionProps {
  lang: 'es' | 'en';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const isEs = lang === 'es';
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experiencia" className="py-20 bg-[#060c18] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>{isEs ? '04. Trayectoria Profesional' : '04. Professional Experience'}</span>
            <span aria-hidden="true">·</span>
            <span>Aeronautics & Defense</span>
            <span aria-hidden="true">·</span>
            <span>2018 – 2026</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {isEs ? 'Experiencia en Ingeniería de Esfuerzos, MRB y Certificación' : 'Experience in Stress Engineering, MRB & Certification'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {isEs 
              ? 'Historial comprobado en substanciación estructural de aeronaves, soporte de ingeniería en línea de vuelo y hangar, y liderazgo técnico en programas aeronáuticos de alta exigencia.'
              : 'Proven record in structural substantiation, flight-line/hangar liaison support, and technical leadership across high-demand aerospace certification programs.'}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-6 before:w-0.5 before:bg-slate-800">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 md:pl-14 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-1.5 md:left-4.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#070d19] border-2 border-sky-400 group-hover:scale-125 transition-transform" />

              <div className="bg-[#0b162a] border border-slate-800 group-hover:border-slate-700/80 rounded-xl p-6 sm:p-7 transition-all">
                
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                      {exp.tag}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {isEs ? exp.role : exp.roleEn}
                    </h3>
                    <div className="text-base font-semibold text-slate-200 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Unboxed Metadata */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{isEs ? exp.period : exp.periodEn}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets with precision checks */}
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {(isEs ? exp.bullets : exp.bulletsEn).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-sky-400 mt-1 select-none font-bold">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
