import React, { useState } from 'react';
import { PORTFOLIO_DATA, GalleryItem } from '../data/portfolioData';
import { 
  FileText, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Maximize2, 
  CheckCircle2, 
  Satellite, 
  Compass, 
  Cpu, 
  MapPin, 
  Phone, 
  Copy, 
  Rocket, 
  ExternalLink 
} from 'lucide-react';

interface HeroProps {
  lang: 'es' | 'en';
  onOpenContact: () => void;
  onOpenPdf: () => void;
  onOpenImage: (item: GalleryItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenContact,
  onOpenPdf,
  onOpenImage
}) => {
  const isEs = lang === 'es';
  const spaceImageItem = PORTFOLIO_DATA.galleries.space[0]; // AzTechSat-1 CubeSat in orbit
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 aerospace-grid border-b border-slate-800/80">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-900/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Recruiter Banner & Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 mb-8 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-300">
              <strong className="text-white font-semibold">{isEs ? 'Perfil para Reclutadores Técnicos:' : 'Technical Recruiter Brief:'}</strong>{' '}
              {isEs 
                ? 'Ingeniero Aeroespacial & Físico · Especialista en Misiones Espaciales (ADCS) & Certificación Estructural' 
                : 'Aerospace Engineer & Physicist · Space Missions (ADCS) & Structural Certification'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-sky-400">
            <span className="hidden sm:inline">Chihuahua, México · Remoto / Reubicación</span>
            <button
              onClick={handleCopyEmail}
              className="text-slate-300 hover:text-white flex items-center gap-1 p-1 rounded bg-slate-800 border border-slate-700 transition-colors"
              title={isEs ? 'Copiar correo de Mario' : 'Copy Mario’s email'}
            >
              {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? (isEs ? 'Copiado' : 'Copied') : PORTFOLIO_DATA.personal.email}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Recruiter-Oriented Typographic Summary */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed Kicker Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
                <span className="flex items-center gap-1 font-semibold text-sky-300">
                  <Rocket className="w-3.5 h-3.5 text-sky-400" />
                  {isEs ? 'Sector Espacial & Dinámica Orbital' : 'Space Sector & Orbital Dynamics'}
                </span>
                <span aria-hidden="true">·</span>
                <span>NASA & AEM</span>
                <span aria-hidden="true">·</span>
                <span>Doble Titulación UACH</span>
              </div>

              {/* Primary Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4">
                Mario Alan Soto Delgado
              </h1>

              <div className="text-base sm:text-lg font-medium text-sky-300 mb-5">
                {isEs ? 'Especialista en Misiones Espaciales, Sistemas ADCS & Substanciación Estructural' : 'Space Missions, ADCS Flight Dynamics & Structural Substantiation Specialist'}
              </div>

              {/* Executive Summary Paragraph */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {isEs ? PORTFOLIO_DATA.personal.bio : PORTFOLIO_DATA.personal.bioEn}
              </p>

              {/* Space Highlights Grid (Directly for recruiters) */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-200 bg-[#091426] p-4 rounded-xl border border-slate-800">
                <div className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold mt-0.5">🚀</span>
                  <div>
                    <strong className="text-white">AzTechSat-1 (NASA / AEM):</strong>{' '}
                    {isEs 
                      ? 'Líder Técnico ADCS en el primer nanosatélite mexicano desplegado desde la ISS. Más de 1,200 simulaciones en MATLAB (J2, IGRF, B-dot, cuaterniones).' 
                      : 'Technical Team Lead for ADCS on Mexico’s historic CubeSat deployed from the ISS. 1,200+ simulations in MATLAB (J2, IGRF, B-dot, quaternions).'}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold mt-0.5">🛰️</span>
                  <div>
                    <strong className="text-white">NSATMX-ER1 (Observación Terrestre):</strong>{' '}
                    {isEs 
                      ? 'Analista de dinámica de misión y cobertura con sensor hiperespectral usando STK y MATLAB.' 
                      : 'Flight dynamics mission analyst and hyperspectral sensor coverage modeling utilizing STK and MATLAB.'}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold mt-0.5">🌐</span>
                  <div>
                    <strong className="text-white">NASA Space Apps & SGAC:</strong>{' '}
                    {isEs 
                      ? 'Juez Global y Navigator de la NASA; Delegado de diseño de misiones espaciales en Costa Rica y comité organizador en Montreal (CSA).' 
                      : 'NASA Global Judge & Navigator; Space Mission Design Delegate in Costa Rica and 5th SGW organizing committee in Montreal (CSA).'}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold mt-0.5">✈️</span>
                  <div>
                    <strong className="text-white">Aeronáutica (Altitude & Textron):</strong>{' '}
                    {isEs 
                      ? 'Stress Liaison en Boeing 777 P2F (300+ desviaciones aprobadas por FAA) y MRB en Cessna (+800 componentes resueltos).' 
                      : 'Stress Liaison on Boeing 777 P2F (300+ FAA approved deviations) & MRB on Cessna line (+800 parts dispositioned).'}
                  </div>
                </div>
              </div>
            </div>

            {/* Recruiter One-Click Action Toolbar */}
            <div className="pt-2 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-3">
                {/* Primary CV Download */}
                <button
                  onClick={onOpenPdf}
                  className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isEs ? 'Descargar CV Completo (PDF)' : 'Download Full Resume (PDF)'}</span>
                </button>

                {/* Direct LinkedIn */}
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn Oficial</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {/* Direct Contact Button */}
                <button
                  onClick={onOpenContact}
                  className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{isEs ? 'Contactar' : 'Get in Touch'}</span>
                </button>
              </div>

              {/* Direct Reachability info */}
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="hover:text-white transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="hover:text-white transition-colors">
                    {PORTFOLIO_DATA.personal.phoneDisplay}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>Chihuahua, México</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Space Mission Visual (AzTechSat-1 CubeSat in Orbit) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div 
              onClick={() => onOpenImage(spaceImageItem)}
              className="group relative w-full h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-slate-700/80 bg-[#091322] cursor-pointer shadow-xl transition-all hover:border-sky-500/50"
            >
              {/* Space Image */}
              <img
                src={spaceImageItem.image}
                alt="AzTechSat-1 CubeSat in Low Earth Orbit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Measured Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d19] via-[#070d19]/40 to-transparent" />

              {/* Top HUD Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-2.5 py-1 rounded text-sky-300 flex items-center gap-1.5">
                  <Satellite className="w-3.5 h-3.5 text-sky-400" />
                  <span>AZTE تنAT-1 · NASA / AEM</span>
                </span>
                <span className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 p-1.5 rounded text-white group-hover:text-sky-400 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                  <span>{isEs ? 'Misión Satelital Destacada' : 'Featured Space Mission'}</span>
                  <span aria-hidden="true">·</span>
                  <span>ISS Deployment</span>
                </div>
                <h3 className="font-display text-base font-bold text-white mb-1">
                  {isEs ? 'AzTechSat-1: Líder Técnico ADCS' : 'AzTechSat-1: ADCS Technical Lead'}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {isEs ? spaceImageItem.caption : spaceImageItem.captionEn}
                </p>
                <div className="mt-2 text-[11px] font-mono text-sky-300 group-hover:underline flex items-center gap-1">
                  <span>{isEs ? 'Ver expediente de la misión orbital' : 'Inspect orbital mission dossier'}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Recruiter Metric Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-[#0b1629]/60 border border-slate-800/90 p-4 rounded-xl">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight tabular-nums mb-1">
              +1,200
            </div>
            <div className="text-xs font-semibold text-white mb-1">
              {isEs ? 'Simulaciones ADCS' : 'ADCS Simulations'}
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              {isEs ? 'MATLAB, J2, IGRF & ley B-dot para AzTechSat-1' : 'MATLAB, J2 & B-dot for AzTechSat-1 (NASA)'}
            </p>
          </div>

          <div className="bg-[#0b1629]/60 border border-slate-800/90 p-4 rounded-xl">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums mb-1">
              2 Misiones
            </div>
            <div className="text-xs font-semibold text-white mb-1">
              {isEs ? 'Nanosatélites Desarrollados' : 'Nanosatellites Engineered'}
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              {isEs ? 'AzTechSat-1 (NASA) & NSATMX-ER1 (STK)' : 'AzTechSat-1 (NASA) & NSATMX-ER1 (STK)'}
            </p>
          </div>

          <div className="bg-[#0b1629]/60 border border-slate-800/90 p-4 rounded-xl">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight mb-1">
              Juez Global
            </div>
            <div className="text-xs font-semibold text-white mb-1">
              {isEs ? 'NASA Space Apps Challenge' : 'NASA Space Apps Challenge'}
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              {isEs ? 'Evaluación de proyectos mundiales y Local Lead' : 'Global auditing & Local Lead Chihuahua'}
            </p>
          </div>

          <div className="bg-[#0b1629]/60 border border-slate-800/90 p-4 rounded-xl">
            <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums mb-1">
              +300
            </div>
            <div className="text-xs font-semibold text-white mb-1">
              {isEs ? 'Desviaciones FAA Aprobadas' : 'FAA Deviations Approved'}
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              {isEs ? 'Boeing 777 P2F & +800 MRB Cessna' : 'Boeing 777 P2F & +800 MRB Cessna'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
