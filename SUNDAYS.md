# SUNDAYS.md - AI Assistant & Genium AI Infrastructure Guide

## 📋 Project Overview

**Project Name:** IFARD-SA Website
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Repository:** https://github.com/IFARD-SA/website
**Project Type:** Static Website with Interactive Features
**Primary Languages:** HTML5, CSS3, Vanilla JavaScript
**Deployment Target:** Static hosting (GitHub Pages, Netlify, Vercel)
**Current Status:** Production-ready with scroll effects and animations

### Project Description

This is a modern, single-page website for IFARD-SA (Instituto de Formación y Desarrollo), a training and development institute. The site features a responsive design with professional scroll effects, animations, and interactive elements built entirely with vanilla JavaScript (no frameworks or dependencies).

### Key Features

- ✨ **Professional Scroll Effects**: Smooth scrolling, reveal animations, parallax effects
- 🎯 **Interactive Navigation**: Active section highlighting, dynamic header with auto-hide
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🚀 **Performance Optimized**: Intersection Observer API, GPU-accelerated animations
- ♿ **Accessible**: Semantic HTML5, ARIA labels, keyboard navigation support
- 🌐 **Spanish Language**: Content and interface in Spanish
- 🎨 **Modern Design**: Gradient hero section, glassmorphism effects, smooth transitions

## 📁 Repository Structure

```
website/
├── index.html              # Main landing page (single-page application)
├── TEST-EFECTOS.html       # Test page for scroll effects validation
├── CLAUDE.md              # AI assistant guide (development focused)
├── EFECTOS-SCROLL.md      # Scroll effects documentation
├── SUNDAYS.md             # This file - Genium AI infrastructure guide
├── css/
│   └── styles.css         # Main stylesheet (19.4KB) with animations
├── js/
│   └── main.js            # JavaScript with scroll effects (10KB)
└── .git/                  # Git repository data
```

### File Purposes

- **index.html** - Main website with 5 sections: Hero, About, Services, Contact, Footer
- **TEST-EFECTOS.html** - Quality assurance page for testing scroll effects
- **EFECTOS-SCROLL.md** - Complete documentation of implemented scroll effects
- **CLAUDE.md** - Legacy documentation focused on development workflows
- **css/styles.css** - Comprehensive styles including CSS custom properties, responsive design, and animation keyframes
- **js/main.js** - Vanilla JavaScript with 10 different scroll/animation features

## 🛠 Technology Stack

### Core Technologies

| Technology | Version/Standard | Purpose |
|------------|------------------|---------|
| HTML5 | Latest | Semantic markup, structure |
| CSS3 | Modern (Grid, Flexbox, Variables) | Styling, animations, responsive design |
| JavaScript | ES6+ (Vanilla) | Interactive features, scroll effects |
| Git | 2.x | Version control |

### Key JavaScript APIs Used

- **Intersection Observer API** - Efficient element visibility detection for reveal animations
- **Scroll Events** - Header behavior, parallax effects, navigation tracking
- **DOM Manipulation** - Dynamic content updates, form handling
- **FormData API** - Form submission handling

### CSS Features

- **CSS Custom Properties (Variables)** - Theming system
- **Flexbox & Grid** - Modern layout system
- **Backdrop Filter** - Glassmorphism effects on scrolled header
- **CSS Animations** - Keyframe animations for fade-in, pulse, slide effects
- **Media Queries** - Responsive breakpoints at 768px and 480px

### No Dependencies

⚡ **Zero external dependencies** - No npm packages, no build tools, no frameworks. Pure HTML/CSS/JS for maximum performance and simplicity.

## 🚀 Commands

### Development Server

Start a local development server to preview the website:

```bash
# Option 1: Python 3 (Recommended)
python3 -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js http-server
npx http-server -p 8000

# Option 4: PHP built-in server
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Testing

```bash
# Test scroll effects page
# Start server first, then navigate to:
open http://localhost:8000/TEST-EFECTOS.html

# Or open directly in browser
open TEST-EFECTOS.html  # macOS
xdg-open TEST-EFECTOS.html  # Linux
start TEST-EFECTOS.html  # Windows
```

### Validation

```bash
# HTML validation (if html5validator is installed)
html5validator --root . --also-check-css

# W3C Online Validator
# Upload files to: https://validator.w3.org/#validate_by_upload

# Check for JavaScript errors in browser console
# Press F12 in browser → Console tab
```

### Git Workflow

```bash
# Check current status
git status

# View commit history
git log --oneline -10

# Stage all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to remote repository
git push origin main

# Create feature branch
git checkout -b feature/feature-name
git push -u origin feature/feature-name

# Pull latest changes
git pull origin main
```

### Deployment

```bash
# GitHub Pages (automatic)
# 1. Go to repository Settings → Pages
# 2. Source: Deploy from branch "main" → root folder
# 3. Site will be live at: https://ifard-sa.github.io/website/

# Netlify (via CLI)
npx netlify-cli deploy --prod --dir=.

# Vercel (via CLI)
npx vercel --prod

# Manual deployment
# Simply copy all files to any static hosting service
rsync -av --exclude='.git' . user@server:/var/www/html/
```

## 🏗 Architecture

### Project Pattern

**Pattern:** Single-Page Application (SPA) without framework
**Approach:** Progressive Enhancement
**Philosophy:** Mobile-first responsive design

### Application Structure

```
┌─────────────────────────────────────────┐
│           index.html (Entry)            │
│  ┌───────────────────────────────────┐  │
│  │  Header (Fixed Navigation)         │  │
│  ├───────────────────────────────────┤  │
│  │  Hero Section (#inicio)            │  │
│  ├───────────────────────────────────┤  │
│  │  About Section (#about)            │  │
│  ├───────────────────────────────────┤  │
│  │  Services Section (#servicios)     │  │
│  ├───────────────────────────────────┤  │
│  │  Contact Section (#contacto)       │  │
│  ├───────────────────────────────────┤  │
│  │  Footer                            │  │
│  └───────────────────────────────────┘  │
│                                           │
│  Injected: Scroll-to-Top Button (JS)     │
└─────────────────────────────────────────┘
         ↓                    ↓
    styles.css            main.js
    (Styling)         (Interactions)
```

### Sections Breakdown

1. **Header** - Fixed navigation with logo and 4 links
2. **Hero** (#inicio) - Gradient background with CTA button
3. **About** (#about) - Two-column layout with mission text and image placeholder
4. **Services** (#servicios) - 6-card grid showcasing services
5. **Contact** (#contacto) - Contact form with validation
6. **Footer** - Social links and copyright

### JavaScript Architecture

The `main.js` file is organized into 10 independent modules:

```javascript
// 1. Smooth Scroll Navigation
// 2. Dynamic Header (show/hide on scroll)
// 3. Reveal Animations (Intersection Observer)
// 4. Scroll-to-Top Button
// 5. Active Navigation Tracking
// 6. Parallax Effect on Hero
// 7. Counter Animations (prepared, inactive)
// 8. Form Submission Handler
// 9. Lazy Image Loading (prepared, inactive)
// 10. Typing Effect (prepared, commented out)
```

Each module is self-contained and can be modified independently.

### CSS Architecture

```
styles.css Structure:
├── 1. CSS Variables (:root)
├── 2. Reset & Base Styles
├── 3. Header & Navigation
├── 4. Hero Section
├── 5. General Section Styles
├── 6. About Section
├── 7. Services Section
├── 8. Contact Section
├── 9. Footer
├── 10. Keyframe Animations
├── 11. Scroll Effect Styles
├── 12. Responsive Media Queries
```

### Design System

**CSS Custom Properties:**

```css
--primary-color: #2563eb    (Blue)
--secondary-color: #1e40af  (Darker Blue)
--accent-color: #3b82f6     (Light Blue)
--text-dark: #1f2937        (Almost Black)
--text-light: #6b7280       (Gray)
--bg-light: #f9fafb         (Very Light Gray)
--white: #ffffff
--shadow: 0 4px 6px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 25px rgba(0,0,0,0.15)
```

### Responsive Breakpoints

```css
Desktop:  > 768px (default)
Tablet:   ≤ 768px
Mobile:   ≤ 480px
```

## 💡 Important Notes

### Content Language

- **Primary Language:** Spanish (es)
- All content, labels, and user-facing text are in Spanish
- `lang="es"` attribute set in HTML root element

### Performance Considerations

1. **No External Dependencies:** Entire site loads from local files only
2. **GPU Acceleration:** `will-change` property used on animated elements
3. **Intersection Observer:** More performant than scroll event listeners
4. **Throttled Scroll Events:** Minimal scroll handlers to avoid jank
5. **Mobile Optimizations:** Parallax disabled on mobile devices

### Browser Compatibility

**Minimum Requirements:**
- Chrome 51+ (Intersection Observer API)
- Firefox 55+
- Safari 12.1+
- Edge 79+
- Opera 38+

**Fallbacks:**
- Smooth scroll falls back to instant scroll in older browsers
- Intersection Observer degrades gracefully (elements simply appear)
- CSS animations degrade to static presentation

### Accessibility Features

- ✅ Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation fully functional
- ✅ Focus states on all interactive elements
- ✅ Adequate color contrast ratios
- ⚠️ **Missing:** `prefers-reduced-motion` media query support (can be added)

### SEO Optimization

**Current State:**
- ✅ Semantic HTML structure
- ✅ Meta description tag
- ✅ Meta keywords tag
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ❌ Missing: robots.txt
- ❌ Missing: sitemap.xml
- ❌ Missing: Open Graph tags
- ❌ Missing: Twitter Card tags

### Security Considerations

- ✅ No external script dependencies (no CDN vulnerabilities)
- ✅ No inline JavaScript (all in external file)
- ✅ Form submission prevented by default (e.preventDefault)
- ⚠️ **Note:** Contact form is currently client-side only (no backend)
- ⚠️ **Recommendation:** Add backend API endpoint for real form submissions

### File Sizes

```
index.html:          6.2 KB
TEST-EFECTOS.html:   7.4 KB
css/styles.css:     19.4 KB
js/main.js:         10.0 KB
Total (no images):  ~43 KB (excellent for first load)
```

## 🔧 Common Workflows for AI Assistants

### 1. Adding New Content Sections

```html
<!-- Add new section before footer in index.html -->
<section id="new-section">
    <h2 class="section-title">New Section Title</h2>
    <div class="content">
        <!-- Your content here -->
    </div>
</section>
```

Then add navigation link:
```html
<li><a href="#new-section">New Section</a></li>
```

### 2. Modifying Scroll Effect Thresholds

**Scroll-to-top button threshold:**
```javascript
// In js/main.js line ~120
if (window.pageYOffset > 300) {  // Change 300 to desired pixel value
```

**Reveal animation sensitivity:**
```javascript
// In js/main.js line ~73
const observerOptions = {
    threshold: 0.15,  // 0.0 to 1.0 (lower = triggers earlier)
    rootMargin: '0px 0px -50px 0px'  // Adjust bottom margin
};
```

**Header hide threshold:**
```javascript
// In js/main.js line ~61
if (scrollTop > lastScrollTop && scrollTop > 200) {  // Change 200
```

### 3. Customizing Animation Speeds

**CSS transition speeds:**
```css
/* In css/styles.css */
.reveal {
    transition: opacity 0.6s ease, transform 0.6s ease;
    /* Change 0.6s to adjust speed */
}
```

**Header transition:**
```css
header {
    transition: transform 0.3s ease;
    /* Adjust 0.3s for faster/slower header hide/show */
}
```

### 4. Adding New Service Cards

```html
<!-- Add to services-grid in index.html -->
<div class="service-card">
    <div class="service-icon">🔧</div>
    <h3>New Service Name</h3>
    <p>Service description goes here.</p>
</div>
```

Cards will automatically animate on scroll (already includes `observer`).

### 5. Changing Color Theme

Edit CSS custom properties in `css/styles.css`:

```css
:root {
    --primary-color: #YOUR_COLOR;
    --secondary-color: #YOUR_DARKER_SHADE;
    --accent-color: #YOUR_LIGHTER_SHADE;
}
```

### 6. Adding Real Images

Replace placeholder in About section:

```html
<!-- Change this: -->
<div class="about-image">
    <p>Espacio para imagen institucional</p>
</div>

<!-- To this: -->
<div class="about-image">
    <img src="images/your-image.jpg" alt="Description" data-src="images/your-image.jpg">
</div>
```

Lazy loading will work automatically if you use `data-src` attribute.

### 7. Enabling Optional Features

**Activate typing effect on hero:**
```javascript
// Uncomment lines 300-304 in js/main.js
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
}
```

**Add counter animations:**
```html
<!-- Add data-counter attribute to any element -->
<span data-counter="1500">0</span>
```

### 8. Connecting Contact Form to Backend

Replace form handler in `js/main.js` (lines 216-259):

```javascript
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/api/contact', {
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

### 9. Disabling Parallax Effect

**Option A:** Disable completely:
```javascript
// Comment out lines 164-176 in js/main.js
```

**Option B:** Adjust intensity:
```javascript
// In js/main.js line 169
const parallaxSpeed = 0.5;  // Lower = less intense (try 0.2 or 0.3)
```

### 10. Adding More Pages

Create new HTML file based on index.html structure:

```bash
cp index.html about-page.html
# Edit about-page.html with new content
```

Update navigation links to point to new pages:
```html
<li><a href="about-page.html">About</a></li>
```

## 📊 Performance Metrics

### Expected Lighthouse Scores

- **Performance:** 95-100 (no images, minimal JS)
- **Accessibility:** 85-95 (good semantic HTML, could improve with reduced-motion support)
- **Best Practices:** 90-95 (pure HTML/CSS/JS)
- **SEO:** 80-90 (missing Open Graph tags, sitemap)

### Load Time Expectations

- **First Contentful Paint:** < 0.5s
- **Time to Interactive:** < 1s
- **Total Blocking Time:** < 100ms
- **Cumulative Layout Shift:** 0 (no dynamic content loading)

### Animation Performance

- All animations target 60 FPS
- GPU-accelerated transforms (translateY, translateX, scale)
- No layout thrashing (minimal reflows/repaints)

## 🐛 Troubleshooting

### Issue: Animations not working

**Diagnosis:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify `js/main.js` is loading correctly

**Solutions:**
```bash
# Verify file exists
ls -la js/main.js

# Check if script tag is present in HTML
grep "main.js" index.html

# Ensure proper file path (case-sensitive on Linux)
```

### Issue: Scroll not smooth

**Cause:** Browser doesn't support `scroll-behavior: smooth` CSS property

**Solution:** JavaScript fallback is already implemented in `main.js`

### Issue: Header not hiding on scroll

**Check:**
1. Scroll position > 200px
2. Scrolling downward (not upward)
3. No JavaScript errors in console

### Issue: Forms showing errors or not submitting

**Expected Behavior:** Form is currently client-side only. It shows a confirmation message but doesn't actually send data anywhere.

**To Fix:** Implement backend API endpoint and update form handler in `js/main.js`

### Issue: Parallax effect too intense/causing motion sickness

**Solution:** Reduce parallax speed or disable entirely:
```javascript
// In js/main.js line 169
const parallaxSpeed = 0.2;  // Lower value = less movement
```

Or disable for all users:
```javascript
// Comment out the entire parallax section (lines 164-176)
```

## 🔒 Security Notes for Automated Systems

### Safe Operations

✅ Reading all files
✅ Modifying HTML content
✅ Updating CSS styles
✅ Adjusting JavaScript functionality
✅ Adding new sections/pages
✅ Committing changes to Git
✅ Running local development servers

### Operations Requiring Caution

⚠️ **Pushing to main branch** - Ensure changes are tested locally first
⚠️ **Modifying file structure** - Could break relative paths
⚠️ **Adding external dependencies** - Goes against project philosophy
⚠️ **Deleting files** - Verify no references exist first

### Restricted Operations

❌ **Don't add npm/package.json** - Project is dependency-free by design
❌ **Don't add build tools** - Static site, no compilation needed
❌ **Don't remove CLAUDE.md or EFECTOS-SCROLL.md** - Important documentation
❌ **Don't modify .git directory** - Let Git handle version control

## 🚀 Deployment Guide for Automated Systems

### GitHub Pages Deployment

```bash
# 1. Ensure changes are committed
git add .
git commit -m "Update: description of changes"

# 2. Push to main branch
git push origin main

# 3. GitHub Pages auto-deploys from main branch
# Site available at: https://ifard-sa.github.io/website/
# Deployment takes 1-2 minutes
```

### Netlify Deployment (Alternative)

```bash
# One-time setup
npx netlify-cli login
npx netlify-cli init

# Deploy
npx netlify-cli deploy --prod --dir=.
```

### Vercel Deployment (Alternative)

```bash
# One-time setup
npx vercel login

# Deploy
npx vercel --prod
```

### Manual/FTP Deployment

```bash
# Copy all files except .git directory
rsync -av --exclude='.git' --exclude='TEST-EFECTOS.html' . user@server:/var/www/html/
```

## 📝 Testing Checklist for AI Systems

Before committing changes, verify:

- [ ] All HTML files validate (W3C Validator)
- [ ] No JavaScript console errors
- [ ] Smooth scroll navigation works between sections
- [ ] Header shows/hides correctly on scroll
- [ ] Service cards animate on scroll into view
- [ ] Scroll-to-top button appears after 300px scroll
- [ ] Active navigation highlighting works
- [ ] Contact form submission shows confirmation
- [ ] All links functional (no 404s)
- [ ] Responsive design works at 768px and 480px breakpoints
- [ ] Text is readable (contrast ratios adequate)
- [ ] No horizontal scrolling on mobile
- [ ] Images load (if any added)
- [ ] Page loads in under 2 seconds

## 📚 Related Documentation

- **CLAUDE.md** - Developer-focused guide with commands and workflows
- **EFECTOS-SCROLL.md** - Detailed documentation of scroll effects implementation
- **TEST-EFECTOS.html** - Interactive testing page for scroll effects validation

## 🔄 Version Control

**Current State:** Active development
**Latest Commit:** Merge pull request #5 (scroll effects implementation)
**Branch:** main
**Remote:** https://github.com/IFARD-SA/website.git

### Commit Message Conventions

Use descriptive, imperative mood commit messages:

```bash
# Good examples
git commit -m "Add new services section with 3 cards"
git commit -m "Fix parallax effect on mobile devices"
git commit -m "Update hero section copy"

# Avoid
git commit -m "changes"
git commit -m "fix"
```

## 🤖 AI Assistant Quick Reference

### When asked to "add a feature":

1. Determine if it requires HTML, CSS, JS, or combination
2. Read relevant files using Read tool first
3. Make changes using Edit tool (preserve existing code)
4. Test locally with development server
5. Commit changes with descriptive message

### When asked to "fix a bug":

1. Reproduce the issue if possible
2. Check browser console for errors
3. Read relevant files to understand current implementation
4. Make targeted fix (minimal changes)
5. Test the fix locally
6. Commit with clear description of what was fixed

### When asked to "optimize performance":

1. Check current file sizes and load times
2. Review JavaScript for expensive operations
3. Ensure animations use GPU-accelerated properties
4. Verify images are optimized (if present)
5. Test on mobile devices/emulation
6. Measure before/after metrics

### When asked to "make it responsive":

1. Check existing media queries (768px, 480px)
2. Test in browser DevTools device emulation
3. Adjust layouts, font sizes, spacing as needed
4. Ensure touch targets are minimum 44x44px
5. Test scroll effects on mobile
6. Verify no horizontal overflow

### When asked to "deploy the site":

1. Ensure all changes are committed
2. Push to main branch
3. Verify GitHub Pages is configured (Settings → Pages)
4. Wait 1-2 minutes for deployment
5. Test live site at https://ifard-sa.github.io/website/
6. Check for any production-only issues

---

## 📞 Contact & Support

**Organization:** IFARD-SA
**Repository Issues:** https://github.com/IFARD-SA/website/issues
**Documentation Last Updated:** November 2025

---

**Note for Genium AI Infrastructure:**
This is a production-ready static website with zero dependencies. All operations can be performed directly on the files without any build process. The site is optimized for automated deployments and can be safely modified by AI systems following the guidelines in this document.
