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
    'services.title': 'Strategic Services',
    'services.subtitle': 'End-to-end solutions for your brand',
    'services.design.title': 'Design',
    'services.design.subtitle': 'Creative Concepts',
    'services.design.desc': 'Custom branding and signage design that captures your vision and attracts customers',
    'services.production.title': 'Production',
    'services.production.subtitle': 'Precision Manufacturing',
    'services.production.desc': 'High-quality fabrication with cutting-edge technology and premium materials',
    'services.installation.title': 'Installation',
    'services.installation.subtitle': 'Professional Setup',
    'services.installation.desc': 'Expert installation with certified crews, permits, and safety compliance',
    
    // Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Satisfied Clients',
    'stats.states': 'States Served',
    'stats.rating': 'Client Rating',
    
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
    'projects.subtitle': 'Browse our portfolio of design, production, and installation projects',
    'projects.filterAll': 'All Projects',
    'projects.filterDesign': 'Design',
    'projects.filterProduction': 'Production',
    'projects.filterInstallation': 'Installation'
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
    'services.title': 'Servicios Estratégicos',
    'services.subtitle': 'Soluciones completas para tu marca',
    'services.design.title': 'Diseño',
    'services.design.subtitle': 'Conceptos Creativos',
    'services.design.desc': 'Diseño personalizado de marca y señalización que captura tu visión y atrae clientes',
    'services.production.title': 'Producción',
    'services.production.subtitle': 'Fabricación de Precisión',
    'services.production.desc': 'Fabricación de alta calidad con tecnología de vanguardia y materiales premium',
    'services.installation.title': 'Instalación',
    'services.installation.subtitle': 'Configuración Profesional',
    'services.installation.desc': 'Instalación experta con equipos certificados, permisos y cumplimiento de seguridad',
    
    // Stats
    'stats.projects': 'Proyectos Completados',
    'stats.clients': 'Clientes Satisfechos',
    'stats.states': 'Estados Atendidos',
    'stats.rating': 'Calificación de Clientes',
    
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
    'projects.subtitle': 'Explora nuestro portafolio de proyectos de diseño, producción e instalación',
    'projects.filterAll': 'Todos los Proyectos',
    'projects.filterDesign': 'Diseño',
    'projects.filterProduction': 'Producción',
    'projects.filterInstallation': 'Instalación'
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
