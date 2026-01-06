// Shared components for Antares Innovate website

export const Header = () => `
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-antares-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16 lg:h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2 group cursor-pointer" title="Go to Home">
        <div class="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-antares-blue to-blue-600 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <span class="text-white font-bold text-sm lg:text-lg">A</span>
        </div>
        <div>
          <span class="font-display font-bold text-base lg:text-xl tracking-tight group-hover:text-antares-blue transition-colors">ANTARES<span class="text-antares-blue">.</span></span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-1">
        <a href="/" class="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">Home</a>
        <a href="/services" class="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">Services</a>
        <a href="/projects" class="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">Projects</a>
        <a href="/about" class="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">About</a>
        <a href="/contact" class="nav-link px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">Contact</a>
      </div>

      <!-- CTA Buttons -->
      <div class="hidden lg:flex items-center space-x-3">
        <a href="tel:+13234445555" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          Call Now
        </a>
        <button onclick="openRequestCallModal()" class="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-antares-blue hover:bg-blue-600 rounded-lg transition-colors">
          Request Call
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden lg:hidden border-t border-white/5">
    <div class="px-4 pt-2 pb-4 space-y-1">
      <a href="/" class="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Home</a>
      <a href="/services" class="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Services</a>
      <a href="/projects" class="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Projects</a>
      <a href="/about" class="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">About</a>
      <a href="/contact" class="block px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Contact</a>
      <div class="pt-4 space-y-2">
        <a href="tel:+13234445555" class="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
          Call Now
        </a>
        <button onclick="openRequestCallModal()" class="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-antares-blue hover:bg-blue-600 rounded-lg transition-colors">
          Request Call
        </button>
      </div>
    </div>
  </div>
</nav>
`;

export const Footer = () => `
<footer class="bg-antares-gray border-t border-white/5 py-12 lg:py-16">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      <!-- Company Info -->
      <div class="col-span-1 md:col-span-2 lg:col-span-1">
        <a href="/" class="flex items-center space-x-2 mb-4 group cursor-pointer" title="Go to Home">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-antares-blue to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span class="text-white font-bold text-lg">A</span>
          </div>
          <span class="font-display font-bold text-xl tracking-tight group-hover:text-antares-blue transition-colors">ANTARES<span class="text-antares-blue">.</span></span>
        </a>
        <p class="text-white/60 text-sm leading-relaxed mb-4">
          Global leader in industrial signage, LED engineering, and technical compliance solutions.
        </p>
        <div class="flex items-center space-x-4">
          <a href="tel:+13234445555" class="text-white/60 hover:text-antares-blue transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
          </a>
          <a href="mailto:info@antaresinnovate.com" class="text-white/60 hover:text-antares-blue transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
        <ul class="space-y-3">
          <li><a href="/" class="text-white/60 hover:text-white text-sm transition-colors">Home</a></li>
          <li><a href="/services" class="text-white/60 hover:text-white text-sm transition-colors">Services</a></li>
          <li><a href="/projects" class="text-white/60 hover:text-white text-sm transition-colors">Projects</a></li>
          <li><a href="/about" class="text-white/60 hover:text-white text-sm transition-colors">About Us</a></li>
          <li><a href="/contact" class="text-white/60 hover:text-white text-sm transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Services</h3>
        <ul class="space-y-3">
          <li><a href="/services#signage" class="text-white/60 hover:text-white text-sm transition-colors">Signage Installation</a></li>
          <li><a href="/services#led" class="text-white/60 hover:text-white text-sm transition-colors">LED Retrofit</a></li>
          <li><a href="/services#maintenance" class="text-white/60 hover:text-white text-sm transition-colors">Maintenance</a></li>
          <li><a href="/services#compliance" class="text-white/60 hover:text-white text-sm transition-colors">Compliance</a></li>
          <li><a href="/services#custom" class="text-white/60 hover:text-white text-sm transition-colors">Custom Solutions</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Contact</h3>
        <ul class="space-y-3 text-sm text-white/60">
          <li>
            <span class="block text-white/40 text-xs mb-1">Phone</span>
            <a href="tel:+13234445555" class="hover:text-white transition-colors">+1 (323) 444-5555</a>
          </li>
          <li>
            <span class="block text-white/40 text-xs mb-1">Email</span>
            <a href="mailto:info@antaresinnovate.com" class="hover:text-white transition-colors">info@antaresinnovate.com</a>
          </li>
          <li>
            <span class="block text-white/40 text-xs mb-1">Hours</span>
            <span>24/7 Technical Support</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p class="text-white/40 text-sm text-center md:text-left">
        © ${new Date().getFullYear()} Antares Innovate. All rights reserved.
      </p>
      <div class="flex items-center space-x-6 text-sm">
        <a href="/privacy" class="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
        <a href="/terms" class="text-white/40 hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

export const RequestCallModal = () => `
<!-- Request Call Modal -->
<div id="request-call-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-sm">
  <div class="bg-antares-gray border border-white/10 rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 lg:p-8 animate-fade-in">
    <div class="flex justify-between items-start mb-6">
      <div>
        <h3 class="text-2xl font-display font-bold text-white mb-2">Request a Call</h3>
        <p class="text-white/60 text-sm">We'll contact you within 1 business hour</p>
      </div>
      <button onclick="closeRequestCallModal()" class="text-white/60 hover:text-white transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <form onsubmit="submitRequestCall(event)" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-white/80 mb-2">Full Name *</label>
        <input type="text" required class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="John Doe">
      </div>

      <div>
        <label class="block text-sm font-medium text-white/80 mb-2">Phone Number *</label>
        <input type="tel" required class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="+1 (555) 123-4567">
      </div>

      <div>
        <label class="block text-sm font-medium text-white/80 mb-2">Email</label>
        <input type="email" class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors" placeholder="john@company.com">
      </div>

      <div>
        <label class="block text-sm font-medium text-white/80 mb-2">Best Time to Call</label>
        <select class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors">
          <option>Morning (9AM - 12PM)</option>
          <option>Afternoon (12PM - 5PM)</option>
          <option>Evening (5PM - 8PM)</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-white/80 mb-2">Project Type</label>
        <select class="w-full px-4 py-3 bg-antares-dark border border-white/10 rounded-lg text-white focus:border-antares-blue focus:ring-1 focus:ring-antares-blue outline-none transition-colors">
          <option>Signage Installation</option>
          <option>LED Retrofit</option>
          <option>Maintenance & Repair</option>
          <option>Compliance Consultation</option>
          <option>Custom Project</option>
          <option>Other</option>
        </select>
      </div>

      <button type="submit" class="w-full py-3 bg-antares-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
        Submit Request
      </button>
    </form>
  </div>
</div>
`;

export const ChatbotWidget = () => `
<!-- Chatbot Widget -->
<div id="chatbot-widget" class="fixed bottom-6 right-6 z-50">
  <!-- Chat Button -->
  <button id="chatbot-toggle" class="w-14 h-14 lg:w-16 lg:h-16 bg-antares-blue hover:bg-blue-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
    <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
    </svg>
  </button>

  <!-- Chat Window -->
  <div id="chatbot-window" class="hidden absolute bottom-20 right-0 w-80 lg:w-96 h-[500px] bg-antares-gray border border-white/10 rounded-2xl shadow-2xl flex flex-col">
    <!-- Header -->
    <div class="bg-gradient-to-r from-antares-blue to-blue-600 p-4 rounded-t-2xl flex justify-between items-center">
      <div>
        <h3 class="font-display font-bold text-white">Antares Support</h3>
        <p class="text-white/80 text-xs">We typically reply instantly</p>
      </div>
      <button id="chatbot-close" class="text-white/80 hover:text-white transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Messages -->
    <div id="chatbot-messages" class="flex-1 p-4 overflow-y-auto space-y-4">
      <div class="flex items-start space-x-2">
        <div class="w-8 h-8 bg-antares-blue rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-white text-xs font-bold">A</span>
        </div>
        <div class="bg-antares-dark rounded-lg p-3 max-w-[80%]">
          <p class="text-white/90 text-sm">Welcome to Antares Innovate! 👋</p>
          <p class="text-white/70 text-sm mt-1">How can I help you today?</p>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div id="chatbot-quick-actions" class="px-4 pb-4 flex flex-wrap gap-2">
      <button onclick="sendQuickMessage('Request Quote')" class="px-3 py-1.5 bg-antares-dark hover:bg-antares-blue text-white/80 hover:text-white text-xs rounded-full transition-colors">
        💼 Request Quote
      </button>
      <button onclick="sendQuickMessage('Schedule Call')" class="px-3 py-1.5 bg-antares-dark hover:bg-antares-blue text-white/80 hover:text-white text-xs rounded-full transition-colors">
        📞 Schedule Call
      </button>
      <button onclick="sendQuickMessage('View Services')" class="px-3 py-1.5 bg-antares-dark hover:bg-antares-blue text-white/80 hover:text-white text-xs rounded-full transition-colors">
        🛠️ View Services
      </button>
    </div>

    <!-- Input -->
    <div class="p-4 border-t border-white/5">
      <form onsubmit="sendChatMessage(event)" class="flex space-x-2">
        <input type="text" id="chatbot-input" placeholder="Type your message..." class="flex-1 px-4 py-2 bg-antares-dark border border-white/10 rounded-lg text-white text-sm focus:border-antares-blue outline-none">
        <button type="submit" class="px-4 py-2 bg-antares-blue hover:bg-blue-600 rounded-lg transition-colors">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </button>
      </form>
    </div>
  </div>
</div>
`;

export const PageLayout = (title: string, description: string, content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Antares Innovate</title>
    <meta name="description" content="${description}">
    
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
    
    <link rel="stylesheet" href="/static/styles.css?v=5">
</head>
<body class="bg-antares-dark text-white antialiased">
    ${Header()}
    
    <main class="pt-16 lg:pt-20">
        ${content}
    </main>
    
    ${Footer()}
    ${RequestCallModal()}
    ${ChatbotWidget()}
    
    <script src="/static/app.js?v=9"></script>
    <script src="/static/chatbot.js?v=24"></script>
</body>
</html>
`;
