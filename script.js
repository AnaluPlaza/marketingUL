const data = [
  {
    ciclo: "Ciclo 1",
    cursos: [
      { nombre: "Globalización y Realidad Nacional" },
      { nombre: "Lenguaje y Comunicación I" },
      { nombre: "Metodologías de Investigación" },
      { nombre: "Desarrollo Personal y Social" },
      { nombre: "Matemática Básica" },
      { nombre: "Ética Cívica" }
    ]
  },
  {
    ciclo: "Ciclo 2",
    cursos: [
      { nombre: "Economía y Empresa" },
      { nombre: "Lenguaje y Comunicación II", requisitos: ["Lenguaje y Comunicación I"] },
      { nombre: "Procesos Sociales y Políticos" },
      { nombre: "Temas de Filosofía" },
      { nombre: "Estadística Básica para los Negocios", requisitos: ["Matemática Básica"] },
      { nombre: "Matemática Aplicada a los Negocios", requisitos: ["Matemática Básica"] }
    ]
  },
  {
    ciclo: "Ciclo 3",
    cursos: [
      { nombre: "Estadística Empresarial I", requisitos: ["Estadística Básica para los Negocios"] },
      { nombre: "Contabilidad General", requisitos: ["Matemática Aplicada a los Negocios"] },
      { nombre: "Antropología del Consumidor", electivo: true },
      { nombre: "Introducción a las Finanzas", requisitos: ["Matemática Aplicada a los Negocios"] },
      { nombre: "Matemática para la Gestión de Negocios", requisitos: ["Matemática Aplicada a los Negocios"] },
      { nombre: "Herramientas Informáticas para la Gestión I", requisitos: ["Economía y Empresa"] }
    ]
  },
  {
    ciclo: "Ciclo 4",
    cursos: [
      { nombre: "Costos y Presupuestos", requisitos: ["Contabilidad General"] },
      { nombre: "Sociología del Consumidor", requisitos: ["Antropología del Consumidor"] },
      { nombre: "Procesos de Marketing", requisitos: ["Antropología del Consumidor"] },
      { nombre: "Estadística Empresarial II", requisitos: ["Estadística Empresarial I"] },
      { nombre: "Administración Empresarial y Marketing", requisitos: ["Economía y Empresa"] },
      { nombre: "Microeconomía / Microeconomics", requisitos: ["Economía y Empresa"] },
      { nombre: "Herramientas Informáticas para la Gestión II", requisitos: ["Herramientas Informáticas para la Gestión I"], electivo: true }
    ]
  },
  {
    ciclo: "Ciclo 5",
    cursos: [
      { nombre: "Estadística Aplicada al Marketing", requisitos: ["Estadística Empresarial II"] },
      { nombre: "Consumidor y Experiencia del Cliente / Customer Experience", requisitos: ["Sociología del Consumidor"] },
      { nombre: "Elaboración de Estados Financieros", requisitos: ["Costos y Presupuestos", "Introducción a las Finanzas"] },
      { nombre: "Administración de Canales de Distribución", requisitos: ["Procesos de Marketing"] },
      { nombre: "Gestión de Producto y Marca", requisitos: ["Procesos de Marketing"] },
      { nombre: "Macroeconomía / Macroeconomics", requisitos: ["Microeconomía / Microeconomics"] }
    ]
  },
  {
    ciclo: "Ciclo 6",
    cursos: [
      { nombre: "Política y Fijación de Precios", requisitos: ["Macroeconomía / Macroeconomics"] },
      { nombre: "Operaciones Logísticas de Marketing", requisitos: ["Administración de Canales de Distribución"] },
      { nombre: "Investigación Cuantitativa de Mercados", requisitos: ["Estadística Aplicada al Marketing"] },
      { nombre: "Publicidad y Medios", requisitos: ["Gestión de Producto y Marca"] },
      { nombre: "Branding", requisitos: ["Gestión de Producto y Marca"] },
      { nombre: "Investigación Cualitativa de Mercados", requisitos: ["Consumidor y Experiencia del Cliente / Customer Experience"] },
      { nombre: "Ciencia de Datos Aplicado al Marketing", requisitos: ["Estadística Aplicada al Marketing"] }
    ]
  },
  {
    ciclo: "Ciclo 7",
    cursos: [
      { nombre: "Dirección Estratégica de Marketing", requisitos: ["Investigación Cuantitativa de Mercados"] },
      { nombre: "Finanzas para Marketing", requisitos: ["Elaboración de Estados Financieros"] },
      { nombre: "Marketing Social", requisitos: ["Investigación Cuantitativa de Mercados"] },
      { nombre: "Comunicación e Imagen Corporativa", requisitos: ["Publicidad y Medios"] },
      { nombre: "Transformación Digital y Marketing", requisitos: ["Publicidad y Medios"] },
      { nombre: "Endomarketing y Gestión de Personas", requisitos: ["Administración Empresarial y Marketing"] },
      { nombre: "Neuromarketing", requisitos: ["Investigación Cuantitativa de Mercados"], electivo: true },
      { nombre: "Promoción y Marketing BTL", requisitos: ["Política y Fijación de Precios"], electivo: true },
      { nombre: "Diseño de la Propuesta de Valor", requisitos: ["Gestión de Producto y Marca"], electivo: true },
      { nombre: "Métricas de Marketing", requisitos: ["Política y Fijación de Precios"], electivo: true },
      { nombre: "Metodologías Ágiles en Marketing", requisitos: ["Herramientas Informáticas para la Gestión I"], electivo: true }
    ]
  },
  {
    ciclo: "Ciclo 8",
    cursos: [
      { nombre: "Gerencia de Ventas", requisitos: ["Operaciones Logísticas de Marketing"] },
      { nombre: "Ética y Sostenibilidad Empresarial", requisitos: ["Endomarketing y Gestión de Personas"] },
      { nombre: "Herramientas Estratégicas de Negocios y Marketing", requisitos: ["Dirección Estratégica de Marketing"] },
      { nombre: "Métodos y Técnicas de Evaluación de Proyectos", requisitos: ["Finanzas para Marketing"] },
      { nombre: "E-Commerce", requisitos: ["Transformación Digital y Marketing"] },
      { nombre: "Inteligencia Comercial", requisitos: ["Dirección Estratégica de Marketing"], electivo: true },
      { nombre: "Taller de Investigación de Mercados", requisitos: ["Investigación Cuantitativa de Mercados"], electivo: true },
      { nombre: "Marketing Mobile", requisitos: ["Transformación Digital y Marketing"], electivo: true },
      { nombre: "Simulación de Decisiones de Marketing", requisitos: ["Dirección Estratégica de Marketing"], electivo: true },
      { nombre: "Gerencia de Marketing Deportivo", requisitos: ["Marketing Social"], electivo: true }
    ]
  },
  {
    ciclo: "Ciclo 9",
    cursos: [
      { nombre: "Trade Marketing y Merchandising", requisitos: ["Gerencia de Ventas"] },
      { nombre: "Marketing de Servicios", requisitos: ["Marketing Social"] },
      { nombre: "Seminario de Investigación en Marketing I", requisitos: ["Herramientas Estratégicas de Negocios y Marketing"] },
      { nombre: "Analítica de Datos", requisitos: ["Transformación Digital y Marketing"] },
      { nombre: "Negociación Comercial", requisitos: ["Comunicación e Imagen Corporativa"] },
      { nombre: "Marketing Personal", requisitos: ["Marketing Social"], electivo: true },
      { nombre: "Taller de Inbound Marketing", requisitos: ["Transformación Digital y Marketing"], electivo: true },
      { nombre: "Marketing de Retailers", requisitos: ["Herramientas Estratégicas de Negocios y Marketing"], electivo: true },
      { nombre: "Marketing y Ventas B2B", requisitos: ["Branding"], electivo: true },
      { nombre: "Emprendimientos de Marketing 5.0", requisitos: ["E-Commerce"], electivo: true }
    ]
  },
  {
    ciclo: "Ciclo 10",
    cursos: [
      { nombre: "Seminario de Investigación en Marketing II", requisitos: ["Seminario de Investigación en Marketing I"] },
      { nombre: "Estrategias de Marketing Internacional", requisitos: ["Trade Marketing y Merchandising"] },
      { nombre: "Estrategia de Relacionamiento y Fidelización", requisitos: ["Herramientas Estratégicas de Negocios y Marketing"] },
      { nombre: "Plan de Marketing", requisitos: ["Métodos y Técnicas de Evaluación de Proyectos"] },
      { nombre: "Planeamiento Estratégico Publicitario", requisitos: ["Publicidad y Medios"] },
      { nombre: "Marketing de Centros Comerciales e Hipermercados", requisitos: ["Gerencia de Ventas"], electivo: true },
      { nombre: "Marketing en la Base de la Pirámide", requisitos: ["Métodos y Técnicas de Evaluación de Proyectos"], electivo: true },
      { nombre: "Patrocinio de Marcas y Sponsoring", requisitos: ["Marketing de Servicios"], electivo: true }
    ]
  }
];
