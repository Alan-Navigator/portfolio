import React from 'react';
import { PORTFOLIO_DATA, GalleryItem } from '../data/portfolioData';
import { 
  Trophy, 
  Users, 
  Award, 
  Sparkles, 
  Maximize2, 
  ArrowRight, 
  Calendar, 
  Compass, 
  Globe 
} from 'lucide-react';

interface LeadershipAwardsSectionProps {
  lang: 'es' | 'en';
  onOpenImage: (item: GalleryItem) => void;
}

export const LeadershipAwardsSection: React.FC<LeadershipAwardsSectionProps> = ({
  lang,
  onOpenImage
}) => {
  const isEs = lang === 'es';
  const leadershipGallery = PORTFOLIO_DATA.galleries.leadership;
  const awards = PORTFOLIO_DATA.awards;
  const activities = PORTFOLIO_DATA.leadershipActivities;

  return (
    <section id="liderazgo-espacial" className="py-20 bg-[#070e1c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>{isEs ? '02. Iniciativas Espaciales, NASA & Premios' : '02. Space Initiatives, NASA & Awards'}</span>
            <span aria-hidden="true">·</span>
            <span>NASA Space Apps & SGAC</span>
            <span aria-hidden="true">·</span>
            <span>Global Judge & Speaker</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {isEs ? 'Iniciativas del Sector Espacial, Liderazgo NASA & Premios' : 'Space Sector Initiatives, NASA Leadership & Global Honors'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {isEs 
              ? 'Participación activa en el ecosistema espacial mundial: evaluación y auditoría de proyectos internacionales para la NASA, delegaciones de diseño de misiones satelitales en el SGAC y reconocimientos en competencias espaciales.'
              : 'Active commitment to the global space ecosystem: auditing international space projects for NASA, satellite mission design delegations at SGAC, and honors in international space hackathons.'}
          </p>
        </div>

        {/* Section Photo Gallery (Leadership & NASA Summit) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-sky-400" />
              <span>{isEs ? 'Galería: Conferencias & Cumbres Tecnológicas' : 'Gallery: Summits & Global Space Engagement'}</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {isEs ? 'Registro de impacto global' : 'Global impact record'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {leadershipGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenImage(item)}
                className="md:col-span-12 group relative rounded-2xl overflow-hidden bg-[#091427] border border-slate-800 hover:border-sky-500/60 cursor-pointer transition-all duration-300 shadow-xl grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[380px] overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={isEs ? item.title : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091427] via-transparent to-transparent opacity-80" />
                  
                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 text-white group-hover:text-sky-400 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
                      <span>NASA International Space Apps Challenge</span>
                      <span aria-hidden="true">·</span>
                      <span>Navigator & Global Judge</span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors mb-3">
                      {isEs ? item.title : item.titleEn}
                    </h4>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {isEs ? item.description : item.descriptionEn}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                      <div>
                        <span className="text-slate-500 block">{item.specs[0].label}</span>
                        <strong className="text-slate-200">{item.specs[0].value}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">{item.specs[1].label}</span>
                        <strong className="text-sky-300">{item.specs[1].value}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-sky-400">
                    <span>Collective Genius Summit Speaker</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      {isEs ? 'Ver registro' : 'Inspect dossier'} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Organizations and Outreach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {activities.map((act, idx) => (
            <div key={idx} className="bg-[#0b162a] border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-2">
                  <span>{act.period}</span>
                  <span>{isEs ? 'Actividad Oficial' : 'Official Engagement'}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                  {act.org}
                </h3>
                <div className="text-xs font-semibold text-sky-200 mb-4 font-mono">
                  {isEs ? act.role : act.roleEn}
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {(isEs ? act.bullets : act.bulletsEn).map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-sky-400 select-none font-bold">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Grid (Claim-to-Proof Rigor) */}
        <div className="bg-[#091325] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase mb-2">
            <Trophy className="w-4 h-4" />
            <span>{isEs ? 'Reconocimientos y Distinciones' : 'Honors & Distinctions'}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
            {isEs ? 'Premios en Competencias Espaciales y Científicas' : 'Awards in Space Competitions & Physics Symposia'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, aIdx) => (
              <div 
                key={aIdx} 
                className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-500">{award.year}</span>
                    <span className="text-amber-400 font-semibold">{isEs ? award.award : award.awardEn}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-white mb-2">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEs ? award.description : award.descriptionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
