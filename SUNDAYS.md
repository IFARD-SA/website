# SUNDAYS.md - AI Infrastructure Guide for IFARD-SA Website

## 🎯 Project Overview

**Project Name:** IFARD-SA Website
**Organization:** IFARD-SA (Instituto de Formación y Desarrollo)
**Type:** Static Website with Interactive Features
**Repository:** https://github.com/IFARD-SA/website
**Language:** Spanish (es)
**Status:** Active Development

### Mission
A professional web presence for IFARD-SA, an educational institute focused on professional training and development. The site showcases services, provides information about the organization, and includes a contact form for prospective students and clients.

---

## 📁 Project Structure

```
website/
├── index.html              # Main landing page (single-page application)
├── css/
│   └── styles.css         # Complete stylesheet with animations (~566 lines)
├── js/
│   └── main.js            # Interactive effects and scroll behaviors (~311 lines)
├── CLAUDE.md              # AI assistant guide for Claude
├── SUNDAYS.md             # This file - AI infrastructure guide
├── EFECTOS-SCROLL.md      # Documentation for scroll effects implementation
└── TEST-EFECTOS.html      # Testing page for scroll effects validation
```

### File Descriptions

**Core Files:**
- **index.html** (6.5 KB): Single-page website with sections: Hero, About, Services (6 cards), Contact form, Footer
- **css/styles.css** (~20 KB): Modern CSS with variables, animations, responsive design, and scroll effects
- **js/main.js** (~10 KB): Vanilla JavaScript implementing 10 interactive scroll effects

**Documentation Files:**
- **CLAUDE.md**: Historical guide from early project stage, describes initial setup
- **EFECTOS-SCROLL.md**: Comprehensive documentation of scroll effects (315 lines)
- **TEST-EFECTOS.html**: Validation checklist for testing all interactive features

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup, accessibility-focused
- **CSS3**: Modern features including:
  - CSS Custom Properties (Variables)
  - Flexbox and Grid layouts
  - CSS Animations and Transitions
  - Backdrop-filter (glassmorphism effects)
  - Media queries for responsive design
- **Vanilla JavaScript (ES6+)**: No frameworks or libraries
  - Intersection Observer API for scroll animations
  - DOM manipulation
  - Event handling
  - Smooth scrolling

### Build System
- **None**: Static site, no build process required
- **No dependencies**: Zero npm packages or external libraries
- **Direct deployment**: Files can be deployed as-is

### Deployment Options
- GitHub Pages (recommended)
- Netlify
- Vercel
- Any static hosting service

---

## 🎨 Design System

### Color Palette
```css
:root {
    --primary-color: #2563eb;    /* Blue - primary brand color */
    --secondary-color: #1e40af;  /* Darker blue - hover states */
    --accent-color: #3b82f6;     /* Light blue - accents */
    --text-dark: #1f2937;        /* Near-black for text */
    --text-light: #6b7280;       /* Gray for secondary text */
    --bg-light: #f9fafb;         /* Light gray background */
    --white: #ffffff;            /* Pure white */
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
}
```

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Line Height**: 1.6 for body text
- **Heading Sizes**:
  - H1: 3rem (hero)
  - H2: 2.5rem (section titles)
  - H3: 1.8rem (subsections)

### Responsive Breakpoints
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

---

## ⚡ Interactive Features

### 1. Smooth Scroll Navigation
- **Location**: `js/main.js` lines 8-42
- **Functionality**: Smooth scrolling to sections on navigation click
- **Header offset**: 80px to account for fixed header
- **Behavior**: Uses native `scroll-behavior: smooth` with JS fallback

### 2. Dynamic Header
- **Location**: `js/main.js` lines 47-68
- **Functionality**:
  - Adds 'scrolled' class after 50px scroll
  - Hides header on scroll down (after 200px)
  - Shows header on scroll up
  - Glassmorphism effect when scrolled
- **CSS**: `css/styles.css` lines 310-318

### 3. Reveal on Scroll Animations
- **Location**: `js/main.js` lines 73-106
- **Functionality**: Elements fade in with slide-up animation
- **API**: Intersection Observer
- **Threshold**: 15% visibility
- **Staggered delay**: 0.1s per element
- **Elements animated**: Section titles, service cards, about content, contact form, hero elements

### 4. Active Navigation Indicator
- **Location**: `js/main.js` lines 138-159
- **Functionality**: Highlights current section in navigation menu
- **Visual**: Animated underline on active link
- **Offset**: 150px for section detection

### 5. Scroll-to-Top Button
- **Location**: `js/main.js` lines 111-133
- **Functionality**:
  - Appears after 300px scroll
  - Smooth scroll to top on click
  - Circular button with arrow icon
  - Hover effects and animations
- **CSS**: `css/styles.css` lines 378-411
- **Accessibility**: ARIA label included

### 6. Parallax Hero Effect
- **Location**: `js/main.js` lines 164-176
- **Functionality**: Subtle parallax and fade effect on hero section
- **Speed**: 0.5x scroll speed
- **Disabled**: Automatically disabled on mobile for performance

### 7. Form Submission Animation
- **Location**: `js/main.js` lines 216-259
- **Functionality**:
  - Prevents actual form submission
  - Shows animated confirmation message
  - Auto-resets after 5 seconds
  - Smooth fade transitions
- **CSS**: `css/styles.css` lines 414-444

### 8. CTA Pulse Animation
- **Location**: `css/styles.css` lines 478-489
- **Functionality**: Infinite pulse animation on call-to-action button
- **Timing**: Starts after 2 seconds, repeats every 2 seconds

### 9. Lazy Loading System (Prepared)
- **Location**: `js/main.js` lines 264-279
- **Functionality**: Ready for `data-src` attribute images
- **Status**: Prepared but no images currently use it

### 10. Counter Animation System (Prepared)
- **Location**: `js/main.js` lines 181-211
- **Functionality**: Animates numbers from 0 to target value
- **Activation**: Add `data-counter` attribute to elements
- **Status**: Prepared but not currently in use

---

## 🚀 Development Workflow

### Local Development

```bash
# Option 1: Python 3 (Recommended)
python3 -m http.server 8000
# Open http://localhost:8000

# Option 2: Python 2
python -m SimpleHTTPServer 8000

# Option 3: Node.js (if available)
npx http-server -p 8000

# Option 4: PHP
php -S localhost:8000
```

### File Editing Workflow
1. **No build step**: Edit files directly
2. **Instant preview**: Refresh browser to see changes
3. **No compilation**: HTML/CSS/JS are served as-is
4. **Browser cache**: Use Ctrl+F5 (hard refresh) if changes don't appear

### Testing Checklist
Reference `TEST-EFECTOS.html` for complete validation checklist:
- [ ] Smooth scroll between sections
- [ ] Header hide/show on scroll
- [ ] Reveal animations trigger correctly
- [ ] Active navigation updates
- [ ] Scroll-to-top button appears and works
- [ ] Hero parallax is subtle and smooth
- [ ] Form submission shows confirmation
- [ ] Mobile responsive (test at 480px, 768px)
- [ ] No console errors
- [ ] 60 FPS animations (check Performance tab)

---

## 🔧 Git Workflow

### Repository Details
- **Remote**: https://github.com/IFARD-SA/website.git
- **Default Branch**: main
- **Latest Commit**: cf3e459 (Merge pull request #5 - scroll effects)

### Standard Git Commands

```bash
# Check status
git status

# View recent history
git log --oneline --max-count=10

# Create feature branch
git checkout -b feature/feature-name

# Stage and commit
git add .
git commit -m "Descriptive message"

# Push to remote
git push origin branch-name

# Pull latest changes
git pull origin main
```

### Commit Message Convention
Based on recent history, commits follow descriptive format:
- "Add scroll effects with JavaScript"
- "Update styles for animations"
- "Fix responsive issues on mobile"

Use imperative mood and be specific about changes.

---

## 📊 Performance Considerations

### Optimizations Implemented
1. **Intersection Observer API**: Efficient viewport detection (no scroll event polling)
2. **CSS `will-change`**: Optimizes transform and opacity animations
3. **Passive event listeners**: Improves scroll performance
4. **Mobile parallax disabled**: Reduces resource usage on mobile devices
5. **Minimal JavaScript**: Only ~10KB vanilla JS
6. **No external dependencies**: Zero network requests for libraries
7. **CSS animations on GPU**: Uses transform and opacity for hardware acceleration

### Performance Metrics (Expected)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Page Size**: ~40 KB (HTML + CSS + JS)
- **Animation FPS**: 60 FPS on modern devices
- **Mobile Performance**: No janky animations

### Browser Compatibility
- **Chrome**: 51+ (Intersection Observer support)
- **Firefox**: 55+
- **Safari**: 12.1+
- **Edge**: 79+ (Chromium-based)
- **Opera**: 38+

**Graceful Degradation**: Older browsers simply don't show animations but site remains functional.

---

## 🎯 Content Structure

### Site Sections

1. **Header (Fixed Navigation)**
   - Logo: "IFARD-SA"
   - Navigation: Inicio, Nosotros, Servicios, Contacto
   - Always visible on scroll up

2. **Hero Section** (#inicio)
   - Gradient background (blue)
   - Main heading: "Bienvenidos a IFARD-SA"
   - Subtitle describing mission
   - CTA button linking to contact

3. **About Section** (#about)
   - Title: "Sobre Nosotros"
   - Subsection: "Nuestra Misión"
   - Three paragraphs about the institute
   - Placeholder for institutional image
   - 2-column grid layout

4. **Services Section** (#servicios)
   - Title: "Nuestros Servicios"
   - 6 service cards in responsive grid:
     - 📚 Formación Profesional
     - 🎓 Cursos Especializados
     - 💼 Consultoría
     - 🌐 Formación Online
     - 📊 Desarrollo Organizacional
     - 🏆 Certificaciones

5. **Contact Section** (#contacto)
   - Title: "Contáctanos"
   - Form fields:
     - Nombre Completo (required)
     - Correo Electrónico (required)
     - Teléfono (optional)
     - Mensaje (required, textarea)
   - Submit button with validation

6. **Footer**
   - Social media links (emoji placeholders)
   - Copyright: "© 2025 IFARD-SA"
   - Tagline: "Instituto de Formación y Desarrollo"

---

## 🤖 AI Assistant Guidelines

### When Working on This Codebase

#### DO:
- ✅ **Preserve existing functionality**: Don't break working features
- ✅ **Maintain Spanish language**: All content is in Spanish
- ✅ **Keep it simple**: No frameworks unless explicitly requested
- ✅ **Test responsiveness**: Check mobile, tablet, desktop views
- ✅ **Use semantic HTML**: Maintain accessibility standards
- ✅ **Follow existing conventions**: Match current code style
- ✅ **Update documentation**: Modify EFECTOS-SCROLL.md when changing effects
- ✅ **Consider performance**: Don't add heavy dependencies
- ✅ **Validate HTML**: Ensure standards compliance

#### DON'T:
- ❌ **Add build tools** unless explicitly requested (no webpack, gulp, etc.)
- ❌ **Install npm packages** without user approval
- ❌ **Add frameworks** (React, Vue, jQuery) without discussion
- ❌ **Change language** to English without permission
- ❌ **Remove working features** without justification
- ❌ **Add complex dependencies** that complicate deployment
- ❌ **Use emojis in code** unless they're already present
- ❌ **Create unnecessary documentation** files proactively

### Common AI Assistant Tasks

#### 1. Adding New Sections
```html
<!-- Follow this pattern -->
<section id="new-section">
    <h2 class="section-title">Título de la Sección</h2>
    <div class="content">
        <!-- Content here -->
    </div>
</section>
```
- Add to navigation links
- Ensure responsive design
- Add reveal animations if desired

#### 2. Modifying Styles
- Use existing CSS variables when possible
- Follow mobile-first approach
- Test at all breakpoints (480px, 768px, 1200px)
- Maintain consistent spacing and shadows

#### 3. Adding JavaScript Features
- Use vanilla JavaScript (no jQuery)
- Comment code clearly in Spanish or English
- Follow existing code organization pattern
- Test for browser compatibility
- Consider performance impact

#### 4. Optimizing Performance
- Check with Chrome DevTools Performance tab
- Aim for 60 FPS in animations
- Minimize repaints and reflows
- Use CSS transforms over position changes
- Lazy load images if many are added

#### 5. Accessibility Improvements
- Add ARIA labels where appropriate
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (WCAG AA minimum)
- Add alt text to images

---

## 🔍 Code Organization

### CSS Architecture

**Structure**: Single-file, organized by sections

```
1. Reset & Variables (lines 1-12)
2. Base Styles (lines 14-25)
3. Header & Navigation (lines 27-68)
4. Hero Section (lines 70-109)
5. General Sections (lines 111-123)
6. About Section (lines 125-158)
7. Services Section (lines 160-195)
8. Contact Section (lines 197-260)
9. Footer (lines 262-291)
10. Animations (lines 293-303)
11. Scroll Effects (lines 305-489)
12. Responsive Media Queries (lines 496-565)
```

**Naming Convention**: BEM-inspired, semantic class names
- `.section-title` - Section headings
- `.service-card` - Individual service cards
- `.contact-form` - Contact form container
- `.scroll-to-top` - Scroll to top button
- `.reveal` - Elements with reveal animation

### JavaScript Architecture

**Structure**: Modular sections with clear comments

```
1. Smooth Scroll (lines 8-42)
2. Dynamic Header (lines 47-68)
3. Reveal Animations (lines 73-106)
4. Scroll-to-Top Button (lines 111-133)
5. Active Navigation (lines 138-159)
6. Parallax Effect (lines 164-176)
7. Counter Animations (lines 181-211)
8. Form Handling (lines 216-259)
9. Lazy Loading (lines 264-279)
10. Typing Effect (lines 284-304)
```

**Patterns Used**:
- Event listeners on DOMContentLoaded
- Intersection Observer for performance
- Closure pattern for encapsulation
- Event delegation where appropriate

---

## 🐛 Known Issues & Limitations

### Current Limitations
1. **Form Submission**: Form doesn't actually send data (client-side only)
2. **No Backend**: No server-side processing
3. **Static Content**: No CMS or content management
4. **Social Links**: Placeholder links (not connected to real profiles)
5. **Images**: Placeholder for about image (no real image)
6. **No i18n**: Spanish only, no language switcher

### Browser-Specific Issues
- **Safari < 12.1**: Intersection Observer not supported (animations won't trigger)
- **IE11**: Not supported (uses modern CSS features)
- **Old Android**: Parallax may be choppy (already disabled on mobile)

### Future Considerations
1. **Menu Hamburger**: Mobile navigation could use hamburger menu
2. **Form Backend**: Connect to email service or backend API
3. **Dark Mode**: User preference for dark theme
4. **Real Images**: Replace placeholders with professional photos
5. **SEO Optimization**: Add structured data, meta tags
6. **Analytics**: Google Analytics or alternative
7. **Cookie Consent**: GDPR compliance if needed

---

## 📈 Scalability Considerations

### If the Site Grows...

#### Minor Growth (5-10 pages)
- Keep static HTML approach
- Create separate HTML files for new pages
- Use consistent header/footer (consider includes via build tool)
- Maintain single CSS file

#### Medium Growth (10-30 pages)
- Consider static site generator (Jekyll, Hugo, 11ty)
- Implement partial/component system
- Add CSS preprocessor (Sass) for better organization
- Introduce basic templating

#### Major Growth (30+ pages or dynamic features)
- Consider Headless CMS (Strapi, Contentful)
- Implement JavaScript framework (React, Vue, Svelte)
- Add build process (Webpack, Vite)
- Database backend if user accounts needed

#### E-commerce Features
- Integrate payment gateway (Stripe, PayPal)
- Use e-commerce platform (Shopify, WooCommerce)
- Add shopping cart functionality
- Implement user authentication

---

## 🔒 Security Considerations

### Current Security Status
**Low Risk**: Static site with no server-side processing

### If Adding Backend:
1. **Form Validation**: Server-side validation required
2. **CSRF Protection**: Add tokens to forms
3. **Input Sanitization**: Prevent XSS attacks
4. **HTTPS**: Enforce SSL/TLS
5. **Rate Limiting**: Prevent form spam
6. **SQL Injection**: Use parameterized queries
7. **Authentication**: Secure password hashing (bcrypt)

### Third-Party Scripts
Currently: **None** - No external scripts loaded

If adding:
- Subresource Integrity (SRI) checks
- Content Security Policy (CSP) headers
- Only load from trusted CDNs

---

## 📚 External Resources

### Documentation References
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Smooth Scrolling](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

### Tools for Testing
- **W3C Validator**: https://validator.w3.org/ - HTML validation
- **Chrome DevTools**: Performance, Lighthouse, Mobile emulation
- **BrowserStack**: Cross-browser testing
- **WebPageTest**: Performance analysis
- **WAVE**: Accessibility evaluation

### Design Resources
- **Color Palette Generator**: coolors.co
- **Font Pairing**: fontpair.co
- **Icons**: Font Awesome, Heroicons (currently using emojis)
- **Stock Photos**: Unsplash, Pexels (when adding real images)

---

## 🎓 Learning Resources

### For Understanding This Codebase

**Beginner Level:**
- HTML/CSS basics: freeCodeCamp, MDN tutorials
- JavaScript fundamentals: javascript.info
- Responsive design: CSS-Tricks guides

**Intermediate Level:**
- Intersection Observer: Google Web Fundamentals
- CSS animations: animation-playground, animista.net
- Vanilla JS patterns: vanillajs-toolkit.com

**Advanced Level:**
- Performance optimization: web.dev/fast
- Accessibility: a11y-project.com
- Modern CSS: moderncss.dev

---

## 🚢 Deployment Guide

### GitHub Pages Deployment

1. **Setup** (One-time):
   ```bash
   # Ensure code is on main branch
   git checkout main
   git push origin main
   ```

2. **Configure GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` / root
   - Save

3. **Access Site**:
   - URL: `https://ifard-sa.github.io/website/`
   - Updates automatically on push to main

### Netlify Deployment

1. **Connect Repository**:
   - Sign in to Netlify
   - "New site from Git"
   - Connect GitHub repository

2. **Build Settings**:
   - Build command: (leave empty)
   - Publish directory: `/`
   - No build process needed

3. **Deploy**:
   - Automatic on every push
   - Preview deployments for pull requests
   - Custom domain supported

### Vercel Deployment

1. **Import Project**:
   - Sign in to Vercel
   - "Import Project"
   - Select GitHub repository

2. **Configure**:
   - Framework Preset: Other
   - Root Directory: `./`
   - No build command needed

3. **Deploy**:
   - Automatic deployments
   - Preview URLs for branches
   - Analytics available

---

## 🤝 Contributing Guidelines

### For AI Assistants Making Changes

1. **Understand Context**: Read relevant documentation first
2. **Preserve Functionality**: Don't break existing features
3. **Test Thoroughly**: Check all interactive elements
4. **Document Changes**: Update EFECTOS-SCROLL.md if modifying effects
5. **Commit Properly**: Use descriptive commit messages
6. **Respect Constraints**: Keep it simple, no unnecessary dependencies

### For Human Developers

1. **Branch Strategy**: Create feature branches from main
2. **Code Style**: Follow existing patterns and conventions
3. **Testing**: Manually test on multiple devices/browsers
4. **Pull Requests**: Describe changes clearly, reference issues
5. **Reviews**: Get approval before merging to main

---

## 📞 Project Context & History

### Project Evolution
1. **Initial Phase**: Simple HTML page with "Hola como va" greeting
2. **Design Phase**: Added CSS styling, color scheme, layout
3. **Content Phase**: Added complete content for all sections
4. **Interactivity Phase**: Implemented scroll effects and animations
5. **Current State**: Fully functional single-page website with professional effects

### Key Decisions Made
- **No Framework**: Decided to keep it simple with vanilla JS
- **Spanish Language**: Target audience is Spanish-speaking
- **Single Page**: Better for initial MVP, can expand later
- **Modern CSS**: Leveraged latest CSS features for better UX
- **Performance First**: Prioritized speed over feature complexity

### Recent Changes
- Pull Request #5: Added scroll effects with JavaScript
- Scroll effects documentation created
- Test page for validation added

---

## 🎯 AI Agent-Specific Instructions

### For Genium AI Infrastructure

**Context Awareness:**
- This is a **production website** for a real organization
- Changes should be **conservative** and **tested**
- Always **preserve existing functionality**
- Spanish content must remain in Spanish

**Task Prioritization:**
1. **Critical**: Bugs that break site functionality
2. **High**: Requested features or improvements
3. **Medium**: Performance optimizations
4. **Low**: Code refactoring without functional changes

**Code Generation Guidelines:**
- Match existing code style precisely
- Use existing CSS variables and utility classes
- Comment complex logic clearly
- Avoid over-engineering solutions
- Test edge cases (empty states, long content, small screens)

**Communication Style:**
- Be clear and concise
- Explain technical decisions
- Provide code examples when helpful
- Warn about breaking changes
- Suggest alternatives when appropriate

### Autonomous Decision-Making Boundaries

**Can Decide Independently:**
- Code formatting and style improvements
- Performance micro-optimizations
- Accessibility enhancements (ARIA labels, etc.)
- Bug fixes for obvious issues
- Documentation updates

**Must Ask User First:**
- Adding new dependencies or libraries
- Changing site architecture
- Modifying content or copy
- Removing existing features
- Major design changes
- Adding analytics or tracking

---

## 📋 Quick Reference Commands

### Development
```bash
# Start local server
python3 -m http.server 8000

# View in browser
open http://localhost:8000/index.html
```

### Git Operations
```bash
# Check status
git status

# View diff
git diff

# Stage all changes
git add .

# Commit
git commit -m "Description of changes"

# Push
git push origin branch-name

# View log
git log --oneline --graph --max-count=10
```

### Validation
```bash
# HTML validation (if html5validator installed)
html5validator --root . --also-check-css

# Check file sizes
du -h index.html css/styles.css js/main.js

# Count lines of code
wc -l index.html css/styles.css js/main.js
```

### Browser Testing
```
Chrome DevTools: F12 or Cmd+Option+I
Mobile Emulation: Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)
Performance: DevTools > Performance tab > Record
Lighthouse: DevTools > Lighthouse tab > Generate report
```

---

## ✅ Pre-Deployment Checklist

Before deploying changes:

- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] No console errors or warnings
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] Animations are smooth (60 FPS)
- [ ] Images have alt text (if added)
- [ ] Meta tags are complete and accurate
- [ ] Performance score > 90 (Lighthouse)
- [ ] Accessibility score > 90 (Lighthouse)
- [ ] Code is commented where necessary
- [ ] Documentation updated if features changed
- [ ] Git commit messages are descriptive
- [ ] No sensitive data in code (API keys, etc.)

---

## 🎉 Success Metrics

### Technical Metrics
- **Page Load Time**: < 2 seconds
- **Performance Score**: > 90
- **Accessibility Score**: > 90
- **Best Practices Score**: > 90
- **SEO Score**: > 90

### User Experience Metrics
- Smooth scroll interactions
- No layout shifts (CLS = 0)
- Animations feel natural and not distracting
- Forms are intuitive and provide feedback
- Mobile experience matches desktop quality

### Business Metrics
- Contact form submissions (when backend connected)
- Page views and session duration
- Bounce rate < 50%
- Mobile vs desktop traffic
- Conversion rate for contact forms

---

## 📝 Final Notes for AI Assistants

This is a **production website** for a real educational institution. Quality and professionalism are paramount.

**Key Principles:**
1. **Simplicity**: Don't over-engineer
2. **Performance**: Fast loading and smooth animations
3. **Accessibility**: Usable by everyone
4. **Maintainability**: Clear, documented code
5. **User Focus**: Design for the end user experience

When in doubt:
- **Ask the user** rather than making assumptions
- **Test thoroughly** before suggesting changes
- **Document your reasoning** for technical decisions
- **Preserve what works** and only change what needs improvement

---

**Last Updated**: 2025
**Document Version**: 1.0
**Maintained By**: AI Assistants and Genium AI Infrastructure
**For**: IFARD-SA Website Project

---

*This document should be updated whenever significant changes are made to the project structure, technology stack, or development workflow.*
