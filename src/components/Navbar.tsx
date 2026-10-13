import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Menu, 
  X, 
  Download, 
  Mail, 
  Phone, 
  ShieldCheck, 
  FileText,
  Printer
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface NavbarProps {
  onOpenCvModal: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Perfil', href: '#perfil' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Fotos de Campo', href: '#galeria-campo' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Calculadora', href: '#calculadora' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/40 py-3'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 border border-emerald-400/30 group-hover:scale-105 transition-transform">
              <span className="font-bold text-slate-950 text-base tracking-wider font-mono">RG</span>
            </div>
            <div>
              <div className="font-bold text-white text-base tracking-tight leading-none group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                <span>{CV_DATA.personalInfo.shortName}</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-[11px] text-emerald-400/90 font-medium tracking-wide flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
                <span>Ing. Mecánico Electricista • CIP 336005</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs xl:text-sm font-medium text-slate-300 hover:text-emerald-400 px-2.5 py-1.5 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/50 rounded-lg transition-all shadow-sm group"
              title="Descargar o imprimir CV oficial"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Ver CV PDF</span>
            </button>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contacto');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all transform active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contactarme</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="p-1.5 text-slate-300 bg-slate-800 rounded-lg border border-slate-700"
              aria-label="Descargar CV"
            >
              <Download className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-slate-300 hover:text-emerald-400 px-3 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-slate-200 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Descargar / Imprimir CV en PDF</span>
            </button>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contacto');
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Contactar al Ing. Richter</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
