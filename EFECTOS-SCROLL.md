# Efectos de Scroll - IFARD-SA Website

## 📋 Resumen

Se han implementado efectos de scroll profesionales con JavaScript y CSS para mejorar la experiencia del usuario en el sitio web de IFARD-SA.

## ✨ Efectos Implementados

### 1. **Scroll Suave (Smooth Scroll)**
- Navegación fluida entre secciones al hacer clic en los enlaces del menú
- Scroll automático con desplazamiento suave
- Ajuste automático para compensar la altura del header fijo

### 2. **Header Dinámico**
- El header cambia de estilo al hacer scroll (efecto glassmorphism)
- Se oculta automáticamente al hacer scroll hacia abajo (después de 200px)
- Reaparece al hacer scroll hacia arriba
- Transiciones suaves y profesionales

### 3. **Animaciones de Aparición (Reveal on Scroll)**
- Los elementos aparecen con animación al entrar en el viewport
- Efecto de fade-in con desplazamiento vertical
- Delay escalonado para efecto cascada
- Se aplica a:
  - Títulos de secciones
  - Tarjetas de servicios
  - Textos e imágenes de "Sobre Nosotros"
  - Formulario de contacto
  - Elementos del hero

### 4. **Navegación Activa**
- El enlace del menú se marca automáticamente según la sección visible
- Indicador visual con línea inferior animada
- Actualización en tiempo real al hacer scroll

### 5. **Botón "Scroll to Top"**
- Botón flotante que aparece después de 300px de scroll
- Diseño circular con icono de flecha
- Animación suave de aparición/desaparición
- Efecto hover con elevación
- Responsive (se ajusta en móviles y tablets)

### 6. **Efecto Parallax en Hero**
- Desplazamiento suave del hero section al hacer scroll
- Efecto de profundidad con cambio de opacidad
- Desactivado en móviles para optimizar performance

### 7. **Animación del Formulario**
- Mensaje de confirmación animado al enviar
- Transiciones suaves entre estados
- Auto-reset después de 5 segundos
- Diseño con colores de éxito

### 8. **Efecto de Pulso en CTA**
- El botón principal (CTA) tiene un efecto de pulso sutil
- Llama la atención del usuario de forma elegante
- Animación infinita después de 2 segundos

### 9. **Lazy Loading de Imágenes** (Preparado)
- Sistema listo para cargar imágenes de forma diferida
- Mejora el rendimiento inicial de carga
- Transición suave al cargar

### 10. **Animación de Contadores** (Opcional)
- Sistema preparado para animar números
- Útil para estadísticas y métricas
- Se puede activar agregando atributo `data-counter`

## 📁 Archivos Creados/Modificados

### Nuevos Archivos:
- `js/main.js` - JavaScript con todos los efectos de scroll
- `EFECTOS-SCROLL.md` - Este archivo de documentación

### Archivos Modificados:
- `index.html` - Agregado enlace al script JavaScript
- `css/styles.css` - Agregados estilos para animaciones y efectos

## 🚀 Cómo Usar

### 1. Visualizar Localmente

```bash
# Opción 1: Python 3
python3 -m http.server 8000

# Opción 2: Python 2
python -m SimpleHTTPServer 8000

# Opción 3: Node.js
npx http-server -p 8000

# Opción 4: PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

### 2. Ver los Efectos

1. **Scroll Suave**: Haz clic en cualquier enlace del menú
2. **Header Dinámico**: Desplázate hacia abajo y luego hacia arriba
3. **Animaciones Reveal**: Desplázate lentamente por todas las secciones
4. **Botón Scroll to Top**: Desplázate hacia abajo más de 300px
5. **Navegación Activa**: Observa el menú mientras haces scroll
6. **Parallax**: Observa el hero section al hacer scroll inicial
7. **Formulario**: Completa y envía el formulario de contacto

## 🎨 Personalización

### Cambiar Velocidad de Animaciones

En `css/styles.css`:

```css
/* Cambiar duración de reveal */
.reveal {
    transition: opacity 0.6s ease, transform 0.6s ease; /* Ajustar 0.6s */
}

/* Cambiar velocidad del header */
header {
    transition: transform 0.3s ease; /* Ajustar 0.3s */
}
```

### Cambiar Threshold del Botón Scroll-to-Top

En `js/main.js`:

```javascript
// Línea ~72
if (window.pageYOffset > 300) { // Cambiar 300 por otro valor
    scrollToTopBtn.classList.add('visible');
}
```

### Ajustar Offset del Header en Navegación

En `js/main.js`:

```javascript
// Línea ~19
const headerOffset = 80; // Cambiar según altura del header
```

### Cambiar Sensibilidad del Reveal

En `js/main.js`:

```javascript
// Línea ~46
const observerOptions = {
    threshold: 0.15, // 0.0 a 1.0 (más bajo = más sensible)
    rootMargin: '0px 0px -50px 0px' // Ajustar margen
};
```

### Desactivar Parallax Completamente

En `js/main.js`, comenta o elimina las líneas 95-106:

```javascript
// Comentar esta sección completa
/*
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', function() {
        // ...
    });
}
*/
```

### Activar Efecto Typing en Hero

En `js/main.js`, descomenta las líneas 147-151:

```javascript
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
}
```

## 📊 Performance

### Optimizaciones Implementadas:

1. **Intersection Observer API**: Detección eficiente de elementos en viewport
2. **Will-change**: Optimización de animaciones CSS
3. **Throttling implícito**: Eventos de scroll optimizados
4. **Parallax desactivado en móviles**: Mejor rendimiento en dispositivos pequeños
5. **Transiciones CSS nativas**: Uso del GPU para animaciones suaves

### Métricas Esperadas:

- ✅ Sin bloqueo del scroll principal
- ✅ Animaciones a 60 FPS
- ✅ Carga inicial < 2s
- ✅ Bajo impacto en batería móvil

## 🔧 Troubleshooting

### Las animaciones no funcionan

1. Verifica que el archivo `js/main.js` esté correctamente enlazado en `index.html`
2. Abre la consola del navegador (F12) para ver errores
3. Verifica que el CSS esté cargado correctamente

### El scroll no es suave

1. Algunos navegadores antiguos no soportan `scroll-behavior: smooth`
2. El JavaScript proporciona un fallback con `window.scrollTo({ behavior: 'smooth' })`

### El botón "scroll to top" no aparece

1. Asegúrate de hacer scroll más de 300px
2. Verifica que el CSS esté cargado correctamente
3. Revisa la consola del navegador para errores

### Las animaciones van muy lentas/rápidas

1. Ajusta los valores de `transition` en `css/styles.css`
2. Modifica los delays en `js/main.js` (línea ~62)

## 🌐 Compatibilidad

### Navegadores Soportados:

- ✅ Chrome 51+ (Intersection Observer)
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 79+
- ✅ Opera 38+

### Características con Fallback:

- **Scroll suave**: Fallback a scroll estándar en navegadores antiguos
- **Intersection Observer**: Graceful degradation (elementos simplemente aparecen)
- **CSS Animations**: Fallback a visualización estática

## 📱 Responsive

Todos los efectos están optimizados para dispositivos móviles:

- Botón scroll-to-top se ajusta en tamaño
- Parallax desactivado en móviles
- Animaciones optimizadas para táctiles
- Header responsive con transiciones suaves

## 🎯 Próximas Mejoras (Opcionales)

1. **Menú hamburguesa** para móviles
2. **Modo oscuro** con transición suave
3. **Preloader animado** para la carga inicial
4. **Partículas animadas** en el fondo
5. **Scroll indicator** (barra de progreso)
6. **Easter eggs** con scroll
7. **Animaciones SVG** personalizadas

## 📝 Notas Técnicas

### JavaScript Vanilla

Todo el código está escrito en JavaScript puro (vanilla JS), sin dependencias de librerías externas como jQuery, lo que garantiza:

- ⚡ Mejor rendimiento
- 📦 Tamaño de archivo reducido
- 🔒 Mayor seguridad
- 🚀 Carga más rápida

### CSS Moderno

Uso de características CSS modernas:

- Variables CSS (Custom Properties)
- Flexbox y Grid
- Transitions y Animations
- Backdrop-filter (glassmorphism)
- Will-change para optimización

### Accesibilidad

Los efectos mantienen la accesibilidad:

- ✅ Navegación por teclado funcional
- ✅ ARIA labels en botones
- ✅ Contraste de colores adecuado
- ✅ Animaciones respetan `prefers-reduced-motion` (puede agregarse)

## 👨‍💻 Mantenimiento

El código está bien comentado y organizado en secciones:

1. Scroll suave para navegación
2. Header dinámico
3. Animaciones reveal
4. Botón scroll to top
5. Navegación activa
6. Parallax en hero
7. Contadores animados
8. Formulario
9. Lazy loading
10. Efecto typing

Cada sección es independiente y puede modificarse sin afectar las demás.

## 📄 Licencia

Parte del proyecto IFARD-SA Website.

---

**Última actualización**: 2025
**Desarrollado para**: IFARD-SA - Instituto de Formación y Desarrollo
