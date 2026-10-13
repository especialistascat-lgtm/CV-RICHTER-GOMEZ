import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Tag, 
  Filter, 
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CV_DATA, ExperienceItem } from '../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('Todos');
  const [activeExpId, setActiveExpId] = useState<string>(CV_DATA.experiences[0].id);

  const sectors = ['Todos', 'Consultoría & Eficiencia', 'SSOMA & Minería', 'Energía & Potencia', 'Mantenimiento Industrial'];

  const filteredExperiences = selectedSector === 'Todos'
    ? CV_DATA.experiences
    : CV_DATA.experiences.filter(exp => exp.sector === selectedSector);

  return (
    <section id="experiencia" className="py-24 relative bg-slate-950 border-t border-slate-900">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 04 • TRAYECTORIA Y EXPERIENCIA PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Línea de Tiempo Interactiva (2008 — 2026 • 18 Años de Trayectoria)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            18 años de evolución profesional continua en mantenimiento en alta tensión (AT/MT), consultoría en energía y auditorías de eficiencia energética bajo normas internacionales.
          </p>

          {/* Sector Filters */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            {sectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedSector === sec
                    ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical central spine on large screens */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-800 -translate-x-1/2"></div>

          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeExpId === exp.id;

              return (
                <div
                  key={exp.id}
                  onMouseEnter={() => setActiveExpId(exp.id)}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon on center line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-900 border-2 border-emerald-400 items-center justify-center z-20 shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Content Card (Half width) */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl bg-slate-900/90 border transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'border-emerald-500/60 shadow-emerald-500/10 -translate-y-1 bg-slate-900'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {/* Period Badge & Sector */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                          {exp.sector}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-4">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2 mb-5">
                        <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                          Responsabilidades Principales
                        </h4>
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verifiable Achievements Box (Highlighted) */}
                      <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-2 mb-4">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                          <Award className="w-4 h-4 text-emerald-400" />
                          <span>LOGROS & RESULTADOS VERIFICABLES</span>
                        </div>
                        {exp.verifiableAchievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-200 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-700/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on large screens */}
                  <div className="hidden md:block w-1/2"></div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
