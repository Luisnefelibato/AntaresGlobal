// i18n.js - Internacionalizaci language switcher

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    'nav.requestCall': 'Request Call',
    
    // Hero
    'hero.badge': 'Engineering Excellence Since 2010',
    'hero.title1': 'We Transform Spaces',
    'hero.title2': 'into',
    'hero.title3': 'Brand',
    'hero.title4': 'Experiences',
    'hero.subtitle1': 'Creative Design, Full Production, Professional Installation',
    'hero.subtitle2': 'From concept to installation. One provider for the entire process.',
    'hero.callButton': 'Call Now: +1 (689) 331-2690',
    'hero.quoteButton': 'Request Free Quote',
    
    // Services
    'services.badge': 'Strategic Services',
    'services.mainTitle': 'Your Trusted Provider For The Entire Process',
    'services.mainSubtitle': 'From Concept → Design → Production → Installation. Efficiency, compliance, and quality at every stage.',
    
    // Design Column
    'services.design.badge': 'Design',
    'services.design.title': 'Creative Design',
    'services.design.subtitle': 'VISUAL IDENTITY & BRANDING',
    'services.design.desc': 'Complete design solutions from branding to final art. We create visual identities that communicate and convert.',
    'services.design.item1.title': 'Branding:',
    'services.design.item1.desc': 'Logo, color palette, visual identity systems',
    'services.design.item2.title': 'Graphic Design:',
    'services.design.item2.desc': 'Business cards, brochures, posters, packaging',
    'services.design.item3.title': 'Digital Design:',
    'services.design.item3.desc': 'Social media, web graphics, presentations',
    'services.design.link': 'Explore Design',
    
    // Production Column
    'services.production.badge': 'Production',
    'services.production.title': 'Full Production',
    'services.production.subtitle': 'PRINTING & MANUFACTURING',
    'services.production.desc': 'From design to physical product. Complete production services including all types of printing and materials.',
    'services.production.item1.title': 'Large Format:',
    'services.production.item1.desc': 'Banners, vinyl, perforated film, window graphics',
    'services.production.item2.title': 'Print Materials:',
    'services.production.item2.desc': 'Stickers, posters, flyers, brochures, catalogs',
    'services.production.item3.title': 'POP & Retail:',
    'services.production.item3.desc': 'Displays, standees, floor graphics, promotional materials',
    'services.production.link': 'Explore Production',
    
    // Installation Column
    'services.installation.badge': 'Installation',
    'services.installation.title': 'Professional Installation',
    'services.installation.subtitle': 'CERTIFIED MOUNTING & SETUP',
    'services.installation.desc': 'Expert installation with certified technicians, specialized equipment, and guaranteed compliance.',
    'services.installation.item1.title': 'Commercial Signage:',
    'services.installation.item1.desc': 'Storefronts, facades, monument signs',
    'services.installation.item2.title': 'LED Systems:',
    'services.installation.item2.desc': 'Electrical installation, energy retrofits',
    'services.installation.item3.title': 'High-Rise Work:',
    'services.installation.item3.desc': 'SPRAT/OSHA certified technicians',
    'services.installation.link': 'Explore Installation',
    
    // Guarantees/Why Choose Us
    'services.guarantees.title': 'Comprehensive Guarantees',
    'services.guarantees.subtitle': 'Your success is our mission. Every project backed by industry-leading certifications and guarantees.',
    'services.guarantees.certified.title': 'Certified Contractors',
    'services.guarantees.certified.desc': 'C-10 & C-45 Licensed in California',
    'services.guarantees.certified.badge': 'Verified',
    'services.guarantees.permits.title': 'Permits & Insurance',
    'services.guarantees.permits.desc': 'Full legal compliance and $2M coverage',
    'services.guarantees.permits.badge': 'Protected',
    'services.guarantees.inspection.title': '100% Inspection',
    'services.guarantees.inspection.desc': 'Pre-delivery quality control process',
    'services.guarantees.inspection.badge': 'Certified',
    'services.guarantees.support.title': '24/7 Support',
    'services.guarantees.support.desc': 'Continuous maintenance and upgrades',
    'services.guarantees.support.badge': 'Active',
    
    // Stats
    'stats.years': 'Years Experience',
    'stats.projects': 'Projects Completed',
    'stats.support': 'Technical Support',
    'stats.compliance': 'Compliance',
    
    // Certifications
    'certs.licensed': 'C-10 & C-45 Licensed',
    'certs.certified': 'SPRAT/OSHA Certified',
    'certs.compliant': 'Title 24 Compliant',
    'certs.insured': '$2M Insured',
    
    // Why Us
    'whyus.title': 'Why Choose Antares',
    'whyus.subtitle': 'Your trusted partner from concept to completion',
    'whyus.comprehensive.title': 'Comprehensive Solutions',
    'whyus.comprehensive.desc': 'One provider for design, production, and installation. Seamless process from start to finish.',
    'whyus.quality.title': 'Premium Quality',
    'whyus.quality.desc': 'Industrial-grade materials, precision engineering, and rigorous quality control standards.',
    'whyus.expertise.title': 'Expert Team',
    'whyus.expertise.desc': 'Certified contractors (C-10 & C-45 Licensed), experienced crews, and technical specialists.',
    'whyus.support.title': '24/7 Support',
    'whyus.support.desc': 'Round-the-clock technical assistance, emergency services, and maintenance programs.',
    
    // CTA
    'cta.ready': 'Ready to Start Your Project?',
    'cta.subtitle': 'From concept to installation, we\'re your trusted provider for the entire process',
    'cta.callNow': 'Call Now: (689) 331-2690',
    'cta.requestQuote': 'Request Free Quote',
    
    // Footer
    'footer.tagline': 'Global leader in industrial signage, LED engineering, and technical compliance solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.hours': 'Hours',
    'footer.support247': '24/7 Technical Support',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Explore our portfolio of design, production, and installation work',
    'projects.filterAll': 'All Projects',
    'projects.filterDesign': '🎨 Design',
    'projects.filterProduction': '🖨️ Production',
    'projects.filterInstallation': '⚡ Installation',
    
    // Project Tags
    'projects.tag.design': 'Design',
    'projects.tag.production': 'Production',
    'projects.tag.installation': 'Installation',
    'projects.tag.branding': 'Branding',
    'projects.tag.manufacturing': 'Manufacturing',
    'projects.tag.interior': 'Interior',
    'projects.tag.medical': 'Medical',
    
    // About Page
    'about.title': 'About Antares Innovate',
    'about.subtitle': 'Strategic Vision. Technical Authority. Global Reach.',
    'about.whoWeAre': 'Who We Are',
    'about.overview1': 'Antares Innovate is not just another signage contractor. We are a technology-driven industrial partner specialized in complex commercial installations, LED optimization, and regulatory compliance frameworks.',
    'about.overview2': 'Operating under strict California Title 24 and electrical code requirements, we deliver engineered solutions that balance performance, efficiency, and legal certainty.',
    'about.overview3': 'Our approach is built on precision, accountability, and long-term strategic thinking—designed for corporate clients, franchises, and large-scale projects that demand excellence.',
    'about.coreValues': 'Our Core Values',
    'about.value1.title': 'Technical Excellence',
    'about.value1.desc': 'Engineering-driven approach with precision execution and quality standards',
    'about.value2.title': 'Compliance Focus',
    'about.value2.desc': 'Regulatory expertise turning compliance into competitive advantage',
    'about.value3.title': 'Innovation',
    'about.value3.desc': 'LED optimization and energy-efficient solutions for modern businesses',
    'about.value4.title': 'Global Reach',
    'about.value4.desc': 'Scalable solutions designed for multi-location and international projects',
    'about.cta.title': 'Ready to Work Together?',
    'about.cta.subtitle': 'Let\'s discuss your next signage or LED project',
    'about.cta.call': 'Call Now',
    'about.cta.contact': 'Contact Us',
    
    // Contact Page
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Contact our technical team for a consultation',
    'contact.formTitle': 'Send Us a Message',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name',
    'contact.service': 'Service Interest',
    'contact.serviceSelect': 'Select a service...',
    'contact.message': 'Project Details',
    'contact.messagePlaceholder': 'Tell us about your project requirements...',
    'contact.send': 'Send Message',
    'contact.directContact': 'Direct Contact',
    'contact.required': '*'
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.callNow': 'Llamar Ahora',
    'nav.requestCall': 'Solicitar Llamada',
    
    // Hero
    'hero.badge': 'Excelencia en Ingeniería Desde 2010',
    'hero.title1': 'Transformamos Espacios',
    'hero.title2': 'en Experiencias de',
    'hero.title3': 'Marca',
    'hero.title4': '',
    'hero.subtitle1': 'Diseño Creativo, Producción Completa, Instalación Profesional',
    'hero.subtitle2': 'Desde el concepto hasta la instalación. Un proveedor para todo el proceso.',
    'hero.callButton': 'Llamar Ahora: +1 (689) 331-2690',
    'hero.quoteButton': 'Solicitar Cotización Gratis',
    
    // Services
    'services.badge': 'Servicios Estratégicos',
    'services.mainTitle': 'Tu Proveedor de Confianza Para Todo el Proceso',
    'services.mainSubtitle': 'Desde el Concepto → Diseño → Producción → Instalación. Eficiencia, cumplimiento y calidad en cada etapa.',
    
    // Design Column
    'services.design.badge': 'Diseño',
    'services.design.title': 'Diseño Creativo',
    'services.design.subtitle': 'IDENTIDAD VISUAL Y BRANDING',
    'services.design.desc': 'Soluciones de diseño completas desde el branding hasta el arte final. Creamos identidades visuales que comunican y convierten.',
    'services.design.item1.title': 'Branding:',
    'services.design.item1.desc': 'Logo, paleta de colores, sistemas de identidad visual',
    'services.design.item2.title': 'Diseño Gráfico:',
    'services.design.item2.desc': 'Tarjetas de presentación, folletos, carteles, empaques',
    'services.design.item3.title': 'Diseño Digital:',
    'services.design.item3.desc': 'Redes sociales, gráficos web, presentaciones',
    'services.design.link': 'Explorar Diseño',
    
    // Production Column
    'services.production.badge': 'Producción',
    'services.production.title': 'Producción Completa',
    'services.production.subtitle': 'IMPRESIÓN Y MANUFACTURA',
    'services.production.desc': 'Del diseño al producto físico. Servicios de producción completos incluyendo todo tipo de impresión y materiales.',
    'services.production.item1.title': 'Gran Formato:',
    'services.production.item1.desc': 'Banners, vinil, película perforada, gráficos de ventana',
    'services.production.item2.title': 'Materiales Impresos:',
    'services.production.item2.desc': 'Calcomanías, carteles, volantes, folletos, catálogos',
    'services.production.item3.title': 'POP y Retail:',
    'services.production.item3.desc': 'Displays, exhibidores, gráficos de piso, materiales promocionales',
    'services.production.link': 'Explorar Producción',
    
    // Installation Column
    'services.installation.badge': 'Instalación',
    'services.installation.title': 'Instalación Profesional',
    'services.installation.subtitle': 'MONTAJE Y CONFIGURACIÓN CERTIFICADA',
    'services.installation.desc': 'Instalación experta con técnicos certificados, equipo especializado y cumplimiento garantizado.',
    'services.installation.item1.title': 'Señalización Comercial:',
    'services.installation.item1.desc': 'Fachadas, escaparates, señales monumentales',
    'services.installation.item2.title': 'Sistemas LED:',
    'services.installation.item2.desc': 'Instalación eléctrica, modernización energética',
    'services.installation.item3.title': 'Trabajo en Alturas:',
    'services.installation.item3.desc': 'Técnicos certificados SPRAT/OSHA',
    'services.installation.link': 'Explorar Instalación',
    
    // Guarantees/Why Choose Us
    'services.guarantees.title': 'Garantías Integrales',
    'services.guarantees.subtitle': 'Tu éxito es nuestra misión. Cada proyecto respaldado por certificaciones y garantías líderes en la industria.',
    'services.guarantees.certified.title': 'Contratistas Certificados',
    'services.guarantees.certified.desc': 'Licencia C-10 y C-45 en California',
    'services.guarantees.certified.badge': 'Verificado',
    'services.guarantees.permits.title': 'Permisos y Seguros',
    'services.guarantees.permits.desc': 'Cumplimiento legal completo y cobertura de $2M',
    'services.guarantees.permits.badge': 'Protegido',
    'services.guarantees.inspection.title': '100% Inspección',
    'services.guarantees.inspection.desc': 'Proceso de control de calidad antes de la entrega',
    'services.guarantees.inspection.badge': 'Certificado',
    'services.guarantees.support.title': 'Soporte 24/7',
    'services.guarantees.support.desc': 'Mantenimiento continuo y actualizaciones',
    'services.guarantees.support.badge': 'Activo',
    
    // Stats
    'stats.years': 'Años de Experiencia',
    'stats.projects': 'Proyectos Completados',
    'stats.support': 'Soporte Técnico',
    'stats.compliance': 'Cumplimiento',
    
    // Certifications
    'certs.licensed': 'Licencia C-10 y C-45',
    'certs.certified': 'Certificado SPRAT/OSHA',
    'certs.compliant': 'Cumple con Título 24',
    'certs.insured': '$2M Asegurado',
    
    // Why Us
    'whyus.title': 'Por Qué Elegir Antares',
    'whyus.subtitle': 'Tu socio de confianza del concepto a la finalización',
    'whyus.comprehensive.title': 'Soluciones Integrales',
    'whyus.comprehensive.desc': 'Un proveedor para diseño, producción e instalación. Proceso sin interrupciones de principio a fin.',
    'whyus.quality.title': 'Calidad Premium',
    'whyus.quality.desc': 'Materiales de grado industrial, ingeniería de precisión y estándares rigurosos de control de calidad.',
    'whyus.expertise.title': 'Equipo Experto',
    'whyus.expertise.desc': 'Contratistas certificados (Licencia C-10 y C-45), equipos experimentados y especialistas técnicos.',
    'whyus.support.title': 'Soporte 24/7',
    'whyus.support.desc': 'Asistencia técnica las 24 horas, servicios de emergencia y programas de mantenimiento.',
    
    // CTA
    'cta.ready': '¿Listo para Comenzar tu Proyecto?',
    'cta.subtitle': 'Desde el concepto hasta la instalación, somos tu proveedor de confianza para todo el proceso',
    'cta.callNow': 'Llamar Ahora: (689) 331-2690',
    'cta.requestQuote': 'Solicitar Cotización Gratis',
    
    // Footer
    'footer.tagline': 'Líder global en señalización industrial, ingeniería LED y soluciones de cumplimiento técnico.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.phone': 'Teléfono',
    'footer.email': 'Correo',
    'footer.hours': 'Horario',
    'footer.support247': 'Soporte Técnico 24/7',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    
    // Projects
    'projects.title': 'Nuestros Proyectos',
    'projects.subtitle': 'Explora nuestro portafolio de trabajos de diseño, producción e instalación',
    'projects.filterAll': 'Todos los Proyectos',
    'projects.filterDesign': '🎨 Diseño',
    'projects.filterProduction': '🖨️ Producción',
    'projects.filterInstallation': '⚡ Instalación',
    
    // Project Tags
    'projects.tag.design': 'Diseño',
    'projects.tag.production': 'Producción',
    'projects.tag.installation': 'Instalación',
    'projects.tag.branding': 'Branding',
    'projects.tag.manufacturing': 'Manufactura',
    'projects.tag.interior': 'Interior',
    'projects.tag.medical': 'Médico',
    
    // About Page
    'about.title': 'Acerca de Antares Innovate',
    'about.subtitle': 'Visión Estratégica. Autoridad Técnica. Alcance Global.',
    'about.whoWeAre': 'Quiénes Somos',
    'about.overview1': 'Antares Innovate no es solo otro contratista de señalización. Somos un socio industrial impulsado por tecnología especializado en instalaciones comerciales complejas, optimización LED y marcos de cumplimiento regulatorio.',
    'about.overview2': 'Operando bajo estrictos requisitos del Título 24 de California y códigos eléctricos, entregamos soluciones ingenieriles que equilibran rendimiento, eficiencia y certeza legal.',
    'about.overview3': 'Nuestro enfoque se construye sobre precisión, responsabilidad y pensamiento estratégico a largo plazo—diseñado para clientes corporativos, franquicias y proyectos a gran escala que exigen excelencia.',
    'about.coreValues': 'Nuestros Valores Fundamentales',
    'about.value1.title': 'Excelencia Técnica',
    'about.value1.desc': 'Enfoque impulsado por ingeniería con ejecución precisa y estándares de calidad',
    'about.value2.title': 'Enfoque en Cumplimiento',
    'about.value2.desc': 'Experiencia regulatoria convirtiendo el cumplimiento en ventaja competitiva',
    'about.value3.title': 'Innovación',
    'about.value3.desc': 'Optimización LED y soluciones energéticamente eficientes para negocios modernos',
    'about.value4.title': 'Alcance Global',
    'about.value4.desc': 'Soluciones escalables diseñadas para proyectos multi-ubicación e internacionales',
    'about.cta.title': '¿Listo para Trabajar Juntos?',
    'about.cta.subtitle': 'Hablemos sobre tu próximo proyecto de señalización o LED',
    'about.cta.call': 'Llamar Ahora',
    'about.cta.contact': 'Contáctanos',
    
    // Contact Page
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para comenzar tu proyecto? Contacta a nuestro equipo técnico para una consulta',
    'contact.formTitle': 'Envíanos un Mensaje',
    'contact.firstName': 'Nombre',
    'contact.lastName': 'Apellido',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.company': 'Nombre de la Empresa',
    'contact.service': 'Servicio de Interés',
    'contact.serviceSelect': 'Selecciona un servicio...',
    'contact.message': 'Detalles del Proyecto',
    'contact.messagePlaceholder': 'Cuéntanos sobre los requisitos de tu proyecto...',
    'contact.send': 'Enviar Mensaje',
    'contact.directContact': 'Contacto Directo',
    'contact.required': '*'
  }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  translatePage(lang);
  updateLanguageButtons(lang);
}

// Translate all elements with data-i18n attribute
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      // Check if it's an input placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Update language button states
function updateLanguageButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active', 'bg-antares-blue', 'text-white');
      btn.classList.remove('text-white/60', 'hover:text-white');
    } else {
      btn.classList.remove('active', 'bg-antares-blue', 'text-white');
      btn.classList.add('text-white/60', 'hover:text-white');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getCurrentLanguage();
  translatePage(currentLang);
  updateLanguageButtons(currentLang);
  
  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
