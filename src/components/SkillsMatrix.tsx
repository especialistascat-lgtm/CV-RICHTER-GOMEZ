import React, { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Scale, 
  FileText, 
  FolderKanban, 
  Users, 
  Search, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Técnicas')) return <Cpu className="w-5 h-5 text-emerald-400" />;
    if (categoryName.includes('Software')) return <Terminal className="w-5 h-5 text-teal-400" />;
    if (categoryName.includes('Normativa')) return <Scale className="w-5 h-5 text-cyan-400" />;
    if (categoryName.includes('Documentos')) return <FileText className="w-5 h-5 text-blue-400" />;
    if (categoryName.includes('Proyectos')) return <FolderKanban className="w-5 h-5 text-amber-400" />;
    return <Users className="w-5 h-5 text-rose-400" />;
  };

  const filteredCategories = CV_DATA.skillsData.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => 
      s.toLowerCase().includes(searchTerm.toLowerCase()) || 
      cat.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.skills.length > 0);

  return (
    <section id="habilidades" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 07 • HABILIDADES Y COMPETENCIAS TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Matriz de Competencias Profesionales (6 Pilares)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Estructuradas rigurosamente según los estándares del sector eléctrico, consultoría ambiental y supervisión técnica en campo. Sin escalas arbitrarias ni porcentajes simulados.
          </p>

          {/* Interactive Search Bar */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar competencia (ej. Termografía, LOTO, ISO, AutoCAD)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors shadow-inner"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300 hover:border-emerald-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{cat.skills.length} competencias</span>
                <span className="text-emerald-400 font-sans">Aplicadas en campo</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
