import React, { useState, useMemo } from 'react';
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
  Zap,
  ArrowUpDown,
  Clock,
  Sparkles,
  Layers,
  GraduationCap,
  Wrench,
  Gauge
} from 'lucide-react';
import { CV_DATA, ExperienceItem } from '../data/cvData';

export const ExperienceTimeline: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('Todos');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc'); // 'desc' = 2026 -> 2002, 'asc' = 2002 -> 2026
  const [activeExpId, setActiveExpId] = useState<string>(CV_DATA.experiences[0].id);

  const sectors = ['Todos', 'Energía & Potencia', 'Mantenimiento Industrial', 'SSOMA & Minería', 'Consultoría & Eficiencia'];

  // Ordering experiences based on sortOrder
  const sortedExperiences = useMemo(() => {
    const list = [...CV_DATA.experiences];
    if (sortOrder === 'asc') {
      // 2002 -> 2026
      return list.reverse();
    }
    // 2026 -> 2002 (default)
    return list;
  }, [sortOrder]);

  const filteredExperiences = useMemo(() => {
    if (selectedSector === 'Todos') return sortedExperiences;
    return sortedExperiences.filter(exp => exp.sector === selectedSector);
  }, [selectedSector, sortedExperiences]);

  const scrollToCard = (id: string) => {
    setActiveExpId(id);
    const el = document.getElementById(`exp-card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getNodeBadge = (id: string, yearRange: string) => {
    if (id === 'exp-1') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.4)] animate-pulse">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          CARGO ACTUAL • AÑO 2026
        </span>
      );
    }
    if (id === 'exp-5') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-[0_0_8px_rgba(245,158,11,0.3)]">
          <Zap className="w-3 h-3 text-amber-400" />
          10 AÑOS EN ALTA TENSIÓN (EPA)
        </span>
      );
    }
    if (id === 'exp-6') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
          <GraduationCap className="w-3 h-3 text-cyan-400" />
          DOCENCIA PROFESIONAL
        </span>
      );
    }
    if (id === 'exp-7') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-400/40">
          <Wrench className="w-3 h-3 text-blue-400" />
          INICIO DE TRAYECTORIA (2002)
        </span>
      );
    }
    return null;
  };

  return (
    <section id="experiencia" className="py-24 relative bg-[#060b14] border-t border-slate-900 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 04 • TRAYECTORIA Y EXPERIENCIA PROFESIONAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Línea de Tiempo Profesional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">(2002 — 2026 • 24 Años)</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            <strong className="text-emerald-400 font-semibold">El año presente es 2026.</strong> Trayectoria continua e ininterrumpida de 24 años ordenada según línea de tiempo por años, desde la supervisión de taller y una década como Especialista EPA en alta tensión hasta la gerencia de proyectos y la Gerencia de Gestión de la Energía.
          </p>

          {/* Interactive Controls Bar: Sorting & Filter */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Sort Order Selector */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
              <span className="text-[11px] font-mono text-slate-400 px-2.5 flex items-center gap-1 font-semibold">
                <ArrowUpDown className="w-3 h-3 text-emerald-400" /> Orden:
              </span>
              <button
                onClick={() => setSortOrder('desc')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  sortOrder === 'desc'
                    ? 'bg-emerald-400 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2026 → 2002 (Más Reciente)
              </button>
              <button
                onClick={() => setSortOrder('asc')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  sortOrder === 'asc'
                    ? 'bg-emerald-400 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2002 → 2026 (Cronológico)
              </button>
            </div>

            {/* Sector Filters */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5" /> Sector:
              </span>
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                    selectedSector === sec
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>

          </div>

          {/* Quick Timeline Milestone Nav Ribbon */}
          <div className="pt-4 overflow-x-auto pb-2">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 min-w-max px-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mr-1">
                Hitos por Años:
              </span>
              {CV_DATA.experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => scrollToCard(exp.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${
                    activeExpId === exp.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.3)]'
                      : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                  }`}
                  title={`${exp.period}: ${exp.role}`}
                >
                  {exp.yearRange}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-5xl mx-auto pt-4">
          
          {/* Vertical central spine on large screens */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-slate-800 -translate-x-1/2 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>

          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeExpId === exp.id;
              const isCurrentRole = exp.id === 'exp-1';

              return (
                <div
                  id={`exp-card-${exp.id}`}
                  key={exp.id}
                  onMouseEnter={() => setActiveExpId(exp.id)}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon on center line */}
                  <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl items-center justify-center z-20 transition-all duration-300 ${
                    isActive || isCurrentRole
                      ? 'bg-slate-900 border-2 border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.6)] scale-110'
                      : 'bg-slate-950 border border-slate-700 shadow-md hover:border-emerald-400'
                  }`}>
                    {isCurrentRole ? (
                      <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                    ) : (
                      <Zap className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                    )}
                  </div>

                  {/* Content Card (Half width) */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 shadow-xl relative overflow-hidden ${
                        isCurrentRole
                          ? 'bg-[#0a1424] border-2 border-emerald-400/80 shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                          : isActive
                          ? 'bg-slate-900/95 border border-emerald-500/60 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(16,185,129,0.15)] -translate-y-1'
                          : 'bg-slate-900/80 border border-slate-800/90 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Highlight Badge if any */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                            {exp.period}
                          </span>
                          {getNodeBadge(exp.id, exp.yearRange)}
                        </div>

                        <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                          {exp.sector}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      {/* Responsibilities list */}
                      <div className="space-y-2 mb-5">
                        <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Layers className="w-3 h-3 text-cyan-400" />
                          <span>Responsabilidades Principales</span>
                        </h4>
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Key Projects */}
                      {exp.keyProjects && exp.keyProjects.length > 0 && (
                        <div className="space-y-1.5 mb-4 p-3 rounded-2xl bg-slate-950/50 border border-slate-800/80">
                          <h4 className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                            <Gauge className="w-3 h-3 text-cyan-400" />
                            <span>Proyectos e Hitos Relevantes</span>
                          </h4>
                          {exp.keyProjects.map((proj, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="text-cyan-400 font-bold shrink-0">▸</span>
                              <span>{proj}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Verifiable Achievements Box (Highlighted) */}
                      <div className="p-4 rounded-2xl bg-[#070e1b] border border-emerald-500/40 space-y-2 mb-4 shadow-inner">
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
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-800/80">
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
