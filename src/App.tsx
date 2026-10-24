import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AviationSection } from './components/AviationSection';
import { SpaceSection } from './components/SpaceSection';
import { ExperienceSection } from './components/ExperienceSection';
import { LeadershipAwardsSection } from './components/LeadershipAwardsSection';
import { SkillsEducationSection } from './components/SkillsEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GalleryModal } from './components/GalleryModal';
import { ContactModal } from './components/ContactModal';
import { PdfViewerModal } from './components/PdfViewerModal';
import { PORTFOLIO_DATA, GalleryItem } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentGalleryList, setCurrentGalleryList] = useState<GalleryItem[]>([]);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  // Helper to open image lightbox with contextual gallery list
  const handleOpenImage = (item: GalleryItem, list?: GalleryItem[]) => {
    setSelectedImage(item);
    if (list && list.length > 0) {
      setCurrentGalleryList(list);
    } else {
      // Find which category it belongs to or fallback to all
      const allGalleries = [
        ...PORTFOLIO_DATA.galleries.aviation,
        ...PORTFOLIO_DATA.galleries.space,
        ...PORTFOLIO_DATA.galleries.leadership
      ];
      const categoryMatch = 
        PORTFOLIO_DATA.galleries.aviation.find((i) => i.id === item.id)
          ? PORTFOLIO_DATA.galleries.aviation
          : PORTFOLIO_DATA.galleries.space.find((i) => i.id === item.id)
          ? PORTFOLIO_DATA.galleries.space
          : PORTFOLIO_DATA.galleries.leadership.find((i) => i.id === item.id)
          ? PORTFOLIO_DATA.galleries.leadership
          : allGalleries;
      setCurrentGalleryList(categoryMatch);
    }
  };

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleOpenPdf = () => {
    setPdfModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070d19] text-slate-100 flex flex-col font-sans">
      {/* 3-Zone Sticky Top Navigation */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onOpenContact={handleOpenContact}
        onOpenPdf={handleOpenPdf}
      />

      <main className="flex-1">
        {/* Hero Section with Recruiter Briefing */}
        <Hero 
          lang={lang} 
          onOpenContact={handleOpenContact}
          onOpenPdf={handleOpenPdf}
          onOpenImage={(item) => handleOpenImage(item, PORTFOLIO_DATA.galleries.space)}
        />

        {/* Section 1: Space Missions & Orbital Dynamics (Featured Front & Center) */}
        <SpaceSection 
          lang={lang} 
          onOpenImage={(item) => handleOpenImage(item, PORTFOLIO_DATA.galleries.space)}
        />

        {/* Section 2: Space Initiatives, NASA Engagement & Hackathons */}
        <LeadershipAwardsSection 
          lang={lang} 
          onOpenImage={(item) => handleOpenImage(item, PORTFOLIO_DATA.galleries.leadership)}
        />

        {/* Section 3: Aviation Structural Engineering & MRB */}
        <AviationSection 
          lang={lang} 
          onOpenImage={(item) => handleOpenImage(item, PORTFOLIO_DATA.galleries.aviation)}
        />

        {/* Section 4: Professional Experience Timeline */}
        <ExperienceSection 
          lang={lang} 
        />

        {/* Section 5: Academic Foundation, Certifications & Toolset */}
        <SkillsEducationSection 
          lang={lang} 
        />

        {/* Section 6: Direct Inquiry Form & Contact Channels */}
        <ContactSection 
          lang={lang} 
          onOpenPdf={handleOpenPdf}
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        onOpenPdf={handleOpenPdf}
        onOpenContact={handleOpenContact}
      />

      {/* Interactive Lightbox Image Gallery Modal */}
      <GalleryModal
        item={selectedImage}
        itemsList={currentGalleryList}
        lang={lang}
        onClose={() => setSelectedImage(null)}
        onSelect={(item) => setSelectedImage(item)}
      />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        lang={lang}
        onClose={() => setContactModalOpen(false)}
        onOpenPdf={handleOpenPdf}
      />

      {/* Authentic Curriculum Vitae PDF Previewer */}
      <PdfViewerModal
        isOpen={pdfModalOpen}
        lang={lang}
        onClose={() => setPdfModalOpen(false)}
      />
    </div>
  );
}
