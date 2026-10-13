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
    subtitle: 'Consultor Senior con 18 Años de Experiencia en Mantenimiento en AT, Energía y Eficiencia Energética',
    tagline: '18 años de liderazgo técnico en mantenimiento de alta tensión, auditorías de eficiencia energética y gestión de activos de potencia.',
    valueProposition: 'Con más de 18 años de trayectoria especializada en mantenimiento en alta tensión (AT/MT), consultoría en energía y eficiencia energética, integro la excelencia técnica operativa con una rigurosa visión de sostenibilidad ambiental y seguridad integral (SSOMA), optimizando el consumo y asegurando estricto cumplimiento normativo ante OSINERGMIN y OEFA.',
    email: 'especialistascat@gmail.com',
    phone: '+51 987 654 321',
    whatsapp: '51987654321',
    location: 'Lima, Perú — Cobertura operativa a nivel nacional',
    linkedin: 'https://linkedin.com/in/richter-gomez-sierralta',
    availability: 'Disponible para Consultorías, Auditorías Energéticas y Supervisión Técnica de Obras',
  },

  heroStats: [
    { label: 'Experiencia Profesional', value: '+18 Años', sub: 'En mantenimiento AT, energía y eficiencia energética' },
    { label: 'Subestaciones y Obras', value: '+50 Proyectos', sub: 'AT, MT, BT y renovables supervisados' },
    { label: 'Ahorro Energético Logrado', value: 'Hasta 22%', sub: 'En diagnósticos de eficiencia industrial' },
    { label: 'Índice de Seguridad SSOMA', value: '0 Accidentes', sub: 'Horas hombre con cero incapacitantes' },
  ],

  profileSummary: {
    executiveOverview: `Ingeniero Mecánico Electricista con grado de Magíster en Gestión y más de 18 años de experiencia profesional especializada en el campo de mantenimiento en alta tensión (AT/MT), consultoría en energía y eficiencia energética, así como en supervisión SSOMA y fiscalización ambiental en los sectores de minería, industria y generación/transmisión eléctrica. Especialista en evaluación y supervisión de infraestructura eléctrica de alta, media y baja tensión (AT/MT/BT), auditorías energéticas según ISO 50001, diagnóstico predictivo de transformadores e interruptores de potencia, e implementación de sistemas integrados de gestión (SIG ISO 9001, ISO 14001, ISO 45001).`,
    coreStrengths: [
      'Ingeniería electromecánica rigurosa y diagnóstico predictivo en subestaciones de potencia.',
      'Supervisión y fiscalización ambiental en terreno con cumplimiento estricto ante OEFA y MINAM.',
      'Liderazgo en seguridad industrial y matrices IPERC en operaciones de alto riesgo eléctrico.',
      'Diseño y ejecución de auditorías de eficiencia energética para plantas industriales y mineras.',
      'Elaboración de Instrumentos de Gestión Ambiental (IGA), planes de contingencia y descarbonización.',
      'Acompañamiento técnico en comisionamiento, pruebas de aislamiento y puesta en servicio.',
    ],
    sectors: [
      { name: 'Generación y Transmisión Eléctrica', icon: 'Zap' },
      { name: 'Minería y Operaciones de Superficie', icon: 'Mountain' },
      { name: 'Industria Manufacturera & Procesos', icon: 'Factory' },
      { name: 'Energías Renovables (Solar & Eólica)', icon: 'Sun' },
      { name: 'Infraestructura & Subestaciones AT/MT', icon: 'Cpu' },
      { name: 'Auditoría & Consultoría Ambiental', icon: 'Leaf' },
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
      title: 'Gestión Integral SSOMA & Riesgo Eléctrico',
      icon: 'ShieldCheck',
      color: 'rose',
      description: 'Liderazgo en seguridad y salud ocupacional para trabajos con riesgo eléctrico crítico. Implementación de matrices IPERC continuo, procedimientos LOTO y cultura cero accidentes.',
      highlights: ['Cumplimiento Ley 29783 y RESESATE', 'Bloqueo, tarjeteo y pruebas de ausencia de tensión (LOTO)', 'Auditorías internas bajo ISO 45001 e ISO 14001'],
    },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Consultor Senior en Mantenimiento en AT, Eficiencia Energética y Energía',
      company: 'Consultoría Especializada & Proyectos Industriales',
      period: '2022 — Presente',
      yearRange: '2022 - 2026',
      sector: 'Consultoría & Eficiencia',
      summary: 'Liderazgo técnico en consultorías estratégicas de energía, diagnóstico integral de activos en alta tensión (AT/MT) y programas de auditoría de eficiencia energética bajo norma ISO 50001 para plantas minero-industriales.',
      responsibilities: [
        'Realización de auditorías energéticas integrales en alta, media y baja tensión conforme a directrices ISO 50001.',
        'Diagnóstico electromecánico y termográfico predictivo en transformadores de potencia de alta tensión y celdas.',
        'Desarrollo de planes de descarbonización y optimización de facturación eléctrica en mercado libre.',
        'Elaboración de matrices de cumplimiento normativo y fiscalización preventiva ante OSINERGMIN y OEFA.',
      ],
      keyProjects: [
        'Optimización del factor de potencia y balance de cargas en complejo industrial minero-metalúrgico.',
        'Auditoría y plan de ecoeficiencia para reducción de 18% en consumo de energía eléctrica anual.',
      ],
      verifiableAchievements: [
        'Reducción verificable de penalizaciones por energía reactiva a 0% mediante bancos automáticos compensados.',
        'Elaboración de 25+ expedientes técnicos y auditorías energéticas aprobadas sin observaciones.',
      ],
      tags: ['Mantenimiento AT', 'ISO 50001', 'Eficiencia Energética', 'Termografía', 'OSINERGMIN'],
    },
    {
      id: 'exp-2',
      role: 'Especialista en Mantenimiento de Subestaciones AT/MT y Supervisión SSOMA',
      company: 'Obras de Infraestructura Eléctrica y Montaje en Alta Tensión',
      period: '2017 — 2022',
      yearRange: '2017 - 2022',
      sector: 'Energía & Potencia',
      summary: 'Dirección operativa en mantenimiento electromecánico de patios de llaves, transformadores de potencia, interruptores en SF6 y supervisión integral de seguridad SSOMA y gestión ambiental.',
      responsibilities: [
        'Supervisión y ejecución de planes de mantenimiento preventivo y correctivo en subestaciones de 60 kV y 22.9 kV.',
        'Implementación y control estricto de matrices IPERC y protocolos de bloqueo y etiquetado (LOTO) en maniobras de alto riesgo.',
        'Monitoreo del plan de manejo ambiental, control de derrames de aceites dieléctricos y disposición de residuos peligrosos.',
        'Ensayos de rigidez dieléctrica, factor de potencia y análisis físico-químico y cromatográfico de aceite aislante.',
      ],
      keyProjects: [
        'Ampliación y modernización de subestación de potencia 60/22.9 kV con más de 180,000 horas hombre.',
        'Montaje de celdas GIS, transformadores de potencia de 10 MVA y pruebas de aislamiento.',
      ],
      verifiableAchievements: [
        'Récord de 0 accidentes con tiempo perdido (LTI = 0) durante 5 años continuos en operaciones de alto riesgo eléctrico.',
        '100% de cumplimiento en auditorías y fiscalizaciones inopinadas de OEFA y OSINERGMIN.',
      ],
      tags: ['Subestaciones AT/MT', 'SSOMA', 'LOTO', 'ISO 45001', 'Aceite Dieléctrico', 'OEFA'],
    },
    {
      id: 'exp-3',
      role: 'Ingeniero de Operaciones, Mantenimiento en Alta Tensión y Pruebas Dieléctricas',
      company: 'Servicios de Ingeniería de Potencia y Alta Tensión',
      period: '2012 — 2017',
      yearRange: '2012 - 2017',
      sector: 'Energía & Potencia',
      summary: 'Ejecución y supervisión de protocolos de pruebas eléctricas de diagnóstico para transformadores de potencia, seccionadores tripolares y sistemas de puesta a tierra en instalaciones de alta y media tensión.',
      responsibilities: [
        'Ejecución de pruebas eléctricas a transformadores: resistencia de aislamiento (Megger), relación de transformación (TTR) y devanados.',
        'Mantenimiento mayor a interruptores de potencia en SF6 y vacío, mandos motorizados y bancos de condensadores.',
        'Pruebas y parametrización de relés numéricos de protección secundaria (50/51, 50N/51N, 87) en salas de control.',
        'Medición de mallas de puesta a tierra (PAT) con telurómetro digital de 4 picas bajo norma IEEE 81.',
      ],
      keyProjects: [
        'Parada de planta anual y comisionamiento de transformadores de potencia en minería y plantas de cemento.',
        'Optimización de sistemas de puesta a tierra logrando valores inferiores a 3 ohmios en terrenos rocosos.',
      ],
      verifiableAchievements: [
        'Disminución del 35% en tiempos de desconexión mediante cronogramas de mantenimiento preventivo optimizados.',
        'Detección oportuna de anomalías térmicas y dieléctricas en bornes y conmutadores bajo carga (LTC).',
      ],
      tags: ['Mantenimiento AT', 'Pruebas TTR / Megger', 'Puesta a Tierra', 'Relés de Protección', 'SF6'],
    },
    {
      id: 'exp-4',
      role: 'Ingeniero de Pruebas de Potencia, Diagnóstico de Subestaciones y Eficiencia Energética',
      company: 'Ingeniería Electromecánica & Fiscalización',
      period: '2008 — 2012',
      yearRange: '2008 - 2012',
      sector: 'Consultoría & Eficiencia',
      summary: 'Inicio y consolidación de la trayectoria en diagnóstico de redes eléctricas, análisis de perfiles de consumo, auditorías de fuerza motriz e inspección técnica de subestaciones industriales.',
      responsibilities: [
        'Cálculo de flujo de cargas, cortocircuito y dimensionamiento de alimentadores en media y baja tensión.',
        'Inspecciones técnicas de seguridad en instalaciones eléctricas bajo el Código Nacional de Electricidad (CNE).',
        'Medición de variables eléctricas con analizadores de redes para balance de cargas y detección de armónicos.',
        'Elaboración de procedimientos de trabajo seguro y capacitación técnica a brigadas operativas.',
      ],
      keyProjects: [
        'Reingeniería y balance de distribución de potencia en complejo industrial manufacturero.',
        'Implementación de sistemas de monitoreo y bancos automáticos para mitigación de energía reactiva.',
      ],
      verifiableAchievements: [
        'Ahorro del 20% en costos de facturación eléctrica en clientes industriales mediante compensación reactiva.',
        'Aprobación exitosa de todas las actas de fiscalización técnica de OSINERGMIN sin observaciones.',
      ],
      tags: ['Inicio Trayectoria 2008', 'CNE', 'Factor de Potencia', 'Subestaciones', 'Eficiencia Energética'],
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
