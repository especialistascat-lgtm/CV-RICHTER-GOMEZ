export interface FieldExperience {
  id: string;
  code: string;
  title: string;
  category: 'Energía y AT' | 'SSOMA y Seguridad' | 'Sostenibilidad Ambiental' | 'Eficiencia y Pruebas';
  description: string;
  fieldWorkDetails: string;
  equipmentUsed: string[];
  normativeStandards: string[];
  locationContext: string;
  safetyProtocol: string;
  deliverable: string;
  imageAlt: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  yearRange: string;
  sector: 'Energía & Potencia' | 'SSOMA & Minería' | 'Consultoría & Eficiencia' | 'Mantenimiento Industrial';
  summary: string;
  responsibilities: string[];
  keyProjects: string[];
  verifiableAchievements: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Energía' | 'Medio Ambiente' | 'Seguridad Industrial' | 'Sistemas de Gestión';
  description: string;
  credentialType: 'Certificación Profesional' | 'Auditor Interno SIG' | 'Diplomado / Especialización';
  verified: boolean;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  clientType: string;
  sector: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export const CV_DATA = {
  personalInfo: {
    fullName: 'Ing. Richter Gomez Sierralta',
    shortName: 'Richter Gomez',
    cipNumber: '336005',
    cip: 'Colegio de Ingenieros del Perú • CIP N° 336005 (Colegiado & Habilitado)',
    title: 'Ingeniero Mecánico Electricista | Magíster en Gestión',
    subtitle: 'Gerente de Gestión de la Energía | +24 Años de Trayectoria (2002 — 2026)',
    tagline: '24 años de liderazgo técnico continuo (2002 — 2026): Gestión de Energía, Mantenimiento en Alta Tensión (EPA), Proyectos y SST.',
    valueProposition: 'Con más de 24 años de trayectoria profesional ininterrumpida (2002 — 2026), desde la supervisión de taller eléctrico y una década continua como Especialista en Equipos de Patio de Alta Tensión (EPA), hasta la gerencia de proyectos, mantenimiento y la Gerencia de Gestión de la Energía en el Departamento de Gestión Energética (Mayo 2025 – Octubre 2026), integro la excelencia técnica electromecánica con una rigurosa visión de sostenibilidad ambiental, eficiencia bajo ISO 50001 y cultura de seguridad integral SST.',
    email: 'especialistascat@gmail.com',
    phone: '+51 987 654 321',
    whatsapp: '51987654321',
    location: 'Lima, Perú — Cobertura operativa a nivel nacional',
    linkedin: 'https://linkedin.com/in/richter-gomez-sierralta',
    availability: 'Disponible para Consultorías Estratégicas, Gestión Energética, Auditorías y Dirección de Proyectos',
  },

  heroStats: [
    { label: 'Experiencia Profesional', value: '+24 Años', sub: 'Trayectoria continua 2002 — 2026' },
    { label: 'Subestaciones y Patios AT', value: '+80 Bahías', sub: 'Transformadores, EPA y celdas MT/AT' },
    { label: 'Ahorro Energético Logrado', value: 'Hasta 22%', sub: 'En diagnósticos de eficiencia y mercado libre' },
    { label: 'Índice de Seguridad SST', value: '0 Accidentes', sub: 'Horas hombre con cero incapacitantes' },
  ],

  profileSummary: {
    executiveOverview: `Ingeniero Mecánico Electricista con grado de Magíster en Gestión y más de 24 años de experiencia profesional especializada e ininterrumpida (2002 — 2026). Su trayectoria abarca desde sus inicios como Supervisor de Taller Eléctrico y Soporte de Planeamiento (Agosto 2002 – Julio 2007) y Técnico Docente Profesional (Agosto 2007 – Noviembre 2007), una década fundamental como Especialista en Equipos de Patio de Alta Tensión - EPA (Noviembre 2007 – Diciembre 2017), Especialista en Evaluación en el Departamento de Gestión de Mantenimiento (Enero 2018 – Noviembre 2020), Coordinador de Operación, Mantenimiento y SST (Enero 2021 – Junio 2022), Gerente de Proyectos, Mantenimiento (Julio 2022 – Mayo 2025), hasta su cargo actual en el año presente 2026 como Gerente de Gestión de la Energía en el Departamento de Gestión Energética (Mayo 2025 – Octubre 2026). Amplio dominio en gestión de activos de potencia en alta y media tensión (60/138/220 kV), pruebas dieléctricas, análisis de condición, auditorías energéticas según ISO 50001 y liderazgo en sistemas de seguridad SST y fiscalización ante OSINERGMIN y OEFA.`,
    coreStrengths: [
      'Dirección estratégica de la gestión energética, contratos de suministro PPA y auditorías bajo ISO 50001.',
      'Especialista con 10 años en Equipos de Patio de Alta Tensión (EPA) y pruebas de diagnóstico dieléctrico.',
      'Gestión integral de proyectos electromecánicos, paradas mayores de planta y mantenimiento centrado en confiabilidad (RCM).',
      'Liderazgo en seguridad y salud en el trabajo (SST), matrices IPERC, permisos PETAR y cultura cero accidentes.',
      'Evaluación técnica, diagnóstico de salud de activos (Health Index) y análisis causa raíz (RCA).',
      'Fiscalización y cumplimiento riguroso de normativas CNE, RESESATE, OSINERGMIN y directrices ambientales OEFA.',
    ],
    sectors: [
      { name: 'Gestión Energética & Mercado Libre', icon: 'Zap' },
      { name: 'Patios de Alta Tensión & Subestaciones', icon: 'Cpu' },
      { name: 'Minería & Grandes Operaciones', icon: 'Mountain' },
      { name: 'Industria Manufacturera & Confiabilidad', icon: 'Factory' },
      { name: 'Seguridad SST & Gestión SSOMA', icon: 'ShieldCheck' },
      { name: 'Auditoría & Transición Sostenible', icon: 'Leaf' },
    ],
  },

  specializations: [
    {
      id: 'energia',
      title: 'Consultoría en Energía y Mercados',
      icon: 'Zap',
      color: 'emerald',
      description: 'Asesoría técnica estratégica en optimización tarifaria, análisis de perfiles de carga, calidad de suministro eléctrico y transición energética para clientes libres y regulados.',
      highlights: ['Estudios de flujo de carga y cortocircuito', 'Optimización de factor de potencia y armónicos', 'Análisis tarifario y contratación en mercado libre'],
    },
    {
      id: 'eficiencia',
      title: 'Eficiencia Energética (ISO 50001)',
      icon: 'Gauge',
      color: 'teal',
      description: 'Auditorías energéticas de primer y segundo nivel orientadas a la reducción sistemática de consumo en sistemas motrices, aire comprimido, iluminación y transformación.',
      highlights: ['Diagnóstico de pérdidas en transformadores', 'Balance energético en procesos térmicos y eléctricos', 'Planes de retorno de inversión (ROI / Payback)'],
    },
    {
      id: 'sostenibilidad',
      title: 'Sostenibilidad y Desempeño Ambiental',
      icon: 'Leaf',
      color: 'green',
      description: 'Monitoreo, fiscalización y supervisión de cumplimiento ambiental bajo normativas OEFA y MINAM. Gestión integral de residuos peligrosos (aceite dieléctrico) y mitigación de huella.',
      highlights: ['Cumplimiento de compromisos ambientales IGA', 'Planes de contingencia ante derrames y emergencias', 'Medición y reporte de huella de carbono organizacional'],
    },
    {
      id: 'renovables',
      title: 'Supervisión de Proyectos Renovables',
      icon: 'Sun',
      color: 'amber',
      description: 'Supervisión en campo y seguimiento técnico en el montaje, conexionado y comisionamiento de plantas solares fotovoltaicas y proyectos de generación distribuida.',
      highlights: ['Verificación de inversores y string boxes', 'Interconexión a redes de distribución en MT', 'Pruebas de rendimiento PR y curvas I-V'],
    },
    {
      id: 'subestaciones',
      title: 'Mantenimiento de Subestaciones AT/MT/BT',
      icon: 'Activity',
      color: 'cyan',
      description: 'Inspección, diagnóstico predictivo y mantenimiento integral a transformadores de potencia, celdas de media tensión, interruptores de potencia, seccionadores y bancos de condensadores.',
      highlights: ['Pruebas dieléctricas y físico-químicas de aceite', 'Termografía infrarroja de alta resolución', 'Protocolos de pruebas eléctricas IEEE / IEC'],
    },
    {
      id: 'informes',
      title: 'Informes Técnicos y Planes de Gestión',
      icon: 'FileText',
      color: 'blue',
      description: 'Elaboración de expedientes técnicos, peritajes electromecánicos, planes de mantenimiento centrado en confiabilidad (RCM) e informes de sustento para entidades reguladoras.',
      highlights: ['Sustentos técnicos ante OSINERGMIN', 'Planes de contingencia y respuesta a emergencias', 'Procedimientos operativos estandarizados (POE)'],
    },
    {
      id: 'ecoeficiencia',
      title: 'Ecoeficiencia y Economía Circular',
      icon: 'RefreshCw',
      color: 'emerald',
      description: 'Estrategias de ecoeficiencia institucional e industrial para valorización de recursos, reducción de mermas, eficiencia hídrica y transición hacia modelos circulares sostenibles.',
      highlights: ['Diagnósticos de ecoeficiencia institucional', 'Reutilización y ciclo de vida de insumos eléctricos', 'Estrategias de economía circular aplicadas a la industria'],
    },
    {
      id: 'ssoma',
      title: 'Gestión Integral SST / SSOMA & Riesgo Eléctrico',
      icon: 'ShieldCheck',
      color: 'rose',
      description: 'Liderazgo en seguridad y salud en el trabajo para intervenciones de alto riesgo eléctrico. Implementación de matrices IPERC continuo, procedimientos LOTO y cultura cero accidentes.',
      highlights: ['Cumplimiento Ley 29783 y RESESATE', 'Bloqueo, tarjeteo y pruebas de ausencia de tensión (LOTO)', 'Auditorías internas bajo ISO 45001 e ISO 14001'],
    },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Gerente de Gestión de la Energía',
      company: 'Departamento de Gestión Energética',
      period: 'Mayo 2025 – Octubre 2026',
      yearRange: '2025 — 2026',
      sector: 'Consultoría & Eficiencia',
      summary: 'Liderazgo técnico y directivo en el Departamento de Gestión Energética durante el año presente 2026, gestionando la planificación energética estratégica corporativa, auditorías según ISO 50001, optimización tarifaria de contratos en el mercado libre de electricidad y descarbonización industrial.',
      responsibilities: [
        'Dirección estratégica de la política energética institucional, balances de potencia y control continuo de líneas base bajo norma ISO 50001.',
        'Negociación técnica de contratos de suministro de energía eléctrica en el mercado libre (PPAs), gestión de potencia en horas punta y reducción de sobrecostos.',
        'Liderazgo en proyectos de integración de energías renovables (solar fotovoltaica), almacenamiento en baterías (BESS) y planes de mitigación de emisiones.',
        'Fiscalización y cumplimiento riguroso ante los entes reguladores OSINERGMIN y directrices del COES-SINAC.',
        'Supervisión de sistemas SCADA y plataformas de telemetría y monitoreo energético en tiempo real.',
      ],
      keyProjects: [
        'Diseño e implementación del Plan Integral de Gestión Energética 2025-2026, logrando una reducción comprobada del 18.5% en la factura eléctrica.',
        'Estructuración y licitación de contrato PPA en mercado libre con certificación de energía 100% renovable (I-REC).',
      ],
      verifiableAchievements: [
        'Reducción verificable de costos energéticos en más del 18% anual y 0 penalizaciones por factor de potencia o exceso de potencia contratada.',
        'Certificación institucional del Sistema de Gestión de la Energía bajo la norma internacional ISO 50001:2018.',
      ],
      tags: ['Gestión Energética', 'Año Presente 2026', 'ISO 50001', 'Mercado Libre', 'PPA', 'OSINERGMIN', 'Descarbonización'],
    },
    {
      id: 'exp-2',
      role: 'Gerente de Proyectos, Mantenimiento',
      company: 'Gerencia de Proyectos & Mantenimiento Industrial',
      period: 'Julio 2022 – Mayo 2025',
      yearRange: '2022 — 2025',
      sector: 'Mantenimiento Industrial',
      summary: 'Dirección ejecutiva del portafolio integral de proyectos electromecánicos, modernización y ampliación de subestaciones y paradas mayores de planta, gestionando presupuestos de inversión CAPEX y OPEX, plazos contractuales y confiabilidad operacional.',
      responsibilities: [
        'Gestión integral del ciclo de vida de proyectos de ingeniería de potencia, ampliación de patios de llaves y renovación de activos electromecánicos.',
        'Planificación, programación en MS Project y dirección de paradas anuales de planta y comisionamiento de subestaciones eléctricas.',
        'Control estricto de indicadores de confiabilidad y mantenibilidad (MTBF, MTTR, Disponibilidad) y gestión de costos de mantenimiento.',
        'Supervisión y homologación técnica de contratistas, fabricantes de equipos de potencia y auditorías de calidad en obra.',
        'Adquisición estratégica y comisionamiento de transformadores de potencia, celdas de media tensión e interruptores de alta tensión.',
      ],
      keyProjects: [
        'Ampliación y modernización de bahías de transformación de 60/22.9 kV con comisionamiento exitoso cumpliendo cronograma sin retrasos.',
        'Implementación del plan de mantenimiento centrado en confiabilidad (RCM) para todos los activos críticos de la infraestructura eléctrica.',
      ],
      verifiableAchievements: [
        'Disponibilidad operacional de subestaciones y activos críticos incrementada al 99.85% sin salidas forzadas.',
        'Cumplimiento del 100% de los proyectos asignados dentro del marco presupuestal CAPEX y con cero desviaciones técnicas.',
      ],
      tags: ['Gerencia de Proyectos', 'Mantenimiento Mayor', 'RCM', 'Subestaciones AT/MT', 'Confiabilidad', 'CAPEX / OPEX'],
    },
    {
      id: 'exp-3',
      role: 'Coordinador de Operación, Mantenimiento y SST',
      company: 'Operaciones de Infraestructura Energética & SST',
      period: 'Enero 2021 – Junio 2022',
      yearRange: '2021 — 2022',
      sector: 'SSOMA & Minería',
      summary: 'Coordinación operativa de campo y liderazgo en Seguridad y Salud en el Trabajo (SST) para faenas continuas en instalaciones energizadas de alta y media tensión, garantizando cultura preventiva, cero accidentes e impecable cumplimiento legal.',
      responsibilities: [
        'Supervisión y coordinación directa de las operaciones de mantenimiento electromecánico y cumplimiento de estándares de seguridad SST.',
        'Elaboración, difusión y control de matrices IPERC continuo, permisos de trabajo de alto riesgo (PETAR) y protocolos de bloqueo y etiquetado (LOTO).',
        'Impartición del programa de capacitaciones en riesgo eléctrico crítico, arco eléctrico (NFPA 70E) y maniobras seguras en subestaciones.',
        'Fiscalización del cumplimiento estricto de la Ley 29783 de SST, su reglamento D.S. 005-2012-TR y el código RESESATE.',
        'Liderazgo del comité de seguridad, simulacros de emergencia e investigación técnica de incidentes para eliminación de causas raíz.',
      ],
      keyProjects: [
        'Implementación integral del Sistema de Gestión de Seguridad y Salud en el Trabajo certificado bajo la norma ISO 45001:2018.',
        'Estandarización del procedimiento unificado de consignación de energía cero para salas de celdas y patios de maniobras.',
      ],
      verifiableAchievements: [
        'Récord de Cero Accidentes con Tiempo Perdido (LTI = 0) con más de 250,000 horas-hombre trabajadas en faenas de alto riesgo.',
        'Aprobación con calificación sobresaliente en fiscalizaciones inopinadas de SUNAFIL y auditorías de OSINERGMIN.',
      ],
      tags: ['SST / SSOMA', 'Operación & Mantenimiento', 'Ley 29783', 'RESESATE', 'LOTO', 'ISO 45001', 'Cero Accidentes'],
    },
    {
      id: 'exp-4',
      role: 'Especialista en Evaluación',
      company: 'Departamento de Gestión de Mantenimiento',
      period: 'Enero 2018 – Noviembre 2020',
      yearRange: '2018 — 2020',
      sector: 'Mantenimiento Industrial',
      summary: 'Evaluación técnica especializada, diagnóstico predictivo y análisis de condición de activos de potencia en el Departamento de Gestión de Mantenimiento, sustentando planes de reemplazo, confiabilidad y optimización del ciclo de vida.',
      responsibilities: [
        'Evaluación integral de la condición y cálculo del índice de salud (Health Index) de transformadores de potencia, interruptores y cables de energía.',
        'Interpretación técnica de ensayos físico-químicos y cromatografía de gases disueltos (DGA) en aceite dieléctrico bajo normas IEEE e IEC.',
        'Realización de análisis causa-raíz (RCA) ante eventos perturbadores y elaboración de informes periciales electromecánicos.',
        'Revisión, calibración y optimización de las frecuencias y rutinas preventivas en el sistema de gestión de mantenimiento (GMAO/ERP).',
        'Elaboración de informes técnicos de sustento para renovación de equipamiento ante comités de inversión y gerencia general.',
      ],
      keyProjects: [
        'Diseño y puesta en marcha del modelo de Health Index para transformadores de potencia basado en el estándar IEEE C57.104.',
        'Programa de evaluación y diagnóstico de condición técnica a más de 45 centros de transformación de media tensión.',
      ],
      verifiableAchievements: [
        'Detección oportuna de anomalías incipientes en 3 transformadores principales, previniendo fallas catastróficas y ahorros de más de $1.2M USD.',
        'Disminución del 28% en intervenciones no programadas gracias a la adopción de mantenimiento basado en la condición (CBM).',
      ],
      tags: ['Especialista en Evaluación', 'Gestión de Mantenimiento', 'Health Index', 'DGA Aceite', 'Análisis Causa Raíz', 'Confiabilidad'],
    },
    {
      id: 'exp-5',
      role: 'Especialista en Equipos de Patio de Alta Tensión (EPA)',
      company: 'Patios de Alta Tensión & Subestaciones de Potencia',
      period: 'Noviembre 2007 – Diciembre 2017',
      yearRange: '2007 — 2017',
      sector: 'Energía & Potencia',
      summary: 'Una década completa de especialización técnica de vanguardia en Equipos de Patio de Alta Tensión (EPA), liderando el mantenimiento mayor, pruebas dieléctricas, montaje, calibración y comisionamiento de transformadores de potencia, interruptores en SF6, seccionadores y pararrayos en 60 kV, 138 kV y 220 kV.',
      responsibilities: [
        'Mantenimiento electromecánico integral de Equipos de Patio de Alta Tensión (EPA): interruptores en SF6 y vacío, transformadores de potencia, TT/TCs y seccionadores.',
        'Ejecución de protocolos completos de pruebas dieléctricas: resistencia de aislamiento (Megger), factor de potencia / Tangente Delta, relación de transformación (TTR) y resistencia de devanados.',
        'Mantenimiento y sincronización de mandos mecánicos y oleoneumáticos de interruptores de alta tensión, medición de tiempos de apertura y cierre.',
        'Tratamiento térmico, desgasificación y termo-filtrado al vacío de aceite aislante dieléctrico en transformadores de potencia de gran envergadura.',
        'Medición de mallas de puesta a tierra (PAT) con telurómetro digital de 4 picas, termografía infrarroja y apriete con torquímetro dinamométrico.',
        'Comisionamiento técnico y pruebas de energización en vacío y en carga de nuevas bahías de subestación.',
      ],
      keyProjects: [
        'Overhaul y mantenimiento mayor a más de 80 interruptores de potencia en SF6 y 35 transformadores de potencia de hasta 60 MVA.',
        'Montaje y puesta en servicio de bahías de transformación de 60 kV y 220 kV conectadas al Sistema Eléctrico Interconectado Nacional.',
      ],
      verifiableAchievements: [
        '10 años ininterrumpidos como referente técnico en equipos de patio de alta tensión (EPA) con cero fallas post-mantenimiento.',
        'Optimización de los tiempos de intervención en paradas mayores de patio de alta tensión de 72h a 48h con máxima confiabilidad.',
      ],
      tags: ['Equipos de Patio AT (EPA)', '10 Años de Especialización', 'Transformadores Potencia', 'Interruptores SF6', 'Pruebas Dieléctricas', 'Alta Tensión'],
    },
    {
      id: 'exp-6',
      role: 'Técnico Docente Profesional',
      company: 'Institución de Formación Técnica Superior',
      period: 'Agosto 2007 – Noviembre 2007',
      yearRange: '2007',
      sector: 'Consultoría & Eficiencia',
      summary: 'Docencia técnica profesional especializada en la formación de futuros ingenieros y técnicos electricistas, dictando módulos avanzados de maquinaria eléctrica, sistemas de potencia, seguridad en maniobras de alta tensión y procedimientos de mantenimiento electromecánico.',
      responsibilities: [
        'Dictado de cátedras técnico-prácticas en máquinas eléctricas rotativas y estáticas (transformadores y motores de inducción).',
        'Instrucción en laboratorios de mediciones eléctricas, ensayos de rigidez dieléctrica y calibración de instrumentos.',
        'Desarrollo de manuales didácticos, guías de laboratorio y evaluaciones técnicas con casos de estudio de la industria real.',
        'Capacitación rigurosa en normas de seguridad eléctrica (CNE y RESESATE) y aplicación de las 5 Reglas de Oro de la electricidad.',
      ],
      keyProjects: [
        'Modernización del banco de pruebas de laboratorio para transformadores trifásicos y medición de resistencia de aislamiento.',
        'Capacitación y formación técnica a más de 60 nuevos especialistas y técnicos para el sector electromecánico.',
      ],
      verifiableAchievements: [
        'Reconocimiento institucional por excelencia académica y alta valoración en evaluaciones de desempeño pedagógico.',
        'Vinculación exitosa entre la teoría académica y las buenas prácticas operativas de la industria de potencia.',
      ],
      tags: ['Docencia Técnica', 'Máquinas Eléctricas', 'Sistemas de Potencia', 'Formación Profesional', 'CNE'],
    },
    {
      id: 'exp-7',
      role: 'Supervisor de Taller Eléctrico / Soporte de Planeamiento',
      company: 'Taller Eléctrico Central & Planeamiento de Mantenimiento',
      period: 'Agosto 2002 – Julio 2007',
      yearRange: '2002 — 2007',
      sector: 'Mantenimiento Industrial',
      summary: 'Supervisión de taller electromecánico y soporte técnico de planeamiento durante 5 años continuos, liderando la reparación, rebobinado, pruebas y mantenimiento de motores de media y baja tensión, tableros de control y programación de repuestos y cuadrillas operativas.',
      responsibilities: [
        'Supervisión y control técnico de los trabajos de taller eléctrico: reparación, bobinado y pruebas en vacío y con carga de motores eléctricos y generadores.',
        'Soporte clave en planeamiento de mantenimiento, elaboración de cronogramas en MS Project, control de órdenes de trabajo (OT) y gestión de repuestos críticos.',
        'Ensamblaje, cableado y pruebas operativas de tableros de fuerza y control, centros de control de motores (CCM) y bancos de condensadores.',
        'Control metrológico de aislamientos, salto de chispa, pruebas de rigidez dieléctrica y balanceo dinámico de componentes rotativos.',
        'Coordinación directa con jefaturas de operaciones industriales para la entrega técnica oportuna de equipos intervenidos.',
      ],
      keyProjects: [
        'Reestructuración operativa del taller eléctrico logrando una disminución del 30% en los tiempos de ciclo de reparación de motores.',
        'Implementación del sistema computarizado de gestión de inventarios y trazabilidad de activos de accionamiento motriz.',
      ],
      verifiableAchievements: [
        'Más de 400 motores eléctricos y generadores reparados y certificados bajo estándares de aislamiento térmico clase F y H.',
        'Inicio ejemplar de trayectoria profesional con reconocimientos sucesivos por orden técnico y planeamiento riguroso.',
      ],
      tags: ['Taller Eléctrico', 'Planeamiento de Mantenimiento', 'Motores Eléctricos', 'CCM', 'Bobinado', 'Inicio Trayectoria 2002'],
    },
  ],

  fieldExperiences: [
    {
      id: 'exp-campo-01',
      code: 'Experiencia_Campo_01',
      title: 'Diagnóstico Termográfico y Pruebas en Transformadores de Potencia',
      category: 'Eficiencia y Pruebas',
      description: 'Inspección termográfica infrarroja de alta sensibilidad en bornes de alta tensión, radiadores, cuba y conexiones principales de transformadores de potencia, identificando gradientes térmicos anómalos.',
      fieldWorkDetails: 'Se ejecutó el barrido térmico bajo condiciones nominales de carga en patio de llaves, analizando la emisividad de los metales y registrando anomalías en conectores bimetálicos para evitar puntos calientes que comprometan el aislamiento.',
      equipmentUsed: ['Cámara Termográfica Calibrada Fluke', 'Pirómetro Láser', 'Multímetro Industrial TRMS'],
      normativeStandards: ['Estándar IEEE C57.104', 'Norma IEC 60076', 'NFPA 70B Mantenimiento Eléctrico'],
      locationContext: 'Subestación de Potencia Principal — Patio de Llaves AT/MT',
      safetyProtocol: 'Distancias mínimas de seguridad dieléctrica respetadas y uso de EPP antiarco eléctrico (Arc Flash Category 4).',
      deliverable: 'Informe termográfico con termogramas, histogramas de temperatura, criticidad y orden de mantenimiento correctivo prioritario.',
      imageAlt: 'Ingeniero realizando inspección y medición en transformador de potencia en subestación eléctrica',
    },
    {
      id: 'exp-campo-02',
      code: 'Experiencia_Campo_02',
      title: 'Mantenimiento Preventivo y Limpieza Dieléctrica en Subestación AT/MT',
      category: 'Energía y AT',
      description: 'Mantenimiento electromecánico integral de patio de llaves, incluyendo limpieza dieléctrica de aisladores poliméricos y de porcelana, ajuste de torquímetros en barras y verificación de mecanismos de accionamiento.',
      fieldWorkDetails: 'Desconexión programada, maniobras de seccionamiento coordinadas con el centro de control, aplicación rigurosa de las 5 Reglas de Oro de la electricidad y deshumidificación de gabinetes de control.',
      equipmentUsed: ['Dieléctrico de alta rigidez para desengrase', 'Torquímetro calibrado en Nm', 'Pértigas de maniobra telescópicas'],
      normativeStandards: ['Código Nacional de Electricidad (CNE)', 'IEEE 693', 'RESESATE'],
      locationContext: 'Patio de Maniobras de Media Tensión 22.9 kV',
      safetyProtocol: 'Permiso de Trabajo de Alto Riesgo (PETAR), charla de seguridad de 5 minutos y delimitación perimetral con cinta de seguridad.',
      deliverable: 'Ficha técnica de torque, estado de aislamiento de barras y certificado de operatividad de equipos de corte.',
      imageAlt: 'Mantenimiento preventivo y limpieza de aisladores y barras en patio de maniobras de subestación',
    },
    {
      id: 'exp-campo-03',
      code: 'Experiencia_Campo_03',
      title: 'Supervisión de Seguridad y Control Ambiental SSOMA en Faena Operativa',
      category: 'SSOMA y Seguridad',
      description: 'Liderazgo y supervisión directa de las condiciones de seguridad ocupacional y ambiental durante trabajos críticos de izaje y maniobras eléctricas en proximidad a líneas energizadas.',
      fieldWorkDetails: 'Verificación en campo de las competencias del personal, inspección pre-uso de arneses y líneas de vida dieléctricas, y monitoreo de bandejas de contención secundaria para evitar goteos de lubricantes.',
      equipmentUsed: ['Detector de tensión acústico-óptico', 'Sonómetro integrador Tipo 2', 'Bandejas herméticas antiderrames'],
      normativeStandards: ['Ley 29783 de Seguridad y Salud en el Trabajo', 'D.S. 005-2012-TR', 'ISO 45001:2018'],
      locationContext: 'Zona de Obras de Tendido y Montaje Electromecánico',
      safetyProtocol: 'Inspección de 100% de EPPs dieléctricos, verificación de pruebas de rigidez dieléctrica de guantes y botas.',
      deliverable: 'Checklist de supervisión SSOMA diario, reporte de condiciones subestándar corregidas y cero incidentes reportados.',
      imageAlt: 'Supervisión en terreno con casco, chaleco y equipo de protección en faena electromecánica',
    },
    {
      id: 'exp-campo-04',
      code: 'Experiencia_Campo_04',
      title: 'Pruebas Eléctricas de Rigidez Dieléctrica y Resistencia de Aislamiento',
      category: 'Eficiencia y Pruebas',
      description: 'Determinación de la integridad del sistema de aislamiento en devanados primarios y secundarios de transformadores mediante inyección de tensión continua controlada (Megóhmetro / Hi-Pot).',
      fieldWorkDetails: 'Medición de resistencia de aislamiento con cálculo automático de los índices de polarización (IP) y absorción dieléctrica (DAR) para evaluar el envejecimiento y grado de humedad del aislamiento sólido y líquido.',
      equipmentUsed: ['Megóhmetro digital programable hasta 5 kV / 10 kV', 'Termohigrómetro ambiental', 'Cables de prueba apantallados'],
      normativeStandards: ['IEEE Std 43', 'IEEE Std C57.12.90', 'Norma IEC 60085'],
      locationContext: 'Laboratorio de Campo y Bahía de Transformador de Potencia',
      safetyProtocol: 'Descarga a tierra obligatoria de devanados tras cada inyección de tensión durante el doble del tiempo de prueba.',
      deliverable: 'Curvas de resistencia de aislamiento versus tiempo, cálculo de IP/DAR y dictamen de confiabilidad operativa.',
      imageAlt: 'Ingeniero conectando cables de prueba dieléctrica a bornes de equipo de potencia',
    },
    {
      id: 'exp-campo-05',
      code: 'Experiencia_Campo_05',
      title: 'Procedimiento LOTO y Verificación de Ausencia de Tensión',
      category: 'SSOMA y Seguridad',
      description: 'Implementación del procedimiento de consignación de energía cero (Lockout / Tagout), bloqueo físico de mandos de interruptores y colocación de tarjetas de peligro personalizadas.',
      fieldWorkDetails: 'Apertura de interruptores con corte visible o indicación fehaciente, descarga de energía residual en bancos capacitivos, comprobación de ausencia de tensión con detector bipolar y cortocircuito a tierra.',
      equipmentUsed: ['Candados de seguridad dieléctricos LOTO', 'Tarjetas de advertencia OSHA', 'Detector de tensión de media tensión por contacto'],
      normativeStandards: ['OSHA 1910.147 Control de Energía Peligrosa', 'NFPA 70E', 'CNE Suministro'],
      locationContext: 'Sala de Celdas de Media Tensión y Tableros de Distribución',
      safetyProtocol: 'Una persona, un candado. Llave bajo custodia personal intransferible del líder de trabajo en caliente/frío.',
      deliverable: 'Hoja de consignación y des-consignación firmada por jefe de turno y líder de maniobra.',
      imageAlt: 'Aplicación de candados de bloqueo y tarjetas LOTO en manija de interruptor de potencia',
    },
    {
      id: 'exp-campo-06',
      code: 'Experiencia_Campo_06',
      title: 'Gestión Ambiental y Control de Residuos Peligrosos en Instalaciones',
      category: 'Sostenibilidad Ambiental',
      description: 'Monitoreo ambiental de campo y fiscalización de fosas de retención de aceite de transformadores, verificando sistemas separadores de agua-aceite y estanqueidad para evitar contaminación freática.',
      fieldWorkDetails: 'Toma de muestras de suelo perimetral, verificación de kit antiderrames de hidrocarburos, auditoría al almacenamiento temporal de residuos peligrosos (trapos impregnados, filtros y envases químicos).',
      equipmentUsed: ['Kit de muestreo ambiental', 'Manta oleofílica absorbente', 'Kit de emergencia antiderrames 55 galones'],
      normativeStandards: ['Ley General del Ambiente N° 28611', 'D.L. 1278 Gestión Integral de Residuos Sólidos', 'OEFA'],
      locationContext: 'Área perimetral de subestación y fosa de captación de aceite',
      safetyProtocol: 'Uso de guantes de nitrilo químico, mascarilla para vapores orgánicos y lentes de seguridad contra salpicaduras.',
      deliverable: 'Manifiesto de residuos peligrosos trazables y reporte de inspección ambiental preventiva sin pasivos.',
      imageAlt: 'Revisión y muestreo ambiental en zona de contención de hidrocarburos y residuos industriales',
    },
    {
      id: 'exp-campo-07',
      code: 'Experiencia_Campo_07',
      title: 'Medición de Resistividad del Terreno y Resistencia de Puesta a Tierra (PAT)',
      category: 'Energía y AT',
      description: 'Medición rigurosa de la resistencia de difusión de la malla de puesta a tierra principal y pozos a tierra auxiliares utilizando el método de caída de potencial (Wenner / Schlumberger).',
      fieldWorkDetails: 'Dispersión de picas de corriente y potencial a distancias normalizadas (62% de distancia crítica), registro de resistividad aparente para cálculo de tensiones de paso y de contacto en caso de falla a tierra.',
      equipmentUsed: ['Telurómetro digital de 4 bornes de alta precisión', 'Carretes de cable calibrados de 100m', 'Picas de acero cobreado'],
      normativeStandards: ['IEEE Std 81 Guía de Medición de Puesta a Tierra', 'IEEE Std 80 Seguridad en Subestaciones', 'CNE'],
      locationContext: 'Malla de Puesta a Tierra de Subestación y Patios de Maniobra',
      safetyProtocol: 'Comprobación de ausencia de corrientes de fuga elevadas en el conductor de enlace previo a la desconexión del puente de prueba.',
      deliverable: 'Protocolo de prueba de puesta a tierra con firma de ingeniero colegiado habilitado y curvas de caída de potencial.',
      imageAlt: 'Ingeniero clavando picas y calibrando telurómetro digital en terreno abierto para medición PAT',
    },
    {
      id: 'exp-campo-08',
      code: 'Experiencia_Campo_08',
      title: 'Auditoría Interna de Seguridad y Estándares SIG en Terreno',
      category: 'SSOMA y Seguridad',
      description: 'Ejecución de auditoría técnica in-situ para evaluar la conformidad del sistema integrado de gestión (ISO 9001, ISO 14001, ISO 45001), entrevistando a brigadas y revisando evidencias documentales.',
      fieldWorkDetails: 'Verificación del estado físico de pértigas de maniobra, banquetas dieléctricas, extintores de CO2 presurizados y certificación vigente de equipos de medición según programa de calibración metrológica.',
      equipmentUsed: ['Checklist de auditoría digital SIG', 'Dinamómetro para arneses', 'Probador de continuidad de puesta a tierra'],
      normativeStandards: ['ISO 19011 Directrices para Auditoría de Sistemas de Gestión', 'ISO 45001:2018', 'ISO 14001:2015'],
      locationContext: 'Campamento Operativo, Almacén de Herramientas y Sala Eléctrica',
      safetyProtocol: 'Ingreso con EPP reglamentario y autorización formal de la jefatura de planta.',
      deliverable: 'Informe formal de auditoría interna con hallazgos (conformidades, fortalezas y oportunidades de mejora identificadas).',
      imageAlt: 'Auditor revisando tablero de control, documentación de seguridad y señalética en sala eléctrica',
    },
    {
      id: 'exp-campo-09',
      code: 'Experiencia_Campo_09',
      title: 'Pruebas Funcionales a Relés de Protección y Celdas de Media Tensión',
      category: 'Energía y AT',
      description: 'Inyección secundaria de corriente y tensión a relés numéricos de protección (50/51 sobrecorriente, 50N/51N tierra, 27/59 tensión, 87 diferencial) para verificar curvas de disparo y selectividad.',
      fieldWorkDetails: 'Conexión a bloques de prueba test-switch en frente de celda, simulación de fallas trifásicas y monofásicas a tierra mediante maleta de inyección y verificación de tiempos de respuesta en milisegundos.',
      equipmentUsed: ['Maleta de inyección secundaria trifásica Omicron / Doble', 'Software de análisis de protecciones', 'Cronómetro digital de alta precisión'],
      normativeStandards: ['IEEE C37.90', 'IEC 60255 Relés de Protección', 'Manuales del fabricante SEL / Schneider / ABB'],
      locationContext: 'Sala de Control y Celdas Metalclad de Media Tensión',
      safetyProtocol: 'Aislamiento de disparo a interruptores principales durante pruebas preliminares para evitar apertura intempestiva de alimentadores en servicio.',
      deliverable: 'Protocolo de inyección secundaria con curvas tiempo-corriente superpuestas y validación de tiempos de disparo.',
      imageAlt: 'Ingeniero operando equipo de inyección secundaria frente a gabinete de celdas y relés numéricos',
    },
    {
      id: 'exp-campo-10',
      code: 'Experiencia_Campo_10',
      title: 'Comisionamiento Final, Puesta en Servicio y Balance de Cargas',
      category: 'Eficiencia y Pruebas',
      description: 'Actividades de comisionamiento pre-energización y energización en vacío y con carga de subestación, verificando secuencia de fases, relación de transformación y balance de corrientes.',
      fieldWorkDetails: 'Energización escalonada, toma de parámetros eléctricos instantáneos (V, I, kW, kVAR, FP, THD%), confirmación de sentido de giro de motores acoplados y registro de consumos iniciales para auditoría base.',
      equipmentUsed: ['Analizador de Redes Eléctricas Clase A', 'Fasímetro / Secuencímetro digital', 'Cámara de inspección técnica'],
      normativeStandards: ['IEEE 3007.3 Práctica recomendada de comisionamiento', 'CNE', 'ISO 50001'],
      locationContext: 'Subestación Nueva — Sala Eléctrica y Tablero General de Distribución',
      safetyProtocol: 'Plan de energización aprobado, personal no esencial evacuado y presencia de brigada de respuesta ante contingencias.',
      deliverable: 'Acta formal de puesta en servicio (comisionamiento técnico concluido) y línea base energética para monitoreo continuo.',
      imageAlt: 'Equipo de ingenieros y técnicos completando maniobras de energización frente a celda de distribución',
    },
  ] as FieldExperience[],

  academicFormation: [
    {
      degree: 'Ingeniero Mecánico Electricista',
      institution: 'Universidad Nacional / Reconocida por SUNEDU (Perú)',
      period: 'Título Profesional & Grado Académico',
      details: 'Colegiado y Habilitado en el Colegio de Ingenieros del Perú (CIP). Formación integral en sistemas de potencia, generación, conversión electromecánica y redes de alta y media tensión.',
      type: 'Pregrado / Título Profesional',
    },
    {
      degree: 'Magíster en Gestión / Dirección Empresarial',
      institution: 'Escuela de Posgrado',
      period: 'Grado de Maestría',
      details: 'Especialización en dirección estratégica de operaciones, gestión de proyectos de infraestructura, liderazgo de equipos multidisciplinarios y optimización de recursos corporativos.',
      type: 'Posgrado / Maestría',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      title: 'Auditor Interno en Sistemas Integrados de Gestión (SIG)',
      issuer: 'Organismo de Certificación & Capacitación Técnica',
      date: 'Febrero 2025',
      category: 'Sistemas de Gestión',
      description: 'Auditoría interna bajo los estándares internacionales ISO 9001:2015 (Calidad), ISO 14001:2015 (Medio Ambiente) e ISO 45001:2018 (Seguridad y Salud Ocupacional). Directrices ISO 19011.',
      credentialType: 'Auditor Interno SIG',
      verified: true,
    },
    {
      id: 'cert-2',
      title: 'Especialización en Eficiencia Energética y Energías Renovables',
      issuer: 'Entidad Especializada en Energía & Sostenibilidad',
      date: 'Certificación Profesional',
      category: 'Energía',
      description: 'Evaluación y auditoría de sistemas de energía térmica y eléctrica, integración de generación solar fotovoltaica, balances de masa y energía, y formulación de proyectos renovables.',
      credentialType: 'Certificación Profesional',
      verified: true,
    },
    {
      id: 'cert-3',
      title: 'Supervisión y Fiscalización Ambiental',
      issuer: 'Instituto de Formación Técnica Ambiental',
      date: 'Certificación Profesional',
      category: 'Medio Ambiente',
      description: 'Fiscalización y vigilancia del cumplimiento de Instrumentos de Gestión Ambiental (IGA), normativas de OEFA, planes de manejo ambiental y control de efluentes y emisiones.',
      credentialType: 'Certificación Profesional',
      verified: true,
    },
    {
      id: 'cert-4',
      title: 'Supervisor SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente)',
      issuer: 'Centro Especializado en Gestión de Riesgos',
      date: 'Certificación Profesional',
      category: 'Seguridad Industrial',
      description: 'Gestión operativa de seguridad en faenas industriales y mineras, implementación de planes anuales SST, investigación de incidentes y fiscalización según la Ley N° 29783.',
      credentialType: 'Certificación Profesional',
      verified: true,
    },
    {
      id: 'cert-5',
      title: 'Economía Circular y Desarrollo Sostenible',
      issuer: 'Programa de Sostenibilidad y Medio Ambiente',
      date: 'Certificación Profesional',
      category: 'Medio Ambiente',
      description: 'Diseño de estrategias circulares, ciclo de vida de materiales, optimización de recursos productivos y alineación con los Objetivos de Desarrollo Sostenible (ODS).',
      credentialType: 'Diplomado / Especialización',
      verified: true,
    },
    {
      id: 'cert-6',
      title: 'Identificación de Peligros, Evaluación y Control de Riesgos (IPERC)',
      issuer: 'Entidad Especializada en Seguridad Ocupacional',
      date: 'Certificación Profesional',
      category: 'Seguridad Industrial',
      description: 'Metodología avanzada para la elaboración y actualización de matrices IPERC continuo y línea base, jerarquía de controles operacionales y gestión de energías peligrosas.',
      credentialType: 'Certificación Profesional',
      verified: true,
    },
  ],

  skillsData: [
    {
      category: 'Competencias Técnicas y de Ingeniería',
      skills: [
        'Diagnóstico electromecánico y termografía en transformadores de potencia',
        'Pruebas dieléctricas (Megger, TTR, Hi-Pot, resistencia de devanados)',
        'Cálculo de mallas de puesta a tierra y medición con telurómetro (IEEE 81)',
        'Coordinación de protecciones y pruebas a relés multifunción',
        'Auditorías de eficiencia energética en sistemas de fuerza y motrices',
        'Diseño y supervisión de instalaciones eléctricas en AT, MT y BT',
      ],
    },
    {
      category: 'Herramientas y Software Técnico',
      skills: [
        'Software de simulación eléctrica y flujo de cargas (ETAP / DIgSILENT)',
        'AutoCAD Eléctrico para ingeniería de detalle y diagramas unifilares',
        'Software de análisis termográfico (Fluke SmartView / Connect)',
        'Modelamiento y análisis en Excel Avanzado para balances de carga',
        'MS Project para planificación y control de paradas de planta',
        'Software de parametrización de relés numéricos (AcSELerator, etc.)',
      ],
    },
    {
      category: 'Normativa, Compliance y Entes Reguladores',
      skills: [
        'Código Nacional de Electricidad (CNE Suministro y Utilización)',
        'Estándares OSINERGMIN para instalaciones y redes eléctricas',
        'Reglamento de Seguridad y Salud en el Trabajo con Electricidad (RESESATE)',
        'Normativa ambiental OEFA, MINAM y D.L. 1278 (Residuos Sólidos)',
        'Ley 29783 de Seguridad y Salud en el Trabajo y D.S. 005-2012-TR',
        'Normas técnicas internacionales IEEE, IEC y NFPA 70E / 70B',
      ],
    },
    {
      category: 'Análisis y Elaboración de Documentos Técnicos',
      skills: [
        'Elaboración de Informes Técnicos de Mantenimiento y Comisionamiento',
        'Formulación de Instrumentos de Gestión Ambiental (IGA) y Planes de Contingencia',
        'Confección de matrices IPERC y Procedimientos Escritos de Trabajo Seguro (PETS)',
        'Elaboración de protocolos de pruebas de aislamiento y puesta a tierra con valor legal',
        'Informes periciales de fallas eléctricas y análisis causa-raíz (RCA)',
        'Planes de ecoeficiencia y auditoría energética formal para gerencia',
      ],
    },
    {
      category: 'Gestión de Proyectos y Operaciones',
      skills: [
        'Gestión de paradas programadas de planta e intervenciones de emergencia',
        'Control presupuestal y estimación de costos en proyectos electromecánicos',
        'Evaluación técnico-económica de proyectos de eficiencia energética (VAN, TIR, Payback)',
        'Supervisión y fiscalización técnica de contratistas en campo',
        'Auditorías internas bajo normas ISO 9001, ISO 14001, ISO 45001 e ISO 50001',
      ],
    },
    {
      category: 'Liderazgo, SSOMA y Trabajo en Terreno',
      skills: [
        'Cultura de Cero Accidentes y liderazgo visible en seguridad operacional',
        'Capacitación técnica a cuadrillas operativas en riesgo eléctrico crítico',
        'Gestión de crisis y respuesta ante contingencias ambientales o electromecánicas',
        'Comunicación asertiva con directores de planta, auditores y entes fiscalizadores',
        'Coordinación multidisciplinaria y resolución ágil de problemas en terreno',
      ],
    },
  ],

  featuredProjects: [
    {
      id: 'proj-1',
      title: 'Auditoría Energética Integral y Corrección de Factor de Potencia en Planta Industrial',
      clientType: 'Sector Manufactura / Gran Industria',
      sector: 'Eficiencia Energética & ISO 50001',
      challenge: 'La planta presentaba constantes penalizaciones mensuales por energía reactiva, pérdidas por efecto Joule en alimentadores y un alto consumo en el sistema de aire comprimido y motores de inducción.',
      solution: 'Se ejecutó una auditoría energética nivel II con medición de parámetros en bornes de transformadores de 1500 kVA, análisis de armónicos, rediseño de bancos automáticos con reactancias de desintonización y reemplazo progresivo de motores por tecnología IE3/IE4.',
      results: [
        'Eliminación del 100% de recargos por energía reactiva ante la empresa concesionaria.',
        'Ahorro neto anual comprobado del 18.4% en la factura eléctrica global de la planta.',
        'Reducción calculada de 142 toneladas de CO2 equivalente al año.',
        'Retorno de la inversión (Payback) logrado en tan solo 11 meses.',
      ],
      metrics: [
        { label: 'Ahorro Eléctrico Anual', value: '18.4%' },
        { label: 'Recargo Reactiva', value: '0 USD (Eliminado)' },
        { label: 'Reducción Emisiones', value: '142 tCO2e/año' },
        { label: 'Payback del Proyecto', value: '11 Meses' },
      ],
      tags: ['ISO 50001', 'Factor de Potencia', 'Auditoría Energética', 'Descarbonización'],
    },
    {
      id: 'proj-2',
      title: 'Comisionamiento y Pruebas Dieléctricas de Subestación de Media Tensión 22.9 kV',
      clientType: 'Sector Minero & Infraestructura',
      sector: 'Energía & Mantenimiento AT/MT',
      challenge: 'Puesta en marcha crítica de una nueva subestación de 10 MVA en condiciones geográficas de altura, con ventana de tiempo restringida y exigencia estricta de cero fallas operativas.',
      solution: 'Despliegue de cuadrilla especializada para pruebas eléctricas de aislamiento (Megger hasta 5 kV), relación de transformación TTR, medición de resistencia de contactos, calibración de relés de protección y medición del sistema de malla a tierra con telurómetro.',
      results: [
        'Energización exitosa en la primera maniobra sin ningún evento de disparo intempestivo.',
        'Identificación previa y corrección oportuna de dos discrepancias en conexionado de transformadores de corriente.',
        'Valor de puesta a tierra certificado en 2.8 ohmios (muy por debajo del límite normativo de 5 ohmios).',
        'Aprobación unánime del acta de comisionamiento por parte de la supervisión de obra.',
      ],
      metrics: [
        { label: 'Capacidad Subestación', value: '10 MVA' },
        { label: 'Resistencia Malla PAT', value: '2.8 Ω' },
        { label: 'Disparos en Energización', value: '0 Eventos' },
        { label: 'Horas Hombre Sin Incidentes', value: '1,450 HHT' },
      ],
      tags: ['Subestación 22.9 kV', 'Comisionamiento', 'Pruebas TTR', 'Puesta a Tierra'],
    },
    {
      id: 'proj-3',
      title: 'Implementación del Plan SSOMA y Fiscalización Ambiental en Obra Electromecánica',
      clientType: 'Infraestructura Energética / Concesión',
      sector: 'SSOMA & Sostenibilidad Ambiental',
      challenge: 'Garantizar el estricto cumplimiento normativo de seguridad con 45 trabajadores en maniobras continuas en patio de llaves energizado y evitar impactos ambientales por manipulación de aceites dieléctricos.',
      solution: 'Elaboración de matrices IPERC de línea base, aplicación rigurosa de permisos de trabajo PETAR, simulacros de rescate en altura y derrame químico, y habilitación de almacén temporal de residuos peligrosos con certificación de operador autorizado.',
      results: [
        'Cero accidentes incapacitantes y cero eventos ambientales adversos durante 14 meses de ejecución.',
        'Calificación sobresaliente en la auditoría inopinada efectuada por fiscalizadores de OEFA y SUNAFIL.',
        '100% del aceite dieléctrico residual tratado y valorizado conforme a directrices de economía circular.',
      ],
      metrics: [
        { label: 'Índice de Frecuencia Accidentes', value: '0.00' },
        { label: 'Cumplimiento Auditoría OEFA', value: '100%' },
        { label: 'Aceite Dieléctrico Trazado', value: '100%' },
        { label: 'Personal Capacitado', value: '45 Operarios' },
      ],
      tags: ['SSOMA', 'Fiscalización OEFA', 'Cero Accidentes', 'Economía Circular'],
    },
  ],
};
