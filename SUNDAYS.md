# SUNDAYS.md - AI Infrastructure Guide for IFARD-SA Website

> **Document Purpose**: This file provides comprehensive codebase intelligence for AI assistants and the Genium AI infrastructure to understand, navigate, and work effectively with this project.

## 📋 Project Overview

**Project Name**: IFARD-SA Website
**Organization**: IFARD-SA (Instituto de Formación y Desarrollo)
**Repository**: https://github.com/IFARD-SA/website
**Project Type**: Static Website (HTML/CSS/JavaScript)
**Language**: Spanish (es)
**Current Stage**: Production-ready landing page with scroll effects

### Project Description

A modern, professional static website for IFARD-SA (Institute of Training and Development) featuring:
- Single-page application (SPA) design with smooth scrolling
- Responsive layout optimized for all devices
- Advanced scroll effects and animations
- Contact form with animated feedback
- Professional service showcase
- Accessible and SEO-optimized

---

## 🗂️ Repository Structure

```
.
├── index.html              # Main HTML page (single-page application)
├── css/
│   └── styles.css          # Complete styles with animations (10.8KB)
├── js/
│   └── main.js             # JavaScript with scroll effects (10.5KB)
├── CLAUDE.md               # AI assistant guide (legacy/supplementary)
├── EFECTOS-SCROLL.md       # Scroll effects documentation (Spanish)
├── TEST-EFECTOS.html       # Testing and validation page
└── SUNDAYS.md             # This file - AI infrastructure guide
```

### File Inventory

| File | Size | Purpose | Last Modified |
|------|------|---------|---------------|
| `index.html` | 6.5KB | Main landing page with semantic HTML5 | Nov 13, 2025 |
| `css/styles.css` | 10.8KB | Complete stylesheet with animations | Nov 13, 2025 |
| `js/main.js` | 10.5KB | JavaScript for scroll effects | Nov 13, 2025 |
| `CLAUDE.md` | 7.3KB | Project instructions for AI assistants | Nov 13, 2025 |
| `EFECTOS-SCROLL.md` | 9KB | Scroll effects documentation | Nov 13, 2025 |
| `TEST-EFECTOS.html` | 7.6KB | Testing page for validation | Nov 13, 2025 |

---

## 🏗️ Architecture & Technical Stack

### Technology Stack

```yaml
Frontend:
  - HTML5 (Semantic markup)
  - CSS3 (Modern features: Grid, Flexbox, Variables, Animations)
  - Vanilla JavaScript (ES6+, no frameworks)

APIs Used:
  - Intersection Observer API (scroll animations)
  - FormData API (contact form)
  - scrollTo API (smooth scrolling)

Build System:
  - None (static files, no build process)

Dependencies:
  - None (zero external dependencies)

Browser Support:
  - Chrome 51+
  - Firefox 55+
  - Safari 12.1+
  - Edge 79+
  - Opera 38+
```

### Design Patterns & Architecture

1. **Progressive Enhancement**: Core content accessible without JavaScript
2. **Mobile-First Design**: Responsive breakpoints at 768px and 480px
3. **Component-Based CSS**: Modular styles with BEM-like naming
4. **Observer Pattern**: Intersection Observer for scroll effects
5. **Event-Driven JavaScript**: DOM event listeners for interactions
6. **CSS Custom Properties**: Theme variables for consistency

---

## 📄 Core Files Deep Dive

### 1. `index.html` - Main Landing Page

**Purpose**: Single-page website with complete content structure

**Sections** (in order):
1. **Header** (line 13-23): Fixed navigation with logo and menu links
2. **Hero Section** (line 26-30): Welcome banner with CTA button
3. **About Section** (line 33-55): Mission statement and institutional info
4. **Services Section** (line 58-110): 6 service cards in grid layout
5. **Contact Section** (line 113-136): Contact form with 4 fields
6. **Footer** (line 139-150): Social links and copyright

**Key Features**:
- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Proper meta tags for SEO and viewport
- Anchor links for internal navigation (#inicio, #about, #servicios, #contacto)
- Form fields: nombre, email, telefono, mensaje
- Emoji icons for services (📚🎓💼🌐📊🏆) and social media (📘🐦💼📷)

**Important IDs**:
```html
#inicio      → Hero section
#about       → About us section
#servicios   → Services section
#contacto    → Contact section
```

---

### 2. `css/styles.css` - Complete Stylesheet

**Purpose**: Modern responsive styles with advanced animations

**Structure** (566 lines):
```
Lines 1-25:     CSS Variables & Reset
Lines 27-69:    Header & Navigation
Lines 71-110:   Hero Section
Lines 112-124:  Section Defaults
Lines 126-159:  About Section
Lines 161-196:  Services Grid
Lines 198-261:  Contact Form
Lines 263-292:  Footer
Lines 294-303:  Base Animations
Lines 305-495:  Scroll Effects (detailed implementation)
Lines 497-565:  Responsive Design (@media queries)
```

**CSS Variables** (color scheme):
```css
--primary-color: #2563eb    /* Blue primary */
--secondary-color: #1e40af  /* Dark blue */
--accent-color: #3b82f6     /* Light blue accent */
--text-dark: #1f2937        /* Dark gray text */
--text-light: #6b7280       /* Light gray text */
--bg-light: #f9fafb         /* Light background */
--white: #ffffff
--shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15)
```

**Animation Classes**:
- `.reveal` - Fade in from bottom (translateY)
- `.reveal-left` - Fade in from left (translateX)
- `.reveal-right` - Fade in from right (translateX)
- `.reveal-visible` - Active state for reveal animations
- `.scrolled` - Header state when scrolled
- `.active` - Active navigation link
- `.visible` - Scroll-to-top button visibility

**Key Breakpoints**:
```css
@media (max-width: 768px)  /* Tablets */
@media (max-width: 480px)  /* Mobile phones */
```

---

### 3. `js/main.js` - JavaScript Functionality

**Purpose**: Scroll effects, animations, and interactive features

**Structure** (311 lines, 10 main sections):

#### Section 1: Smooth Scroll Navigation (lines 8-42)
- Handles clicks on anchor links
- Smooth scrolling with offset for fixed header
- Event delegation on all `a[href^="#"]` elements

#### Section 2: Dynamic Header (lines 45-68)
- Adds `.scrolled` class after 50px scroll
- Auto-hides header when scrolling down (> 200px)
- Shows header when scrolling up
- Uses `transform: translateY()` for performance

#### Section 3: Reveal on Scroll (lines 71-106)
- Intersection Observer for scroll animations
- Threshold: 15% visibility
- Staggered delays (0.1s per element)
- Observes: `.section-title`, `.service-card`, `.about-text`, etc.

#### Section 4: Scroll-to-Top Button (lines 109-133)
- Dynamically created button element
- Appears after 300px scroll
- Smooth scroll to top on click
- Fixed position bottom-right

#### Section 5: Active Navigation (lines 136-159)
- Highlights current section in menu
- Updates `.active` class based on scroll position
- Offset of 150px for accuracy

#### Section 6: Parallax Effect (lines 162-176)
- Subtle parallax on hero section
- Speed factor: 0.5
- Opacity fade based on scroll
- Disabled on mobile (CSS)

#### Section 7: Counter Animation (lines 179-211)
- Animates numbers from 0 to target
- Uses `data-counter` attribute
- Duration: 2 seconds
- Intersection Observer triggers once

#### Section 8: Form Handler (lines 214-259)
- Prevents default form submission
- Shows animated confirmation message
- Auto-resets after 5 seconds
- Smooth transitions between states

#### Section 9: Lazy Image Loading (lines 262-279)
- Intersection Observer for images
- Uses `data-src` attribute pattern
- Adds `.loaded` class when loaded
- Prepared but not actively used yet

#### Section 10: Typing Effect (lines 282-304)
- Optional typewriter animation
- Configurable speed (default 50ms)
- Commented out by default (lines 300-304)

**Global Variables**:
```javascript
const header = document.querySelector('header');
let lastScrollTop = 0;  // Track scroll direction
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
```

**Performance Optimizations**:
- Uses `will-change` CSS property
- Intersection Observer instead of scroll events
- Passive event listeners implied
- Throttling not needed due to Observer API

---

## 🎨 Design System

### Color Palette

```
Primary Colors:
  #2563eb - Primary Blue (buttons, links, accents)
  #1e40af - Secondary Dark Blue (hover states)
  #3b82f6 - Accent Light Blue (highlights)

Neutral Colors:
  #1f2937 - Dark Gray (headings, dark text)
  #6b7280 - Light Gray (body text)
  #f9fafb - Light Background (alternating sections)
  #ffffff - White (backgrounds, contrast)

Semantic Colors:
  #10b981 - Success Green (form confirmation)
  #ffc107 - Warning Yellow (instruction boxes)
```

### Typography

```css
Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
Line Height: 1.6 (body), 1.8 (about section)

Font Sizes:
  h1 (Hero):        3rem (48px) → 2rem mobile
  h2 (Sections):    2.5rem (40px) → 2rem mobile
  h3 (Cards):       1.8rem (29px)
  Body:             1rem (16px)
  Hero p:           1.25rem (20px)
  Small:            0.9-1.1rem
```

### Spacing System

```css
Section Padding: 80px vertical, 2rem horizontal
Card Padding: 2rem (32px)
Form Gaps: 1rem (16px)
Grid Gaps: 2-3rem (32-48px)

Header Height: ~80px (for scroll offset calculations)
```

### Animation Timings

```javascript
Fast:       0.3s (buttons, hover effects)
Medium:     0.6s (reveal animations)
Slow:       1s (hero animations)
Very Slow:  2s (counters, pulse effects)
```

---

## 🔄 Key Workflows & User Flows

### Navigation Flow
```
User clicks nav link → preventDefault() → Calculate target position
→ Subtract header offset (80px) → Smooth scroll to position
→ Update active nav indicator → Complete
```

### Scroll Animation Flow
```
Page loads → Intersection Observer created → Elements marked as .reveal
→ User scrolls → Element enters viewport (15% threshold)
→ .reveal-visible class added → CSS transition triggers
→ Element fades in with translateY animation → Complete
```

### Form Submission Flow
```
User fills form → Click submit → preventDefault()
→ Fade out form → Create confirmation message
→ Fade in confirmation → Wait 5 seconds
→ Fade out confirmation → Restore form → Reset fields → Complete
```

### Header Behavior Flow
```
Scroll > 50px → Add .scrolled class (glassmorphism effect)
Scroll down > 200px → translateY(-100%) (hide header)
Scroll up → translateY(0) (show header)
Scroll < 50px → Remove .scrolled class
```

---

## 🧩 Component Patterns

### Service Card Component
```html
<div class="service-card">
    <div class="service-icon">📚</div>
    <h3>Title</h3>
    <p>Description</p>
</div>
```
**Behavior**: Hover effect (translateY, shadow), reveal animation

### Form Group Component
```html
<div class="form-group">
    <label for="field-id">Label</label>
    <input type="text" id="field-id" name="field-name" required>
</div>
```
**Behavior**: Focus border color change, validation

### Scroll-to-Top Button
```javascript
// Dynamically created
<button class="scroll-to-top visible" aria-label="Volver arriba">↑</button>
```
**Behavior**: Appears at 300px scroll, smooth scroll to top

---

## 📊 State Management

### CSS State Classes

| Class | Purpose | Trigger | Element |
|-------|---------|---------|---------|
| `.scrolled` | Header glassmorphism | Scroll > 50px | `<header>` |
| `.active` | Active nav link | Section in viewport | `.nav-links a` |
| `.reveal-visible` | Reveal animation | Intersection Observer | Various elements |
| `.visible` | Show scroll button | Scroll > 300px | `.scroll-to-top` |
| `.loaded` | Lazy loaded image | Image loaded | `img[data-src]` |

### JavaScript State Variables

```javascript
let lastScrollTop = 0;           // Track scroll direction
const observerOptions = {...};   // Intersection Observer config
const sections = [...];          // Section elements for nav
const navItems = [...];          // Navigation link elements
```

---

## 🔌 API Integration Points

### Current APIs Used

1. **Intersection Observer API**
   - Purpose: Efficient scroll-based animations
   - Elements observed: Service cards, section titles, form
   - Configuration: 15% threshold, -50px bottom margin

2. **FormData API**
   - Purpose: Extract form data on submission
   - Used in: Contact form handler (line 223)

3. **scrollTo API**
   - Purpose: Smooth scrolling behavior
   - Options: `{ top: position, behavior: 'smooth' }`

### Future Integration Opportunities

```yaml
Ready for Integration:
  - Form Backend: Contact form needs email service (e.g., Formspree, Netlify Forms)
  - Analytics: Google Analytics or alternative tracking
  - Social Media: Real social media links (currently #)
  - Images: Logo and institutional photos (placeholders ready)

Prepared but Unused:
  - Counter Animation: Add data-counter attributes to numbers
  - Typing Effect: Uncomment lines 300-304 in main.js
  - Lazy Loading: Add images with data-src attribute
```

---

## 🎯 Important Code Locations

### Making Common Changes

#### 1. **Change Colors**
```
File: css/styles.css
Lines: 2-11 (CSS variables)
Action: Modify hex values in :root
```

#### 2. **Adjust Animation Speed**
```
File: css/styles.css
Lines: 350, 362-368 (transition durations)
File: js/main.js
Lines: 103 (stagger delay)
```

#### 3. **Change Scroll Offset**
```
File: js/main.js
Line: 31 (headerOffset = 80)
```

#### 4. **Modify Scroll Button Threshold**
```
File: js/main.js
Line: 120 (pageYOffset > 300)
```

#### 5. **Update Content**
```
File: index.html
Lines: 26-30 (Hero text)
Lines: 36-49 (About text)
Lines: 60-109 (Services)
```

#### 6. **Add New Section**
```
Steps:
1. Add <section id="new-section"> in index.html
2. Add nav link: <li><a href="#new-section">Label</a></li>
3. Style with .section-title class
4. Elements auto-animate via Intersection Observer
```

#### 7. **Connect Form Backend**
```
File: js/main.js
Line: 219-220 (add fetch/AJAX call)
Example:
    await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
```

---

## 🧪 Testing & Validation

### Manual Testing Checklist

```markdown
Navigation:
- [ ] All nav links scroll smoothly to sections
- [ ] Header hides when scrolling down
- [ ] Header shows when scrolling up
- [ ] Active nav link updates correctly

Animations:
- [ ] Hero elements fade in on load
- [ ] Service cards reveal on scroll
- [ ] About section reveals on scroll
- [ ] Parallax works on hero section

Interactions:
- [ ] Scroll-to-top button appears after 300px
- [ ] Scroll-to-top button works correctly
- [ ] Form submission shows confirmation
- [ ] Form resets after 5 seconds

Responsive:
- [ ] Layout works on mobile (< 480px)
- [ ] Layout works on tablet (480-768px)
- [ ] Layout works on desktop (> 768px)
- [ ] Navigation readable on all sizes

Performance:
- [ ] No console errors in browser
- [ ] Animations run at 60 FPS
- [ ] Page loads in < 2 seconds
- [ ] No layout shift (CLS)
```

### Automated Testing

```bash
# HTML Validation (if html5validator installed)
html5validator --root . --also-check-css

# Online validation
# Visit: https://validator.w3.org/
```

### Browser Testing

**Priority Browsers**:
1. Chrome/Edge (Latest)
2. Firefox (Latest)
3. Safari (macOS/iOS)
4. Mobile Chrome (Android)
5. Mobile Safari (iOS)

**Known Issues**: None currently documented

---

## 🚀 Development Workflow

### Local Development

```bash
# 1. Clone repository
git clone https://github.com/IFARD-SA/website.git
cd website

# 2. Start local server (choose one)
python3 -m http.server 8000        # Python 3
python -m SimpleHTTPServer 8000    # Python 2
npx http-server -p 8000            # Node.js
php -S localhost:8000              # PHP

# 3. Open browser
# Navigate to: http://localhost:8000
```

### Making Changes

```bash
# 1. Create feature branch
git checkout -b feature/description

# 2. Make changes to files
# Edit index.html, css/styles.css, or js/main.js

# 3. Test locally
# Use local server and test in browser

# 4. Commit changes
git add .
git commit -m "Description of changes"

# 5. Push to GitHub
git push origin feature/description

# 6. Create Pull Request on GitHub
```

### Deployment

**Recommended Platforms**:

1. **GitHub Pages** (Free, Easy)
```bash
# Settings → Pages → Deploy from main branch
# URL: https://ifard-sa.github.io/website/
```

2. **Netlify** (Free, Auto-deploy)
```yaml
Build command: (none)
Publish directory: /
Auto-deploy on: main branch
```

3. **Vercel** (Free, Fast)
```yaml
Framework: Other
Root Directory: ./
Output Directory: (none)
```

---

## 🐛 Known Issues & Limitations

### Current Limitations

1. **Form Submission**: Currently simulated, not connected to backend
2. **Social Links**: Placeholder (#) links, need real URLs
3. **Images**: Placeholder for institutional image in About section
4. **No Backend**: Pure frontend, no server-side processing
5. **Single Language**: Spanish only (no i18n implementation)

### Browser Compatibility Notes

- **IE11**: Not supported (uses ES6, Intersection Observer)
- **Safari < 12.1**: Limited support (Intersection Observer)
- **Older Android**: May have reduced animation performance

### Performance Considerations

```yaml
Optimization Status:
  ✅ No external dependencies (fast load)
  ✅ Minification ready (can minify CSS/JS)
  ✅ Image optimization ready (when images added)
  ✅ Lazy loading prepared (for images)
  ⚠️  No caching headers (needs server config)
  ⚠️  No CDN (static hosting recommended)
```

---

## 📚 Documentation Files

### Documentation Hierarchy

1. **SUNDAYS.md** (This file) - Complete codebase intelligence
2. **CLAUDE.md** - Project overview and AI assistant guide
3. **EFECTOS-SCROLL.md** - Detailed scroll effects documentation
4. **TEST-EFECTOS.html** - Testing validation page

### When to Use Each Document

| Document | Use Case | Target Audience |
|----------|----------|----------------|
| SUNDAYS.md | Deep codebase analysis, architecture understanding | AI infrastructure, advanced AI assistants |
| CLAUDE.md | Quick project overview, basic commands | General AI assistants, new contributors |
| EFECTOS-SCROLL.md | Scroll effects implementation details | Developers, customization |
| TEST-EFECTOS.html | Testing and validation checklist | QA, testing |

---

## 🔐 Security Considerations

### Current Security Status

```yaml
Security Measures:
  ✅ No sensitive data in frontend code
  ✅ No API keys or credentials
  ✅ Form validation (HTML5 required attributes)
  ✅ No eval() or dangerous functions
  ✅ No external script dependencies

Security Recommendations:
  - Add CSRF protection when connecting form backend
  - Implement rate limiting on form submission
  - Add reCAPTCHA for spam protection
  - Use HTTPS in production (enforced by GitHub Pages)
  - Implement Content Security Policy (CSP) headers
```

### Git Repository Security

⚠️ **IMPORTANT**: The git remote URL in the current checkout contains an access token. This is for temporary CI/CD use and should not be committed or shared.

```bash
# Clean command for documentation
git remote set-url origin https://github.com/IFARD-SA/website.git
```

---

## 🎓 Learning Resources

### Understanding This Codebase

1. **HTML5 Semantic Elements**
   - Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
   - Used: `<header>`, `<nav>`, `<section>`, `<footer>`, `<main>`

2. **CSS Grid & Flexbox**
   - Service cards use Grid: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`
   - Navigation uses Flexbox: `display: flex`

3. **Intersection Observer API**
   - Reference: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   - Core to scroll animations (lines 73-106 in main.js)

4. **CSS Custom Properties**
   - Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
   - Color scheme defined in :root (lines 2-11 in styles.css)

5. **CSS Transitions vs Animations**
   - Transitions: Hover effects, reveal animations
   - Animations: @keyframes fadeInUp, pulse, slideIn

---

## 🤖 AI Assistant Instructions

### Context for AI Assistants

When working with this codebase, AI assistants should:

1. **Understand the Architecture**
   - This is a vanilla JavaScript project (no frameworks)
   - All functionality is self-contained (no dependencies)
   - Spanish is the primary language for content

2. **File Modification Guidelines**
   - **index.html**: Use semantic HTML5, maintain section structure
   - **styles.css**: Preserve CSS variables, maintain responsive breakpoints
   - **main.js**: Keep sections organized, maintain performance optimizations

3. **Common Tasks**

   **Adding a New Section**:
   ```html
   <!-- 1. Add to index.html -->
   <section id="new-section">
       <h2 class="section-title">Title</h2>
       <div class="content">Content here</div>
   </section>

   <!-- 2. Add nav link -->
   <li><a href="#new-section">Label</a></li>

   <!-- 3. Add styles in CSS -->
   .new-section { /* styles */ }
   ```

   **Changing Colors**:
   ```css
   /* Modify :root in styles.css */
   :root {
       --primary-color: #NEW_COLOR;
   }
   ```

   **Adding Interactive Elements**:
   ```javascript
   // Add to main.js in appropriate section
   // Use Intersection Observer for scroll effects
   // Use event listeners for interactions
   ```

4. **Testing Requirements**
   - Always test in multiple browsers
   - Verify responsive design (mobile, tablet, desktop)
   - Check console for errors
   - Validate HTML/CSS if possible

5. **Code Style**
   - Spanish comments in HTML (e.g., `<!-- Sección Hero -->`)
   - English comments in CSS/JS
   - Descriptive variable names in English
   - Content text in Spanish

6. **Performance Guidelines**
   - Use Intersection Observer for scroll effects (not scroll events)
   - Prefer CSS animations over JavaScript animations
   - Use `will-change` for frequently animated properties
   - Minimize DOM queries (cache selectors)

---

## 📈 Future Enhancements

### Planned Features (Not Implemented)

```yaml
High Priority:
  - [ ] Connect contact form to email service
  - [ ] Add real institutional images
  - [ ] Implement hamburger menu for mobile
  - [ ] Add favicon and meta images (Open Graph)

Medium Priority:
  - [ ] Dark mode toggle
  - [ ] Multi-language support (English/Spanish)
  - [ ] Blog/news section
  - [ ] Team members section

Low Priority:
  - [ ] Animated SVG illustrations
  - [ ] Scroll progress indicator
  - [ ] Loading animations/preloader
  - [ ] Easter eggs and micro-interactions

Technical Improvements:
  - [ ] Service Worker for offline support
  - [ ] Lighthouse score optimization
  - [ ] Advanced SEO (structured data)
  - [ ] A/B testing setup
```

### Extension Points

The codebase is prepared for easy extension in these areas:

1. **Image Loading**: Lazy loading system ready (`data-src` pattern)
2. **Counters**: Animation function ready (add `data-counter` attributes)
3. **Typing Effect**: Function ready (uncomment lines 300-304)
4. **Additional Sections**: Follow existing section pattern
5. **Form Backend**: Add fetch call at line 220 in main.js

---

## 🔍 Quick Reference

### File Modification Quick Guide

```yaml
Content Changes:
  - Hero text: index.html lines 26-30
  - About text: index.html lines 36-49
  - Services: index.html lines 60-109
  - Contact form: index.html lines 116-136

Style Changes:
  - Colors: styles.css lines 2-11
  - Fonts: styles.css line 21
  - Breakpoints: styles.css lines 497-565
  - Animations: styles.css lines 294-495

Behavior Changes:
  - Scroll effects: main.js lines 71-106
  - Form handling: main.js lines 214-259
  - Navigation: main.js lines 8-42, 136-159
  - Header behavior: main.js lines 45-68
```

### Important Constants

```javascript
// Offsets and Thresholds
HEADER_HEIGHT = 80           // Used for scroll offset
SCROLL_THRESHOLD = 50        // Header style change
HIDE_HEADER_THRESHOLD = 200  // Auto-hide header
BUTTON_THRESHOLD = 300       // Show scroll-to-top button
OBSERVER_THRESHOLD = 0.15    // 15% visibility for reveal
NAV_ACTIVE_OFFSET = 150      // Section detection offset

// Timings
FORM_RESET_DELAY = 5000ms    // Auto-reset contact form
STAGGER_DELAY = 0.1s         // Cascade animation delay
TRANSITION_FAST = 0.3s       // Quick transitions
TRANSITION_MEDIUM = 0.6s     // Reveal animations
PARALLAX_SPEED = 0.5         // Parallax multiplier
```

### CSS Selector Reference

```css
/* Layout */
header                      /* Fixed navigation */
.hero                       /* Hero section */
.about                      /* About section */
#servicios                  /* Services section */
.contact                    /* Contact section */
footer                      /* Footer */

/* Components */
.service-card               /* Service item */
.form-group                 /* Form field group */
.scroll-to-top              /* Floating button */
.cta-button                 /* Call-to-action button */

/* States */
.scrolled                   /* Header scrolled state */
.active                     /* Active nav link */
.reveal-visible             /* Revealed element */
.visible                    /* Visible scroll button */
```

---

## 🏁 Summary

### Project Maturity

```yaml
Status: Production Ready
Completion: ~85%
  ✅ Structure: Complete
  ✅ Styling: Complete
  ✅ Animations: Complete
  ✅ Responsive: Complete
  ⚠️  Content: Placeholder content
  ⚠️  Images: Missing real images
  ⚠️  Form: Needs backend integration
```

### Key Takeaways for AI Assistants

1. **Zero Dependencies**: Pure HTML/CSS/JavaScript, no build process
2. **Performance First**: Intersection Observer, CSS animations, will-change
3. **Well Documented**: Comments in code, separate documentation files
4. **Spanish Content**: UI text in Spanish, code comments in English
5. **Extensible**: Easy to add sections, modify styles, extend functionality
6. **Modern Web APIs**: Uses latest browser APIs with fallbacks

### Best Practices Observed

- ✅ Semantic HTML5
- ✅ CSS Custom Properties for theming
- ✅ Mobile-first responsive design
- ✅ Accessible markup (ARIA labels, semantic elements)
- ✅ Performance optimizations (Intersection Observer, GPU-accelerated animations)
- ✅ Clean code organization (sectioned, commented)
- ✅ Progressive enhancement (works without JavaScript for basic content)

---

## 📞 Contact & Maintenance

**Organization**: IFARD-SA
**Repository**: https://github.com/IFARD-SA/website
**Primary Branch**: `main`
**Last Updated**: November 13, 2025
**Current Version**: v1.0 (with scroll effects)

### Document Maintenance

**SUNDAYS.md Update Frequency**: Update when:
- New files are added to the project
- Architecture changes significantly
- New major features are implemented
- API integrations are added
- Dependencies are introduced

**Last Updated**: November 13, 2025
**Document Version**: 1.0
**Created By**: AI Assistant Analysis

---

## 🔗 Related Documentation

- **CLAUDE.md**: General project guide for AI assistants
- **EFECTOS-SCROLL.md**: Detailed scroll effects documentation
- **TEST-EFECTOS.html**: Testing validation page
- **MDN Web Docs**: https://developer.mozilla.org/
- **GitHub Repo**: https://github.com/IFARD-SA/website

---

*This document is maintained for the Genium AI infrastructure and AI assistants working with this codebase. It should be kept in sync with actual code changes.*
