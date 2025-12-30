// ============================================
// ANTARES INNOVATE - INTERACTIVE BEHAVIOR
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // NAVIGATION SCROLL EFFECT
  // ==========================================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for background effect
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  
  // ==========================================
  // MOBILE MENU TOGGLE
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  
  // ==========================================
  // PORTFOLIO FILTER FUNCTIONALITY
  // ==========================================
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => {
          b.classList.remove('active', 'bg-antares-blue');
          b.classList.add('bg-white/10');
        });
        btn.classList.add('active', 'bg-antares-blue');
        btn.classList.remove('bg-white/10');
        
        const filter = btn.dataset.filter;
        
        // Filter projects with animation
        projectCards.forEach((card, index) => {
          const category = card.dataset.category;
          
          if (filter === 'all' || category === filter) {
            // Show card with staggered animation
            card.style.display = 'block';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
              card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 50);
          } else {
            // Hide card
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // ==========================================
  // REQUEST CALL MODAL
  // ==========================================
  const requestCallBtn = document.getElementById('request-call-btn');
  const requestCallModal = document.getElementById('request-call-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const callRequestForm = document.getElementById('call-request-form');
  
  if (requestCallBtn && requestCallModal) {
    requestCallBtn.addEventListener('click', () => {
      requestCallModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
    
    closeModalBtn.addEventListener('click', () => {
      requestCallModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
    
    // Close on backdrop click
    requestCallModal.addEventListener('click', (e) => {
      if (e.target === requestCallModal) {
        requestCallModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
    
    // Handle form submission
    callRequestForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(callRequestForm);
      const data = Object.fromEntries(formData);
      
      // Show success message
      callRequestForm.innerHTML = `
        <div class="text-center py-8">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-green-500 text-2xl"></i>
          </div>
          <h4 class="text-xl font-bold text-gray-800 mb-2">Request Received!</h4>
          <p class="text-gray-600 mb-6">We'll call you back within 15 minutes during business hours (Mon-Fri, 8AM-6PM PT)</p>
          <button onclick="document.getElementById('request-call-modal').classList.add('hidden'); document.body.style.overflow = '';" class="px-6 py-2 bg-antares-blue text-white rounded-lg hover:bg-blue-600 transition-colors">
            Close
          </button>
        </div>
      `;
      
      // In production, send to API
      console.log('Call request:', data);
    });
  }
  
  
  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  // ==========================================
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ==========================================
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // For stat cards, animate numbers
        if (entry.target.classList.contains('stat-card')) {
          animateNumber(entry.target);
        }
      }
    });
  }, observerOptions);
  
  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .service-card, .stat-card, .compliance-card, .approach-phase'
  );
  
  animatedElements.forEach(el => observer.observe(el));
  
  
  // ==========================================
  // ANIMATE NUMBERS IN STAT CARDS
  // ==========================================
  function animateNumber(card) {
    const numberElement = card.querySelector('.text-5xl');
    if (!numberElement || numberElement.dataset.animated) return;
    
    numberElement.dataset.animated = 'true';
    const text = numberElement.textContent;
    
    // Check if it's a number we should animate
    const match = text.match(/\d+/);
    if (!match) return;
    
    const finalNumber = parseInt(match[0]);
    const duration = 2000;
    const steps = 60;
    const increment = finalNumber / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= finalNumber) {
        current = finalNumber;
        clearInterval(timer);
      }
      numberElement.textContent = text.replace(/\d+/, Math.floor(current));
    }, duration / steps);
  }
  
  
  // ==========================================
  // PARALLAX EFFECT ON SCROLL
  // ==========================================
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const offset = scrolled * speed;
        element.style.setProperty('--parallax-offset', `${offset}px`);
      });
    });
  }
  
  
  // ==========================================
  // FORM VALIDATION & SUBMISSION
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Validate required fields
      if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.classList.add('loading');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      try {
        // Send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
          showNotification('Thank you! We will contact you shortly.', 'success');
          contactForm.reset();
        } else {
          showNotification(result.message || 'An error occurred. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Network error. Please try again later.', 'error');
      } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
  
  
  // ==========================================
  // NOTIFICATION SYSTEM
  // ==========================================
  function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-300 translate-x-full`;
    
    // Set color based on type
    const colors = {
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
      info: 'bg-blue-500 text-white'
    };
    
    notification.classList.add(...colors[type].split(' '));
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(150%)';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }
  
  
  // ==========================================
  // CURSOR FOLLOW EFFECT (OPTIONAL)
  // ==========================================
  if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100';
    cursor.style.display = 'none';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.display = 'block';
    });
    
    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
    });
    
    // Smooth cursor follow
    function animateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;
      
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      
      requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Scale cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
      });
    });
  }
  
  
  // ==========================================
  // PERFORMANCE MONITORING
  // ==========================================
  if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics (can be sent to analytics)
        console.log(`${entry.name}: ${entry.duration}ms`);
      }
    });
    
    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
  }
  
  
  // ==========================================
  // LAZY LOAD IMAGES (IF ANY)
  // ==========================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  
  // ==========================================
  // INITIALIZE ON LOAD
  // ==========================================
  console.log('%c🚀 Antares Innovate', 'color: #1a73e8; font-size: 20px; font-weight: bold;');
  console.log('%cWebsite loaded successfully', 'color: #10b981; font-size: 14px;');
  
});


// ==========================================
// SERVICE WORKER REGISTRATION (OPTIONAL)
// ==========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to enable PWA features
    // navigator.serviceWorker.register('/sw.js')
    //   .then(reg => console.log('Service Worker registered'))
    //   .catch(err => console.log('Service Worker registration failed'));
  });
}


// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Detect if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
