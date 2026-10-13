import React from 'react';
import { 
  ShieldCheck, 
  ArrowUp, 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative no-print text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900 items-start">
          
          {/* Identity & CIP */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-bold text-slate-950 font-mono">
                RG
              </div>
              <div>
                <span className="font-bold text-white text-base block">
                  {CV_DATA.personalInfo.fullName}
                </span>
                <span className="text-emerald-400 text-xs font-medium">
                  {CV_DATA.personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Más de 18 años de experiencia en mantenimiento en alta tensión (AT/MT), consultoría en energía, auditorías de eficiencia energética (ISO 50001) y supervisión integral SSOMA.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{CV_DATA.personalInfo.cip}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Navegación Rápida
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-emerald-400 transition-colors">Portada Principal</a>
              <a href="#perfil" className="hover:text-emerald-400 transition-colors">Perfil Ejecutivo</a>
              <a href="#especialidades" className="hover:text-emerald-400 transition-colors">Especializaciones</a>
              <a href="#experiencia" className="hover:text-emerald-400 transition-colors">Línea de Tiempo</a>
              <a href="#galeria-campo" className="hover:text-emerald-400 transition-colors">Fotos de Campo (10)</a>
              <a href="#formacion" className="hover:text-emerald-400 transition-colors">Certificados Oficiales</a>
              <a href="#habilidades" className="hover:text-emerald-400 transition-colors">Matriz de Habilidades</a>
              <a href="#calculadora" className="hover:text-emerald-400 transition-colors">Calculadora Energética</a>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              Contacto Directo
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{CV_DATA.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{CV_DATA.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Lima, Perú • Todo el país</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {CV_DATA.personalInfo.fullName}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Normativa: OSINERGMIN • OEFA • CNE • RESESATE</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
              title="Volver al inicio"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
