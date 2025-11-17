# SUNDAYS.md - AI Assistant & Genium AI Infrastructure Guide

## Project Overview

**Project Name:** IFARD-SA Website
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Repository:** https://github.com/IFARD-SA/website
**Project Type:** Static Website with JavaScript Enhancements
**Primary Language:** HTML, CSS, JavaScript (Vanilla)
**Deployment:** Static hosting (GitHub Pages, Netlify, Vercel compatible)
**Language/Locale:** Spanish (es)

### Purpose

Professional institutional website for IFARD-SA, an educational institute focused on training and professional development. The site features modern UI/UX with smooth scroll effects, animations, and responsive design.

### Current State

The project has evolved from a basic HTML page to a fully-featured single-page application with:
- Complete landing page with multiple sections (Hero, About, Services, Contact)
- CSS styling with modern features (CSS variables, animations, glassmorphism effects)
- JavaScript-powered scroll effects and interactions
- Mobile-responsive design
- No build process or dependencies required

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup, accessibility-focused
- **CSS3**: Modern CSS with variables, animations, flexbox, grid
- **JavaScript (Vanilla ES6+)**: No frameworks or libraries
- **Git**: Version control

### Browser API Usage
- Intersection Observer API (scroll animations)
- FormData API (contact form)
- DOM Manipulation APIs
- Smooth Scroll API

### No Dependencies
This project intentionally has **zero dependencies**:
- ❌ No npm/package.json
- ❌ No build tools (webpack, vite, etc.)
- ❌ No CSS frameworks (Bootstrap, Tailwind)
- ❌ No JavaScript frameworks (React, Vue, etc.)
- ✅ Pure HTML, CSS, and JavaScript

## Project Structure

```
website/
├── index.html              # Main landing page (6KB)
├── TEST-EFECTOS.html      # Testing page for scroll effects
├── CLAUDE.md              # AI assistant guide (project instructions)
├── EFECTOS-SCROLL.md      # Scroll effects documentation
├── SUNDAYS.md             # This file - comprehensive AI guide
├── css/
│   └── styles.css         # All styles and animations (15KB)
├── js/
│   └── main.js            # All JavaScript logic (10KB)
└── .git/                  # Git repository

Future structure (not yet implemented):
├── images/                # Images and assets (to be added)
├── assets/                # Additional resources
└── README.md              # User-facing documentation (optional)
```

## Commands

### Development Server

Since this is a static website with no build process, you can serve it with any static file server:

```bash
# Option 1: Python 3 (Recommended - usually pre-installed)
python3 -m http.server 8000

# Option 2: Python 2 (Legacy systems)
python -m SimpleHTTPServer 8000

# Option 3: Node.js http-server (if npm available)
npx http-server -p 8000

# Option 4: PHP built-in server
php -S localhost:8000

# Then open: http://localhost:8000
```

### Opening Directly in Browser

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows (Git Bash/WSL)
start index.html

# Or simply: Double-click index.html in file explorer
```

### Git Workflow

```bash
# Check current status
git status

# View changes
git diff

# Stage all changes
git add .

# Stage specific files
git add index.html css/styles.css js/main.js

# Commit with message
git commit -m "Description of changes"

# Push to main branch
git push origin main

# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/new-feature
git push -u origin feature/new-feature

# View commit history
git log --oneline --graph

# View remote info
git remote -v
```

### Validation & Quality

```bash
# HTML validation (if html5validator installed)
html5validator --root . --also-check-css

# Alternative: Use W3C online validator
# Visit: https://validator.w3.org/#validate_by_upload

# Check file sizes
du -sh css/*.css js/*.js

# Count lines of code
wc -l index.html css/*.css js/*.js

# Search for TODOs/FIXMEs
grep -rn "TODO\|FIXME" .
```

### Testing Scroll Effects

```bash
# Serve the site
python3 -m http.server 8000

# Open test page in browser
# http://localhost:8000/TEST-EFECTOS.html

# Or main site
# http://localhost:8000/index.html
```

## Architecture

### Design Pattern

**Single Page Application (SPA) - Static**
- All content on one page (index.html)
- Smooth scroll navigation between sections
- No routing or page reloads
- Progressive enhancement approach

### File Organization

#### HTML Structure (`index.html`)
```
<!DOCTYPE html>
└── <html lang="es">
    ├── <head>
    │   ├── Meta tags (charset, viewport, description, keywords)
    │   ├── <title>
    │   └── <link rel="stylesheet" href="css/styles.css">
    └── <body>
        ├── <header> - Fixed navigation
        │   └── <nav> with logo and links
        ├── <section id="inicio" class="hero"> - Hero section
        ├── <section id="about" class="about"> - About section
        ├── <section id="servicios"> - Services grid (6 cards)
        ├── <section id="contacto" class="contact"> - Contact form
        ├── <footer> - Social links and copyright
        └── <script src="js/main.js">
```

#### CSS Structure (`css/styles.css`)
1. **CSS Variables** (`:root`) - Color scheme and design tokens
2. **Reset & Base Styles** - Universal reset, body styling
3. **Header & Navigation** - Fixed header with transitions
4. **Hero Section** - Gradient background, animations
5. **About Section** - Grid layout, two-column design
6. **Services Section** - Responsive grid of cards
7. **Contact Section** - Form styling
8. **Footer** - Social links, dark background
9. **Scroll Effects** - Reveal animations, parallax, scroll-to-top button
10. **Responsive Media Queries** - Mobile/tablet adaptations

#### JavaScript Structure (`js/main.js`)
Organized into 10 modular sections:

1. **Smooth Scroll Navigation** - Click handlers for anchor links
2. **Dynamic Header** - Show/hide on scroll, glassmorphism effect
3. **Reveal Animations** - Intersection Observer for element reveals
4. **Scroll-to-Top Button** - Floating button that appears after 300px
5. **Active Navigation** - Highlights current section in menu
6. **Parallax Effect** - Subtle movement in hero section
7. **Animated Counters** - Number animation system (prepared)
8. **Form Handling** - Submission with confirmation message
9. **Lazy Loading** - Image loading system (prepared)
10. **Typing Effect** - Optional typewriter animation (commented out)

### CSS Architecture

**Methodology:** BEM-inspired with utility classes

```css
/* Design Tokens */
--primary-color: #2563eb   (Blue)
--secondary-color: #1e40af (Darker Blue)
--accent-color: #3b82f6    (Accent Blue)
--text-dark: #1f2937
--text-light: #6b7280
--bg-light: #f9fafb
--white: #ffffff

/* Component Structure */
.component-name          /* Block */
.component-name-element  /* Element */
.component-name--modifier /* Modifier */

/* State Classes */
.active        /* Active navigation item */
.visible       /* Visible scroll-to-top button */
.scrolled      /* Scrolled header state */
.reveal        /* Elements to be revealed */
.reveal-visible /* Revealed elements */
```

### JavaScript Architecture

**Pattern:** Vanilla JavaScript with Event Delegation and Observer Pattern

```javascript
// Event-driven architecture
document.addEventListener('DOMContentLoaded', init)
window.addEventListener('scroll', handleScroll)

// Observer pattern for performance
IntersectionObserver -> Efficient scroll detection
MutationObserver -> (Not used, but can be added)

// Module organization
// Each feature is self-contained and can be removed independently
```

### Responsive Breakpoints

```css
/* Desktop First Approach */
Default: > 768px (Desktop)
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

### Performance Optimizations

1. **CSS**:
   - `will-change` properties for GPU acceleration
   - CSS variables for theme consistency
   - Efficient selectors (avoid deep nesting)
   - Transitions instead of JavaScript animations

2. **JavaScript**:
   - Intersection Observer (efficient scroll detection)
   - Event delegation where applicable
   - Debouncing implicit in browser events
   - Lazy loading prepared for images

3. **HTML**:
   - Semantic markup for better parsing
   - Script loaded at end of body
   - Minimal inline styles

## Important Notes

### Language and Content

- **Primary Language:** Spanish (es)
- All content is in Spanish
- Meta tags include Spanish description and keywords
- Consider i18n if English version needed

### Browser Compatibility

**Minimum Requirements:**
- Chrome 51+ (Intersection Observer)
- Firefox 55+
- Safari 12.1+
- Edge 79+

**Fallbacks:**
- Smooth scroll: Degrades to instant scroll
- Intersection Observer: Polyfill not included (elements show immediately)
- CSS animations: Degrades gracefully

### Accessibility Considerations

**Current State:**
- ✅ Semantic HTML5 elements
- ✅ ARIA labels on buttons (scroll-to-top)
- ✅ Keyboard navigation functional
- ✅ Color contrast meets standards
- ⚠️ Missing: `prefers-reduced-motion` respect
- ⚠️ Missing: Alt text for future images
- ⚠️ Missing: ARIA live regions for form feedback

**To Add:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### SEO Optimization

**Current SEO Elements:**
```html
✅ <title> tag with organization name
✅ meta description
✅ meta keywords
✅ Semantic HTML5 structure
✅ lang="es" attribute
❌ Open Graph tags (not added)
❌ Twitter Card tags (not added)
❌ robots.txt (not created)
❌ sitemap.xml (not created)
❌ Structured data/Schema.org markup
```

**Recommended Additions:**
```html
<!-- Open Graph -->
<meta property="og:title" content="IFARD-SA">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="https://...">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

### Form Handling

**Current Behavior:**
- Form prevents default submission (JavaScript)
- Shows confirmation message
- No backend/email integration
- No validation beyond HTML5 required attributes

**To Add Backend:**
```javascript
// Option 1: Formspree
fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: formData
})

// Option 2: EmailJS
// Option 3: Custom backend API
```

### Deployment Options

#### GitHub Pages (Recommended)
```bash
# Settings → Pages → Deploy from main branch → root folder
# URL: https://ifard-sa.github.io/website/

# Or with custom domain:
# Add CNAME file with domain name
# Configure DNS records
```

#### Netlify
```bash
# Drag-and-drop folder or connect GitHub
# Build command: (leave empty)
# Publish directory: /
# Auto-deploy on push
```

#### Vercel
```bash
# Import GitHub repository
# Framework Preset: Other
# Root Directory: ./
# Build command: (leave empty)
# Output directory: ./
```

### File Size Budget

**Current Sizes:**
- `index.html`: ~6KB
- `css/styles.css`: ~15KB
- `js/main.js`: ~10KB
- **Total:** ~31KB (uncompressed)
- **Gzipped:** ~8-10KB (estimated)

**Performance Targets:**
- ✅ First Contentful Paint: < 1s
- ✅ Time to Interactive: < 2s
- ✅ Total Page Size: < 100KB
- ✅ No external dependencies

### Scroll Effects Details

**10 Implemented Effects:**

1. **Smooth Scroll**: Hardware-accelerated scrolling between sections
2. **Dynamic Header**: Auto-hide/show with glassmorphism
3. **Reveal Animations**: Fade-in + translate on scroll
4. **Active Navigation**: Real-time section highlighting
5. **Scroll-to-Top Button**: Appears after 300px
6. **Parallax**: Subtle hero section movement
7. **Form Animation**: Success message transition
8. **CTA Pulse**: Infinite pulse animation on main button
9. **Lazy Loading**: Prepared for image loading
10. **Counters**: Prepared for number animations

See `EFECTOS-SCROLL.md` for detailed documentation.

### Customization Quick Reference

**Change Colors:**
```css
/* Edit css/styles.css line 2-11 */
:root {
  --primary-color: #2563eb;  /* Main brand color */
  --secondary-color: #1e40af; /* Darker variant */
}
```

**Change Animation Speed:**
```css
/* Edit css/styles.css */
.reveal {
  transition: opacity 0.6s ease; /* Change 0.6s */
}
```

**Change Scroll Threshold:**
```javascript
/* Edit js/main.js line 120 */
if (window.pageYOffset > 300) { /* Change 300 */
```

**Disable Parallax:**
```javascript
/* Edit js/main.js - comment out lines 164-176 */
```

**Add New Section:**
```html
<!-- 1. Add to index.html -->
<section id="new-section">
  <h2 class="section-title">New Section</h2>
  <!-- content -->
</section>

<!-- 2. Add to navigation -->
<li><a href="#new-section">New Section</a></li>
```

## Common Tasks for AI Assistants

### Task 1: Add New Service Card

```html
<!-- Add to services-grid div in index.html -->
<div class="service-card">
  <div class="service-icon">🎯</div>
  <h3>Service Name</h3>
  <p>Service description...</p>
</div>
```

### Task 2: Add Image

```html
<!-- 1. Place image in images/ directory -->
<!-- 2. Add to HTML -->
<img src="images/photo.jpg" alt="Description" loading="lazy">

<!-- For lazy loading with JavaScript -->
<img data-src="images/photo.jpg" alt="Description">
```

### Task 3: Change Color Scheme

```css
/* Edit css/styles.css :root section */
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* etc. */
}
```

### Task 4: Add New Page

```bash
# 1. Create new HTML file
cp index.html about-detail.html

# 2. Update content
# 3. Add link in navigation
<li><a href="about-detail.html">About Detail</a></li>
```

### Task 5: Optimize Images (when added)

```bash
# Install imagemagick if needed
# Resize images
convert large.jpg -resize 1920x1080 optimized.jpg

# WebP conversion
cwebp input.jpg -q 80 -o output.webp

# Or use online tools: TinyPNG, Squoosh.app
```

### Task 6: Create Favicon

```html
<!-- Generate favicons at https://realfavicongenerator.net/ -->
<!-- Add to <head> -->
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
```

### Task 7: Add Analytics

```html
<!-- Google Analytics - add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Task 8: Connect Form to Backend

```javascript
// Edit js/main.js - replace form submit handler
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Show success message
    }
  } catch (error) {
    // Handle error
  }
});
```

## Testing Checklist

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Functionality Testing
- [ ] All navigation links work
- [ ] Smooth scroll between sections
- [ ] Header shows/hides on scroll
- [ ] Reveal animations trigger properly
- [ ] Active navigation updates correctly
- [ ] Scroll-to-top button appears and works
- [ ] Form submits and shows confirmation
- [ ] All hover effects work
- [ ] Mobile menu works (if added)

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Animations run at 60 FPS
- [ ] Page loads in < 2 seconds
- [ ] Images optimized (when added)
- [ ] CSS/JS minified for production (optional)

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast sufficient
- [ ] ARIA labels present
- [ ] Focus indicators visible

### Responsive Testing
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 414px)
- [ ] Test landscape and portrait

## Troubleshooting

### Issue: Animations not working
**Solution:**
1. Check browser console for errors (F12)
2. Verify `js/main.js` is loaded
3. Check Intersection Observer support
4. Clear browser cache (Ctrl+Shift+R)

### Issue: Scroll not smooth
**Solution:**
1. Check browser supports `scroll-behavior: smooth`
2. Verify JavaScript fallback is working
3. Try different browser

### Issue: Form not submitting
**Solution:**
1. Check console for JavaScript errors
2. Verify form fields have correct `name` attributes
3. Check `preventDefault()` is working

### Issue: Styles not applying
**Solution:**
1. Verify `css/styles.css` path is correct
2. Check for CSS syntax errors
3. Clear browser cache
4. Verify CSS specificity

### Issue: Header not hiding/showing
**Solution:**
1. Check scroll event listener is attached
2. Verify scroll position logic (line 61 in main.js)
3. Test with different scroll amounts

### Issue: Git push rejected
**Solution:**
```bash
# Pull latest changes first
git pull origin main --rebase

# Then push
git push origin main

# If conflicts, resolve and:
git add .
git rebase --continue
```

## Deployment Checklist

Before deploying to production:

- [ ] Test in all target browsers
- [ ] Optimize images (if added)
- [ ] Update meta descriptions
- [ ] Add Open Graph tags
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add favicon
- [ ] Set up analytics
- [ ] Configure custom domain (if applicable)
- [ ] Test form submission
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Run Lighthouse audit
- [ ] Set up HTTPS
- [ ] Create 404 page (if multi-page)

## Security Considerations

Since this is a static site with no backend:

- ✅ No server-side vulnerabilities
- ✅ No database to secure
- ✅ No authentication to manage
- ⚠️ Form requires backend for actual submission
- ⚠️ No rate limiting on form (when backend added)
- ⚠️ Git credentials visible in remote URL (use HTTPS or SSH)

**Recommendations:**
- Use environment variables for API keys
- Implement CORS on backend APIs
- Add rate limiting to form endpoints
- Use HTTPS for production

## Resources

### Documentation
- `CLAUDE.md` - Project instructions and guidelines
- `EFECTOS-SCROLL.md` - Detailed scroll effects documentation
- `TEST-EFECTOS.html` - Interactive testing page

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [W3C Validator](https://validator.w3.org/) - HTML validation
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [GitHub Pages Docs](https://docs.github.com/en/pages) - Deployment guide

### Design Inspiration
- Gradient backgrounds (hero section)
- Card-based layouts (services)
- Fixed header with transitions
- Modern glassmorphism effects
- Smooth scroll interactions

## Version Control

**Current Branch:** main
**Remote:** origin (GitHub)
**URL:** https://github.com/IFARD-SA/website

### Branch Strategy
- `main` - Production-ready code
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

### Commit Message Convention
```bash
# Format: <type>: <description>

feat: Add new service card
fix: Correct scroll behavior on mobile
style: Update color scheme
docs: Add deployment instructions
refactor: Optimize JavaScript performance
```

## Future Enhancements

### Planned Features (Not Yet Implemented)
1. **Mobile Hamburger Menu** - Collapsible navigation for mobile
2. **Dark Mode** - Toggle between light/dark themes
3. **Preloader** - Animated loading screen
4. **Image Gallery** - Lightbox for photos
5. **Testimonials Section** - Client reviews carousel
6. **Blog Integration** - News/articles section
7. **Multilingual Support** - Spanish/English toggle
8. **Backend Integration** - Working contact form
9. **Search Functionality** - Site search
10. **Cookie Consent** - GDPR compliance banner

### Technical Improvements
- Add CSS/JS minification for production
- Implement service worker for offline support
- Add loading skeletons
- Implement progressive image loading
- Add more comprehensive error handling
- Create automated testing suite

## Contact & Maintenance

**Organization:** IFARD-SA
**Repository:** https://github.com/IFARD-SA/website
**Last Updated:** 2025
**Maintained By:** Development team + AI assistants

---

## Quick Start for AI Assistants

1. **Understand the project:** Static website, no build process
2. **Serve locally:** `python3 -m http.server 8000`
3. **Edit files directly:** HTML/CSS/JS are not compiled
4. **Test in browser:** http://localhost:8000
5. **Commit changes:** `git add . && git commit -m "message"`
6. **Push to GitHub:** `git push origin main`

## Quick Start for Genium AI Infrastructure

### Project Detection
```json
{
  "type": "static-website",
  "languages": ["html", "css", "javascript"],
  "framework": "vanilla",
  "build_required": false,
  "entry_point": "index.html",
  "test_command": null,
  "start_command": "python3 -m http.server 8000"
}
```

### Automated Tasks
- **Deploy:** Copy all files to static hosting
- **Validate:** Run HTML/CSS validators
- **Test:** Lighthouse CI for performance
- **Monitor:** Check for broken links

### CI/CD Integration
```yaml
# Example GitHub Actions workflow
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

---

**This document is designed for AI assistants and automated infrastructure to effectively understand, maintain, and deploy the IFARD-SA website project.**
