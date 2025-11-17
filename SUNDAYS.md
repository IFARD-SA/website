# SUNDAYS.md - AI Assistant & Genium AI Infrastructure Guide

## Project Overview

**Project Name:** IFARD-SA Website
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Repository:** https://github.com/IFARD-SA/website
**Project Type:** Static Website with Interactive JavaScript Effects
**Primary Language:** HTML, CSS, JavaScript (Vanilla JS)
**Branch:** main
**Deployment Target:** Static hosting (GitHub Pages, Netlify, Vercel)

### Description

A professional single-page website for IFARD-SA, an educational and professional development institute. The site features modern scroll effects, smooth animations, and a fully responsive design built with vanilla JavaScript and CSS3.

### Current State

The project is a **production-ready static website** with:
- Complete HTML structure with semantic markup
- Full CSS styling with custom animations and scroll effects
- Advanced JavaScript functionality (scroll effects, parallax, form handling)
- Responsive design optimized for mobile, tablet, and desktop
- No build process or dependencies required
- Ready for immediate deployment

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid, animations, transitions
- **JavaScript (ES6+)**: Vanilla JS with modern APIs (Intersection Observer, etc.)

### Key Features
- **Intersection Observer API**: Efficient scroll-based animations
- **Smooth Scroll**: Native CSS and JavaScript implementation
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Performance Optimized**: GPU-accelerated animations, lazy loading ready
- **No Dependencies**: Zero external libraries or frameworks

### Browser Support
- Chrome 51+ (Intersection Observer support)
- Firefox 55+
- Safari 12.1+
- Edge 79+
- Opera 38+

## Project Structure

```
website/
├── index.html              # Main HTML page (single-page application)
├── css/
│   └── styles.css         # Complete stylesheet with animations (~566 lines)
├── js/
│   └── main.js            # JavaScript with scroll effects (~311 lines)
├── CLAUDE.md              # AI assistant guide (legacy documentation)
├── EFECTOS-SCROLL.md      # Scroll effects documentation (Spanish)
├── TEST-EFECTOS.html      # Testing page for scroll effects
├── SUNDAYS.md             # This file - Genium AI infrastructure guide
└── .git/                  # Git repository

Future structure (planned):
├── images/                # Logo and images (to be added)
├── assets/                # Additional assets
└── README.md              # User-facing documentation (to be created)
```

## Commands

### Development Server

Since this is a static website with no build process, simply serve the files:

```bash
# Option 1: Python 3 (most common)
python3 -m http.server 8000

# Option 2: Python 2 (legacy systems)
python -m SimpleHTTPServer 8000

# Option 3: Node.js http-server
npx http-server -p 8000

# Option 4: PHP built-in server
php -S localhost:8000

# Then open: http://localhost:8000
```

### Testing

```bash
# Open directly in browser (macOS)
open index.html

# Open directly in browser (Linux)
xdg-open index.html

# Open directly in browser (Windows)
start index.html

# View scroll effects test page
open TEST-EFECTOS.html
```

### Validation

```bash
# HTML validation (if html5validator is installed)
html5validator --root . --also-check-css

# W3C validator online
# Visit: https://validator.w3.org/#validate_by_upload

# CSS validation
# Visit: https://jigsaw.w3.org/css-validator/

# Lighthouse audit (Chrome DevTools)
# Press F12 > Lighthouse tab > Generate report
```

### Git Workflow

```bash
# Check repository status
git status

# View current branch
git branch

# View remote repository
git remote -v

# Stage all changes
git add .

# Stage specific files
git add index.html css/styles.css

# Commit with descriptive message
git commit -m "Description of changes"

# Push to main branch
git push origin main

# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# View commit history
git log --oneline --graph --decorate
```

### Deployment

#### GitHub Pages
```bash
# Enable via GitHub web interface:
# Settings → Pages → Source: Deploy from branch → Branch: main → Folder: / (root)
# Site will be available at: https://ifard-sa.github.io/website/

# Or via command line (requires gh CLI)
gh repo edit --enable-pages --pages-branch main
```

#### Netlify
```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### File Operations

```bash
# View file structure
tree -L 2

# Count lines of code
find . -name "*.html" -o -name "*.css" -o -name "*.js" | xargs wc -l

# Search for specific content
grep -r "function" js/
grep -r "IFARD-SA" .

# Check file sizes
du -sh *

# Find large files
find . -type f -size +100k
```

## Architecture

### Application Type
**Single-Page Application (SPA)** - One HTML file with multiple sections navigated via smooth scroll.

### Design Patterns

#### 1. **Component-Based Structure**
- Header with fixed navigation
- Hero section with call-to-action
- About section with text and image placeholder
- Services grid with 6 service cards
- Contact form with validation
- Footer with social links

#### 2. **Progressive Enhancement**
- Core HTML structure works without CSS or JavaScript
- CSS adds styling and basic animations
- JavaScript enhances with advanced scroll effects
- Graceful degradation for older browsers

#### 3. **Event-Driven JavaScript**
- DOMContentLoaded for initialization
- Scroll event listeners for dynamic effects
- Intersection Observer for efficient viewport detection
- Form submission handling with preventDefault

#### 4. **CSS Architecture**
- CSS Custom Properties (variables) for theming
- Mobile-first responsive design
- Modular sections with clear separation
- Animation keyframes for reusable effects

### Key Sections

#### HTML Structure (`index.html`)
```
<!DOCTYPE html>
├── <head>
│   ├── Meta tags (charset, viewport, description, keywords)
│   ├── Title
│   └── CSS link
├── <body>
│   ├── <header> - Fixed navigation bar
│   ├── <section class="hero"> - Hero section with CTA
│   ├── <section class="about"> - About/Mission section
│   ├── <section id="servicios"> - Services grid (6 cards)
│   ├── <section class="contact"> - Contact form
│   ├── <footer> - Social links and copyright
│   └── <script> - JavaScript link
```

#### CSS Organization (`css/styles.css`)
```
1. CSS Variables (:root)
2. Reset and base styles
3. Header and navigation
4. Hero section
5. Generic section styles
6. About section
7. Services grid
8. Contact form
9. Footer
10. Animations (@keyframes)
11. Scroll effects (reveal, parallax, etc.)
12. Responsive breakpoints (@media queries)
```

#### JavaScript Modules (`js/main.js`)
```
1. Smooth scroll navigation
2. Dynamic header (hide/show on scroll)
3. Reveal animations (Intersection Observer)
4. Scroll-to-top button
5. Active navigation highlighting
6. Parallax effect in hero
7. Counter animations (prepared)
8. Form submission handling
9. Lazy image loading (prepared)
10. Typing effect (optional, commented out)
```

### JavaScript Effects Implemented

1. **Smooth Scroll** - Click navigation links for smooth scrolling
2. **Dynamic Header** - Header changes style and hides/shows based on scroll direction
3. **Reveal on Scroll** - Elements animate into view when scrolling
4. **Active Navigation** - Current section highlighted in menu
5. **Scroll-to-Top Button** - Floating button appears after 300px scroll
6. **Parallax Effect** - Hero section has subtle parallax movement
7. **Form Animation** - Success message after form submission
8. **Pulse Effect** - CTA button has subtle pulse animation
9. **Lazy Loading** - System ready for image lazy loading
10. **Counter Animation** - Ready for animated number counters

### CSS Variables (Theming)
```css
--primary-color: #2563eb (blue)
--secondary-color: #1e40af (dark blue)
--accent-color: #3b82f6 (light blue)
--text-dark: #1f2937 (dark gray)
--text-light: #6b7280 (medium gray)
--bg-light: #f9fafb (light gray background)
--white: #ffffff
--shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15)
```

### Responsive Breakpoints
- **Desktop**: Default (1200px max-width containers)
- **Tablet**: ≤768px (single column layouts, adjusted spacing)
- **Mobile**: ≤480px (stacked navigation, reduced padding, disabled parallax)

## Important Notes

### Language
- **Primary Language**: Spanish (Spain)
- All content, labels, and UI text are in Spanish
- Consider adding English version if international audience needed

### Content Placeholders
- About section image: "Espacio para imagen institucional" placeholder
- Social media links: Point to "#" (need real URLs)
- Form submission: Currently shows confirmation but doesn't send data

### Performance Considerations

#### Optimizations Implemented
- ✅ Intersection Observer API for efficient scroll detection
- ✅ `will-change` CSS property for optimized animations
- ✅ GPU-accelerated transforms (translateY, translateX, scale)
- ✅ Throttled scroll events (implicit via requestAnimationFrame)
- ✅ Parallax disabled on mobile devices
- ✅ Lazy loading system prepared for images
- ✅ Minimal DOM manipulation
- ✅ No external dependencies (zero bundle size)

#### Expected Metrics
- Initial page load: < 2s
- Time to Interactive: < 3s
- Animation performance: 60 FPS
- Lighthouse score target: 90+ (Performance, Accessibility, Best Practices, SEO)

### Accessibility Features

#### Implemented
- ✅ Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels on buttons (`aria-label` on scroll-to-top button)
- ✅ Keyboard navigation support (all links and buttons are focusable)
- ✅ Form labels properly associated with inputs
- ✅ Alt text ready for images (when added)

#### To Add (Recommendations)
- [ ] Skip to main content link
- [ ] Focus visible styles enhancement
- [ ] Respect `prefers-reduced-motion` media query
- [ ] ARIA live regions for dynamic content
- [ ] Expanded mobile menu with proper ARIA attributes

### Security Considerations
- ✅ No external dependencies (no supply chain vulnerabilities)
- ✅ No inline JavaScript (separation of concerns)
- ⚠️ Form has no backend validation (needs server-side implementation)
- ⚠️ No CSRF protection (needed when backend is added)
- ⚠️ No rate limiting (needed when form backend is implemented)

### SEO Configuration

#### Implemented
```html
<meta name="description" content="IFARD-SA - Instituto de Formación y Desarrollo">
<meta name="keywords" content="IFARD-SA, formación, desarrollo, educación">
<title>IFARD-SA - Instituto de Formación y Desarrollo</title>
```

#### To Add (Recommendations)
- [ ] Open Graph tags for social media sharing
- [ ] Twitter Card meta tags
- [ ] Canonical URL
- [ ] robots.txt file
- [ ] sitemap.xml
- [ ] Favicon (multiple sizes)
- [ ] Apple touch icons
- [ ] Structured data (JSON-LD schema.org markup)

### Browser Compatibility Notes

#### Modern Features Used
- **Intersection Observer**: Requires polyfill for IE11
- **CSS Grid & Flexbox**: Full support in modern browsers
- **CSS Custom Properties**: No IE support (fallback needed for IE11)
- **Backdrop-filter**: Limited support (graceful degradation)
- **Smooth scroll**: Fallback provided via JavaScript

#### Fallback Strategy
- Core functionality works without JavaScript (progressive enhancement)
- Animations degrade gracefully in older browsers
- CSS Grid has Flexbox fallback in responsive layouts

### Development Guidelines

#### Naming Conventions
- **CSS Classes**: Kebab-case (e.g., `.service-card`, `.nav-links`)
- **IDs**: Lowercase Spanish words (e.g., `#inicio`, `#servicios`, `#contacto`)
- **JavaScript Variables**: camelCase (e.g., `scrollToTopBtn`, `observerOptions`)
- **CSS Custom Properties**: Kebab-case with prefix (e.g., `--primary-color`)

#### Code Style
- **Indentation**: 4 spaces (HTML, CSS, JS)
- **Comments**: Spanish in code, English in documentation
- **Line Length**: ~80-100 characters preferred
- **Semicolons**: Always used in JavaScript
- **Quotes**: Single quotes in JavaScript, double quotes in HTML

#### File Organization
- Keep CSS and JavaScript in separate files (no inline code)
- Use semantic section IDs for navigation
- Organize CSS by component/section
- Comment major sections in JavaScript

### Common Tasks for AI Assistants

#### Adding New Sections
1. Add HTML section with unique ID in `index.html`
2. Add corresponding styles in `css/styles.css`
3. Update navigation links in header
4. Add section to smooth scroll navigation
5. Test responsive behavior at all breakpoints

#### Modifying Colors/Theme
1. Update CSS variables in `:root` selector (`css/styles.css`, lines 2-12)
2. Colors automatically propagate throughout the site
3. Test contrast ratios for accessibility (WCAG 2.1 AA minimum)

#### Adding Images
```html
<!-- For lazy loading -->
<img data-src="images/photo.jpg" alt="Description" class="lazy">

<!-- Standard (loads immediately) -->
<img src="images/logo.png" alt="IFARD-SA Logo">
```

#### Adding New Service Cards
1. Copy `.service-card` structure in `index.html`
2. Update icon emoji and content
3. CSS Grid automatically adjusts layout
4. Reveal animation applies automatically

#### Customizing Animations
- **Speed**: Adjust `transition` duration in CSS (e.g., `0.6s` → `0.4s`)
- **Delay**: Modify `transitionDelay` in `js/main.js` (line 103)
- **Threshold**: Change Intersection Observer threshold (line 75)
- **Parallax**: Adjust `parallaxSpeed` variable (line 169)

#### Form Backend Integration
Current setup shows confirmation message only. To integrate with backend:
1. Remove `e.preventDefault()` or replace with AJAX call
2. Add form `action` and `method` attributes
3. Implement server-side validation
4. Add CSRF token for security
5. Consider using services like Formspree, Netlify Forms, or custom API

### Debugging Tips

#### Common Issues
1. **Animations not working**: Check browser console for JavaScript errors
2. **Scroll not smooth**: Verify `scroll-behavior: smooth` in CSS (line 492)
3. **Buttons not appearing**: Check z-index conflicts and visibility rules
4. **Header hiding incorrectly**: Adjust scroll threshold values (line 61)
5. **Mobile layout broken**: Test at exact breakpoint pixels (768px, 480px)

#### Debugging Tools
```javascript
// Enable in console to see scroll position
window.addEventListener('scroll', () => console.log(window.pageYOffset));

// Check which elements have reveal class
document.querySelectorAll('.reveal').forEach(el => console.log(el));

// Monitor Intersection Observer
console.log('Observer entries:', entries);
```

### Related Documentation
- **CLAUDE.md**: Legacy AI assistant guide (project instructions)
- **EFECTOS-SCROLL.md**: Detailed scroll effects documentation (Spanish)
- **TEST-EFECTOS.html**: Interactive testing page for scroll effects

### Future Enhancements (Planned)

#### Short Term
- [ ] Add real images (logo, institutional photos)
- [ ] Implement hamburger menu for mobile
- [ ] Add favicon and apple-touch-icons
- [ ] Create proper README.md for users
- [ ] Add robots.txt and sitemap.xml

#### Medium Term
- [ ] Dark mode toggle with localStorage persistence
- [ ] Multi-language support (Spanish/English)
- [ ] Form backend integration (email service)
- [ ] Blog section with article cards
- [ ] Gallery/portfolio section

#### Long Term
- [ ] Admin panel for content management
- [ ] Course catalog with filtering
- [ ] Student registration system
- [ ] Online learning platform integration
- [ ] Payment gateway integration

## Genium AI Infrastructure Notes

### Automated Testing Checkpoints
- ✅ HTML validation (W3C validator)
- ✅ CSS validation (W3C CSS validator)
- ✅ JavaScript linting (ESLint recommended)
- ✅ Lighthouse performance audit
- ✅ Cross-browser testing (BrowserStack recommended)
- ✅ Mobile responsiveness testing
- ✅ Accessibility audit (aXe, WAVE)
- ✅ Link checking (all internal links valid)

### CI/CD Considerations
- No build process required (simplifies pipeline)
- Deploy directly from repository
- Suggested workflow: `main` branch → auto-deploy to production
- Feature branches for development, merge to `main` when ready

### Monitoring Recommendations
- **Uptime**: UptimeRobot or Pingdom
- **Analytics**: Google Analytics or Plausible
- **Error Tracking**: Sentry (if JavaScript errors occur)
- **Performance**: Google PageSpeed Insights, WebPageTest

### Backup Strategy
- Repository is the source of truth (backed up on GitHub)
- No database or server-side state to backup
- Static assets (images when added) should be versioned in git

## Quick Reference

### Key Files
- `index.html` - Main page (6,316 bytes)
- `css/styles.css` - Stylesheet (566 lines)
- `js/main.js` - JavaScript (311 lines)

### Key Variables (JavaScript)
- `headerOffset = 80` - Offset for smooth scroll (line 31)
- `threshold: 0.15` - Intersection Observer threshold (line 75)
- `scrollThreshold = 300` - Scroll-to-top button threshold (line 120)
- `parallaxSpeed = 0.5` - Parallax movement speed (line 169)

### Key Classes (CSS)
- `.reveal` - Elements that animate on scroll
- `.reveal-visible` - Triggered when element is in viewport
- `.scrolled` - Header class when page is scrolled
- `.active` - Active navigation link
- `.visible` - Scroll-to-top button when shown

### Color Palette
- Primary Blue: `#2563eb`
- Secondary Blue: `#1e40af`
- Accent Blue: `#3b82f6`
- Text Dark: `#1f2937`
- Text Light: `#6b7280`
- Background: `#f9fafb`

## Support & Maintenance

### Regular Maintenance Tasks
1. Update content as needed (text, images, services)
2. Check for broken links monthly
3. Review analytics and user feedback
4. Test on new browser versions
5. Update meta descriptions and keywords for SEO
6. Monitor performance metrics
7. Refresh dependencies if any are added

### Troubleshooting Contact
- Repository: https://github.com/IFARD-SA/website
- Issues: https://github.com/IFARD-SA/website/issues

---

**Last Updated**: November 2025
**Document Version**: 1.0
**Maintained By**: IFARD-SA Development Team
**For**: AI Assistants and Genium AI Infrastructure
