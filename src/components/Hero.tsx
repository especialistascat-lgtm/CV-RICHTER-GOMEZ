import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Download, 
  ArrowRight, 
  Briefcase, 
  Phone, 
  Mail,
  MapPin,
  Award, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Gauge, 
  Leaf, 
  Layers, 
  Linkedin, 
  ExternalLink,
  MessageCircle, 
  Clock, 
  TrendingDown, 
  Building2, 
  Factory, 
  Activity, 
  Terminal, 
  Cpu, 
  Sliders, 
  Check, 
  Sun,
  Radio,
  Flame,
  Waves
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';
import { ASSET_IMAGES } from '../assets/assetImages';

interface HeroProps {
  onOpenCvModal: () => void;
  onOpenContact: () => void;
  customProfileImg?: string | null;
  onUpdateProfileImg?: (imgUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenCvModal, 
  onOpenContact,
  customProfileImg,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activePartnerTooltip, setActivePartnerTooltip] = useState<string | null>(null);

  // Transparent cutout portrait of Ing. Richter Gomez
  const activePortraitImg = customProfileImg || ASSET_IMAGES.portraitCutout;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMousePos({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Career milestones for the timeline window (in pure Spanish)
  const careerMilestones = [
    { period: '2025 — 2026', role: 'Gerente de Gestión de la Energía', entity: 'Departamento de Gestión Energética (Año Presente 2026)' },
    { period: '2022 — 2025', role: 'Gerente de Proyectos, Mantenimiento', entity: 'Gerencia de Proyectos & Mantenimiento Industrial' },
    { period: '2021 — 2022', role: 'Coordinador de Operación, Mantenimiento y SST', entity: 'Operaciones & Seguridad SST Integral (ISO 45001)' },
    { period: '2018 — 2020', role: 'Especialista en Evaluación', entity: 'Departamento de Gestión de Mantenimiento' },
    { period: '2007 — 2017', role: 'Especialista en Equipos de Patio (EPA)', entity: 'Patios de Alta Tensión & Subestaciones (60/138/220 kV)' },
    { period: '2007', role: 'Técnico Docente Profesional', entity: 'Institución de Formación Técnica Superior en Potencia' },
    { period: '2002 — 2007', role: 'Supervisor de Taller Eléctrico / Planeamiento', entity: 'Taller Eléctrico Central & Soporte de Planeamiento' },
  ];

  // Premier industrial partners & sectors (in pure Spanish)
  const premierPartners = [
    { name: 'MINERA CHINALCO', sector: 'Gran Minería', detail: 'Subestación Principal de Potencia & Redes de Media Tensión' },
    { name: 'LAS BAMBAS', sector: 'Operación Minera', detail: 'Mantenimiento Preventivo y Predictivo en Celdas de Media Tensión' },
    { name: 'ENEL DISTRIBUCIÓN', sector: 'Transmisión & Redes', detail: 'Evaluación y Diagnóstico Dieléctrico de Transformadores 60 kV' },
    { name: 'LUZ DEL SUR', sector: 'Distribución Eléctrica', detail: 'Auditorías de Pérdidas Técnicas y Compensación Reactiva' },
    { name: 'REPSOL / REFINERÍA', sector: 'Sector Hidrocarburos', detail: 'Protocolos de Seguridad Eléctrica y Malla de Puesta a Tierra' },
    { name: 'PARQUES SOLARES', sector: 'Energías Renovables', detail: 'Supervisión de Inversores Centralizados e Interconexión SEIN' },
    { name: 'SIDERÚRGICA PERÚ', sector: 'Siderurgia & Potencia', detail: 'Análisis de Calidad de Energía, Armónicos y Factor de Potencia' },
    { name: 'CEMENTO YURA', sector: 'Gran Manufactura', detail: 'Implementación de Planes de Eficiencia Energética bajo ISO 50001' },
    { name: 'OSINERGMIN', sector: 'Fiscalización Técnica', detail: 'Fiscalización Técnica y Cumplimiento del Código Nacional de Electricidad' },
    { name: 'OEFA', sector: 'Fiscalización Ambiental', detail: 'Planes de Manejo de Aceite Dieléctrico y Residuos Industriales' },
    { name: 'MINERA ANTAMINA', sector: 'Minería & Energía', detail: 'Inspección Termográfica Infrarroja en Subestaciones de 220 kV' },
    { name: 'MERCADO LIBRE (COES)', sector: 'Mercado Eléctrico', detail: 'Optimización de Tarifas, Demanda Máxima y Contratación PPA' },
  ];

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen lg:min-h-[110vh] flex flex-col justify-between pt-24 pb-16 overflow-hidden bg-[#060b14] text-slate-100"
    >
      {/* ========================================================================= */}
      {/* 1. FONDO ARQUITECTÓNICO: EDIFICIO INTELIGENTE + HACES DE LUZ CINEMATOGRÁFICOS */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Fotografía de Edificio Inteligente y Sostenible de Alta Definición */}
        <img
          src={ASSET_IMAGES.smartBuildingHero}
          alt="Edificio Inteligente y Sostenible Corporativo"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.3] saturate-110 scale-105 transition-transform duration-700"
          style={{
            transform: isHovering 
              ? `scale(1.05) translate3d(${-mousePos.x * 12}px, ${-mousePos.y * 12}px, 0)` 
              : 'scale(1.04) translate3d(0, 0, 0)',
          }}
        />

        {/* Gradiente de Iluminación Arquitectónica Cinematográfica con Acentos Neón */}
        <div 
          className="absolute -top-32 -left-32 w-[160%] h-[150%] opacity-50 mix-blend-screen pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(56, 189, 248, 0.22) 0%, rgba(16, 185, 129, 0.18) 32%, transparent 68%), radial-gradient(ellipse at 75% 65%, rgba(251, 191, 36, 0.12) 0%, transparent 50%)',
            transform: isHovering ? `translate3d(${mousePos.x * 16}px, ${mousePos.y * 16}px, 0)` : 'none',
            transition: 'transform 0.4s ease-out',
          }}
        ></div>

        {/* Máscara de Contraste y Equilibrio con Tinte Azul Nocturno / Esmeralda Profundo */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 11, 20, 0.88) 0%, rgba(9, 20, 36, 0.65) 45%, rgba(6, 11, 20, 0.88) 100%)',
          }}
        ></div>

        {/* Viñeta de Contraste Perimetral */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#060b14]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060b14]/90 via-transparent to-[#060b14]/90"></div>

        {/* Rejilla de Telemetría Holográfica en Perspectiva 3D */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[320px] opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(16, 185, 129, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            transform: 'perspective(600px) rotateX(65deg)',
            transformOrigin: 'bottom center',
          }}
        ></div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CONTENEDOR PRINCIPAL: PANEL CENTRAL CON VENTANAS TECNOLÓGICAS          */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-2 flex-1 flex flex-col justify-between">
        
        {/* ========================================================================= */}
        {/* ENCABEZADO SUPERIOR: NOMBRE MONUMENTAL + VENTANA DE FORMACIÓN Y POSGRADO   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          
          {/* Superior Izquierda: TITULAR MONUMENTAL EDITORIAL */}
          <div className="lg:col-span-8 text-left relative">
            
            {/* Onda expansiva sutil detrás del badge principal */}
            <div className="absolute -left-3 -top-3 w-48 h-10 rounded-full bg-emerald-500/10 blur-xl pointer-events-none animate-pulse"></div>

            <div className="flex flex-wrap items-center gap-2 mb-2 relative z-10">
              {/* Badge con Onda Expansiva */}
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute opacity-75"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative"></span>
              </div>
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 font-bold uppercase drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                COLEGIO DE INGENIEROS DEL PERÚ • REG. CIP N° 336005
              </span>
              <span className="hidden sm:inline-block text-slate-500 font-mono text-xs">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-300 font-semibold uppercase bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                <Zap className="w-3 h-3 text-amber-400" />
                18 AÑOS DE EXPERIENCIA EN ALTA TENSIÓN
              </span>
            </div>

            {/* Tipografía Monumental "RICHTER GÓMEZ" con halo de potencia */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[0.88] select-none uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
              RICHTER<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-emerald-300">
                GÓMEZ
              </span>
            </h1>

            {/* Subtítulo Técnico Ejecutivo en Español */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-100 font-mono tracking-wider uppercase drop-shadow-md">
                INGENIERO MECÁNICO ELECTRICISTA
              </p>
              <span className="text-amber-400 font-bold">•</span>
              <p className="text-xs sm:text-sm font-semibold text-emerald-300 font-mono tracking-wide drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                ESPECIALISTA EN MANTENIMIENTO EN ALTA TENSIÓN & EFICIENCIA ENERGÉTICA
              </p>
            </div>
          </div>

          {/* Superior Derecha: VENTANA TECNOLÓGICA 01 - FORMACIÓN ACADÉMICA & POSGRADO */}
          <div className="lg:col-span-4 lg:text-left relative">
            
            {/* Onda expansiva electromagnética de fondo */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 -z-10 pointer-events-none animate-shockwave"></div>

            {/* Ventana con Iluminación Perimetral Resaltante */}
            <div className="relative rounded-2xl bg-[#09111e]/90 border border-emerald-500/40 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.2)] overflow-hidden hover:border-emerald-400/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(16,185,129,0.35)] transition-all duration-300 group">
              
              {/* Descarga de arco eléctrico en el borde superior */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-electric-arc pointer-events-none"></div>

              {/* Escáner de telemetría vertical */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-emerald-400/10 to-transparent pointer-events-none animate-scanline"></div>

              {/* Barra Superior de la Ventana Tecnológica */}
              <div className="px-4 py-2.5 bg-[#0e192a]/95 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                    SYS.EDU-01 // FORMACIÓN & POSGRADO
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>HABILITADO</span>
                </div>
              </div>

              {/* Decoradores de Esquinas Tecnológicas Neón */}
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"></div>

              {/* Contenido de la Ventana */}
              <div className="p-4 sm:p-5 space-y-3 relative z-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      GRADO ACADÉMICO MÁXIMO
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">POSGRADO</span>
                  </div>
                  <h3 className="text-base font-extrabold text-white leading-tight mt-0.5">
                    Magíster en Gestión Empresarial
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Gestión de Activos, Dirección Estratégica & Proyectos de Inversión
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                      TÍTULO PROFESIONAL UNIVERSITARIO
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-500/30">CIP N° 336005</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 leading-tight mt-0.5">
                    Ingeniero Mecánico Electricista
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    Colegiado y Habilitado en el Colegio de Ingenieros del Perú
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> Auditor Líder SIG
                  </span>
                  <span className="text-slate-300">ISO 9001 • 14001 • 45001</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CUERPO PRINCIPAL: 3 COLUMNAS CON VENTANAS TECNOLÓGICAS + FOTO AL CENTRO   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative">
          
          {/* ------------------------------------------------------------- */}
          {/* COLUMNA IZQUIERDA: [VENTANA 02: SÍNTESIS] + [VENTANA 03: COMPETENCIAS] */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-5 order-2 lg:order-1">
            
            {/* VENTANA TECNOLÓGICA 02: SÍNTESIS PROFESIONAL & TELEMETRÍA */}
            <div className="relative rounded-2xl bg-[#09111e]/90 border border-emerald-500/35 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)] overflow-hidden hover:border-emerald-400/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 group">
              
              {/* Descarga eléctrica intermitente en borde superior */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-electric-arc pointer-events-none"></div>

              {/* Escáner de telemetría vertical */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-cyan-400/10 to-transparent pointer-events-none animate-scanline" style={{ animationDelay: '2s' }}></div>

              {/* Barra Superior de la Ventana */}
              <div className="px-4 py-2.5 bg-[#0e192a]/95 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                    PANEL.MET-02 // SÍNTESIS PROFESIONAL
                  </span>
                </div>
                <span className="text-[10px] font-mono font-semibold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                  18 AÑOS EXP
                </span>
              </div>

              {/* Decoradores de Esquinas Tecnológicas Neón */}
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"></div>

              {/* Contenido de la Ventana */}
              <div className="p-4 sm:p-5 relative z-10">
                
                {/* Cuadrícula de 4 Métricas de Telemetría con iluminación viva */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#0d1626]/90 border border-slate-700/80 hover:border-emerald-400/70 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">TRAYECTORIA</span>
                      <Zap className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-300 leading-none drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                      18+
                    </div>
                    <div className="text-[11px] font-bold text-slate-100 mt-1">
                      Años de Experiencia
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Mantenimiento en AT y Energía
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0d1626]/90 border border-slate-700/80 hover:border-amber-400/70 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-amber-300 uppercase tracking-wider font-semibold">INFRAESTRUCTURA</span>
                      <Building2 className="w-3.5 h-3.5 text-amber-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300 leading-none drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                      50+
                    </div>
                    <div className="text-[11px] font-bold text-slate-100 mt-1">
                      Subestaciones AT/MT
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Proyectos y comisionamiento
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0d1626]/90 border border-slate-700/80 hover:border-cyan-400/70 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-cyan-300 uppercase tracking-wider font-semibold">EFICIENCIA</span>
                      <Gauge className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300 leading-none drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                      22%
                    </div>
                    <div className="text-[11px] font-bold text-slate-100 mt-1">
                      Ahorro Energético
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Auditorías bajo ISO 50001
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0d1626]/90 border border-slate-700/80 hover:border-teal-400/70 hover:shadow-[0_0_15px_rgba(20,184,166,0.25)] transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-mono text-teal-300 uppercase tracking-wider font-semibold">SEGURIDAD SSOMA</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-teal-300 leading-none drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">
                      0
                    </div>
                    <div className="text-[11px] font-bold text-slate-100 mt-1">
                      Incidentes SSOMA
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Récord intachable de seguridad
                    </div>
                  </div>
                </div>

                {/* Síntesis Profesional en Español */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {CV_DATA.personalInfo.valueProposition}
                </p>

                {/* Principio Profesional / Lema de Ingeniería con destello de energía */}
                <div className="mt-4 p-2.5 rounded-lg bg-[#0d1626]/80 border border-slate-700/70 text-[11px] text-slate-300 italic flex items-start gap-2 shadow-inner">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>«La excelencia en alta tensión integra continuidad del servicio, rentabilidad energética y cero contingencias ante OSINERGMIN y OEFA.»</span>
                </div>
              </div>

            </div>

            {/* VENTANA TECNOLÓGICA 03: COMPETENCIAS & HERRAMIENTAS TÉCNICAS */}
            <div className="relative rounded-2xl bg-[#09111e]/90 border border-cyan-500/35 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(56,189,248,0.15)] overflow-hidden hover:border-cyan-400/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(56,189,248,0.3)] transition-all duration-300 group">
              
              {/* Descarga eléctrica intermitente */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-electric-arc pointer-events-none" style={{ animationDelay: '1.2s' }}></div>

              {/* Barra Superior de la Ventana */}
              <div className="px-4 py-2.5 bg-[#0e192a]/95 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.9)]"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                    MOD.TECH-03 // COMPETENCIAS & HERRAMIENTAS
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]">
                  COLEGIADO HABILITADO
                </span>
              </div>

              {/* Decoradores de Esquinas Tecnológicas Neón Cyan */}
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] pointer-events-none"></div>

              {/* Contenido de la Ventana */}
              <div className="p-4 sm:p-5 relative z-10">
                
                {/* Lista de Competencias con Viñetas de Potencia Iluminadas */}
                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(16,185,129,0.8)]" />
                    <span className="font-medium">Mantenimiento de Subestaciones de Alta y Media Tensión (AT/MT)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]" />
                    <span className="font-medium">Consultoría en Energía y Eficiencia Energética Industrial</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(16,185,129,0.8)]" />
                    <span className="font-medium">Auditorías ISO 50001 & Compensación de Energía Reactiva</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sun className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(245,158,11,0.8)]" />
                    <span className="font-medium">Supervisión Técnica de Parques Solares y Energías Renovables</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(56,189,248,0.8)]" />
                    <span className="font-medium">Termografía Infrarroja, Análisis de Aislamiento & Pruebas Dieléctricas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-300 shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(20,184,166,0.8)]" />
                    <span className="font-medium">Sostenibilidad, SSOMA & Fiscalización (OSINERGMIN / OEFA)</span>
                  </div>
                </div>

                {/* Chips Tecnológicos de Herramientas & Normativas */}
                <div className="mt-4 pt-3.5 border-t border-slate-700/70">
                  <div className="text-[10px] font-mono text-cyan-300 mb-2 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>SOFTWARE ESPECIALIZADO & MARCO REGULATORIO</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'ETAP Potencia',
                      'AutoCAD Eléctrico',
                      'Fluke Termografía',
                      'DIgSILENT PowerFactory',
                      'Norma ISO 50001',
                      'Código Nacional Electricidad',
                      'Ley 29783 SSOMA',
                      'D.S. 024-2016-EM Minería'
                    ].map((badge, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#0d1626] text-slate-200 border border-slate-700/80 hover:border-cyan-400/70 hover:text-cyan-300 hover:shadow-[0_0_8px_rgba(56,189,248,0.3)] transition-all"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Canales de Contacto Directo */}
                <div className="mt-4 pt-3.5 border-t border-slate-700/70 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200">Lima, Perú • Cobertura Nacional</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <a 
                      href={`https://wa.me/${CV_DATA.personalInfo.whatsapp}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:text-amber-300 font-mono transition-colors"
                    >
                      +51 987 654 321 (WhatsApp Directo)
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a 
                      href={`mailto:${CV_DATA.personalInfo.email}`}
                      className="hover:text-cyan-300 font-mono transition-colors"
                    >
                      {CV_DATA.personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Barra de Acceso Rápido */}
                <div className="mt-4 pt-3 border-t border-slate-700/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-amber-300 font-bold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.25)]">
                      CIP N° 336005
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${CV_DATA.personalInfo.whatsapp}?text=Hola%20Ing.%20Richter%20Gomez,%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20servicio%20t%C3%A9cnico.`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-[#0d1626] hover:bg-emerald-950/70 text-slate-300 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/50 transition-all shadow-sm"
                      title="Contactar vía WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href={CV_DATA.personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-[#0d1626] hover:bg-cyan-950/70 text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm"
                      title="Ver Perfil en LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <button
                      onClick={onOpenCvModal}
                      className="p-1.5 rounded-lg bg-[#0d1626] hover:bg-amber-950/70 text-slate-300 hover:text-amber-300 border border-slate-700 hover:border-amber-500/50 transition-all shadow-sm"
                      title="Descargar Currículum Vitae en PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* COLUMNA CENTRAL: RETRATO DE CUERPO ENTERO FIJO AL CENTRO      */}
          {/* ------------------------------------------------------------- */}
          <div 
            className="lg:col-span-4 flex flex-col items-center justify-end relative order-1 lg:order-2 min-h-[580px] sm:min-h-[660px] lg:min-h-[760px] select-none pointer-events-auto"
            style={{
              transform: isHovering 
                ? `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 3}deg)` 
                : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
              transition: isHovering ? 'transform 0.12s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* ONDAS EXPANSIVAS CONCÉNTRICAS (Electromagnetic Shockwaves) */}
            <div className="absolute bottom-28 w-72 sm:w-88 h-72 sm:h-88 rounded-full border border-emerald-400/30 animate-shockwave pointer-events-none"></div>
            <div className="absolute bottom-28 w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-cyan-400/25 animate-shockwave pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-28 w-96 sm:w-[420px] h-96 sm:h-[420px] rounded-full border border-teal-300/20 animate-shockwave pointer-events-none" style={{ animationDelay: '2.1s' }}></div>

            {/* Halo de Retroiluminación Trasera Neón */}
            <div 
              className="absolute bottom-20 w-80 sm:w-96 h-[520px] rounded-full blur-3xl pointer-events-none transition-all duration-300"
              style={{
                background: `radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 75%)`,
                transform: `translate3d(${-mousePos.x * 10}px, ${-mousePos.y * 10}px, 0)`,
              }}
            ></div>

            {/* Sombra de Suelo Realista en la Base */}
            <div className="absolute bottom-6 w-72 sm:w-80 h-10 bg-black/95 rounded-full blur-xl pointer-events-none transform scale-x-125"></div>

            {/* Fotografía Oficial de Cuerpo Entero Recortada */}
            <div className="relative z-10 w-full flex items-end justify-center">
              <img
                src={activePortraitImg}
                alt="Ing. Richter Gomez Sierralta • CIP 336005"
                className="max-h-[560px] sm:max-h-[650px] lg:max-h-[740px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] select-none transition-transform duration-200"
                style={{
                  transform: isHovering 
                    ? `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 20px)` 
                    : 'translate3d(0, 0, 0)',
                }}
              />
            </div>

            {/* Pedestal / Placa de Control Tecnológico (CIP N° 336005) con Halo Neón y Descarga */}
            <div className="relative z-20 -mt-6 mb-2">
              {/* Onda expansiva debajo de la placa */}
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-60 pointer-events-none"></div>

              <div className="relative px-5 py-2.5 rounded-full bg-[#0a1220]/95 border border-emerald-400/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.9),0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2.5 text-xs font-mono text-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
                <span className="font-extrabold tracking-wide text-white">ING. RICHTER GOMEZ SIERRALTA</span>
                <span className="text-slate-500">•</span>
                <span className="text-amber-300 font-extrabold drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">CIP N° 336005</span>
              </div>
            </div>

          </div>

          {/* ------------------------------------------------------------- */}
          {/* COLUMNA DERECHA: [VENTANA 04: LÍNEA DE TIEMPO] + [VENTANA 05: SECTORES] */}
          {/* ------------------------------------------------------------- */}
          <div className="lg:col-span-4 space-y-5 order-3">
            
            {/* VENTANA TECNOLÓGICA 04: LÍNEA DE TIEMPO PROFESIONAL */}
            <div className="relative rounded-2xl bg-[#09111e]/90 border border-amber-500/35 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.15)] overflow-hidden hover:border-amber-400/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.3)] transition-all duration-300 group">
              
              {/* Descarga eléctrica intermitente */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-electric-arc pointer-events-none" style={{ animationDelay: '0.6s' }}></div>

              {/* Escáner vertical */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-amber-400/10 to-transparent pointer-events-none animate-scanline" style={{ animationDelay: '3.5s' }}></div>

              {/* Barra Superior de la Ventana */}
              <div className="px-4 py-2.5 bg-[#0e192a]/95 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.9)]"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                    LOG.TIME-04 // LÍNEA DE TIEMPO PROFESIONAL
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-300 font-semibold bg-amber-950/70 px-2 py-0.5 rounded border border-amber-500/30">
                  2002 — 2026 (24 AÑOS)
                </span>
              </div>

              {/* Decoradores de Esquinas Tecnológicas Neón Ámbar */}
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)] pointer-events-none"></div>

              {/* Contenido de la Ventana */}
              <div className="p-4 sm:p-5 relative z-10">
                
                {/* Riel Vertical de Hitos Tecnológicos */}
                <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-emerald-400 before:via-teal-400 before:to-amber-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  {careerMilestones.map((item, idx) => (
                    <div key={idx} className="relative group/item">
                      {/* Nodo Iluminado con Descarga Sutil en el Riel */}
                      <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#09111e] border-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] group-hover/item:border-amber-300 group-hover/item:bg-emerald-400 group-hover/item:shadow-[0_0_12px_rgba(245,158,11,0.9)] transition-all"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="text-[11px] font-mono font-bold text-amber-300 bg-[#0d1626] px-2 py-0.5 rounded border border-slate-700 w-fit shadow-sm">
                          {item.period}
                        </span>
                        <h4 className="text-xs font-bold text-white group-hover/item:text-emerald-300 transition-colors mt-0.5 sm:mt-0">
                          {item.role}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5 font-normal">
                        {item.entity}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/70 flex items-center justify-between text-[11px]">
                  <button
                    onClick={() => scrollToSection('experiencia')}
                    className="text-emerald-300 hover:text-emerald-200 font-semibold flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Ver detalle completo de 24 años de trayectoria (2002 — 2026)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>

            {/* VENTANA TECNOLÓGICA 05: SECTORES ESTRATÉGICOS & CLIENTES CLAVE */}
            <div className="relative rounded-2xl bg-[#09111e]/90 border border-emerald-500/35 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)] overflow-hidden hover:border-emerald-400/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 group">
              
              {/* Descarga eléctrica intermitente */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-electric-arc pointer-events-none" style={{ animationDelay: '1.8s' }}></div>

              {/* Barra Superior de la Ventana */}
              <div className="px-4 py-2.5 bg-[#0e192a]/95 border-b border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.7)]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                    SECT.CORP-05 // CLIENTES & SECTORES CLAVE
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                  COBERTURA NACIONAL
                </span>
              </div>

              {/* Decoradores de Esquinas Tecnológicas Neón Esmeralda */}
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] pointer-events-none"></div>

              {/* Contenido de la Ventana */}
              <div className="p-4 sm:p-5 relative z-10">
                
                {/* Cuadrícula de Entidades y Sectores Industriales */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {premierPartners.map((partner, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setActivePartnerTooltip(`${partner.name}: ${partner.detail}`)}
                      onMouseLeave={() => setActivePartnerTooltip(null)}
                      className="p-2 rounded-xl bg-[#0d1626]/90 border border-slate-700/80 hover:border-emerald-400/80 hover:bg-[#122035] hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all cursor-pointer flex flex-col justify-center items-center text-center group/card"
                    >
                      <span className="text-[10px] font-mono font-bold text-slate-100 group-hover/card:text-emerald-300 leading-tight transition-colors">
                        {partner.name}
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                        {partner.sector}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visor de Telemetría al Pasar el Ratón */}
                <div className="mt-3 p-2.5 rounded-lg bg-[#0d1626]/90 border border-slate-700/80 text-[11px] text-slate-200 min-h-[42px] flex items-center justify-center text-center font-mono shadow-inner">
                  {activePartnerTooltip ? (
                    <span className="text-amber-300 animate-fadeIn font-semibold drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]">✦ {activePartnerTooltip}</span>
                  ) : (
                    <span className="text-slate-400">Pasa el cursor por cada entidad para inspeccionar el alcance técnico</span>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* BARRA INFERIOR DE ACCIONES EJECUTIVAS: 4 BOTONES EN ESPAÑOL               */}
        {/* ========================================================================= */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
          <button
            onClick={() => scrollToSection('perfil')}
            className="py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_20px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 transition-all transform active:scale-95"
          >
            <span>Conoce mi perfil</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => scrollToSection('experiencia')}
            className="py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#0d1626] hover:bg-[#14233c] border border-slate-700 hover:border-emerald-500/50 shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ver experiencia laboral</span>
          </button>

          <button
            onClick={onOpenCvModal}
            className="py-3 px-4 rounded-xl text-xs font-semibold text-amber-300 bg-amber-950/50 hover:bg-amber-900/50 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2 transition-all hover:border-amber-400 group"
          >
            <Download className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Descargar CV en PDF</span>
          </button>

          <button
            onClick={onOpenContact}
            className="py-3 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2 transition-all hover:border-emerald-400"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Contactar asesoría</span>
          </button>
        </div>

      </div>
    </section>
  );
};
