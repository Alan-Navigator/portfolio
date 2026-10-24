import React, { useState } from 'react';
import { PORTFOLIO_DATA, GalleryItem } from '../data/portfolioData';
import { 
  Plane, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  FileCheck, 
  Activity, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface AviationSectionProps {
  lang: 'es' | 'en';
  onOpenImage: (item: GalleryItem) => void;
}

export const AviationSection: React.FC<AviationSectionProps> = ({ lang, onOpenImage }) => {
  const isEs = lang === 'es';
  const [activeTab, setActiveTab] = useState<'b777' | 'textron' | 'a321'>('b777');
  const aviationGallery = PORTFOLIO_DATA.galleries.aviation;

  return (
    <section id="estructuras" className="py-20 bg-[#060c18] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with unboxed metadata */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>{isEs ? '03. Aeronaves Comerciales & Ejecutivas' : '03. Commercial & Business Aircraft'}</span>
            <span aria-hidden="true">·</span>
            <span>Stress Liaison & MRB</span>
            <span aria-hidden="true">·</span>
            <span>FAA Compliance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {isEs ? 'Ingeniería Estructural & Certificación Aeronáutica' : 'Structural Engineering & Aircraft Certification'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {isEs 
              ? 'Substanciación de esfuerzos, análisis de cargas límite/últimas y resolución de no-conformidades críticas en programas de conversión de aviones comerciales y líneas de manufactura ejecutiva.'
              : 'Stress substantiation, ultimate/limit load analysis, and resolution of critical manufacturing non-conformances across major passenger-to-freighter aircraft and executive turboprops.'}
          </p>
        </div>

        {/* Section Photo Gallery (Grid of High-Fidelity Images with Zoom) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Plane className="w-3.5 h-3.5 text-sky-400" />
              <span>{isEs ? 'Galería Técnica: Estructuras & Conversión P2F' : 'Technical Gallery: Structures & P2F Conversion'}</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {aviationGallery.length} {isEs ? 'registros fotográficos' : 'photo records'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aviationGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenImage(item)}
                className="group relative rounded-xl overflow-hidden bg-[#0a1426] border border-slate-800 hover:border-sky-500/60 cursor-pointer transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={isEs ? item.title : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1426] via-transparent to-transparent opacity-80" />
                  
                  {/* Top tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-2 py-0.5 rounded text-[11px] font-mono text-sky-300">
                    {item.specs[0].value}
                  </div>

                  {/* Zoom badge */}
                  <div className="absolute top-3 right-3 p-1.5 rounded bg-slate-900/80 text-white group-hover:text-sky-400 group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-sky-400 block mb-1">
                      {isEs ? item.category : item.categoryEn}
                    </span>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                      {isEs ? item.title : item.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {isEs ? item.caption : item.captionEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{item.specs[1].label}: <strong className="text-sky-200">{item.specs[1].value}</strong></span>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                      {isEs ? 'Ampliar' : 'Inspect'} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Case Studies Tabs (Functional Segmented Control) */}
        <div className="bg-[#0b162a] border border-slate-800 rounded-2xl p-6 sm:p-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                {isEs ? 'Expedientes Técnicos de Certificación y Desviaciones' : 'Certification Dossiers & Structural Deviations'}
              </h3>
              <p className="text-xs text-slate-400">
                {isEs ? 'Selecciona un programa para examinar la substanciación y componentes analizados.' : 'Select a program to inspect stress methodology and audited structures.'}
              </p>
            </div>

            {/* Interactive Segmented Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-700/80 rounded-xl">
              <button
                onClick={() => setActiveTab('b777')}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'b777' 
                    ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Boeing 777 P2F
              </button>
              <button
                onClick={() => setActiveTab('textron')}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'textron' 
                    ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Textron MRB (Cessna)
              </button>
              <button
                onClick={() => setActiveTab('a321')}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'a321' 
                    ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Airbus A321 Tools
              </button>
            </div>
          </div>

          {/* Tab 1: Boeing 777 P2F */}
          {activeTab === 'b777' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <span>Altitude Aerospace USA</span>
                  <span aria-hidden="true">·</span>
                  <span>Stress Liaison Engineer (2023 - 2026)</span>
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  {isEs ? 'Primer Programa de Conversión Boeing 777 Passenger-to-Freighter' : 'First Boeing 777 Passenger-to-Freighter Conversion Program'}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isEs 
                    ? 'Provisión de soporte de esfuerzos a más de 300 desviaciones de producción durante el corte de fuselaje, inserción de marcos estructurales e instalación de la compuerta de carga principal (Main Cargo Door - MCD). Todos los reportes auditados y redactados obtuvieron aprobación formal de la FAA.'
                    : 'Provided stress support to over 300 aircraft manufacturing deviations during fuselage cutout, structural door surround framing, and main cargo door integration. Audited and authored engineering substantiation reports, all securing full FAA certification.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                    <span className="text-xs font-mono text-sky-400 block mb-1">{isEs ? 'Estructuras Primarias' : 'Primary Structures'}</span>
                    <span className="text-xs text-slate-300">
                      Main cargo door surround, pressure deck, floor grid & overwing box.
                    </span>
                  </div>
                  <div className="bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
                    <span className="text-xs font-mono text-sky-400 block mb-1">{isEs ? 'Cumplimiento FAA' : 'FAA Compliance'}</span>
                    <span className="text-xs text-slate-300">
                      14 CFR Part 25 structural airworthiness requirements substantiated.
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
                  <div>✓ {isEs ? 'Capacitó a 3 ingenieros junior en análisis de esfuerzos' : 'Mentored 3 junior engineers in structural fundamentals'}</div>
                  <div>✓ {isEs ? 'Cálculo de trayectorias de carga y redistribución de esfuerzos' : 'Load path analysis and stress redistribution calculation'}</div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {isEs ? 'Reportes de Certificación Aprobados' : 'Approved Certification Packages'}
                </span>
                
                {[
                  { name: isEs ? 'Compuerta de Carga Principal (MCD)' : 'Main Cargo Door (MCD) Assembly', status: 'FAA Approved', standard: 'FAR 25.783' },
                  { name: isEs ? 'Pressure Deck & Floor Assembly' : 'Pressure Deck & Floor Grid Structure', status: 'FAA Approved', standard: 'FAR 25.365' },
                  { name: isEs ? 'Cajón Sobreala (Overwing Box)' : 'Overwing Box Wing-to-Body Joints', status: 'FAA Approved', standard: 'FAR 25.305' },
                  { name: isEs ? 'Paneles de Corte y Refuerzos' : 'Fuselage Shear Panels & Framing', status: 'FAA Approved', standard: 'FAR 25.571' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 bg-slate-950/70 rounded-lg border border-slate-800/80 text-xs">
                    <div>
                      <div className="text-slate-200 font-medium">{item.name}</div>
                      <div className="text-[11px] font-mono text-slate-500">{item.standard}</div>
                    </div>
                    <span className="font-mono text-emerald-400 text-[11px] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Textron MRB */}
          {activeTab === 'textron' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <span>Textron Aviation Mexico (American Industries)</span>
                  <span aria-hidden="true">·</span>
                  <span>MRB Engineer (2022 - 2023)</span>
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  {isEs ? 'Análisis Estático MRB para Líneas Cessna SkyCourier, Longitude y XLS' : 'MRB Static Stress for Cessna SkyCourier, Longitude & XLS'}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isEs 
                    ? 'Evaluación analítica y determinación de disposiciones de ingeniería seguras (Repair Dispositions) para más de 800 componentes con no-conformidades dimensionales o de maquinado. Trabajo en estrecha sinergia con especialistas en fatiga y tolerancia al daño (F&DT) y materiales.'
                    : 'Conducted rigorous static stress analyses and authored engineering repair dispositions for 800+ non-conforming aircraft parts across Cessna commercial and business jets. Coordinated directly with fatigue and damage tolerance (F&DT) and materials engineering.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                    <span className="font-mono text-xl font-bold text-white block">+800</span>
                    <span className="text-[11px] text-slate-400">{isEs ? 'Piezas MRB evaluadas' : 'Parts dispositioned'}</span>
                  </div>
                  <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                    <span className="font-mono text-xl font-bold text-white block">3 Modelos</span>
                    <span className="text-[11px] text-slate-400">SkyCourier, Longitude, XLS</span>
                  </div>
                  <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                    <span className="font-mono text-xl font-bold text-white block">KPIs</span>
                    <span className="text-[11px] text-slate-400">{isEs ? 'Monitoreo semanal' : 'Weekly metrics'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {isEs ? 'Metodologías y Tipos de Falla Evaluados' : 'Evaluated Failure Modes & Methods'}
                </span>
                
                {[
                  { title: isEs ? 'Pandeo y Cargas de Corte' : 'Buckling & Shear Loads', desc: isEs ? 'Largueros y costillas de ala' : 'Wing spars and rib web analysis' },
                  { title: isEs ? 'Tolerancia al Daño (F&DT)' : 'Damage Tolerance & Fatigue', desc: isEs ? 'Propagación de grietas y vida residual' : 'Crack propagation & fatigue life' },
                  { title: isEs ? 'Sujetadores & Cojinetes' : 'Fastener Bearing & Tear-Out', desc: isEs ? 'Re-taladrado y uniones remachadas' : 'Oversize fasteners & margin of safety' },
                  { title: isEs ? 'Procesos Especiales y Shot Peening' : 'Material Processes & Surface Treatments', desc: isEs ? 'Tratamientos térmicos y anodizado' : 'Alodine, anodizing and hardness checks' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800/80 text-xs">
                    <div className="text-sky-300 font-semibold">{item.title}</div>
                    <div className="text-slate-400 text-[11px] mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Airbus A321 Tools */}
          {activeTab === 'a321' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <span>Airbus A321 Passenger-to-Freighter (P2F)</span>
                  <span aria-hidden="true">·</span>
                  <span>Automation & Tool Engineering</span>
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  {isEs ? 'Más de 20 Herramientas Analíticas para Evaluación Ágil' : 'Over 20 Analytical Tools for Rapid Deviation Assessment'}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {isEs 
                    ? 'Diseñó e implementó más de 20 herramientas de cálculo estructurado para agilizar la respuesta a desviaciones de manufactura y tolerancias mecánicas en la conversión del Airbus A321, reduciendo drásticamente los tiempos de evaluación de margen de seguridad (MS).'
                    : 'Architected and deployed over 20 standardized analytical calculation tools to streamline stress dispositioning and margin-of-safety (MS) calculations during Airbus A321 cargo conversions, cutting liaison turnaround times significantly.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                    <span className="text-xs font-mono text-sky-400 block mb-1">{isEs ? 'Margen de Seguridad (MS)' : 'Margin of Safety'}</span>
                    <span className="text-xs text-slate-300">
                      {isEs ? 'Automatización de fórmulas de esfuerzo permisible (Ftu, Fty, Fsu).' : 'Automated calculations for allowable stresses and joint margins.'}
                    </span>
                  </div>
                  <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                    <span className="text-xs font-mono text-sky-400 block mb-1">{isEs ? 'Estandarización' : 'Standardization'}</span>
                    <span className="text-xs text-slate-300">
                      {isEs ? 'Plantillas auditables para reportes técnicos de ingeniería.' : 'Auditable templates and worksheets for FAA compliance.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-5 rounded-xl space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {isEs ? 'Módulos de Cálculo Desarrollados' : 'Engineered Calculation Modules'}
                </span>
                
                {[
                  isEs ? 'Calculador de corte y flexión en cuadernas de fuselaje' : 'Fuselage frame bending and shear calculator',
                  isEs ? 'Matriz de espaciado y margen de borde en remaches (e/D)' : 'Fastener edge distance (e/D) & pitch check matrix',
                  isEs ? 'Verificación de pandeo plástico en paneles rigidizados' : 'Plastic buckling check for stiffened sheet panels',
                  isEs ? 'Modelador de cargas de despresurización súbita' : 'Rapid decompression load redistribution modeler'
                ].map((toolName, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-950/70 rounded-lg border border-slate-800/80 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{toolName}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
