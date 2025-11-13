# SUNDAYS.md - AI Infrastructure Guide for IFARD-SA Website

> **Purpose**: This document provides comprehensive guidance for AI assistants and Genium AI infrastructure to effectively understand, navigate, and work with the IFARD-SA website codebase.

---

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Information](#repository-information)
3. [Architecture & Technology Stack](#architecture--technology-stack)
4. [Project Structure](#project-structure)
5. [Key Features & Functionality](#key-features--functionality)
6. [Code Organization](#code-organization)
7. [Development Workflow](#development-workflow)
8. [AI Assistant Guidelines](#ai-assistant-guidelines)
9. [Common Tasks & Patterns](#common-tasks--patterns)
10. [Testing & Validation](#testing--validation)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)
13. [Performance Considerations](#performance-considerations)
14. [Accessibility & Best Practices](#accessibility--best-practices)

---

## Project Overview

### Description
IFARD-SA is a modern, professional static website for "Instituto de Formación y Desarrollo" (Institute of Training and Development). The website showcases the organization's services, mission, and provides contact functionality.

### Project Type
**Static Website** - Pure HTML, CSS, and Vanilla JavaScript

### Current State
✅ **Production Ready** - Fully functional with advanced scroll effects and animations

### Language
- **Primary Language**: Spanish (ES)
- **Content**: Spanish
- **Code Comments**: Spanish

### Organization
- **Name**: IFARD-SA
- **Purpose**: Educational institute focused on professional training and development

---

## Repository Information

### Git Repository
- **URL**: `https://github.com/IFARD-SA/website`
- **Primary Branch**: `main`
- **Recent Activity**: Active development with scroll effects implementation

### Latest Commit
```
cf3e459 Merge pull request #5 from IFARD-SA/sundays-ai/ticket-agrega-efectos-de-scroll-con-js-si-es-necesario-1762977598
```

### Version Control Strategy
- Feature branches for new functionality
- Pull request workflow
- Merge commits for feature integration

---

## Architecture & Technology Stack

### Core Technologies

#### HTML5
- **Version**: HTML5 (DOCTYPE html)
- **Semantic Structure**: Uses semantic HTML elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- **Accessibility**: ARIA labels and proper heading hierarchy
- **Meta Tags**: SEO-friendly with proper meta descriptions and keywords

#### CSS3
- **File**: `css/styles.css` (566 lines, ~10.8 KB)
- **Architecture**:
  - CSS Custom Properties (CSS Variables) for theming
  - Modern layout with Flexbox and CSS Grid
  - Mobile-first responsive design
  - Animation-rich with keyframes and transitions
- **Methodology**: Component-based styling with utility classes

#### JavaScript
- **File**: `js/main.js` (311 lines, ~10.5 KB)
- **Type**: Vanilla JavaScript (ES6+)
- **No Dependencies**: Zero external libraries or frameworks
- **Features**:
  - Modern ES6+ syntax
  - Intersection Observer API
  - Event delegation
  - Modular organization with clear sections

### No Build Process
- ✅ No transpilation required
- ✅ No bundlers (webpack, vite, parcel)
- ✅ No package managers (npm, yarn)
- ✅ Direct file serving
- ✅ Browser-native code execution

### Browser Compatibility
- **Chrome**: 51+ (Intersection Observer support)
- **Firefox**: 55+
- **Safari**: 12.1+
- **Edge**: 79+
- **Opera**: 38+

---

## Project Structure

```
website/
├── .git/                      # Git version control
├── index.html                 # Main landing page (155 lines)
├── TEST-EFECTOS.html         # Testing page for scroll effects (205 lines)
├── css/
│   └── styles.css            # Main stylesheet with animations (566 lines)
├── js/
│   └── main.js               # JavaScript with scroll effects (311 lines)
├── CLAUDE.md                 # AI assistant guide (legacy, 7.3 KB)
├── EFECTOS-SCROLL.md         # Scroll effects documentation (8.9 KB)
└── SUNDAYS.md                # This file - Genium AI infrastructure guide
```

### File Descriptions

#### `index.html` - Main Landing Page
- **Lines**: 155
- **Structure**:
  - `<header>`: Fixed navigation bar with logo and menu
  - `<section id="inicio">`: Hero section with CTA
  - `<section id="about">`: About section with mission statement
  - `<section id="servicios">`: Services grid with 6 service cards
  - `<section id="contacto">`: Contact form
  - `<footer>`: Social links and copyright
- **Sections**: 4 main content sections
- **Forms**: 1 contact form with validation
- **Links**: Internal anchor navigation

#### `css/styles.css` - Comprehensive Stylesheet
- **Lines**: 566
- **Size**: ~10.8 KB
- **Organization**:
  - Lines 1-18: CSS Variables and reset
  - Lines 19-69: Header and navigation
  - Lines 70-110: Hero section
  - Lines 111-159: About section
  - Lines 160-196: Services section
  - Lines 197-261: Contact section
  - Lines 262-292: Footer
  - Lines 293-303: Base animations
  - Lines 304-495: Scroll effects and advanced animations
  - Lines 496-565: Responsive media queries

#### `js/main.js` - Interactive Functionality
- **Lines**: 311
- **Size**: ~10.5 KB
- **Sections**:
  1. Smooth scroll navigation (lines 1-42)
  2. Dynamic header with auto-hide (lines 44-68)
  3. Reveal animations with Intersection Observer (lines 70-106)
  4. Scroll-to-top button (lines 108-133)
  5. Active navigation indicator (lines 135-159)
  6. Parallax effect on hero (lines 161-176)
  7. Counter animations (lines 178-211)
  8. Form submission handler (lines 213-259)
  9. Lazy image loading (lines 261-279)
  10. Typing effect utility (lines 281-304)
  11. Console branding (lines 306-311)

#### `EFECTOS-SCROLL.md` - Technical Documentation
- **Purpose**: Detailed documentation of scroll effects implementation
- **Audience**: Developers working on scroll animations
- **Content**:
  - Feature descriptions
  - Customization guides
  - Performance metrics
  - Troubleshooting tips

#### `TEST-EFECTOS.html` - Testing Interface
- **Purpose**: Visual checklist and testing guide for scroll effects
- **Usage**: Quick validation that all effects work correctly
- **Contains**: Status cards, checklists, and testing instructions

---

## Key Features & Functionality

### 1. Navigation System

#### Fixed Header
- Sticky positioning at top of viewport
- Transparent-to-solid transition on scroll
- Auto-hide on scroll down, reveal on scroll up
- Backdrop blur effect (glassmorphism)

#### Active Link Highlighting
- Automatic detection of current section
- Visual indicator (underline) on active link
- Smooth transitions between active states

#### Smooth Scroll Navigation
- Animated scrolling between sections
- Offset adjustment for fixed header
- Keyboard navigation support

### 2. Hero Section

#### Design
- Full-width gradient background (blue tones)
- Centered content with CTA button
- Responsive typography

#### Effects
- Fade-in animations on page load
- Parallax scrolling effect (desktop only)
- Opacity fade on scroll
- Pulse animation on CTA button

### 3. About Section

#### Layout
- Two-column grid (desktop)
- Text content on left, placeholder image on right
- Responsive stack on mobile

#### Content
- Mission statement
- Experience description
- Team capabilities

#### Animations
- Reveal on scroll with fade-in
- Staggered animation timing

### 4. Services Section

#### Layout
- Responsive grid (3 columns on desktop, 1 on mobile)
- 6 service cards with icons

#### Services Listed
1. 📚 Formación Profesional (Professional Training)
2. 🎓 Cursos Especializados (Specialized Courses)
3. 💼 Consultoría (Consulting)
4. 🌐 Formación Online (Online Training)
5. 📊 Desarrollo Organizacional (Organizational Development)
6. 🏆 Certificaciones (Certifications)

#### Interactions
- Hover elevation effect
- Shadow enhancement on hover
- Reveal animation on scroll

### 5. Contact Section

#### Form Fields
- Nombre Completo (Full Name) - Required
- Correo Electrónico (Email) - Required, validated
- Teléfono (Phone) - Optional
- Mensaje (Message) - Required, textarea

#### Behavior
- Client-side form validation
- Animated confirmation message on submit
- Form reset after 5 seconds
- No actual backend submission (frontend only)

### 6. Footer

#### Content
- Social media links (placeholders with emojis)
- Copyright notice
- Organization name

#### Styling
- Dark background
- Centered layout
- Icon hover effects

### 7. Scroll-to-Top Button

#### Behavior
- Appears after 300px of scrolling
- Fixed position (bottom-right)
- Smooth scroll to top on click
- Responsive sizing (smaller on mobile)

#### Design
- Circular floating button
- Arrow icon (↑)
- Fade and translate animations
- Shadow and scale effects on hover

### 8. Advanced Animations

#### Reveal on Scroll
- **Technology**: Intersection Observer API
- **Threshold**: 15% visibility triggers animation
- **Direction**: Fade-in with Y-axis translation
- **Timing**: Staggered delays (0.1s increments)
- **Elements**: All major sections and cards

#### Parallax Effects
- **Target**: Hero section only
- **Speed**: 0.5x scroll speed
- **Opacity**: Fades out as user scrolls
- **Mobile**: Disabled for performance

#### Header Transitions
- **Scroll Down**: Hides after 200px
- **Scroll Up**: Reveals immediately
- **Background**: Changes to translucent with blur
- **Timing**: 0.3s ease transitions

---

## Code Organization

### CSS Architecture

#### Variables (Custom Properties)
```css
--primary-color: #2563eb;      /* Blue */
--secondary-color: #1e40af;    /* Dark blue */
--accent-color: #3b82f6;       /* Light blue */
--text-dark: #1f2937;          /* Nearly black */
--text-light: #6b7280;         /* Gray */
--bg-light: #f9fafb;           /* Off-white */
--white: #ffffff;
--shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
```

#### Naming Conventions
- **Semantic names**: `.hero`, `.about`, `.services`, `.contact`
- **Descriptive classes**: `.service-card`, `.nav-links`, `.cta-button`
- **State classes**: `.scrolled`, `.active`, `.visible`, `.reveal-visible`
- **BEM-inspired**: Component-element naming pattern

#### Responsive Breakpoints
```css
@media (max-width: 768px)  /* Tablets and below */
@media (max-width: 480px)  /* Mobile devices */
```

### JavaScript Architecture

#### Code Style
- Modern ES6+ syntax
- Arrow functions where appropriate
- `const` for immutable references
- `let` for mutable variables
- Template literals for strings

#### Event Handling
- Event delegation where possible
- Proper event listener cleanup
- Passive event listeners for scroll (implicit)

#### DOM Manipulation
- Query selectors for element selection
- ClassList API for class management
- Dynamic element creation (scroll-to-top button)

#### APIs Used
- **Intersection Observer**: Efficient scroll-based animations
- **Window scroll events**: Header behavior and navigation
- **FormData API**: Form handling
- **Element.getBoundingClientRect()**: Position calculations

#### Performance Patterns
- **Debouncing**: Implicit through browser optimization
- **Will-change CSS**: Optimization hints for animations
- **Observer pattern**: Intersection Observer for lazy effects
- **RequestAnimationFrame**: Not explicitly used but respected by browser

---

## Development Workflow

### Local Development Setup

#### Option 1: Python (Recommended)
```bash
# Python 3.x
python3 -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

#### Option 2: Node.js
```bash
npx http-server -p 8000
# or
npx serve
```

#### Option 3: PHP
```bash
php -S localhost:8000
```

#### Option 4: Direct File Opening
```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```
⚠️ **Note**: Direct file opening may cause CORS issues with certain features.

### Development Best Practices

#### Making Changes

1. **HTML Changes**
   - Maintain semantic structure
   - Keep Spanish language consistency
   - Preserve existing ID attributes for navigation
   - Test form validation after changes

2. **CSS Changes**
   - Use CSS variables for colors and common values
   - Maintain responsive design in media queries
   - Test animations for 60 FPS performance
   - Preserve `will-change` optimizations

3. **JavaScript Changes**
   - Keep vanilla JS (no external dependencies)
   - Maintain ES6+ syntax consistency
   - Comment sections clearly in Spanish
   - Test across multiple browsers

#### File Modification Guidelines

✅ **Safe to Modify**:
- Content in HTML sections
- CSS color variables
- Animation timing values
- Form field labels
- Service descriptions

⚠️ **Modify with Caution**:
- HTML element IDs (used for navigation)
- CSS class names (referenced in JavaScript)
- JavaScript event listeners
- Intersection Observer thresholds

❌ **Avoid Modifying**:
- File structure (unless necessary)
- Core JavaScript patterns
- CSS reset and base styles

### Testing Changes

#### Browser Testing Checklist
- [ ] Navigation links work (smooth scroll)
- [ ] Hero animations play on load
- [ ] Scroll reveals work in all sections
- [ ] Header hides/shows on scroll
- [ ] Active nav link highlights correctly
- [ ] Service cards hover effects work
- [ ] Form submits and shows confirmation
- [ ] Scroll-to-top button appears and works
- [ ] Parallax effect (desktop only)
- [ ] Responsive design (mobile, tablet, desktop)

#### Browser DevTools
```javascript
// Open console and check for errors
// Should see welcome message:
// "¡Bienvenido a IFARD-SA! 🎓"
```

#### Performance Testing
- Check FPS in Chrome DevTools Performance tab
- Target: 60 FPS during animations
- Look for layout thrashing warnings
- Monitor memory usage during scroll

---

## AI Assistant Guidelines

### Understanding the Codebase

#### File Priority for Understanding
1. **Start with**: `index.html` - Understand page structure
2. **Then review**: `css/styles.css` - Understand visual design
3. **Next check**: `js/main.js` - Understand interactions
4. **Reference**: `EFECTOS-SCROLL.md` - Understand animation details
5. **Test with**: `TEST-EFECTOS.html` - Validate understanding

#### Key Concepts to Grasp

1. **Static Nature**
   - No backend/server-side processing
   - No database interactions
   - No build/compile step required
   - All code runs in browser

2. **Vanilla JavaScript**
   - No jQuery, React, Vue, or other frameworks
   - Direct DOM manipulation
   - Native browser APIs only
   - ES6+ modern JavaScript

3. **Spanish Language**
   - All user-facing content in Spanish
   - Code comments in Spanish
   - Variable names may be in Spanish
   - Maintain language consistency

4. **Animation-Rich**
   - Heavy use of CSS transitions and animations
   - Intersection Observer for scroll effects
   - Performance-optimized with `will-change`
   - Responsive to scroll events

### When to Use What Tool

#### Reading Files
```javascript
// For understanding structure
Read("index.html")

// For styling details
Read("css/styles.css")

// For interaction logic
Read("js/main.js")

// For documentation
Read("EFECTOS-SCROLL.md")
Read("CLAUDE.md")
```

#### Searching for Patterns
```javascript
// Find all sections
Grep({ pattern: "<section", path: "index.html" })

// Find all CSS animations
Grep({ pattern: "@keyframes", path: "css/styles.css" })

// Find event listeners
Grep({ pattern: "addEventListener", path: "js/main.js" })
```

#### Making Changes
```javascript
// For small, targeted changes
Edit({
  file_path: "index.html",
  old_string: "old content",
  new_string: "new content"
})

// For new content sections
Write({
  file_path: "new-page.html",
  content: "full HTML content"
})
```

### Common Assistance Scenarios

#### Scenario 1: Adding New Content Section

**User Request**: "Add a testimonials section"

**AI Approach**:
1. Read `index.html` to understand structure
2. Identify insertion point (likely before contact section)
3. Create HTML with consistent styling classes
4. Ensure proper ID for navigation
5. Add corresponding nav link if needed
6. Apply `.reveal` class for scroll animation
7. Test navigation and scroll effects

**Code Pattern**:
```html
<!-- Add to index.html before #contacto -->
<section id="testimonios" class="testimonials">
    <h2 class="section-title">Testimonios</h2>
    <div class="testimonials-grid">
        <!-- Testimonial cards here -->
    </div>
</section>
```

```css
/* Add to css/styles.css */
.testimonials {
    background: var(--bg-light);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

#### Scenario 2: Modifying Colors/Theme

**User Request**: "Change the primary color to green"

**AI Approach**:
1. Read `css/styles.css`
2. Identify CSS variables at `:root`
3. Change `--primary-color`, `--secondary-color`, `--accent-color`
4. Ensure sufficient contrast for accessibility
5. Test across all sections

**Code Pattern**:
```css
:root {
    --primary-color: #10b981;      /* Green */
    --secondary-color: #059669;    /* Dark green */
    --accent-color: #34d399;       /* Light green */
}
```

#### Scenario 3: Adjusting Animation Speed

**User Request**: "Make animations faster"

**AI Approach**:
1. Read `css/styles.css` and identify transition durations
2. Read `js/main.js` for JavaScript timing values
3. Reduce duration values proportionally
4. Test to ensure smooth appearance
5. Document changes made

**Code Pattern**:
```css
/* Change in css/styles.css */
.reveal {
    transition: opacity 0.4s ease, transform 0.4s ease; /* Was 0.6s */
}
```

```javascript
// Change in js/main.js
element.style.transitionDelay = `${index * 0.05}s`; // Was 0.1s
```

#### Scenario 4: Adding New Service Card

**User Request**: "Add a new service for 'Digital Marketing'"

**AI Approach**:
1. Read `index.html` services section
2. Copy existing service card pattern
3. Update icon, title, and description
4. Maintain consistent structure
5. No CSS changes needed (grid auto-adapts)

**Code Pattern**:
```html
<div class="service-card">
    <div class="service-icon">📱</div>
    <h3>Marketing Digital</h3>
    <p>
        Estrategias de marketing digital para impulsar tu presencia
        en línea y alcanzar tus objetivos comerciales.
    </p>
</div>
```

#### Scenario 5: Fixing Broken Scroll Effect

**User Request**: "The reveal animation isn't working"

**AI Approach**:
1. Check browser console for JavaScript errors
2. Verify `js/main.js` is properly linked in HTML
3. Confirm Intersection Observer is supported
4. Check if `.reveal` class is applied to elements
5. Verify CSS transitions are defined
6. Test threshold and rootMargin values

**Debugging Checklist**:
```javascript
// In browser console
console.log('JS loaded:', typeof observer !== 'undefined');
console.log('Reveal elements:', document.querySelectorAll('.reveal').length);
console.log('IO support:', 'IntersectionObserver' in window);
```

### Code Modification Patterns

#### Pattern 1: Maintaining Consistency

When adding new elements, always:
- Use existing CSS classes when possible
- Match naming conventions
- Apply `.reveal` for scroll animations
- Use semantic HTML5 elements
- Include ARIA labels for accessibility

#### Pattern 2: Preserving Functionality

When modifying existing code:
- Test navigation after HTML ID changes
- Verify JavaScript selectors after class changes
- Check responsive behavior after layout changes
- Validate form behavior after form changes

#### Pattern 3: Spanish Language

When adding content:
- Use Spanish for all user-facing text
- Maintain formal tone ("Usted" form)
- Use proper Spanish punctuation (¿¡)
- Keep technical terms in original language when appropriate

### Error Prevention

#### Common Mistakes to Avoid

1. **Breaking Navigation**
   - Don't change section IDs without updating nav links
   - Don't remove sections referenced in navigation

2. **Breaking JavaScript**
   - Don't change class names used in `querySelector`
   - Don't modify element structure expected by JS

3. **Breaking Responsive Design**
   - Don't add fixed widths without media query adjustments
   - Don't forget mobile testing

4. **Breaking Animations**
   - Don't remove `will-change` properties
   - Don't change timing without testing
   - Don't remove observer targets without updating JS

#### Validation Steps

Before completing any modification:
1. ✅ HTML validates (W3C validator)
2. ✅ No console errors in browser
3. ✅ All navigation links work
4. ✅ Animations play smoothly
5. ✅ Responsive design works
6. ✅ Form functions properly
7. ✅ Scroll effects trigger correctly

---

## Common Tasks & Patterns

### Task 1: Adding a New Page

**Steps**:
1. Create new HTML file (e.g., `about.html`)
2. Copy structure from `index.html`
3. Update page title and meta tags
4. Modify content sections
5. Link CSS: `<link rel="stylesheet" href="css/styles.css">`
6. Link JS: `<script src="js/main.js"></script>`
7. Update navigation in all pages

**Template**:
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Page description]">
    <title>[Page Title] - IFARD-SA</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>

    <main>
        <!-- Page content -->
    </main>

    <footer>
        <!-- Footer content -->
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

### Task 2: Customizing Color Scheme

**Location**: `css/styles.css` (lines 2-12)

**Steps**:
1. Choose new color palette
2. Update CSS variables in `:root`
3. Test contrast ratios for accessibility (WCAG 2.1)
4. Check all sections visually
5. Test hover states and active states

**Variables to Update**:
```css
:root {
    --primary-color: #[new-color];
    --secondary-color: #[darker-variant];
    --accent-color: #[lighter-variant];
    --text-dark: #[dark-text];
    --text-light: #[light-text];
    --bg-light: #[light-background];
}
```

### Task 3: Modifying Form Behavior

**Location**: `js/main.js` (lines 213-259)

**Current Behavior**:
- Shows confirmation message
- Resets after 5 seconds
- No actual submission

**To Add Real Submission**:
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
        } else {
            // Show error message
        }
    } catch (error) {
        // Handle network error
    }
});
```

### Task 4: Adding Images

**Steps**:
1. Create `images/` directory
2. Add optimized images (WebP recommended)
3. Update HTML with `<img>` tags
4. Use lazy loading attribute or existing lazy loader

**For Lazy Loading** (use existing system):
```html
<img data-src="images/photo.jpg" alt="Description" class="lazy-image">
```

The JavaScript in `main.js` (lines 261-279) automatically handles lazy loading for images with `data-src` attribute.

**For Immediate Loading**:
```html
<img src="images/photo.jpg" alt="Description" loading="lazy">
```

### Task 5: Creating Counter/Statistics Section

**Steps**:
1. Add HTML with `data-counter` attributes
2. Existing JavaScript (lines 178-211) handles animation

**Example**:
```html
<section id="estadisticas" class="stats">
    <h2 class="section-title">Nuestros Números</h2>
    <div class="stats-grid">
        <div class="stat-item">
            <span class="stat-number" data-counter="1500">0</span>
            <p>Estudiantes</p>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-counter="50">0</span>
            <p>Cursos</p>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-counter="15">0</span>
            <p>Años de Experiencia</p>
        </div>
    </div>
</section>
```

The numbers will automatically animate from 0 to the target value when scrolled into view.

### Task 6: Enabling Typing Effect

**Location**: `js/main.js` (lines 299-304)

**Steps**:
1. Uncomment the code at the end of `main.js`
2. Adjust speed parameter if needed
3. Test on live page

**Code to Uncomment**:
```javascript
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80); // 80ms per character
}
```

### Task 7: Adding Social Media Links

**Location**: `index.html` (lines 140-146)

**Current State**: Placeholder emojis with empty `#` links

**Update Pattern**:
```html
<div class="social-links">
    <a href="https://facebook.com/ifardsa" aria-label="Facebook" target="_blank" rel="noopener">📘</a>
    <a href="https://twitter.com/ifardsa" aria-label="Twitter" target="_blank" rel="noopener">🐦</a>
    <a href="https://linkedin.com/company/ifardsa" aria-label="LinkedIn" target="_blank" rel="noopener">💼</a>
    <a href="https://instagram.com/ifardsa" aria-label="Instagram" target="_blank" rel="noopener">📷</a>
</div>
```

**Or Replace with Icon Font**:
```html
<!-- Add Font Awesome in <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Update social links -->
<div class="social-links">
    <a href="https://facebook.com/ifardsa" aria-label="Facebook">
        <i class="fab fa-facebook"></i>
    </a>
    <!-- etc -->
</div>
```

### Task 8: Implementing Dark Mode

**Steps**:
1. Add toggle button in header
2. Create CSS variables for dark theme
3. Add JavaScript to toggle and persist preference

**CSS Addition**:
```css
:root {
    /* Light mode (default) */
}

:root[data-theme="dark"] {
    --primary-color: #3b82f6;
    --text-dark: #f9fafb;
    --text-light: #d1d5db;
    --bg-light: #1f2937;
    --white: #111827;
}
```

**JavaScript Addition**:
```javascript
// Add to main.js
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '🌙';
themeToggle.setAttribute('aria-label', 'Toggle dark mode');

themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
});

// Load saved preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

document.querySelector('header nav').appendChild(themeToggle);
```

---

## Testing & Validation

### Manual Testing Checklist

#### Visual Testing
- [ ] All sections render correctly
- [ ] Images load (if any)
- [ ] Fonts display properly
- [ ] Colors match design
- [ ] Spacing and alignment correct
- [ ] Responsive breakpoints work

#### Functional Testing
- [ ] All navigation links work
- [ ] Smooth scroll functions
- [ ] Form validates input
- [ ] Form shows confirmation
- [ ] Scroll-to-top button appears and works
- [ ] External links open in new tabs
- [ ] No JavaScript console errors

#### Animation Testing
- [ ] Hero animations play on load
- [ ] Reveal animations trigger on scroll
- [ ] Service cards animate on hover
- [ ] Header hides/shows on scroll direction change
- [ ] Active nav link updates while scrolling
- [ ] Parallax effect works (desktop)
- [ ] Animations run at 60 FPS

#### Responsive Testing
Breakpoints to test:
- [ ] **Mobile**: 375px (iPhone SE)
- [ ] **Mobile**: 414px (iPhone Pro Max)
- [ ] **Tablet**: 768px (iPad)
- [ ] **Desktop**: 1024px (Small laptop)
- [ ] **Desktop**: 1440px (Standard desktop)
- [ ] **Large**: 1920px+ (Large desktop)

#### Browser Testing
Test in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

#### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Tab order is logical
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Color contrast passes WCAG 2.1 AA
- [ ] Screen reader compatible
- [ ] Heading hierarchy correct (h1 → h2 → h3)

### Automated Testing

#### HTML Validation
```bash
# Option 1: W3C Online Validator
# Visit: https://validator.w3.org/
# Upload index.html

# Option 2: Local validation (if installed)
html5validator --root . --also-check-css
```

#### Lighthouse Testing
```bash
# Chrome DevTools → Lighthouse tab
# Run audit for:
# - Performance
# - Accessibility
# - Best Practices
# - SEO

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 90+
# SEO: 90+
```

#### Performance Testing

**Chrome DevTools Performance Tab**:
1. Start recording
2. Scroll through entire page
3. Stop recording
4. Check for:
   - Frame rate (target: 60 FPS)
   - Long tasks (avoid > 50ms)
   - Layout shifts (CLS < 0.1)
   - Paint times

**Network Tab**:
- Total page size: Target < 500 KB
- Number of requests: Target < 20
- Load time: Target < 2s (3G)

### Testing Commands

#### Check File Structure
```bash
ls -lah
find . -type f -name "*.html" -o -name "*.css" -o -name "*.js"
```

#### Validate Links
```bash
# Install linkchecker
pip install linkchecker

# Run validation
linkchecker index.html
```

#### Check for Console Errors
```javascript
// In browser console
// Should only see welcome message
// "¡Bienvenido a IFARD-SA! 🎓"
```

#### Test Intersection Observer
```javascript
// In browser console
console.log('IntersectionObserver supported:', 'IntersectionObserver' in window);
console.log('Observed elements:', document.querySelectorAll('.reveal').length);
```

---

## Deployment

### GitHub Pages Deployment

#### Method 1: GitHub Settings (Recommended)

1. **Navigate to Repository Settings**
   - Go to `https://github.com/IFARD-SA/website/settings`

2. **Configure GitHub Pages**
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/` (root)
   - Save

3. **Access Deployed Site**
   - URL: `https://ifard-sa.github.io/website/`
   - May take 1-2 minutes to deploy

#### Method 2: GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Pages
        uses: actions/configure-pages@v3

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v2
```

### Netlify Deployment

#### Via Web Interface

1. **Login to Netlify**: `https://app.netlify.com`
2. **New Site from Git**:
   - Connect GitHub account
   - Select `IFARD-SA/website` repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Deploy site

3. **Custom Domain** (optional):
   - Site settings → Domain management
   - Add custom domain
   - Configure DNS

#### Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=.
```

### Vercel Deployment

#### Via Web Interface

1. **Login to Vercel**: `https://vercel.com`
2. **Import Project**:
   - New Project → Import Git Repository
   - Select `IFARD-SA/website`
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Deploy

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Custom Server Deployment

#### Via FTP/SFTP

1. **Connect to Server**:
   ```bash
   sftp user@yourserver.com
   ```

2. **Upload Files**:
   ```bash
   cd /var/www/html
   put -r * .
   ```

3. **Set Permissions**:
   ```bash
   chmod -R 755 /var/www/html
   ```

#### Via Git on Server

```bash
# On server
cd /var/www/html
git clone https://github.com/IFARD-SA/website.git .

# For updates
git pull origin main
```

#### Via Docker

Create `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t ifard-website .
docker run -d -p 80:80 ifard-website
```

### Deployment Checklist

Before deploying:
- [ ] All links tested
- [ ] No console errors
- [ ] Forms work correctly
- [ ] Animations smooth
- [ ] Images optimized
- [ ] Meta tags complete
- [ ] Responsive on all devices
- [ ] Browser compatibility verified
- [ ] Lighthouse scores acceptable
- [ ] Custom domain configured (if applicable)

After deployment:
- [ ] Live site accessible
- [ ] All pages load
- [ ] HTTPS working (recommended)
- [ ] Redirects configured (www → non-www)
- [ ] 404 page setup (if needed)
- [ ] Analytics configured (if needed)
- [ ] Search Console verified (for SEO)

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: JavaScript Not Working

**Symptoms**:
- No scroll animations
- Form doesn't submit
- Navigation doesn't work

**Diagnosis**:
```javascript
// Check console for errors
// Open DevTools (F12) → Console tab
```

**Solutions**:
1. Verify `js/main.js` is linked correctly:
   ```html
   <script src="js/main.js"></script>
   ```

2. Check file path (case-sensitive on some servers):
   ```bash
   ls js/
   # Should show: main.js
   ```

3. Ensure script is at end of `<body>`:
   ```html
   </footer>
   <script src="js/main.js"></script>
   </body>
   ```

4. Check for JavaScript errors in console

#### Issue 2: Styles Not Applying

**Symptoms**:
- Page looks unstyled
- Wrong colors
- No layout

**Diagnosis**:
1. Check browser Network tab
2. Verify CSS file loads (200 status)
3. Check for 404 errors

**Solutions**:
1. Verify CSS link in `<head>`:
   ```html
   <link rel="stylesheet" href="css/styles.css">
   ```

2. Check file path:
   ```bash
   ls css/
   # Should show: styles.css
   ```

3. Clear browser cache:
   ```
   Ctrl+Shift+R (Windows/Linux)
   Cmd+Shift+R (Mac)
   ```

4. Verify CSS syntax (no unclosed braces)

#### Issue 3: Scroll Animations Not Triggering

**Symptoms**:
- Elements don't fade in
- Service cards stay invisible
- Sections don't animate

**Diagnosis**:
```javascript
// In browser console
console.log('IntersectionObserver' in window);
// Should return: true

console.log(document.querySelectorAll('.reveal').length);
// Should return: number of animated elements
```

**Solutions**:
1. **Browser Support**: Check if browser supports Intersection Observer
   - Chrome 51+, Firefox 55+, Safari 12.1+
   - For older browsers, add polyfill

2. **Check CSS Classes**:
   ```javascript
   // Verify reveal class exists
   document.querySelectorAll('.reveal').forEach(el => {
       console.log(el.classList);
   });
   ```

3. **Adjust Threshold**:
   ```javascript
   // In main.js, line ~73
   const observerOptions = {
       threshold: 0.15,  // Reduce to 0.1 for earlier trigger
       rootMargin: '0px 0px -50px 0px'
   };
   ```

4. **Check z-index Conflicts**:
   - Ensure no overlapping elements
   - Verify stacking context

#### Issue 4: Form Submission Issues

**Symptoms**:
- Form doesn't show confirmation
- Page refreshes on submit
- No feedback after submission

**Diagnosis**:
```javascript
// Check if form exists
console.log(document.querySelector('.contact-form'));
// Should return: form element

// Check for event listener
// Should see no errors in console on submit
```

**Solutions**:
1. Verify `preventDefault()` is working:
   ```javascript
   // In main.js, line ~219
   contactForm.addEventListener('submit', function(e) {
       e.preventDefault(); // This prevents page refresh
       // ...
   });
   ```

2. Check form class name matches:
   ```html
   <form class="contact-form">  <!-- Must match -->
   ```

3. Ensure required fields are filled

4. Check console for JavaScript errors

#### Issue 5: Navigation Links Not Working

**Symptoms**:
- Clicking nav links does nothing
- Page jumps instead of smooth scroll
- Wrong section reached

**Diagnosis**:
```javascript
// Verify section IDs exist
['inicio', 'about', 'servicios', 'contacto'].forEach(id => {
    const exists = document.getElementById(id) !== null;
    console.log(`Section ${id} exists:`, exists);
});
```

**Solutions**:
1. Ensure section IDs match href attributes:
   ```html
   <a href="#servicios">Servicios</a>  <!-- Must match -->
   <section id="servicios">             <!-- This ID -->
   ```

2. Verify smooth scroll JavaScript is running:
   ```javascript
   // Check for event listeners
   console.log('Smooth scroll attached');
   ```

3. Adjust header offset if needed:
   ```javascript
   // In main.js, line ~31
   const headerOffset = 80;  // Increase if content hidden under header
   ```

#### Issue 6: Header Not Hiding on Scroll

**Symptoms**:
- Header stays visible when scrolling down
- No auto-hide behavior
- Header doesn't reappear on scroll up

**Diagnosis**:
```javascript
// Check scroll event
let scrollCount = 0;
window.addEventListener('scroll', () => {
    scrollCount++;
    console.log('Scroll event fired:', scrollCount);
});
// Scroll and verify counter increases
```

**Solutions**:
1. Verify scroll event listener attached:
   ```javascript
   // main.js lines 47-68 should be present
   ```

2. Check scroll threshold:
   ```javascript
   // Line ~61
   if (scrollTop > lastScrollTop && scrollTop > 200) {
       // Reduce 200 to lower value (e.g., 100)
   }
   ```

3. Check CSS transitions:
   ```css
   header {
       transition: transform 0.3s ease;
   }
   ```

4. Verify no conflicting CSS:
   ```css
   /* Remove any */
   header {
       transform: none !important; /* This would break it */
   }
   ```

#### Issue 7: Mobile Responsive Issues

**Symptoms**:
- Layout breaks on mobile
- Text too small
- Elements overflow
- Horizontal scroll appears

**Diagnosis**:
```html
<!-- Verify viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Solutions**:
1. Check media queries load:
   ```css
   /* Verify these exist in styles.css */
   @media (max-width: 768px) { /* ... */ }
   @media (max-width: 480px) { /* ... */ }
   ```

2. Test with device emulation:
   - Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
   - Test multiple devices

3. Check for fixed widths:
   ```css
   /* Avoid */
   .element { width: 1200px; }

   /* Use instead */
   .element { max-width: 1200px; width: 100%; }
   ```

4. Verify responsive images:
   ```css
   img { max-width: 100%; height: auto; }
   ```

#### Issue 8: Performance/Janky Animations

**Symptoms**:
- Animations stutter
- Scroll feels laggy
- Low frame rate

**Diagnosis**:
1. Chrome DevTools → Performance tab
2. Record during scroll
3. Look for:
   - Frame rate drops below 60 FPS
   - Long tasks (red indicators)
   - Layout thrashing

**Solutions**:
1. Verify `will-change` is applied:
   ```css
   .reveal, .scroll-to-top {
       will-change: transform, opacity;
   }
   ```

2. Reduce animated elements:
   ```javascript
   // Limit number of observed elements
   ```

3. Disable parallax on mobile:
   ```css
   @media (max-width: 480px) {
       .hero {
           transform: none !important;
       }
   }
   ```

4. Use `passive` event listeners (automatic in modern browsers):
   ```javascript
   window.addEventListener('scroll', handler, { passive: true });
   ```

### Debugging Tools

#### Browser Console Commands

```javascript
// Check all animations
getComputedStyle(document.querySelector('.reveal')).transition

// List all event listeners
getEventListeners(document.querySelector('.contact-form'))

// Check scroll position
window.pageYOffset

// Check viewport size
window.innerWidth + 'x' + window.innerHeight

// Test Intersection Observer manually
const observer = new IntersectionObserver((entries) => {
    console.log('Entries:', entries);
});
observer.observe(document.querySelector('.service-card'));

// Check loaded resources
performance.getEntriesByType('resource').forEach(r => {
    console.log(r.name, r.duration + 'ms');
});
```

#### Git Troubleshooting

```bash
# Check current status
git status

# See recent changes
git diff

# Undo uncommitted changes
git checkout -- file.html

# View commit history
git log --oneline

# See what changed in last commit
git show HEAD

# Revert to previous commit (safe)
git revert HEAD
```

---

## Performance Considerations

### Current Performance Profile

#### Asset Sizes
- **HTML**: `index.html` - ~6.5 KB
- **CSS**: `styles.css` - ~10.8 KB
- **JavaScript**: `main.js` - ~10.5 KB
- **Total Initial Load**: ~27.8 KB (uncompressed)
- **With Gzip**: ~8-10 KB estimated

#### Performance Metrics (Target)
- **First Contentful Paint (FCP)**: < 1.5s
- **Time to Interactive (TTI)**: < 3.0s
- **Speed Index**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Blocking Time (TBT)**: < 300ms

### Optimization Techniques Applied

#### 1. CSS Optimizations

**Will-change Properties**:
```css
/* Lines 468-475 in styles.css */
.reveal, .reveal-left, .reveal-right,
.service-card, .cta-button, .scroll-to-top {
    will-change: transform, opacity;
}
```
- Pre-optimizes elements for GPU acceleration
- Reduces paint and composite times

**CSS Animations over JavaScript**:
- Transitions handled by CSS
- Hardware-accelerated properties (transform, opacity)
- Smoother 60 FPS animations

**Minimal Repaints**:
```css
/* Transform instead of top/left */
.scroll-to-top {
    transform: translateY(0);  /* GPU accelerated */
}
```

#### 2. JavaScript Optimizations

**Intersection Observer over Scroll Events**:
```javascript
// Efficient viewport detection
const observer = new IntersectionObserver(observerCallback, observerOptions);
```
- Runs off main thread
- No manual scroll position calculations
- Automatic throttling by browser

**Event Delegation**:
```javascript
// Single listener for multiple links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handler);
    });
});
```

**Lazy Image Loading**:
```javascript
// Lines 261-279 in main.js
const imageObserver = new IntersectionObserver(/* ... */);
lazyImages.forEach(img => imageObserver.observe(img));
```
- Images load only when needed
- Reduces initial page weight
- Improves TTI

#### 3. HTML Optimizations

**Semantic HTML**:
- Faster parsing by browser
- Better accessibility
- Improved SEO

**Script at End of Body**:
```html
    <script src="js/main.js"></script>
</body>
```
- Doesn't block initial render
- Content visible faster

**No External Dependencies**:
- No CDN requests
- No third-party scripts
- Faster, more reliable loading

### Performance Monitoring

#### Chrome DevTools Performance Tab

**How to Use**:
1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record (●)
4. Scroll through page
5. Stop recording
6. Analyze:
   - FPS meter (should stay green/60fps)
   - Main thread activity
   - Network waterfall

**What to Look For**:
- ✅ Consistent 60 FPS during scroll
- ✅ No long tasks (red bars)
- ✅ Short script execution times
- ⚠️ Yellow frames (occasionally acceptable)
- ❌ Red frames (need optimization)

#### Lighthouse Audit

**How to Run**:
1. Chrome DevTools → Lighthouse tab
2. Select categories (all)
3. Click "Analyze page load"
4. Review scores and recommendations

**Target Scores**:
```
Performance:        90+ ✅
Accessibility:      95+ ✅
Best Practices:     90+ ✅
SEO:                90+ ✅
```

#### WebPageTest

**Online Tool**: `https://www.webpagetest.org/`

**Metrics to Monitor**:
- First Byte Time: < 600ms
- Start Render: < 1.5s
- Speed Index: < 2.5s
- Fully Loaded: < 3.0s

### Further Optimization Opportunities

#### Image Optimization (When Images Added)

1. **Modern Formats**:
   ```html
   <picture>
       <source srcset="image.webp" type="image/webp">
       <source srcset="image.jpg" type="image/jpeg">
       <img src="image.jpg" alt="Description">
   </picture>
   ```

2. **Responsive Images**:
   ```html
   <img srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
        sizes="(max-width: 768px) 100vw, 50vw"
        src="medium.jpg" alt="Description">
   ```

3. **Lazy Loading**:
   ```html
   <img data-src="image.jpg" alt="Description" class="lazy">
   ```

#### Minification

**CSS Minification**:
```bash
# Using cssnano or similar
npx cssnano styles.css styles.min.css
```

**JavaScript Minification**:
```bash
# Using terser or similar
npx terser main.js -o main.min.js -c -m
```

**HTML Minification**:
```bash
# Using html-minifier
npx html-minifier --collapse-whitespace index.html -o index.min.html
```

#### Caching Strategy

**HTTP Headers** (if using custom server):
```apache
# .htaccess for Apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
</IfModule>
```

**Service Worker** (for offline support):
```javascript
// sw.js
const CACHE_NAME = 'ifard-v1';
const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/main.js',
    '/index.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
```

#### CDN Usage (Optional)

For production deployment:
- Use CDN for static assets
- Enable Brotli/Gzip compression
- HTTP/2 server push for critical resources

### Performance Budget

**Recommended Limits**:
```
Total Page Size:     < 500 KB
JavaScript:          < 100 KB
CSS:                 < 50 KB
Images:              < 300 KB
Fonts:               < 50 KB (if added)

Requests:            < 20
DOM Elements:        < 1500
```

**Current Status**:
```
Total Page Size:     ~28 KB ✅ (Excellent)
JavaScript:          ~11 KB ✅
CSS:                 ~11 KB ✅
Images:              0 KB ✅ (Placeholders only)

Requests:            3 ✅ (HTML, CSS, JS)
DOM Elements:        ~80 ✅
```

---

## Accessibility & Best Practices

### Current Accessibility Features

#### Semantic HTML
```html
<header>    <!-- Page header -->
<nav>       <!-- Navigation -->
<main>      <!-- Main content (should be added) -->
<section>   <!-- Content sections -->
<footer>    <!-- Page footer -->
<form>      <!-- Contact form -->
```

#### ARIA Labels
```html
<button aria-label="Volver arriba">↑</button>
<a href="#" aria-label="Facebook">📘</a>
```

#### Heading Hierarchy
```
h1: Bienvenidos a IFARD-SA (Page title)
  h2: Sobre Nosotros (Section title)
    h3: Nuestra Misión (Subsection)
  h2: Nuestros Servicios
    h3: [Service names]
  h2: Contáctanos
```

#### Form Labels
```html
<label for="nombre">Nombre Completo</label>
<input type="text" id="nombre" name="nombre" required>
```

### Accessibility Improvements Needed

#### 1. Add `<main>` Landmark
```html
<body>
    <header>...</header>
    <main>  <!-- ADD THIS -->
        <section id="inicio">...</section>
        <section id="about">...</section>
        <section id="servicios">...</section>
        <section id="contacto">...</section>
    </main>  <!-- AND THIS -->
    <footer>...</footer>
</body>
```

#### 2. Skip to Content Link
```html
<body>
    <a href="#inicio" class="skip-link">Saltar al contenido principal</a>
    <header>...</header>
    ...
</body>
```

```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    z-index: 100;
}

.skip-link:focus {
    top: 0;
}
```

#### 3. Focus Visible Styles
```css
/* Add to styles.css */
*:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
    outline: 2px solid var(--accent-color);
}
```

#### 4. Reduced Motion Preference
```css
/* Add to styles.css */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
```

#### 5. Color Contrast

**Current Colors** (check contrast):
```css
/* Primary on white: #2563eb on #ffffff */
/* Contrast ratio: 5.5:1 ✅ (AA compliant) */

/* Text on white: #1f2937 on #ffffff */
/* Contrast ratio: 14.4:1 ✅ (AAA compliant) */

/* White on primary: #ffffff on #2563eb */
/* Contrast ratio: 5.5:1 ✅ (AA compliant) */
```

**Tool**: Use `https://webaim.org/resources/contrastchecker/`

### Keyboard Navigation

#### Current Support
✅ All links focusable
✅ Form inputs focusable
✅ Tab order logical
✅ Enter/Space activate buttons

#### Enhancements Needed

**Navigation Menu**:
```javascript
// Add to main.js
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach((link, index) => {
    link.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (index + 1) % navLinks.length;
            navLinks[nextIndex].focus();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (index - 1 + navLinks.length) % navLinks.length;
            navLinks[prevIndex].focus();
        }
    });
});
```

**Escape Key to Close Modals** (if added):
```javascript
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals/overlays
    }
});
```

### Screen Reader Support

#### Best Practices Applied
✅ Semantic HTML structure
✅ Alt text on images (placeholders)
✅ Label associations on form inputs
✅ ARIA labels on icon buttons

#### Testing with Screen Readers

**Tools**:
- **Windows**: NVDA (free), JAWS (paid)
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca
- **Mobile**: TalkBack (Android), VoiceOver (iOS)

**Test Checklist**:
- [ ] Page title announced
- [ ] Landmarks identified (header, nav, main, footer)
- [ ] Headings navigable
- [ ] Links descriptive
- [ ] Form fields labeled
- [ ] Buttons have accessible names
- [ ] Images have alt text

#### ARIA Live Regions

For form confirmation:
```html
<div class="form-confirmation" role="status" aria-live="polite">
    <p>✓ Gracias, tu mensaje ha sido enviado correctamente.</p>
</div>
```

### SEO Best Practices

#### Current Implementation
✅ Semantic HTML
✅ Meta description
✅ Meta keywords (less important now)
✅ Proper heading hierarchy
✅ Descriptive page title

#### Improvements

**Open Graph Tags**:
```html
<head>
    <!-- Existing tags -->

    <!-- Add Open Graph -->
    <meta property="og:title" content="IFARD-SA - Instituto de Formación y Desarrollo">
    <meta property="og:description" content="Instituto comprometido con la excelencia educativa">
    <meta property="og:image" content="https://ifard-sa.github.io/website/images/og-image.jpg">
    <meta property="og:url" content="https://ifard-sa.github.io/website/">
    <meta property="og:type" content="website">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="IFARD-SA - Instituto de Formación y Desarrollo">
    <meta name="twitter:description" content="Instituto comprometido con la excelencia educativa">
    <meta name="twitter:image" content="https://ifard-sa.github.io/website/images/twitter-card.jpg">
</head>
```

**Structured Data** (Schema.org):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "IFARD-SA",
  "description": "Instituto de Formación y Desarrollo",
  "url": "https://ifard-sa.github.io/website/",
  "logo": "https://ifard-sa.github.io/website/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://facebook.com/ifardsa",
    "https://twitter.com/ifardsa",
    "https://linkedin.com/company/ifardsa"
  ]
}
</script>
```

**Sitemap** (`sitemap.xml`):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ifard-sa.github.io/website/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Robots.txt**:
```
User-agent: *
Allow: /

Sitemap: https://ifard-sa.github.io/website/sitemap.xml
```

### Performance & Core Web Vitals

#### Largest Contentful Paint (LCP)
**Target**: < 2.5s
**Optimization**:
- Preload hero font if custom font added
- Optimize hero background gradient (already efficient)

#### First Input Delay (FID)
**Target**: < 100ms
**Status**: ✅ No heavy JavaScript blocking input

#### Cumulative Layout Shift (CLS)
**Target**: < 0.1
**Potential Issues**:
- Images without dimensions (add width/height)
- Web fonts causing text reflow (use font-display: swap)

**Fix**:
```html
<!-- Add explicit dimensions -->
<img src="photo.jpg" alt="Description" width="600" height="400">
```

```css
/* Add font-display if web fonts added */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2');
    font-display: swap;
}
```

### Mobile Usability

#### Current Implementation
✅ Responsive meta viewport
✅ Touch-friendly button sizes
✅ Readable font sizes
✅ No horizontal scroll
✅ Proper spacing for touch targets

#### Touch Target Sizes

**Minimum**: 48x48px (WCAG 2.1 Level AAA)

**Current Status**:
```css
.cta-button {
    padding: 1rem 2rem;  /* ~48px height ✅ */
}

.scroll-to-top {
    width: 50px;   /* Desktop */
    height: 50px;  /* ✅ */
}

@media (max-width: 480px) {
    .scroll-to-top {
        width: 40px;   /* Mobile - just under */
        height: 40px;  /* Consider increasing to 44px */
    }
}
```

**Recommendation**:
```css
@media (max-width: 480px) {
    .scroll-to-top {
        width: 44px;   /* Minimum 44px for mobile */
        height: 44px;
    }
}
```

---

## Conclusion

This SUNDAYS.md file provides comprehensive guidance for AI assistants and Genium AI infrastructure to work effectively with the IFARD-SA website codebase.

### Quick Reference for AI Assistants

**For Quick Changes**:
1. Read relevant file first
2. Use Edit tool for targeted changes
3. Maintain Spanish language
4. Test navigation after changes

**For New Features**:
1. Review existing patterns
2. Match naming conventions
3. Apply `.reveal` for animations
4. Update both HTML and CSS

**For Troubleshooting**:
1. Check browser console
2. Verify file paths
3. Test in multiple browsers
4. Review this document's troubleshooting section

### Document Maintenance

**Last Updated**: 2025-01-13
**Document Version**: 1.0.0
**Codebase Version**: Latest commit `cf3e459`

**Update This Document When**:
- New features are added
- File structure changes
- Dependencies are added
- Deployment process changes
- Major refactoring occurs

---

**End of SUNDAYS.md**
