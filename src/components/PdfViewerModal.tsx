import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  lang: 'es' | 'en';
  onClose: () => void;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  lang,
  onClose
}) => {
  const isEs = lang === 'es';
  if (!isOpen) return null;

  const pdfUrl = PORTFOLIO_DATA.personal.cvPdfPath;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[90vh] flex flex-col bg-[#0b162a] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">
                Curriculum Vitae — {PORTFOLIO_DATA.personal.name}
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                {isEs ? 'Expediente Oficial en Formato PDF' : 'Official Resume Document (PDF)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="CV_Mario_Alan_Soto_Delgado_Aerospace_Engineer.pdf"
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isEs ? 'Descargar PDF' : 'Download PDF'}</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
              title={isEs ? 'Abrir en pestaña nueva' : 'Open in new tab'}
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-2"
              title={isEs ? 'Cerrar' : 'Close'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="flex-1 w-full bg-slate-950 relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&view=FitH`}
            title="Curriculum Vitae Mario Alan Soto Delgado"
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer info strip */}
        <div className="px-6 py-3 bg-[#081223] border-t border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isEs ? 'Documento original verificado' : 'Verified original document'}</span>
          </span>
          <span>{PORTFOLIO_DATA.personal.email} · {PORTFOLIO_DATA.personal.phoneDisplay}</span>
        </div>
      </div>
    </div>
  );
};
