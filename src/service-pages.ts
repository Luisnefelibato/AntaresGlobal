// ============================================
// SERVICE DETAIL PAGES - DESIGN, PRINT, INSTALLATION
// ============================================

import { PageLayout } from './components'

// DESIGN SERVICE PAGE
export const DesignServicePage = () => `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center space-x-2 bg-antares-blue/10 border border-antares-blue/20 rounded-full px-4 py-2 mb-6">
        <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
        <span class="text-antares-blue text-sm font-medium">Design Services</span>
      </div>
      
      <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">
        Custom Sign Design <span class="text-antares-blue">California</span>
      </h1>
      
      <p class="text-xl text-white/70 leading-relaxed mb-8">
        Whether you're starting from scratch or your brand needs evolution, we specialize in visual solutions that communicate your values instantly.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/16893312690" target="_blank" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Get Free Quote
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Request Consultation
        </button>
      </div>
    </div>

    <!-- Feature Image -->
    <div class="max-w-5xl mx-auto mb-20">
      <div class="relative rounded-2xl overflow-hidden shadow-2xl">
        <img src="/static/images/services/design-service.jpg" alt="Custom Sign Design Studio California" class="w-full h-auto" />
        <div class="absolute inset-0 bg-gradient-to-t from-antares-dark/80 to-transparent"></div>
      </div>
    </div>

    <!-- What We Offer -->
    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-3xl lg:text-5xl font-display font-bold text-center mb-12">
        What We Do for <span class="text-antares-blue">Your Business</span>
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Channel Letters</h3>
          <p class="text-white/70">3D illuminated signage that makes your brand stand out day and night</p>
        </div>

        <!-- Service 2 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Storefront Signs</h3>
          <p class="text-white/70">Eye-catching storefront signage designed to attract more customers</p>
        </div>

        <!-- Service 3 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Custom Business Signs</h3>
          <p class="text-white/70">Tailored signage solutions that reflect your unique brand identity</p>
        </div>

        <!-- Service 4 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">LED Signs</h3>
          <p class="text-white/70">Energy-efficient LED signage with vibrant colors and low maintenance</p>
        </div>

        <!-- Service 5 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Window Graphics</h3>
          <p class="text-white/70">Transform your windows into powerful marketing tools</p>
        </div>

        <!-- Service 6 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Monument Signs</h3>
          <p class="text-white/70">Permanent ground signage for lasting brand presence</p>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <div class="max-w-5xl mx-auto mb-20">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-12">
        Our Design <span class="text-antares-blue">Process</span>
      </h2>
      
      <div class="grid md:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
          <h3 class="font-bold mb-2">Consultation</h3>
          <p class="text-sm text-white/60">Understand your vision and business goals</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
          <h3 class="font-bold mb-2">Concept Design</h3>
          <p class="text-sm text-white/60">Create multiple design concepts for review</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
          <h3 class="font-bold mb-2">Refinement</h3>
          <p class="text-sm text-white/60">Perfect every detail with your feedback</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-antares-blue rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
          <h3 class="font-bold mb-2">Final Approval</h3>
          <p class="text-sm text-white/60">Deliver production-ready designs</p>
        </div>
      </div>
    </div>

    <!-- Benefits Section -->
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-12">
        Why Choose Our <span class="text-antares-blue">Design Services</span>
      </h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Instant Brand Communication</h3>
            <p class="text-white/70">Your signage communicates your values at a glance</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Professional Design Team</h3>
            <p class="text-white/70">Experienced designers who understand California market</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Boost Business Visibility</h3>
            <p class="text-white/70">Attract more customers with high-impact signage</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Make Your Brand Stand Out</h3>
            <p class="text-white/70">Unique designs that differentiate you from competitors</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-antares-blue/20 to-blue-600/20 p-12 rounded-2xl border border-antares-blue/30">
      <h2 class="text-3xl font-display font-bold mb-4">Ready to Start Your Project?</h2>
      <p class="text-xl text-white/70 mb-8">Get a free design consultation and quote today</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/16893312690" target="_blank" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp: +1 689-331-2690
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          Request Free Consultation
        </button>
      </div>
    </div>
  </div>
</section>
`

// PRINT SERVICE PAGE
export const PrintServicePage = () => `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center space-x-2 bg-antares-blue/10 border border-antares-blue/20 rounded-full px-4 py-2 mb-6">
        <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
        </svg>
        <span class="text-antares-blue text-sm font-medium">Print & Fabrication</span>
      </div>
      
      <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">
        Professional Sign <span class="text-antares-blue">Printing</span> California
      </h1>
      
      <p class="text-xl text-white/70 leading-relaxed mb-8">
        In a digital world, physical has special weight. Texture, color precision, and finish quality say more about you than a thousand emails. We don't just print; we ensure the first impression is flawless.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/16893312690" target="_blank" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Get Free Quote
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Request Consultation
        </button>
      </div>
    </div>

    <!-- Feature Image -->
    <div class="max-w-5xl mx-auto mb-20">
      <div class="relative rounded-2xl overflow-hidden shadow-2xl">
        <img src="/static/images/services/print-service.jpg" alt="Professional Sign Printing California Large Format" class="w-full h-auto" />
        <div class="absolute inset-0 bg-gradient-to-t from-antares-dark/80 to-transparent"></div>
      </div>
    </div>

    <!-- Print Types -->
    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-3xl lg:text-5xl font-display font-bold text-center mb-12">
        High-Impact <span class="text-antares-blue">Printing Solutions</span>
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Type 1 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Vinyl Signs</h3>
          <p class="text-white/70">Durable, weather-resistant vinyl printing for indoor and outdoor use</p>
        </div>

        <!-- Type 2 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Outdoor Signs</h3>
          <p class="text-white/70">UV-resistant prints designed to withstand California weather</p>
        </div>

        <!-- Type 3 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Indoor Signage</h3>
          <p class="text-white/70">Premium interior printing for lobbies, offices, and retail spaces</p>
        </div>

        <!-- Type 4 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Window Graphics</h3>
          <p class="text-white/70">Vibrant window displays that turn traffic into sales</p>
        </div>

        <!-- Type 5 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Store Signs</h3>
          <p class="text-white/70">Professional storefront printing that attracts customers</p>
        </div>

        <!-- Type 6 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Illuminated Signs</h3>
          <p class="text-white/70">Backlit and LED-integrated printed signage for 24/7 visibility</p>
        </div>
      </div>
    </div>

    <!-- Quality Promise -->
    <div class="max-w-5xl mx-auto mb-20 bg-antares-gray p-12 rounded-2xl border border-white/10">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-8">
        Our Quality <span class="text-antares-blue">Promise</span>
      </h2>
      
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div class="text-4xl text-antares-blue font-bold mb-2">100%</div>
          <h3 class="font-bold mb-2">Color Accuracy</h3>
          <p class="text-sm text-white/60">Precise color matching every time</p>
        </div>
        <div>
          <div class="text-4xl text-antares-blue font-bold mb-2">Premium</div>
          <h3 class="font-bold mb-2">Materials</h3>
          <p class="text-sm text-white/60">Only the highest quality substrates</p>
        </div>
        <div>
          <div class="text-4xl text-antares-blue font-bold mb-2">Fast</div>
          <h3 class="font-bold mb-2">Turnaround</h3>
          <p class="text-sm text-white/60">Quick production without compromising quality</p>
        </div>
      </div>
    </div>

    <!-- Benefits -->
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-12">
        Why Choose Our <span class="text-antares-blue">Printing Services</span>
      </h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">State-of-the-Art Equipment</h3>
            <p class="text-white/70">Latest large format printing technology for superior results</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Weather-Resistant Finishes</h3>
            <p class="text-white/70">Prints that last years in California sun and rain</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Built to Get Noticed</h3>
            <p class="text-white/70">Signs that sell and turn traffic into sales</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Visibility That Converts</h3>
            <p class="text-white/70">Make your business seen and attract more customers</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-antares-blue/20 to-blue-600/20 p-12 rounded-2xl border border-antares-blue/30">
      <h2 class="text-3xl font-display font-bold mb-4">Ready to Print Your Signs?</h2>
      <p class="text-xl text-white/70 mb-8">Get a free quote on your printing project today</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/16893312690" target="_blank" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp: +1 689-331-2690
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          Request Free Consultation
        </button>
      </div>
    </div>
  </div>
</section>
`

// INSTALLATION SERVICE PAGE  
export const InstallationServicePage = () => `
<section class="py-24 lg:py-32 bg-antares-dark">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <div class="inline-flex items-center space-x-2 bg-antares-blue/10 border border-antares-blue/20 rounded-full px-4 py-2 mb-6">
        <svg class="w-5 h-5 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
        <span class="text-antares-blue text-sm font-medium">Installation Services</span>
      </div>
      
      <h1 class="text-4xl lg:text-6xl font-display font-bold mb-6">
        Professional Sign <span class="text-antares-blue">Installation</span> California
      </h1>
      
      <p class="text-xl text-white/70 leading-relaxed mb-8">
        No matter the height, surface, or complexity. We have the equipment and experience to install your visual communication in any environment.
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/16893312690" target="_blank" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Get Free Quote
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          Request Consultation
        </button>
      </div>
    </div>

    <!-- Feature Image -->
    <div class="max-w-5xl mx-auto mb-20">
      <div class="relative rounded-2xl overflow-hidden shadow-2xl">
        <img src="/static/images/services/installation-service.jpg" alt="Professional Sign Installation California Commercial Signage" class="w-full h-auto" />
        <div class="absolute inset-0 bg-gradient-to-t from-antares-dark/80 to-transparent"></div>
      </div>
    </div>

    <!-- Installation Types -->
    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-3xl lg:text-5xl font-display font-bold text-center mb-12">
        High-Impact <span class="text-antares-blue">Installation Specialists</span>
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Type 1 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Commercial Signage</h3>
          <p class="text-white/70">Professional storefront and business sign installation</p>
        </div>

        <!-- Type 2 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">LED Sign Installation</h3>
          <p class="text-white/70">Expert electrical work and LED system integration</p>
        </div>

        <!-- Type 3 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">High-Rise Installation</h3>
          <p class="text-white/70">Certified for installations at any height with specialized equipment</p>
        </div>

        <!-- Type 4 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Permits & Compliance</h3>
          <p class="text-white/70">Handle all permits and ensure Title 24 compliance</p>
        </div>

        <!-- Type 5 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">After-Hours Installation</h3>
          <p class="text-white/70">Flexible scheduling including nights and weekends</p>
        </div>

        <!-- Type 6 -->
        <div class="bg-antares-gray p-8 rounded-xl border border-white/10 hover:border-antares-blue transition-all">
          <div class="w-14 h-14 bg-antares-blue/20 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-7 h-7 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Maintenance & Support</h3>
          <p class="text-white/70">Ongoing maintenance and 24/7 emergency support</p>
        </div>
      </div>
    </div>

    <!-- Our Equipment -->
    <div class="max-w-5xl mx-auto mb-20 bg-antares-gray p-12 rounded-2xl border border-white/10">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-8">
        Professional <span class="text-antares-blue">Equipment</span>
      </h2>
      
      <div class="grid md:grid-cols-4 gap-6 text-center">
        <div>
          <div class="text-3xl mb-3">🏗️</div>
          <h3 class="font-bold mb-2">Cranes & Lifts</h3>
          <p class="text-sm text-white/60">Multiple lift options for any height</p>
        </div>
        <div>
          <div class="text-3xl mb-3">🚛</div>
          <h3 class="font-bold mb-2">Specialized Trucks</h3>
          <p class="text-sm text-white/60">Fleet ready for any project size</p>
        </div>
        <div>
          <div class="text-3xl mb-3">⚡</div>
          <h3 class="font-bold mb-2">Electrical Tools</h3>
          <p class="text-sm text-white/60">Licensed electricians on staff</p>
        </div>
        <div>
          <div class="text-3xl mb-3">🛠️</div>
          <h3 class="font-bold mb-2">Professional Tools</h3>
          <p class="text-sm text-white/60">Industry-leading installation equipment</p>
        </div>
      </div>
    </div>

    <!-- Safety & Compliance -->
    <div class="max-w-6xl mx-auto mb-20">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-12">
        Safety & <span class="text-antares-blue">Compliance First</span>
      </h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Licensed & Insured</h3>
            <p class="text-white/70">Fully licensed contractors with comprehensive insurance</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">OSHA Certified</h3>
            <p class="text-white/70">All technicians are OSHA safety trained</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Title 24 Compliant</h3>
            <p class="text-white/70">Experts in California building code compliance</p>
          </div>
        </div>

        <div class="flex gap-4">
          <div class="flex-shrink-0">
            <svg class="w-8 h-8 text-antares-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="font-bold mb-2">Quality Guaranteed</h3>
            <p class="text-white/70">Professional installation with warranty protection</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Areas -->
    <div class="max-w-5xl mx-auto mb-20">
      <h2 class="text-3xl lg:text-4xl font-display font-bold text-center mb-8">
        Serving <span class="text-antares-blue">All of California</span>
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="bg-antares-gray p-4 rounded-lg">Los Angeles</div>
        <div class="bg-antares-gray p-4 rounded-lg">San Diego</div>
        <div class="bg-antares-gray p-4 rounded-lg">Bay Area</div>
        <div class="bg-antares-gray p-4 rounded-lg">Orange County</div>
        <div class="bg-antares-gray p-4 rounded-lg">Sacramento</div>
        <div class="bg-antares-gray p-4 rounded-lg">Riverside</div>
        <div class="bg-antares-gray p-4 rounded-lg">San Jose</div>
        <div class="bg-antares-gray p-4 rounded-lg">Fresno</div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-antares-blue/20 to-blue-600/20 p-12 rounded-2xl border border-antares-blue/30">
      <h2 class="text-3xl font-display font-bold mb-4">Ready to Install Your Signs?</h2>
      <p class="text-xl text-white/70 mb-8">Get a free installation quote today</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/16893312690" target="_blank" class="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp: +1 689-331-2690
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-8 py-4 bg-antares-blue hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
          Request Free Consultation
        </button>
      </div>
    </div>
  </div>
</section>
`
