import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  ShieldCheck, 
  FileCheck2, 
  ExternalLink,
  Upload,
  UserCheck
} from 'lucide-react';
import { CV_DATA, CertificationItem } from '../data/cvData';

interface AcademicFormationProps {
  customProf2Img?: string | null;
  onUpdateProf2Img?: (imgUrl: string) => void;
}

export const AcademicFormation: React.FC<AcademicFormationProps> = ({
  customProf2Img,
  onUpdateProf2Img,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', 'Sistemas de Gestión', 'Energía', 'Medio Ambiente', 'Seguridad Industrial'];

  const filteredCerts = selectedCategory === 'Todas'
    ? CV_DATA.certifications
    : CV_DATA.certifications.filter(c => c.category === selectedCategory);

  const handleProf2Upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateProf2Img) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateProf2Img(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="formacion" className="py-24 relative bg-slate-950 border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>SECCIÓN 06 • FORMACIÓN ACADÉMICA Y CERTIFICACIONES OFICIALES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Títulos Profesionales, Posgrado y Especializaciones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formación universitaria rigurosa, colegiatura habilitada y certificaciones técnicas auditadas según la documentación oficial adjunta.
          </p>
        </div>

        {/* Top Split: Degrees & Profile Image 2 card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Academic Degrees (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">
                Grados Académicos y Títulos
              </h3>
            </div>

            <div className="space-y-4">
              {CV_DATA.academicFormation.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.degree}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-1 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sutil Fusion: Imagen-profesional-2 Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>Perfil Profesional II</span>
                  </span>
                  <span className="text-[10px] font-mono text-amber-300 font-bold">Reg. CIP N° 336005</span>
                </div>

                {/* Portrait Container */}
                <div className="aspect-[4/3] rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden relative group mb-4 flex items-center justify-center">
                  {customProf2Img ? (
                    <img
                      src={customProf2Img}
                      alt="Ing. Richter Gomez Sierralta en entorno técnico"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4 space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mx-auto flex items-center justify-center text-emerald-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-bold text-white font-mono">
                        Imagen-profesional-2.jpg
                      </p>
                      <p className="text-[11px] text-slate-400 leading-relaxed max-w-[200px]">
                        Fotografía sutil de acreditación académica y profesional.
                      </p>
                    </div>
                  )}

                  <label className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white cursor-pointer border border-slate-700 backdrop-blur-md transition-colors">
                    <Upload className="w-3.5 h-3.5 text-emerald-400" />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleProf2Upload}
                    />
                  </label>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Colegio Profesional:</span>
                    <span className="font-semibold text-emerald-300">CIP N° 336005 (Perú)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Especialidad:</span>
                    <span className="font-semibold text-white">Mecánico Electricista</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Grado Superior:</span>
                    <span className="font-semibold text-teal-300">Magíster en Gestión</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 mt-4 text-[11px] text-slate-400 italic">
                «Acreditación y rigor metodológico para garantizar la máxima seguridad en sistemas de alta exigencia.»
              </div>

            </div>
          </div>

        </div>

        {/* Certifications & Diplomas Grid (Extracted from user's attached certificates) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">
                  Certificaciones Oficiales y Acreditaciones (PDFs Verificados)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Respaldadas por diplomas oficiales de capacitación y auditoría técnica:
              </p>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-400 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {cert.credentialType}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      Verificado
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" /> {cert.date}
                  </span>
                  <span className="text-emerald-400/90 font-medium">
                    Acreditado ✓
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
