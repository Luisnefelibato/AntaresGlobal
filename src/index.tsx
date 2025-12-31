import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'
import { PageLayout, Header, Footer, RequestCallModal, ChatbotWidget } from './components'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Homepage
app.get('/', (c) => {
  const content = `
<!-- Hero Section with Animated Video -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Animated Background -->
  <div class="absolute inset-0 bg-gradient-to-b from-antares-dark via-antares-gray to-antares-dark">
    <div class="zoom-out-animation absolute inset-0"></div>
    <div class="absolute inset-0 bg-black/40"></div>
  </div>

  <!-- Hero Content -->
  <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="max-w-5xl mx-auto space-y-6 lg:space-y-8 fade-in">
      <!-- Badge -->
      <div class="inline-flex items-center space-x-2 bg-antares-blue/10 border border-antares-blue/20 rounded-full px-4 py-2">
        <span class="w-2 h-2 bg-antares-blue rounded-full animate-pulse"></span>
        <span class="text-antares-blue text-sm font-medium">Engineering Excellence Since 2010</span>
      </div>

      <!-- Main Heading -->
      <h1 class="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
        <span class="block text-white">Engineering Excellence</span>
        <span class="block text-white">Industrial <span class="text-antares-blue">Precision</span></span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
        Global leader in commercial signage installation, LED retrofit solutions, and technical compliance.
        <span class="block mt-2 text-white/50">Where regulatory expertise meets operational excellence.</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <a href="tel:+13234445555" class="group inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
          <svg class="w-6 h-6 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call Now: (323) 444-5555
        </a>
        <button onclick="openRequestCallModal()" class="group inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <svg class="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Request Consultation
        </button>
      </div>

      <!-- Trust Indicators -->
      <div class="pt-8 lg:pt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold text-white mb-1">15+</div>
          <div class="text-sm text-white/60">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold text-white mb-1">500+</div>
          <div class="text-sm text-white/60">Projects Completed</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold text-white mb-1">24/7</div>
          <div class="text-sm text-white/60">Technical Support</div>
        </div>
        <div class="text-center">
          <div class="text-3xl lg:text-4xl font-bold text-white mb-1">100%</div>
          <div class="text-sm text-white/60">Compliance</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </div>
</section>

<!-- Quick Services Preview -->
<section class="py-16 lg:py-24 bg-antares-gray/50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold mb-4">Our Core Services</h2>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">Comprehensive signage and LED solutions for modern businesses</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <a href="/services#signage" class="group bg-antares-dark border border-white/5 hover:border-antares-blue/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105">
        <div class="w-16 h-16 bg-antares-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue/20 transition-colors">
          <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <h3 class="text-xl font-display font-bold mb-3">Signage Installation</h3>
        <p class="text-white/60 mb-4">Professional commercial signage solutions</p>
        <span class="text-antares-blue text-sm font-medium group-hover:underline">Learn More →</span>
      </a>

      <a href="/services#led" class="group bg-antares-dark border border-white/5 hover:border-antares-blue/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105">
        <div class="w-16 h-16 bg-antares-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue/20 transition-colors">
          <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        </div>
        <h3 class="text-xl font-display font-bold mb-3">LED Retrofit</h3>
        <p class="text-white/60 mb-4">Energy-efficient lighting solutions</p>
        <span class="text-antares-blue text-sm font-medium group-hover:underline">Learn More →</span>
      </a>

      <a href="/services#compliance" class="group bg-antares-dark border border-white/5 hover:border-antares-blue/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105">
        <div class="w-16 h-16 bg-antares-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue/20 transition-colors">
          <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
          </svg>
        </div>
        <h3 class="text-xl font-display font-bold mb-3">Compliance</h3>
        <p class="text-white/60 mb-4">Full regulatory & Title 24 expertise</p>
        <span class="text-antares-blue text-sm font-medium group-hover:underline">Learn More →</span>
      </a>
    </div>

    <div class="text-center mt-12">
      <a href="/services" class="inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all duration-300 hover:scale-105">
        View All Services
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section class="py-16 lg:py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold mb-4">Featured Projects</h2>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">Explore our latest high-profile installations</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/projects" class="group relative h-80 rounded-2xl overflow-hidden">
        <img src="/static/images/projects/tesla-red-facade.jpg" alt="Tesla Installation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
          <div>
            <h3 class="text-xl font-bold mb-2">Tesla Dealership</h3>
            <p class="text-white/80 text-sm">Corporate Facade Signage</p>
          </div>
        </div>
      </a>

      <a href="/projects" class="group relative h-80 rounded-2xl overflow-hidden">
        <img src="/static/images/projects/volvo-mack-sunset.jpg" alt="Volvo Trucks" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
          <div>
            <h3 class="text-xl font-bold mb-2">Volvo & Mack Trucks</h3>
            <p class="text-white/80 text-sm">Automotive Pylon Installation</p>
          </div>
        </div>
      </a>

      <a href="/projects" class="group relative h-80 rounded-2xl overflow-hidden">
        <img src="/static/images/projects/crate-barrel-night.jpg" alt="Crate & Barrel" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
          <div>
            <h3 class="text-xl font-bold mb-2">Crate & Barrel</h3>
            <p class="text-white/80 text-sm">Retail Illuminated Signage</p>
          </div>
        </div>
      </a>
    </div>

    <div class="text-center mt-12">
      <a href="/projects" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-105">
        View All Projects
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 bg-gradient-to-br from-antares-blue to-blue-600">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl lg:text-5xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
    <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get a free consultation with our technical team</p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="tel:+13234445555" class="inline-flex items-center px-8 py-4 bg-white text-antares-blue hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        Call (323) 444-5555
      </a>
      <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-dark hover:bg-black rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
        Request Free Quote
      </button>
    </div>
  </div>
</section>
  `;
  
  return c.html(PageLayout('Home', 'Global leader in commercial signage installation, LED retrofit solutions, and technical compliance', content));
});

// Services Page
app.get('/services', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Antares Innovate | Industrial Signage & LED Engineering Excellence</title>
    <meta name="description" content="Global leader in commercial signage installation, LED retrofit solutions, and technical compliance. Engineering-driven approach for corporate and industrial projects.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              'sans': ['Inter', 'system-ui', 'sans-serif'],
              'display': ['Space Grotesk', 'system-ui', 'sans-serif']
            },
            colors: {
              'antares-blue': '#1a73e8',
              'antares-dark': '#0a0f1a',
              'antares-gray': '#151921'
            }
          }
        }
      }
    </script>
    
    <link rel="stylesheet" href="/static/styles.css">
    
    <!-- Phone Icons CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="font-sans antialiased bg-antares-dark text-white overflow-x-hidden">

    <!-- Fixed CTA Phone Button (Desktop) -->
    <a href="tel:+18002682273" class="cta-phone-button hidden md:flex items-center gap-2 font-bold text-sm hover:scale-105">
        <i class="fas fa-phone-alt"></i>
        <span>CALL NOW</span>
    </a>

    <!-- Navigation - Super Responsive -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div class="flex items-center justify-between">
                <a href="/" class="text-xl sm:text-2xl font-display font-bold tracking-tight cursor-pointer hover:text-antares-blue transition-colors" title="Go to Home">
                    ANTARES<span class="text-antares-blue">.</span>
                </a>
                
                <div class="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-medium">
                    <a href="#services" class="nav-link hover:text-antares-blue transition-colors">Services</a>
                    <a href="#portfolio" class="nav-link hover:text-antares-blue transition-colors">Projects</a>
                    <a href="#compliance" class="nav-link hover:text-antares-blue transition-colors">Compliance</a>
                    <a href="#approach" class="nav-link hover:text-antares-blue transition-colors">Approach</a>
                    <a href="tel:+18002682273" class="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-antares-blue hover:bg-antares-blue transition-all duration-300 whitespace-nowrap">
                        <i class="fas fa-phone"></i>
                        <span>1-800-ANTARES</span>
                    </a>
                    <button id="request-call-btn" class="btn-primary px-5 xl:px-6 py-2 xl:py-2.5 rounded-full bg-antares-blue hover:bg-blue-600 transition-all duration-300 whitespace-nowrap">
                        <i class="fas fa-headset mr-2"></i>
                        Request Call
                    </button>
                </div>
                
                <button id="mobile-menu-btn" class="lg:hidden text-white focus:outline-none p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 bg-antares-dark z-40 hidden">
        <div class="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
            <a href="#services" class="mobile-nav-link">Services</a>
            <a href="#portfolio" class="mobile-nav-link">Projects</a>
            <a href="#compliance" class="mobile-nav-link">Compliance</a>
            <a href="#approach" class="mobile-nav-link">Approach</a>
            <a href="#why-us" class="mobile-nav-link">Why Us</a>
            <a href="#contact" class="btn-primary px-8 py-3 rounded-full bg-antares-blue">Request Consultation</a>
        </div>
    </div>

    <!-- Hero Section - Super Responsive with Video Background -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
        <!-- Video Background Animation -->
        <div class="hero-video-container">
            <div class="hero-animated-bg"></div>
            <div class="cosmic-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
        </div>
        
        <div class="absolute inset-0 bg-gradient-to-br from-antares-dark/80 via-antares-gray/70 to-antares-dark/90"></div>
        
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="fade-in-up">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 leading-tight px-2">
                    <span class="text-white">Professional Signage &</span><br/>
                    <span class="text-antares-blue">
                        LED Solutions
                    </span>
                </h1>
                
                <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto font-light leading-relaxed px-4">
                    Global leader in commercial signage installation, LED retrofit solutions, and technical compliance.
                    Where regulatory expertise meets operational excellence.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 px-4">
                    <a href="#services" class="w-full sm:w-auto btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-antares-blue hover:bg-blue-600 transition-all duration-300 text-base sm:text-lg font-medium">
                        <i class="fas fa-briefcase mr-2"></i>
                        Explore Our Services
                    </a>
                    <a href="tel:+18002682273" class="w-full sm:w-auto btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white hover:bg-white hover:text-antares-dark transition-all duration-300 text-base sm:text-lg font-medium">
                        <i class="fas fa-phone mr-2"></i>
                        1-800-ANTARES
                    </a>
                </div>
                
                <!-- Trust Badges -->
                <div class="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <div class="flex items-center gap-2">
                        <i class="fas fa-check-circle text-antares-blue"></i>
                        <span>Title 24 Compliant</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="fas fa-check-circle text-antares-blue"></i>
                        <span>Licensed & Insured</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="fas fa-check-circle text-antares-blue"></i>
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="hidden sm:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    </section>

    <!-- About Section - Super Responsive -->
    <section id="about" class="py-16 sm:py-20 md:py-24 lg:py-32 bg-antares-gray relative overflow-hidden">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                <!-- Content Column -->
                <div class="fade-in-left order-2 lg:order-1">
                    <div class="text-xs sm:text-sm font-semibold text-antares-blue mb-3 sm:mb-4 tracking-wider uppercase">About Antares Innovate</div>
                    <h2 class="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
                        Strategic Vision.<br/>
                        Technical Authority.
                    </h2>
                    <div class="space-y-4 sm:space-y-5 md:space-y-6">
                        <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Antares Innovate is not just another signage contractor. We are a technology-driven industrial partner specialized in complex commercial installations, LED optimization, and regulatory compliance frameworks.
                        </p>
                        <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Operating under strict California Title 24 and electrical code requirements, we deliver engineered solutions that balance performance, efficiency, and legal certainty.
                        </p>
                        <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                            Our approach is built on precision, accountability, and long-term strategic thinking—designed for corporate clients, franchises, and large-scale projects that demand excellence.
                        </p>
                    </div>
                </div>
                
                <!-- Stats Column -->
                <div class="fade-in-right order-1 lg:order-2">
                    <div class="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        <!-- Stat Card 1 -->
                        <div class="stat-card bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                            <div class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-antares-blue mb-1 sm:mb-2">24/7</div>
                            <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wide leading-tight">Technical Support</div>
                        </div>
                        
                        <!-- Stat Card 2 -->
                        <div class="stat-card bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                            <div class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-antares-blue mb-1 sm:mb-2">100%</div>
                            <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wide leading-tight">Compliance Focus</div>
                        </div>
                        
                        <!-- Stat Card 3 -->
                        <div class="stat-card bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                            <div class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-antares-blue mb-1 sm:mb-2">Global</div>
                            <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wide leading-tight">Reach</div>
                        </div>
                        
                        <!-- Stat Card 4 -->
                        <div class="stat-card bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                            <div class="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-antares-blue mb-1 sm:mb-2">Proven</div>
                            <div class="text-xs sm:text-sm text-gray-400 uppercase tracking-wide leading-tight">Track Record</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-32 bg-antares-dark">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-20 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Core Capabilities</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Engineered Solutions</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive technical services designed for commercial and industrial environments
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service Card 1 -->
                <div class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group">
                    <div class="w-16 h-16 bg-antares-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue transition-all duration-300">
                        <svg class="w-8 h-8 text-antares-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4">Commercial Signage Installation</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Professional identification signage for retail, corporate, and franchise environments. Engineered for longevity, compliance, and brand consistency.
                    </p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>→ Structural engineering assessment</li>
                        <li>→ Permit coordination</li>
                        <li>→ Professional installation</li>
                        <li>→ Multi-location deployment</li>
                    </ul>
                </div>
                
                <!-- Service Card 2 -->
                <div class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group">
                    <div class="w-16 h-16 bg-antares-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue transition-all duration-300">
                        <svg class="w-8 h-8 text-antares-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4">LED Retrofit & Energy Optimization</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        High-efficiency LED conversion for existing illuminated signage and industrial lighting systems. Title 24 compliant, ROI-focused.
                    </p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>→ Energy consumption analysis</li>
                        <li>→ LED system design</li>
                        <li>→ Title 24 compliance verification</li>
                        <li>→ Long-term performance monitoring</li>
                    </ul>
                </div>
                
                <!-- Service Card 3 -->
                <div class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group">
                    <div class="w-16 h-16 bg-antares-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue transition-all duration-300">
                        <svg class="w-8 h-8 text-antares-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4">Technical Maintenance & Repair</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Preventive maintenance programs and emergency repair services for commercial signage and lighting systems. Minimize downtime, maximize asset life.
                    </p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>→ Scheduled preventive maintenance</li>
                        <li>→ 24/7 emergency response</li>
                        <li>→ Parts inventory management</li>
                        <li>→ Performance diagnostics</li>
                    </ul>
                </div>
                
                <!-- Service Card 4 -->
                <div class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group">
                    <div class="w-16 h-16 bg-antares-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue transition-all duration-300">
                        <svg class="w-8 h-8 text-antares-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4">Compliance & Permits Awareness</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Navigating California Title 24, electrical codes, and municipal signage ordinances. We understand the regulatory landscape and plan accordingly.
                    </p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>→ Regulatory requirement analysis</li>
                        <li>→ Permit application support</li>
                        <li>→ Code compliance verification</li>
                        <li>→ Documentation management</li>
                    </ul>
                </div>
                
                <!-- Service Card 5 -->
                <div class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group">
                    <div class="w-16 h-16 bg-antares-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue transition-all duration-300">
                        <svg class="w-8 h-8 text-antares-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4">Custom Industrial Solutions</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Specialized engineering for unique commercial environments. From high-security facilities to large-scale industrial campuses.
                    </p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>→ Custom fabrication capabilities</li>
                        <li>→ Complex project management</li>
                        <li>→ Specialized installation techniques</li>
                        <li>→ Integration with existing systems</li>
                    </ul>
                </div>
                
                <!-- Service Card 6 -->
                <div class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group">
                    <div class="w-16 h-16 bg-antares-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-antares-blue transition-all duration-300">
                        <svg class="w-8 h-8 text-antares-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4">Multi-Location Program Management</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">
                        Coordinated deployment across multiple sites for franchise and corporate chains. Standardized execution with local adaptation.
                    </p>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li>→ Scalable project frameworks</li>
                        <li>→ Centralized quality control</li>
                        <li>→ Consistent brand execution</li>
                        <li>→ Regional logistics coordination</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Projects Portfolio Section -->
    <section id="portfolio" class="py-32 bg-antares-gray relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
            <div class="grid-pattern"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Proven Excellence</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Featured Projects</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Corporate partnerships with leading global brands across automotive, retail, corporate, and industrial sectors
                </p>
            </div>
            
            <!-- Filter Tabs -->
            <div class="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
                <button class="portfolio-filter-btn active px-6 py-2.5 rounded-full bg-antares-blue text-white font-medium transition-all duration-300" data-filter="all">
                    All Projects
                </button>
                <button class="portfolio-filter-btn px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300" data-filter="automotive">
                    Automotive
                </button>
                <button class="portfolio-filter-btn px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300" data-filter="retail">
                    Retail
                </button>
                <button class="portfolio-filter-btn px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300" data-filter="corporate">
                    Corporate
                </button>
                <button class="portfolio-filter-btn px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300" data-filter="interior">
                    Interior Signage
                </button>
            </div>
            
            <!-- Projects Grid -->
            <div id="projects-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Project 1: Volvo/Mack Sunset -->
                <div class="project-card" data-category="automotive">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/volvo-mack-sunset.jpg" alt="Volvo Trucks LED Pylon Sign at Sunset" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Volvo Trucks</h3>
                                <p class="text-sm text-gray-300 mb-3">High-visibility LED pylon signage for premier automotive dealership</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">LED Illumination</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Pylon Sign</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2: LA Mall Installation -->
                <div class="project-card" data-category="retail">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/la-mall-installation.jpg" alt="Los Angeles Mall Commercial Signage Installation" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">LA Shopping Center</h3>
                                <p class="text-sm text-gray-300 mb-3">Complex urban installation with crane and bucket truck coordination</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">High-Rise</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Channel Letters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3: Five Below Retail -->
                <div class="project-card" data-category="retail">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/five-below-retail.jpg" alt="Five Below Retail Store Sign Installation" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Five Below</h3>
                                <p class="text-sm text-gray-300 mb-3">Retail chain facade signage with professional safety protocols</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Facade Install</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Multi-Location</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 4: Corporate Highrise -->
                <div class="project-card" data-category="corporate">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/corporate-highrise.jpg" alt="Corporate High-Rise Building Signage Installation" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Corporate Campus</h3>
                                <p class="text-sm text-gray-300 mb-3">Large-scale crane operations for high-rise building signage</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">High-Rise</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Technical Complexity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 5: Tesla Red Facade -->
                <div class="project-card" data-category="automotive">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/tesla-red-facade.jpg" alt="Tesla Automotive Dealership Red Facade Sign" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Tesla</h3>
                                <p class="text-sm text-gray-300 mb-3">Premium automotive branding with precision installation standards</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Premium Branding</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Facade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 6: Sports Venue LED -->
                <div class="project-card" data-category="interior">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/sports-venue-led.jpg" alt="Sports Venue LED Ceiling Installation Stanley Cup" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Professional Sports Arena</h3>
                                <p class="text-sm text-gray-300 mb-3">Custom LED ceiling installation for championship venue</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">LED Interior</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Sports Venue</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 7: Honda Pylon -->
                <div class="project-card" data-category="automotive">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/honda-pylon-blue.jpg" alt="Honda Automotive Dealership Pylon Sign" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Honda Dealership</h3>
                                <p class="text-sm text-gray-300 mb-3">Towering pylon sign with optimal visibility and brand presence</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Monument Sign</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Franchise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 8: APM Terminals -->
                <div class="project-card" data-category="corporate">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/apm-terminals-corporate.jpg" alt="APM Terminals Corporate Building Signage" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">APM Terminals</h3>
                                <p class="text-sm text-gray-300 mb-3">Global trade leader corporate identity signage</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Corporate</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Channel Letters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 9: Crate & Barrel Night -->
                <div class="project-card" data-category="retail">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/crate-barrel-night.jpg" alt="Crate&Barrel Retail Store LED Sign Installation at Night" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Crate&Barrel</h3>
                                <p class="text-sm text-gray-300 mb-3">Premium retail brand LED installation with night visibility</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">LED Retrofit</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Premium Retail</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 10: Alteri Wealth Interior -->
                <div class="project-card" data-category="interior">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/alteri-wealth-interior.jpg" alt="Alteri Wealth Corporate Office Interior LED Wall Sign" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Alteri Wealth</h3>
                                <p class="text-sm text-gray-300 mb-3">Sophisticated interior LED wall branding for financial services</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Interior LED</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Corporate Office</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 11: TikTok Neon Interior -->
                <div class="project-card" data-category="interior">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/tiktok-neon-interior.jpg" alt="TikTok Office Interior Neon LED Logo Sign" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Tech Corporate Office</h3>
                                <p class="text-sm text-gray-300 mb-3">Modern neon LED interior branding for leading tech company</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Neon LED</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Tech Brand</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 12: Regus Corporate -->
                <div class="project-card" data-category="corporate">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/regus-corporate-facade.jpg" alt="Regus Corporate Office Building Facade Signage" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Regus</h3>
                                <p class="text-sm text-gray-300 mb-3">International workspace provider multi-location branding program</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Global Brand</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Channel Letters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 13: Ford Dealership -->
                <div class="project-card" data-category="automotive">
                    <div class="group relative overflow-hidden rounded-2xl cursor-pointer">
                        <img src="/static/images/projects/ford-dealership-pylon.jpg" alt="Ford Automotive Dealership Pylon Sign Installation" class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-xl font-display font-bold mb-2">Ford Dealership</h3>
                                <p class="text-sm text-gray-300 mb-3">Iconic American brand pylon signage with highway visibility</p>
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Pylon Sign</span>
                                    <span class="px-3 py-1 bg-antares-blue/30 rounded-full text-xs">Highway Visibility</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <!-- CTA -->
            <div class="text-center mt-16 fade-in-up">
                <p class="text-lg text-gray-300 mb-6">Ready to elevate your brand presence?</p>
                <a href="#contact" class="inline-block px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-full font-bold text-lg transition-all duration-300">
                    Start Your Project
                </a>
            </div>
        </div>
    </section>

    <!-- Compliance Section -->
    <section id="compliance" class="py-32 bg-antares-gray relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
            <div class="grid-pattern"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-6 relative z-10">
            <div class="text-center mb-20 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Regulatory Excellence</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Compliance as Competitive Advantage</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Navigating complex regulations isn't a burden—it's an opportunity to demonstrate professionalism and protect your investment
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 mb-16">
                <div class="compliance-card bg-antares-dark p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-antares-blue/20 rounded-lg flex items-center justify-center">
                                <span class="text-2xl font-bold text-antares-blue">T24</span>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3">California Title 24</h3>
                            <p class="text-gray-300 leading-relaxed">
                                Complete understanding of California's energy efficiency standards. Our LED systems are designed to meet and exceed Title 24 requirements, ensuring regulatory compliance and long-term cost savings.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="compliance-card bg-antares-dark p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-antares-blue/20 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3">Electrical Code Standards</h3>
                            <p class="text-gray-300 leading-relaxed">
                                All installations meet National Electrical Code (NEC) and California Electrical Code requirements. Licensed electricians, proper permitting, and thorough inspection coordination.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="compliance-card bg-antares-dark p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-antares-blue/20 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3">Safety & Fire Compliance</h3>
                            <p class="text-gray-300 leading-relaxed">
                                Fire safety, structural load analysis, and emergency egress considerations are integrated into every project. No shortcuts, no assumptions.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="compliance-card bg-antares-dark p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <div class="w-12 h-12 bg-antares-blue/20 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3">Municipal Sign Ordinances</h3>
                            <p class="text-gray-300 leading-relaxed">
                                Local signage regulations vary by jurisdiction. We research, document, and ensure compliance with municipal codes before installation begins.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-antares-blue/20 to-transparent p-10 rounded-2xl border border-antares-blue/30">
                <h3 class="text-2xl font-display font-bold mb-4">Why Compliance Matters</h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                    Non-compliant installations create liability, financial risk, and operational disruption. Insurance complications, fines, forced removals, and reputational damage are entirely preventable. We treat regulatory compliance as a fundamental requirement, not an afterthought.
                </p>
            </div>
        </div>
    </section>

    <!-- Approach Section -->
    <section id="approach" class="py-32 bg-antares-dark">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-20 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Our Methodology</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Structured Execution Process</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Every project follows a proven framework designed to minimize risk and maximize outcomes
                </p>
            </div>
            
            <div class="space-y-8">
                <!-- Phase 1 -->
                <div class="approach-phase bg-antares-gray p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-antares-blue rounded-xl flex items-center justify-center text-2xl font-bold">01</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-display font-bold mb-3">Discovery & Assessment</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Comprehensive site evaluation, regulatory research, structural analysis, and project scope definition. We identify constraints and opportunities before committing to a plan.
                            </p>
                            <div class="grid md:grid-cols-3 gap-4 text-sm">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Site survey</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Regulatory review</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Scope documentation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Phase 2 -->
                <div class="approach-phase bg-antares-gray p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-antares-blue rounded-xl flex items-center justify-center text-2xl font-bold">02</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-display font-bold mb-3">Engineering & Design</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Technical specifications, structural calculations, electrical load analysis, and detailed installation plans. Every decision is documented and justified.
                            </p>
                            <div class="grid md:grid-cols-3 gap-4 text-sm">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">CAD drawings</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Material selection</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Load calculations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Phase 3 -->
                <div class="approach-phase bg-antares-gray p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-antares-blue rounded-xl flex items-center justify-center text-2xl font-bold">03</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-display font-bold mb-3">Permitting & Coordination</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Permit applications, authority approvals, utility coordination, and stakeholder communication. We manage the bureaucratic process so you don't have to.
                            </p>
                            <div class="grid md:grid-cols-3 gap-4 text-sm">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Permit filing</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Inspector coordination</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Utility liaison</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Phase 4 -->
                <div class="approach-phase bg-antares-gray p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-antares-blue rounded-xl flex items-center justify-center text-2xl font-bold">04</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-display font-bold mb-3">Professional Installation</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Skilled technicians, proper equipment, safety protocols, and quality control measures. Installation is executed according to plan with minimal site disruption.
                            </p>
                            <div class="grid md:grid-cols-3 gap-4 text-sm">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Safety compliance</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Quality control</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Progress tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Phase 5 -->
                <div class="approach-phase bg-antares-gray p-10 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300">
                    <div class="flex items-start space-x-6">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-antares-blue rounded-xl flex items-center justify-center text-2xl font-bold">05</div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-display font-bold mb-3">Verification & Handover</h3>
                            <p class="text-gray-300 leading-relaxed mb-4">
                                Final inspections, performance testing, documentation delivery, and client training. The project isn't complete until you're satisfied and fully informed.
                            </p>
                            <div class="grid md:grid-cols-3 gap-4 text-sm">
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Final inspection</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Documentation package</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-gray-400">Client training</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Us Section -->
    <section id="why-us" class="py-32 bg-antares-gray">
        <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-20 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Competitive Differentiation</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Why Antares Innovate</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Not all signage contractors are the same. Here's what sets us apart.
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-12">
                <div class="fade-in-left">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Engineering-First Mindset
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                We approach every project as an engineering challenge, not just a service call. Technical precision, structural integrity, and compliance are non-negotiable.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Regulatory Expertise
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                Deep understanding of Title 24, electrical codes, and municipal ordinances. We navigate complexity so you avoid costly mistakes and delays.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Corporate Readiness
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                Structured processes, professional documentation, and scalable execution. Built to serve franchises, corporate chains, and large-scale commercial projects.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Long-Term Partnership
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                We're not transactional. Maintenance programs, ongoing support, and strategic planning ensure your signage and lighting assets perform for years.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="fade-in-right">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                No Cutting Corners
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                Quality materials, licensed technicians, proper permits, and thorough testing. We don't compromise on fundamentals to win bids.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Efficiency Without Sacrifice
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                LED retrofits and energy optimization deliver real ROI without sacrificing performance. Every recommendation is data-driven and financially justified.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Global Perspective
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                While rooted in California's stringent regulatory environment, our operational model and technical standards are designed for international scalability.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="text-2xl font-display font-bold mb-3 flex items-center">
                                <span class="text-antares-blue mr-3">→</span>
                                Continuous Innovation
                            </h3>
                            <p class="text-gray-300 leading-relaxed">
                                We invest in training, technology, and process improvement. The industry evolves—so do we.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Global Vision Section -->
    <section id="global-vision" class="py-32 bg-antares-dark relative overflow-hidden">
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-antares-blue/10 to-transparent"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-6 relative z-10">
            <div class="text-center mb-16 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Strategic Positioning</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Built for Global Scale</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Antares Innovate isn't confined to regional thinking. Our systems, standards, and capabilities are designed for international expansion.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <div class="bg-antares-gray/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <div class="text-4xl mb-4">🌍</div>
                    <h3 class="text-xl font-display font-bold mb-3">Scalable Operations</h3>
                    <p class="text-gray-300">
                        Proven frameworks adaptable to different markets, regulations, and technical standards.
                    </p>
                </div>
                
                <div class="bg-antares-gray/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <div class="text-4xl mb-4">📊</div>
                    <h3 class="text-xl font-display font-bold mb-3">Data-Driven Decisions</h3>
                    <p class="text-gray-300">
                        Every project generates insights. We measure, analyze, and continuously improve.
                    </p>
                </div>
                
                <div class="bg-antares-gray/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <div class="text-4xl mb-4">🔧</div>
                    <h3 class="text-xl font-display font-bold mb-3">Technology Integration</h3>
                    <p class="text-gray-300">
                        Forward-thinking approach to emerging technologies and smart infrastructure.
                    </p>
                </div>
            </div>
            
            <div class="bg-gradient-to-r from-antares-blue to-blue-600 p-12 rounded-3xl text-center fade-in-up">
                <h3 class="text-3xl font-display font-bold mb-4">Ready to Lead, Not Follow</h3>
                <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    The signage and lighting industry needs strategic partners who understand that compliance, efficiency, and quality aren't obstacles—they're competitive advantages.
                </p>
                <a href="#contact" class="inline-block px-8 py-4 bg-white text-antares-blue font-bold rounded-full hover:bg-gray-100 transition-all duration-300">
                    Start a Conversation
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 bg-antares-gray">
        <div class="max-w-4xl mx-auto px-6">
            <div class="text-center mb-16 fade-in-up">
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Get In Touch</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Request a Consultation</h2>
                <p class="text-xl text-gray-300">
                    Whether you're planning a single location or a multi-site program, let's discuss how Antares Innovate can support your project.
                </p>
            </div>
            
            <div class="bg-antares-dark p-10 rounded-3xl border border-white/10">
                <form id="contact-form" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
                            <input type="text" name="name" required class="w-full px-4 py-3 bg-antares-gray border border-white/10 rounded-lg focus:outline-none focus:border-antares-blue transition-colors text-white">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-300">Company</label>
                            <input type="text" name="company" class="w-full px-4 py-3 bg-antares-gray border border-white/10 rounded-lg focus:outline-none focus:border-antares-blue transition-colors text-white">
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-300">Email</label>
                            <input type="email" name="email" required class="w-full px-4 py-3 bg-antares-gray border border-white/10 rounded-lg focus:outline-none focus:border-antares-blue transition-colors text-white">
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 text-gray-300">Phone</label>
                            <input type="tel" name="phone" class="w-full px-4 py-3 bg-antares-gray border border-white/10 rounded-lg focus:outline-none focus:border-antares-blue transition-colors text-white">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2 text-gray-300">Project Type</label>
                        <select name="project_type" class="w-full px-4 py-3 bg-antares-gray border border-white/10 rounded-lg focus:outline-none focus:border-antares-blue transition-colors text-white">
                            <option value="">Select a service</option>
                            <option value="signage">Signage Installation</option>
                            <option value="led-retrofit">LED Retrofit</option>
                            <option value="maintenance">Maintenance & Repair</option>
                            <option value="compliance">Compliance Consultation</option>
                            <option value="custom">Custom Solution</option>
                            <option value="multi-location">Multi-Location Program</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2 text-gray-300">Project Details</label>
                        <textarea name="message" rows="5" required class="w-full px-4 py-3 bg-antares-gray border border-white/10 rounded-lg focus:outline-none focus:border-antares-blue transition-colors text-white resize-none"></textarea>
                    </div>
                    
                    <button type="submit" class="w-full py-4 bg-antares-blue hover:bg-blue-600 rounded-lg font-bold text-lg transition-all duration-300">
                        Submit Request
                    </button>
                </form>
                
                <div class="mt-12 pt-12 border-t border-white/10 text-center">
                    <p class="text-gray-400 mb-4">Prefer direct contact?</p>
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="mailto:info@antaresinnovate.com" class="flex items-center space-x-2 text-antares-blue hover:text-blue-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>info@antaresinnovate.com</span>
                        </a>
                        <a href="tel:+1-800-ANTARES" class="flex items-center space-x-2 text-antares-blue hover:text-blue-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span>1-800-ANTARES</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-antares-dark border-t border-white/10 py-12">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-12 mb-12">
                <div>
                    <div class="text-2xl font-display font-bold mb-4">ANTARES<span class="text-antares-blue">.</span></div>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Industrial signage and LED engineering excellence. Global reach, local precision.
                    </p>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Services</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="#services" class="hover:text-antares-blue transition-colors">Signage Installation</a></li>
                        <li><a href="#services" class="hover:text-antares-blue transition-colors">LED Retrofit</a></li>
                        <li><a href="#services" class="hover:text-antares-blue transition-colors">Maintenance & Repair</a></li>
                        <li><a href="#services" class="hover:text-antares-blue transition-colors">Compliance Services</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Company</h4>
                    <ul class="space-y-2 text-sm text-gray-400">
                        <li><a href="#about" class="hover:text-antares-blue transition-colors">About Us</a></li>
                        <li><a href="#approach" class="hover:text-antares-blue transition-colors">Our Approach</a></li>
                        <li><a href="#why-us" class="hover:text-antares-blue transition-colors">Why Antares</a></li>
                        <li><a href="#contact" class="hover:text-antares-blue transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Location</h4>
                    <p class="text-sm text-gray-400 leading-relaxed">
                        Los Angeles, California<br/>
                        Serving California & Beyond<br/>
                        Licensed & Insured
                    </p>
                </div>
            </div>
            
            <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; 2024 Antares Innovate. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-antares-blue transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-antares-blue transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="/static/app.js"></script>
    <script src="/static/chatbot.js"></script>
    
    <!-- Request Call Modal -->
    <div id="request-call-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fadeIn">
            <button id="close-modal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <i class="fas fa-times text-xl"></i>
            </button>
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-antares-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-phone-alt text-antares-blue text-2xl"></i>
                </div>
                <h3 class="text-2xl font-display font-bold text-gray-800 mb-2">Request a Call Back</h3>
                <p class="text-gray-600">We'll call you within 15 minutes during business hours</p>
            </div>
            <form id="call-request-form" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-antares-blue text-gray-800" placeholder="John Doe">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-antares-blue text-gray-800" placeholder="(555) 123-4567">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Best Time to Call</label>
                    <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-antares-blue text-gray-800">
                        <option>Morning (8AM - 12PM)</option>
                        <option>Afternoon (12PM - 5PM)</option>
                        <option>Evening (5PM - 8PM)</option>
                        <option>ASAP</option>
                    </select>
                </div>
                <button type="submit" class="w-full bg-antares-blue hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors">
                    Request Call Now
                </button>
            </form>
        </div>
    </div>
</body>
</html>
  `)
})

// Projects Page
app.get('/projects', (c) => {
  const content = `
<section class="py-24 lg:py-32">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">Featured Projects</h1>
      <p class="text-xl text-white/60 max-w-3xl mx-auto">Explore our portfolio of high-profile installations across automotive, retail, corporate, and interior signage solutions</p>
    </div>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button onclick="filterProjects('all')" class="portfolio-filter-btn active px-6 py-3 bg-antares-blue text-white rounded-lg font-medium transition-all hover:bg-blue-600" data-filter="all">All Projects</button>
      <button onclick="filterProjects('automotive')" class="portfolio-filter-btn px-6 py-3 bg-white/5 text-white/80 rounded-lg font-medium transition-all hover:bg-white/10" data-filter="automotive">Automotive</button>
      <button onclick="filterProjects('retail')" class="portfolio-filter-btn px-6 py-3 bg-white/5 text-white/80 rounded-lg font-medium transition-all hover:bg-white/10" data-filter="retail">Retail</button>
      <button onclick="filterProjects('corporate')" class="portfolio-filter-btn px-6 py-3 bg-white/5 text-white/80 rounded-lg font-medium transition-all hover:bg-white/10" data-filter="corporate">Corporate</button>
      <button onclick="filterProjects('interior')" class="portfolio-filter-btn px-6 py-3 bg-white/5 text-white/80 rounded-lg font-medium transition-all hover:bg-white/10" data-filter="interior">Interior</button>
    </div>

    <!-- Projects Grid -->
    <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Tesla -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="automotive">
        <img src="/static/images/projects/tesla-red-facade.jpg" alt="Tesla" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Tesla Dealership</h3>
          <p class="text-white/80 mb-4">Bold red facade signage for premium automotive dealership. High-impact branding installation.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Automotive</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Facade</span>
          </div>
        </div>
      </div>

      <!-- Volvo & Mack -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="automotive">
        <img src="/static/images/projects/volvo-mack-sunset.jpg" alt="Volvo Mack" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Volvo & Mack Trucks</h3>
          <p class="text-white/80 mb-4">Large-scale pylon signage for commercial truck dealership captured at golden hour.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Automotive</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Pylon</span>
          </div>
        </div>
      </div>

      <!-- Five Below -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="retail">
        <img src="/static/images/projects/five-below-retail.jpg" alt="Five Below" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Five Below</h3>
          <p class="text-white/80 mb-4">Retail storefront signage installation for national chain expansion.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Retail</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Storefront</span>
          </div>
        </div>
      </div>

      <!-- Crate & Barrel -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="retail">
        <img src="/static/images/projects/crate-barrel-night.jpg" alt="Crate Barrel" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Crate & Barrel</h3>
          <p class="text-white/80 mb-4">Illuminated retail signage with premium finish for upscale home goods brand.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Retail</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">LED</span>
          </div>
        </div>
      </div>

      <!-- More projects... -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="automotive">
        <img src="/static/images/projects/ford-dealership-pylon.jpg" alt="Ford" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Ford Dealership</h3>
          <p class="text-white/80 mb-4">Automotive dealership pylon signage with LED illumination.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Automotive</span>
          </div>
        </div>
      </div>

      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="automotive">
        <img src="/static/images/projects/honda-pylon-blue.jpg" alt="Honda" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Honda Dealership</h3>
          <p class="text-white/80 mb-4">Premium pylon signage for Honda automotive brand.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Automotive</span>
          </div>
        </div>
      </div>

      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="corporate">
        <img src="/static/images/projects/regus-corporate-facade.jpg" alt="Regus" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Regus Corporate</h3>
          <p class="text-white/80 mb-4">Corporate office building facade signage for global workspace provider.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Corporate</span>
          </div>
        </div>
      </div>

      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="corporate">
        <img src="/static/images/projects/apm-terminals-corporate.jpg" alt="APM" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">APM Terminals</h3>
          <p class="text-white/80 mb-4">Industrial-scale signage for global logistics corporation.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Corporate</span>
          </div>
        </div>
      </div>

      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="interior">
        <img src="/static/images/projects/tiktok-neon-interior.jpg" alt="TikTok" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">TikTok Office</h3>
          <p class="text-white/80 mb-4">Modern neon interior branding for tech company headquarters.</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Interior</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
  
  return c.html(PageLayout('Projects', 'Explore our portfolio of professional signage installations', content));
});

// About Page
app.get('/about', (c) => {
  const content = `
<section class="py-24 lg:py-32">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">About Antares Innovate</h1>
        <p class="text-xl text-white/60">Strategic Vision. Technical Authority. Global Reach.</p>
      </div>

      <!-- Company Overview -->
      <div class="bg-antares-gray border border-white/10 rounded-2xl p-8 lg:p-12 mb-12">
        <h2 class="text-3xl font-display font-bold mb-6">Who We Are</h2>
        <p class="text-lg text-white/70 leading-relaxed mb-6">
          Antares Innovate is not just another signage contractor. We are a <strong class="text-white">technology-driven industrial partner</strong> specialized in complex commercial installations, LED optimization, and regulatory compliance frameworks.
        </p>
        <p class="text-lg text-white/70 leading-relaxed mb-6">
          Operating under strict <strong class="text-antares-blue">California Title 24</strong> and electrical code requirements, we deliver engineered solutions that balance performance, efficiency, and legal certainty.
        </p>
        <p class="text-lg text-white/70 leading-relaxed">
          Our approach is built on <strong class="text-white">precision, accountability, and long-term strategic thinking</strong>—designed for corporate clients, franchises, and large-scale projects that demand excellence.
        </p>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div class="bg-antares-dark border border-white/10 rounded-xl p-6 text-center">
          <div class="text-4xl font-bold text-antares-blue mb-2">15+</div>
          <div class="text-sm text-white/60">Years Experience</div>
        </div>
        <div class="bg-antares-dark border border-white/10 rounded-xl p-6 text-center">
          <div class="text-4xl font-bold text-antares-blue mb-2">500+</div>
          <div class="text-sm text-white/60">Projects Completed</div>
        </div>
        <div class="bg-antares-dark border border-white/10 rounded-xl p-6 text-center">
          <div class="text-4xl font-bold text-antares-blue mb-2">24/7</div>
          <div class="text-sm text-white/60">Technical Support</div>
        </div>
        <div class="bg-antares-dark border border-white/10 rounded-xl p-6 text-center">
          <div class="text-4xl font-bold text-antares-blue mb-2">100%</div>
          <div class="text-sm text-white/60">Compliance Focus</div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="mb-16">
        <h2 class="text-3xl font-display font-bold mb-8 text-center">Our Core Values</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-antares-dark border border-white/10 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="w-10 h-10 bg-antares-blue/10 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </span>
              Technical Excellence
            </h3>
            <p class="text-white/60">Engineering-driven approach with precision execution and quality standards</p>
          </div>

          <div class="bg-antares-dark border border-white/10 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="w-10 h-10 bg-antares-blue/10 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </span>
              Compliance Focus
            </h3>
            <p class="text-white/60">Regulatory expertise turning compliance into competitive advantage</p>
          </div>

          <div class="bg-antares-dark border border-white/10 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="w-10 h-10 bg-antares-blue/10 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </span>
              Innovation
            </h3>
            <p class="text-white/60">LED optimization and energy-efficient solutions for modern businesses</p>
          </div>

          <div class="bg-antares-dark border border-white/10 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-3 flex items-center">
              <span class="w-10 h-10 bg-antares-blue/10 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </span>
              Global Reach
            </h3>
            <p class="text-white/60">Scalable solutions designed for multi-location and international projects</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-gradient-to-br from-antares-blue to-blue-600 rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-display font-bold mb-4">Ready to Work Together?</h2>
        <p class="text-xl text-white/90 mb-8">Let's discuss your next signage or LED project</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+13234445555" class="inline-flex items-center justify-center px-8 py-4 bg-white text-antares-blue hover:bg-gray-100 rounded-xl font-semibold transition-all hover:scale-105">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call Now
          </a>
          <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-antares-dark hover:bg-black rounded-xl font-semibold transition-all hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
  
  return c.html(PageLayout('About Us', 'Learn about Antares Innovate - technology-driven industrial signage partner', content));
});

// Contact Page
app.get('/contact', (c) => {
  const content = `
<section class="py-24 lg:py-32">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">Get In Touch</h1>
        <p class="text-xl text-white/60">Ready to start your project? Contact our technical team for a consultation</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-antares-gray border border-white/10 rounded-2xl p-8 lg:p-10">
          <h2 class="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
          <form onsubmit="handleContactForm(event)" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-white/80 mb-2">First Name *</label>
                <input type="text" required class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="John">
              </div>
              <div>
                <label class="block text-sm font-medium text-white/80 mb-2">Last Name *</label>
                <input type="text" required class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="Doe">
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-white/80 mb-2">Email Address *</label>
              <input type="email" required class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="john@company.com">
            </div>

            <div>
              <label class="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
              <input type="tel" class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="+1 (555) 123-4567">
            </div>

            <div>
              <label class="block text-sm font-medium text-white/80 mb-2">Company Name</label>
              <input type="text" class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="Your Company Inc.">
            </div>

            <div>
              <label class="block text-sm font-medium text-white/80 mb-2">Service Interest</label>
              <select class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors">
                <option>Select a service...</option>
                <option>Signage Installation</option>
                <option>LED Retrofit & Optimization</option>
                <option>Technical Maintenance</option>
                <option>Compliance Consultation</option>
                <option>Custom Industrial Solutions</option>
                <option>Multi-Location Program</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-white/80 mb-2">Project Details *</label>
              <textarea required rows="5" class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors resize-none" placeholder="Tell us about your project requirements..."></textarea>
            </div>

            <button type="submit" class="w-full py-4 bg-antares-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:scale-105">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Direct Contact -->
          <div class="bg-antares-gray border border-white/10 rounded-2xl p-8">
            <h3 class="text-xl font-bold mb-6">Direct Contact</h3>
            <div class="space-y-4">
              <a href="tel:+13234445555" class="flex items-start p-4 bg-antares-dark hover:bg-antares-blue/10 rounded-lg transition-colors group">
                <div class="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-600/20 transition-colors">
                  <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-white/60 mb-1">Phone</div>
                  <div class="font-semibold">+1 (323) 444-5555</div>
                  <div class="text-sm text-white/60 mt-1">24/7 Technical Support</div>
                </div>
              </a>

              <a href="mailto:info@antaresinnovate.com" class="flex items-start p-4 bg-antares-dark hover:bg-antares-blue/10 rounded-lg transition-colors group">
                <div class="w-12 h-12 bg-antares-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-antares-blue/20 transition-colors">
                  <svg class="w-6 h-6 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-white/60 mb-1">Email</div>
                  <div class="font-semibold">info@antaresinnovate.com</div>
                  <div class="text-sm text-white/60 mt-1">Response within 24 hours</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-antares-gray border border-white/10 rounded-2xl p-8">
            <h3 class="text-xl font-bold mb-6">Business Hours</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-white/60">Monday - Friday</span>
                <span class="font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-white/60">Saturday</span>
                <span class="font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-white/60">Sunday</span>
                <span class="font-medium">Closed</span>
              </div>
              <div class="flex justify-between pt-3 border-t border-white/10">
                <span class="text-white/60">Emergency Support</span>
                <span class="font-medium text-green-500">24/7 Available</span>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="bg-antares-gray border border-white/10 rounded-2xl p-8">
            <h3 class="text-xl font-bold mb-6">Service Area</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-antares-blue mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <div class="font-medium mb-1">Primary Location</div>
                  <div class="text-white/60 text-sm">Los Angeles, California</div>
                  <div class="text-white/60 text-sm">Licensed & Insured</div>
                </div>
              </div>
              <div class="pt-4 border-t border-white/10 text-sm text-white/60">
                We serve California and beyond with scalable solutions for multi-location projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
  
  return c.html(PageLayout('Contact Us', 'Get in touch with Antares Innovate for your signage project', content));
});

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    
    // Here you would typically send to a database or email service
    // For now, we'll just log and return success
    console.log('Contact form submission:', body)
    
    return c.json({ 
      success: true, 
      message: 'Thank you for your inquiry. We will contact you shortly.' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'An error occurred. Please try again.' 
    }, 500)
  }
})

// Chatbot API endpoint with OpenAI
app.post('/api/chat', async (c) => {
  try {
    const { message } = await c.req.json()
    
    // Get OpenAI API key from environment
    const env = c.env as { OPENAI_API_KEY?: string }
    const apiKey = env.OPENAI_API_KEY
    
    if (!apiKey) {
      return c.json({ 
        success: false,
        reply: 'I apologize, but I\'m currently unable to process requests. Please call us at (323) 444-5555 for immediate assistance.'
      })
    }

    // Company context for the AI
    const systemPrompt = `You are a professional sales consultant for Antares Innovate, a premium industrial signage and LED solutions company based in Los Angeles, California.

COMPANY OVERVIEW:
- Founded in 2010 (15+ years of excellence)
- Global leader in commercial signage with COMPLETE solutions: Design, Print, and Installation
- Full-service provider: We design it, we print it, we install it - all in-house
- Serving California and beyond with licensed & insured services
- 500+ projects completed for major brands like Tesla, Volvo, Ford, Honda, Five Below, Crate & Barrel, Regus, APM Terminals, and TikTok
- 24/7 technical support available
- 100% compliance with Title 24, electrical codes, safety standards, and municipal ordinances

OUR COMPLETE SERVICES (Design → Print → Install):

1. DESIGN SERVICES
   - Custom signage design from concept to completion
   - Brand identity and visual consistency
   - 3D renderings and mockups
   - CAD drawings and technical specifications
   - Compliance-ready designs (Title 24, ADA, local codes)

2. PRINTING & FABRICATION
   - Large format digital printing
   - Vinyl graphics and wraps
   - Channel letters and dimensional signage
   - LED modules and illuminated signs
   - Specialty materials (acrylic, metal, wood, composite)
   - In-house fabrication for quality control

3. INSTALLATION SERVICES
   - Professional installation by certified technicians
   - Retail, automotive, corporate, and industrial signage
   - High-rise and complex installations
   - Electrical work and LED integration
   - Structural engineering when needed

4. LED RETROFIT & ENERGY OPTIMIZATION
   - High-efficiency LED conversions with energy savings up to 60%
   - Existing sign upgrades and modernization
   - Smart lighting controls and automation

5. TECHNICAL MAINTENANCE & REPAIR
   - 24/7 emergency response and preventive maintenance
   - Sign cleaning and refurbishment
   - Electrical repairs and component replacement

6. COMPLIANCE & PERMITS
   - Full regulatory compliance and permit management
   - Code research and approval process
   - Municipal liaison and documentation

7. MULTI-LOCATION PROGRAM MANAGEMENT
   - Coordinated rollouts across multiple sites
   - Brand consistency across all locations
   - Turnkey solutions from design to installation

CONTACT INFORMATION:
- Phone: (323) 444-5555 (24/7 available)
- Email: info@antaresinnovate.com
- Location: Los Angeles, California
- Service Area: California & Beyond

YOUR ROLE AS A SALES CONSULTANT:

You are NOT just an assistant - you are a knowledgeable sales consultant who:
- Shows genuine interest in the client's business
- Understands their industry and challenges
- Offers COMPLETE solutions: Design → Print → Install (emphasize this!)
- Shares relevant success stories and case studies
- Highlights benefits and ROI, not just features
- Creates urgency with incentives and limited-time offers
- Builds trust through expertise and credibility

CRITICAL: Always emphasize that we are a FULL-SERVICE provider:
- "We handle everything from design concept to final installation"
- "Our in-house design team creates custom solutions for your brand"
- "We print and fabricate everything in our own facility for quality control"
- "Then our certified technicians install it perfectly"
- "One company, one point of contact, zero headaches"

CONVERSATIONAL STYLE:

1. BE A CONSULTANT, NOT AN INTERVIEWER:
   ❌ DON'T: Ask multiple questions like "What's your square footage? What type of signage?"
   ✅ DO: Listen to what they share, then suggest solutions based on that
   
   Example:
   Client: "I need signage for my car dealership"
   Bad: "What size is your dealership? What type of signage do you need?"
   Good: "Excellent! We handle everything for dealerships - design, print, install. Tesla and Volvo use us.\n\nWe create custom packages: exterior signage, showroom displays, plus LED upgrades that cut energy costs 60%. One dealership saw 35% more foot traffic!\n\n📞 (323) 444-5555 or share your number - our team calls in 30 min!"

2. OFFER VALUE IMMEDIATELY:
   - Mention specific benefits (energy savings, visibility, compliance)
   - Share success stories from similar businesses
   - Suggest improvements they might not have considered
   - Highlight ROI and long-term value

3. CREATE INTEREST IN THEIR BUSINESS:
   - Reference their industry specifically
   - Mention challenges you know they face
   - Offer insights about their competitors
   - Show you understand their needs without them explaining everything

4. BE PROACTIVE WITH SOLUTIONS:
   - Suggest upgrades or improvements
   - Mention complementary services
   - Offer seasonal deals or incentives when relevant
   - Create urgency ("We have a promotion this month...")

5. GUIDE TO NEXT STEPS NATURALLY:
   After showing value, offer contact options:
   "I'd love to discuss this further and show you exactly what we can do for your business. You can:
   
   📞 Give me a call now at (323) 444-5555 - I can connect you with our team right away
   
   📝 Or share your number and I'll have our senior consultant reach out within 30 minutes with a custom proposal"

RESPONSE STRUCTURE:
- Start with enthusiasm and acknowledgment
- Show you understand their business/industry
- Offer specific solutions with benefits
- Share a relevant success story or statistic
- Suggest an improvement or upgrade they might not have considered
- Close with clear next steps and contact options

CRITICAL - KEEP IT SHORT AND NATURAL:
- Maximum 3-4 short sentences per paragraph
- Use 2-3 paragraphs MAX (not more!)
- Talk like a real person, not a script
- Get to the point quickly
- Don't over-explain - be concise and confident
- Use \n\n to separate paragraphs for readability

Example of GOOD length:
"Excellent! We're your one-stop shop - design, print, and install all in-house. We've worked with dealerships like Tesla and Volvo.

Most dealerships love that we handle everything. No coordinating multiple vendors, and our LED upgrades typically cut energy costs by 60%.

📞 Call me at (323) 444-5555 or share your number and I'll have our design team reach out in 30 minutes!"

Example of TOO LONG (DON'T DO THIS):
"Excellent! Let me tell you about everything we do... [multiple long paragraphs explaining every detail]"

TONE:
- Confident consultant who gets to the point
- Friendly but not chatty
- Professional but conversational
- Brief but impactful

REMEMBER: You're a busy sales consultant. Be helpful, be brief, be effective.`

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Fast, cost-effective, great for customer service
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 200, // Shorter, more concise responses
        temperature: 0.9, // More creative and natural like a real salesperson
      })
    })

    if (!response.ok) {
      throw new Error('OpenAI API error')
    }

    const data = await response.json()
    const reply = data.choices[0]?.message?.content || 'I apologize, but I couldn\'t process that. Please call us at (323) 444-5555.'

    return c.json({ 
      success: true,
      reply: reply.trim()
    })
    
  } catch (error) {
    console.error('Chat API error:', error)
    return c.json({ 
      success: false,
      reply: 'I apologize for the inconvenience. Please call us at (323) 444-5555 for immediate assistance, or try again in a moment.'
    }, 500)
  }
})

export default app
