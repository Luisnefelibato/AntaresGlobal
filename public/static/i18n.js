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
    
    // Design Service Page
    'design.hero.title': 'Design That Creates Impact',
    'design.hero.subtitle': 'Whether you\'re starting from scratch or your brand needs evolution, we specialize in visual solutions that communicate your values instantly. Our design team creates signage that makes your business stand out.',
    'design.hero.callButton': 'Call Now: (689) 331-2690',
    'design.whatWeDo.title': 'What We Do for Your Business',
    'design.whatWeDo.subtitle': 'From concept to creation, we design signage that attracts customers and boosts your brand visibility',
    'design.branding.title': 'BRANDING',
    'design.branding.desc': 'Complete brand identity development that communicates your values and differentiates you from the competition.',
    'design.branding.item1': 'Logo design and brand guidelines',
    'design.branding.item2': 'Color palette and typography',
    'design.branding.item3': 'Brand positioning strategy',
    'design.branding.item4': 'Visual identity systems',
    'design.graphic.title': 'GRAPHIC DESIGN',
    'design.graphic.desc': 'Professional graphic design for all your signage and advertising materials with visual impact.',
    'design.graphic.item1': 'Business cards and stationery',
    'design.graphic.item2': 'Brochures and catalogs',
    'design.graphic.item3': 'Posters and banners',
    'design.graphic.item4': 'Packaging and labels',
    'design.digital.title': 'DIGITAL DESIGN',
    'design.digital.desc': 'Modern digital design for social media, websites, and all your online presence needs.',
    'design.digital.item1': 'Social media graphics and ads',
    'design.digital.item2': 'Web banners and email templates',
    'design.digital.item3': 'Digital signage and displays',
    'design.digital.item4': 'Interactive presentations',
    'design.compliance.title': 'Compliance & Regulations',
    'design.process.title': 'Our Design Process',
    'design.process.step1.title': 'Consultation',
    'design.process.step1.desc': 'We listen to your vision and business goals',
    'design.process.step2.title': 'Design Concepts',
    'design.process.step2.desc': 'Multiple design options for your review',
    'design.process.step3.title': 'Refinement',
    'design.process.step3.desc': 'Perfect every detail with your feedback',
    'design.process.step4.title': 'Final Delivery',
    'design.process.step4.desc': 'Production-ready files for perfect execution',
    
    // Production Service Page
    'production.hero.title': 'Prints That Leave a Mark',
    'production.hero.subtitle': 'In a digital world, physical has special weight. Texture, color precision, and finish quality say more about you than a thousand emails. We don\'t just print; we ensure the first impression is flawless.',
    'production.hero.callButton': 'Call Now: (689) 331-2690',
    'production.whatWeDo.title': 'Prints That Bring Your Projects to Life',
    'production.whatWeDo.subtitle': 'Professional large format printing with precision color matching and premium materials. Every print is inspected for quality before delivery.',
    'production.largeFormat.title': 'LARGE FORMAT PRINTING',
    'production.largeFormat.desc': 'Large-format printing for high-impact visual advertising. Perfect for building facades, events, and outdoor advertising.',
    'production.pop.title': 'POP MATERIALS',
    'production.pop.desc': 'Point of purchase materials that drive sales and enhance customer experience at retail locations.',
    'production.brochures.title': 'BROCHURES & CATALOGS',
    'production.brochures.desc': 'Professional brochures, catalogs, and printed materials for marketing and corporate communications.',
    'production.whyStandOut.title': 'Why Our Prints Stand Out',
    'production.equipment.title': 'Advanced Equipment',
    'production.quality.title': 'Quality Assurance',
    'production.turnaround.title': 'Fast Turnaround',
    'production.turnaround.desc': 'Standard: 3-5 business days<br/>Rush: 24-48 hours available',
    'production.pricing.title': 'Competitive Pricing',
    'production.pricing.desc': 'Volume discounts available<br/>Price match guarantee',
    'production.delivery.title': 'Delivery Options',
    'production.delivery.desc': 'Local pickup or shipping<br/>Installation services available',
    'production.compliance.title': 'Compliance & Regulations',
    
    // Installation Service Page
    'installation.hero.title': 'Installation With Precision',
    'installation.hero.subtitle': 'No matter the height, surface, or complexity. We have the equipment and experience to install your visual communication in any environment. Licensed, insured, and Title 24 compliant.',
    'installation.hero.callButton': 'Call Now: (689) 331-2690',
    'installation.whatWeDo.title': 'High-Impact Installation Specialists',
    'installation.whatWeDo.subtitle': 'Professional signage installation with certified crews, advanced equipment, and comprehensive safety protocols. Licensed, insured, and Title 24 compliant.',
    'installation.commercial.title': 'COMMERCIAL SIGNAGE',
    'installation.commercial.desc': 'Complete commercial signage installation for storefronts, buildings, and business locations. Professional mounting and electrical work.',
    'installation.led.title': 'LED INSTALLATION',
    'installation.led.desc': 'Licensed electrical contractors for LED sign installation, retrofits, and energy-efficient lighting solutions.',
    'installation.highrise.title': 'HIGH-RISE INSTALLATION',
    'installation.highrise.desc': 'Specialized high-rise installation with crane service, rope access certification, and OSHA-compliant safety protocols.',
    'installation.permits.title': 'Installation Permits & Compliance',
    
    // Featured Projects Section (Homepage)
    'featured.title': 'Featured Projects',
    'featured.subtitle': 'Explore our latest high-profile installations',
    'featured.videoPlaceholder': 'Project Showcase Video',
    'featured.comingSoon': 'Coming Soon',
    'featured.viewAll': 'View All Projects',
    
    // Final CTA Section (Homepage)
    'finalCta.title': 'Ready to Start Your Project?',
    'finalCta.subtitle': 'Get a free consultation with our technical team',
    'finalCta.call': 'Call (689) 331-2690',
    'finalCta.quote': 'Request Free Quote',
    
    // Footer Services Links
    'footer.services.signage': 'Signage Installation',
    'footer.services.led': 'LED Retrofit',
    'footer.services.maintenance': 'Maintenance',
    'footer.services.compliance': 'Compliance',
    'footer.services.custom': 'Custom Solutions',
    
    // Request Call Modal
    'modal.requestCall.title': 'Request a Call',
    'modal.requestCall.subtitle': 'Fill out the form and we\'ll contact you soon',
    
    // Chatbot
    'chatbot.title': 'Antares Support',
    'chatbot.welcome': 'Welcome to Antares Innovate! 👋',
    
    // Services Main Page
    'servicesPage.title': 'Our Services',
    'servicesPage.subtitle': 'From concept to installation, we provide comprehensive solutions for your signage and branding needs.',
    'servicesPage.design.title': 'Design',
    'servicesPage.design.desc': 'Creative design solutions that capture your brand essence. From logos to complete visual identity systems.',
    'servicesPage.production.title': 'Production',
    'servicesPage.production.desc': 'High-quality printing and fabrication with precision color matching and premium materials.',
    'servicesPage.installation.title': 'Installation',
    'servicesPage.installation.desc': 'Professional installation with certified crews, advanced equipment, and comprehensive safety protocols.',
    'servicesPage.learnMore': 'Learn More',
    'servicesPage.whyChoose.title': 'Why Choose Antares?',
    'servicesPage.whyChoose.licensed.title': 'Licensed & Insured',
    'servicesPage.whyChoose.licensed.desc': 'C-10 & C-45 California licenses with $2M liability coverage',
    'servicesPage.whyChoose.compliant.title': 'Title 24 Compliant',
    'servicesPage.whyChoose.compliant.desc': 'All installations meet California energy code requirements',
    'servicesPage.whyChoose.support.title': '24/7 Support',
    'servicesPage.whyChoose.support.desc': 'Round-the-clock technical assistance and emergency services',
    'servicesPage.cta.title': 'Ready to Get Started?',
    'servicesPage.cta.subtitle': 'Contact us today for a free consultation',
    'servicesPage.cta.call': 'Call (689) 331-2690',
    'servicesPage.cta.contact': 'Contact Us',
    'contact.directContact': 'Direct Contact',
    'contact.required': '*',
    
    // Services/Design Page
    'services.design.page.title': 'Design That Creates Impact',
    'services.design.page.subtitle': 'Whether you\'re starting from scratch or your brand needs evolution, we specialize in visual solutions that communicate your values instantly. Our design team creates signage that makes your business stand out.',
    'services.design.page.cta': 'Call Now: (689) 331-2690',
    'services.design.page.what': 'What We Do for Your Business',
    'services.design.page.whatSub': 'From concept to creation, we design signage that attracts customers and boosts your brand visibility',
    'services.design.page.branding': 'BRANDING',
    'services.design.page.brandingDesc': 'Complete brand identity development that communicates your values and differentiates you from the competition.',
    'services.design.page.graphic': 'GRAPHIC DESIGN',
    'services.design.page.graphicDesc': 'Professional graphic design for all your signage and advertising materials with visual impact.',
    'services.design.page.digital': 'DIGITAL DESIGN',
    'services.design.page.digitalDesc': 'Modern digital design for social media, websites, and all your online presence needs.',
    'services.design.page.compliance': 'Compliance & Regulations',
    
    // Services/Production Page
    'services.production.page.title': 'Prints That Leave a Mark',
    'services.production.page.subtitle': 'From small format to large-scale productions, we transform your designs into high-quality physical products that make an impact.',
    
    // Services/Installation Page
    'services.installation.page.title': 'Installation With Precision',
    'services.installation.page.subtitle': 'Expert installation services with certified crews, specialized equipment, and guaranteed compliance.'
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
    'hero.title2': 'en',
    'hero.title3': 'Experiencias de Marca',
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
    'contact.required': '*',
    
    // Design Service Page
    'design.hero.title': 'Diseño Que Crea Impacto',
    'design.hero.subtitle': 'Ya sea que estés comenzando desde cero o tu marca necesite evolución, nos especializamos en soluciones visuales que comunican tus valores instantáneamente. Nuestro equipo de diseño crea señalización que hace destacar tu negocio.',
    'design.hero.callButton': 'Llamar Ahora: (689) 331-2690',
    'design.whatWeDo.title': 'Lo Que Hacemos por Tu Negocio',
    'design.whatWeDo.subtitle': 'Desde el concepto hasta la creación, diseñamos señalización que atrae clientes y potencia la visibilidad de tu marca',
    'design.branding.title': 'BRANDING',
    'design.branding.desc': 'Desarrollo completo de identidad de marca que comunica tus valores y te diferencia de la competencia.',
    'design.branding.item1': 'Diseño de logo y guías de marca',
    'design.branding.item2': 'Paleta de colores y tipografía',
    'design.branding.item3': 'Estrategia de posicionamiento de marca',
    'design.branding.item4': 'Sistemas de identidad visual',
    'design.graphic.title': 'DISEÑO GRÁFICO',
    'design.graphic.desc': 'Diseño gráfico profesional para toda tu señalización y materiales publicitarios con impacto visual.',
    'design.graphic.item1': 'Tarjetas de presentación y papelería',
    'design.graphic.item2': 'Folletos y catálogos',
    'design.graphic.item3': 'Pósters y banners',
    'design.graphic.item4': 'Empaques y etiquetas',
    'design.digital.title': 'DISEÑO DIGITAL',
    'design.digital.desc': 'Diseño digital moderno para redes sociales, sitios web y todas las necesidades de tu presencia en línea.',
    'design.digital.item1': 'Gráficos y anuncios para redes sociales',
    'design.digital.item2': 'Banners web y plantillas de correo',
    'design.digital.item3': 'Señalización digital y pantallas',
    'design.digital.item4': 'Presentaciones interactivas',
    'design.compliance.title': 'Cumplimiento y Regulaciones',
    'design.process.title': 'Nuestro Proceso de Diseño',
    'design.process.step1.title': 'Consulta',
    'design.process.step1.desc': 'Escuchamos tu visión y objetivos de negocio',
    'design.process.step2.title': 'Conceptos de Diseño',
    'design.process.step2.desc': 'Múltiples opciones de diseño para tu revisión',
    'design.process.step3.title': 'Refinamiento',
    'design.process.step3.desc': 'Perfeccionamos cada detalle con tus comentarios',
    'design.process.step4.title': 'Entrega Final',
    'design.process.step4.desc': 'Archivos listos para producción y ejecución perfecta',
    
    // Production Service Page
    'production.hero.title': 'Impresiones Que Dejan Huella',
    'production.hero.subtitle': 'En un mundo digital, lo físico tiene un peso especial. La textura, la precisión del color y la calidad del acabado dicen más de ti que mil correos. No solo imprimimos; aseguramos que la primera impresión sea impecable.',
    'production.hero.callButton': 'Llamar Ahora: (689) 331-2690',
    'production.whatWeDo.title': 'Impresiones Que Dan Vida a Tus Proyectos',
    'production.whatWeDo.subtitle': 'Impresión profesional de gran formato con precisión de color y materiales premium. Cada impresión es inspeccionada antes de la entrega.',
    'production.largeFormat.title': 'IMPRESIÓN GRAN FORMATO',
    'production.largeFormat.desc': 'Impresión de gran formato para publicidad visual de alto impacto. Perfecto para fachadas, eventos y publicidad exterior.',
    'production.pop.title': 'MATERIALES POP',
    'production.pop.desc': 'Materiales de punto de venta que impulsan las ventas y mejoran la experiencia del cliente en ubicaciones de retail.',
    'production.brochures.title': 'FOLLETOS Y CATÁLOGOS',
    'production.brochures.desc': 'Folletos, catálogos y materiales impresos profesionales para marketing y comunicaciones corporativas.',
    'production.whyStandOut.title': 'Por Qué Nuestras Impresiones Destacan',
    'production.equipment.title': 'Equipo Avanzado',
    'production.quality.title': 'Garantía de Calidad',
    'production.turnaround.title': 'Entrega Rápida',
    'production.turnaround.desc': 'Estándar: 3-5 días hábiles<br/>Express: 24-48 horas disponible',
    'production.pricing.title': 'Precios Competitivos',
    'production.pricing.desc': 'Descuentos por volumen disponibles<br/>Garantía de igualación de precios',
    'production.delivery.title': 'Opciones de Entrega',
    'production.delivery.desc': 'Recogida local o envío<br/>Servicios de instalación disponibles',
    'production.compliance.title': 'Cumplimiento y Regulaciones',
    
    // Installation Service Page
    'installation.hero.title': 'Instalación Con Precisión',
    'installation.hero.subtitle': 'Sin importar la altura, superficie o complejidad. Tenemos el equipo y la experiencia para instalar tu comunicación visual en cualquier entorno. Licenciados, asegurados y conformes con Title 24.',
    'installation.hero.callButton': 'Llamar Ahora: (689) 331-2690',
    'installation.whatWeDo.title': 'Especialistas en Instalación de Alto Impacto',
    'installation.whatWeDo.subtitle': 'Instalación profesional de señalización con equipos certificados, equipo avanzado y protocolos de seguridad integrales. Licenciados, asegurados y conformes con Title 24.',
    'installation.commercial.title': 'SEÑALIZACIÓN COMERCIAL',
    'installation.commercial.desc': 'Instalación completa de señalización comercial para fachadas, edificios y ubicaciones de negocios. Montaje profesional y trabajo eléctrico.',
    'installation.led.title': 'INSTALACIÓN LED',
    'installation.led.desc': 'Contratistas eléctricos licenciados para instalación de letreros LED, modernizaciones y soluciones de iluminación eficiente.',
    'installation.highrise.title': 'INSTALACIÓN EN ALTURA',
    'installation.highrise.desc': 'Instalación especializada en grandes alturas con servicio de grúa, certificación de acceso por cuerda y protocolos de seguridad conformes con OSHA.',
    'installation.permits.title': 'Permisos y Cumplimiento de Instalación',
    
    // Featured Projects Section (Homepage)
    'featured.title': 'Proyectos Destacados',
    'featured.subtitle': 'Explora nuestras últimas instalaciones de alto perfil',
    'featured.videoPlaceholder': 'Video de Exhibición de Proyectos',
    'featured.comingSoon': 'Próximamente',
    'featured.viewAll': 'Ver Todos los Proyectos',
    
    // Final CTA Section (Homepage)
    'finalCta.title': '¿Listo para Comenzar Tu Proyecto?',
    'finalCta.subtitle': 'Obtén una consulta gratuita con nuestro equipo técnico',
    'finalCta.call': 'Llamar (689) 331-2690',
    'finalCta.quote': 'Solicitar Presupuesto Gratuito',
    
    // Footer Services Links
    'footer.services.signage': 'Instalación de Señalización',
    'footer.services.led': 'Modernización LED',
    'footer.services.maintenance': 'Mantenimiento',
    'footer.services.compliance': 'Cumplimiento',
    'footer.services.custom': 'Soluciones Personalizadas',
    
    // Request Call Modal
    'modal.requestCall.title': 'Solicitar Llamada',
    'modal.requestCall.subtitle': 'Completa el formulario y te contactaremos pronto',
    
    // Chatbot
    'chatbot.title': 'Soporte Antares',
    'chatbot.welcome': '¡Bienvenido a Antares Innovate! 👋',
    
    // Services Main Page
    'servicesPage.title': 'Nuestros Servicios',
    'servicesPage.subtitle': 'Desde el concepto hasta la instalación, brindamos soluciones integrales para sus necesidades de señalización y branding.',
    'servicesPage.design.title': 'Diseño',
    'servicesPage.design.desc': 'Soluciones de diseño creativas que capturan la esencia de tu marca. Desde logos hasta sistemas completos de identidad visual.',
    'servicesPage.production.title': 'Producción',
    'servicesPage.production.desc': 'Impresión y fabricación de alta calidad con precisión de color y materiales premium.',
    'servicesPage.installation.title': 'Instalación',
    'servicesPage.installation.desc': 'Instalación profesional con equipos certificados, equipo avanzado y protocolos de seguridad integrales.',
    'servicesPage.learnMore': 'Saber Más',
    'servicesPage.whyChoose.title': '¿Por Qué Elegir Antares?',
    'servicesPage.whyChoose.licensed.title': 'Licenciados y Asegurados',
    'servicesPage.whyChoose.licensed.desc': 'Licencias C-10 y C-45 de California con cobertura de responsabilidad de $2M',
    'servicesPage.whyChoose.compliant.title': 'Cumple con Title 24',
    'servicesPage.whyChoose.compliant.desc': 'Todas las instalaciones cumplen con los requisitos del código energético de California',
    'servicesPage.whyChoose.support.title': 'Soporte 24/7',
    'servicesPage.whyChoose.support.desc': 'Asistencia técnica las 24 horas y servicios de emergencia',
    'servicesPage.cta.title': '¿Listo para Comenzar?',
    'servicesPage.cta.subtitle': 'Contáctenos hoy para una consulta gratuita',
    'servicesPage.cta.call': 'Llamar (689) 331-2690',
    'servicesPage.cta.contact': 'Contáctenos',
    
    // Services/Design Page
    'services.design.page.title': 'Diseño Que Crea Impacto',
    'services.design.page.subtitle': 'Ya sea que estés comenzando desde cero o tu marca necesite evolución, nos especializamos en soluciones visuales que comunican tus valores instantáneamente. Nuestro equipo de diseño crea señalización que hace destacar tu negocio.',
    'services.design.page.cta': 'Llamar Ahora: (689) 331-2690',
    'services.design.page.what': 'Lo Que Hacemos por Tu Negocio',
    'services.design.page.whatSub': 'Desde el concepto hasta la creación, diseñamos señalización que atrae clientes y potencia la visibilidad de tu marca',
    'services.design.page.branding': 'BRANDING',
    'services.design.page.brandingDesc': 'Desarrollo completo de identidad de marca que comunica tus valores y te diferencia de la competencia.',
    'services.design.page.graphic': 'DISEÑO GRÁFICO',
    'services.design.page.graphicDesc': 'Diseño gráfico profesional para toda tu señalización y materiales publicitarios con impacto visual.',
    'services.design.page.digital': 'DISEÑO DIGITAL',
    'services.design.page.digitalDesc': 'Diseño digital moderno para redes sociales, sitios web y todas las necesidades de tu presencia en línea.',
    'services.design.page.compliance': 'Cumplimiento y Regulaciones',
    
    // Services/Production Page
    'services.production.page.title': 'Impresiones Que Dejan Huella',
    'services.production.page.subtitle': 'Desde pequeño formato hasta producciones a gran escala, transformamos tus diseños en productos físicos de alta calidad que generan impacto.',
    
    // Services/Installation Page
    'services.installation.page.title': 'Instalación Con Precisión',
    'services.installation.page.subtitle': 'Servicios de instalación expertos con equipos certificados, equipo especializado y cumplimiento garantizado.'
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
