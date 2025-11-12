# SUNDAYS.md - AI Infrastructure Guide for IFARD-SA Website

## 🎯 Project Overview

**Project Name:** IFARD-SA Website
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Type:** Static Website
**Primary Language:** HTML, CSS, JavaScript (Vanilla)
**Repository:** https://github.com/IFARD-SA/website
**Language:** Spanish (es)
**Purpose:** Professional website for educational institution

## 📊 Project Maturity

**Status:** Active Development
**Version:** Early Stage (Post-MVP)
**Last Update:** November 2025
**Deployment:** Not yet deployed (ready for GitHub Pages/Netlify/Vercel)

### Current State
- ✅ Complete landing page with 4 sections (Hero, About, Services, Contact)
- ✅ Professional CSS styling with modern design system
- ✅ Advanced JavaScript scroll effects and animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Form handling with confirmation messages
- ❌ No backend integration
- ❌ No build process or package managers
- ❌ No real images (placeholders only)
- ❌ No deployment configuration

## 🏗️ Architecture

### Technology Stack

```yaml
Frontend:
  - HTML5: Semantic markup, accessibility-focused
  - CSS3: Custom properties, Flexbox, Grid, animations
  - JavaScript: Vanilla JS (ES6+), no frameworks or libraries

APIs Used:
  - Intersection Observer API: For scroll-triggered animations
  - Scroll API: Smooth scrolling behavior

Build Tools: None (pure static site)
Dependencies: None
Package Manager: None
```

### File Structure

```
website/
├── index.html              # Main landing page (155 lines)
├── css/
│   └── styles.css         # Complete stylesheet (566 lines)
├── js/
│   └── main.js            # All JavaScript effects (311 lines)
├── CLAUDE.md              # AI assistant guide (existing)
├── SUNDAYS.md             # This file - Genium AI infrastructure guide
├── EFECTOS-SCROLL.md      # Scroll effects documentation
├── TEST-EFECTOS.html      # Testing/validation page
└── .git/                  # Git repository
```

### Design System

**Color Palette:**
- Primary: `#2563eb` (Blue)
- Secondary: `#1e40af` (Dark Blue)
- Accent: `#3b82f6` (Light Blue)
- Text Dark: `#1f2937`
- Text Light: `#6b7280`
- Background: `#f9fafb`
- White: `#ffffff`

**Typography:**
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Base Line Height: 1.6

**Spacing & Layout:**
- Max Width: 1200px (container)
- Section Padding: 80px vertical, 2rem horizontal
- Grid Gap: 2-3rem

## 🎨 Features & Components

### Implemented Features

1. **Navigation System**
   - Fixed header with logo and navigation links
   - Active section highlighting
   - Auto-hide on scroll down, show on scroll up
   - Glassmorphism effect when scrolled

2. **Hero Section**
   - Gradient background
   - CTA button with pulse animation
   - Parallax effect (desktop only)
   - Fade-in animations

3. **About Section**
   - Two-column grid layout (text + image placeholder)
   - Mission statement
   - Institutional information

4. **Services Section**
   - 6 service cards in responsive grid
   - Icons (emoji placeholders)
   - Hover effects with elevation
   - Categories: Formación, Cursos, Consultoría, Online, Desarrollo, Certificaciones

5. **Contact Section**
   - Contact form (4 fields: nombre, email, telefono, mensaje)
   - Client-side validation
   - Animated confirmation message
   - Auto-reset after 5 seconds
   - **Note:** No backend - form submission is simulated

6. **Footer**
   - Social media links (emoji placeholders)
   - Copyright information
   - Centered layout

7. **Interactive Effects**
   - Smooth scroll navigation
   - Reveal on scroll animations (fade-in + translate)
   - Scroll-to-top button (appears after 300px)
   - Lazy loading system (prepared, no images yet)
   - Counter animations (prepared, not used yet)
   - Optional typing effect (commented out)

## 🔧 Development Workflow

### Local Development

**No build process required** - Direct file editing

```bash
# Start local server (choose one):
python3 -m http.server 8000
python -m SimpleHTTPServer 8000
npx http-server -p 8000
php -S localhost:8000

# Open browser:
# http://localhost:8000/index.html
```

### Testing

```bash
# View test page:
# http://localhost:8000/TEST-EFECTOS.html

# Manual testing checklist in TEST-EFECTOS.html:
# - Smooth scroll between sections
# - Header hide/show behavior
# - Reveal animations on scroll
# - Active navigation highlighting
# - Scroll-to-top button
# - Parallax effect
# - Form submission animation
# - Mobile responsiveness
```

### Git Workflow

```bash
# Recent commits:
# - cf3e459: Merge PR #5 (scroll effects implementation)

# Standard workflow:
git status
git add .
git commit -m "Descriptive message"
git push origin main
```

## 🤖 AI Assistant Guidelines

### Code Modification Rules

1. **Direct Editing Preferred**
   - Use Edit tool for existing files
   - No build step means changes are immediate
   - Always preserve existing functionality

2. **Styling Approach**
   - Maintain CSS custom properties (variables)
   - Keep mobile-first responsive design
   - Preserve existing animation system
   - Use existing color palette unless requested otherwise

3. **JavaScript Patterns**
   - Keep vanilla JS (no frameworks)
   - Maintain existing Intersection Observer patterns
   - Preserve performance optimizations
   - Comment code sections clearly (existing pattern)

4. **Content Language**
   - All content is in Spanish
   - Maintain formal/professional tone
   - Use proper Spanish grammar and accents

### Common AI Tasks

#### 1. Adding New Sections

```html
<!-- Pattern to follow: -->
<section id="new-section">
    <h2 class="section-title">Título de la Sección</h2>
    <div class="section-content">
        <!-- Content here -->
    </div>
</section>
```

Add corresponding CSS and navigation link.

#### 2. Adding Images

```html
<!-- Use lazy loading pattern: -->
<img data-src="images/photo.jpg"
     alt="Descriptive text in Spanish"
     class="lazy">
```

JavaScript lazy loading is already implemented.

#### 3. Adding Service Cards

```html
<!-- Follow existing pattern in services section: -->
<div class="service-card">
    <div class="service-icon">📚</div>
    <h3>Título del Servicio</h3>
    <p>Descripción del servicio...</p>
</div>
```

#### 4. Modifying Animations

**CSS (styles.css):**
```css
/* Adjust timing: */
.reveal {
    transition: opacity 0.6s ease, transform 0.6s ease;
}
```

**JavaScript (main.js):**
```javascript
// Adjust threshold:
const observerOptions = {
    threshold: 0.15, // 0.0 to 1.0
    rootMargin: '0px 0px -50px 0px'
};
```

#### 5. Form Integration

Current form is client-side only. To add backend:

```javascript
// In main.js, replace form handler around line 219:
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    // Add your backend endpoint:
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });

    // Handle response...
});
```

### Performance Considerations

**Optimizations Already Implemented:**
- Intersection Observer API (efficient scroll detection)
- CSS `will-change` for animated elements
- Parallax disabled on mobile devices
- GPU-accelerated CSS animations
- No external dependencies

**When Adding Features:**
- Test on mobile devices
- Check browser console for errors
- Validate HTML5 compliance
- Ensure animations run at 60 FPS
- Keep total page size under 500KB

### Accessibility Best Practices

**Already Implemented:**
- Semantic HTML5 elements
- ARIA labels on buttons
- Keyboard navigation support
- Sufficient color contrast

**When Adding Features:**
- Add `alt` text to all images
- Use proper heading hierarchy
- Ensure form labels are associated
- Test with keyboard-only navigation
- Consider `prefers-reduced-motion` media query

## 📝 Content Management

### Current Content Structure

**Sections:**
1. Hero: Title + description + CTA
2. About: Mission + 3 paragraphs + image placeholder
3. Services: 6 cards (Formación, Cursos, Consultoría, Online, Desarrollo, Certificaciones)
4. Contact: Form with 4 fields
5. Footer: Social links + copyright

### Content Update Guidelines

**Text Content:**
- All text in Spanish
- Professional, formal tone
- Educational/institutional context
- Clear, concise messaging

**Placeholder Content:**
- Images: Blue boxes with text "Espacio para imagen institucional"
- Social media: Emoji icons (need replacement with actual icons/links)
- Services: Emoji icons (consider replacing with SVG or font icons)

### SEO Considerations

**Already Implemented:**
```html
<meta name="description" content="IFARD-SA - Instituto de Formación y Desarrollo">
<meta name="keywords" content="IFARD-SA, formación, desarrollo, educación">
<title>IFARD-SA - Instituto de Formación y Desarrollo</title>
```

**Missing (recommended to add):**
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card metadata
- Structured data (Schema.org)
- robots.txt
- sitemap.xml
- Favicon

## 🚀 Deployment

### Deployment Options

**1. GitHub Pages (Recommended)**
```bash
# Repository Settings → Pages → Deploy from main branch
# Site will be at: https://ifard-sa.github.io/website/
```

**2. Netlify**
```yaml
# netlify.toml (optional)
[build]
  publish = "."
```

**3. Vercel**
```json
{
  "buildCommand": null,
  "outputDirectory": ".",
  "framework": null
}
```

### Pre-Deployment Checklist

- [ ] Replace placeholder images with real images
- [ ] Update social media links with actual URLs
- [ ] Add favicon and app icons
- [ ] Validate HTML/CSS with W3C validator
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Check console for errors
- [ ] Optimize images (compress, convert to WebP)
- [ ] Add Open Graph and Twitter Card metadata
- [ ] Create robots.txt and sitemap.xml
- [ ] Set up form backend (or use service like Formspree)
- [ ] Configure custom domain (if applicable)

## 🔍 Troubleshooting

### Common Issues

**1. Animations Not Working**
- Check console for JavaScript errors
- Verify `js/main.js` is loaded correctly
- Ensure CSS `styles.css` is loaded
- Check browser compatibility (Chrome 51+, Firefox 55+, Safari 12.1+)

**2. Scroll Not Smooth**
- Fallback exists for older browsers
- Check `scroll-behavior: smooth` in CSS (line 493)
- JavaScript provides `window.scrollTo({ behavior: 'smooth' })`

**3. Header Not Hiding**
- Scroll must exceed 200px (line 61 in main.js)
- Check `transform` property is not overridden

**4. Form Not Submitting**
- By design - no backend configured
- Shows confirmation message only
- To add backend, modify event handler in main.js (line 219)

**5. Images Not Loading**
- Currently no images in project
- When adding images, use relative paths
- Ensure file paths match case-sensitive systems

**6. Mobile Layout Issues**
- Check responsive breakpoints: 768px and 480px
- Test with browser dev tools device emulation
- Verify viewport meta tag is present

## 📚 Documentation

### Existing Documentation

1. **CLAUDE.md** - General AI assistant guide
   - Project overview and structure
   - Development commands
   - Best practices for HTML/CSS/JS
   - Deployment instructions

2. **EFECTOS-SCROLL.md** - Scroll effects documentation
   - Complete list of 10 implemented effects
   - Customization instructions
   - Performance metrics
   - Browser compatibility
   - Troubleshooting guide

3. **TEST-EFECTOS.html** - Interactive testing page
   - Implementation status
   - Visual checklist
   - Testing instructions
   - Quick links

4. **SUNDAYS.md** - This file
   - AI infrastructure guide
   - Genium AI specific instructions
   - Comprehensive codebase reference

### When to Update Documentation

- Add new features or sections
- Change color scheme or design system
- Modify JavaScript behavior
- Update deployment configuration
- Add external dependencies
- Change content structure

## 🎯 Future Enhancements

### Suggested Improvements (Priority Order)

**High Priority:**
1. Add real images and logos
2. Integrate form backend (Formspree, EmailJS, or custom)
3. Replace emoji icons with professional SVG/font icons
4. Add favicon and app icons
5. Deploy to production

**Medium Priority:**
6. Implement mobile hamburger menu
7. Add dark mode toggle
8. Create additional pages (about-full.html, services-detail.html)
9. Add image gallery/carousel
10. Implement blog section

**Low Priority:**
11. Add preloader animation
12. Implement scroll progress indicator
13. Add background particles or animations
14. Create Easter eggs
15. Add multi-language support (English/Spanish)

### Not Recommended (Keep Simple)

- ❌ Don't add heavy frameworks (React, Vue, Angular)
- ❌ Don't add unnecessary dependencies
- ❌ Don't over-complicate the build process
- ❌ Don't add too many animations (performance)
- ❌ Don't sacrifice accessibility for aesthetics

## 🔒 Security Considerations

### Current Status

- ✅ No backend = no server-side vulnerabilities
- ✅ No user authentication required
- ✅ No sensitive data handling
- ✅ Static files only

### When Adding Backend

- Validate all form inputs server-side
- Implement rate limiting for form submissions
- Use HTTPS for all endpoints
- Sanitize user input to prevent XSS
- Implement CSRF protection
- Use environment variables for API keys
- Never commit secrets to git

### Git Security Note

⚠️ **WARNING:** Git history contains access token in remote URL
Consider cleaning git history or rotating the token:
```bash
# Current remote contains token:
# https://x-access-token:ghs_jIO090tZjEjfbI3PVToJnB5QRPALls1eSta3@github.com/...

# Recommendation: Use SSH or rotate token
```

## 🧪 Testing Strategy

### Manual Testing Checklist

**Functionality:**
- [ ] All navigation links work correctly
- [ ] Smooth scroll to each section
- [ ] Form validation works
- [ ] Form submission shows confirmation
- [ ] Scroll-to-top button appears and functions
- [ ] All hover effects work

**Visual:**
- [ ] Layout is consistent across sections
- [ ] Colors match design system
- [ ] Typography is readable
- [ ] Spacing is consistent
- [ ] Animations are smooth (60 FPS)

**Responsive:**
- [ ] Desktop (1920px, 1366px, 1024px)
- [ ] Tablet (768px)
- [ ] Mobile (480px, 375px, 320px)
- [ ] Landscape and portrait orientations

**Browser Compatibility:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Performance:**
- [ ] Page loads in < 2 seconds
- [ ] No console errors
- [ ] Animations don't cause jank
- [ ] Scroll performance is smooth

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] ARIA labels present
- [ ] Color contrast is sufficient (WCAG AA)
- [ ] Screen reader compatible (test with NVDA/JAWS)

### Automated Testing (Future)

**Recommended Tools:**
```bash
# HTML Validation
npx html-validate index.html

# CSS Validation
npx stylelint css/styles.css

# JavaScript Linting
npx eslint js/main.js

# Accessibility Testing
npx pa11y http://localhost:8000

# Performance Testing
npx lighthouse http://localhost:8000 --view
```

## 📊 Analytics & Monitoring

### Not Yet Implemented

When ready to add analytics:

**Google Analytics 4:**
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Alternative:** Plausible, Fathom (privacy-focused)

## 🌍 Internationalization (i18n)

### Current State
- Single language: Spanish (es)
- `lang="es"` attribute set in HTML

### To Add Multi-Language Support

**Simple Approach:**
```html
<!-- Create separate files -->
index.html (Spanish)
index-en.html (English)
```

**Advanced Approach:**
```javascript
// Language switching with JavaScript
const translations = {
  es: { title: "Bienvenidos a IFARD-SA", ... },
  en: { title: "Welcome to IFARD-SA", ... }
};
```

## 📞 Contact & Support

**Organization:** IFARD-SA
**Repository:** https://github.com/IFARD-SA/website
**Issues:** https://github.com/IFARD-SA/website/issues

**For AI Assistants:**
- Follow guidelines in this document
- Maintain code quality and consistency
- Preserve existing functionality
- Document all changes
- Test thoroughly before committing

## 🏷️ Version History

| Version | Date | Changes | Commit |
|---------|------|---------|--------|
| 0.2.0 | Nov 2025 | Added scroll effects, animations | cf3e459 |
| 0.1.0 | Nov 2025 | Initial landing page | - |

## 🎓 Learning Resources

For AI assistants working on this codebase:

**HTML/CSS:**
- MDN Web Docs: https://developer.mozilla.org
- CSS-Tricks: https://css-tricks.com

**JavaScript:**
- Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Scroll Behavior: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

**Performance:**
- Web.dev Performance: https://web.dev/performance/
- Can I Use: https://caniuse.com

**Accessibility:**
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- A11y Project: https://www.a11yproject.com

---

## 🤝 AI Assistant Collaboration Protocol

### Before Making Changes

1. **Read existing code** - Understand current implementation
2. **Check documentation** - Review CLAUDE.md, EFECTOS-SCROLL.md
3. **Identify dependencies** - Note what might be affected
4. **Plan approach** - Consider alternatives and implications

### During Development

1. **Maintain patterns** - Follow existing code style
2. **Test incrementally** - Verify each change works
3. **Preserve functionality** - Don't break existing features
4. **Comment code** - Explain complex logic

### After Changes

1. **Test thoroughly** - Manual testing checklist
2. **Update documentation** - Modify relevant .md files
3. **Validate code** - Check HTML/CSS/JS syntax
4. **Commit clearly** - Descriptive commit messages

### Communication with User

1. **Explain changes** - Describe what was modified and why
2. **Provide instructions** - How to test and verify
3. **Suggest improvements** - Optional enhancements
4. **Document limitations** - Known issues or constraints

---

**Last Updated:** November 2025
**Maintained By:** AI Assistants working with IFARD-SA
**Document Version:** 1.0.0

*This document is designed for AI assistants and Genium AI infrastructure. It should be updated whenever significant changes are made to the codebase.*
