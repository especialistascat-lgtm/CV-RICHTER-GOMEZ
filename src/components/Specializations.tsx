import React, { useState } from 'react';
import { 
  Zap, 
  Gauge, 
  Leaf, 
  Sun, 
  Activity, 
  FileText, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  X,
  Sparkles
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const Specializations: React.FC = () => {
  const [selectedSpec, setSelectedSpec] = useState<typeof CV_DATA.specializations[0] | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-400" />;
      case 'Gauge': return <Gauge className="w-6 h-6 text-teal-400" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-green-400" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-blue-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-rose-400" />;
      default: return <Zap className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="especialidades" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 03 • ÁREAS DE ESPECIALIZACIÓN TÉCNICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competencias de Ingeniería y Soluciones Integrales
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Servicios estructurados sobre estándares internacionales (ISO, IEEE, IEC) y marco regulatorio peruano (OSINERGMIN, OEFA, CNE, Ley 29783).
          </p>
        </div>

        {/* Specialization Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CV_DATA.specializations.map((spec) => (
            <div
              key={spec.id}
              onClick={() => setSelectedSpec(spec)}
              className="group relative p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between shadow-xl shadow-black/20 overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all duration-500 pointer-events-none"></div>

              <div>
                {/* Icon & Action Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-950/30 transition-colors">
                    {getIcon(spec.icon)}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/40 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                  {spec.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {spec.description}
                </p>

                {/* Bullets Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {spec.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom pill */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 font-mono">Ver alcance técnico</span>
                <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform font-medium">Detalles →</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Specialization Detail Modal */}
      {selectedSpec && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedSpec(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center">
                  {getIcon(selectedSpec.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Área Especializada
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedSpec.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedSpec(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 text-sm text-slate-300">
              <p className="leading-relaxed">
                {selectedSpec.description}
              </p>

              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  Entregables y Metodologías Clave
                </h4>
                <div className="space-y-2">
                  {selectedSpec.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                ¿Requiere este servicio en su organización?
              </span>
              <a
                href="#contacto"
                onClick={() => setSelectedSpec(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Solicitar Propuesta
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
