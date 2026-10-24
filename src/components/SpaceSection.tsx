import React, { useState } from 'react';
import { PORTFOLIO_DATA, GalleryItem } from '../data/portfolioData';
import { 
  Compass, 
  Satellite, 
  Orbit, 
  Cpu, 
  Maximize2, 
  ArrowRight, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  Rocket, 
  Layers 
} from 'lucide-react';

interface SpaceSectionProps {
  lang: 'es' | 'en';
  onOpenImage: (item: GalleryItem) => void;
}

export const SpaceSection: React.FC<SpaceSectionProps> = ({ lang, onOpenImage }) => {
  const isEs = lang === 'es';
  const spaceGallery = PORTFOLIO_DATA.galleries.space;
  const spaceProjects = PORTFOLIO_DATA.spaceProjects;

  // Interactive ADCS simulation state
  const [bDotSimActive, setBDotSimActive] = useState(false);
  const [angularRate, setAngularRate] = useState(12.4); // deg/s
  const [detumbled, setDetumbled] = useState(false);

  const handleToggleSimulation = () => {
    if (!bDotSimActive) {
      setBDotSimActive(true);
      setDetumbled(false);
      let currentRate = 12.4;
      const interval = setInterval(() => {
        currentRate -= 1.8;
        if (currentRate <= 0.2) {
          currentRate = 0.08;
          setAngularRate(0.08);
          setDetumbled(true);
          setBDotSimActive(false);
          clearInterval(interval);
        } else {
          setAngularRate(Number(currentRate.toFixed(2)));
        }
      }, 350);
    } else {
      setBDotSimActive(false);
      setAngularRate(12.4);
      setDetumbled(false);
    }
  };

  const handleResetSimulation = () => {
    setBDotSimActive(false);
    setAngularRate(12.4);
    setDetumbled(false);
  };

  return (
    <section id="espacio" className="py-20 bg-[#070e1c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Prominently highlighting the Space Sector as requested */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span className="flex items-center gap-1 font-bold text-sky-300">
              <Rocket className="w-3.5 h-3.5" />
              {isEs ? '01. Especialidad Principal: Sector Espacial' : '01. Core Focus: Space Sector'}
            </span>
            <span aria-hidden="true">·</span>
            <span>NASA / AEM / UPAEP</span>
            <span aria-hidden="true">·</span>
            <span>Misiones Satelitales LEO</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {isEs ? 'Misiones Espaciales, Dinámica Orbital & Nanosatélites' : 'Space Missions, Orbital Dynamics & Nanosatellites'}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            {isEs
              ? 'Liderazgo técnico en subsistemas de actitud (ADCS) para el satélite AzTechSat-1 —primer CubeSat mexicano desplegado desde la Estación Espacial Internacional (ISS) evaluado por comités de NASA— y analista de dinámica de misión para el satélite de observación terrestre NSATMX-ER1.'
              : 'Technical leadership in attitude determination & control (ADCS) for AzTechSat-1 —the historic Mexican CubeSat deployed from the ISS and vetted by NASA review boards— alongside flight dynamics analysis on NSATMX-ER1 Earth observation nanosatellite.'}
          </p>
        </div>

        {/* Recruiter Quick Fact Sheet for Space (Highlights at a Glance) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-[#0b162a] border border-slate-700/80 p-4 rounded-xl flex items-start gap-3">
            <span className="text-2xl mt-0.5">🛰️</span>
            <div>
              <span className="text-xs font-mono text-sky-400 block uppercase">AzTechSat-1 · NASA / AEM</span>
              <strong className="text-sm text-white font-semibold block mt-0.5">Líder Técnico ADCS</strong>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {isEs 
                  ? '+1,200 simulaciones en MATLAB con propagador J2, campo IGRF, algoritmo B-dot y cuaterniones.' 
                  : '+1,200 MATLAB simulations integrating J2 propagator, IGRF, B-dot algorithm & quaternions.'}
              </p>
            </div>
          </div>

          <div className="bg-[#0b162a] border border-slate-700/80 p-4 rounded-xl flex items-start gap-3">
            <span className="text-2xl mt-0.5">🌍</span>
            <div>
              <span className="text-xs font-mono text-sky-400 block uppercase">NSATMX-ER1 · Observación</span>
              <strong className="text-sm text-white font-semibold block mt-0.5">Analista Dinámica de Misión</strong>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {isEs 
                  ? 'Modelado de cobertura y caducidad de datos (age-of-data) con Systems Tool Kit (STK) y MATLAB.' 
                  : 'Orbit sensor swaths and age-of-data modeling with Systems Tool Kit (STK) and MATLAB.'}
              </p>
            </div>
          </div>

          <div className="bg-[#0b162a] border border-slate-700/80 p-4 rounded-xl flex items-start gap-3">
            <span className="text-2xl mt-0.5">🎯</span>
            <div>
              <span className="text-xs font-mono text-sky-400 block uppercase">Competencias Espaciales</span>
              <strong className="text-sm text-white font-semibold block mt-0.5">Stack Técnico</strong>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                MATLAB, STK, Mecánica Orbital, Cuaterniones, Magnetopares, NASA Readiness Reviews, ARSET.
              </p>
            </div>
          </div>
        </div>

        {/* Section Photo Gallery (High-Fidelity Space Assets with Zoom) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Satellite className="w-3.5 h-3.5 text-sky-400" />
              <span>{isEs ? 'Galería Fotográfica & Registros de Misión' : 'Space Missions Photo & Telemetry Gallery'}</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {spaceGallery.length} {isEs ? 'expedientes de misión' : 'mission records'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spaceGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenImage(item)}
                className="group relative rounded-xl overflow-hidden bg-[#091427] border border-slate-800 hover:border-sky-500/60 cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={isEs ? item.title : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091427] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-2.5 py-0.5 rounded text-[11px] font-mono text-sky-300">
                    {item.specs[0].value}
                  </div>

                  {/* Zoom Action */}
                  <div className="absolute top-3 right-3 p-1.5 rounded bg-slate-900/80 text-white group-hover:text-sky-400 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-sky-400 block mb-1">
                      {isEs ? item.category : item.categoryEn}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                      {isEs ? item.title : item.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {isEs ? item.caption : item.captionEn}
                    </p>

                    {/* Specs with no pills */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <div>
                        <span className="text-slate-500 block">{item.specs[1].label}</span>
                        <strong className="text-slate-200">{item.specs[1].value}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">{item.specs[2].label}</span>
                        <strong className="text-slate-200">{item.specs[2].value}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>NASA Review Substantiated</span>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      {isEs ? 'Ver detalles técnicos' : 'Inspect dossier'} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Space Projects Dossier (AzTechSat-1 & NSATMX-ER1) */}
        <div className="space-y-6 mb-14">
          {spaceProjects.map((proj, pIdx) => (
            <div key={pIdx} className="bg-[#0b162a] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1">
                    <span>{proj.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.period}</span>
                    <span aria-hidden="true">·</span>
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {isEs ? proj.title : proj.titleEn}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1 font-mono">
                    {isEs ? proj.role : proj.roleEn}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
                  {proj.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="text-xs font-mono text-sky-300 bg-slate-900 px-2.5 py-1 rounded border border-slate-700">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-slate-300">
                {(isEs ? proj.bullets : proj.bulletsEn).map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-sky-400 mt-1 select-none font-bold">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Interactive ADCS & Flight Dynamics Console */}
        <div className="bg-[#0b162a] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase">
              <Cpu className="w-4 h-4" />
              <span>{isEs ? 'Simulador Demostrativo del Algoritmo B-Dot (ADCS)' : 'Interactive B-Dot ADCS Simulator'}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
              {isEs ? 'Amortiguamiento Magnético y Cuaterniones en MATLAB' : 'Magnetic Detumbling & Quaternion Kinematics'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isEs 
                ? 'El modelo desarrollado por Mario Alan Soto para AzTechSat-1 integró propagador orbital J2, modelo geomagnético IGRF y ley de control B-dot para estabilizar las velocidades angulares del satélite tras la eyección.'
                : 'The simulation architecture developed for AzTechSat-1 coupled a J2 perturbation propagator, IGRF magnetic model, and B-dot control law to suppress angular tumble post-deployment.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Interactive Telemetry Readout */}
            <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800/90 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
                <span className="text-slate-400">SUBSYSTEM: ADCS (Attitude Det. & Control)</span>
                <span className={`px-2 py-0.5 rounded text-[11px] ${detumbled ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-amber-950 text-amber-400 border border-amber-800'}`}>
                  {detumbled ? (isEs ? '● ACTITUD ESTABILIZADA' : '● ATTITUDE STABILIZED') : (isEs ? '▲ AMORTIGUANDO TUMBLING' : '▲ DETUMBLING IN PROGRESS')}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{isEs ? 'Tasa Angular' : 'Angular Rate'}</div>
                  <div className="text-xl font-mono font-bold text-white tabular-nums mt-0.5">
                    {angularRate} <span className="text-xs text-slate-400 font-normal">°/s</span>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{isEs ? 'Inclinación Órbita' : 'Inclination'}</div>
                  <div className="text-xl font-mono font-bold text-sky-400 tabular-nums mt-0.5">
                    98.2°
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{isEs ? 'Altitud LEO' : 'Altitude'}</div>
                  <div className="text-xl font-mono font-bold text-white tabular-nums mt-0.5">
                    705 <span className="text-xs text-slate-400 font-normal">km</span>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{isEs ? 'Periodo Orbital' : 'Orbital Period'}</div>
                  <div className="text-xl font-mono font-bold text-white tabular-nums mt-0.5">
                    98.8 <span className="text-xs text-slate-400 font-normal">min</span>
                  </div>
                </div>
              </div>

              {/* Quaternion State */}
              <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-2">
                <span className="text-slate-400">{isEs ? 'Vector Cuaternión q(t):' : 'Quaternion Vector q(t):'}</span>
                <span className="text-sky-300">
                  q₀: {detumbled ? '0.9998' : '0.7071'} · q₁: {detumbled ? '0.0120' : '0.4210'} · q₂: {detumbled ? '0.0084' : '0.3812'} · q₃: {detumbled ? '0.0051' : '0.4180'}
                </span>
              </div>
            </div>

            {/* Interactive Control Trigger */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  <strong>{isEs ? 'Simulación en MATLAB:' : 'MATLAB Simulation:'}</strong>{' '}
                  {isEs 
                    ? '1,200 simulaciones montecarlo evaluando variaciones de densidad magnética dipolar, momentos de inercia y perturbaciones aerodinámicas y gravitacionales J2.'
                    : '1,200 Monte Carlo runs testing magnetic dipole variations, principal moments of inertia, and J2 gravitational perturbations.'}
                </p>
                <p className="text-slate-400">
                  {isEs 
                    ? 'Haz clic para ejecutar la simulación de detumbling y observar la reducción de la tasa angular hacia el estado nominal.'
                    : 'Click below to test the detumbling law and witness angular rate stabilization toward nominal nadir attitude.'}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleToggleSimulation}
                  disabled={bDotSimActive}
                  className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-60"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>
                    {bDotSimActive 
                      ? (isEs ? 'Simulando B-dot...' : 'Simulating B-dot...') 
                      : (isEs ? 'Ejecutar Simulación ADCS' : 'Run ADCS Simulation')}
                  </span>
                </button>

                <button
                  onClick={handleResetSimulation}
                  className="px-3.5 py-2.5 text-xs font-medium rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{isEs ? 'Reiniciar' : 'Reset'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
