const data = {
  1: [
    "Globalización y Realidad Nacional",
    "Lenguaje y Comunicación I",
    "Metodologías de Investigación",
    "Desarrollo Personal y Social",
    "Matemática Básica",
    "Ética Cívica"
  ],
  2: [
    {
      nombre: "Economía y Empresa"
    },
    {
      nombre: "Lenguaje y Comunicación II",
      requisitos: ["Lenguaje y Comunicación I"]
    },
    "Procesos Sociales y Políticos",
    "Temas de Filosofía",
    {
      nombre: "Estadística Básica para los Negocios",
      requisitos: ["Matemática Básica"]
    },
    {
      nombre: "Matemática Aplicada a los Negocios",
      requisitos: ["Matemática Básica"]
    }
  ],
  3: [
    {
      nombre: "Estadística Empresarial I",
      requisitos: ["Estadística Básica para los Negocios"]
    },
    {
      nombre: "Contabilidad General",
      requisitos: ["Matemática Aplicada a los Negocios"]
    },
    {
      nombre: "Antropología del Consumidor (Electivo)"
    },
    {
      nombre: "Introducción a las Finanzas",
      requisitos: ["Matemática Aplicada a los Negocios"]
    },
    {
      nombre: "Matemática para la Gestión de Negocios",
      requisitos: ["Matemática Aplicada a los Negocios"]
    },
    {
      nombre: "Herramientas Informáticas para la Gestión I",
      requisitos: ["Economía y Empresa"]
    }
  ],
  4: [
    {
      nombre: "Costos y Presupuestos",
      requisitos: ["Contabilidad General"]
    },
    {
      nombre: "Sociología del Consumidor",
      requisitos: ["Antropología del Consumidor (Electivo)"]
    },
    {
      nombre: "Procesos de Marketing",
      requisitos: ["Antropología del Consumidor (Electivo)"]
    },
    {
      nombre: "Estadística Empresarial II",
      requisitos: ["Estadística Empresarial I"]
    },
    {
      nombre: "Administración Empresarial y Marketing",
      requisitos: ["Economía y Empresa"]
    },
    {
      nombre: "Microeconomía / Microeconomics",
      requisitos: ["Economía y Empresa"]
    },
    {
      nombre: "Herramientas Informáticas para la Gestión II (Electivo)",
      requisitos: ["Herramientas Informáticas para la Gestión I"]
    }
  ],
  5: [
    {
      nombre: "Estadística Aplicada al Marketing",
      requisitos: ["Estadística Empresarial II"]
    },
    {
      nombre: "Consumidor y Experiencia del Cliente / Customer Experience",
      requisitos: ["Sociología del Consumidor"]
    },
    {
      nombre: "Elaboración de Estados Financieros",
      requisitos: ["Costos y Presupuestos", "Introducción a las Finanzas"]
    },
    {
      nombre: "Administración de Canales de Distribución",
      requisitos: ["Procesos de Marketing"]
    },
    {
      nombre: "Gestión de Producto y Marca",
      requisitos: ["Procesos de Marketing"]
    },
    {
      nombre: "Macroeconomía / Macroeconomics",
      requisitos: ["Microeconomía / Microeconomics"]
    }
  ],
  6: [
    {
      nombre: "Política y Fijación de Precios",
      requisitos: ["Macroeconomía / Macroeconomics"]
    },
    {
      nombre: "Operaciones Logísticas de Marketing",
      requisitos: ["Administración de Canales de Distribución"]
    },
    {
      nombre: "Investigación Cuantitativa de Mercados",
      requisitos: ["Estadística Aplicada al Marketing"]
    },
    {
      nombre: "Publicidad y Medios",
      requisitos: ["Gestión de Producto y Marca"]
    },
    {
      nombre: "Branding",
      requisitos: ["Gestión de Producto y Marca"]
    },
    {
      nombre: "Investigación Cualitativa de Mercados",
      requisitos: ["Consumidor y Experiencia del Cliente / Customer Experience"]
    },
    {
      nombre: "Ciencia de Datos Aplicado al Marketing",
      requisitos: ["Estadística Aplicada al Marketing"]
    }
  ],
  7: [
    {
      nombre: "Dirección Estratégica de Marketing",
      requisitos: ["Investigación Cuantitativa de Mercados"]
    },
    {
      nombre: "Finanzas para Marketing",
      requisitos: ["Elaboración de Estados Financieros"]
    },
    {
      nombre: "Marketing Social",
      requisitos: ["Investigación Cuantitativa de Mercados"]
    },
    {
      nombre: "Comunicación e Imagen Corporativa",
      requisitos: ["Publicidad y Medios"]
    },
    {
      nombre: "Transformación Digital y Marketing",
      requisitos: ["Publicidad y Medios"]
    },
    {
      nombre: "Endomarketing y Gestión de Personas",
      requisitos: ["Administración Empresarial y Marketing"]
    },
    {
      nombre: "Neuromarketing (Electivo)",
      requisitos: ["Investigación Cuantitativa de Mercados"]
    },
    {
      nombre: "Promoción y Marketing BTL (Electivo)",
      requisitos: ["Política y Fijación de Precios"]
    },
    {
      nombre: "Diseño de la Propuesta de Valor (Electivo)",
      requisitos: ["Gestión de Producto y Marca"]
    },
    {
      nombre: "Métricas de Marketing (Electivo)",
      requisitos: ["Política y Fijación de Precios"]
    },
    {
      nombre: "Metodologías Ágiles en Marketing (Electivo)",
      requisitos: ["Herramientas Informáticas para la Gestión I"]
    }
  ],
  8: [
    {
      nombre: "Gerencia de Ventas",
      requisitos: ["Operaciones Logísticas de Marketing"]
    },
    {
      nombre: "Ética y Sostenibilidad Empresarial",
      requisitos: ["Endomarketing y Gestión de Personas"]
    },
    {
      nombre: "Herramientas Estratégicas de Negocios y Marketing",
      requisitos: ["Dirección Estratégica de Marketing"]
    },
    {
      nombre: "Métodos y Técnicas de Evaluación de Proyectos",
      requisitos: ["Finanzas para Marketing"]
    },
    {
      nombre: "E-Commerce",
      requisitos: ["Transformación Digital y Marketing"]
    },
    {
      nombre: "Inteligencia Comercial (Electivo)",
      requisitos: ["Dirección Estratégica de Marketing"]
    },
    {
      nombre: "Taller de Investigación de Mercados (Electivo)",
      requisitos: ["Investigación Cuantitativa de Mercados"]
    },
    {
      nombre: "Marketing Mobile (Electivo)",
      requisitos: ["Transformación Digital y Marketing"]
    },
    {
      nombre: "Simulación de Decisiones de Marketing (Electivo)",
      requisitos: ["Dirección Estratégica de Marketing"]
    },
    {
      nombre: "Gerencia de Marketing Deportivo (Electivo)",
      requisitos: ["Marketing Social"]
    }
  ],
  9: [
    {
      nombre: "Trade Marketing y Merchandising",
      requisitos: ["Gerencia de Ventas"]
    },
    {
      nombre: "Marketing de Servicios",
      requisitos: ["Marketing Social"]
    },
    {
      nombre: "Seminario de Investigación en Marketing I",
      requisitos: ["Herramientas Estratégicas de Negocios y Marketing"]
    },
    {
      nombre: "Analítica de Datos",
      requisitos: ["Transformación Digital y Marketing"]
    },
    {
      nombre: "Negociación Comercial",
      requisitos: ["Comunicación e Imagen Corporativa"]
    },
    {
      nombre: "Marketing Personal (Electivo)",
      requisitos: ["Marketing Social"]
    },
    {
      nombre: "Taller de Inbound Marketing (Electivo)",
      requisitos: ["Transformación Digital y Marketing"]
    },
    {
      nombre: "Marketing de Retailers (Electivo)",
      requisitos: ["Herramientas Estratégicas de Negocios y Marketing"]
    },
    {
      nombre: "Marketing y Ventas B2B (Electivo)",
      requisitos: ["Branding"]
    },
    {
      nombre: "Emprendimientos de Marketing 5.0 (Electivo)",
      requisitos: ["E-Commerce"]
    }
  ],
  10: [
    {
      nombre: "Seminario de Investigación en Marketing II",
      requisitos: ["Seminario de Investigación en Marketing I"]
    },
    {
      nombre: "Estrategias de Marketing Internacional",
      requisitos: ["Trade Marketing y Merchandising"]
    },
    {
      nombre: "Estrategia de Relacionamiento y Fidelización",
      requisitos: ["Herramientas Estratégicas de Negocios y Marketing"]
    },
    {
      nombre: "Plan de Marketing",
      requisitos: ["Métodos y Técnicas de Evaluación de Proyectos"]
    },
    {
      nombre: "Planeamiento Estratégico Publicitario",
      requisitos: ["Publicidad y Medios"]
    },
    {
      nombre: "Marketing de Centros Comerciales e Hipermercados (Electivo)",
      requisitos: ["Gerencia de Ventas"]
    },
    {
      nombre: "Marketing en la Base de la Pirámide (Electivo)",
      requisitos: ["Métodos y Técnicas de Evaluación de Proyectos"]
    },
    {
      nombre: "Patrocinio de Marcas y Sponsoring (Electivo)",
      requisitos: ["Marketing de Servicios"]
    }
  ]
};

const grid = document.getElementById("grid");

function cargarEstado() {
  return JSON.parse(localStorage.getItem("estadoCursos") || "{}");
}

function guardarEstado(estado) {
  localStorage.setItem("estadoCursos", JSON.stringify(estado));
}

function reiniciar() {
  localStorage.removeItem("estadoCursos");
  location.reload();
}

function crearCurso(nombre, requisitos = []) {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.textContent = nombre;
  div.dataset.nombre = nombre;
  div.dataset.requisitos = JSON.stringify(requisitos);
  div.addEventListener("click", () => toggleCurso(div));
  return div;
}

function toggleCurso(div) {
  const estado = cargarEstado();
  const nombre = div.dataset.nombre;
  const estadoActual = estado[nombre];

  if (div.classList.contains("bloqueado")) return;

  if (estadoActual === "completado") {
    delete estado[nombre];
  } else {
    estado[nombre] = "completado";
  }

  guardarEstado(estado);
  actualizarCursos();
}

function actualizarCursos() {
  const estado = cargarEstado();
  const completados = new Set(Object.keys(estado).filter(k => estado[k] === "completado"));
  const todos = document.querySelectorAll(".curso");

  todos.forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = JSON.parse(div.dataset.requisitos);
    const cumplidos = requisitos.every(r => completados.has(r));

    if (completados.has(nombre)) {
      div.className = "curso completado";
    } else if (cumplidos || requisitos.length === 0) {
      div.className = "curso desbloqueado";
    } else {
      div.className = "curso bloqueado";
    }
  });
}

for (const ciclo in data) {
  const contenedor = document.createElement("div");
  contenedor.className = "ciclo";
  const titulo = document.createElement("h3");
  titulo.textContent = `Ciclo ${ciclo}`;
  contenedor.appendChild(titulo);

  data[ciclo].forEach(curso => {
    if (typeof curso === "string") {
      contenedor.appendChild(crearCurso(curso));
    } else {
      contenedor.appendChild(crearCurso(curso.nombre, curso.requisitos || []));
    }
  });

  grid.appendChild(contenedor);
}

actualizarCursos();
