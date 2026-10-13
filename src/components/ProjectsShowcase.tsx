import React, { useState } from 'react';
import { 
  FolderGit2, 
  TrendingUp, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { CV_DATA, ProjectShowcase } from '../data/cvData';
import { ASSET_IMAGES } from '../assets/assetImages';

export const ProjectsShowcase: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>(CV_DATA.featuredProjects[0].id);

  const activeProject = CV_DATA.featuredProjects.find(p => p.id === activeProjectId) || CV_DATA.featuredProjects[0];

  const getProjectImage = (index: number) => {
    switch (index) {
      case 0: return ASSET_IMAGES.smartBuilding;
      case 1: return ASSET_IMAGES.substation;
      case 2: return ASSET_IMAGES.heroSunrise;
      default: return ASSET_IMAGES.substation;
    }
  };

  return (
    <section id="proyectos" className="py-24 relative bg-slate-950 border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 08 • PROYECTOS DESTACADOS Y CASOS DE ÉXITO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Casos de Estudio con Retorno y Seguridad Verificables
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Metodología de ingeniería aplicada para resolver contingencias complejas en factor de potencia, comisionamiento en altura y fiscalizaciones ambientales.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CV_DATA.featuredProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveProjectId(p.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeProjectId === p.id
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Caso #{idx + 1}: {p.sector.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Project Full Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Left Banner (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-950">
              <img
                src={getProjectImage(CV_DATA.featuredProjects.findIndex(p => p.id === activeProject.id))}
                alt={activeProject.title}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                  {activeProject.sector}
                </span>
              </div>

              {/* Metrics overlay at bottom */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                {activeProject.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800/80 backdrop-blur-md text-center">
                    <div className="text-base font-extrabold text-emerald-400 font-mono">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Details Right (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider mb-1">
                  <span>{activeProject.clientType}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {activeProject.title}
                </h3>
              </div>

              {/* Challenge vs Solution */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono mb-1">
                    <Target className="w-4 h-4 text-amber-400" />
                    <span>EL DESAFÍO ABORDADO:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-400 font-mono mb-1">
                    <Lightbulb className="w-4 h-4 text-teal-400" />
                    <span>SOLUCIÓN TÉCNICA E INGENIERÍA APLICADA:</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>Resultados Obtenidos y Verificados</span>
                </h4>
                <div className="space-y-2">
                  {activeProject.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* All 4 Metrics pill row */}
              <div className="pt-2 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-sm font-bold text-white font-mono">{m.value}</div>
                    <div className="text-[10px] text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
