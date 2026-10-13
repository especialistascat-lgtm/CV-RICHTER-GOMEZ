import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Auditoría de Eficiencia Energética (ISO 50001)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Ing. Richter Gomez, le contacto desde su CV Web.\n\nNombre: ${formData.name || 'Cliente interesado'}\nEmpresa: ${formData.company || 'Particular'}\nServicio de Interés: ${formData.service}\nConsulta: ${formData.message || 'Deseo solicitar información técnica y cotización.'}`
    );
    return `https://wa.me/${CV_DATA.personalInfo.whatsapp}?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 relative bg-slate-950 border-t border-slate-900">
      
      {/* Background illumination */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>CONTACTO PROFESIONAL & PROPUESTAS TÉCNICAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Iniciemos una Conversación Estratégica
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Disponible para auditorías de eficiencia energética, supervisión de subestaciones, fiscalizaciones ambientales y consultoría especializada a nivel nacional.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Contact Cards Left (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Canales Directos
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Atención Inmediata
                </h3>
              </div>

              {/* Email */}
              <a
                href={`mailto:${CV_DATA.personalInfo.email}?subject=Contacto%20Profesional%20-%20Ing.%20Richter%20Gomez`}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">Correo Electrónico</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {CV_DATA.personalInfo.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-center gap-3.5 group shadow-lg shadow-emerald-500/10"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-emerald-300 block font-mono">WhatsApp Técnico Directo</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +51 (Perú) — Chatear ahora
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">Ubicación y Cobertura</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {CV_DATA.personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tiempo de respuesta habitual: Menos de 24 horas hábiles.</span>
              </div>
            </div>

            {/* CIP Security badge */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Ingeniero Colegiado y Habilitado (CIP N° 336005) facultado para emitir y firmar expedientes técnicos oficiales.</span>
            </div>

          </div>

          {/* Interactive Inquiry Form Right (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Formulario de Requerimiento
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Solicitar Propuesta o Diagnóstico
                  </h3>
                </div>
                <FileText className="w-5 h-5 text-emerald-400" />
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    ¡Solicitud Preparada con Éxito!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Puede enviar su requerimiento directamente a través de WhatsApp o por correo electrónico haciendo clic en el siguiente botón:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Abrir en WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                    >
                      Modificar datos
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Ing. Carlos Mendoza"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Empresa u Organización
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Minera / Corporación S.A."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contacto@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Teléfono / Celular
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+51 987 000 000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Servicio Técnico Requerido
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                    >
                      <option value="Auditoría de Eficiencia Energética (ISO 50001)">Auditoría de Eficiencia Energética (ISO 50001)</option>
                      <option value="Mantenimiento y Pruebas en Subestaciones AT/MT">Mantenimiento y Pruebas en Subestaciones AT/MT</option>
                      <option value="Supervisión SSOMA y Fiscalización Ambiental OEFA">Supervisión SSOMA y Fiscalización Ambiental OEFA</option>
                      <option value="Supervisión de Proyectos Renovables / Fotovoltaicos">Supervisión de Proyectos Renovables / Fotovoltaicos</option>
                      <option value="Corrección de Factor de Potencia y Armónicos">Corrección de Factor de Potencia y Armónicos</option>
                      <option value="Consultoría Integral y Dictamen Pericial">Consultoría Integral y Dictamen Pericial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Descripción del Requerimiento o Alcance
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describa brevemente la infraestructura, tensión, problemática o fecha tentativa de intervención..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500/50 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Generar Requerimiento</span>
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Rápido</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800/80 mt-4 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Tratamiento confidencial de datos</span>
              <span className="text-emerald-400 font-mono">Ing. Richter Gomez</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
