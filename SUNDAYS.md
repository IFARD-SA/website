# SUNDAYS.md - AI Assistant & Genium AI Infrastructure Guide

## 📋 Project Overview

**Project Name:** IFARD-SA Website
**Project Type:** Static Website / Single Page Application (SPA)
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Repository:** https://github.com/IFARD-SA/website
**Primary Language:** HTML5, CSS3, JavaScript (Vanilla)
**Deployment Target:** Static hosting (GitHub Pages, Netlify, Vercel)
**Language:** Spanish (es)

### Purpose
Professional single-page website for IFARD-SA, an educational institution focused on training and professional development. The site features modern scroll effects, smooth animations, and responsive design without external dependencies.

### Current Status
- ✅ Fully functional single-page website
- ✅ Complete with CSS styling and JavaScript animations
- ✅ Responsive design for mobile, tablet, and desktop
- ✅ Advanced scroll effects implemented
- ✅ No build process required
- ✅ Zero external dependencies

## 🏗️ Architecture

### Project Structure

```
website/
├── index.html              # Main landing page (SPA)
├── css/
│   └── styles.css         # Complete styling with animations (566 lines)
├── js/
│   └── main.js            # Vanilla JavaScript with scroll effects (311 lines)
├── CLAUDE.md              # AI assistant guide (original)
├── SUNDAYS.md             # This file - comprehensive guide
├── EFECTOS-SCROLL.md      # Scroll effects documentation
├── TEST-EFECTOS.html      # Testing page for scroll effects
└── .git/                  # Git repository

Future recommended structure:
├── images/                # Images and logos (to be added)
├── assets/                # Additional assets (fonts, icons)
└── README.md             # Public-facing documentation
```

### Technology Stack

**Frontend:**
- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Modern CSS with custom properties (CSS variables), Flexbox, Grid
- **JavaScript**: Vanilla ES6+ (no frameworks or libraries)

**Features:**
- Intersection Observer API for scroll animations
- CSS Transitions and Animations
- Responsive design (mobile-first approach)
- Accessibility features (ARIA labels, semantic HTML)

**Browser Support:**
- Chrome 51+ (Intersection Observer)
- Firefox 55+
- Safari 12.1+
- Edge 79+
- Opera 38+

### Site Sections

1. **Header**: Fixed navigation with logo and menu links
2. **Hero Section**: Welcome banner with CTA button
3. **About Section**: Mission and institutional information
4. **Services Section**: 6 service cards in responsive grid
5. **Contact Section**: Contact form with validation
6. **Footer**: Social links and copyright information

### JavaScript Features (main.js)

The site includes 10 distinct JavaScript modules:

1. **Smooth Scroll Navigation**: Fluid scrolling between sections
2. **Dynamic Header**: Auto-hide on scroll down, appears on scroll up
3. **Reveal Animations**: Elements fade in when entering viewport
4. **Active Navigation**: Highlights current section in menu
5. **Scroll-to-Top Button**: Floating button appears after 300px
6. **Parallax Effect**: Subtle parallax on hero section
7. **Animated Counters**: Ready for numerical statistics (prepared)
8. **Form Handling**: Confirmation message on submit
9. **Lazy Loading**: Image lazy loading system (prepared)
10. **Typing Effect**: Optional typewriter effect (commented out)

### CSS Architecture

**CSS Variables (Custom Properties):**
```css
--primary-color: #2563eb (blue)
--secondary-color: #1e40af (dark blue)
--accent-color: #3b82f6 (light blue)
--text-dark: #1f2937
--text-light: #6b7280
--bg-light: #f9fafb
--white: #ffffff
```

**Key Features:**
- Responsive grid layouts
- Smooth transitions and animations
- Glassmorphism effects on header
- CSS animations (fadeInUp, slideIn, pulse)
- Mobile-first responsive breakpoints (768px, 480px)
- Performance optimizations (will-change, GPU acceleration)

## 💻 Commands

### Development

#### Local Development Server

Since this is a static HTML website with no build process, use any of these methods:

```bash
# Option 1: Python 3 (Recommended)
python3 -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js http-server
npx http-server -p 8000

# Option 4: PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

#### Direct File Opening

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

⚠️ **Note**: Some features (like CORS) may not work with `file://` protocol. Use a local server for best results.

### Testing

#### Manual Testing Checklist

```bash
# 1. Start local server
python3 -m http.server 8000

# 2. Open in browser
# Navigate to http://localhost:8000

# 3. Test scroll effects:
#    - Click navigation links → Smooth scroll
#    - Scroll down/up → Header auto-hide
#    - Scroll through sections → Reveal animations
#    - Scroll 300px+ → Scroll-to-top button
#    - Submit form → Confirmation message

# 4. Test responsive:
#    - Open DevTools (F12)
#    - Toggle device toolbar (Ctrl+Shift+M)
#    - Test mobile, tablet, desktop views
```

#### Browser Console Testing

```javascript
// Open DevTools (F12) → Console
// Check for errors (should be none)
console.log('Testing IFARD-SA website');
```

### HTML Validation

```bash
# Online W3C Validator
# Visit: https://validator.w3.org/#validate_by_upload

# Or use html5validator (if installed)
html5validator --root . --also-check-css
```

### Git Workflow

```bash
# Check current status
git status

# View recent commits
git log --oneline -5

# Create feature branch
git checkout -b feature/new-feature

# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to remote
git push origin feature/new-feature

# Or push to main (if working directly on main)
git push origin main

# Pull latest changes
git pull origin main
```

### Deployment

#### GitHub Pages

```bash
# Method 1: Via GitHub Settings
# 1. Go to repository Settings → Pages
# 2. Source: "Deploy from a branch"
# 3. Branch: main → root folder
# 4. Save
# Site will be at: https://ifard-sa.github.io/website/

# Method 2: Via GitHub CLI (if gh is installed)
gh repo view --web
# Navigate to Settings → Pages and configure
```

#### Netlify

```bash
# Method 1: Drag & Drop
# Visit https://app.netlify.com/drop
# Drag the entire folder

# Method 2: Netlify CLI
npx netlify-cli deploy --dir=. --prod

# Method 3: Connect Git repository
# 1. Visit https://app.netlify.com
# 2. "New site from Git"
# 3. Connect GitHub repository
# 4. Build command: (leave empty)
# 5. Publish directory: /
```

#### Vercel

```bash
# Vercel CLI
npx vercel --prod

# Or via web interface:
# 1. Visit https://vercel.com
# 2. "Import Project"
# 3. Connect GitHub repository
# 4. Framework: Other
# 5. Root Directory: ./
# 6. Deploy
```

### Performance Testing

```bash
# Lighthouse (Chrome DevTools)
# 1. Open DevTools (F12)
# 2. Go to "Lighthouse" tab
# 3. Select categories: Performance, Accessibility, Best Practices, SEO
# 4. Click "Analyze page load"

# Expected scores:
# Performance: 90+
# Accessibility: 90+
# Best Practices: 95+
# SEO: 95+
```

### File Operations

```bash
# View file structure
tree -L 2

# Or without tree command
find . -type f -not -path '*/\.*' | sort

# Count lines of code
wc -l index.html css/styles.css js/main.js

# Search for text in files
grep -r "searchterm" --include="*.html" --include="*.css" --include="*.js"
```

## 🎯 Important Notes

### Development Workflow

1. **No Build Process**: This is pure HTML/CSS/JS - changes are immediately visible
2. **No Dependencies**: Zero npm packages, no node_modules, no package.json
3. **No Compilation**: No transpilation, bundling, or minification required
4. **Direct Editing**: Edit files directly → refresh browser → see changes
5. **Version Control**: Use Git for all changes

### Code Conventions

#### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Include proper ARIA labels for accessibility
- Use descriptive IDs for navigation targets
- Keep structure clean and well-indented

#### CSS
- Use CSS custom properties (variables) for colors and values
- Follow mobile-first responsive design
- Use meaningful class names (BEM-like: `.service-card`, `.nav-links`)
- Group related styles together
- Comment major sections

#### JavaScript
- Write vanilla JavaScript (ES6+)
- Use `const` and `let` (avoid `var`)
- Add descriptive comments for each module
- Use event delegation where appropriate
- Optimize scroll event handlers
- Use `DOMContentLoaded` for initialization

### Content Language

- **Primary Language**: Spanish (es)
- Content is in Spanish throughout the site
- Consider bilingual support for future expansion
- Meta tags specify `lang="es"`

### Performance Optimization

✅ **Already Implemented:**
- Intersection Observer API (efficient viewport detection)
- CSS `will-change` property for animations
- GPU-accelerated transforms
- Throttled scroll events
- Parallax disabled on mobile devices
- Lazy loading system prepared for images

⚠️ **When Adding Images:**
```html
<!-- Use lazy loading -->
<img data-src="images/photo.jpg" alt="Description" class="lazy">
```

### Accessibility Considerations

✅ **Current Features:**
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Proper heading hierarchy
- Form labels and required fields
- Focus states on interactive elements

🔄 **Recommended Additions:**
```css
/* Add to CSS for motion sensitivity */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Browser Compatibility

**Graceful Degradation:**
- Smooth scroll has CSS fallback (`scroll-behavior: smooth`)
- Intersection Observer gracefully degrades (elements just appear)
- CSS animations fall back to static display

**Testing Checklist:**
- ✅ Test in Chrome, Firefox, Safari, Edge
- ✅ Test on actual mobile devices (not just DevTools)
- ✅ Test with JavaScript disabled
- ✅ Test with slow network throttling

### Common Modifications

#### Update Colors
Edit `css/styles.css` - change CSS variables at the top:
```css
:root {
    --primary-color: #2563eb; /* Change this */
    --secondary-color: #1e40af; /* Change this */
}
```

#### Add New Section
1. Add section in `index.html` with unique `id`
2. Add navigation link in header
3. Style in `css/styles.css`
4. Smooth scroll will work automatically

#### Adjust Animation Speed
Edit `css/styles.css`:
```css
.reveal {
    transition: opacity 0.6s ease, transform 0.6s ease; /* Adjust 0.6s */
}
```

#### Modify Scroll Behavior
Edit `js/main.js`:
- Line 31: Header offset (currently 80px)
- Line 75: Reveal threshold (currently 0.15 = 15%)
- Line 120: Scroll-to-top button trigger (currently 300px)

#### Disable Parallax
Comment out lines 164-176 in `js/main.js`:
```javascript
// const hero = document.querySelector('.hero');
// if (hero) { ... }
```

#### Enable Typing Effect
Uncomment lines 300-304 in `js/main.js`:
```javascript
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
}
```

### SEO Optimization

**Current Meta Tags:**
```html
<meta name="description" content="IFARD-SA - Instituto de Formación y Desarrollo">
<meta name="keywords" content="IFARD-SA, formación, desarrollo, educación">
```

**Recommended Additions:**
```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="IFARD-SA - Instituto de Formación y Desarrollo">
<meta property="og:description" content="...">
<meta property="og:image" content="https://ifard-sa.com/og-image.jpg">
<meta property="og:url" content="https://ifard-sa.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="IFARD-SA">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://ifard-sa.com/twitter-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" href="images/favicon.png">
```

**Create sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://ifard-sa.github.io/website/</loc>
        <lastmod>2025-01-01</lastmod>
        <priority>1.0</priority>
    </url>
</urlset>
```

**Create robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://ifard-sa.github.io/website/sitemap.xml
```

### Troubleshooting

#### Issue: Animations Not Working
**Solution:**
1. Check browser console (F12) for JavaScript errors
2. Verify `js/main.js` is properly linked in `index.html`
3. Ensure browser supports Intersection Observer
4. Clear browser cache (Ctrl+F5)

#### Issue: Scroll Not Smooth
**Solution:**
1. Check if browser supports `scroll-behavior: smooth`
2. JavaScript provides fallback with `window.scrollTo()`
3. Try hard refresh (Ctrl+Shift+R)

#### Issue: Form Doesn't Submit
**Solution:**
- Form is set to `preventDefault()` by design (frontend-only)
- Shows confirmation message instead
- To enable real submission, add backend endpoint or service

#### Issue: Mobile Performance Issues
**Solution:**
1. Parallax is auto-disabled on mobile (CSS media query)
2. Check device performance in DevTools → Performance tab
3. Consider reducing animation complexity
4. Ensure images are optimized when added

#### Issue: Header Overlaps Content
**Solution:**
- Header is fixed with 60px height
- Sections have `margin-top` and scroll offset compensation
- Adjust offset in `js/main.js` line 31 if needed

### Security Considerations

✅ **Current State:**
- No external scripts or CDN dependencies (CSP-friendly)
- No inline JavaScript (separate file)
- Form doesn't submit sensitive data (frontend-only)
- No cookies or local storage used

🔒 **When Adding Backend:**
```html
<!-- Add CSP header -->
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'">
```

### Future Enhancements

**Immediate Additions (Easy):**
- Add actual images and logos
- Replace emoji icons with SVG icons
- Add favicon and app icons
- Create custom 404 page
- Add Google Analytics

**Medium Priority:**
- Hamburger menu for mobile navigation
- Dark mode toggle with localStorage
- Multi-language support (EN/ES)
- Blog or news section
- Course catalog page

**Advanced Features:**
- Backend integration for form submission (Formspree, Netlify Forms)
- Content Management System (CMS) integration
- Progressive Web App (PWA) capabilities
- Advanced animations with Lottie or GSAP
- Backend API for dynamic content

## 📚 Related Documentation

- **CLAUDE.md**: Original AI assistant guide with project basics
- **EFECTOS-SCROLL.md**: Detailed documentation of scroll effects implementation
- **TEST-EFECTOS.html**: Interactive testing page for all scroll effects

## 🤖 AI Assistant Guidelines

### When Editing Files

1. **Always read before editing**: Use Read tool before making changes
2. **Preserve indentation**: Maintain consistent spacing (2 spaces)
3. **Follow conventions**: Match existing code style
4. **Test after changes**: Recommend testing in browser
5. **Update docs**: If making significant changes, update this file

### When Adding Features

1. **Check dependencies**: This project has ZERO dependencies - keep it that way
2. **Use vanilla JS**: No jQuery, React, Vue, etc. unless explicitly requested
3. **Maintain performance**: Test scroll performance (60 FPS target)
4. **Ensure responsive**: Test all breakpoints (mobile, tablet, desktop)
5. **Update documentation**: Add new features to relevant .md files

### When Troubleshooting

1. **Check browser console**: Look for JavaScript errors first
2. **Verify file links**: Ensure CSS and JS files are properly linked
3. **Test in multiple browsers**: Cross-browser compatibility matters
4. **Check Git history**: `git log` shows recent changes
5. **Read documentation**: EFECTOS-SCROLL.md has troubleshooting section

### Genium AI Infrastructure Notes

**Project Classification:**
- Type: Static Website
- Complexity: Low-to-Medium
- Dependencies: None
- Build Required: No
- Deployment: Simple (static hosting)

**Automation Opportunities:**
1. ✅ Automated deployment to GitHub Pages via GitHub Actions
2. ✅ HTML/CSS/JS validation in CI/CD
3. ✅ Lighthouse performance testing
4. ✅ Screenshot testing for visual regression
5. ✅ Automated link checking

**Suggested CI/CD Pipeline:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate HTML
        run: npx html-validate "*.html"
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📊 Project Statistics

- **Total Files**: 6 main files (excluding .git)
- **HTML**: 1 file, ~155 lines (index.html)
- **CSS**: 1 file, ~566 lines (styles.css)
- **JavaScript**: 1 file, ~311 lines (main.js)
- **Documentation**: 3 files (CLAUDE.md, SUNDAYS.md, EFECTOS-SCROLL.md)
- **Total Lines of Code**: ~1,032 lines
- **External Dependencies**: 0
- **Supported Browsers**: 5+ modern browsers
- **Page Load Time**: <2 seconds (expected)
- **Lighthouse Score**: 90+ (expected)

## 🔗 Quick Links

- **Repository**: https://github.com/IFARD-SA/website
- **GitHub Pages** (when deployed): https://ifard-sa.github.io/website/
- **W3C HTML Validator**: https://validator.w3.org/
- **W3C CSS Validator**: https://jigsaw.w3.org/css-validator/
- **Can I Use** (browser support): https://caniuse.com/

## 📝 Changelog Reference

Check recent commits for changes:
```bash
git log --oneline -10
```

Latest major update: Scroll effects implementation (PR #5)

---

**Last Updated**: 2025
**Maintained By**: IFARD-SA Development Team
**For AI Assistants**: This document is your primary reference for working with this codebase
**For Genium AI**: Use this file to understand project structure, commands, and automation opportunities
