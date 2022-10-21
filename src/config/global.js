export default {
  global: {
    componenteFormativo:
      'El <em>buyer</em> persona según el contexto empresarial.',
    descripcionCurso:
      'Es vital delimitar el <em>buyer</em> persona en la estrategia de mercadeo digital para tener más oportunidades de éxito. Cuanto más conozcamos al cliente ideal, mejor se puede relacionar una marca con él para atraerlo hacia la empresa y darle el mensaje adaptado a su perfil y es así como la marca se puede convertir en su referente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/buyer-persona.gif'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Marketing</em> en entornos digitales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Planeación estratégica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Segmentación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La propuesta de valor de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelo de negocio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelo Canvas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Portafolio de negocio',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ciclo de vida del producto digital',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'La marca',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mapas de empatía, arquetipos y <em>buyer</em> persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características de los mapas de empatía',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Concepto de arquetipos digitales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Características de los arquetipos digitales	30',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Concepto de <em>buyer</em> persona',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: '3.5 Características de los <em>buyer</em> persona',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Concepto de prospecto de cliente',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Características de los prospectos',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Mercadeo',
      referencia:
        '<em>Marketing</em> Digital Castro. (2022). ¿Qué es el mercadeo? Definición de <em>marketing</em>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I84B6EIE-1A',
    },
    {
      tema: '<em>Marketing</em> en entornos digitales',
      referencia:
        'Cardona, L. (2021). ¿Qué es <em>marketing</em> digital? Introducción, tipos y canales.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nACJLWCmzk8 ',
    },
    {
      tema: 'La propuesta de valor de la organización',
      referencia: 'Mejía, C. A. (2020). La propuesta de valor. ',
      tipo: 'Artículo',
      link: 'https://www.planning.com.co/bd/mercadeo_eficaz/Julio2003.pdf',
    },
    {
      tema: 'Modelo Canvas',
      referencia:
        'Expertemprende. (2017). Guía didáctica. Modelo Canvas. Junta de Extremadura.',
      tipo: 'PDF',
      link:
        'http://culturaemprendedora.extremaduraempresarial.es/wp-content/uploads/2012/09/Guia-Did%C3%A1ctica_Modelo-Canvas.pdf',
    },
    {
      tema: 'Concepto de <em>buyer</em> persona',
      referencia:
        'Tomás, D. (2018). <em>Buyer</em> persona - Qué es y Cómo hacerlo',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qkfB_p0DXO4',
    },
  ],
  glosario: [
    {
      termino: 'Arquetipos',
      significado:
        'identidad que exhibe una marca. Es decir, el grupo de valores, atributos, creencias y rasgos de personalidad que la definen.',
    },
    {
      termino: '<em>Branding</em>',
      significado:
        'proceso de creación y arquitectura de una marca a través de una gestión planeada de toda secuencia gráfica, comunicacional y de posicionamiento que se lleva a cabo.',
    },
    {
      termino: '<em>Buyer</em> persona',
      significado: 'representación ficticia de un cliente ideal.',
    },
    {
      termino: 'Fidelización',
      significado:
        'ireside en una sucesión de estrategias y técnicas de mercadeo y ventas que tienen como finalidad lograr que los clientes que han adquirido previamente alguno de los productos de una marca, continúen comprando con el paso del tiempo, convirtiéndose en clientes habituales.',
    },
    {
      termino: 'Mapa de empatía',
      significado:
        'formato que sirve para hacer la descripción del cliente ideal de una marca a través del análisis de seis aspectos que se relacionan con los sentimientos de los seres humanos. Se puede desarrollar con base en preguntas que permitirán conocer el cliente y comprender cómo la marca se puede relacionar con él.',
    },
    {
      termino: 'Marca',
      significado:
        'caracterización comercial principal o el grupo de varios identificadores con los que se relaciona un producto para ofrecerlo en el mercado.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'módulo de la mercadotecnia que usa internet y tecnologías digitales <em>online</em>, como ordenadores, telefonía celular y demás plataformas y canales digitales para promocionar productos.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'ejecución de actividades que ayudan a que una marca logre los objetivos pactados, anticipándose a los deseos de los clientes y a crear productos idóneos para el mercado.',
    },
    {
      termino: 'Portafolio de negocio',
      significado:
        'mezcla de bienes, servicios, marcas, inversiones y todas las unidades de negocio que pueden conformar una compañía.',
    },
    {
      termino: 'Segmentación',
      significado:
        'técnica por la cual se dividen los clientes potenciales en diferentes grupos, que permiten que las marcas puedan remitir mensajes personalizados al público objetivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beltrán, M., Ledesma, J., & Parrales, V. (2019). El <em>buyer</em> persona como factor clave entre las tendencias en gestión empresarial. Revista Científica de la Investigación y el Conocimiento, 659-681.',
      link: '',
    },
    {
      referencia:
        'Clark, T., y Osterwalder, A. (2017). Modelo de negocio. Editorial Planeta.',
      link: '',
    },
    {
      referencia:
        'González, P. (2017). Una propuesta para medir la creación de valor por parte del capital intelectual en grandes empresas colombianas. Harvard Deusto Business Research, 6-27.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., y Keller, K. (2012). Dirección de <em>marketing</em>. Pearson Education.',
      link: '',
    },
    {
      referencia: 'Rivelli, H. (2019). <em>Marketing</em> digital. ',
      link:
        'https://docplayer.es/63117451-Marketing-digital-helena-belen-rivelli.html',
    },
    {
      referencia:
        'Rodríguez, I., Montes, G., y López, Ó. y. (2006). Principios y estrategias de <em>marketing</em>. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Vaciero, F., y Hernández, G. (2018). Herramientas prácticas para el desarrollo estratégico de la empresa. FC Editorial.',
      link: '',
    },
    {
      referencia:
        'Xie, S., y Min, Y. (2019). <em>Marketing</em> digital: navegando en aguas digitales. sumérgete conmigo. Ediciones de la U.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo de Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Experto Temático',
        centro: 'Centro de Comercio - Regional Cauca',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
