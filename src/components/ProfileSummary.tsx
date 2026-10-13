import React from 'react';
import { 
  Zap, 
  Mountain, 
  Factory, 
  Sun, 
  Cpu, 
  Leaf, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Activity, 
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';
import { ASSET_IMAGES } from '../assets/assetImages';

export const ProfileSummary: React.FC = () => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Mountain': return <Mountain className="w-5 h-5 text-emerald-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-cyan-400" />;
      case 'Sun': return <Sun className="w-5 h-5 text-yellow-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-teal-400" />;
      default: return <Activity className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="perfil" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      {/* Background Smart Building Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src={ASSET_IMAGES.smartBuilding}
          alt="Edificio inteligente sostenible con paneles solares"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 02 • PERFIL PROFESIONAL & EJECUTIVO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ingeniería Electromecánica, Sostenibilidad y Rigor en Gestión
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Una trayectoria forjada en terreno, salas de control y mesas de decisión estratégica, integrando altos estándares técnicos con responsabilidad ambiental.
          </p>
        </div>

        {/* Executive Summary Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Executive Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                    Resumen Ejecutivo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Visión Integral de Energía y Sostenibilidad
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-emerald-400" />
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {CV_DATA.profileSummary.executiveOverview}
              </p>

              {/* Core Strengths Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Principales Fortalezas Técnicas y Profesionales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CV_DATA.profileSummary.coreStrengths.map((strength, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300 hover:border-emerald-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Meta quote */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-emerald-400">Normas: ISO 50001 • ISO 14001 • ISO 45001 • CNE</span>
              <span className="text-emerald-300 font-semibold">Colegiado CIP N° 336005 • Habilitado</span>
            </div>
          </div>

          {/* Sectors and Strategic Focus (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Sectors Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">
                  Sectores de Actuación Comprobada
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Experiencia demostrada en entornos operacionales de alta exigencia, infraestructura crítica y requerimientos de estricta continuidad:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CV_DATA.profileSummary.sectors.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:bg-emerald-950/40 group-hover:border-emerald-500/30 transition-colors">
                      {getSectorIcon(sec.icon)}
                    </div>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {sec.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition Callout */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900/90 to-teal-950/30 border border-emerald-500/30 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-2">
                <FileCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Compromiso de Valor
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                Garantía Técnica, Eficiencia y Cero Contingencias
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Cada asesoría, auditoría o supervisión técnica es ejecutada bajo un marco metodológico reproducible, trazable y orientado a resultados tangibles de ahorro energético y prevención de riesgos laborales y ambientales.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
