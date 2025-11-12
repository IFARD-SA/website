# SUNDAYS.md - AI Infrastructure Guide for IFARD-SA Website

## 🎯 Project Overview

**Project Name:** IFARD-SA Website
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Repository:** https://github.com/IFARD-SA/website
**Project Type:** Static Single-Page Website
**Primary Language:** Spanish (es)
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript
**Deployment:** Suitable for GitHub Pages, Netlify, Vercel, or any static hosting

### Project Status
✅ **Production Ready** - Full-featured single-page website with modern scroll effects and animations

### Key Characteristics
- **No Build Tools**: Pure HTML/CSS/JS - no compilation required
- **No Dependencies**: Zero npm packages, no framework overhead
- **Fully Static**: No server-side processing needed
- **Mobile-First**: Responsive design optimized for all devices
- **Modern UX**: Professional scroll effects and animations using Intersection Observer API

---

## 📁 Repository Structure

```
.
├── index.html              # Main landing page (155 lines)
├── css/
│   └── styles.css         # Complete stylesheet with animations (566 lines)
├── js/
│   └── main.js            # Scroll effects and interactions (311 lines)
├── CLAUDE.md              # AI assistant guide (existing)
├── EFECTOS-SCROLL.md      # Scroll effects documentation (318 lines)
├── TEST-EFECTOS.html      # Testing page for scroll effects (205 lines)
└── SUNDAYS.md            # This file - Genium AI infrastructure guide
```

### File Manifest

| File | Purpose | Lines | Language | Status |
|------|---------|-------|----------|--------|
| `index.html` | Main website page | 155 | HTML5 | ✅ Complete |
| `css/styles.css` | Styles & animations | 566 | CSS3 | ✅ Complete |
| `js/main.js` | Interactive effects | 311 | JavaScript | ✅ Complete |
| `CLAUDE.md` | AI guide (legacy) | ~290 | Markdown | ✅ Complete |
| `EFECTOS-SCROLL.md` | Effects documentation | 318 | Markdown | ✅ Complete |
| `TEST-EFECTOS.html` | Testing interface | 205 | HTML5 | ✅ Complete |

---

## 🏗️ Architecture & Technical Details

### Technology Stack

#### Frontend
- **HTML5**: Semantic markup with accessibility in mind
  - `<header>`, `<nav>`, `<section>`, `<footer>` elements
  - Proper meta tags for SEO and social sharing
  - ARIA labels for accessibility

- **CSS3**: Modern styling with advanced features
  - CSS Custom Properties (CSS Variables) for theming
  - Flexbox and CSS Grid for layouts
  - CSS Animations and Transitions
  - Backdrop-filter for glassmorphism effects
  - Responsive breakpoints: 768px, 480px

- **JavaScript (Vanilla)**: Zero dependencies
  - ES6+ syntax (arrow functions, const/let, template literals)
  - Intersection Observer API for scroll animations
  - Native DOM manipulation (no jQuery)
  - Event delegation and performance optimizations

#### Design System

**Color Palette** (CSS Variables):
```css
--primary-color: #2563eb    /* Blue - primary actions */
--secondary-color: #1e40af  /* Dark blue - hover states */
--accent-color: #3b82f6     /* Light blue - accents */
--text-dark: #1f2937        /* Dark gray - headings */
--text-light: #6b7280       /* Medium gray - body text */
--bg-light: #f9fafb         /* Light gray - backgrounds */
--white: #ffffff            /* White - cards, buttons */
```

**Typography**:
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Base Line Height: 1.6
- Heading Sizes: 3rem (h1), 2.5rem (h2), 1.8rem (h3)

**Spacing System**:
- Section Padding: 80px vertical, 2rem horizontal
- Card Padding: 2rem
- Gap (Grid/Flex): 2rem (desktop), 1rem (mobile)

---

## 🎨 Features & Functionality

### Page Sections

1. **Header Navigation** (Fixed)
   - Logo: "IFARD-SA"
   - Navigation Links: Inicio, Nosotros, Servicios, Contacto
   - Sticky positioning with dynamic behavior
   - Auto-hide on scroll down, show on scroll up

2. **Hero Section** (#inicio)
   - Gradient background (primary → secondary)
   - Main heading: "Bienvenidos a IFARD-SA"
   - Subtitle with mission statement
   - CTA button linking to contact section
   - Parallax scroll effect

3. **About Section** (#about)
   - Two-column grid layout (desktop)
   - Mission statement and organization info
   - Placeholder for institutional image
   - Light background (#f9fafb)

4. **Services Section** (#servicios)
   - 6 service cards in responsive grid
   - Icons (emoji-based): 📚 🎓 💼 🌐 📊 🏆
   - Services:
     - Formación Profesional
     - Cursos Especializados
     - Consultoría
     - Formación Online
     - Desarrollo Organizacional
     - Certificaciones

5. **Contact Section** (#contacto)
   - Contact form with 4 fields:
     - Nombre Completo (text, required)
     - Correo Electrónico (email, required)
     - Teléfono (tel, optional)
     - Mensaje (textarea, required)
   - Submit button with animation
   - Success confirmation message (5s auto-hide)

6. **Footer**
   - Social media links (emoji placeholders): 📘 🐦 💼 📷
   - Copyright notice: © 2025 IFARD-SA
   - Organization tagline

### JavaScript Effects (10 Implemented Features)

#### 1. **Smooth Scroll Navigation**
- **File**: `js/main.js` (Lines 8-42)
- **Functionality**: Smooth scrolling to sections on nav click
- **Configuration**: 80px header offset
- **Browser Support**: Native + JavaScript fallback

#### 2. **Dynamic Header**
- **File**: `js/main.js` (Lines 47-68)
- **Functionality**:
  - Glassmorphism effect when scrolled (>50px)
  - Auto-hide on scroll down (>200px)
  - Show on scroll up
- **Performance**: CSS transform for GPU acceleration

#### 3. **Reveal on Scroll Animations**
- **File**: `js/main.js` (Lines 73-106)
- **Technology**: Intersection Observer API
- **Configuration**:
  - Threshold: 15% visibility
  - Root Margin: -50px bottom
- **Elements**: Titles, cards, form, hero elements
- **Effect**: Fade-in + translateY with staggered delays

#### 4. **Scroll to Top Button**
- **File**: `js/main.js` (Lines 111-133)
- **Trigger**: Visible after 300px scroll
- **Style**: Fixed position, bottom-right, circular
- **Animation**: Fade + translateY
- **Responsive**: Adjusts size on mobile (40px) and tablet (45px)

#### 5. **Active Navigation Indicator**
- **File**: `js/main.js` (Lines 138-159)
- **Functionality**: Highlights current section in nav
- **Detection**: 150px offset from section top
- **Visual**: Underline animation with `::after` pseudo-element

#### 6. **Parallax Hero Effect**
- **File**: `js/main.js` (Lines 164-176)
- **Speed**: 0.5x scroll speed
- **Opacity**: Fades out as user scrolls
- **Mobile**: Disabled via CSS for performance
- **Limit**: Only active within viewport height

#### 7. **Form Submission Handler**
- **File**: `js/main.js` (Lines 218-259)
- **Functionality**:
  - Prevents default form submission
  - Shows animated success message
  - Auto-resets after 5 seconds
- **UX**: Smooth fade transitions
- **Note**: Frontend only - no backend integration

#### 8. **Animated Counters** (Ready to Use)
- **File**: `js/main.js` (Lines 181-211)
- **Activation**: Add `data-counter="NUMBER"` to elements
- **Duration**: 2 seconds default
- **Use Case**: Statistics, metrics display

#### 9. **Lazy Image Loading** (Ready to Use)
- **File**: `js/main.js` (Lines 264-279)
- **Activation**: Use `<img data-src="path">` instead of `src`
- **Technology**: Intersection Observer
- **Benefit**: Faster initial page load

#### 10. **Typing Effect** (Optional, Commented)
- **File**: `js/main.js` (Lines 284-304)
- **Status**: Implemented but disabled by default
- **Use Case**: Hero title typewriter effect
- **Customizable**: Speed adjustable (50ms default)

### CSS Animations

**Keyframe Animations**:
1. `fadeInUp`: Fade in with upward movement (hero elements)
2. `slideIn`: Width expansion (active nav indicator)
3. `slideInScale`: Scale + fade (form confirmation)
4. `pulse`: Subtle scale pulse (CTA button, infinite after 2s)

**Transition Effects**:
- Button hover: translateY(-3px) + shadow
- Card hover: translateY(-5px) + enhanced shadow
- Header scroll: backdrop-blur + opacity changes
- Form inputs: border-color on focus

---

## 🚀 Development Workflow

### Local Development

**Start Development Server**:
```bash
# Option 1: Python 3 (Recommended)
python3 -m http.server 8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js (requires npm)
npx http-server -p 8000

# Option 4: PHP
php -S localhost:8000
```

**Access**: http://localhost:8000/index.html

### Testing

**Test Scroll Effects**: Open `TEST-EFECTOS.html` for:
- Implementation status
- Checklist of effects
- Quick testing guide
- Validation checklist

**Browser Testing**:
- Chrome/Edge (recommended for development)
- Firefox
- Safari
- Mobile browsers (Chrome Mobile, Safari iOS)

**Validation**:
```bash
# HTML validation (if installed)
html5validator --root . --also-check-css

# Or use W3C online: https://validator.w3.org/
```

### Version Control

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

**Git Branch Naming Convention** (observed):
- `sundays-ai/ticket-{description}-{timestamp}`

---

## 🔧 Configuration & Customization

### Adjusting Scroll Effects

#### Change Animation Speed
**File**: `css/styles.css`
```css
/* Line 350: Reveal animation duration */
.reveal {
    transition: opacity 0.6s ease, transform 0.6s ease;
    /* Change 0.6s to desired speed */
}
```

#### Modify Scroll-to-Top Threshold
**File**: `js/main.js`
```javascript
// Line 120: Button visibility threshold
if (window.pageYOffset > 300) { // Change 300 to desired pixel value
    scrollToTopBtn.classList.add('visible');
}
```

#### Adjust Header Offset for Smooth Scroll
**File**: `js/main.js`
```javascript
// Line 31: Offset for fixed header
const headerOffset = 80; // Change to match header height
```

#### Change Reveal Sensitivity
**File**: `js/main.js`
```javascript
// Line 73: Observer configuration
const observerOptions = {
    threshold: 0.15, // 0.0 to 1.0 (lower = more sensitive)
    rootMargin: '0px 0px -50px 0px' // Adjust margins
};
```

### Theming

**Change Color Scheme**:
**File**: `css/styles.css` (Lines 2-12)
```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Darker variant */
    --accent-color: #3b82f6;     /* Lighter accent */
    /* ... modify as needed ... */
}
```

### Enabling Optional Features

#### Activate Typing Effect
**File**: `js/main.js` (Lines 300-304)
```javascript
// Uncomment these lines:
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80); // Adjust speed (80ms)
}
```

#### Add Animated Counters
**HTML**: Add to any element
```html
<span data-counter="1500">0</span>
```
JavaScript will automatically animate the number from 0 to 1500.

#### Enable Image Lazy Loading
**HTML**: Replace `src` with `data-src`
```html
<img data-src="images/photo.jpg" alt="Description" class="lazy">
```

---

## 📊 Performance & Optimization

### Performance Characteristics

**Load Times** (estimated):
- Initial HTML: <2KB
- CSS File: ~15KB
- JavaScript: ~10KB
- **Total**: ~27KB (uncompressed)

**Runtime Performance**:
- Animations: 60 FPS target
- Intersection Observer: Efficient viewport detection
- Will-change: GPU acceleration for animations
- Scroll Events: Optimized with transforms

### Optimization Techniques Implemented

1. **CSS Optimizations**:
   - `will-change` property on animated elements
   - CSS transforms for position changes (GPU accelerated)
   - Backdrop-filter for glassmorphism (hardware accelerated)

2. **JavaScript Optimizations**:
   - Intersection Observer instead of scroll event listeners
   - Event delegation where applicable
   - Minimal DOM queries (cached selectors)
   - Debouncing not needed (observer-based)

3. **Mobile Optimizations**:
   - Parallax disabled on mobile (CSS media query)
   - Reduced button sizes on small screens
   - Simplified animations on mobile devices
   - Touch-optimized interaction areas

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge | Notes |
|---------|--------|---------|--------|------|-------|
| Intersection Observer | 51+ | 55+ | 12.1+ | 79+ | Core feature |
| CSS Grid | 57+ | 52+ | 10.1+ | 16+ | Layout |
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ | Theming |
| Backdrop Filter | 76+ | 103+ | 9+ | 79+ | Glassmorphism |
| Smooth Scroll | 61+ | 36+ | 15.4+ | 79+ | JS fallback |

**Minimum Browser Support**: Chrome 51+, Firefox 55+, Safari 12.1+, Edge 79+

### Accessibility

**Implemented Features**:
- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus styles on form inputs
- ✅ Alt text placeholders (ready for images)
- ✅ Sufficient color contrast ratios

**Potential Improvements**:
- ⚠️ Add `prefers-reduced-motion` media query support
- ⚠️ Screen reader testing needed
- ⚠️ Skip-to-content link for keyboard users

---

## 📦 Deployment Guide

### Deployment Options

#### 1. GitHub Pages (Recommended)

**Setup**:
1. Go to repository Settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/ (root)`
4. Save

**URL**: `https://ifard-sa.github.io/website/`

**Advantages**:
- Free hosting
- Auto-deploys on push to main
- HTTPS included
- Custom domain support

#### 2. Netlify

**Steps**:
1. Connect GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy

**Features**:
- Instant rollback
- Preview deployments
- Form handling (can integrate with contact form)
- Custom domains + SSL

#### 3. Vercel

**Steps**:
1. Import GitHub repository
2. Framework Preset: Other
3. Root Directory: `./`
4. Deploy

**Features**:
- Global CDN
- Automatic HTTPS
- Preview URLs for branches
- Analytics available

#### 4. Traditional Hosting

**Requirements**:
- Any web server (Apache, Nginx, IIS)
- No special configuration needed
- Simply upload all files to web root

---

## 🤖 AI Assistant Guidelines

### When to Modify Files

#### ✅ **Safe to Edit**:
- `index.html` - Add content, new sections, update text
- `css/styles.css` - Adjust colors, spacing, animations
- `js/main.js` - Add new effects, modify thresholds
- Create new HTML pages (about.html, services.html, etc.)
- Add images folder and assets

#### ⚠️ **Edit with Caution**:
- Existing scroll effect logic (may break interactions)
- CSS variable names (check for usage throughout file)
- HTML structure (may break JavaScript selectors)

#### 🚫 **Do Not Modify**:
- `.git/` directory
- Git configuration files

### Common Modification Scenarios

#### 1. Adding a New Section

```html
<!-- Add before footer in index.html -->
<section id="new-section">
    <h2 class="section-title reveal">New Section Title</h2>
    <div class="reveal">
        <!-- Content here -->
    </div>
</section>
```
- Add `.reveal` class for scroll animation
- Update navigation in header
- No JavaScript changes needed (auto-detects)

#### 2. Adding Real Images

```html
<!-- Replace placeholder divs with: -->
<img data-src="images/photo.jpg" alt="Description" class="lazy">
```
- Create `images/` directory
- Add images to folder
- Use `data-src` for lazy loading
- Provide descriptive alt text

#### 3. Integrating Backend for Form

**Options**:
1. **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"`
2. **Netlify Forms**: Add `netlify` attribute to form
3. **Custom API**: Modify `js/main.js` (Line 219) to fetch API
4. **EmailJS**: Add EmailJS library and configure

**Current State**: Frontend only - shows confirmation but doesn't send data

#### 4. Adding More Pages

```
website/
├── index.html
├── about.html        # New page
├── services.html     # New page
└── contact.html      # New page
```

- Copy `index.html` as template
- Update navigation links to relative URLs
- Maintain consistent header/footer
- Copy CSS and JS references

#### 5. Implementing Dark Mode

**Steps**:
1. Add dark theme CSS variables
2. Create toggle button
3. Use localStorage to persist preference
4. Add JavaScript to switch themes

**CSS Variables to Add**:
```css
[data-theme="dark"] {
    --primary-color: #3b82f6;
    --text-dark: #f9fafb;
    --bg-light: #1f2937;
    /* ... etc ... */
}
```

### Best Practices for AI Modifications

1. **Always Read Before Editing**:
   - Use Read tool on files before making changes
   - Understand existing structure and patterns

2. **Maintain Consistency**:
   - Follow existing naming conventions
   - Match indentation (4 spaces in HTML/CSS)
   - Use CSS variables for colors

3. **Test After Changes**:
   - Suggest user opens in browser
   - Check browser console for errors
   - Validate HTML/CSS if possible

4. **Document Changes**:
   - Update comments in code
   - Add to EFECTOS-SCROLL.md if modifying effects
   - Create clear commit messages

5. **Preserve Accessibility**:
   - Keep ARIA labels
   - Maintain semantic HTML
   - Ensure keyboard navigation works

---

## 🐛 Troubleshooting Guide

### Common Issues

#### 1. Animations Not Working

**Symptoms**: Elements don't fade in, no scroll effects
**Causes**:
- JavaScript not loaded
- Browser doesn't support Intersection Observer
- CSS classes not applied

**Solutions**:
```bash
# Check browser console (F12) for errors
# Verify js/main.js is loaded
# Check browser compatibility (Chrome 51+, Firefox 55+, Safari 12.1+)
```

#### 2. Scroll Not Smooth

**Symptoms**: Page jumps instead of smooth scroll
**Causes**:
- Browser doesn't support `scroll-behavior: smooth`
- JavaScript error preventing smooth scroll

**Solutions**:
- JavaScript provides fallback with `window.scrollTo({ behavior: 'smooth' })`
- Check console for JavaScript errors

#### 3. Header Not Showing/Hiding

**Symptoms**: Header stays visible or hidden
**Causes**:
- JavaScript error in scroll event handler
- CSS transform not applied

**Solutions**:
- Check browser console for errors
- Verify `header` element exists
- Test scroll position thresholds

#### 4. Form Not Submitting

**Symptoms**: Nothing happens when form submitted
**Expected**: This is intentional - form is frontend only
**Solution**:
- Confirmation message should appear
- To actually send emails, integrate backend service
- See "Integrating Backend for Form" section

#### 5. Images Not Loading

**Symptoms**: Broken image icons
**Causes**:
- File path incorrect
- Images not uploaded
- Lazy loading not initialized

**Solutions**:
- Check file paths (case-sensitive)
- Verify images exist in correct folder
- Check console for 404 errors

---

## 📈 Future Enhancement Suggestions

### Recommended Next Steps

#### High Priority
1. **Add Real Content**:
   - Replace placeholder text with actual organization info
   - Add professional images and logos
   - Create detailed service descriptions

2. **Backend Integration**:
   - Implement form submission backend
   - Add contact email notification system
   - Consider CMS integration for content management

3. **SEO Optimization**:
   - Add meta descriptions
   - Implement Open Graph tags
   - Create sitemap.xml
   - Add robots.txt
   - Implement structured data (Schema.org)

#### Medium Priority
4. **Additional Pages**:
   - Detailed services pages
   - Team/staff page
   - Blog or news section
   - FAQ page
   - Privacy policy and terms

5. **Enhanced Mobile Experience**:
   - Hamburger menu for mobile navigation
   - Touch gestures support
   - Progressive Web App (PWA) features

6. **Analytics & Tracking**:
   - Google Analytics integration
   - Conversion tracking
   - Heat mapping (Hotjar, etc.)

#### Nice to Have
7. **Advanced Features**:
   - Multi-language support (English/Spanish)
   - Dark mode toggle
   - Advanced animations (GSAP library)
   - Video backgrounds or hero videos
   - Testimonials slider
   - Partners/clients logo carousel

8. **Performance Enhancements**:
   - Minify CSS/JS for production
   - Optimize and compress images
   - Implement service worker for offline support
   - Add preload hints for critical resources

---

## 📚 Documentation References

### Internal Documentation
- **CLAUDE.md**: Original AI assistant guide (legacy, basic info)
- **EFECTOS-SCROLL.md**: Comprehensive scroll effects documentation
- **TEST-EFECTOS.html**: Interactive testing interface
- **SUNDAYS.md**: This file - complete infrastructure guide

### External Resources

**HTML5**:
- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C Validator](https://validator.w3.org/)

**CSS3**:
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)

**JavaScript**:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

**Deployment**:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)

---

## 🔐 Security Considerations

### Current Security Posture

**No Security Risks Identified**:
- ✅ No server-side code
- ✅ No database connections
- ✅ No user authentication
- ✅ No sensitive data storage
- ✅ No third-party scripts (except potential future analytics)

### Best Practices When Extending

1. **Form Backend**: If adding backend:
   - Use HTTPS only
   - Implement CSRF protection
   - Validate/sanitize all inputs server-side
   - Use environment variables for API keys

2. **Third-Party Scripts**:
   - Use Subresource Integrity (SRI) hashes
   - Load from reputable CDNs
   - Review privacy implications

3. **Content Security Policy**:
   - Consider adding CSP headers
   - Restrict script sources
   - Prevent XSS attacks

---

## 🎓 Learning Resources

### For Understanding This Codebase

**Beginner Level**:
- HTML structure and semantic elements
- CSS basics: selectors, properties, box model
- JavaScript fundamentals: variables, functions, events

**Intermediate Level**:
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- DOM manipulation with vanilla JavaScript
- Event handling and delegation

**Advanced Level**:
- Intersection Observer API
- Performance optimization techniques
- Responsive design patterns
- Accessibility best practices

### Key Concepts in This Project

1. **Intersection Observer API**: Core of scroll animations
2. **CSS Custom Properties**: Theming system
3. **CSS Transform**: GPU-accelerated animations
4. **Event Delegation**: Efficient event handling
5. **Progressive Enhancement**: Works without JS, better with JS

---

## 📞 Contact & Maintenance

### Project Information

**Organization**: IFARD-SA
**Repository**: https://github.com/IFARD-SA/website
**Primary Branch**: `main`
**Last Major Update**: 2025 (Scroll effects implementation)

### Maintenance Notes

**Regular Maintenance**:
- Review and update content regularly
- Test in new browser versions
- Update dependencies (if any added in future)
- Monitor analytics and user feedback
- Check for broken links

**Update Cycle**:
- Content: As needed
- Design: Quarterly review
- Technical: When browser support changes

---

## 🏷️ Metadata for AI Systems

### Project Classification

```yaml
project_type: static_website
complexity: medium
languages:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
frameworks: none
dependencies: zero
build_system: none
deployment: static_hosting
estimated_lines_of_code: 1232
file_count: 7
primary_language: Spanish
target_audience: Educational_Institution_Visitors
responsive: true
accessibility_level: AA (estimated)
browser_support: modern (2+ years)
maintenance_frequency: low
```

### AI Task Capabilities

**Recommended AI Tasks**:
- ✅ Content updates and text changes
- ✅ Adding new sections or pages
- ✅ Styling adjustments and theming
- ✅ Adding new JavaScript effects
- ✅ Creating additional utility functions
- ✅ SEO optimization
- ✅ Accessibility improvements
- ✅ Documentation updates

**Not Recommended**:
- ❌ Major architectural changes without testing
- ❌ Removing existing scroll effects (may break UX)
- ❌ Changing file structure without updating refs

### Code Style Guidelines

**HTML**:
- 4-space indentation
- Lowercase tags and attributes
- Semantic elements preferred
- Comments for major sections

**CSS**:
- 4-space indentation
- Kebab-case for class names
- CSS variables for theme values
- Comments for major sections
- Logical property grouping

**JavaScript**:
- 4-space indentation
- camelCase for variables/functions
- const/let (no var)
- Arrow functions where appropriate
- Descriptive comments for complex logic

---

## ✅ Quick Start Checklist for AI Assistants

When working with this repository, AI assistants should:

1. ✅ Read this SUNDAYS.md file first for complete context
2. ✅ Check EFECTOS-SCROLL.md if modifying scroll effects
3. ✅ Use Read tool before editing any file
4. ✅ Maintain Spanish language for user-facing content
5. ✅ Preserve existing CSS variable system for colors
6. ✅ Add `.reveal` class to new sections for animations
7. ✅ Test suggestions by recommending local server setup
8. ✅ Keep code style consistent with existing patterns
9. ✅ Update documentation when making significant changes
10. ✅ Consider mobile responsiveness in all modifications

---

## 📝 Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2025 | Initial website with scroll effects | IFARD-SA Team |
| 1.1 | 2025 | Added SUNDAYS.md documentation | AI Assistant |

---

## 🎉 Summary

This is a **production-ready, single-page website** for IFARD-SA with:
- ✅ Modern, responsive design
- ✅ Professional scroll animations
- ✅ Zero dependencies
- ✅ Easy to maintain and extend
- ✅ Ready for deployment

**For AI Assistants**: This codebase is well-structured, thoroughly documented, and ready for modifications. Follow the guidelines in this document for successful task completion.

**For Genium AI Infrastructure**: This project requires no special runtime environment - standard static file serving is sufficient. All assets are self-contained in the repository.

---

*Last Updated: 2025*
*Document Version: 1.0*
*For: Genium AI Infrastructure & AI Assistants*
