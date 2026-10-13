import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Calendar,
  Building2,
  Award
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface PrintableCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableCVModal: React.FC<PrintableCVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="no-print p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-bold text-white">
              Curriculum Vitae Ejecutivo — Formato Oficial para Descarga / Impresión PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar como PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Area */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-100 print:bg-white print:text-slate-900 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-emerald-500/60 pb-6 print:border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-950 tracking-tight">
                  {CV_DATA.personalInfo.fullName}
                </h1>
                <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700 mt-1">
                  {CV_DATA.personalInfo.title}
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600 mt-0.5">
                  {CV_DATA.personalInfo.cip}
                </p>
              </div>

              {/* Contact metadata */}
              <div className="text-xs text-slate-300 print:text-slate-700 space-y-1 sm:text-right shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-slate-700" />
                  <span>{CV_DATA.personalInfo.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-slate-700" />
                  <span>{CV_DATA.personalInfo.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-slate-700" />
                  <span>{CV_DATA.personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Value statement */}
            <div className="mt-4 p-3 rounded-xl bg-slate-950/60 print:bg-slate-100 border border-slate-800 print:border-slate-300 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <strong>Perfil Profesional: </strong> {CV_DATA.personalInfo.valueProposition}
            </div>
          </div>

          {/* Specializations & Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Áreas Principales de Especialización
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {CV_DATA.specializations.map((spec) => (
                <div key={spec.id} className="p-2 rounded-lg bg-slate-950/40 print:bg-slate-50 border border-slate-800 print:border-slate-200">
                  <span className="font-semibold text-slate-200 print:text-slate-900 block">{spec.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
              Experiencia Laboral Relevante
            </h2>

            <div className="space-y-4">
              {CV_DATA.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2 border-l-2 border-emerald-500/40 pl-4 py-1 print:border-slate-400">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-slate-900">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-emerald-400 print:text-slate-700 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 print:text-slate-600 font-medium">
                    {exp.company} • {exp.sector}
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                    {exp.summary}
                  </p>
                  <div className="space-y-1">
                    {exp.verifiableAchievements.map((ach, i) => (
                      <div key={i} className="text-xs text-slate-200 print:text-slate-800 flex items-start gap-1.5">
                        <span className="text-emerald-400 print:text-emerald-700 font-bold">•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
            
            {/* Academic Degrees */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
                Formación Académica
              </h2>
              {CV_DATA.academicFormation.map((item, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-white print:text-slate-900">{item.degree}</div>
                  <div className="text-slate-400 print:text-slate-600">{item.institution} ({item.period})</div>
                </div>
              ))}
            </div>

            {/* Official Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-slate-300 pb-1">
                Certificaciones Oficiales Verificadas
              </h2>
              <div className="space-y-1.5 text-xs">
                {CV_DATA.certifications.map((c) => (
                  <div key={c.id} className="flex items-start gap-1.5 text-slate-300 print:text-slate-800">
                    <span className="text-emerald-400 print:text-emerald-700">✓</span>
                    <span><strong>{c.title}</strong> — {c.issuer}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-slate-800 print:border-slate-300 text-center text-[10px] text-slate-500 print:text-slate-600">
            Documento emitido conforme a datos profesionales y respaldos técnicos acreditados • Ing. Richter Gomez Sierralta
          </div>

        </div>

      </div>
    </div>
  );
};
