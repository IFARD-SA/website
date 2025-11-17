# SUNDAYS.md - AI Infrastructure Guide for IFARD-SA Website

> **Purpose**: This file provides comprehensive context for AI assistants and Genium AI infrastructure to understand, navigate, and work effectively with the IFARD-SA website codebase.

---

## 📊 Project Overview

### Basic Information
- **Project Name**: IFARD-SA Website
- **Organization**: IFARD-SA (Instituto de Formación y Desarrollo)
- **Repository**: https://github.com/IFARD-SA/website
- **Project Type**: Static Website (HTML/CSS/JavaScript)
- **Primary Language**: Spanish (es)
- **Status**: Active Development
- **Last Major Update**: Scroll effects implementation (2025)

### Project Purpose
Educational institution website showcasing:
- Institutional information and mission
- Professional training services
- Course offerings and certifications
- Organizational development programs
- Contact and communication channels

---

## 🏗️ Architecture & Technology Stack

### Core Technologies
```yaml
Frontend:
  - HTML5: Semantic markup, accessibility-focused
  - CSS3: Modern features (Grid, Flexbox, CSS Variables, Animations)
  - JavaScript: Vanilla JS (no frameworks), ES6+

Deployment:
  - Platform: Static hosting (GitHub Pages compatible)
  - Build Process: None (direct file serving)
  - CI/CD: Git-based workflows
```

### Key Technical Decisions
1. **No Build Tools**: Direct HTML/CSS/JS - immediate changes, no compilation
2. **Vanilla JavaScript**: No external dependencies (jQuery, React, etc.)
3. **Progressive Enhancement**: Works without JS, enhanced with JS
4. **Mobile-First**: Responsive design approach
5. **Performance-Focused**: Intersection Observer API, GPU-accelerated animations

---

## 📁 Project Structure

```
website/
├── index.html              # Main landing page (single-page application)
├── css/
│   └── styles.css         # Complete stylesheet (~566 lines)
├── js/
│   └── main.js            # Interactive features and scroll effects (~311 lines)
├── CLAUDE.md              # AI assistant guide (human-focused)
├── SUNDAYS.md             # This file (AI infrastructure guide)
├── EFECTOS-SCROLL.md      # Scroll effects documentation
├── TEST-EFECTOS.html      # Testing/validation page for scroll features
└── .git/                  # Git repository

Future directories (planned but not yet created):
├── images/                # Logo, photos, graphics
├── assets/                # Fonts, icons, additional resources
└── pages/                 # Additional HTML pages (about, services, etc.)
```

---

## 🔍 Codebase Analysis

### HTML Structure (`index.html`)

**Sections (in order)**:
1. **Header** (Fixed Navigation)
   - Logo: "IFARD-SA"
   - Nav links: Inicio, Nosotros, Servicios, Contacto
   - Fixed position with scroll effects

2. **Hero Section** (`#inicio`)
   - Welcome message
   - Subtitle with institution description
   - CTA button → Contact section
   - Parallax effect enabled

3. **About Section** (`#about`)
   - Mission statement
   - Institutional text (3 paragraphs)
   - Placeholder for institutional image
   - 2-column grid layout

4. **Services Section** (`#servicios`)
   - 6 service cards:
     * Formación Profesional 📚
     * Cursos Especializados 🎓
     * Consultoría 💼
     * Formación Online 🌐
     * Desarrollo Organizacional 📊
     * Certificaciones 🏆
   - Grid layout (auto-fit, responsive)

5. **Contact Section** (`#contacto`)
   - Contact form with fields:
     * Nombre Completo (text, required)
     * Correo Electrónico (email, required)
     * Teléfono (tel, optional)
     * Mensaje (textarea, required)
   - Submit button with animation
   - Form submission shows confirmation message (JS-handled)

6. **Footer**
   - Social media links (placeholders: 📘 📷 💼 🐦)
   - Copyright notice: © 2025 IFARD-SA
   - Institutional tagline

**Key HTML Features**:
- Semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Accessibility: ARIA labels on social links
- SEO: Meta description, keywords, proper title
- Language: `lang="es"` attribute

---

### CSS Architecture (`css/styles.css`)

**Structure**:
```
1. CSS Variables (lines 2-12)
2. Reset & Base Styles (lines 14-25)
3. Header & Navigation (lines 27-68)
4. Hero Section (lines 70-109)
5. Generic Sections (lines 111-123)
6. About Section (lines 125-158)
7. Services Section (lines 160-195)
8. Contact Section (lines 197-260)
9. Footer (lines 262-291)
10. Keyframe Animations (lines 293-303)
11. Scroll Effects (lines 305-494)
12. Responsive Media Queries (lines 496-565)
```

**CSS Variables** (Design System):
```css
--primary-color: #2563eb    (Blue)
--secondary-color: #1e40af  (Dark Blue)
--accent-color: #3b82f6     (Light Blue)
--text-dark: #1f2937        (Almost Black)
--text-light: #6b7280       (Gray)
--bg-light: #f9fafb         (Off White)
--white: #ffffff
--shadow: 0 4px 6px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 25px rgba(0,0,0,0.15)
```

**Key CSS Techniques**:
- CSS Grid & Flexbox for layouts
- CSS Custom Properties for theming
- Transitions for smooth interactions
- Keyframe animations (@keyframes fadeInUp, slideIn, pulse, slideInScale)
- Backdrop-filter for glassmorphism effect
- `will-change` for performance optimization
- Media queries for responsive design (768px, 480px breakpoints)

---

### JavaScript Architecture (`js/main.js`)

**Module Structure** (10 functional sections):

1. **Smooth Scroll Navigation** (lines 8-42)
   - Intercepts anchor link clicks
   - Smooth scrolling with header offset compensation
   - Handles "#" links (scroll to top)

2. **Dynamic Header** (lines 47-68)
   - Adds 'scrolled' class after 50px scroll
   - Auto-hide on scroll down (>200px)
   - Auto-show on scroll up
   - Glassmorphism effect when scrolled

3. **Reveal on Scroll Animations** (lines 73-106)
   - Intersection Observer API implementation
   - Threshold: 15% visibility
   - Staggered delays (0.1s increments)
   - Targets: section-title, service-card, about-text, about-image, contact-form, hero elements

4. **Scroll to Top Button** (lines 111-133)
   - Dynamically created button
   - Appears after 300px scroll
   - Smooth scroll to top on click
   - Responsive sizing

5. **Active Navigation** (lines 138-159)
   - Highlights current section in nav
   - Updates on scroll (150px offset)
   - Animated underline indicator

6. **Parallax Effect** (lines 164-176)
   - Hero section parallax (0.5x speed)
   - Fade out effect on scroll
   - Disabled on mobile (CSS)

7. **Animated Counters** (lines 181-211)
   - Prepared for data-counter attributes
   - 60 FPS animation
   - Intersection Observer triggered
   - Not currently used in HTML

8. **Form Handling** (lines 216-259)
   - Prevents default form submission
   - Shows animated confirmation message
   - Auto-resets after 5 seconds
   - Smooth transitions

9. **Lazy Image Loading** (lines 264-279)
   - Intersection Observer for images
   - data-src attribute support
   - Fade-in on load
   - Not currently used (no images yet)

10. **Console Branding** (lines 309-310)
    - Welcome message in console
    - Developer-friendly

**JavaScript Patterns Used**:
- Event Delegation
- Intersection Observer API (modern, performant)
- Promise-based async operations
- Functional programming (callbacks, closures)
- DOM manipulation (createElement, classList, style)
- No jQuery or external libraries

---

## 🎨 UI/UX Design Patterns

### Color Scheme
**Primary Palette**:
- Primary: Blue (#2563eb) - Trust, professionalism
- Secondary: Dark Blue (#1e40af) - Authority
- Accent: Light Blue (#3b82f6) - Interactivity
- Text: Dark Gray (#1f2937) - Readability
- Background: Off-white (#f9fafb) - Softness

**Usage**:
- Primary: Links, buttons, headers, icons
- Secondary: Hover states, footer
- Background: Alternating sections

### Animation Philosophy
- **Subtle & Professional**: No flashy or distracting animations
- **Performance-First**: 60 FPS, GPU-accelerated
- **Progressive**: Works without JS, enhanced with JS
- **Accessible**: Respects user preferences (can add prefers-reduced-motion)

### Responsive Breakpoints
```css
Desktop:   > 768px  (default)
Tablet:    ≤ 768px  (single column layouts, adjusted navigation)
Mobile:    ≤ 480px  (stacked nav, reduced padding, smaller fonts)
```

---

## 🔧 Development Workflow

### Local Development

**Starting a Development Server**:
```bash
# Recommended options (in order of preference):
python3 -m http.server 8000          # Python 3
python -m SimpleHTTPServer 8000      # Python 2
npx http-server -p 8000              # Node.js
php -S localhost:8000                # PHP

# Then open: http://localhost:8000
```

**Direct File Access** (not recommended):
```bash
# Browser compatibility issues may arise
open index.html                      # macOS
xdg-open index.html                  # Linux
start index.html                     # Windows
```

### File Editing Workflow
1. Edit HTML/CSS/JS files directly
2. Save changes
3. Refresh browser (hard refresh: Ctrl+F5 / Cmd+Shift+R)
4. No build step required

### Testing Checklist
- [ ] All navigation links work smoothly
- [ ] Header hides/shows correctly on scroll
- [ ] Reveal animations trigger at proper viewport position
- [ ] Active navigation updates correctly
- [ ] Scroll-to-top button appears after 300px
- [ ] Form submission shows confirmation
- [ ] All effects work on mobile devices
- [ ] No console errors in browser DevTools
- [ ] Page loads in < 2 seconds
- [ ] Animations run at 60 FPS

### Browser Testing
**Target Browsers**:
- Chrome 51+ (primary)
- Firefox 55+
- Safari 12.1+
- Edge 79+
- Opera 38+

**Known Limitations**:
- Intersection Observer not supported in IE11 (graceful degradation)
- Backdrop-filter not supported in older browsers (fallback to solid background)

---

## 🚀 Deployment

### Deployment Options

**1. GitHub Pages** (Recommended)
```bash
# Settings → Pages → Deploy from branch: main → root directory
# URL: https://ifard-sa.github.io/website/
```

**2. Netlify**
```yaml
Build command: (none)
Publish directory: /
Auto-deploy: Yes (on git push)
```

**3. Vercel**
```yaml
Framework: Other
Root Directory: ./
Output Directory: (none)
```

### Pre-Deployment Checklist
- [ ] Update meta tags (description, keywords, og:image)
- [ ] Add favicon.ico
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Validate HTML (W3C Validator)
- [ ] Optimize images (if added)
- [ ] Check all links work
- [ ] Verify form handling (backend integration?)
- [ ] Add Google Analytics (if needed)
- [ ] Configure custom domain (if applicable)

---

## 🤖 AI Assistant Guidelines

### When Working With This Codebase

**DO**:
✅ Read existing files before editing (required for Edit/Write tools)
✅ Maintain Spanish language for content
✅ Preserve CSS variable naming and color scheme
✅ Keep JavaScript vanilla (no external libraries)
✅ Follow semantic HTML5 structure
✅ Test changes in local development server
✅ Maintain responsive design patterns
✅ Add comments to complex code sections
✅ Update documentation when adding features
✅ Check browser compatibility for new features
✅ Preserve accessibility features (ARIA labels, semantic HTML)

**DON'T**:
❌ Add build tools without explicit request
❌ Introduce external dependencies (jQuery, React, etc.)
❌ Change language to English (content is Spanish)
❌ Remove or break scroll effects
❌ Ignore responsive design
❌ Create files without user request
❌ Add emoji to code files (unless user requests)
❌ Overcomplicate simple changes
❌ Break existing functionality
❌ Ignore performance considerations

### Common Task Patterns

**Adding a New Section**:
1. Add HTML section with semantic tags
2. Add CSS styles (use existing variables)
3. Add to navigation menu
4. Add reveal animation class
5. Update active navigation logic
6. Test scroll behavior

**Modifying Colors**:
1. Update CSS variables in `:root`
2. Changes propagate automatically
3. Test contrast for accessibility

**Adding Images**:
1. Create `images/` directory
2. Add optimized images (WebP preferred)
3. Use lazy loading: `<img data-src="..." alt="...">`
4. Ensure alt text for accessibility

**Adding New Page**:
1. Create new HTML file (e.g., `about.html`)
2. Copy header/footer from index.html
3. Update navigation links across all pages
4. Maintain consistent styling
5. Test all internal links

---

## 📚 Technical Documentation

### Files & Their Roles

| File | Purpose | Size | Lines | Complexity |
|------|---------|------|-------|------------|
| `index.html` | Main webpage structure | ~6.5KB | 155 | Low |
| `css/styles.css` | All styling & animations | ~15KB | 566 | Medium |
| `js/main.js` | Interactive features | ~10KB | 311 | Medium |
| `CLAUDE.md` | Human-readable guide | ~7KB | - | - |
| `SUNDAYS.md` | AI infrastructure guide (this file) | ~20KB | - | - |
| `EFECTOS-SCROLL.md` | Scroll effects documentation | ~9KB | - | - |
| `TEST-EFECTOS.html` | Testing page | ~8KB | 205 | Low |

### Key Code Sections

**Navigation Smooth Scroll** (js/main.js:8-42):
```javascript
// Intercepts all anchor links, provides smooth scrolling
// Handles header offset (80px) for fixed navigation
// Special case for "#" (scroll to top)
```

**Intersection Observer Setup** (js/main.js:73-106):
```javascript
// Modern API for detecting element visibility
// Threshold: 15% (element must be 15% visible)
// Staggered animations with 0.1s delay between elements
// More performant than scroll event listeners
```

**Dynamic Header** (js/main.js:47-68):
```javascript
// Tracks scroll direction (up/down)
// Hides header on scroll down (>200px)
// Shows header on scroll up
// Adds glassmorphism effect after 50px
```

**Form Handling** (js/main.js:216-259):
```javascript
// Prevents actual form submission (no backend yet)
// Shows animated confirmation message
// Auto-resets form after 5 seconds
// Smooth transitions (opacity, display changes)
```

### CSS Architecture Insights

**Scroll Effects Section** (css/styles.css:305-494):
- Header transitions and scrolled state
- Reveal animations (up, left, right)
- Scroll-to-top button styling
- Form confirmation styles
- Parallax setup
- Performance optimizations (will-change)
- Keyframe animations

**Responsive Design** (css/styles.css:496-565):
- Mobile: Single column layouts, reduced fonts, adjusted spacing
- Tablet: Adjusted grid columns, smaller touch targets
- Performance: Disables parallax on mobile devices

---

## 🔐 Security & Best Practices

### Current Security Posture
- ✅ No server-side code (reduced attack surface)
- ✅ No external dependencies (no supply chain risks)
- ✅ No user authentication (no credential management)
- ✅ No database (no SQL injection risks)
- ⚠️ Form submission client-side only (needs backend for production)
- ⚠️ No HTTPS enforcement (handled by hosting provider)

### Recommendations for Production
1. **Form Handling**: Implement backend (PHP, Node.js, or form service like Formspree)
2. **Content Security Policy**: Add CSP headers
3. **HTTPS**: Ensure SSL/TLS certificate
4. **Input Validation**: Add form validation (both client and server)
5. **Rate Limiting**: If adding backend, implement rate limiting
6. **CORS Policy**: If adding API calls, configure CORS properly

---

## 🎯 Common AI Assistant Scenarios

### Scenario 1: User Wants to Add Images
```markdown
Steps:
1. Create `images/` directory: mkdir images
2. Add optimized images (compress with tools like TinyPNG)
3. Update HTML with lazy loading:
   <img data-src="images/logo.png" alt="IFARD-SA Logo">
4. Verify lazy loading JS is active (already in main.js:264-279)
5. Test image loading in browser
```

### Scenario 2: User Wants to Change Colors
```markdown
Steps:
1. Read css/styles.css (lines 2-12)
2. Update CSS variables in :root selector
3. No need to search/replace throughout file
4. Test contrast for accessibility (WCAG AA: 4.5:1 ratio)
5. Verify on both light and dark sections
```

### Scenario 3: User Wants to Add a New Service Card
```markdown
Steps:
1. Read index.html (find #servicios section)
2. Copy existing .service-card structure
3. Update: emoji icon, title (h3), description (p)
4. No CSS changes needed (grid auto-adapts)
5. Verify responsive layout (test on mobile viewport)
```

### Scenario 4: User Wants to Modify Animation Speed
```markdown
Steps:
1. For CSS animations: Edit css/styles.css
   - Find transition properties (e.g., line 350)
   - Adjust duration (0.6s → 0.4s for faster)
2. For JS animations: Edit js/main.js
   - Find transitionDelay (line 103)
   - Adjust increment (0.1s → 0.05s for faster)
3. Test in browser with slow motion (DevTools Performance)
```

### Scenario 5: User Reports Scroll Effect Not Working
```markdown
Debugging Steps:
1. Open browser DevTools Console (F12)
2. Check for JavaScript errors
3. Verify js/main.js is loaded: View → Source
4. Check Intersection Observer support:
   console.log('IntersectionObserver' in window)
5. Verify CSS classes exist: .reveal, .reveal-visible
6. Check element has reveal class: Inspect element
7. Verify observer is observing: Add console.log in callback
```

### Scenario 6: User Wants to Deploy to GitHub Pages
```markdown
Steps:
1. Ensure repository is on GitHub
2. Go to repository Settings
3. Click "Pages" in sidebar
4. Source: Deploy from a branch
5. Branch: main, Folder: / (root)
6. Click "Save"
7. Wait 2-3 minutes for deployment
8. URL will be: https://ifard-sa.github.io/website/
9. Test deployed site thoroughly
```

---

## 📈 Performance Metrics

### Current Performance Profile
**File Sizes**:
- HTML: ~6.5KB (gzipped: ~2KB)
- CSS: ~15KB (gzipped: ~4KB)
- JS: ~10KB (gzipped: ~3KB)
- Total: ~32KB (~9KB gzipped)

**Load Time Expectations**:
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2s
- Time to Interactive (TTI): < 2s
- Cumulative Layout Shift (CLS): < 0.1
- First Input Delay (FID): < 100ms

**Optimization Techniques Used**:
- Intersection Observer (vs scroll event listeners)
- CSS `will-change` for animations
- GPU-accelerated transforms (translateY, translateX)
- Minimal DOM manipulation
- No render-blocking resources
- Lazy loading for images (prepared)
- Smooth scroll with native API

### Performance Monitoring
```javascript
// Add to console for performance testing
console.time('Page Load');
window.addEventListener('load', () => {
  console.timeEnd('Page Load');
  console.log('Performance:', performance.timing);
});
```

---

## 🔄 Version Control & Git Workflow

### Repository Information
- **Remote**: https://github.com/IFARD-SA/website.git
- **Main Branch**: `main`
- **Recent Activity**: Scroll effects implementation (PR #5 merged)

### Recommended Git Workflow
```bash
# 1. Check status
git status

# 2. Create feature branch
git checkout -b feature/descriptive-name

# 3. Make changes, stage files
git add .

# 4. Commit with descriptive message
git commit -m "Add: Brief description of changes

Detailed explanation if needed.

- Bullet point 1
- Bullet point 2"

# 5. Push to remote
git push -u origin feature/descriptive-name

# 6. Create Pull Request on GitHub
# 7. Review, merge, delete branch
```

### Commit Message Convention
```
Type: Short description (50 chars max)

Longer description if needed (wrap at 72 chars).
Explain WHAT and WHY, not HOW.

- Use bullet points for lists
- Reference issues: Fixes #123
- Use imperative mood: "Add feature" not "Added feature"

Types: Add, Update, Fix, Remove, Refactor, Docs, Style, Test
```

---

## 🧪 Testing & Quality Assurance

### Manual Testing Checklist

**Functional Testing**:
- [ ] All navigation links scroll to correct sections
- [ ] Header shows/hides based on scroll direction
- [ ] Scroll-to-top button appears at 300px and works
- [ ] Form submission displays confirmation message
- [ ] Form resets after 5 seconds
- [ ] Active navigation updates on scroll
- [ ] All hover effects work (buttons, links, cards)

**Visual Testing**:
- [ ] Animations are smooth (no jank)
- [ ] Colors match design system
- [ ] Typography is readable
- [ ] Spacing is consistent
- [ ] No horizontal scrollbar
- [ ] Images (when added) load properly

**Responsive Testing**:
- [ ] Test on Chrome DevTools device emulator
- [ ] Test on real mobile device (iOS/Android)
- [ ] Test on tablet (iPad, Android tablet)
- [ ] Test landscape and portrait orientations
- [ ] Verify touch targets are adequate (44x44px min)

**Browser Testing**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, macOS/iOS)
- [ ] Edge (latest)
- [ ] Test private/incognito mode

**Accessibility Testing**:
- [ ] Tab navigation works correctly
- [ ] Focus indicators are visible
- [ ] ARIA labels are present
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Images have alt text (when added)
- [ ] Form labels are properly associated

**Performance Testing**:
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Check Network tab (all resources load)
- [ ] Monitor Console (no errors)
- [ ] Test on slow 3G connection
- [ ] Verify animations run at 60 FPS (Performance tab)

### Validation Tools
```bash
# HTML Validation (if html5validator installed)
html5validator --root . --also-check-css

# Or use online validator
# https://validator.w3.org/#validate_by_upload

# CSS Validation
# https://jigsaw.w3.org/css-validator/

# JavaScript Linting (if ESLint available)
eslint js/main.js
```

---

## 🚨 Troubleshooting Guide

### Common Issues & Solutions

**Issue: Scroll effects not working**
```
Symptoms: Elements don't animate on scroll
Diagnosis:
  1. Check browser console for errors (F12)
  2. Verify js/main.js is loaded (Network tab)
  3. Check Intersection Observer support
Solutions:
  - Clear browser cache (Ctrl+Shift+Del)
  - Ensure browser is modern (Chrome 51+)
  - Verify .reveal class is added to elements
  - Check CSS is loaded (styles.css in Sources)
```

**Issue: Header not hiding on scroll**
```
Symptoms: Header stays visible when scrolling down
Diagnosis:
  1. Check if JavaScript is enabled
  2. Look for console errors
  3. Verify header element exists
Solutions:
  - Refresh page (hard refresh: Ctrl+F5)
  - Check js/main.js lines 47-68 are intact
  - Ensure no conflicting CSS (check for !important)
```

**Issue: Form doesn't show confirmation**
```
Symptoms: Submit button doesn't trigger confirmation
Diagnosis:
  1. Check console for JavaScript errors
  2. Verify .contact-form exists in HTML
  3. Check form event listener
Solutions:
  - Ensure js/main.js is loaded
  - Verify form class is "contact-form"
  - Check browser allows preventDefault()
```

**Issue: Mobile layout broken**
```
Symptoms: Layout looks wrong on mobile devices
Diagnosis:
  1. Check viewport meta tag in <head>
  2. Verify media queries in CSS
  3. Test in responsive mode (DevTools)
Solutions:
  - Ensure viewport meta tag:
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  - Check CSS media queries (lines 497-565)
  - Test on actual device, not just emulator
```

**Issue: Animations are laggy**
```
Symptoms: Scrolling is janky, animations stutter
Diagnosis:
  1. Open Performance tab in DevTools
  2. Record while scrolling
  3. Check for long tasks (>50ms)
Solutions:
  - Disable parallax on low-end devices
  - Reduce number of animated elements
  - Ensure will-change is used for animated properties
  - Check for other processes using CPU/GPU
```

---

## 🔮 Future Enhancements (Planned)

### Short-term (High Priority)
- [ ] Add real institutional images
- [ ] Implement backend for contact form
- [ ] Add favicon and app icons
- [ ] Configure custom domain
- [ ] Add Google Analytics or privacy-friendly alternative
- [ ] Create robots.txt and sitemap.xml
- [ ] Add Open Graph meta tags for social sharing

### Medium-term (Medium Priority)
- [ ] Create additional pages (about, services detail, team)
- [ ] Implement hamburger menu for mobile
- [ ] Add dark mode toggle
- [ ] Include testimonials/reviews section
- [ ] Add blog or news section
- [ ] Implement course catalog with filtering
- [ ] Add multi-language support (Spanish/English)

### Long-term (Low Priority)
- [ ] Integrate with LMS (Learning Management System)
- [ ] Add student portal/login area
- [ ] Implement online course enrollment
- [ ] Add payment integration
- [ ] Create admin dashboard
- [ ] Add live chat support
- [ ] Implement progressive web app (PWA) features
- [ ] Add animations library (AOS, ScrollReveal alternative)

---

## 📖 Additional Resources

### Related Documentation Files
- **CLAUDE.md**: Human-readable guide for AI assistants
- **EFECTOS-SCROLL.md**: Detailed scroll effects documentation
- **TEST-EFECTOS.html**: Visual testing page for scroll effects

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Tools & Validators
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Can I Use](https://caniuse.com/) - Browser compatibility checker

---

## 🤝 Contributing Guidelines (for AI Assistants)

### Before Making Changes
1. **Read existing code** - Use Read tool to understand current implementation
2. **Check for patterns** - Follow existing coding style and conventions
3. **Understand context** - Review related files (HTML, CSS, JS together)
4. **Consider impact** - Think about responsive design, performance, accessibility

### While Making Changes
1. **Preserve functionality** - Don't break existing features
2. **Maintain consistency** - Use existing variable names, class conventions
3. **Add comments** - Explain complex logic in Spanish or English
4. **Test incrementally** - Suggest testing after each significant change
5. **Think responsive** - Consider mobile, tablet, desktop views

### After Making Changes
1. **Suggest testing** - Provide specific test cases for user
2. **Update documentation** - Modify relevant .md files if needed
3. **Explain changes** - Summarize what was changed and why
4. **Provide next steps** - Suggest follow-up actions or improvements

---

## 🎓 Learning Resources for AI Context

### JavaScript Concepts Used
- **Event Listeners**: addEventListener for user interactions
- **DOM Manipulation**: querySelector, classList, createElement
- **Intersection Observer**: Modern API for scroll-triggered animations
- **Closures**: Used in event handlers and callbacks
- **Arrow Functions**: ES6 syntax throughout
- **Template Literals**: For dynamic HTML generation
- **Async Operations**: setTimeout for delayed actions

### CSS Concepts Used
- **Custom Properties**: CSS variables for theming
- **Flexbox**: One-dimensional layouts (nav, footer)
- **Grid**: Two-dimensional layouts (services, about)
- **Transitions**: Smooth property changes
- **Animations**: Keyframe animations for complex effects
- **Transform**: GPU-accelerated animations (translateY, translateX)
- **Pseudo-elements**: ::after for decorative elements
- **Media Queries**: Responsive breakpoints

### HTML Concepts Used
- **Semantic Elements**: header, nav, section, footer, article
- **Form Elements**: input, textarea, label, button
- **Accessibility**: ARIA labels, alt attributes, semantic structure
- **Meta Tags**: charset, viewport, description, keywords
- **Linking Resources**: link rel="stylesheet", script src

---

## 📞 Support & Maintenance

### When User Needs Help
1. **Clarify the request** - Ask specific questions about desired outcome
2. **Assess scope** - Is it a simple fix or major feature?
3. **Explain approach** - Outline steps before implementing
4. **Show examples** - Provide code snippets with explanations
5. **Test together** - Guide user through testing process

### Maintenance Tasks
- **Regular updates**: Check for outdated practices or deprecated APIs
- **Security**: Monitor for XSS vulnerabilities if adding dynamic content
- **Performance**: Profile and optimize if page becomes slow
- **Accessibility**: Audit with tools like axe DevTools
- **Content updates**: Help user add/modify text, images, links

### Emergency Fixes
If something breaks:
1. **Check console** - JavaScript errors are shown here
2. **Review recent changes** - Use git log to see what changed
3. **Revert if needed** - git revert to undo problematic commit
4. **Test in isolation** - Comment out sections to isolate issue
5. **Document solution** - Update this file with new troubleshooting info

---

## 🏁 Quick Start for New AI Assistants

### First Time Working With This Repo?
1. **Read this file** (SUNDAYS.md) - You're doing it! ✓
2. **Read CLAUDE.md** - Understand user-facing guidelines
3. **Review index.html** - See overall structure (155 lines)
4. **Skim css/styles.css** - Understand styling approach (566 lines)
5. **Understand js/main.js** - See interactive features (311 lines)
6. **Check EFECTOS-SCROLL.md** - Learn about scroll effects implementation

### Ready to Help the User?
- ✅ Use existing patterns and conventions
- ✅ Test changes in local server (python3 -m http.server 8000)
- ✅ Keep changes simple and focused
- ✅ Explain what you're doing and why
- ✅ Suggest testing and next steps

### Remember:
- 🇪🇸 Content is in Spanish
- 📱 Must work on mobile
- ⚡ Performance matters
- ♿ Accessibility is important
- 🎨 Follow design system (CSS variables)
- 🚫 No external dependencies

---

## 📊 Metrics & KPIs

### Code Quality Metrics
- **Lines of Code**: ~1,232 (HTML: 155, CSS: 566, JS: 311, Docs: 200+)
- **File Count**: 7 core files + git repo
- **Dependencies**: 0 (fully vanilla)
- **Bundle Size**: ~32KB (~9KB gzipped)
- **Cyclomatic Complexity**: Low (mostly linear code)

### Performance KPIs
- **Load Time**: < 2 seconds target
- **First Contentful Paint**: < 1 second
- **Time to Interactive**: < 2 seconds
- **Lighthouse Score**: 90+ target (Performance, Accessibility, Best Practices, SEO)
- **Animation FPS**: 60 (smooth animations)

### User Experience Metrics
- **Bounce Rate**: Track after deployment
- **Time on Site**: Track after deployment
- **Form Submissions**: Track after backend integration
- **Mobile vs Desktop**: Track user device distribution
- **Browser Usage**: Track to inform compatibility decisions

---

## 🔑 Key Takeaways for AI Assistants

1. **Simplicity First**: This is a static site - keep it simple
2. **No Build Tools**: Changes are immediate, no compilation needed
3. **Vanilla JavaScript**: No jQuery, React, or other frameworks
4. **Performance Matters**: Use modern APIs (Intersection Observer), optimize animations
5. **Responsive Design**: Always consider mobile, tablet, desktop
6. **Spanish Content**: Keep all user-facing text in Spanish
7. **Accessibility**: Maintain semantic HTML and ARIA labels
8. **Git Workflow**: Use branches for features, descriptive commits
9. **Testing**: Always suggest testing after changes
10. **Documentation**: Keep .md files updated with major changes

---

## 📝 Document Metadata

- **Created**: 2025
- **Last Updated**: 2025
- **Version**: 1.0
- **Maintained By**: AI Assistants + IFARD-SA Team
- **Purpose**: AI infrastructure and codebase understanding
- **Target Audience**: AI assistants, Genium AI infrastructure, automated tools

---

## 🙏 Acknowledgments

This documentation was created to facilitate AI assistant understanding and improve collaboration between human developers and AI tools. Special thanks to the Genium AI infrastructure team for enabling comprehensive codebase analysis.

---

**End of SUNDAYS.md**

> **For Human Developers**: While this file is optimized for AI understanding, it serves as comprehensive technical documentation. For a more human-friendly guide, see CLAUDE.md.

> **For AI Assistants**: This document provides deep context. Always read relevant sections before making changes. When in doubt, ask the user for clarification.
