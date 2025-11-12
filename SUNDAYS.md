# SUNDAYS.md

**AI Assistant & Genium AI Infrastructure Guide for IFARD-SA Website**

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Technical Architecture](#technical-architecture)
4. [Development Workflow](#development-workflow)
5. [AI Assistant Guidelines](#ai-assistant-guidelines)
6. [Code Quality & Standards](#code-quality--standards)
7. [Testing & Validation](#testing--validation)
8. [Deployment Pipeline](#deployment-pipeline)
9. [Common Tasks & Patterns](#common-tasks--patterns)
10. [Troubleshooting Guide](#troubleshooting-guide)
11. [Performance Optimization](#performance-optimization)
12. [Security Considerations](#security-considerations)
13. [Future Roadmap](#future-roadmap)

---

## 🎯 Project Overview

### Organization
- **Name**: IFARD-SA (Instituto de Formación y Desarrollo)
- **Type**: Educational Institution
- **Repository**: https://github.com/IFARD-SA/website
- **Branch Strategy**: Main branch (`main`) for production

### Project Description
Static website for IFARD-SA, an educational and professional development institute. The website serves as the organization's primary web presence, showcasing services, mission, and providing contact capabilities.

### Technology Stack
```
Frontend:
├── HTML5 (Semantic markup)
├── CSS3 (Modern features: Grid, Flexbox, CSS Variables, Animations)
└── Vanilla JavaScript (ES6+, No frameworks/libraries)

Infrastructure:
├── Static hosting ready (GitHub Pages, Netlify, Vercel compatible)
├── No build process required
└── No package dependencies
```

### Current State
**Status**: Production-ready with advanced features
**Version**: v1.0 (with scroll effects)
**Language**: Spanish (es)
**Last Update**: November 2025

---

## 📁 Repository Structure

```
website/
├── index.html              # Main landing page (HTML5)
├── css/
│   └── styles.css         # Main stylesheet (10KB+ with animations)
├── js/
│   └── main.js            # Main JavaScript file (10KB+ with effects)
├── CLAUDE.md              # AI assistant guide (legacy/complementary)
├── SUNDAYS.md             # This file - Genium AI infrastructure guide
├── EFECTOS-SCROLL.md      # Scroll effects documentation
└── TEST-EFECTOS.html      # Testing page for scroll effects
```

### File Descriptions

#### Core Files
- **index.html**: Complete single-page application with navigation, hero section, about, services (6 cards), contact form, and footer
- **css/styles.css**: Modern CSS with CSS variables, animations, responsive design, and scroll effect styles
- **js/main.js**: Vanilla JavaScript with 10+ interactive features (smooth scroll, reveal animations, parallax, etc.)

#### Documentation Files
- **CLAUDE.md**: Basic project setup and AI assistant instructions
- **SUNDAYS.md**: Comprehensive guide for AI infrastructure (this file)
- **EFECTOS-SCROLL.md**: Detailed documentation of scroll effects implementation

#### Testing Files
- **TEST-EFECTOS.html**: Standalone testing page for validating scroll effects

---

## 🏗️ Technical Architecture

### HTML Structure

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Meta tags, title, CSS link -->
  </head>
  <body>
    <header>
      <nav>
        <!-- Logo + navigation links -->
      </nav>
    </header>

    <section class="hero">
      <!-- Hero content with CTA button -->
    </section>

    <section id="about">
      <!-- Mission, text content, placeholder image -->
    </section>

    <section id="servicios">
      <!-- 6 service cards with icons and descriptions -->
    </section>

    <section id="contacto">
      <!-- Contact form with validation -->
    </section>

    <footer>
      <!-- Social links + copyright -->
    </footer>

    <script src="js/main.js"></script>
  </body>
</html>
```

### CSS Architecture

**Design System (CSS Variables)**
```css
:root {
  --primary-color: #2563eb;      /* Blue */
  --secondary-color: #1e40af;    /* Dark Blue */
  --accent-color: #3b82f6;       /* Light Blue */
  --text-dark: #1f2937;          /* Dark Gray */
  --text-light: #6b7280;         /* Light Gray */
  --bg-light: #f9fafb;           /* Off-white */
  --white: #ffffff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

**Key Features**
- Modern CSS Reset
- Mobile-first responsive design
- CSS Grid for layouts (services, about section)
- Flexbox for navigation and alignment
- CSS Animations with keyframes
- Intersection Observer optimizations
- Glassmorphism effects on header
- Smooth scroll behavior

**Breakpoints**
- Desktop: > 768px (default)
- Tablet: ≤ 768px
- Mobile: ≤ 480px

### JavaScript Architecture

**Structure**: Modular sections with clear comments

**10 Main Features**:
1. **Smooth Scroll Navigation** (Lines 8-42)
   - Automatic scroll offset for fixed header
   - Smooth behavior with fallbacks

2. **Dynamic Header** (Lines 47-68)
   - Auto-hide on scroll down (after 200px)
   - Glassmorphism effect after 50px
   - Show on scroll up

3. **Reveal Animations** (Lines 73-106)
   - Intersection Observer API
   - 15% threshold, 50px rootMargin
   - Cascading delays (0.1s per element)

4. **Scroll to Top Button** (Lines 111-133)
   - Appears after 300px scroll
   - Smooth animated return to top
   - Fixed bottom-right position

5. **Active Navigation** (Lines 138-159)
   - Highlights current section in menu
   - 150px offset detection
   - Animated underline indicator

6. **Parallax Hero Effect** (Lines 164-176)
   - 0.5 parallax speed
   - Opacity fade on scroll
   - Disabled on mobile (performance)

7. **Counter Animations** (Lines 181-211)
   - Ready for data-counter attributes
   - 2-second count-up duration
   - Intersection Observer triggered

8. **Form Handling** (Lines 216-259)
   - Prevents default submission
   - Animated confirmation message
   - Auto-reset after 5 seconds

9. **Lazy Image Loading** (Lines 264-279)
   - data-src attribute support
   - Intersection Observer based
   - Smooth fade-in transition

10. **Typing Effect** (Lines 284-304)
    - Optional hero title animation
    - Configurable speed
    - Commented out by default

**Browser Compatibility**
- Chrome 51+ (Intersection Observer)
- Firefox 55+
- Safari 12.1+
- Edge 79+
- Opera 38+

**Performance Optimizations**
- `will-change` for animated elements
- Passive event listeners where possible
- Intersection Observer (efficient viewport detection)
- CSS transitions over JS animations
- Parallax disabled on mobile
- No external dependencies

---

## 🔄 Development Workflow

### Local Development

**Option 1: Python 3 (Recommended)**
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

**Option 2: Python 2**
```bash
python -m SimpleHTTPServer 8000
```

**Option 3: Node.js**
```bash
npx http-server -p 8000
```

**Option 4: PHP**
```bash
php -S localhost:8000
```

### Git Workflow

**Branch**: `main` (production)

**Standard Commit Flow**:
```bash
# Check status
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature"

# Push to main
git push origin main
```

**Commit Message Conventions**:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Testing Checklist

Before committing, verify:
- [ ] HTML validates (W3C Validator)
- [ ] CSS has no syntax errors
- [ ] JavaScript has no console errors
- [ ] All animations are smooth (60 FPS)
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] All links work correctly
- [ ] Form submission shows confirmation
- [ ] Scroll effects trigger properly
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] Page loads in < 2 seconds

---

## 🤖 AI Assistant Guidelines

### Understanding This Codebase

**Key Principles**:
1. **Static Site**: No server-side processing, no build tools, no npm packages
2. **Vanilla JavaScript**: No jQuery, React, Vue, or any frameworks
3. **Modern Standards**: ES6+, CSS Grid, Flexbox, Intersection Observer
4. **Spanish Content**: All user-facing text is in Spanish
5. **Single Page**: All content on index.html (sections, not pages)
6. **Production Ready**: Already has advanced features implemented

### When Asked to Add Features

**✅ DO**:
- Use vanilla JavaScript (no libraries)
- Follow existing code structure and commenting style
- Maintain Spanish language for user-facing content
- Test responsiveness on all breakpoints
- Add clear comments explaining new code
- Update documentation files if significant changes
- Consider performance implications
- Use existing CSS variables for colors
- Follow the modular structure in main.js

**❌ DON'T**:
- Add npm packages or build tools (unless explicitly requested)
- Use jQuery or other libraries
- Mix languages (keep Spanish for UI)
- Break mobile responsiveness
- Add features that hurt performance
- Remove or modify existing working features without reason
- Use inline styles (keep CSS in styles.css)
- Add unnecessary complexity

### Common AI Tasks

#### 1. Adding a New Section
```javascript
// In index.html, add before footer:
<section id="nueva-seccion">
    <h2 class="section-title">Título de Sección</h2>
    <div class="contenido">
        <!-- Content here -->
    </div>
</section>

// In css/styles.css:
#nueva-seccion {
    padding: 80px 2rem;
    /* Additional styles */
}

// In js/main.js, add to reveal elements:
document.querySelectorAll('.nueva-clase').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});
```

#### 2. Modifying Scroll Effect Settings
```javascript
// Speed up animations (in styles.css):
.reveal {
    transition: opacity 0.4s ease, transform 0.4s ease; /* Changed from 0.6s */
}

// Change scroll-to-top threshold (in main.js):
if (window.pageYOffset > 200) { // Changed from 300
    scrollToTopBtn.classList.add('visible');
}

// Adjust parallax speed (in main.js):
const parallaxSpeed = 0.3; // Changed from 0.5 (slower)
```

#### 3. Adding New Service Cards
```html
<!-- In index.html, inside .services-grid: -->
<div class="service-card">
    <div class="service-icon">🎯</div>
    <h3>Nuevo Servicio</h3>
    <p>Descripción del servicio.</p>
</div>
```

#### 4. Customizing Colors
```css
/* In css/styles.css, modify :root variables: */
:root {
    --primary-color: #10b981; /* Green instead of blue */
    --secondary-color: #059669;
    --accent-color: #34d399;
}
```

### Code Quality Standards

**JavaScript**:
- Use `const` and `let`, avoid `var`
- Use arrow functions for callbacks
- Add clear section comments (// ========== SECTION ==========)
- Use descriptive variable names
- Add error handling for DOM queries
- Use optional chaining (?.) when safe

**CSS**:
- Use CSS variables for colors and common values
- Keep specificity low (avoid deep nesting)
- Mobile-first media queries
- Use shorthand properties
- Group related properties
- Add comments for complex sections

**HTML**:
- Use semantic HTML5 elements
- Include proper ARIA labels
- Add alt text for images (when added)
- Maintain consistent indentation (4 spaces)
- Use lowercase for attributes
- Keep structure clean and readable

### Debugging Strategies

**JavaScript Issues**:
```javascript
// Add console logs for debugging
console.log('Section detected:', current);
console.log('Scroll position:', window.pageYOffset);

// Check if elements exist
const element = document.querySelector('.selector');
if (!element) {
    console.warn('Element not found: .selector');
    return;
}
```

**CSS Issues**:
```css
/* Use outline for visibility testing */
.debug {
    outline: 2px solid red;
}

/* Check z-index stacking */
.element {
    position: relative;
    z-index: 10;
    background: rgba(255, 0, 0, 0.3); /* Visual debugging */
}
```

**Performance Issues**:
```javascript
// Measure performance
console.time('Animation');
// ... code to measure
console.timeEnd('Animation');

// Check repaints
// Use Chrome DevTools > Rendering > Paint flashing
```

---

## 🧪 Testing & Validation

### Manual Testing Checklist

**Functionality Tests**:
- [ ] Click each nav link → smooth scroll to section
- [ ] Scroll down > 200px → header hides
- [ ] Scroll up → header shows
- [ ] Scroll slowly through sections → elements reveal with animation
- [ ] Check nav menu → active link changes with scroll
- [ ] Scroll down > 300px → scroll-to-top button appears
- [ ] Click scroll-to-top button → returns to top smoothly
- [ ] Observe hero section → parallax effect on initial scroll
- [ ] Fill and submit form → confirmation message appears
- [ ] Wait 5 seconds → form resets automatically

**Responsive Tests**:
- [ ] Desktop (> 768px): Full layout, all effects
- [ ] Tablet (768px): Adjusted button sizes, maintained functionality
- [ ] Mobile (480px): Stacked layout, no parallax, vertical nav
- [ ] Touch devices: All interactions work with touch

**Browser Tests**:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (12.1+)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Performance Tests**:
- [ ] Page load < 2 seconds
- [ ] Animations run at 60 FPS
- [ ] No console errors
- [ ] No layout shifts (CLS)
- [ ] Smooth scrolling with no jank

### Automated Validation

**HTML Validation**:
```bash
# Option 1: Online
# Visit: https://validator.w3.org/
# Upload index.html

# Option 2: CLI (if installed)
html5validator --root . --also-check-css
```

**CSS Validation**:
```bash
# Online: https://jigsaw.w3.org/css-validator/
```

**JavaScript Linting**:
```bash
# If ESLint is set up:
eslint js/main.js
```

**Accessibility Testing**:
```bash
# Use browser extensions:
# - axe DevTools
# - WAVE
# - Lighthouse (Chrome DevTools)
```

### Performance Metrics

**Target Metrics**:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Total Blocking Time (TBT): < 300ms
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

**Tools**:
- Google Lighthouse (Chrome DevTools)
- WebPageTest.org
- GTmetrix
- PageSpeed Insights

---

## 🚀 Deployment Pipeline

### GitHub Pages Deployment

**Method 1: Via Repository Settings**
```
1. Go to repository Settings
2. Navigate to Pages section
3. Source: Deploy from branch
4. Branch: main
5. Folder: / (root)
6. Save
7. Site will be live at: https://ifard-sa.github.io/website/
```

**Method 2: Via Actions** (Advanced)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Netlify Deployment

**Steps**:
```
1. Connect GitHub repository
2. Build command: (leave empty)
3. Publish directory: /
4. Deploy site
5. Custom domain (optional): www.ifard-sa.com
```

**netlify.toml** (Optional):
```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Deployment

**Steps**:
```
1. Import project from GitHub
2. Framework Preset: Other
3. Root Directory: ./
4. Build Command: (leave empty)
5. Output Directory: (leave empty)
6. Deploy
```

### Pre-Deployment Checklist

- [ ] All tests pass
- [ ] No console errors
- [ ] All links work (no 404s)
- [ ] Images load correctly (if added)
- [ ] Meta tags are complete
- [ ] Favicon is present (if added)
- [ ] robots.txt exists (if needed)
- [ ] sitemap.xml exists (if needed)
- [ ] Analytics code added (if needed)
- [ ] Form submissions configured (if backend exists)
- [ ] SSL certificate configured
- [ ] Custom domain configured (if applicable)

---

## 🔧 Common Tasks & Patterns

### Task 1: Adding a New Animation

**Requirement**: Fade in from left animation

**Implementation**:
```css
/* 1. Add CSS in styles.css */
@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.fade-in-left {
    animation: fadeInLeft 0.6s ease;
}
```

```javascript
// 2. Apply in main.js or HTML
document.querySelector('.elemento').classList.add('fade-in-left');
```

### Task 2: Making Form Functional

**Requirement**: Send form data to backend/email service

**Implementation with Formspree**:
```html
<!-- In index.html, modify form tag -->
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Keep existing fields -->
    <input type="hidden" name="_subject" value="Nuevo mensaje desde IFARD-SA">
    <input type="hidden" name="_next" value="https://ifard-sa.github.io/website/">
    <!-- Existing submit button -->
</form>
```

```javascript
// Remove or modify the preventDefault in main.js
contactForm.addEventListener('submit', function(e) {
    // Let form submit naturally to Formspree
    // Show confirmation after page reloads or use AJAX
});
```

**Alternative with Email.js**:
```html
<!-- Add in <head> -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

```javascript
// In main.js
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            // Show success message
        }, (error) => {
            console.error('Error:', error);
        });
});
```

### Task 3: Adding Google Analytics

**Implementation**:
```html
<!-- Add before closing </head> in index.html -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Task 4: Adding a Hamburger Menu (Mobile)

**Implementation**:
```html
<!-- In index.html, add to nav -->
<button class="hamburger" aria-label="Menu">
    <span></span>
    <span></span>
    <span></span>
</button>
```

```css
/* In styles.css */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-dark);
    transition: all 0.3s ease;
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-links {
        position: fixed;
        top: 60px;
        right: -100%;
        width: 250px;
        height: calc(100vh - 60px);
        background: var(--white);
        flex-direction: column;
        padding: 2rem;
        transition: right 0.3s ease;
        box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    }

    .nav-links.active {
        right: 0;
    }
}
```

```javascript
// In main.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
```

### Task 5: Adding Dark Mode

**Implementation**:
```css
/* In styles.css, add dark mode variables */
[data-theme="dark"] {
    --primary-color: #3b82f6;
    --secondary-color: #2563eb;
    --text-dark: #f9fafb;
    --text-light: #d1d5db;
    --bg-light: #1f2937;
    --white: #111827;
}
```

```html
<!-- Add toggle button in header -->
<button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
```

```javascript
// In main.js
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
```

### Task 6: Adding Images

**Best Practices**:
```html
<!-- Recommended structure -->
<!-- 1. Create images directory -->
mkdir images

<!-- 2. Add images with proper naming -->
images/
├── logo.png          (transparent PNG, ~50KB)
├── hero-bg.jpg       (optimized, ~200KB)
├── about-img.jpg     (optimized, ~150KB)
└── services/
    ├── service-1.svg
    └── service-2.svg

<!-- 3. Update HTML -->
<img src="images/logo.png"
     alt="Logo IFARD-SA"
     width="200"
     height="80"
     loading="lazy">

<!-- 4. Or use background images in CSS -->
.hero {
    background-image: url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

**Lazy Loading** (already implemented):
```html
<!-- Use data-src for lazy loading -->
<img data-src="images/large-image.jpg"
     alt="Description"
     class="lazy-image">
```

---

## 🐛 Troubleshooting Guide

### Issue: Smooth Scroll Not Working

**Symptoms**: Clicking nav links jumps instead of smooth scroll

**Solutions**:
```javascript
// 1. Check if smooth scroll is supported
if ('scrollBehavior' in document.documentElement.style) {
    // Browser supports smooth scroll
} else {
    // Fallback already implemented in main.js
}

// 2. Check for CSS conflicts
html {
    scroll-behavior: smooth; /* Should be present */
}

// 3. Verify JavaScript is loaded
console.log('main.js loaded'); // Add to top of main.js
```

### Issue: Header Not Hiding/Showing

**Symptoms**: Header stays visible when scrolling down

**Solutions**:
```javascript
// 1. Check if header element exists
const header = document.querySelector('header');
console.log('Header:', header); // Should not be null

// 2. Verify scroll event is firing
window.addEventListener('scroll', function() {
    console.log('Scroll position:', window.pageYOffset);
});

// 3. Check CSS transitions
header {
    transition: transform 0.3s ease; /* Must be present */
}

// 4. Check for CSS that might override
header {
    transform: translateY(0) !important; /* Remove if present */
}
```

### Issue: Animations Not Triggering

**Symptoms**: Elements don't reveal when scrolling

**Solutions**:
```javascript
// 1. Check Intersection Observer support
if ('IntersectionObserver' in window) {
    console.log('IntersectionObserver supported');
} else {
    console.log('IntersectionObserver NOT supported');
    // Fallback: immediately show all elements
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('reveal-visible');
    });
}

// 2. Verify elements have .reveal class
document.querySelectorAll('.reveal').forEach(el => {
    console.log('Reveal element:', el);
});

// 3. Check CSS is loaded
const testEl = document.querySelector('.reveal');
const styles = window.getComputedStyle(testEl);
console.log('Opacity:', styles.opacity); // Should be 0 initially
```

### Issue: Form Not Submitting

**Symptoms**: Form submission doesn't show confirmation

**Solutions**:
```javascript
// 1. Check if form exists
const form = document.querySelector('.contact-form');
console.log('Form:', form); // Should not be null

// 2. Check if submit event is prevented
contactForm.addEventListener('submit', function(e) {
    console.log('Form submitted'); // Should appear in console
    e.preventDefault();
});

// 3. Verify all required fields
<input type="text" name="nombre" required> // Must have 'required'

// 4. Check for JavaScript errors
// Open DevTools Console and look for errors
```

### Issue: Mobile Menu Not Working

**Symptoms**: Hamburger menu doesn't open on mobile

**Solutions**:
```css
/* 1. Check media query */
@media (max-width: 768px) {
    .hamburger {
        display: flex; /* Must be visible */
    }
}

/* 2. Check z-index */
.nav-links {
    z-index: 999; /* Should be high enough */
}
```

```javascript
// 3. Verify hamburger element exists
const hamburger = document.querySelector('.hamburger');
console.log('Hamburger:', hamburger);

// 4. Check event listener
hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
});
```

### Issue: Parallax Effect Choppy

**Symptoms**: Hero section parallax is not smooth

**Solutions**:
```javascript
// 1. Check if on mobile (parallax disabled)
if (window.innerWidth <= 480) {
    // Parallax should be disabled
    hero.style.transform = 'none';
}

// 2. Use requestAnimationFrame for smoother animation
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            ticking = false;
        });
        ticking = true;
    }
});
```

```css
/* 3. Add will-change for performance */
.hero {
    will-change: transform, opacity;
}
```

### Issue: Scroll-to-Top Button Not Appearing

**Symptoms**: Button doesn't show after scrolling

**Solutions**:
```javascript
// 1. Check if button was created
const btn = document.querySelector('.scroll-to-top');
console.log('Button:', btn); // Should exist

// 2. Check scroll threshold
window.addEventListener('scroll', function() {
    console.log('Scroll position:', window.pageYOffset);
    if (window.pageYOffset > 300) {
        console.log('Threshold reached');
    }
});
```

```css
/* 3. Check CSS visibility */
.scroll-to-top.visible {
    opacity: 1;
    visibility: visible; /* Both must be set */
    transform: translateY(0);
}

/* 4. Check z-index */
.scroll-to-top {
    z-index: 999; /* Should be high enough */
}
```

---

## ⚡ Performance Optimization

### Current Performance Profile

**Metrics** (typical):
- HTML size: ~6KB
- CSS size: ~11KB
- JavaScript size: ~10KB
- **Total page weight**: ~27KB (without images)
- **Load time**: < 1 second
- **FPS**: 60 on animations

### Optimization Techniques Already Implemented

1. **CSS Optimizations**:
   - CSS variables for reusability
   - `will-change` for animated elements
   - Hardware acceleration (transforms, opacity)
   - Efficient selectors (low specificity)

2. **JavaScript Optimizations**:
   - Intersection Observer (efficient viewport detection)
   - Event delegation where applicable
   - No jQuery or heavy libraries
   - Passive event listeners possible

3. **HTML Optimizations**:
   - Semantic HTML (better parsing)
   - Minimal DOM depth
   - Script at end of body
   - No render-blocking resources

### Additional Optimizations to Consider

#### 1. Minification
```bash
# CSS Minification
# Using cssnano or clean-css
npx cleancss -o css/styles.min.css css/styles.css

# JavaScript Minification
# Using Terser
npx terser js/main.js -o js/main.min.js -c -m

# Update HTML to use minified versions
<link rel="stylesheet" href="css/styles.min.css">
<script src="js/main.min.js"></script>
```

#### 2. Image Optimization (when images are added)
```bash
# Install imagemin (if needed)
npm install -g imagemin-cli

# Optimize images
imagemin images/*.jpg --out-dir=images/optimized --plugin=mozjpeg
imagemin images/*.png --out-dir=images/optimized --plugin=pngquant

# Use WebP format
imagemin images/*.jpg --out-dir=images/webp --plugin=webp
```

```html
<!-- Use picture element for WebP -->
<picture>
    <source srcset="images/hero.webp" type="image/webp">
    <img src="images/hero.jpg" alt="Hero image">
</picture>
```

#### 3. Lazy Loading Improvements
```javascript
// Already implemented for images
// Extend to other elements if needed

// Native lazy loading (modern browsers)
<img src="image.jpg" loading="lazy" alt="...">
```

#### 4. Critical CSS
```html
<!-- Inline critical CSS in <head> -->
<style>
    /* Only styles needed for above-the-fold content */
    :root { --primary-color: #2563eb; }
    header { position: fixed; top: 0; width: 100%; }
    .hero { padding: 150px 2rem 100px; }
</style>

<!-- Load full CSS asynchronously -->
<link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/styles.css"></noscript>
```

#### 5. Reduce Animation Complexity on Low-End Devices
```javascript
// Detect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations
    document.body.classList.add('reduced-motion');
}
```

```css
/* In styles.css */
.reduced-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
}
```

#### 6. Resource Hints
```html
<!-- In <head> -->
<!-- Preconnect to external domains (if using CDNs) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preload critical resources -->
<link rel="preload" href="css/styles.css" as="style">
<link rel="preload" href="js/main.js" as="script">
```

---

## 🔒 Security Considerations

### Current Security Status

**✅ Secure by Default**:
- Static site (no server-side vulnerabilities)
- No user authentication
- No database connections
- No sensitive data storage
- HTTPS enforced on GitHub Pages/Netlify/Vercel

### Security Best Practices

#### 1. Content Security Policy (CSP)
```html
<!-- Add in <head> -->
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline';
               img-src 'self' data:;
               font-src 'self';">
```

#### 2. Form Security (when backend is added)
```html
<!-- Add CSRF token if using backend -->
<input type="hidden" name="_csrf" value="{{ csrf_token }}">

<!-- Add honeypot for spam prevention -->
<input type="text" name="_gotcha" style="display:none">
```

```javascript
// Sanitize form inputs
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

const nombre = sanitizeInput(formData.get('nombre'));
```

#### 3. External Links Security
```html
<!-- Add rel attributes to external links -->
<a href="https://external-site.com"
   target="_blank"
   rel="noopener noreferrer">
    External Link
</a>
```

#### 4. Git Security
```bash
# Never commit sensitive data
# Add to .gitignore:
.env
.env.local
credentials.json
config.js
*.key
*.pem
```

#### 5. XSS Prevention
```javascript
// Never use innerHTML with user input
// Use textContent instead
element.textContent = userInput; // Safe
// element.innerHTML = userInput; // Dangerous

// If HTML is needed, sanitize with DOMPurify
// <script src="https://cdn.jsdelivr.net/npm/dompurify@3.0.1/dist/purify.min.js"></script>
element.innerHTML = DOMPurify.sanitize(userInput);
```

---

## 🗺️ Future Roadmap

### Phase 1: Content Enhancement (Immediate)
- [ ] Add real institutional images
- [ ] Expand "About Us" content
- [ ] Add team member profiles
- [ ] Include testimonials section
- [ ] Add course/program catalog
- [ ] Create FAQ section

### Phase 2: Features (Short-term)
- [ ] Implement hamburger menu for mobile
- [ ] Add dark mode toggle
- [ ] Integrate form backend (Formspree/EmailJS)
- [ ] Add social media feed integration
- [ ] Implement course search/filter
- [ ] Add blog/news section
- [ ] Create downloadable content (brochures, PDFs)

### Phase 3: Advanced Features (Medium-term)
- [ ] Multi-language support (Spanish/English)
- [ ] Student portal integration
- [ ] Online course enrollment
- [ ] Payment gateway integration
- [ ] Calendar/events system
- [ ] Newsletter subscription
- [ ] Live chat support

### Phase 4: Technical Improvements (Ongoing)
- [ ] Progressive Web App (PWA)
- [ ] Offline functionality
- [ ] Push notifications
- [ ] Advanced analytics
- [ ] A/B testing implementation
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO optimization
- [ ] Performance monitoring

### Phase 5: Infrastructure (Long-term)
- [ ] Migrate to headless CMS (Contentful, Strapi, Sanity)
- [ ] Implement CI/CD pipeline
- [ ] Add automated testing
- [ ] Set up staging environment
- [ ] Implement feature flags
- [ ] Add monitoring/logging (Sentry, LogRocket)
- [ ] Create component library/design system

---

## 📚 Additional Resources

### Documentation
- **CLAUDE.md**: Basic project setup and guidelines
- **EFECTOS-SCROLL.md**: Detailed scroll effects documentation
- **TEST-EFECTOS.html**: Testing page for effects validation

### External References

**Web Standards**:
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [W3C HTML Validator](https://validator.w3.org/) - HTML validation
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - CSS validation

**Performance**:
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

**Accessibility**:
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

**Design Inspiration**:
- [Awwwards](https://www.awwwards.com/)
- [CSS Design Awards](https://www.cssdesignawards.com/)
- [Dribbble](https://dribbble.com/)

### Community & Support
- GitHub Issues: Use for bug reports and feature requests
- Discussions: For general questions and ideas
- Pull Requests: For contributing code changes

---

## 🏁 Quick Start for AI Assistants

### First-Time Setup
```bash
# 1. Clone repository (if not already)
git clone https://github.com/IFARD-SA/website.git
cd website

# 2. Start local server
python3 -m http.server 8000

# 3. Open browser
http://localhost:8000

# 4. Verify everything works
# - Check console for errors
# - Test all scroll effects
# - Verify responsive design
```

### Making Changes
```bash
# 1. Create feature branch (optional)
git checkout -b feature/new-feature

# 2. Make changes to files
# - Edit index.html for structure
# - Edit css/styles.css for styling
# - Edit js/main.js for interactivity

# 3. Test changes locally
# - Refresh browser
# - Test all features
# - Check responsiveness

# 4. Commit changes
git add .
git commit -m "feat: add new feature"

# 5. Push to GitHub
git push origin main
# or
git push origin feature/new-feature
```

### Emergency Rollback
```bash
# If something breaks, rollback to previous commit
git log --oneline  # Find last good commit
git reset --hard COMMIT_HASH
git push --force origin main  # Use with caution!
```

---

## 📝 Change Log

### Version 1.0 - November 2025
- ✅ Initial static website
- ✅ Full content structure (hero, about, services, contact)
- ✅ Complete CSS styling with modern features
- ✅ 10+ JavaScript scroll effects implemented
- ✅ Responsive design for all devices
- ✅ Production-ready deployment
- ✅ Documentation (CLAUDE.md, EFECTOS-SCROLL.md)
- ✅ Testing page (TEST-EFECTOS.html)

### Future Versions
- v1.1: Mobile menu, dark mode, functional forms
- v1.2: Multi-language support, CMS integration
- v2.0: Student portal, course enrollment system

---

## 🤝 Contributing Guidelines

### For AI Assistants
When modifying this codebase:

1. **Understand Context**: Read existing code and comments
2. **Maintain Standards**: Follow established patterns
3. **Test Thoroughly**: Verify all features still work
4. **Document Changes**: Update relevant documentation
5. **Respect Architecture**: No unnecessary frameworks/dependencies
6. **Consider Users**: Maintain Spanish language, accessibility
7. **Performance First**: Don't sacrifice speed for features
8. **Backward Compatible**: Don't break existing functionality

### Code Review Checklist
- [ ] Code follows existing style and conventions
- [ ] Comments are clear and helpful
- [ ] No console.log statements (unless intentional)
- [ ] Variables have descriptive names
- [ ] Functions are modular and reusable
- [ ] Error handling is present
- [ ] Edge cases are considered
- [ ] Browser compatibility maintained
- [ ] Mobile responsiveness preserved
- [ ] Performance impact is minimal

---

## 🎓 Learning Resources for AI Context

### This Codebase Teaches
1. **Modern HTML5**: Semantic structure, accessibility
2. **Advanced CSS**: Grid, Flexbox, animations, variables
3. **Vanilla JavaScript**: ES6+, DOM manipulation, APIs
4. **Intersection Observer**: Efficient scroll detection
5. **Performance**: Optimization techniques
6. **Responsive Design**: Mobile-first approach
7. **UX Patterns**: Smooth scrolling, reveal animations
8. **Code Organization**: Modular, commented, maintainable

### Key Concepts Demonstrated
- Progressive enhancement
- Mobile-first design
- Performance optimization
- Accessibility considerations
- Semantic HTML
- CSS architecture
- JavaScript patterns
- Git workflow
- Static site deployment

---

## 📧 Contact & Maintenance

**Project**: IFARD-SA Website
**Repository**: https://github.com/IFARD-SA/website
**Documentation**: SUNDAYS.md (this file), CLAUDE.md, EFECTOS-SCROLL.md
**Last Updated**: November 2025
**Maintained By**: IFARD-SA Team + AI Assistants

**For Questions**:
- Open GitHub Issue for bugs
- Use GitHub Discussions for questions
- Submit Pull Request for contributions

---

## ✨ Final Notes for AI Assistants

This is a **production-ready static website** with advanced features already implemented. When working with this codebase:

- **Preserve simplicity**: No build tools unless absolutely needed
- **Maintain performance**: Current load time is excellent (~1s)
- **Respect the stack**: Vanilla JS is a feature, not a limitation
- **Follow patterns**: Code is well-organized, maintain that structure
- **Test everything**: All 10+ scroll effects must continue working
- **Document changes**: Update this file and others as needed
- **Think mobile-first**: Test on small screens regularly
- **Consider users**: Spanish language, accessibility, UX

**This codebase is an example of modern web development without complexity.**

Keep it simple. Keep it fast. Keep it accessible.

---

**End of SUNDAYS.md**
