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
    // Auto-abrir el chat después de 1 segundo
    setTimeout(() => {
      this.openChat();
    }, 1000);
  }
  
  createChatWidget() {
    const chatHTML = `
      <!-- Chatbot Widget - Responsive & Antares Theme -->
      <div id="chatbot-widget" class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <!-- Chat Button -->
        <button id="chat-toggle" class="chat-button bg-gradient-to-r from-antares-blue to-blue-600 hover:from-blue-600 hover:to-antares-blue text-white rounded-full p-4 shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <span class="chat-notification absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">1</span>
        </button>
        
        <!-- Chat Window - Fully Responsive -->
        <div id="chat-window" class="chat-window hidden absolute bottom-20 right-0 bg-antares-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-antares-blue/20">
          <!-- Header with Antares Gradient -->
          <div class="bg-gradient-to-r from-antares-dark via-antares-blue to-antares-dark p-4 flex items-center justify-between relative overflow-hidden">
            <!-- Animated Background Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            
            <div class="flex items-center space-x-3 relative z-10">
              <div class="w-10 h-10 bg-gradient-to-br from-antares-blue to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                <span class="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 class="text-white font-bold text-sm md:text-base">Antares Assistant</h3>
                <div class="flex items-center space-x-1">
                  <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <p class="text-blue-100 text-xs">Online now</p>
                </div>
              </div>
            </div>
            <button id="chat-close" class="text-white/80 hover:text-white transition-colors relative z-10">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Messages Area with Dark Theme -->
          <div id="chat-messages" class="flex-1 p-3 md:p-4 overflow-y-auto bg-antares-gray space-y-3" style="height: 350px; max-height: 50vh;">
            <!-- Messages will be inserted here -->
          </div>
          
          <!-- Quick Actions with Antares Theme -->
          <div id="quick-actions" class="p-3 bg-antares-dark border-t border-antares-blue/20">
            <p class="text-xs mb-2 text-gray-400 font-medium">Quick Actions:</p>
            <div class="flex flex-wrap gap-2">
              <button class="quick-action-btn text-xs px-3 py-2 bg-antares-gray hover:bg-antares-blue text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-antares-blue/20 border border-antares-blue/30" data-action="quote">
                💬 Get Quote
              </button>
              <button class="quick-action-btn text-xs px-3 py-2 bg-antares-gray hover:bg-antares-blue text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-antares-blue/20 border border-antares-blue/30" data-action="services">
                ⚡ Our Services
              </button>
              <button class="quick-action-btn text-xs px-3 py-2 bg-antares-gray hover:bg-antares-blue text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-antares-blue/20 border border-antares-blue/30" data-action="call">
                📞 Request Call
              </button>
            </div>
          </div>
          
          <!-- Input Area with Dark Theme -->
          <div class="p-3 md:p-4 bg-antares-dark border-t border-antares-blue/20">
            <div class="flex items-center space-x-2">
              <input 
                type="text" 
                id="chat-input" 
                placeholder="Type your message..."
                class="flex-1 px-4 py-2 md:py-3 bg-antares-gray text-white placeholder-gray-500 border border-antares-blue/30 rounded-xl focus:outline-none focus:border-antares-blue focus:ring-2 focus:ring-antares-blue/50 transition-all text-sm"
              />
              <button id="chat-send" class="bg-gradient-to-r from-antares-blue to-blue-600 hover:from-blue-600 hover:to-antares-blue text-white rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-antares-blue/50">
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
      if (notification) notification.style.display = 'none';
    } else {
      chatWindow.style.animation = 'slideDown 0.3s ease';
      setTimeout(() => {
        chatWindow.classList.add('hidden');
      }, 300);
    }
  }
  
  openChat() {
    if (!this.isOpen) {
      this.isOpen = true;
      const chatWindow = document.getElementById('chat-window');
      const notification = document.querySelector('.chat-notification');
      
      chatWindow.classList.remove('hidden');
      chatWindow.style.animation = 'slideUp 0.3s ease';
      if (notification) notification.style.display = 'none';
    }
  }
  
  closeChat() {
    if (this.isOpen) {
      this.isOpen = false;
      const chatWindow = document.getElementById('chat-window');
      
      chatWindow.style.animation = 'slideDown 0.3s ease';
      setTimeout(() => {
        chatWindow.classList.add('hidden');
      }, 300);
    }
  }
  
  addInitialMessage() {
    this.addMessageWithTyping('bot', '👋 Hey! I\'m with Antares. We do custom signage - design, print, install.');
    // Agregar segundo mensaje después de un delay
    setTimeout(() => {
      this.addMessageWithTyping('bot', 'What kind of business do you have?');
    }, 2000);
  }
  
  addMessage(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const isBot = sender === 'bot';
    
    // Replace \n\n with <br><br> for line breaks
    const formattedText = text.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    
    const messageHTML = `
      <div class="flex ${isBot ? 'justify-start' : 'justify-end'} animate-fadeIn">
        <div class="${isBot ? 'bg-antares-dark border border-antares-blue/30' : 'bg-gradient-to-r from-antares-blue to-blue-600'} rounded-2xl px-4 py-3 max-w-[85%] md:max-w-xs shadow-lg">
          <p class="text-sm text-white leading-relaxed">${formattedText}</p>
          ${isBot ? '<div class="flex items-center space-x-1 mt-2"><span class="w-1 h-1 bg-antares-blue rounded-full"></span><span class="text-xs text-gray-400">Antares AI</span></div>' : ''}
        </div>
      </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    this.messages.push({ sender, text });
  }
  
  addMessageWithTyping(sender, text) {
    const messagesContainer = document.getElementById('chat-messages');
    const isBot = sender === 'bot';
    
    // Create message container with empty text
    const messageId = `msg-${Date.now()}`;
    const messageHTML = `
      <div class="flex ${isBot ? 'justify-start' : 'justify-end'} animate-fadeIn">
        <div class="${isBot ? 'bg-antares-dark border border-antares-blue/30' : 'bg-gradient-to-r from-antares-blue to-blue-600'} rounded-2xl px-4 py-3 max-w-[85%] md:max-w-xs shadow-lg">
          <p id="${messageId}" class="text-sm text-white leading-relaxed"></p>
          ${isBot ? '<div class="flex items-center space-x-1 mt-2"><span class="w-1 h-1 bg-antares-blue rounded-full"></span><span class="text-xs text-gray-400">Antares AI</span></div>' : ''}
        </div>
      </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    
    // Typing animation
    const messageElement = document.getElementById(messageId);
    let currentIndex = 0;
    const typingSpeed = 30; // milliseconds per character
    
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        const char = text[currentIndex];
        
        // Handle line breaks
        if (text.substring(currentIndex, currentIndex + 2) === '\n\n') {
          messageElement.innerHTML += '<br><br>';
          currentIndex += 2;
        } else if (char === '\n') {
          messageElement.innerHTML += '<br>';
          currentIndex++;
        } else {
          messageElement.textContent += char;
          currentIndex++;
        }
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        setTimeout(typeNextCharacter, typingSpeed);
      }
    };
    
    typeNextCharacter();
    this.messages.push({ sender, text });
  }
  
  async sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    this.addMessage('user', message);
    input.value = '';
    
    // Show typing indicator
    this.addTypingIndicator();
    
    try {
      // Call API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });
      
      const data = await response.json();
      
      // Remove typing indicator
      this.removeTypingIndicator();
      
      if (data.success && data.reply) {
        this.addMessageWithTyping('bot', data.reply);
      } else {
        this.addMessageWithTyping('bot', 'I apologize, but I\'m having trouble right now.\n\nPlease call us at (323) 444-5555 for immediate assistance.');
      }
    } catch (error) {
      console.error('Chat error:', error);
      this.removeTypingIndicator();
      this.addMessageWithTyping('bot', 'I apologize for the inconvenience.\n\nPlease call us at (323) 444-5555 or try again in a moment.');
    }
  }
  
  addTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingHTML = `
      <div class="flex justify-start animate-fadeIn" id="typing-indicator">
        <div class="bg-antares-dark border border-antares-blue/30 rounded-2xl px-4 py-3 shadow-lg">
          <div class="flex space-x-2">
            <div class="w-2 h-2 bg-antares-blue rounded-full animate-bounce" style="animation-delay: 0ms"></div>
            <div class="w-2 h-2 bg-antares-blue rounded-full animate-bounce" style="animation-delay: 150ms"></div>
            <div class="w-2 h-2 bg-antares-blue rounded-full animate-bounce" style="animation-delay: 300ms"></div>
          </div>
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
      indicator.remove();
    }
  }
  
  handleQuickAction(action) {
    switch(action) {
      case 'quote':
        this.addMessage('user', 'I\'d like to get a quote');
        this.addTypingIndicator();
        setTimeout(() => {
          this.removeTypingIndicator();
          this.addMessageWithTyping('bot', 'Cool! We design, print, and install everything in-house. Makes it way easier.\n\nWhat kind of signage are you thinking?');
        }, 1000);
        break;
      case 'services':
        this.addMessage('user', 'Tell me about your services');
        this.addTypingIndicator();
        setTimeout(() => {
          this.removeTypingIndicator();
          this.addMessageWithTyping('bot', 'We do it all - custom design, printing, and installation. Plus LED upgrades that save a ton on energy.\n\nWhat do you need help with?');
        }, 1000);
        break;
      case 'call':
        this.addMessage('user', 'I\'d like to request a call');
        this.addTypingIndicator();
        setTimeout(() => {
          this.removeTypingIndicator();
          this.addMessageWithTyping('bot', 'Perfect! Want to chat now? Call (323) 444-5555\n\nOr drop your number and I\'ll have someone call you in like 30 min.');
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
