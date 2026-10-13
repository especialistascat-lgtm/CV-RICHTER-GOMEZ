import React, { useState } from 'react';
import { 
  Camera, 
  ZoomIn, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Wrench, 
  Upload, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Sparkles
} from 'lucide-react';
import { CV_DATA, FieldExperience } from '../data/cvData';
import { ASSET_IMAGES } from '../assets/assetImages';

export const FieldGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeModalExp, setActiveModalExp] = useState<FieldExperience | null>(null);
  
  // State for user custom uploaded images for any field experience slot
  const [customFieldImages, setCustomFieldImages] = useState<Record<string, string>>({});

  const categories = ['Todas', 'Energía y AT', 'SSOMA y Seguridad', 'Sostenibilidad Ambiental', 'Eficiencia y Pruebas'];

  const filteredExperiences = selectedCategory === 'Todas'
    ? CV_DATA.fieldExperiences
    : CV_DATA.fieldExperiences.filter(item => item.category === selectedCategory);

  const handleCustomImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomFieldImages(prev => ({
            ...prev,
            [id]: event.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const openLightboxByIndex = (index: number) => {
    if (index >= 0 && index < filteredExperiences.length) {
      setActiveModalExp(filteredExperiences[index]);
    }
  };

  const currentModalIndex = activeModalExp
    ? filteredExperiences.findIndex(e => e.id === activeModalExp.id)
    : -1;

  return (
    <section id="galeria-campo" className="py-24 relative bg-slate-950 overflow-hidden border-t border-slate-900">
      
      {/* Background Substation & Engineering Landscape Fusion */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src={ASSET_IMAGES.substation}
          alt="Subestación eléctrica y transformadores de alta tensión"
          className="w-full h-full object-cover object-center filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
            <Camera className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 05 • PORTAFOLIO DE EXPERIENCIAS DE CAMPO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Intervenciones Técnicas en Terreno (10 Servicios de Campo)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Registro visual y técnico de actividades operativas en subestaciones eléctricas, auditorías SSOMA, pruebas dieléctricas y supervisión ambiental.
          </p>

          {/* Category Tabs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid (10 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((exp, idx) => {
            const hasCustomImg = !!customFieldImages[exp.id];

            return (
              <div
                key={exp.id}
                className="group relative rounded-3xl bg-slate-900/85 border border-slate-800/90 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Area with Tech Overlay & Glow */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveModalExp(exp)}
                >
                  {hasCustomImg ? (
                    <img
                      src={customFieldImages[exp.id]}
                      alt={exp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/30 relative">
                      {/* Technical Blueprint Grid */}
                      <div 
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(circle at 50% 50%, #10b981 1px, transparent 1px)`,
                          backgroundSize: '20px 20px'
                        }}
                      ></div>
                      
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                        <HardHat className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white tracking-wider">
                        {exp.code}
                      </span>
                      <span className="text-[11px] text-emerald-400/80 font-medium text-center mt-1 px-4 line-clamp-1">
                        {exp.locationContext}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-emerald-400" /> Clic para ampliar ficha técnica
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {exp.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {exp.category}
                    </span>
                  </div>

                  {/* Quick Zoom Pill */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/80 text-white p-2 rounded-xl backdrop-blur-md border border-slate-700">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 
                      onClick={() => setActiveModalExp(exp)}
                      className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 cursor-pointer mb-2"
                    >
                      {exp.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>

                  {/* Equipment & Norms Pills */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Wrench className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate text-slate-300 font-mono">
                        {exp.equipmentUsed[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate text-slate-400">
                        {exp.normativeStandards[0]}
                      </span>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalExp(exp)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      <span>Ver Ficha Técnica</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {/* Image custom upload helper */}
                    <label 
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white cursor-pointer border border-slate-700 transition-colors"
                      title={`Reemplazar con archivo local ${exp.code}.JPG`}
                    >
                      <Upload className="w-3.5 h-3.5 text-emerald-400" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleCustomImageUpload(exp.id, e)}
                      />
                    </label>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Modal with complete technical logbook */}
      {activeModalExp && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in"
          onClick={() => setActiveModalExp(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {activeModalExp.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {activeModalExp.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeModalExp.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalExp(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Image or Visual presentation */}
              <div className="space-y-3">
                <div className="aspect-[4/3] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden relative flex items-center justify-center">
                  {customFieldImages[activeModalExp.id] ? (
                    <img
                      src={customFieldImages[activeModalExp.id]}
                      alt={activeModalExp.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-6 space-y-3">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400">
                        <HardHat className="w-8 h-8" />
                      </div>
                      <p className="font-mono text-sm text-white font-bold">
                        {activeModalExp.code}.JPG
                      </p>
                      <p className="text-xs text-slate-400 max-w-xs">
                        {activeModalExp.imageAlt}
                      </p>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
                    <span className="text-emerald-400 font-mono">Registro en Terreno</span>
                    <label className="text-xs text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer">
                      <Upload className="w-3 h-3 text-emerald-400" />
                      <span>Cargar foto local</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleCustomImageUpload(activeModalExp.id, e)}
                      />
                    </label>
                  </div>
                </div>

                {/* Location context */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                  <span className="font-bold text-slate-400 font-mono block mb-0.5">Ubicación / Entorno:</span>
                  <span>{activeModalExp.locationContext}</span>
                </div>
              </div>

              {/* Right Column: Detailed Field Information */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                
                <div>
                  <h4 className="font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1 text-xs">
                    ¿Qué se está haciendo en la fotografía?
                  </h4>
                  <p className="text-slate-200 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                    {activeModalExp.fieldWorkDetails}
                  </p>
                </div>

                {/* Equipment */}
                <div>
                  <h4 className="font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5 text-xs">
                    Equipamiento e Instrumentación Utilizada
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalExp.equipmentUsed.map((eq, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs border border-slate-700 font-mono">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Standards */}
                <div>
                  <h4 className="font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5 text-xs">
                    Normativa y Estándares Aplicados
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalExp.normativeStandards.map((std, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 text-xs border border-emerald-500/30">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Safety Protocol */}
                <div>
                  <h4 className="font-mono font-bold text-rose-400 uppercase tracking-wider mb-1 text-xs">
                    Protocolo de Seguridad / Control SSOMA
                  </h4>
                  <p className="text-slate-300 bg-rose-950/20 border border-rose-900/30 p-2.5 rounded-xl text-xs">
                    {activeModalExp.safetyProtocol}
                  </p>
                </div>

                {/* Deliverable */}
                <div>
                  <h4 className="font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1 text-xs">
                    Entregable / Resultado Técnico
                  </h4>
                  <p className="text-slate-300 bg-cyan-950/20 border border-cyan-900/30 p-2.5 rounded-xl text-xs">
                    {activeModalExp.deliverable}
                  </p>
                </div>

              </div>

            </div>

            {/* Modal Navigation Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  disabled={currentModalIndex <= 0}
                  onClick={() => openLightboxByIndex(currentModalIndex - 1)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:pointer-events-none text-xs flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>
                <button
                  disabled={currentModalIndex >= filteredExperiences.length - 1}
                  onClick={() => openLightboxByIndex(currentModalIndex + 1)}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:pointer-events-none text-xs flex items-center gap-1"
                >
                  Siguiente <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <span className="text-xs text-slate-500 font-mono">
                {currentModalIndex + 1} de {filteredExperiences.length}
              </span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
