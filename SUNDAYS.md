# SUNDAYS.md - AI Infrastructure Guide

## Project Overview

**Project Name:** IFARD-SA Website
**Repository:** https://github.com/IFARD-SA/website
**Project Type:** Static Website with Modern JavaScript Enhancements
**Primary Languages:** HTML5, CSS3, JavaScript (Vanilla)
**Target Deployment:** GitHub Pages, Netlify, Vercel, or any static hosting
**Language/Locale:** Spanish (es)

### Description

A modern, animated single-page website for IFARD-SA (Instituto de Formación y Desarrollo). The site features professional scroll effects, smooth animations, and responsive design. Built entirely with vanilla JavaScript (no frameworks), making it lightweight, fast, and easy to maintain.

### Key Features

- **Professional Scroll Effects:** Smooth scrolling, reveal animations, parallax effects
- **Dynamic Header:** Auto-hiding header with glassmorphism effect
- **Interactive Navigation:** Active section highlighting, smooth transitions
- **Responsive Design:** Mobile-first approach with optimized layouts
- **Form Handling:** Animated contact form with confirmation messages
- **Performance Optimized:** Intersection Observer API, lazy loading ready, 60 FPS animations

---

## Project Structure

```
website/
├── index.html              # Main landing page with complete content
├── css/
│   └── styles.css          # Complete CSS with animations and responsive design
├── js/
│   └── main.js             # All JavaScript effects and interactions (10KB)
├── CLAUDE.md               # AI assistant guide (legacy documentation)
├── EFECTOS-SCROLL.md       # Detailed documentation of scroll effects
├── TEST-EFECTOS.html       # Testing page for scroll effects validation
└── .git/                   # Git repository
```

### Entry Points

- **Main HTML:** `index.html` - Complete single-page site with all sections
- **Styles:** `css/styles.css` - 566 lines of modern CSS with custom properties
- **Scripts:** `js/main.js` - 311 lines of vanilla JavaScript

### Content Sections

1. **Header/Navigation** - Fixed header with logo and navigation links
2. **Hero Section** - Welcome section with CTA button and parallax effect
3. **About Section** - Mission statement and institutional information
4. **Services Section** - 6 service cards in responsive grid
5. **Contact Section** - Form with validation and animated confirmation
6. **Footer** - Social links and copyright information

---

## Commands

### Development Server

Since this is a static website, no build process is required. Start a local server:

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

Then open http://localhost:8000 in your browser.

### Direct File Access

```bash
# Open directly in default browser (macOS)
open index.html

# Open directly in default browser (Linux)
xdg-open index.html

# Open directly in default browser (Windows)
start index.html
```

### Testing & Validation

```bash
# View test page for scroll effects
# Start server first, then open:
# http://localhost:8000/TEST-EFECTOS.html

# Validate HTML (if validator available)
html5validator --root . --also-check-css

# Check for JavaScript errors
# Open browser DevTools (F12) → Console tab
```

### Git Operations

```bash
# Check repository status
git status

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Create feature branch
git checkout -b feature/feature-name
git push -u origin feature/feature-name

# Pull latest changes
git pull origin main
```

### Deployment

#### GitHub Pages

```bash
# Already configured - push to main branch
git push origin main

# Site will be available at:
# https://ifard-sa.github.io/website/
```

#### Netlify

```bash
# Option 1: Connect GitHub repo via Netlify dashboard
# Build command: (none)
# Publish directory: /

# Option 2: Netlify CLI
npx netlify-cli deploy --prod --dir=.
```

#### Vercel

```bash
# Option 1: Connect GitHub repo via Vercel dashboard
# Framework Preset: Other
# Root Directory: ./

# Option 2: Vercel CLI
npx vercel --prod
```

### File Operations

```bash
# Read the main HTML file
cat index.html

# Check CSS file size
wc -l css/styles.css

# Check JavaScript file size
wc -l js/main.js

# Find all HTML files
find . -name "*.html"

# Search for specific text in code
grep -r "IFARD-SA" .
```

---

## Architecture

### Technology Stack

**Frontend:**
- HTML5 with semantic markup
- CSS3 with modern features:
  - CSS Custom Properties (variables)
  - Flexbox and CSS Grid layouts
  - CSS Animations and Transitions
  - Backdrop-filter (glassmorphism)
  - Media Queries (responsive design)
- JavaScript ES6+ (Vanilla, no frameworks):
  - Intersection Observer API
  - Smooth scroll behavior
  - Event listeners and DOM manipulation
  - Form handling

**No Build Tools:** Direct HTML/CSS/JS - no compilation, bundling, or transpilation needed

**No Dependencies:** Zero external libraries (no jQuery, Bootstrap, React, etc.)

### Design Patterns

1. **Single Page Application (SPA) Style**
   - All content on one page with anchor navigation
   - Smooth scrolling between sections
   - Hash-based routing (#inicio, #about, etc.)

2. **Progressive Enhancement**
   - Base HTML structure works without JavaScript
   - CSS provides styling and basic animations
   - JavaScript adds interactive enhancements

3. **Mobile-First Responsive Design**
   - Base styles for mobile devices
   - Media queries for tablet (768px) and desktop
   - Responsive grid layouts with CSS Grid/Flexbox

4. **Component-Based Styling**
   - Reusable CSS classes (.service-card, .form-group, etc.)
   - Consistent design tokens via CSS variables
   - Modular CSS sections with clear comments

5. **Observer Pattern (JavaScript)**
   - Intersection Observer for reveal animations
   - Scroll event listeners for header and navigation
   - Event delegation for form handling

### JavaScript Architecture

The `js/main.js` file is organized into 10 logical sections:

1. **Smooth Scroll Navigation** (Lines 8-42)
   - Handles anchor link clicks
   - Smooth scroll with header offset compensation

2. **Dynamic Header** (Lines 47-68)
   - Glassmorphism effect on scroll
   - Auto-hide/show based on scroll direction

3. **Reveal Animations** (Lines 73-106)
   - Intersection Observer implementation
   - Cascading fade-in effects for elements

4. **Scroll to Top Button** (Lines 111-133)
   - Dynamic button creation and positioning
   - Visibility based on scroll position

5. **Active Navigation** (Lines 138-159)
   - Highlights current section in menu
   - Updates based on scroll position

6. **Parallax Effect** (Lines 164-176)
   - Subtle hero section parallax
   - Disabled on mobile for performance

7. **Counter Animations** (Lines 181-211)
   - Ready for numeric counters
   - Smooth count-up animations

8. **Form Handling** (Lines 216-259)
   - Prevents default form submission
   - Animated confirmation messages
   - Auto-reset after 5 seconds

9. **Lazy Loading** (Lines 264-279)
   - Ready for image lazy loading
   - Intersection Observer based

10. **Typing Effect** (Lines 284-304)
    - Optional typewriter effect
    - Commented out by default

### CSS Architecture

The `css/styles.css` file structure:

1. **CSS Variables** (Lines 2-12)
   - Color scheme, shadows, spacing
   - Easy theme customization

2. **Reset & Base Styles** (Lines 14-25)
   - CSS reset for consistency
   - Base typography and body styles

3. **Component Styles**
   - Header/Navigation (Lines 28-68)
   - Hero Section (Lines 71-109)
   - About Section (Lines 126-158)
   - Services Grid (Lines 161-195)
   - Contact Form (Lines 198-260)
   - Footer (Lines 263-291)

4. **Animation Definitions** (Lines 294-303)
   - @keyframes for fadeInUp, slideIn, pulse, etc.

5. **Scroll Effects** (Lines 308-489)
   - Reveal animations
   - Scroll-to-top button
   - Header transitions
   - Form confirmations

6. **Responsive Media Queries** (Lines 496-565)
   - Tablet breakpoint: 768px
   - Mobile breakpoint: 480px
   - Performance optimizations for mobile

### State Management

**No Complex State:** Application uses DOM state and CSS classes:
- `.scrolled` - Header has scrolled past threshold
- `.active` - Current active navigation link
- `.reveal` / `.reveal-visible` - Animation states
- `.visible` - Scroll-to-top button visibility

### Performance Optimizations

1. **Intersection Observer API** - Efficient viewport detection
2. **CSS Will-Change** - GPU acceleration hints for animations
3. **Debounced Scroll Events** - Implicit throttling with browser optimization
4. **Lazy Loading Ready** - System in place for images
5. **Mobile-Specific Optimizations** - Parallax disabled on mobile
6. **Minimal JavaScript** - Only 10KB total
7. **No External Dependencies** - Zero network requests for libraries

---

## Important Notes

### Browser Compatibility

**Minimum Requirements:**
- Chrome 51+ (Intersection Observer support)
- Firefox 55+
- Safari 12.1+
- Edge 79+
- Opera 38+

**Graceful Degradation:**
- Older browsers: Animations simply don't play, content still accessible
- No JavaScript: Site remains functional with basic styling
- Smooth scroll: Falls back to instant scroll in old browsers

### Content Language

- **Primary Language:** Spanish (es)
- **Locale:** Spanish content throughout
- All text, labels, and messages in Spanish
- Consider adding language switcher if English version needed

### Customization Points

#### Adjusting Animation Speed

In `css/styles.css`, modify transition durations:

```css
/* Line 350: Reveal animation speed */
.reveal {
    transition: opacity 0.6s ease, transform 0.6s ease; /* Change 0.6s */
}
```

#### Changing Scroll Threshold

In `js/main.js`, modify threshold values:

```javascript
// Line 120: Scroll-to-top button appearance
if (window.pageYOffset > 300) { // Change 300 to desired pixel value
```

#### Customizing Colors

In `css/styles.css`, update CSS variables:

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #3b82f6;       /* Light blue */
    /* Modify these hex values */
}
```

#### Header Height Offset

In `js/main.js`, adjust for different header heights:

```javascript
// Line 31: Smooth scroll offset
const headerOffset = 80; // Change to match your header height
```

### SEO Considerations

**Current Meta Tags:**
```html
<meta name="description" content="IFARD-SA - Instituto de Formación y Desarrollo">
<meta name="keywords" content="IFARD-SA, formación, desarrollo, educación">
```

**To Improve SEO:**
1. Add Open Graph tags for social media sharing
2. Create a `sitemap.xml` file
3. Add `robots.txt` file
4. Include structured data (JSON-LD)
5. Add more descriptive meta descriptions
6. Consider multilingual meta tags

### Accessibility Notes

**Current Status:**
- ✅ Semantic HTML5 elements used
- ✅ ARIA labels on buttons (scroll-to-top)
- ✅ Keyboard navigation functional
- ✅ Good color contrast ratios
- ⚠️ Could add `prefers-reduced-motion` media query support
- ⚠️ Form inputs could use more ARIA attributes

**To Improve Accessibility:**

```css
/* Add to css/styles.css */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### Performance Metrics

**Expected Performance:**
- First Contentful Paint (FCP): < 1.0s
- Largest Contentful Paint (LCP): < 1.5s
- Time to Interactive (TTI): < 2.0s
- Total Blocking Time (TBT): < 150ms
- Cumulative Layout Shift (CLS): < 0.1

**File Sizes:**
- index.html: ~6.3 KB
- css/styles.css: ~15 KB
- js/main.js: ~10 KB
- **Total:** ~31.3 KB (uncompressed)

### Common Issues & Solutions

#### Issue: Animations not working

**Solutions:**
1. Check browser console for JavaScript errors (F12)
2. Verify `js/main.js` is loaded correctly
3. Ensure browser supports Intersection Observer
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

#### Issue: Smooth scroll not working

**Solutions:**
1. Some browsers don't support `scroll-behavior: smooth`
2. JavaScript provides fallback with `window.scrollTo()`
3. Check if any browser extensions are blocking scroll

#### Issue: Header hiding/showing erratically

**Solutions:**
1. Adjust scroll threshold in `js/main.js` line 61
2. May need debouncing for slower devices
3. Test scroll speed - very fast scrolling may trigger issues

#### Issue: Form doesn't submit

**Solutions:**
1. Form prevents default - this is intentional for demo
2. To enable real submission, add backend endpoint
3. Consider using FormSpree, Netlify Forms, or similar service

#### Issue: Images not loading (when added)

**Solutions:**
1. Check file paths are relative and correct
2. Ensure file names match exactly (case-sensitive)
3. Verify images are in repository
4. Use data-src attribute for lazy loading

### Adding Real Form Submission

The form currently shows a confirmation message without sending data. To add real submission:

**Option 1: Netlify Forms (if hosted on Netlify)**

```html
<!-- In index.html, modify form tag -->
<form class="contact-form" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact">
    <!-- rest of form fields -->
</form>
```

**Option 2: FormSpree**

```html
<!-- Modify form action -->
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: Custom Backend**

Remove the `e.preventDefault()` in `js/main.js` line 220 and add action attribute to form.

### Future Enhancements

**Potential Additions:**
1. **Hamburger Menu** - Mobile navigation menu
2. **Dark Mode Toggle** - Theme switcher
3. **Multilingual Support** - Spanish/English toggle
4. **Blog Section** - News and articles
5. **Image Gallery** - Photo gallery with lightbox
6. **Testimonials** - Client reviews with carousel
7. **FAQ Section** - Expandable accordion
8. **Live Chat Integration** - Customer support widget
9. **Analytics** - Google Analytics or Plausible
10. **Cookie Consent** - GDPR compliance banner

### Working with Images

When adding images to the site:

**Standard Image:**
```html
<img src="images/photo.jpg" alt="Description" width="800" height="600">
```

**Lazy Loaded Image:**
```html
<img data-src="images/photo.jpg" alt="Description" width="800" height="600">
<!-- JavaScript automatically loads when in viewport -->
```

**Recommended Image Formats:**
- Use WebP for modern browsers with JPG fallback
- Compress images before upload (TinyPNG, ImageOptim)
- Provide multiple sizes for responsive images
- Use SVG for logos and icons

### Code Style Conventions

**HTML:**
- 4-space indentation
- Semantic HTML5 elements preferred
- Comments for major sections
- Lowercase attribute names
- Double quotes for attributes

**CSS:**
- 4-space indentation
- CSS variables for theme colors
- BEM-like naming for complex components
- Mobile-first media queries
- Comments separating major sections

**JavaScript:**
- 4-space indentation
- camelCase for variables and functions
- Clear section comments
- ES6+ features (const, let, arrow functions)
- Single quotes for strings

---

## Integration with AI Systems

### For Genium AI Infrastructure

**Repository Analysis:**
- Type: Static website
- Complexity: Low-Medium
- Dependencies: None
- Build Required: No
- Test Framework: Manual testing only
- CI/CD: Simple static deployment

**Automated Tasks:**
- Can deploy directly without build step
- HTML/CSS/JS validation recommended
- Lighthouse performance checks useful
- Screenshot testing for responsive design

**Safe Operations:**
- Reading all files is safe
- Modifying HTML/CSS/JS as needed
- Creating new pages (about.html, etc.)
- Adding images to images/ directory

**Caution Required:**
- Don't remove JavaScript scroll functionality
- Preserve CSS animation classes
- Maintain header positioning (fixed)
- Keep form structure intact

### For AI Assistants

**When Making Changes:**
1. Always read the file before editing (use Read tool)
2. Preserve existing scroll effects unless told otherwise
3. Maintain Spanish language content
4. Keep responsive design intact
5. Test changes by viewing in browser

**Understanding the Project:**
- No package.json = no npm dependencies
- No build tools = changes are immediate
- Single page design = all content in index.html
- Vanilla JS = no framework knowledge needed

**Common Requests:**
- Adding sections: Copy existing section structure
- Changing colors: Modify CSS variables
- Adding pages: Create new HTML file following index.html structure
- Fixing bugs: Check browser console first

**Files to Never Delete:**
- index.html (main page)
- css/styles.css (all styling)
- js/main.js (all functionality)

**Files Safe to Modify:**
- TEST-EFECTOS.html (testing page only)
- CLAUDE.md (documentation)
- EFECTOS-SCROLL.md (documentation)

---

## Quick Reference

### Essential File Paths

```
/index.html               # Main page
/css/styles.css          # All styles
/js/main.js              # All scripts
/EFECTOS-SCROLL.md       # Effect documentation
/TEST-EFECTOS.html       # Testing page
```

### Key CSS Classes

```css
.hero                    # Hero section
.section-title           # Section headings
.service-card            # Service cards
.contact-form            # Contact form
.scroll-to-top           # Scroll button
.reveal                  # Elements to animate
.reveal-visible          # Animated state
.active                  # Active nav link
.scrolled                # Header scrolled state
```

### Key JavaScript Functions

```javascript
// Smooth scroll to section
window.scrollTo({ top: position, behavior: 'smooth' })

// Observe elements for animations
observer.observe(element)

// Animate counter
animateCounter(element, target, duration)

// Type writer effect
typeWriter(element, text, speed)
```

### CSS Variables Reference

```css
--primary-color: #2563eb    /* Main brand color */
--secondary-color: #1e40af  /* Darker variant */
--accent-color: #3b82f6     /* Accent/hover color */
--text-dark: #1f2937        /* Body text */
--text-light: #6b7280       /* Secondary text */
--bg-light: #f9fafb         /* Background sections */
--white: #ffffff            /* White */
--shadow: ...               /* Standard shadow */
--shadow-lg: ...            /* Large shadow */
```

### Testing Checklist

- [ ] Smooth scroll between sections works
- [ ] Header hides on scroll down, shows on scroll up
- [ ] Elements animate (reveal) when scrolling
- [ ] Active navigation highlights current section
- [ ] Scroll-to-top button appears after 300px scroll
- [ ] Hero parallax effect works (desktop only)
- [ ] Form shows confirmation message on submit
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors in browser DevTools
- [ ] All links navigate correctly

---

## Contact & Repository Information

**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Repository URL:** https://github.com/IFARD-SA/website
**Primary Branch:** main
**Project Status:** Active Development
**Last Major Update:** November 2025

---

## Version History

- **v1.0** - Initial single-page site with complete scroll effects
- Current version includes: smooth scrolling, reveal animations, parallax, dynamic header, active navigation, scroll-to-top button, form handling, and responsive design

---

**Note:** This SUNDAYS.md file is specifically designed for AI assistants and automated systems (like Genium AI) to understand and work with this codebase effectively. It provides comprehensive context about the project structure, commands, architecture, and important considerations for making changes safely and appropriately.
