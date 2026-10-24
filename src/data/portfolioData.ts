export interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  image: string;
  caption: string;
  captionEn: string;
  specs: { label: string; value: string }[];
  description: string;
  descriptionEn: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  roleEn: string;
  location: string;
  period: string;
  periodEn: string;
  bullets: string[];
  bulletsEn: string[];
  tag: string;
}

export interface ProjectItem {
  title: string;
  titleEn: string;
  organization: string;
  role: string;
  roleEn: string;
  period: string;
  location: string;
  bullets: string[];
  bulletsEn: string[];
  highlights: string[];
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
  award: string;
  description: string;
  descriptionEn: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mario Alan Soto Delgado",
    title: "Ingeniero Estructural Aeroespacial",
    titleEn: "Aerospace Structural Engineer",
    subheading: "Stress & MRB Engineering · Aircraft Repair & Substantiation · Flight Dynamics",
    location: "Chihuahua, México",
    email: "alansoto.18.05@gmail.com",
    phone: "+52 614 225 1598",
    phoneDisplay: "+52 (614) 225-1598",
    linkedin: "https://www.linkedin.com/in/mario-alan-soto-delgado",
    linkedinHandle: "linkedin.com/in/mario-alan-soto-delgado",
    cvPdfPath: "/assets/aistudio/5_CV_R_sum__16b93f0c.pdf",
    bio: "Ingeniero aeroespacial y físico con trayectoria destacada en misiones espaciales (Líder Técnico ADCS en AzTechSat-1 para NASA/AEM, analista de dinámica orbital en NSATMX-ER1 con STK/MATLAB, Juez Global de NASA Space Apps) y certificación estructural aeronáutica (Boeing 777 P2F en Altitude Aerospace y Cessna en Textron Aviation).",
    bioEn: "Aerospace engineer & engineering physicist with premier track record in space missions (ADCS Technical Team Lead on AzTechSat-1 with NASA/AEM, flight dynamics mission analyst on NSATMX-ER1 via STK/MATLAB, NASA Space Apps Global Judge) and FAA structural certification (Boeing 777 P2F at Altitude Aerospace & Cessna at Textron Aviation).",
    recruiterProfile: {
      headline: "Ingeniero Aeroespacial · Especialista en Misiones Espaciales & Dinámica Orbital (ADCS)",
      headlineEn: "Aerospace Engineer · Space Missions & Orbital Dynamics Specialist (ADCS)",
      targetRoles: [
        "Space Systems & Mission Design Engineer",
        "Attitude Determination & Control (ADCS) Engineer",
        "Orbital Mechanics & Flight Dynamics Analyst",
        "Stress Liaison / Structural Aerospace Engineer"
      ],
      quickStats: [
        { label: "Misiones Espaciales", labelEn: "Space Missions", value: "2 Nanosatélites", detail: "AzTechSat-1 (NASA) & NSATMX-ER1" },
        { label: "Simulaciones ADCS", labelEn: "ADCS Simulations", value: "+1,200 Corridas", detail: "MATLAB, J2, IGRF, B-dot, Cuaterniones" },
        { label: "Impacto NASA", labelEn: "NASA Engagement", value: "Juez Global", detail: "Space Apps Navigator & Local Lead" },
        { label: "Aeronáutica FAA", labelEn: "FAA Aviation", value: "+300 Desviaciones", detail: "B777 P2F & +800 MRB Cessna" }
      ],
      coreSpaceStack: [
        "MATLAB & Simulink",
        "Systems Tool Kit (STK)",
        "ADCS B-Dot & Quaternions",
        "J2 Orbit Propagation & IGRF",
        "NASA Readiness Reviews",
        "NASA ARSET Hyperspectral",
        "SolidWorks (CSWA)",
        "Siemens NX"
      ]
    }
  },
  metrics: [
    {
      value: "+300",
      label: "Desviaciones B777 Aprobadas",
      labelEn: "B777 Deviations FAA Approved",
      detail: "Soporte de esfuerzos en conversión Boeing 777 P2F",
      detailEn: "Stress support on Boeing 777 P2F conversion"
    },
    {
      value: "+800",
      label: "Componentes MRB Analizados",
      labelEn: "MRB Aircraft Parts Assessed",
      detail: "Integridad estática en Cessna SkyCourier, Longitude y XLS",
      detailEn: "Static integrity for SkyCourier, Longitude & XLS"
    },
    {
      value: "+1,200",
      label: "Simulaciones ADCS Ejecutadas",
      labelEn: "ADCS Orbit Simulations",
      detail: "Nanosatélite AzTechSat-1 evaluado por NASA",
      detailEn: "AzTechSat-1 CubeSat evaluated by NASA"
    },
    {
      value: "+20",
      label: "Herramientas de Cálculo Creadas",
      labelEn: "Assessment Tools Engineered",
      detail: "Para evaluación ágil de desviaciones en Airbus A321",
      detailEn: "For rapid deviation assessment on Airbus A321"
    }
  ],
  galleries: {
    aviation: [
      {
        id: "b777-conversion",
        title: "Conversión de Pasajeros a Carga Boeing 777 P2F",
        titleEn: "Boeing 777 Passenger-to-Freighter Conversion",
        category: "Altitude Aerospace USA",
        categoryEn: "Altitude Aerospace USA",
        image: "/src/assets/images/boeing_777_p2f_conversion_1792869938224.jpg",
        caption: "Ingeniería de esfuerzos y certificación estructural de la compuerta de carga principal y refuerzos de fuselaje con aprobación FAA.",
        captionEn: "Stress engineering and structural certification of main cargo door and fuselage reinforcements with FAA approval.",
        specs: [
          { label: "Aeronave", value: "Boeing 777-300ER" },
          { label: "Alcance", value: "300+ desviaciones certificadas" },
          { label: "Subsistemas", value: "Compuerta de carga, pressure deck, overwing box" },
          { label: "Normativa", value: "FAA 14 CFR Part 25" }
        ],
        description: "Mario Alan Soto Delgado lideró y ejecutó el análisis de esfuerzos durante el proceso de certificación del primer programa de conversión Boeing 777 P2F en Altitude Aerospace USA. Auditó, redactó y actualizó reportes de certificación estructural para compuerta de carga principal (MCD), pressure deck, ensambles de piso y paneles de corte, logrando la aprobación total de la FAA.",
        descriptionEn: "Mario Alan Soto Delgado delivered critical stress analysis during the certification of the premier Boeing 777 P2F conversion program at Altitude Aerospace USA. He audited and authored structural certification reports for the main cargo door surround structure, pressure deck, and overwing box, obtaining FAA approval across all packages."
      },
      {
        id: "cessna-mrb",
        title: "Ingeniería MRB & Substanciación Estática Cessna",
        titleEn: "MRB Engineering & Static Substantiation for Cessna",
        category: "Textron Aviation Mexico",
        categoryEn: "Textron Aviation Mexico",
        image: "/src/assets/images/cessna_mrb_structural_inspection_1792869938200.jpg",
        caption: "Evaluación estructural de más de 800 componentes no conformes en SkyCourier, Citation Longitude y XLS.",
        captionEn: "Structural assessment of over 800 non-conforming components on SkyCourier, Citation Longitude, and XLS.",
        specs: [
          { label: "Modelos", value: "SkyCourier, Longitude, Citation XLS" },
          { label: "Casos Resueltos", value: "800+ no-conformidades MRB" },
          { label: "Enfoque", value: "F&DT, Fatiga, Tolerancia al Daño" },
          { label: "KPIs", value: "Métricas operacionales semanales" }
        ],
        description: "En Textron Aviation Mexico (American Industries), evaluó la integridad y reparabilidad de componentes de fuselaje, costillas alares y largueros. Colaboró estrechamente con especialistas en fatiga y tolerancia al daño (F&DT) y procesos de materiales para emitir disposiciones de ingeniería seguras y mantener la línea de ensamblaje en flujo continuo.",
        descriptionEn: "At Textron Aviation Mexico, evaluated structural integrity and disposition for non-conforming parts on wing spars, bulkheads, and skin panels. Collaborated with fatigue and damage tolerance (F&DT) specialists and developed weekly operational metrics to safeguard flight safety and assembly schedules."
      },
      {
        id: "hangar-operations",
        title: "Complejo de Validación Estructural & Ensayos",
        titleEn: "Advanced Structural Validation Complex",
        category: "Stress Liaison",
        categoryEn: "Stress Liaison",
        image: "/src/assets/images/hero_aerospace_engineer_1792869937360.jpg",
        caption: "Ambiente de inspección técnica, instrumentación y verificación analítica de fuselaje.",
        captionEn: "Technical inspection, flight hardware instrumentation, and airframe analytical verification environment.",
        specs: [
          { label: "Rol", value: "Stress Liaison Engineer" },
          { label: "Herramientas", value: "Siemens NX, Excel avanzado, Hand Calcs" },
          { label: "Tutoría", value: "Capacitación a 3 ingenieros junior" },
          { label: "Flota", value: "B777, A321, Cessna SkyCourier" }
        ],
        description: "Trabajo en hangar y enlaces de ingeniería de diseño para conciliar discrepancias de fabricación con las cargas de diseño límite y últimas. Desarrollo de más de 20 herramientas analíticas para evaluación rápida de desviaciones estructurales en Airbus A321.",
        descriptionEn: "Hands-on hangar and liaison engineering resolving production deviations against design limit and ultimate loads. Engineered over 20 proprietary analytical calculation tools for rapid turnaround of Airbus A321 cargo conversions."
      }
    ],
    space: [
      {
        id: "aztechsat-1",
        title: "Nanosatélite AzTechSat-1 (NASA / AEM / UPAEP)",
        titleEn: "AzTechSat-1 CubeSat (NASA / Mexican Space Agency / UPAEP)",
        category: "Dinámica y Control de Actitud (ADCS)",
        categoryEn: "Attitude Determination & Control (ADCS)",
        image: "/src/assets/images/aztechsat_cubesat_adcs_1792869938986.jpg",
        caption: "Líder Técnico del Subsistema ADCS en el primer CubeSat mexicano desplegado desde la Estación Espacial Internacional (ISS).",
        captionEn: "Technical Team Leader for the ADCS subsystem on the historic Mexican CubeSat deployed from the ISS.",
        specs: [
          { label: "Misión", value: "1U CubeSat LEO" },
          { label: "Simulaciones", value: "1,200+ corridas en MATLAB" },
          { label: "Modelos", value: "Propagador J2, Modelo IGRF, Quaterniones" },
          { label: "Controlador", value: "Algoritmo B-dot y magnetopares" }
        ],
        description: "Como Líder Técnico del equipo ADCS, Mario Alan Soto dirigió más de 1,200 simulaciones orbitales para encontrar la configuración óptima de apuntamiento del satélite. Coordinó interfaces con proveedores internacionales de hardware y defendió con éxito los resultados técnicos en las revisiones de diseño de la NASA.",
        descriptionEn: "As Technical Team Leader of ADCS, Mario Alan Soto directed over 1,200 orbital dynamic simulations in MATLAB with J2 perturbation propagator and IGRF geomagnetic models. Coordinated with hardware suppliers and defended technical packages before NASA review boards."
      },
      {
        id: "nsatmx-er1",
        title: "Nanosatélite NSATMX-ER1 de Observación Terrestre",
        titleEn: "NSATMX-ER1 Earth Observation Nanosatellite",
        category: "Análisis de Dinámica de Misión",
        categoryEn: "Mission Flight Dynamics Analyst",
        image: "/src/assets/images/earth_observation_hyperspectral_1792869939401.jpg",
        caption: "Análisis de cobertura orbital, tiempo de refresco (age-of-data) e imágenes hiperespectrales para energías renovables.",
        captionEn: "Orbital coverage analysis, age-of-data calculation, and hyperspectral imaging for renewable energy development.",
        specs: [
          { label: "Software", value: "MATLAB & Systems Tool Kit (STK)" },
          { label: "Carga Útil", value: "Sensor Hiperespectral" },
          { label: "Órbita", value: "Heliosincrónica LEO" },
          { label: "Subsistema", value: "Definición de OCR para comunicaciones" }
        ],
        description: "Análisis de dinámica de vuelo para nanosatélite orientado a prospección de energías renovables. Con MATLAB y STK, modeló las trayectorias sobre el territorio mexicano para maximizar el acceso de datos y reducir los tiempos de latencia entre tomas y estaciones terrenas.",
        descriptionEn: "Flight dynamics analysis for Earth observation nanosatellite. Utilizing MATLAB and STK, modeled sensor swaths and revisit times over Mexico to optimize data throughput and ground station pass schedules."
      }
    ],
    leadership: [
      {
        id: "nasa-space-apps",
        title: "NASA Space Apps Challenge & Global Judge",
        titleEn: "NASA Space Apps Challenge & Global Judge",
        category: "Liderazgo & Mentoría Global",
        categoryEn: "Global Leadership & Mentorship",
        image: "/src/assets/images/nasa_space_apps_summit_1792869939529.jpg",
        caption: "Local Lead en Chihuahua (2019-2023), Miembro del 1st Gen Collective Cohort, Navigator y Juez Global de proyectos espaciales.",
        captionEn: "Chihuahua Local Lead (2019-2023), 1st Gen Collective Cohort Member, Navigator and Global Judge.",
        specs: [
          { label: "Participación", value: "200+ participantes anuales" },
          { label: "Rol Actual", value: "Navigator & Global Judge" },
          { label: "Conferencia", value: "Collective Genius Summit ('Inspiring Communities')" },
          { label: "Alcance", value: "Evaluación internacional de finalistas globales" }
        ],
        description: "Organizó y gestionó el evento tecnológico anual de la NASA en Chihuahua con presupuestos, mentores y patrocinadores. En 2024 brindó la charla 'Inspiring Communities' en el Collective Genius Summit y actualmente asesora equipos mundiales y dictamina proyectos finalistas globales para la NASA.",
        descriptionEn: "Spearheaded NASA's flagship open innovation challenge in Chihuahua for over 200 participants each year. Delivered the 'Inspiring Communities' talk at the Collective Genius Summit and serves as Global Judge auditing submissions worldwide."
      }
    ]
  },
  experience: [
    {
      company: "Altitude Aerospace USA",
      role: "Stress Liaison Engineer",
      roleEn: "Stress Liaison Engineer",
      location: "Portland, Oregon / Dallas, Texas / Remoto",
      period: "Nov 2023 – Jun 2026",
      periodEn: "Nov 2023 – Jun 2026",
      tag: "Certificación Aeronáutica B777 & A321",
      bullets: [
        "Soporte de esfuerzos para más de 300 desviaciones de manufactura y ensamblado en el primer programa de conversión Boeing 777 P2F (Passenger-to-Freighter).",
        "Auditoría, redacción y actualización de reportes de certificación aprobados por la FAA: compuerta de carga principal (MCD) y ensambles perimetrales, vigas de piso, pressure deck, cajón sobreala (overwing box), paneles de corte y refuerzos de sistemas.",
        "Desarrollo de más de 20 herramientas analíticas internas para la evaluación rápida y precisa de desviaciones estructurales en aeronaves Airbus A321 en conversión a carguero.",
        "Capacitación técnica a 3 ingenieros junior en fundamentos de análisis estructural aeronáutico, métodos clásicos de cálculo y evaluación de no-conformidades."
      ],
      bulletsEn: [
        "Delivered stress liaison engineering for over 300 manufacturing and assembly deviations on the historic first Boeing 777 passenger-to-freighter (P2F) conversion.",
        "Audited, authored, and substantiated FAA-approved structural certification reports: main cargo door surrounding assemblies, floor beams, pressure deck, overwing box, shear panels, and system reinforcements.",
        "Engineered over 20 specialized calculation tools for rapid assessment of structural deviations on Airbus A321 passenger-to-freighter aircraft.",
        "Mentored and trained 3 junior engineers on structural analysis fundamentals, aircraft load paths, and deviation substantiation."
      ]
    },
    {
      company: "Textron Aviation Mexico (American Industries)",
      role: "MRB Engineer (Material Review Board)",
      roleEn: "MRB Engineer (Material Review Board)",
      location: "Chihuahua, México",
      period: "Jun 2022 – Oct 2023",
      periodEn: "Jun 2022 – Oct 2023",
      tag: "Cessna SkyCourier, Longitude & XLS",
      bullets: [
        "Análisis estructural estático para evaluar integridad y definir reparaciones seguras de más de 800 componentes no conformes en aeronaves Cessna SkyCourier, Citation Longitude y XLS.",
        "Colaboración estrecha con especialistas en Fatiga y Tolerancia al Daño (F&DT) y grupos de materiales y procesos en casos de alta criticidad estructural.",
        "Desarrollo e implementación de métricas semanales de rendimiento (KPIs) para soporte a la toma de decisiones operacionales y reducción de tiempos de ciclo."
      ],
      bulletsEn: [
        "Conducted static structural analysis to evaluate integrity and repair dispositions for over 800 non-conforming aircraft parts across SkyCourier, Citation Longitude, and XLS models.",
        "Collaborated with fatigue and damage tolerance (F&DT) teams and materials/process engineers on high-risk structural cases.",
        "Developed and maintained operational weekly KPI metrics to accelerate engineering turnaround times and ensure compliance."
      ]
    },
    {
      company: "Instituto Tecnológico de Chihuahua",
      role: "Profesor del Depto. de Ciencias Fundamentales",
      roleEn: "Teacher in the Fundamental Sciences Department",
      location: "Chihuahua, México",
      period: "Mar 2022 – Jul 2022",
      periodEn: "Mar 2022 – Jul 2022",
      tag: "Docencia Universitaria",
      bullets: [
        "Impartición de cátedras de Termodinámica y Cálculo Integral para alumnos de ingeniería mecánica, electromecánica, ciencias de materiales e industrial."
      ],
      bulletsEn: [
        "Taught university courses in Thermodynamics and Integral Calculus for undergraduate students in mechanical, electromechanical, materials science, and industrial engineering."
      ]
    },
    {
      company: "Scale AI (Remotasks)",
      role: "Especialista en Aseguramiento de Calidad (QA)",
      roleEn: "Quality Assurance Specialist",
      location: "Remoto",
      period: "Oct 2021 – Jun 2022",
      periodEn: "Oct 2021 – Jun 2022",
      tag: "Datos & Confiabilidad",
      bullets: [
        "Auditorías de calidad y análisis de causa raíz para procesos de extracción y confiabilidad de datos estructurados para plataformas de comercio electrónico a escala global."
      ],
      bulletsEn: [
        "Performed rigorous quality audits and led root-cause analyses on structured data scraping pipelines for global e-commerce platforms."
      ]
    },
    {
      company: "Universidad Autónoma de Chihuahua (Facultad de Ingeniería)",
      role: "Asistente Administrativo y de Certificación",
      roleEn: "Administrative Assistant & Accreditation Coordinator",
      location: "Chihuahua, México",
      period: "Ene 2018 – Dic 2019",
      periodEn: "Jan 2018 – Dec 2019",
      tag: "Acreditaciones CACEI",
      bullets: [
        "Gestión del archivo de evidencias y análisis estadístico para el proceso de acreditación de 9 programas educativos de ingeniería; todos obtuvieron la certificación oficial."
      ],
      bulletsEn: [
        "Managed statistical evidence and archives for the accreditation process of 9 academic engineering programs, successfully achieving 100% formal certification."
      ]
    }
  ],
  spaceProjects: [
    {
      title: "AzTechSat-1 (NASA / AEM / UPAEP)",
      titleEn: "AzTechSat-1 (NASA / Mexican Space Agency / UPAEP)",
      organization: "Agencia Espacial Mexicana & NASA",
      role: "Líder Técnico del Subsistema ADCS (Control y Determinación de Actitud)",
      roleEn: "Technical Team Leader of Attitude Determination & Control (ADCS)",
      period: "Jul 2017 – Ago 2019",
      location: "Puebla, México / Remoto",
      bullets: [
        "Lideró el equipo multidisciplinario de ingeniería durante las rigurosas revisiones de diseño y alistamiento de la NASA (Readiness Reviews).",
        "Dirigió más de 1,200 simulaciones dinámicas del modelo ADCS en MATLAB con propagador orbital J2, modelo geomagnético IGRF, controlador de amortiguamiento magnético b-dot y representación de actitud por cuaterniones.",
        "Coordinó con proveedores internacionales de sensores espaciales y actuadores para validar procedimientos de integración física y funcional.",
        "Presentó y defendió la substanciación técnica ante los comités de evaluación y seguridad de la NASA."
      ],
      bulletsEn: [
        "Led multidisciplinary engineering team through formal NASA technical and flight readiness reviews.",
        "Directed over 1,200 orbital dynamic simulations in MATLAB integrating a J2 orbit propagator, IGRF geomagnetic model, b-dot magnetic detumbling controller, and quaternion attitude kinematics.",
        "Coordinated with space hardware manufacturers to validate satellite mechanical and electrical integration protocols.",
        "Presented technical results and contingency verifications before NASA evaluation boards."
      ],
      highlights: ["1U CubeSat LEO", "1,200+ Simulaciones MATLAB", "Desplegado desde ISS", "Comité NASA"]
    },
    {
      title: "NSATMX-ER1 (Nanosatélite para Energías Renovables)",
      titleEn: "NSATMX-ER1 (Nanosatellite for Renewable Energies)",
      organization: "Consorcio Mexicano de Nanosatélites",
      role: "Analista de Misión y Dinámica de Vuelo",
      roleEn: "Flight Dynamics Mission Analyst",
      period: "Sep 2020 – May 2021",
      location: "Remoto",
      bullets: [
        "Modelado de cobertura de barrido orbital y análisis de caducidad de datos (age-of-data) para satélite de observación terrestre con sensor hiperespectral utilizando MATLAB y STK.",
        "Elaboración de reportes técnicos y visualizaciones de órbitas heliosincrónicas para fundamentar las decisiones de diseño de la misión.",
        "Definición y refinamiento de Objetivos, Restricciones y Requerimientos (OCR) para el subsistema de comunicaciones satelitales."
      ],
      bulletsEn: [
        "Executed orbital sensor coverage analysis and age-of-data timelines for a hyperspectral Earth observation spacecraft using MATLAB and STK.",
        "Produced comprehensive engineering reports and orbit trajectory visualizations to guide mission architecture choices.",
        "Drafted Objectives, Constraints, and Requirements (OCR) for ground-to-space communications links."
      ],
      highlights: ["Systems Tool Kit (STK)", "Órbita Heliosincrónica", "Sensor Hiperespectral", "MATLAB"]
    }
  ],
  leadershipActivities: [
    {
      org: "NASA’s International Space Apps Challenge",
      role: "Local Lead en Chihuahua (2019 - 2023) · Navigator & Global Judge (2025 - Presente)",
      roleEn: "Chihuahua Local Lead (2019 - 2023) · Navigator & Global Judge (2025 - Present)",
      period: "2019 – Presente",
      bullets: [
        "Lideró la logística, presupuesto y alianzas estratégicas para convocar anualmente a más de 200 participantes, mentores y jueces en Chihuahua.",
        "Seleccionado para la 1ra generación de la NASA Space Apps Collective Cohort (2023-2024), impartiendo la conferencia 'Inspiring Communities' en el Collective Genius Summit.",
        "Actualmente funge como Navegador y Juez Global, evaluando y dictaminando proyectos de equipos de todo el mundo para la selección de finalistas internacionales de la NASA."
      ],
      bulletsEn: [
        "Managed budgeting, sponsorship, and logistics for Chihuahua's local event coordinating 200+ annual participants, mentors, and industry sponsors.",
        "Selected for the 1st Generation NASA Space Apps Collective Cohort; delivered the keynote talk 'Inspiring Communities' at the Collective Genius Summit (March 2024).",
        "Currently serves as Navigator & Global Judge, reviewing entries across the globe and evaluating technical solutions for NASA global finalist nominations."
      ]
    },
    {
      org: "Space Generation Advisory Council (SGAC)",
      role: "Delegado Regional & Miembro de Comité Organizador (NCAC)",
      roleEn: "Regional Delegate & Organizing Team Member (NCAC)",
      period: "2020 – 2025",
      bullets: [
        "Delegado en 'Space Mission Design for Sustainable Development Goals' (San José, Costa Rica, 2023), formulando propuestas satelitales con IA para rutas de distribución de agua.",
        "Delegado en 'Educación y Desarrollo Profesional' (2020) y 'Space Entrepreneurship' (Puebla, México, 2024).",
        "Miembro del Comité Organizador del 5th North and Central American Space Generation Workshop en Montreal, Canadá (2025), coordinando mesas de trabajo junto a la Agencia Espacial Canadiense (CSA)."
      ],
      bulletsEn: [
        "Delegate for 'Space Mission Design for Sustainable Development Goals' (San José, Costa Rica, 2023), architecting satellite imaging and AI routing for water distribution in remote areas.",
        "Working group delegate for 'Education & Professional Development' (2020) and 'Space Entrepreneurship' (Puebla, 2024).",
        "Organizing Committee member for the 5th North and Central American Space Generation Workshop in Montreal (2025), partnering with Canadian Space Agency delegates."
      ]
    },
    {
      org: "Universidad Autónoma de Chihuahua (Facultad de Ingeniería)",
      role: "Instructor del Curso 'Introducción a MATLAB'",
      roleEn: "Course Instructor: 'Introduction to MATLAB'",
      period: "Ago 2018 – Oct 2018",
      bullets: [
        "Diseñó e impartió curso teórico-práctico sobre matrices, graficación 2D/3D, programación de funciones y resolución numérica de ecuaciones diferenciales ordinarias aplicadas a la física."
      ],
      bulletsEn: [
        "Designed and instructed a technical curriculum covering matrix algebra, 2D/3D plotting, vectorized programming, and numerical differential equations for physics engineering."
      ]
    }
  ],
  awards: [
    {
      year: "2022",
      title: "GalileoGICkathon 2022 (Galileo Information Center)",
      award: "3er Lugar Internacional",
      awardEn: "3rd Place Winner",
      description: "Propuesta de sistema de seguridad apoyado en Inteligencia Artificial y datos de navegación satelital Galileo GNSS para prevenir ilícitos en transporte de carga.",
      descriptionEn: "AI-powered security concept leveraging Galileo GNSS satellite tracking data to counter logistics and freight theft."
    },
    {
      year: "2020",
      title: "ASCLEPIOS Lunar Hackathon (EPFL - Suiza)",
      award: "Finalista Destacado",
      awardEn: "Featured Finalist",
      description: "Desarrollo de propuesta conceptual de sistema de minería lunar mediante prospección geofísica in-situ para la École Polytechnique Fédérale de Lausanne.",
      descriptionEn: "Conceptual architecture of a lunar geophysical mining exploration system for École Polytechnique Fédérale de Lausanne."
    },
    {
      year: "2020",
      title: "Reto Misiones Espaciales México 2020 (AEM)",
      award: "2do Lugar Nacional",
      awardEn: "2nd Place Winner",
      description: "Galardonado en la categoría de apoyo a grupos vulnerables con el proyecto de correlación de indicadores sociales durante contingencia sanitaria.",
      descriptionEn: "Awarded 2nd place nationwide in the social support category analyzing regional vulnerability metrics."
    },
    {
      year: "2017",
      title: "LX Congreso Nacional de Física (SMF)",
      award: "Ponente Magistral",
      awardEn: "Keynote Speaker",
      description: "Presentación de la investigación 'Simulación de Posicionamiento en Órbita y Análisis de Actitud de un CubeSat 1U'.",
      descriptionEn: "Presentation of research paper: 'Simulation of Orbit Positioning and Attitude Kinematics for a 1U CubeSat'."
    }
  ],
  education: [
    {
      degree: "Licenciatura en Ingeniería Aeroespacial",
      degreeEn: "B.S. Aerospace Engineering",
      institution: "Universidad Autónoma de Chihuahua (UACH) · Facultad de Ingeniería",
      period: "2013 – 2017",
      location: "Chihuahua, México",
      highlights: "Especialización en aerodinámica, estructuras aeronáuticas, diseño mecánico de fuselaje y mecánica de fluidos."
    },
    {
      degree: "Licenciatura en Ingeniería Física",
      degreeEn: "B.S. Engineering Physics",
      institution: "Universidad Autónoma de Chihuahua (UACH) · Facultad de Ingeniería",
      period: "2015 – 2019",
      location: "Chihuahua, México",
      highlights: "Doble titulación. Fundamentos de física matemática, mecánica cuántica, electromagnetismo y modelos numéricos avanzados."
    }
  ],
  certifications: [
    {
      title: "Certified SolidWorks Associate (CSWA)",
      titleEn: "Certified SolidWorks Associate (CSWA)",
      issuer: "Dassault Systèmes",
      date: "Jul 2020",
      id: "C-ZTAM3JESNF",
      badge: "CAD / Modelado Paramétrico"
    },
    {
      title: "Hyperspectral Data for Land and Coastal Systems",
      titleEn: "Hyperspectral Data for Land and Coastal Systems",
      issuer: "NASA’s Applied Remote Sensing Training Program (ARSET)",
      date: "Feb 2021",
      id: "NASA-ARSET-2021",
      badge: "Percepción Remota Satelital"
    }
  ],
  skills: {
    engineering: [
      "Análisis de Esfuerzos Estáticos (Stress)",
      "Evaluación y Disposición MRB",
      "Substanciación FAA (14 CFR Part 25)",
      "Fatiga y Tolerancia al Daño (F&DT)",
      "Mecánica Orbital & Propagación J2",
      "Sistemas de Actitud ADCS y Cuaterniones",
      "Desviaciones Estructurales P2F"
    ],
    tools: [
      "MATLAB & Simulink",
      "Siemens NX",
      "Dassault SolidWorks (CSWA)",
      "Systems Tool Kit (STK)",
      "Excel Avanzado para Cálculo Estructural",
      "Hand Calculations Aeronáuticos"
    ],
    languages: [
      { name: "Español", level: "Nativo (Native)" },
      { name: "Inglés", level: "Competencia Profesional Completa (Professional Proficiency)" }
    ],
    strengths: [
      "Liderazgo Técnico Multidisciplinario",
      "Resolución Rigurosa de Problemas",
      "Coordinación Interdepartamental e Interagencial",
      "Capacidad de Aprendizaje Continuo y Auditoría"
    ]
  }
};
