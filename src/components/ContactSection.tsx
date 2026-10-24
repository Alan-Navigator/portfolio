import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  FileText, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';

interface ContactSectionProps {
  lang: 'es' | 'en';
  onOpenPdf: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenPdf }) => {
  const isEs = lang === 'es';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'stress',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const topics = [
    { id: 'stress', labelEs: 'Análisis de Esfuerzos (Stress Liaison)', labelEn: 'Stress Liaison Analysis' },
    { id: 'faa', labelEs: 'Certificación & Auditoría FAA (Part 25)', labelEn: 'FAA Certification & Auditing' },
    { id: 'mrb', labelEs: 'Evaluación MRB & Reparaciones', labelEn: 'MRB & Aircraft Repair Dispositions' },
    { id: 'space', labelEs: 'Dinámica Orbital & Misiones CubeSat', labelEn: 'Flight Dynamics & CubeSat Missions' },
    { id: 'consulting', labelEs: 'Consultoría Técnica / Asesoría', labelEn: 'Technical Advisory / Keynote' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const selectedTopicLabel = topics.find(t => t.id === formData.topic)?.[isEs ? 'labelEs' : 'labelEn'] || formData.topic;

  const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    `[Consulta Profesional] ${formData.name ? `${formData.name} - ` : ''}${selectedTopicLabel}`
  )}&body=${encodeURIComponent(
    `Nombre: ${formData.name}\nOrganización: ${formData.organization || 'N/A'}\nCorreo: ${formData.email}\nÁrea de Interés: ${selectedTopicLabel}\n\nRequerimiento:\n${formData.message}\n`
  )}`;

  return (
    <section id="contacto" className="py-20 bg-[#070e1c] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase mb-3">
            <span>{isEs ? '06. Contacto & Colaboración Profesional' : '06. Contact & Direct Collaboration'}</span>
            <span aria-hidden="true">·</span>
            <span>LinkedIn Direct</span>
            <span aria-hidden="true">·</span>
            <span>Inquiry Form</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {isEs ? 'Formulario de Consulta Directa & Contacto' : 'Direct Engineering Inquiry & Contact'}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {isEs 
              ? 'Disponible para consultoría técnica, soporte de esfuerzos en programas aeronáuticos, auditoría de reportes de certificación FAA y proyectos aeroespaciales.'
              : 'Available for technical consulting, stress liaison support on aerospace programs, FAA certification dossier auditing, and space mission engineering.'}
          </p>
        </div>

        {/* 2-Column Split: Contact Channels + Direct Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels and LinkedIn profile */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LinkedIn Showcase Card */}
            <div className="bg-[#0b162a] border border-slate-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-sky-400 uppercase">
                  {isEs ? 'Perfil Profesional Verificado' : 'Verified Professional Profile'}
                </span>
                <span className="p-2 rounded-lg bg-blue-950/80 text-sky-400 border border-blue-900">
                  <Linkedin className="w-5 h-5" />
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Mario Alan Soto Delgado
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {isEs 
                  ? 'Conecta directamente en LinkedIn para revisar recomendaciones, trayectoria completa en Altitude Aerospace y Textron Aviation, y publicaciones del sector aeroespacial.'
                  : 'Connect directly on LinkedIn to review verified endorsements, aerospace career trajectory at Altitude Aerospace and Textron Aviation, and industry publications.'}
              </p>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>{isEs ? 'Abrir Perfil Oficial en LinkedIn' : 'Open Official LinkedIn Profile'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Channels List */}
            <div className="bg-[#0b162a] border border-slate-800 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                {isEs ? 'Vías de Comunicación Inmediata' : 'Direct Channels'}
              </span>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block font-mono">Email</span>
                    <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-xs text-slate-200 hover:text-white font-mono">
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-xs text-slate-400 hover:text-white rounded bg-slate-900 border border-slate-800 transition-colors"
                  title={isEs ? 'Copiar correo' : 'Copy email'}
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-500 block font-mono">Teléfono / WhatsApp</span>
                    <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-xs text-slate-200 hover:text-white font-mono">
                      {PORTFOLIO_DATA.personal.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="px-2.5 py-1.5 text-xs text-sky-400 hover:text-white rounded bg-slate-900 border border-slate-800 transition-colors font-mono"
                >
                  {isEs ? 'Llamar' : 'Call'}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-500 block font-mono">{isEs ? 'Ubicación Base' : 'Location'}</span>
                  <span className="text-xs text-slate-200 font-mono">
                    {PORTFOLIO_DATA.personal.location}
                  </span>
                </div>
              </div>

              {/* PDF Resume */}
              <button
                onClick={onOpenPdf}
                className="w-full py-2.5 px-4 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>{isEs ? 'Descargar o Ver Curriculum Vitae (PDF)' : 'Download or View Resume (PDF)'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b162a] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {isEs ? 'Enviar Consulta Técnica Directa' : 'Submit Engineering Inquiry'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {isEs 
                  ? 'Completa el siguiente formulario para iniciar una conversación profesional. Recibirás respuesta técnica oportuna.' 
                  : 'Fill in the details below to initiate an engineering consultation. Prompt technical response guaranteed.'}
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-950/90 border border-emerald-800/80 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white">
                    {isEs ? '¡Consulta Preparada con Éxito!' : 'Inquiry Prepared Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    {isEs 
                      ? 'Puedes enviar los datos directamente a la bandeja de Mario Alan Soto con tu cliente de correo, o bien copiar el mensaje preparado.'
                      : 'You can launch your email client with the pre-filled technical inquiry, or copy the formatted text directly.'}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{isEs ? 'Abrir en Correo Electrónico' : 'Open in Email Client'}</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      {isEs ? 'Modificar datos' : 'Edit details'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {isEs ? 'Nombre Completo *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isEs ? 'Ej. Ing. Carlos Rodríguez' : 'e.g. Dr. John Doe'}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contacto@empresa.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {isEs ? 'Empresa u Organización' : 'Company / Organization'}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={isEs ? 'Ej. Aerospace Components LLC' : 'e.g. Aero Structures Inc.'}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    {/* Topic */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        {isEs ? 'Área de Interés *' : 'Engineering Area *'}
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-sky-500"
                      >
                        {topics.map((t) => (
                          <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                            {isEs ? t.labelEs : t.labelEn}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      {isEs ? 'Detalle de la Consulta / Requerimiento Técnico *' : 'Technical Inquiry Details *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isEs 
                        ? 'Describe brevemente el alcance del proyecto, modelo de aeronave o misión espacial...' 
                        : 'Please outline the scope of work, aircraft model, or space mission requirements...'}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                      <span>{isEs ? 'Datos tratados con estricta confidencialidad' : 'Handled with engineering confidentiality'}</span>
                    </span>

                    <button
                      type="submit"
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isEs ? 'Enviar Consulta' : 'Submit Inquiry'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
