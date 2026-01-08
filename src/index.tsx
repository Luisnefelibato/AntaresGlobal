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
<!-- Hero Section with Animated Background -->
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
        <span class="text-antares-blue text-sm font-medium" data-i18n="hero.badge">Engineering Excellence Since 2010</span>
      </div>

      <!-- Main Heading -->
      <h1 class="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
        <span class="block text-white" data-i18n="hero.title1">We Transform Spaces</span>
        <span class="block text-white"><span data-i18n="hero.title2">into</span> <span class="text-antares-blue" data-i18n="hero.title3">Brand</span> <span data-i18n="hero.title4">Experiences</span></span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
        <span data-i18n="hero.subtitle1">Creative Design, Full Production, Professional Installation</span>
        <span class="block mt-2 text-white/50" data-i18n="hero.subtitle2">From concept to installation. One provider for the entire process.</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <a href="tel:+16893312690" class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span data-i18n="hero.callButton">Call Now: +1 (689) 331-2690</span>
        </a>
        <a href="/projects" class="group inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
          <svg class="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          View Success Stories
        </a>
      </div>

      <!-- Trust Indicators with Certifications -->
      <div class="pt-8 lg:pt-12">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mb-6">
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
        
        <!-- Certification Badges -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <span class="text-green-400">✅</span>
            <span class="text-sm text-white/80">C-10 & C-45 Licensed</span>
          </div>
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <span class="text-green-400">✅</span>
            <span class="text-sm text-white/80">SPRAT/OSHA Certified</span>
          </div>
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <span class="text-green-400">✅</span>
            <span class="text-sm text-white/80">Title 24 Compliant</span>
          </div>
          <div class="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
            <span class="text-green-400">✅</span>
            <span class="text-sm text-white/80">$2M Insured</span>
          </div>
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

<!-- Strategic Services - 3 Columns -->
<section class="py-24 lg:py-32 bg-antares-gray/50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="text-center mb-20">
      <div class="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/10 to-antares-blue/10 border border-orange-500/20 rounded-full px-6 py-3 mb-6">
        <span class="text-orange-500 text-base font-medium">⭐ Strategic Services</span>
      </div>
      <h2 class="text-4xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
        Your Trusted Provider For The Entire Process
      </h2>
      <p class="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
        From Concept → Design → Production → Installation. Efficiency, compliance, and quality at every stage.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
      <!-- COLUMN 1: DESIGN -->
      <div class="group relative bg-antares-dark rounded-2xl overflow-hidden border border-white/5 hover:border-antares-blue/50 transition-all duration-500 hover:shadow-2xl hover:shadow-antares-blue/20 hover:-translate-y-2">
        <!-- Image -->
        <div class="relative h-80 overflow-hidden">
          <img 
            src="/static/images/services/design-service.jpg" 
            alt="Design Services - Creative Solutions"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-antares-dark via-antares-dark/80 to-transparent"></div>
          <div class="absolute top-6 right-6">
            <span class="bg-antares-blue px-4 py-2 rounded-full text-sm font-semibold shadow-lg">🎨 Design</span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-10">
          <h3 class="text-3xl font-bold mb-3">Creative Design</h3>
          <p class="text-antares-blue font-semibold text-base mb-6">VISUAL IDENTITY & BRANDING</p>
          <p class="text-white/70 mb-8 text-base leading-relaxed">
            Complete design solutions from branding to final art. We create visual identities that communicate and convert.
          </p>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3 text-sm">
              <span class="text-antares-blue mt-1">•</span>
              <div>
                <strong class="text-white">Branding:</strong>
                <span class="text-white/60"> Logo, color palette, visual identity systems</span>
              </div>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <span class="text-antares-blue mt-1">•</span>
              <div>
                <strong class="text-white">Graphic Design:</strong>
                <span class="text-white/60"> Business cards, brochures, posters, packaging</span>
              </div>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <span class="text-antares-blue mt-1">•</span>
              <div>
                <strong class="text-white">Digital Design:</strong>
                <span class="text-white/60"> Social media, web graphics, presentations</span>
              </div>
            </li>
          </ul>

          <a href="/services/design" class="inline-flex items-center text-antares-blue hover:text-blue-400 font-semibold text-base transition-colors group">
            Explore Design
            <svg class="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- COLUMN 2: PRODUCTION (PRINTING) -->
      <div class="group relative bg-antares-dark rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2">
        <!-- Image -->
        <div class="relative h-80 overflow-hidden">
          <img 
            src="/static/images/services/print-service.jpg" 
            alt="Production Services - Professional Printing"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-antares-dark via-antares-dark/80 to-transparent"></div>
          <div class="absolute top-6 right-6">
            <span class="bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">🖨️ Production</span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-10">
          <h3 class="text-3xl font-bold mb-3">Full Production</h3>
          <p class="text-orange-500 font-semibold text-base mb-6">PRINTING & MANUFACTURING</p>
          <p class="text-white/70 mb-8 text-base leading-relaxed">
            From design to physical product. Complete production services including all types of printing and materials.
          </p>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3 text-sm">
              <span class="text-orange-500 mt-1">•</span>
              <div>
                <strong class="text-white">Large Format:</strong>
                <span class="text-white/60"> Banners, vinyl, perforated film, window graphics</span>
              </div>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <span class="text-orange-500 mt-1">•</span>
              <div>
                <strong class="text-white">Print Materials:</strong>
                <span class="text-white/60"> Stickers, posters, flyers, brochures, catalogs</span>
              </div>
            </li>
            <li class="flex items-start gap-3 text-sm">
              <span class="text-orange-500 mt-1">•</span>
              <div>
                <strong class="text-white">POP & Retail:</strong>
                <span class="text-white/60"> Displays, standees, floor graphics, promotional materials</span>
              </div>
            </li>
          </ul>

          <a href="/services/print" class="inline-flex items-center text-orange-500 hover:text-orange-400 font-semibold text-base transition-colors group">
            Explore Production
            <svg class="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- COLUMN 3: INSTALLATION -->
      <div class="group relative bg-antares-dark rounded-2xl overflow-hidden border border-white/5 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
        <!-- Image -->
        <div class="relative h-80 overflow-hidden">
          <img 
            src="/static/images/services/installation-service.jpg" 
            alt="Installation Services - Professional Mounting"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-antares-dark via-antares-dark/80 to-transparent"></div>
          <div class="absolute top-6 right-6">
            <span class="bg-green-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">⚡ Installation</span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-10">
          <h3 class="text-3xl font-bold mb-3">Professional Installation</h3>
          <p class="text-green-500 font-semibold text-base mb-6">CERTIFIED MOUNTING & SETUP</p>
          <p class="text-white/70 mb-8 text-base leading-relaxed">
            Expert installation with certified technicians, specialized equipment, and guaranteed compliance.
          </p>

          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1 text-base">•</span>
              <div>
                <strong class="text-white">Commercial Signage:</strong>
                <span class="text-white/60"> Storefronts, facades, monument signs</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1 text-base">•</span>
              <div>
                <strong class="text-white">LED Systems:</strong>
                <span class="text-white/60"> Electrical installation, energy retrofits</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-500 mt-1 text-base">•</span>
              <div>
                <strong class="text-white">High-Rise Work:</strong>
                <span class="text-white/60"> SPRAT/OSHA certified technicians</span>
              </div>
            </li>
          </ul>

          <a href="/services/installation" class="inline-flex items-center text-green-500 hover:text-green-400 font-semibold text-base transition-colors group">
            Explore Installation
            <svg class="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Trust Framework - Comprehensive Guarantees -->
    <div class="relative bg-gradient-to-br from-antares-blue/20 via-blue-900/30 to-antares-dark rounded-3xl p-8 lg:p-12 border border-antares-blue/20 overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-antares-blue rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-800 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>

      <div class="relative z-10">
        <h3 class="text-3xl lg:text-4xl font-display font-black text-center mb-4">
          <span class="bg-gradient-to-r from-antares-blue via-blue-400 to-blue-600 bg-clip-text text-transparent">
            Comprehensive Guarantees
          </span>
        </h3>
        <p class="text-center text-white/60 mb-12 max-w-2xl mx-auto">
          Your success is our mission. Every project backed by industry-leading certifications and guarantees.
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Certified Contractors -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-antares-blue/50 to-blue-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative bg-gradient-to-br from-antares-dark via-antares-gray to-antares-dark rounded-2xl p-6 border border-white/10 group-hover:border-antares-blue transition-all duration-300 transform group-hover:-translate-y-2">
              <div class="relative mb-4">
                <div class="w-20 h-20 bg-gradient-to-br from-antares-blue to-blue-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div class="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <h4 class="font-bold text-lg mb-2 text-center group-hover:text-antares-blue transition-colors">Certified Contractors</h4>
              <p class="text-sm text-white/60 text-center leading-relaxed">C-10 & C-45 Licensed in California</p>
              <div class="mt-4 pt-4 border-t border-white/5">
                <div class="flex items-center justify-center gap-2 text-xs text-antares-blue">
                  <span class="w-2 h-2 bg-antares-blue rounded-full animate-pulse"></span>
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Permits and Insurance -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-pink-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative bg-gradient-to-br from-antares-dark via-antares-gray to-antares-dark rounded-2xl p-6 border border-white/10 group-hover:border-purple-500 transition-all duration-300 transform group-hover:-translate-y-2">
              <div class="relative mb-4">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div class="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
              </div>
              <h4 class="font-bold text-lg mb-2 text-center group-hover:text-purple-500 transition-colors">Permits & Insurance</h4>
              <p class="text-sm text-white/60 text-center leading-relaxed">Full legal compliance and $2M coverage</p>
              <div class="mt-4 pt-4 border-t border-white/5">
                <div class="flex items-center justify-center gap-2 text-xs text-purple-500">
                  <span class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  <span>Protected</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 100% Inspection -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/50 to-red-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative bg-gradient-to-br from-antares-dark via-antares-gray to-antares-dark rounded-2xl p-6 border border-white/10 group-hover:border-orange-500 transition-all duration-300 transform group-hover:-translate-y-2">
              <div class="relative mb-4">
                <div class="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
                <div class="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
              </div>
              <h4 class="font-bold text-lg mb-2 text-center group-hover:text-orange-500 transition-colors">100% Inspection</h4>
              <p class="text-sm text-white/60 text-center leading-relaxed">Pre-delivery quality control process</p>
              <div class="mt-4 pt-4 border-t border-white/5">
                <div class="flex items-center justify-center gap-2 text-xs text-orange-500">
                  <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  <span>Certified</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Support -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/50 to-emerald-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative bg-gradient-to-br from-antares-dark via-antares-gray to-antares-dark rounded-2xl p-6 border border-white/10 group-hover:border-green-500 transition-all duration-300 transform group-hover:-translate-y-2">
              <div class="relative mb-4">
                <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto transform group-hover:rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div class="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <h4 class="font-bold text-lg mb-2 text-center group-hover:text-green-500 transition-colors">24/7 Support</h4>
              <p class="text-sm text-white/60 text-center leading-relaxed">Continuous maintenance and upgrades</p>
              <div class="mt-4 pt-4 border-white/5">
                <div class="flex items-center justify-center gap-2 text-xs text-green-500">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
</section>

<!-- Featured Projects -->
<section class="py-16 lg:py-24">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl lg:text-4xl font-display font-bold mb-4">Featured Projects</h2>
      <p class="text-white/60 text-lg max-w-2xl mx-auto">Explore our latest high-profile installations</p>
    </div>

    <!-- Video Placeholder - Video will be added here -->
    <div class="max-w-5xl mx-auto mb-12">
      <div class="relative rounded-2xl overflow-hidden bg-antares-gray border border-white/10" style="aspect-ratio: 16/9;">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <svg class="w-20 h-20 mx-auto mb-4 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-xl text-white/60">Project Showcase Video</p>
            <p class="text-sm text-white/40 mt-2">Coming Soon</p>
          </div>
        </div>
      </div>
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
      <a href="tel:+16893312690" class="inline-flex items-center px-8 py-4 bg-white text-antares-blue hover:bg-gray-100 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
        <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        Call (689) 331-2690
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
    <a href="tel:+16893312690" class="cta-phone-button hidden md:flex items-center gap-2 font-bold text-sm hover:scale-105">
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
                    <a href="tel:+16893312690" class="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-antares-blue hover:bg-antares-blue transition-all duration-300 whitespace-nowrap">
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
                    <a href="tel:+16893312690" class="w-full sm:w-auto btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white hover:bg-white hover:text-antares-dark transition-all duration-300 text-base sm:text-lg font-medium">
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
                <div class="text-sm font-semibold text-antares-blue mb-4 tracking-wider uppercase">Core Services</div>
                <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    From strategy to design and certified installation. One provider for the entire process.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Service Card 1: DESIGN -->
                <a href="/services/design" class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group cursor-pointer">
                    <div class="w-16 h-16 bg-gradient-to-br from-antares-blue to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4 group-hover:text-antares-blue transition-colors">DESIGN SERVICE</h3>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        Brand strategy, graphic design, and digital design. Visual identity that sells.
                    </p>
                    <div class="flex items-center text-antares-blue font-medium group-hover:gap-3 transition-all">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </a>
                
                <!-- Service Card 2: PRINT -->
                <a href="/services/print" class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group cursor-pointer">
                    <div class="w-16 h-16 bg-gradient-to-br from-antares-blue to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4 group-hover:text-antares-blue transition-colors">PRINT SERVICE</h3>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        Large format printing, POP materials, and brochures. Premium quality that stands out.
                    </p>
                    <div class="flex items-center text-antares-blue font-medium group-hover:gap-3 transition-all">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </a>
                
                <!-- Service Card 3: INSTALLATION -->
                <a href="/services/installation" class="service-card bg-antares-gray p-8 rounded-2xl border border-white/10 hover:border-antares-blue transition-all duration-300 group cursor-pointer">
                    <div class="w-16 h-16 bg-gradient-to-br from-antares-blue to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h3 class="text-2xl font-display font-bold mb-4 group-hover:text-antares-blue transition-colors">INSTALLATION SERVICE</h3>
                    <p class="text-gray-300 leading-relaxed mb-6">
                        Certified installation of commercial signage, LED, and high-rise work.
                    </p>
                    <div class="flex items-center text-antares-blue font-medium group-hover:gap-3 transition-all">
                        Learn More <i class="fas fa-arrow-right ml-2"></i>
                    </div>
                </a>
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
                        <a href="mailto:contacto@antaresinnovate.com" class="flex items-center space-x-2 text-antares-blue hover:text-blue-400 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>contacto@antaresinnovate.com</span>
                        </a>
                        <a href="tel:+16893312690" class="flex items-center space-x-2 text-antares-blue hover:text-blue-400 transition-colors">
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
                    <h4 class="font-bold mb-4">Contact</h4>
                    <div class="space-y-2 text-sm text-gray-400">
                        <a href="tel:+16893312690" class="flex items-center hover:text-antares-blue transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            +1 (689) 331-2690
                        </a>
                        <a href="mailto:contacto@antaresinnovate.com" class="flex items-center hover:text-antares-blue transition-colors">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            contacto@antaresinnovate.com
                        </a>
                        <p class="text-xs text-gray-500 mt-3">
                            Los Angeles, California<br/>
                            Licensed & Insured (C-10 & C-45)
                        </p>
                    </div>
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



app.get('/services/design', (c) => {
  const content = `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">
          Design That <span class="text-antares-blue">Creates Impact</span>
        </h1>
        <p class="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
          Whether you're starting from scratch or your brand needs evolution, we specialize in visual solutions that communicate your values instantly. Our design team creates signage that makes your business stand out.
        </p>
        <a href="tel:+16893312690" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call Now: (689) 331-2690
        </a>
      </div>

      <!-- Cosmic Orb Image -->
      <div class="max-w-3xl mx-auto mb-16 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
        <img src="/static/images/design-orb.jpg" alt="Design Service - Creative Universe" class="relative w-full rounded-2xl shadow-2xl"/>
      </div>

      <!-- What We Offer -->
      <div class="mb-16">
        <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-4">What We Do for Your Business</h2>
        <p class="text-lg text-white/60 text-center mb-12 max-w-3xl mx-auto">From concept to creation, we design signage that attracts customers and boosts your brand visibility</p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 p-8 rounded-xl border border-antares-blue/30 hover:border-antares-blue hover:shadow-lg hover:shadow-antares-blue/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-antares-blue to-blue-600 rounded-xl flex items-center justify-center text-3xl">
              🎨
            </div>
            <h3 class="text-2xl font-bold mb-4 text-antares-blue">BRANDING</h3>
            <p class="text-white/70 mb-4">Complete brand identity development that communicates your values and differentiates you from the competition.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Logo design and brand guidelines</strong></li>
              <li>• <strong>Color palette and typography</strong></li>
              <li>• <strong>Brand positioning strategy</strong></li>
              <li>• <strong>Visual identity systems</strong></li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 p-8 rounded-xl border border-antares-blue/30 hover:border-antares-blue hover:shadow-lg hover:shadow-antares-blue/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-antares-blue to-blue-600 rounded-xl flex items-center justify-center text-3xl">
              ✏️
            </div>
            <h3 class="text-2xl font-bold mb-4 text-antares-blue">GRAPHIC DESIGN</h3>
            <p class="text-white/70 mb-4">Professional graphic design for all your signage and advertising materials with visual impact.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Business cards and stationery</strong></li>
              <li>• <strong>Brochures and catalogs</strong></li>
              <li>• <strong>Posters and banners</strong></li>
              <li>• <strong>Packaging and labels</strong></li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 p-8 rounded-xl border border-antares-blue/30 hover:border-antares-blue hover:shadow-lg hover:shadow-antares-blue/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-antares-blue to-blue-600 rounded-xl flex items-center justify-center text-3xl">
              💻
            </div>
            <h3 class="text-2xl font-bold mb-4 text-antares-blue">DIGITAL DESIGN</h3>
            <p class="text-white/70 mb-4">Modern digital design for social media, websites, and all your online presence needs.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Social media graphics and ads</strong></li>
              <li>• <strong>Web banners and email templates</strong></li>
              <li>• <strong>Digital signage and displays</strong></li>
              <li>• <strong>Interactive presentations</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Compliance & Regulations -->
      <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 rounded-2xl p-8 lg:p-12 mb-16 border border-antares-blue/20">
        <h2 class="text-3xl font-display font-bold text-center mb-8">Compliance & Regulations</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-antares-blue">Los Angeles Sign Code Compliance</h3>
            <ul class="space-y-3 text-white/70">
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Permitted Signs:</strong> Channel letters, cabinet signs, wall signs, blade signs, window graphics, monument signs, and A-frames (depending on zoning)
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Materials & Fabrication:</strong> Aluminum, galvanized steel, acrylic, polycarbonate with UL-listed components
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Size Restrictions:</strong> Varies by zone - typically 10-20% of facade area for commercial zones
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-antares-blue">Digital LED Restrictions</h3>
            <ul class="space-y-3 text-white/70">
              <li class="flex items-start gap-3">
                <span class="text-red-500 text-lg">⚠</span>
                <div>
                  <strong>Prohibited:</strong> Digital LED displays with video, animations, scrolling text, or changing messages are <strong>severely restricted or banned</strong> in most LA commercial zones
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Safety Concerns:</strong> Dynamic displays cause driver distraction and visual pollution
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Allowed:</strong> Static LED illuminated signs (channel letters, cabinet signs) are permitted with proper permits
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-antares-dark/50 rounded-xl border border-white/10">
          <h4 class="font-bold mb-3 text-antares-blue">Title 24 & Energy Code</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm text-white/70">
            <div>
              <strong>LED Efficiency:</strong> Minimum 50 lumens/watt required for all LED signs
            </div>
            <div>
              <strong>Automatic Controls:</strong> Timers or photo sensors required to turn off signs after business hours
            </div>
            <div>
              <strong>Electrical Code:</strong> All installations must comply with California Electrical Code (CEC) - licensed C-10 electrician required
            </div>
          </div>
        </div>
      </div>

      <!-- Process -->
      <div class="bg-antares-gray/50 rounded-2xl p-8 lg:p-12">
        <h2 class="text-3xl font-display font-bold text-center mb-8">Our Design Process</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 class="font-bold mb-2">Consultation</h3>
            <p class="text-sm text-white/60">We listen to your vision and business goals</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 class="font-bold mb-2">Design Concepts</h3>
            <p class="text-sm text-white/60">Multiple design options for your review</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 class="font-bold mb-2">Refinement</h3>
            <p class="text-sm text-white/60">Perfect every detail with your feedback</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
            <h3 class="font-bold mb-2">Production Ready</h3>
            <p class="text-sm text-white/60">Deliver files ready for fabrication</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  return c.html(PageLayout('Design That Creates Impact | Professional Sign Design | Antares Innovate', 'Expert custom sign design services. Branding, graphic design, and digital design solutions that attract customers and boost visibility', content))
})

app.get('/services/print', (c) => {
  const content = `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">
          Prints That <span class="text-antares-blue">Leave a Mark</span>
        </h1>
        <p class="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
          In a digital world, physical has special weight. Texture, color precision, and finish quality say more about you than a thousand emails. We don't just print; we ensure the first impression is flawless.
        </p>
        <a href="tel:+16893312690" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call Now: (689) 331-2690
        </a>
      </div>

      <!-- Cosmic Orb Image -->
      <div class="max-w-3xl mx-auto mb-16 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
        <img src="/static/images/print-orb.jpg" alt="Print Service - CMYK Universe" class="relative w-full rounded-2xl shadow-2xl"/>
      </div>

      <!-- Printing Services Detailed -->
      <div class="mb-16">
        <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-4">Prints That Bring Your Projects to Life</h2>
        <p class="text-lg text-white/60 text-center mb-12 max-w-3xl mx-auto">Professional large format printing with precision color matching and premium materials. Every print is inspected for quality before delivery.</p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-gradient-to-br from-orange-500/10 to-red-600/10 p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-3xl">
              🖨️
            </div>
            <h3 class="text-2xl font-bold mb-4 text-orange-500">LARGE FORMAT PRINTING</h3>
            <p class="text-white/70 mb-4">Large-format printing for high-impact visual advertising. Perfect for building facades, events, and outdoor advertising.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Materials:</strong> Vinyl banner, mesh, canvas</li>
              <li>• <strong>Sizes:</strong> From 3ft to 100ft+ custom sizes</li>
              <li>• <strong>Applications:</strong> Building wraps, event banners, trade shows</li>
              <li>• <strong>Durability:</strong> UV-resistant, weatherproof finishes</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-orange-500/10 to-red-600/10 p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-3xl">
              🛍️
            </div>
            <h3 class="text-2xl font-bold mb-4 text-orange-500">POP MATERIALS</h3>
            <p class="text-white/70 mb-4">Point of purchase materials that drive sales and enhance customer experience at retail locations.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Products:</strong> Displays, standees, shelf talkers, danglers</li>
              <li>• <strong>Materials:</strong> Cardboard, acrylic, foam board, PVC</li>
              <li>• <strong>Applications:</strong> Retail stores, supermarkets, pharmacies</li>
              <li>• <strong>Customization:</strong> Die-cut shapes, 3D structures</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-orange-500/10 to-red-600/10 p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-3xl">
              📑
            </div>
            <h3 class="text-2xl font-bold mb-4 text-orange-500">BROCHURES & CATALOGS</h3>
            <p class="text-white/70 mb-4">Professional brochures, catalogs, and printed materials for marketing and corporate communications.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Types:</strong> Brochures, catalogs, flyers, folders</li>
              <li>• <strong>Finishing:</strong> Glossy, matte, embossing, foil stamping</li>
              <li>• <strong>Binding:</strong> Saddle stitch, perfect bound, spiral</li>
              <li>• <strong>Quantity:</strong> Small runs to large volumes</li>
            </ul>
          </div>
        </div>

        <!-- Our Printing Technology -->
        <div class="bg-gradient-to-r from-antares-blue/10 to-blue-600/10 rounded-2xl p-8 lg:p-12 mb-12 border border-antares-blue/20">
          <h3 class="text-2xl lg:text-3xl font-display font-bold mb-6 text-center">Why Our Prints Stand Out</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold mb-3 text-antares-blue">Advanced Equipment</h4>
              <ul class="space-y-2 text-white/70">
                <li>✓ <strong>HP Latex</strong> wide-format printers for eco-friendly, odorless prints</li>
                <li>✓ <strong>UV Flatbed</strong> printers for rigid substrates up to 2" thick</li>
                <li>✓ <strong>Eco-Solvent</strong> printers for outdoor durability</li>
                <li>✓ <strong>Dye-Sublimation</strong> for fabric and textile applications</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-3 text-antares-blue">Quality Assurance</h4>
              <ul class="space-y-2 text-white/70">
                <li>✓ <strong>Color Calibration:</strong> Daily profiling for consistent color</li>
                <li>✓ <strong>Pantone Matching:</strong> Accurate brand color reproduction</li>
                <li>✓ <strong>Pre-Press Proofs:</strong> Digital proofs before production</li>
                <li>✓ <strong>Inspection:</strong> Every print checked before shipping</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Pricing & Turnaround -->
        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">⚡</div>
            <h4 class="font-bold mb-2">Fast Turnaround</h4>
            <p class="text-white/60 text-sm">Standard: 3-5 business days<br/>Rush: 24-48 hours available</p>
          </div>
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">💰</div>
            <h4 class="font-bold mb-2">Competitive Pricing</h4>
            <p class="text-white/60 text-sm">Volume discounts available<br/>Price match guarantee</p>
          </div>
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">🚚</div>
            <h4 class="font-bold mb-2">Delivery Options</h4>
            <p class="text-white/60 text-sm">Local pickup or shipping<br/>Installation services available</p>
          </div>
        </div>
      </div>

      <!-- Compliance & Regulations -->
      <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 rounded-2xl p-8 lg:p-12 mb-16 border border-antares-blue/20">
        <h2 class="text-3xl font-display font-bold text-center mb-8">Compliance & Regulations</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-antares-blue">Material & Safety Standards</h3>
            <ul class="space-y-3 text-white/70">
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Fire Safety:</strong> All printed materials must use fire-rated substrates for indoor applications. Class A or B fire rating required for commercial spaces
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Outdoor Durability:</strong> UV-resistant inks and weatherproof materials required for exterior signage. Minimum 5-year warranty on outdoor prints
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Environmental:</strong> Eco-solvent and latex inks comply with California VOC emission standards
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-antares-blue">Signage Permit Requirements</h3>
            <ul class="space-y-3 text-white/70">
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Building Wraps:</strong> Require permit from LA Department of Building and Safety. Structural engineering approval needed for large installations
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Window Graphics:</strong> Must not exceed 33% window coverage per LA Fire Code for emergency egress visibility
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-antares-blue text-lg">•</span>
                <div>
                  <strong>Temporary Banners:</strong> Limited to 30-60 days display. Require temporary sign permit in most zones
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-antares-dark/50 rounded-xl border border-white/10">
          <h4 class="font-bold mb-3 text-antares-blue">Quality & Manufacturing Standards</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm text-white/70">
            <div>
              <strong>Color Accuracy:</strong> Pantone PMS matching with color calibration certification
            </div>
            <div>
              <strong>Resolution:</strong> Minimum 720 DPI for indoor graphics, 360 DPI for outdoor large format
            </div>
            <div>
              <strong>Inspection:</strong> Every print inspected for defects before delivery. 100% quality guarantee
            </div>
          </div>
        </div>
      </div>

      <!-- Process -->
      <div class="bg-antares-gray/50 rounded-2xl p-8 lg:p-12">
        <h2 class="text-3xl font-display font-bold text-center mb-8">Our Printing Process</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 class="font-bold mb-2">File Review</h3>
            <p class="text-sm text-white/60">We check your artwork for print readiness</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 class="font-bold mb-2">Material Selection</h3>
            <p class="text-sm text-white/60">Choose the perfect substrate for your needs</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 class="font-bold mb-2">Production</h3>
            <p class="text-sm text-white/60">Print, laminate, and finish with precision</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
            <h3 class="font-bold mb-2">Quality Check</h3>
            <p class="text-sm text-white/60">Inspect and package for safe delivery</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  return c.html(PageLayout('Prints That Leave a Mark | Large Format Printing | Antares Innovate', 'Professional large format printing, POP materials, and brochures. High-quality prints that bring your projects to life', content))
})

app.get('/services/installation', (c) => {
  const content = `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-12">
        <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">
          Installation With <span class="text-antares-blue">Precision</span>
        </h1>
        <p class="text-xl text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
          No matter the height, surface, or complexity. We have the equipment and experience to install your visual communication in any environment. Licensed, insured, and Title 24 compliant.
        </p>
        <a href="tel:+16893312690" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call Now: (689) 331-2690
        </a>
      </div>

      <!-- Cosmic Orb Image -->
      <div class="max-w-3xl mx-auto mb-16 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-3xl blur-3xl"></div>
        <img src="/static/images/installation-orb.jpg" alt="Installation Service - Industrial Universe" class="relative w-full rounded-2xl shadow-2xl"/>
      </div>

      <!-- Installation Services Detailed -->
      <div class="mb-16">
        <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-4">High-Impact Installation Specialists</h2>
        <p class="text-lg text-white/60 text-center mb-12 max-w-3xl mx-auto">Professional signage installation with certified crews, advanced equipment, and comprehensive safety protocols. Licensed, insured, and Title 24 compliant.</p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 rounded-xl border border-green-500/30 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-3xl">
              🏢
            </div>
            <h3 class="text-2xl font-bold mb-4 text-green-500">COMMERCIAL SIGNAGE</h3>
            <p class="text-white/70 mb-4">Complete commercial signage installation for storefronts, buildings, and business locations. Professional mounting and electrical work.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Facade Mounting:</strong> Building-mounted channel letters and signs</li>
              <li>• <strong>Storefront Signs:</strong> Window displays and awning signage</li>
              <li>• <strong>Monument Signs:</strong> Ground-level permanent structures</li>
              <li>• <strong>Compliance:</strong> Title 24 and building code compliance</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 rounded-xl border border-green-500/30 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-3xl">
              💡
            </div>
            <h3 class="text-2xl font-bold mb-4 text-green-500">LED INSTALLATION</h3>
            <p class="text-white/70 mb-4">Licensed electrical contractors for LED sign installation, retrofits, and energy-efficient lighting solutions.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Licensed Electricians:</strong> C-10 electrical contractor license</li>
              <li>• <strong>LED Retrofit:</strong> Convert existing signs to energy-efficient LED</li>
              <li>• <strong>Power Systems:</strong> Transformers and power supply installation</li>
              <li>• <strong>Smart Controls:</strong> Timers, dimmers, and automation systems</li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-8 rounded-xl border border-green-500/30 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <div class="w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-3xl">
              🏗️
            </div>
            <h3 class="text-2xl font-bold mb-4 text-green-500">HIGH-RISE INSTALLATION</h3>
            <p class="text-white/70 mb-4">Specialized high-rise installation with crane service, rope access certification, and OSHA-compliant safety protocols.</p>
            <ul class="text-sm text-white/60 space-y-2">
              <li>• <strong>Crane Service:</strong> Mobile cranes and boom lift equipment</li>
              <li>• <strong>Rope Access:</strong> SPRAT-certified technicians</li>
              <li>• <strong>Safety Systems:</strong> Fall protection and harness systems</li>
              <li>• <strong>OSHA Certified:</strong> 30-hour safety training for all crews</li>
            </ul>
          </div>
        </div>

        <!-- Compliance & Regulations -->
        <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 rounded-2xl p-8 lg:p-12 mb-12 border border-antares-blue/20">
          <h3 class="text-2xl lg:text-3xl font-display font-bold mb-6 text-center">Installation Permits & Compliance</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold mb-4 text-antares-blue">Los Angeles Permit Requirements</h4>
              <ul class="space-y-3 text-white/70 text-sm">
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Building Permits:</strong> Required for all permanent sign installations. LA Department of Building and Safety approval needed before installation
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Electrical Permits:</strong> C-10 licensed electrician required for all LED and illuminated sign installations. Electrical permit mandatory
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Structural Engineering:</strong> PE-stamped drawings required for high-rise installations, rooftop signs, and monument signs exceeding certain heights
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Fire Department Approval:</strong> Required for signs near exits, fire lanes, or exceeding certain sizes
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-4 text-antares-blue">Safety & Code Compliance</h4>
              <ul class="space-y-3 text-white/70 text-sm">
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>OSHA Standards:</strong> All installations comply with OSHA 1926 (Construction) and 1910 (General Industry) safety regulations
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Fall Protection:</strong> Full-body harness, guardrails, and safety nets required for work above 6 feet
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Title 24 Compliance:</strong> All LED installations must meet California Energy Code requirements for efficiency and controls
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-antares-blue text-lg">•</span>
                  <div>
                    <strong>Insurance Requirements:</strong> $2M general liability, workers' compensation, and vehicle insurance on all projects
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-antares-dark/50 rounded-xl border border-white/10">
            <h4 class="font-bold mb-3 text-antares-blue">Our Licensing & Certifications</h4>
            <div class="grid md:grid-cols-4 gap-4 text-sm text-white/70">
              <div>
                <strong>C-10 Electrical:</strong> Licensed electrical contractor for all LED and illuminated signs
              </div>
              <div>
                <strong>C-45 Sign Contractor:</strong> California state sign contractor license
              </div>
              <div>
                <strong>SPRAT Certified:</strong> Rope access technicians for high-rise work
              </div>
              <div>
                <strong>OSHA 30-Hour:</strong> All crew members certified in construction safety
              </div>
            </div>
          </div>
        </div>

        <!-- Our Installation Process -->
        <div class="bg-gradient-to-r from-antares-blue/10 to-blue-600/10 rounded-2xl p-8 lg:p-12 mb-12 border border-antares-blue/20">
          <h3 class="text-2xl lg:text-3xl font-display font-bold mb-6 text-center">Our Installation Process</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-xl font-bold mb-3 text-antares-blue">Pre-Installation</h4>
              <ul class="space-y-2 text-white/70">
                <li>✓ <strong>Site Survey:</strong> Assess installation location and requirements</li>
                <li>✓ <strong>Permit Filing:</strong> Submit all necessary permits and documentation</li>
                <li>✓ <strong>Material Delivery:</strong> Coordinate delivery of signs and equipment</li>
                <li>✓ <strong>Crew Scheduling:</strong> Assign certified technicians and equipment</li>
              </ul>
            </div>
            <div>
              <h4 class="text-xl font-bold mb-3 text-antares-blue">During Installation</h4>
              <ul class="space-y-2 text-white/70">
                <li>✓ <strong>Safety Setup:</strong> Establish safety perimeter and equipment</li>
                <li>✓ <strong>Professional Installation:</strong> Mount and wire signage per specifications</li>
                <li>✓ <strong>Quality Check:</strong> Test all lights, connections, and alignment</li>
                <li>✓ <strong>Site Cleanup:</strong> Remove all debris and leave site pristine</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Why Choose Us -->
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">🛡️</div>
            <h4 class="font-bold mb-2">Fully Insured</h4>
            <p class="text-white/60 text-sm">$2M general liability<br/>Workers' comp coverage</p>
          </div>
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">⚖️</div>
            <h4 class="font-bold mb-2">Licensed Contractors</h4>
            <p class="text-white/60 text-sm">C-10 Electrical<br/>C-45 Sign Contractor</p>
          </div>
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">✅</div>
            <h4 class="font-bold mb-2">Title 24 Experts</h4>
            <p class="text-white/60 text-sm">Energy code compliance<br/>Permit specialists</p>
          </div>
          <div class="bg-antares-gray p-6 rounded-xl border border-white/10 text-center">
            <div class="text-3xl mb-3">⏰</div>
            <h4 class="font-bold mb-2">24/7 Support</h4>
            <p class="text-white/60 text-sm">Emergency service<br/>Flexible scheduling</p>
          </div>
        </div>
      </div>

      <!-- Safety & Compliance -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div class="bg-antares-gray/50 rounded-2xl p-8 border border-white/10">
          <h2 class="text-2xl font-display font-bold mb-6">Safety & Compliance</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-antares-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div><h3 class="font-bold mb-1">Licensed & Insured</h3><p class="text-sm text-white/70">Fully licensed contractors with comprehensive insurance coverage</p></div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-antares-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div><h3 class="font-bold mb-1">OSHA Certified</h3><p class="text-sm text-white/70">All technicians are OSHA safety trained and certified</p></div>
            </div>
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-antares-blue flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <div><h3 class="font-bold mb-1">Title 24 Compliant</h3><p class="text-sm text-white/70">Experts in California building code compliance</p></div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-br from-antares-blue/20 to-blue-600/20 rounded-2xl p-8 border border-antares-blue/30">
          <h2 class="text-2xl font-display font-bold mb-6">Service Areas</h2>
          <p class="text-white/70 mb-4">We serve all of California including:</p>
          <div class="grid grid-cols-2 gap-3">
            <div class="text-sm">• Los Angeles</div>
            <div class="text-sm">• San Diego</div>
            <div class="text-sm">• Bay Area</div>
            <div class="text-sm">• Orange County</div>
            <div class="text-sm">• Sacramento</div>
            <div class="text-sm">• Riverside</div>
            <div class="text-sm">• San Jose</div>
            <div class="text-sm">• Fresno</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`
  return c.html(PageLayout('Installation With Precision | Professional Sign Installation | Antares Innovate', 'Expert sign installation services. Commercial signage, LED installation, and high-rise mounting with certified crews', content))
})

app.get('/projects', (c) => {
  const content = `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">Our <span class="text-antares-blue">Projects</span></h1>
      <p class="text-xl text-white/70 max-w-3xl mx-auto">Explore our portfolio of design, production, and installation work</p>
    </div>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button onclick="filterProjects('all')" class="portfolio-filter-btn active px-6 py-3 bg-antares-blue text-white rounded-lg font-semibold transition-all hover:bg-blue-600" data-filter="all">
        All Projects
      </button>
      <button onclick="filterProjects('design')" class="portfolio-filter-btn px-6 py-3 bg-gradient-to-r from-antares-blue/20 to-blue-600/20 border border-antares-blue/30 text-white/80 rounded-lg font-semibold transition-all hover:bg-antares-blue hover:text-white" data-filter="design">
        🎨 Design
      </button>
      <button onclick="filterProjects('production')" class="portfolio-filter-btn px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-600/20 border border-orange-500/30 text-white/80 rounded-lg font-semibold transition-all hover:bg-orange-500 hover:text-white" data-filter="production">
        🖨️ Production
      </button>
      <button onclick="filterProjects('installation')" class="portfolio-filter-btn px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 text-white/80 rounded-lg font-semibold transition-all hover:bg-green-500 hover:text-white" data-filter="installation">
        ⚡ Installation
      </button>
    </div>

    <!-- Projects Grid -->
    <div id="projects-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Design Project 1 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design.jpg" alt="Logo Design - The Ray Charles Foundation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Logo Design</h3>
          <p class="text-white/80 mb-4">Professional brand identity design with custom typography and visual guidelines</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Branding</span>
          </div>
        </div>
      </div>

      <!-- Production Project 1 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production.jpg" alt="3D Letter Manufacturing - Production Workshop" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">3D Letter Manufacturing</h3>
          <p class="text-white/80 mb-4">Precision fabrication of dimensional letters and signage components in our production facility</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">Manufacturing</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 1 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation.jpg" alt="Wall Logo Installation - The Ray Charles Foundation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Interior Logo Installation</h3>
          <p class="text-white/80 mb-4">Professional mounting of dimensional logo on wood panel feature wall with precise alignment</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">Interior</span>
          </div>
        </div>
      </div>

      <!-- Design Project 2 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design-2.jpg" alt="Barrett Plastic Surgery Logo Design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Medical Brand Identity</h3>
          <p class="text-white/80 mb-4">Professional logo design for plastic surgery practice with elegant typography and refined aesthetics</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Medical</span>
          </div>
        </div>
      </div>

      <!-- Production Project 2 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production-2.jpg" alt="Barrett Plastic Surgery Sign Production" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Large Format Sign Production</h3>
          <p class="text-white/80 mb-4">Manufacturing of dimensional signage with precision CNC routing and professional finishing</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">CNC</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 2 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation-2.jpg" alt="Barrett Plastic Surgery Monument Sign Installation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Monument Sign Installation</h3>
          <p class="text-white/80 mb-4">Professional outdoor monument signage installation with landscaping integration</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">Monument</span>
          </div>
        </div>
      </div>

      <!-- Design Project 3 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design-3.jpg" alt="Taqueria El Fogon Logo Design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Restaurant Brand Design</h3>
          <p class="text-white/80 mb-4">Vibrant logo design for Mexican restaurant with bold colors and authentic cultural elements</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Restaurant</span>
          </div>
        </div>
      </div>

      <!-- Production Project 3 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production-3.jpg" alt="Taqueria El Fogon Sign Manufacturing" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Channel Letter Production</h3>
          <p class="text-white/80 mb-4">Custom illuminated channel letters with precision fabrication and LED integration in production workshop</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">LED</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 3 -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation-3.jpg" alt="Taqueria El Fogon Sign Installation at Night" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">LED Sign Installation with Crane</h3>
          <p class="text-white/80 mb-4">High-rise illuminated sign installation with crane service and professional night lighting setup</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">High-Rise</span>
          </div>
        </div>
      </div>

      <!-- Design Project 4 - Element Hotel -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design-4.jpg" alt="Element Hotel Logo Design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Element Hotel Brand Design</h3>
          <p class="text-white/80 mb-4">Modern hotel branding with circular emblem and bold typography for urban hospitality venue</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Hospitality</span>
          </div>
        </div>
      </div>

      <!-- Production Project 4 - Element Hotel -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production-4.jpg" alt="Element Hotel Sign Production" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Large Format Sign Production</h3>
          <p class="text-white/80 mb-4">Industrial-scale printing and production of hotel signage with automated manufacturing equipment</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">Automation</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 4 - Element Hotel -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation-4.jpg" alt="Element Hotel Sign Installation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Urban Facade Installation</h3>
          <p class="text-white/80 mb-4">High-visibility building facade installation with crane service in downtown urban setting</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">Facade</span>
          </div>
        </div>
      </div>

      <!-- Design Project 5 - Family Dentistry -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design-5.jpg" alt="Family Dentistry Logo Design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Family Dentistry Brand Design</h3>
          <p class="text-white/80 mb-4">Pediatric dental practice branding with friendly giraffe mascot and bilingual identity elements</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Dental</span>
          </div>
        </div>
      </div>

      <!-- Production Project 5 - Family Dentistry -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production-5.jpg" alt="Family Dentistry Sign Production" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Dental Sign Manufacturing</h3>
          <p class="text-white/80 mb-4">Production of pediatric dental signage with vibrant colors and professional UV-resistant finish</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">UV Print</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 5 - Family Dentistry -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation-5.jpg" alt="Family Dentistry Monument Sign Installation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Ground Monument Sign Installation</h3>
          <p class="text-white/80 mb-4">Professional monument sign installation with landscaping integration and custom stone base</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">Landscaping</span>
          </div>
        </div>
      </div>

      <!-- Design Project 6 - Felix Chevrolet -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design-6.jpg" alt="Felix Chevrolet Logo Design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Felix Chevrolet Brand Identity</h3>
          <p class="text-white/80 mb-4">Automotive dealership branding with iconic character mascot and bold typography design</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Automotive</span>
          </div>
        </div>
      </div>

      <!-- Production Project 6 - Felix Chevrolet -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production-6.jpg" alt="Felix Chevrolet Sign Production" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">3D Dimensional Letters</h3>
          <p class="text-white/80 mb-4">Custom fabrication of large-scale 3D letters with precision CNC routing and professional finishing</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">3D Letters</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 6 - Felix Chevrolet -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation-6.jpg" alt="Felix Chevrolet Monument Sign Installation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Dealership Monument Sign</h3>
          <p class="text-white/80 mb-4">Large-scale monument signage installation at automotive dealership with professional site preparation</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">Monument</span>
          </div>
        </div>
      </div>

      <!-- Design Project 7 - Clineva Urgent Care -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="design">
        <img src="/static/images/project-design-7.jpg" alt="Clineva Urgent Care Logo Design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Clineva Urgent Care Branding</h3>
          <p class="text-white/80 mb-4">Healthcare brand identity with modern medical cross logo and professional color palette</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-antares-blue/30 border border-antares-blue rounded-full text-xs font-semibold">Design</span>
            <span class="px-3 py-1 bg-antares-blue/20 rounded-full text-xs">Healthcare</span>
          </div>
        </div>
      </div>

      <!-- Production Project 7 - Clineva Urgent Care -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="production">
        <img src="/static/images/project-production-7.jpg" alt="Clineva Urgent Care Sign Production" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Medical Facility Signage</h3>
          <p class="text-white/80 mb-4">Professional production of healthcare signage with precision print quality and durable materials</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-orange-500/30 border border-orange-500 rounded-full text-xs font-semibold">Production</span>
            <span class="px-3 py-1 bg-orange-500/20 rounded-full text-xs">Medical</span>
          </div>
        </div>
      </div>

      <!-- Installation Project 7 - Clineva Urgent Care -->
      <div class="project-card group relative h-96 rounded-2xl overflow-hidden" data-category="installation">
        <img src="/static/images/project-installation-7.jpg" alt="Clineva Urgent Care Channel Letters Installation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        <div class="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 class="text-2xl font-bold mb-2">Medical Center Channel Letters</h3>
          <p class="text-white/80 mb-4">Professional installation of exterior channel letter signage for healthcare facility</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500/30 border border-green-500 rounded-full text-xs font-semibold">Installation</span>
            <span class="px-3 py-1 bg-green-500/20 rounded-full text-xs">Exterior</span>
          </div>
        </div>
      </div>

    </div>

    <!-- CTA Section -->
    <div class="mt-20 text-center">
      <div class="bg-gradient-to-br from-antares-blue/10 to-blue-600/10 border border-antares-blue/30 rounded-2xl p-12 max-w-4xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-display font-bold mb-4">Ready to Start Your Project?</h2>
        <p class="text-xl text-white/70 mb-8">From concept to installation, we're your trusted provider for the entire process</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+16893312690" class="inline-flex items-center justify-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all hover:scale-105">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call Now: (689) 331-2690
          </a>
          <button onclick="openRequestCallModal()" class="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-lg transition-all hover:scale-105">
            Request Free Quote
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

<script>
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.portfolio-filter-btn');
  
  // Update button states
  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-antares-blue', 'bg-orange-500', 'bg-green-500');
    btn.classList.add('bg-gradient-to-r');
    const filter = btn.getAttribute('data-filter');
    if (filter === 'design') {
      btn.classList.add('from-antares-blue/20', 'to-blue-600/20', 'border', 'border-antares-blue/30');
    } else if (filter === 'production') {
      btn.classList.add('from-orange-500/20', 'to-red-600/20', 'border', 'border-orange-500/30');
    } else if (filter === 'installation') {
      btn.classList.add('from-green-500/20', 'to-emerald-600/20', 'border', 'border-green-500/30');
    }
  });
  
  const activeBtn = document.querySelector(\`[data-filter="\${category}"]\`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.classList.remove('bg-gradient-to-r', 'from-antares-blue/20', 'to-blue-600/20', 'from-orange-500/20', 'to-red-600/20', 'from-green-500/20', 'to-emerald-600/20', 'border', 'border-antares-blue/30', 'border-orange-500/30', 'border-green-500/30');
    if (category === 'design') {
      activeBtn.classList.add('bg-antares-blue');
    } else if (category === 'production') {
      activeBtn.classList.add('bg-orange-500');
    } else if (category === 'installation') {
      activeBtn.classList.add('bg-green-500');
    } else {
      activeBtn.classList.add('bg-antares-blue');
    }
  }
  
  // Filter cards
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}
</script>
  `;
  
  return c.html(PageLayout('Our Projects | Portfolio | Antares Innovate', 'Browse our portfolio of design, production, and installation projects. Professional signage solutions from concept to completion.', content))
})
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
          <a href="tel:+16893312690" class="inline-flex items-center justify-center px-8 py-4 bg-white text-antares-blue hover:bg-gray-100 rounded-xl font-semibold transition-all hover:scale-105">
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
              <a href="tel:+16893312690" class="flex items-start p-4 bg-antares-dark hover:bg-antares-blue/10 rounded-lg transition-colors group">
                <div class="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-600/20 transition-colors">
                  <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-white/60 mb-1">Phone</div>
                  <div class="font-semibold">+1 (689) 331-2690</div>
                  <div class="text-sm text-white/60 mt-1">24/7 Technical Support</div>
                </div>
              </a>

              <a href="mailto:contacto@antaresinnovate.com" class="flex items-start p-4 bg-antares-dark hover:bg-antares-blue/10 rounded-lg transition-colors group">
                <div class="w-12 h-12 bg-antares-blue/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-antares-blue/20 transition-colors">
                  <svg class="w-6 h-6 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-white/60 mb-1">Email</div>
                  <div class="font-semibold">contacto@antaresinnovate.com</div>
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
        reply: 'I apologize, but I\'m currently unable to process requests. Please message us on WhatsApp at +1 (689) 331-2690 for immediate assistance.'
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
- Phone: (689) 331-2690 (24/7 available)
- Email: contacto@antaresinnovate.com
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

1. BE NATURAL AND FRIENDLY:
   ❌ DON'T sound like a robot or script
   ✅ DO talk like you're chatting with a friend
   
   Example:
   Client: "I need signage for my car dealership"
   Bad (too formal): "Excellent! We provide comprehensive signage solutions for automotive dealerships..."
   Good (natural): "Nice! We do a lot of work with dealerships - Tesla, Volvo, bunch of others. What kind of signage are you thinking?"

2. LISTEN FIRST, OFFER SOLUTIONS:
   - Pay attention to what they say
   - Respond to their actual question
   - Share a quick relevant example or benefit
   - Then ask what they need or offer to help

3. KEEP IT SHORT - REALLY SHORT:
   - 2-3 sentences MAX per response
   - One main point per message
   - Like texting a friend
   - Don't overwhelm with info

4. BE HELPFUL AND FRIENDLY:
   - Show genuine interest
   - Use casual language ("Nice!", "Cool!", "Awesome!")
   - Be warm but professional
   - Smile through your words

5. GET TO KNOW THEIR NEED:
   - Ask simple, friendly questions
   - "What kind of look are you going for?"
   - "Is this for new construction or replacing old signs?"
   - "Indoor or outdoor?"
   
6. OFFER NEXT STEPS NATURALLY:
   "Want to message us on WhatsApp? (689) 331-2690"
   "I can have our designer call you - what's your number?"
   "Free to chat now? Give me a ring!"

RESPONSE STRUCTURE:
Line 1: Acknowledge warmly
Line 2: Share one relevant point or benefit
Line 3: Ask about their need OR offer to connect

Example Conversation:
Client: "How much for LED signs?"
You: "They usually pay for themselves in about 2 years with the energy savings!\n\nWhat size are you thinking? I can get you a ballpark number."

Client: "I have a retail store"
You: "Cool! We've done a bunch of retail - Five Below, Crate & Barrel.\n\nWhat kind of signage are you looking for? Exterior, interior, or both?"

CRITICAL - KEEP IT SUPER SHORT:
- Maximum 2-3 short sentences
- One paragraph only (no \n\n breaks unless really needed)
- Talk like you're texting
- Be human, be brief, be helpful

TONE:
- Friendly and approachable (like a helpful neighbor)
- Warm but not overly enthusiastic
- Professional but casual
- Quick and responsive

REMEMBER: You're a friendly sales consultant having a quick, natural conversation. Keep it short, keep it real, keep it helpful.`

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
        max_tokens: 120, // Very short, conversational responses
        temperature: 0.9, // More creative and natural like a real salesperson
      })
    })

    if (!response.ok) {
      throw new Error('OpenAI API error')
    }

    const data = await response.json()
    const reply = data.choices[0]?.message?.content || 'I apologize, but I couldn\'t process that. Please message us on WhatsApp at +1 (689) 331-2690.'

    return c.json({ 
      success: true,
      reply: reply.trim()
    })
    
  } catch (error) {
    console.error('Chat API error:', error)
    return c.json({ 
      success: false,
      reply: 'I apologize for the inconvenience. Please message us on WhatsApp at +1 (689) 331-2690 for immediate assistance, or try again in a moment.'
    }, 500)
  }
})

export default app
