# CLAUDE.md

This file provides comprehensive guidance to AI assistants (like Claude Code) when working with this repository.

## Project Overview

**Repository**: IFARD-SA/website
**Project Type**: Static HTML Website
**Language**: HTML
**Purpose**: Simple single-page website with basic HTML structure

## Project Structure

```
.
├── index.html          # Main HTML page with Spanish greeting
└── CLAUDE.md          # This file - AI assistant guidance
```

## Technical Details

### Technology Stack
- **Frontend**: Pure HTML5
- **Version Control**: Git
- **Hosting**: Designed for static hosting (GitHub Pages compatible)

### Current Implementation

The project consists of a single HTML file (`index.html`) containing:
- Standard HTML5 document structure
- UTF-8 character encoding
- Responsive viewport meta tag
- Basic content with Spanish text: "Hola como va" (Hello, how's it going)

## Development Guidelines

### File Conventions
- **Line Endings**: CRLF (Windows-style)
- **Encoding**: ASCII/UTF-8
- **Language**: HTML content is in Spanish

### Making Changes

1. **Editing HTML**:
   ```bash
   # The main file to edit is index.html
   # It contains the entire website structure
   ```

2. **Testing Locally**:
   ```bash
   # Simply open index.html in a web browser
   # On Windows:
   start index.html

   # On macOS:
   open index.html

   # On Linux:
   xdg-open index.html
   ```

3. **Version Control**:
   ```bash
   # Check status
   git status

   # Stage changes
   git add index.html

   # Commit changes
   git commit -m "Description of changes"

   # Push to remote
   git push origin main
   ```

## Common Tasks

### Adding New Content

To add new content to the website:
1. Edit `index.html`
2. Add HTML elements within the `<body>` tag
3. Test by opening in a browser
4. Commit and push changes

### Adding Styles

Currently, the project has no CSS. To add styling:

**Option 1: Inline styles**
```html
<h1 style="color: blue;">Hola como va</h1>
```

**Option 2: Internal stylesheet**
```html
<head>
    <style>
        h1 { color: blue; }
    </style>
</head>
```

**Option 3: External stylesheet (recommended)**
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

### Adding JavaScript

To add interactivity:

**Option 1: Inline JavaScript**
```html
<script>
    console.log('Hello!');
</script>
```

**Option 2: External script**
```html
<script src="script.js"></script>
```

## Repository Information

### Git History
- **Latest Commit**: e4d43d0 - "Update"
- **Branch**: main
- **Previous Attempts**: Several `sundays-ai/claude-md-*` branches exist with previous CLAUDE.md generation attempts

### Remote Repository
- **Organization**: IFARD-SA
- **Repository Name**: website
- **Platform**: GitHub

## Potential Improvements

When working with this codebase, consider these enhancement opportunities:

1. **Content Structure**:
   - Add more semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
   - Include proper page title instead of generic "Document"
   - Add meta description for SEO

2. **Styling**:
   - Create a CSS file for visual design
   - Implement responsive design patterns
   - Consider a CSS framework (Bootstrap, Tailwind, etc.)

3. **Functionality**:
   - Add JavaScript for interactivity
   - Implement form handling if needed
   - Add navigation if expanding to multiple pages

4. **Best Practices**:
   - Add a favicon
   - Include Open Graph meta tags for social sharing
   - Add accessibility features (ARIA labels, alt text, etc.)
   - Create a README.md for human developers
   - Add .gitignore file
   - Consider adding build tools (npm, webpack) for larger projects

5. **Content**:
   - Complete the welcome message
   - Add actual business/organization content
   - Include contact information
   - Add about section

## Commands Reference

### Development
```bash
# No build process required - just edit HTML files

# To preview changes, open in browser:
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Deployment
```bash
# For GitHub Pages:
# 1. Go to repository Settings > Pages
# 2. Select main branch
# 3. Save - site will be live at https://ifard-sa.github.io/website/

# For other static hosts (Netlify, Vercel, etc.):
# Simply drag and drop the files or connect the GitHub repository
```

## Important Notes for AI Assistants

1. **Simplicity**: This is a minimal HTML project - avoid over-engineering
2. **Language**: Content is in Spanish - maintain language consistency
3. **No Dependencies**: No package.json or build tools - keep it simple
4. **Direct Editing**: Changes to index.html are immediately visible
5. **Testing**: Always test in a browser after making changes
6. **Backwards Compatibility**: Maintain HTML5 standards for broad browser support

## Context for Code Changes

When making modifications:
- Preserve the Spanish language content unless instructed otherwise
- Maintain the existing HTML5 structure
- Test accessibility (screen readers, keyboard navigation)
- Ensure responsive design on mobile devices
- Keep code readable and well-commented
- Follow semantic HTML best practices

## Questions to Ask Users

Before making significant changes, consider asking:
1. What is the purpose/content of this website?
2. Should we add CSS styling?
3. Do you need multiple pages?
4. What information should be displayed?
5. Is there a design or brand guideline to follow?
6. Should the site be bilingual (Spanish/English)?
7. What's the target audience?

---

**Last Updated**: 2024-11-12
**Generated by**: Claude Code AI Assistant
**For**: Sundays AI - Repository Analysis
