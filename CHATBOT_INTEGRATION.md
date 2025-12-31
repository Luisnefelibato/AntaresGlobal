# 🤖 Chatbot AI Integration - Antares Innovate

## ✅ **IMPLEMENTADO CON ÉXITO**

El chatbot ahora está potenciado por **OpenAI GPT-4o-mini** con contexto completo de la empresa.

---

## 📊 **Especificaciones Técnicas**

### **Modelo AI:**
- **Modelo:** `gpt-4o-mini`
- **Razón:** Rápido, económico, ideal para atención al cliente
- **Temperatura:** 0.7 (balance entre creatividad y consistencia)
- **Max Tokens:** 150 (respuestas cortas y precisas)

### **Características:**
✅ Respuestas cortas (2-3 oraciones)  
✅ Tono amable y profesional  
✅ Contexto completo de la empresa  
✅ Conocimiento de todos los servicios  
✅ Referencias a proyectos reales (Tesla, Volvo, Ford, Honda, etc.)  
✅ Información de contacto precisa  
✅ Indicador de "escribiendo..." (typing indicator)  
✅ Manejo de errores con mensajes de fallback  

---

## 🏢 **Contexto de la Empresa (System Prompt)**

El chatbot tiene conocimiento completo de:

### **Información General:**
- Fundada en 2010 (15+ años de excelencia)
- Líder global en instalación de señalización comercial
- Basados en Los Ángeles, California
- 500+ proyectos completados
- Soporte técnico 24/7
- 100% cumplimiento regulatorio

### **Servicios:**
1. **Commercial Signage Installation** - Retail, automotive, corporate, industrial
2. **LED Retrofit & Energy Optimization** - Conversiones LED de alta eficiencia
3. **Technical Maintenance & Repair** - Respuesta de emergencia 24/7
4. **Compliance & Permits** - Cumplimiento regulatorio completo
5. **Custom Industrial Solutions** - Soluciones personalizadas
6. **Multi-Location Program Management** - Implementaciones coordinadas

### **Proyectos Destacados:**
- Tesla Dealerships
- Volvo & Mack Trucks
- Ford Dealerships
- Honda Dealerships
- Five Below (Retail)
- Crate & Barrel
- Regus Corporate
- APM Terminals
- TikTok Office Interiors

### **Contacto:**
- **Teléfono:** (323) 444-5555 (24/7)
- **Email:** info@antaresinnovate.com
- **Ubicación:** Los Angeles, California
- **Área de Servicio:** California y más allá

---

## 🔒 **Seguridad**

### **Variables de Entorno:**
```bash
# .dev.vars (desarrollo local - NO en git)
OPENAI_API_KEY=sk-proj-...

# Production (Cloudflare Pages)
# Configurar con: npx wrangler pages secret put OPENAI_API_KEY
```

### **Archivos Protegidos:**
- `.dev.vars` - En `.gitignore`
- `.env` - En `.gitignore`
- API Key nunca expuesta en frontend
- Todas las llamadas a OpenAI desde el backend

---

## 🚀 **Cómo Funciona**

### **Flujo de Conversación:**

1. **Usuario escribe mensaje** en el chatbot
2. **Frontend** envía mensaje a `/api/chat`
3. **Backend** recibe mensaje y llama a OpenAI API
4. **OpenAI** genera respuesta con contexto de empresa
5. **Backend** devuelve respuesta al frontend
6. **Frontend** muestra respuesta al usuario

### **Ejemplo de Conversación:**

**Usuario:** "¿Qué servicios ofrecen?"

**Chatbot:** "Ofrecemos instalación de señalización comercial, retrofit LED, mantenimiento técnico 24/7, gestión de permisos y cumplimiento, y soluciones industriales personalizadas. Hemos trabajado con marcas como Tesla, Volvo, y Ford. ¿Qué servicio te interesa?"

---

## 📁 **Archivos Modificados**

### **Backend:**
```
src/index.tsx
├── POST /api/chat endpoint
├── OpenAI API integration
├── System prompt con contexto de empresa
└── Error handling y fallbacks
```

### **Frontend:**
```
public/static/chatbot.js
├── Método sendMessage() actualizado
├── Llamada a API backend
├── Indicador de "escribiendo..."
└── Manejo de errores
```

### **Configuración:**
```
.dev.vars - API key (local)
.gitignore - Protección de variables de entorno
wrangler.jsonc - Config de Cloudflare
```

---

## 🧪 **Testing**

### **Probar el Chatbot:**

**URL del sitio:**  
https://3000-i1xm7ydlvkb3eetyfi1gj-b32ec7bb.sandbox.novita.ai

**Preguntas de prueba:**
- "¿Qué servicios ofrecen?"
- "¿Cuánto cuesta un proyecto?"
- "¿Han trabajado con Tesla?"
- "¿Dónde están ubicados?"
- "Necesito un retrofit LED"
- "¿Cómo puedo contactarlos?"

### **Probar API Directamente:**
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, what services do you offer?"}'
```

**Respuesta esperada:**
```json
{
  "success": true,
  "reply": "Hello! We offer commercial signage installation, LED retrofit and energy optimization, technical maintenance..."
}
```

---

## 💰 **Costos Estimados**

### **GPT-4o-mini Pricing (OpenAI):**
- **Input:** $0.150 / 1M tokens
- **Output:** $0.600 / 1M tokens

### **Estimación por Conversación:**
- **Prompt del sistema:** ~500 tokens (una vez)
- **Mensaje de usuario:** ~20 tokens
- **Respuesta del bot:** ~50 tokens
- **Costo por mensaje:** ~$0.00005 USD (0.005 centavos)

### **Ejemplo de Uso Mensual:**
- **1,000 mensajes/mes:** ~$0.05 USD
- **10,000 mensajes/mes:** ~$0.50 USD
- **100,000 mensajes/mes:** ~$5.00 USD

**Conclusión:** Extremadamente económico para el valor que aporta.

---

## 🎯 **Ventajas vs Chatbot Básico**

| Característica | Antes (Básico) | Ahora (AI) |
|----------------|----------------|------------|
| **Inteligencia** | Palabras clave | Comprensión contextual |
| **Respuestas** | Pre-programadas | Dinámicas y naturales |
| **Contexto** | Limitado | Completo sobre la empresa |
| **Flexibilidad** | Rígido | Se adapta a cualquier pregunta |
| **Mantenimiento** | Manual | Automático |
| **Experiencia de Usuario** | Básica | Premium |

---

## 📈 **Próximas Mejoras (Opcional)**

### **Fase 2:**
- [ ] Integrar con CRM (Salesforce, HubSpot)
- [ ] Guardar conversaciones en Cloudflare D1
- [ ] Analytics de preguntas frecuentes
- [ ] Respuestas en múltiples idiomas

### **Fase 3:**
- [ ] Integración con calendario para agendar citas
- [ ] Envío de cotizaciones automáticas por email
- [ ] Chat en tiempo real con humanos (escalation)
- [ ] Sentiment analysis de conversaciones

---

## 🔧 **Comandos Útiles**

### **Desarrollo Local:**
```bash
# Iniciar servidor (lee .dev.vars automáticamente)
npm run build
pm2 restart antares-innovate --update-env

# Ver logs
pm2 logs antares-innovate --nostream

# Probar chatbot
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```

### **Production (Cloudflare Pages):**
```bash
# Configurar API key en producción
npx wrangler pages secret put OPENAI_API_KEY --project-name antares-innovate

# Verificar secrets
npx wrangler pages secret list --project-name antares-innovate

# Deploy
npm run deploy:prod
```

---

## ⚠️ **Notas Importantes**

1. **API Key Security:**
   - NUNCA exponer la API key en frontend
   - NUNCA commitear .dev.vars a git
   - Usar Cloudflare secrets en producción

2. **Rate Limiting:**
   - OpenAI tiene límites de rate por cuenta
   - Considerar implementar rate limiting en el backend si hay mucho tráfico

3. **Error Handling:**
   - El chatbot tiene fallbacks si OpenAI falla
   - Siempre ofrece número de teléfono como alternativa

4. **Monitoring:**
   - Revisar logs regularmente para mejorar respuestas
   - Identificar preguntas frecuentes para optimizar el prompt

---

## 🎉 **Estado Final**

✅ **Chatbot AI completamente funcional**  
✅ **Integración con OpenAI GPT-4o-mini**  
✅ **Contexto completo de la empresa**  
✅ **Respuestas cortas, amables y precisas**  
✅ **Seguridad implementada**  
✅ **Listo para producción**

---

**Desarrollado con precisión para Antares Innovate** 🚀
