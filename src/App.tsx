import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfileSummary } from './components/ProfileSummary';
import { Specializations } from './components/Specializations';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FieldGallery } from './components/FieldGallery';
import { AcademicFormation } from './components/AcademicFormation';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { EnergyCalculator } from './components/EnergyCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableCVModal } from './components/PrintableCVModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [customProfileImg, setCustomProfileImg] = useState<string | null>(() => {
    try {
      return localStorage.getItem('rg_profile_img_hero') || null;
    } catch {
      return null;
    }
  });
  const [customProf2Img, setCustomProf2Img] = useState<string | null>(() => {
    try {
      return localStorage.getItem('rg_profile_img_academic') || null;
    } catch {
      return null;
    }
  });

  const handleUpdateProfileImg = (img: string) => {
    setCustomProfileImg(img);
    try {
      localStorage.setItem('rg_profile_img_hero', img);
    } catch (e) {
      console.warn('LocalStorage limit reached', e);
    }
  };

  const handleUpdateProf2Img = (img: string) => {
    setCustomProf2Img(img);
    try {
      localStorage.setItem('rg_profile_img_academic', img);
    } catch (e) {
      console.warn('LocalStorage limit reached', e);
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Portada Principal */}
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenContact={handleOpenContact}
          customProfileImg={customProfileImg}
          onUpdateProfileImg={handleUpdateProfileImg}
        />

        {/* 2. Perfil Profesional & Resumen Ejecutivo */}
        <ProfileSummary />

        {/* 3. Áreas de Especialización */}
        <Specializations />

        {/* 4. Trayectoria & Línea de Tiempo */}
        <ExperienceTimeline />

        {/* 5. Portafolio de Experiencias de Campo (10 Actividades) */}
        <FieldGallery />

        {/* 6. Formación Académica & Certificaciones Oficiales */}
        <AcademicFormation 
          customProf2Img={customProf2Img}
          onUpdateProf2Img={handleUpdateProf2Img}
        />

        {/* 7. Matriz de Habilidades y Competencias */}
        <SkillsMatrix />

        {/* 8. Proyectos Destacados y Logros */}
        <ProjectsShowcase />

        {/* 9. Calculadora de Impacto & Eficiencia Energética */}
        <EnergyCalculator />

        {/* 10. Contacto Profesional & Requerimientos */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Downloadable CV Modal */}
      <PrintableCVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
