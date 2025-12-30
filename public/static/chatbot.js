// ============================================
// CHATBOT WIDGET - ANTARES INNOVATE
// ============================================

class AntaresChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.init();
  }
  
  init() {
    this.createChatWidget();
    this.attachEventListeners();
    this.addInitialMessage();
  }
  
  createChatWidget() {
    const chatHTML = `
      <!-- Chatbot Widget -->
      <div id="chatbot-widget" class="fixed bottom-6 right-6 z-50">
        <!-- Chat Button -->
        <button id="chat-toggle" class="chat-button bg-antares-blue hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <span class="chat-notification absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
        </button>
        
        <!-- Chat Window -->
        <div id="chat-window" class="chat-window hidden absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <!-- Header -->
          <div class="bg-gradient-to-r from-antares-blue to-blue-600 p-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span class="text-antares-blue font-bold text-lg">A</span>
              </div>
              <div>
                <h3 class="text-white font-bold">Antares Assistant</h3>
                <p class="text-blue-100 text-xs">Online now</p>
              </div>
            </div>
            <button id="chat-close" class="text-white hover:text-gray-200 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Messages -->
          <div id="chat-messages" class="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3" style="height: 400px; max-height: 400px;">
            <!-- Messages will be inserted here -->
          </div>
          
          <!-- Quick Actions -->
          <div id="quick-actions" class="p-3 bg-white border-t border-gray-200">
            <p class="text-xs text-gray-500 mb-2">Quick Actions:</p>
            <div class="flex flex-wrap gap-2">
              <button class="quick-action-btn text-xs px-3 py-2 bg-gray-100 hover:bg-antares-blue hover:text-white rounded-full transition-colors" data-action="quote">
                Get Quote
              </button>
              <button class="quick-action-btn text-xs px-3 py-2 bg-gray-100 hover:bg-antares-blue hover:text-white rounded-full transition-colors" data-action="services">
                Our Services
              </button>
              <button class="quick-action-btn text-xs px-3 py-2 bg-gray-100 hover:bg-antares-blue hover:text-white rounded-full transition-colors" data-action="call">
                Request Call
              </button>
            </div>
          </div>
          
          <!-- Input -->
          <div class="p-4 bg-white border-t border-gray-200">
            <div class="flex items-center space-x-2">
              <input 
                type="text" 
                id="chat-input" 
                placeholder="Type your message..."
                class="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-antares-blue text-gray-800"
              />
              <button id="chat-send" class="bg-antares-blue hover:bg-blue-600 text-white rounded-full p-2 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatHTML);
  }
  
  attachEventListeners() {
    // Toggle chat
    document.getElementById('chat-toggle').addEventListener('click', () => {
      this.toggleChat();
    });
    
    // Close chat
    document.getElementById('chat-close').addEventListener('click', () => {
      this.toggleChat();
    });
    
    // Send message
    document.getElementById('chat-send').addEventListener('click', () => {
      this.sendMessage();
    });
    
    // Enter to send
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });
    
    // Quick actions
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        this.handleQuickAction(action);
      });
    });
  }
  
  toggleChat() {
    this.isOpen = !this.isOpen;
    const chatWindow = document.getElementById('chat-window');
    const chatButton = document.getElementById('chat-toggle');
    const notification = document.querySelector('.chat-notification');
    
    if (this.isOpen) {
      chatWindow.classList.remove('hidden');
      chatWindow.style.animation = 'slideUp 0.3s ease';
      notification.style.display = 'none';
    } else {
      chatWindow.style.animation = 'slideDown 0.3s ease';
      setTimeout(() => {
        chatWindow.classList.add('hidden');
      }, 300);
    }
  }
  
  addInitialMessage() {
    this.addMessage('bot', 'Hello! 👋 Welcome to Antares Innovate. How can I assist you with your signage and LED needs today?');
  }
  
  addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const isBot = sender === 'bot';
    
    const messageHTML = `
      <div class="flex ${isBot ? 'justify-start' : 'justify-end'}">
        <div class="${isBot ? 'bg-white' : 'bg-antares-blue text-white'} rounded-2xl px-4 py-2 max-w-xs shadow">
          <p class="text-sm">${text}</p>
        </div>
      </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    this.messages.push({ sender, text });
  }
  
  sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    this.addMessage('user', message);
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      this.respondToMessage(message);
    }, 1000);
  }
  
  respondToMessage(message) {
    const lowerMessage = message.toLowerCase();
    let response = '';
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
      response = 'I\'d be happy to help you get a quote! Our pricing depends on project scope and requirements. Would you like me to connect you with our team for a detailed quote?';
    } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
      response = 'We specialize in: Commercial Signage Installation, LED Retrofit & Energy Optimization, Technical Maintenance, Compliance & Permits, and Custom Industrial Solutions. Which interests you?';
    } else if (lowerMessage.includes('call') || lowerMessage.includes('phone') || lowerMessage.includes('contact')) {
      response = 'You can reach us at <strong>1-800-ANTARES</strong> or click the "Request Call" button below and we\'ll call you back within 15 minutes!';
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      response = 'Hello! How can I help you today with your signage project?';
    } else {
      response = 'Thanks for your message! Our team specializes in commercial signage and LED solutions. Would you like to schedule a consultation or learn more about our services?';
    }
    
    this.addMessage('bot', response);
  }
  
  handleQuickAction(action) {
    switch(action) {
      case 'quote':
        this.addMessage('user', 'I\'d like to get a quote');
        setTimeout(() => {
          this.addMessage('bot', 'Perfect! To provide an accurate quote, I\'ll need some details. Please fill out our <a href="#contact" class="text-antares-blue font-bold">contact form</a> or call us at <strong>1-800-ANTARES</strong>.');
        }, 1000);
        break;
      case 'services':
        this.addMessage('user', 'Tell me about your services');
        setTimeout(() => {
          this.addMessage('bot', 'We offer: 1) Commercial Signage Installation 2) LED Retrofit & Energy Optimization 3) Technical Maintenance 4) Compliance & Permits 5) Custom Solutions. Which would you like to know more about?');
        }, 1000);
        break;
      case 'call':
        this.addMessage('user', 'I\'d like to request a call');
        setTimeout(() => {
          this.addMessage('bot', 'Great! Click the "Request Call" button in the top navigation and we\'ll call you back within 15 minutes during business hours (Mon-Fri, 8AM-6PM PT).');
        }, 1000);
        break;
    }
  }
}

// Initialize chatbot when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.antaresChatbot = new AntaresChatbot();
  });
} else {
  window.antaresChatbot = new AntaresChatbot();
}
