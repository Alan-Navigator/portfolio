import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  Mail, 
  Linkedin, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText 
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  lang: 'es' | 'en';
  onClose: () => void;
  onOpenPdf: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  lang,
  onClose,
  onOpenPdf
}) => {
  const isEs = lang === 'es';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'stress',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

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

  const selectedTopicLabel = topics.find(t => t.id === formData.topic)?.[isEs ? 'labelEs' : 'labelEn'] || formData.topic;

  const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    `[Consulta Profesional] ${formData.name ? `${formData.name} - ` : ''}${selectedTopicLabel}`
  )}&body=${encodeURIComponent(
    `Nombre: ${formData.name}\nOrganización: ${formData.organization || 'N/A'}\nCorreo: ${formData.email}\nÁrea: ${selectedTopicLabel}\n\nRequerimiento:\n${formData.message}\n`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0b162a] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors"
          title={isEs ? 'Cerrar' : 'Close'}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase mb-2">
          <Mail className="w-4 h-4" />
          <span>{isEs ? 'Consulta Directa de Ingeniería' : 'Direct Engineering Inquiry'}</span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white mb-2">
          {isEs ? 'Contactar a Mario Alan Soto Delgado' : 'Contact Mario Alan Soto Delgado'}
        </h3>
        
        <p className="text-xs text-slate-300 leading-relaxed mb-6">
          {isEs 
            ? 'Ingresa tu consulta para soporte técnico en certificación aeronáutica, análisis de esfuerzos o misiones espaciales.'
            : 'Submit your requirements for stress liaison engineering, FAA certification dossier reviews, or orbital dynamics.'}
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-600 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-white">
              {isEs ? '¡Mensaje Preparado!' : 'Inquiry Ready!'}
            </h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              {isEs 
                ? 'Haz clic abajo para transferir la consulta a tu aplicación de correo predeterminada.'
                : 'Click below to launch your default mail client with the formatted message.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={mailtoUrl}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{isEs ? 'Abrir Cliente de Correo' : 'Open Email Client'}</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg"
              >
                {isEs ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {isEs ? 'Nombre Completo *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={isEs ? 'Tu nombre' : 'Your name'}
                  className="w-full px-3 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {isEs ? 'Correo Electrónico *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@empresa.com"
                  className="w-full px-3 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {isEs ? 'Organización / Empresa' : 'Company / Organization'}
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder={isEs ? 'Ej. Aero Tech' : 'e.g. Aero Tech'}
                  className="w-full px-3 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  {isEs ? 'Área de Interés' : 'Discipline'}
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-sky-500"
                >
                  {topics.map((t) => (
                    <option key={t.id} value={t.id} className="bg-slate-900 text-white">
                      {isEs ? t.labelEs : t.labelEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                {isEs ? 'Mensaje o Requerimiento Técnico *' : 'Technical Inquiry *'}
              </label>
              <textarea
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={isEs ? 'Describe tu requerimiento técnico...' : 'Describe your engineering requirement...'}
                className="w-full px-3 py-2 text-xs bg-slate-950/80 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>

            {/* Quick action bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:text-white"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPdf();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-700 rounded-lg hover:text-white"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>CV</span>
                </button>
              </div>

              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isEs ? 'Enviar Consulta' : 'Submit'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
