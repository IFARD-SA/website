# CLAUDE.md - AI Assistant Guide for IFARD-SA Website

## Project Overview

This is a static website project for IFARD-SA. Currently, the project consists of a single HTML page that serves as the foundation for the organization's web presence.

**Project Type:** Static Website
**Repository:** https://github.com/IFARD-SA/website
**Primary Language:** HTML
**Deployment:** Static hosting (suitable for GitHub Pages, Netlify, Vercel, etc.)

## Project Structure

```
.
├── index.html          # Main landing page
└── CLAUDE.md          # This file - AI assistant guide
```

### Current State

The project is in its early stages with:
- A simple HTML5 landing page (`index.html`)
- Minimal content (greeting message: "Hola como va")
- No CSS or JavaScript files yet
- No build process or dependencies required

## Commands

### Development

Since this is a static HTML website, there are no build tools or package managers configured. To work with this project:

#### Local Development Server

```bash
# Option 1: Using Python 3 (if available)
python3 -m http.server 8000

# Option 2: Using Python 2 (if available)
python -m SimpleHTTPServer 8000

# Option 3: Using Node.js http-server (if npm is available)
npx http-server -p 8000

# Option 4: Using PHP (if available)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

#### Viewing the HTML File

```bash
# Open directly in default browser (macOS)
open index.html

# Open directly in default browser (Linux)
xdg-open index.html

# Open directly in default browser (Windows)
start index.html
```

### Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Descriptive commit message"

# Push to main branch
git push origin main

# Create and push a new branch
git checkout -b feature/new-feature
git push -u origin feature/new-feature
```

### Validation

```bash
# Validate HTML (if html5validator is available)
html5validator --root . --also-check-css

# Check with W3C validator online
# Visit: https://validator.w3.org/#validate_by_upload
```

## Architecture

### Technology Stack

- **HTML5**: Semantic markup and structure
- **No frameworks**: Pure HTML currently
- **No build tools**: No compilation or bundling required

### File Organization

Currently minimal, but recommended structure for future growth:

```
website/
├── index.html              # Homepage
├── about.html             # About page (future)
├── contact.html           # Contact page (future)
├── css/
│   └── styles.css         # Main stylesheet (future)
├── js/
│   └── main.js            # Main JavaScript file (future)
├── images/
│   └── logo.png           # Logo and images (future)
└── assets/
    └── fonts/             # Custom fonts (future)
```

### Design Patterns

- **Static HTML**: No server-side processing required
- **Progressive Enhancement**: Start with HTML, add CSS and JS incrementally
- **Mobile-First**: Use responsive design when adding CSS

## Important Notes

### Content Language

- The current content is in Spanish ("Hola como va")
- Consider whether the site will be bilingual or Spanish-only
- Plan for internationalization if needed

### Development Workflow

1. **Direct Editing**: Edit HTML files directly - changes are immediately visible
2. **No Build Step**: No compilation or transpilation needed
3. **Browser Testing**: Test in multiple browsers (Chrome, Firefox, Safari, Edge)
4. **Mobile Testing**: Ensure responsive design when adding CSS

### Best Practices

1. **HTML Validation**: Ensure HTML5 compliance
2. **Semantic HTML**: Use appropriate HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
3. **Accessibility**: Add proper `alt` attributes, ARIA labels, and semantic markup
4. **Meta Tags**: Include proper meta tags for SEO (description, keywords, Open Graph tags)
5. **Performance**: Optimize images, minify CSS/JS when added

### Recommended Next Steps

When expanding this project, consider:

1. **Add CSS Styling**
   - Create a `css/` directory
   - Add `styles.css` for layout and design
   - Consider using a CSS framework (Bootstrap, Tailwind) or custom styles

2. **Add Interactivity**
   - Create a `js/` directory
   - Add JavaScript for dynamic behavior
   - Consider modern frameworks if the site becomes complex (React, Vue, etc.)

3. **Improve Content**
   - Update the page title from "Document" to something meaningful
   - Add proper heading structure and content
   - Create additional pages as needed

4. **SEO Optimization**
   - Add meta description and keywords
   - Include Open Graph tags for social media
   - Create a `robots.txt` file
   - Add a `sitemap.xml`

5. **Setup Deployment**
   - Configure GitHub Pages (Settings → Pages → Deploy from main branch)
   - Or use Netlify/Vercel for automatic deployments
   - Add custom domain if needed

6. **Version Control**
   - Create a `.gitignore` file if needed
   - Add meaningful commit messages
   - Use branches for new features

### Common Tasks for AI Assistants

#### Adding New HTML Content

```html
<!-- Example: Adding a navigation menu -->
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

#### Adding CSS (when needed)

```html
<!-- In <head> section -->
<link rel="stylesheet" href="css/styles.css">
```

#### Adding JavaScript (when needed)

```html
<!-- Before closing </body> tag -->
<script src="js/main.js"></script>
```

#### Adding Images

```html
<img src="images/logo.png" alt="IFARD-SA Logo" width="200" height="100">
```

### Deployment Options

1. **GitHub Pages** (Recommended for static sites)
   - Go to repository Settings → Pages
   - Select "Deploy from a branch" → main branch → root folder
   - Site will be available at `https://ifard-sa.github.io/website/`

2. **Netlify**
   - Connect GitHub repository
   - Build command: (none needed)
   - Publish directory: `/`

3. **Vercel**
   - Import GitHub repository
   - Framework Preset: Other
   - Root Directory: `./`

### Troubleshooting

**Issue**: Changes not showing in browser
**Solution**: Hard refresh (Ctrl+F5 or Cmd+Shift+R) to clear cache

**Issue**: Images not loading
**Solution**: Check file paths are relative and case-sensitive

**Issue**: HTML validation errors
**Solution**: Use W3C Validator to identify and fix issues

## Contact & Maintenance

- **Organization**: IFARD-SA
- **Repository**: https://github.com/IFARD-SA/website
- **Last Updated**: November 2025

---

**Note for AI Assistants**: This is a starter project with minimal infrastructure. When making changes or suggestions, consider that:
- No build process exists (keep it simple unless user requests otherwise)
- No dependencies need to be installed
- Changes to HTML are immediately deployable
- The project may grow to include CSS, JavaScript, and additional pages
