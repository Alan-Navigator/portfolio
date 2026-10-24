import React, { useEffect } from 'react';
import { GalleryItem } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Maximize2, ShieldCheck, Wrench, Layers } from 'lucide-react';

interface GalleryModalProps {
  item: GalleryItem | null;
  itemsList: GalleryItem[];
  lang: 'es' | 'en';
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  itemsList,
  lang,
  onClose,
  onSelect
}) => {
  const isEs = lang === 'es';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (item && itemsList.length > 1) {
        const currentIndex = itemsList.findIndex((i) => i.id === item.id);
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
          onSelect(itemsList[currentIndex - 1]);
        } else if (e.key === 'ArrowRight' && currentIndex < itemsList.length - 1) {
          onSelect(itemsList[currentIndex + 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, itemsList, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = itemsList.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < itemsList.length - 1;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col lg:flex-row bg-[#0b1424] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700/80 transition-colors focus:outline-none"
          title={isEs ? 'Cerrar' : 'Close'}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Preview Column */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px] overflow-hidden group">
          <img
            src={item.image}
            alt={isEs ? item.title : item.titleEn}
            className="w-full h-full object-contain max-h-[70vh]"
            referrerPolicy="no-referrer"
          />

          {/* Navigation Controls */}
          {hasPrev && (
            <button
              onClick={() => onSelect(itemsList[currentIndex - 1])}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-slate-700 transition-all focus:outline-none"
              title={isEs ? 'Anterior' : 'Previous'}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={() => onSelect(itemsList[currentIndex + 1])}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-slate-700 transition-all focus:outline-none"
              title={isEs ? 'Siguiente' : 'Next'}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Bottom indicator */}
          <div className="absolute bottom-3 left-4 text-xs font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">
            {currentIndex + 1} / {itemsList.length}
          </div>
        </div>

        {/* Technical Specs & Engineering Context Panel */}
        <div className="w-full lg:w-96 p-6 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[85vh] bg-[#0c1628] border-t lg:border-t-0 lg:border-l border-slate-800">
          <div>
            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
              <span>{isEs ? item.category : item.categoryEn}</span>
              <span aria-hidden="true">·</span>
              <span>{isEs ? 'Expediente Técnico' : 'Technical File'}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
              {isEs ? item.title : item.titleEn}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {isEs ? item.description : item.descriptionEn}
            </p>

            {/* Specifications Matrix */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>{isEs ? 'Parámetros de Ingeniería' : 'Engineering Parameters'}</span>
              </h4>

              <div className="grid grid-cols-1 gap-2 mt-2">
                {item.specs.map((spec, idx) => (
                  <div key={idx} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="block text-xs text-slate-400">{spec.label}</span>
                    <span className="text-xs font-semibold text-sky-200 font-mono mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-6 mt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isEs ? 'Verificación Técnica Documentada' : 'Documented Engineering Record'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
