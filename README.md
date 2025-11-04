# RRSSDP Personal Website

Modern multi-page website for Rajana Rama Satya Sai Durga Prasad, derived from the original `CV.html`.

## Structure

```
RRSSDP_Website/
├── index.html              # Homepage
├── about.html              # About / biography
├── research.html           # Research interests & current project
├── experience.html         # Work experience & teaching
├── projects.html           # Selected projects
├── education.html          # Academic background
├── contact.html            # Contact info & references
├── CV.html                 # Original CV (reference)
├── css/
│   └── style.css          # Stylesheet for all pages
├── assets/
│   ├── profile.svg        # Profile photo placeholder (replace with your photo)
│   └── cv-resume.pdf      # PDF CV (replace with actual PDF)
├── templates/
│   ├── header.html        # Reusable header template
│   └── footer.html        # Reusable footer template
├── build.js               # Build script (generates pages from templates)
├── package.json           # Node.js project metadata & scripts
└── README.md              # This file
```

## Quick Start

### Option 1: View directly (no build needed)
The HTML files are ready to use. Just open `index.html` in your browser:
- Double-click `index.html`, or
- Right-click → Open with → Browser

### Option 2: Run a local server (recommended)
```powershell
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npm run serve

# Then visit: http://localhost:8000/index.html
```

## Building from Templates (Optional)

If you modify content in `build.js` or `templates/`, rebuild the pages:

```powershell
# Install Node.js if needed, then:
node build.js

# Or use the npm script:
npm run build
```

This regenerates `about.html`, `research.html`, `experience.html`, `projects.html`, `education.html`, and `contact.html` from the templates.

## Customization Guide

### 1. Replace the profile photo
- Replace `assets/profile.svg` with your own photo (JPG, PNG, or SVG)
- Update the `<img src="assets/profile.svg">` tags in `index.html` and `about.html` (or in `build.js` if using templates)

### 2. Replace the PDF CV
- Generate a PDF from your CV (e.g., print `CV.html` to PDF, or use a professional tool)
- Replace `assets/cv-resume.pdf` with your actual PDF
- The download links already point to this file

### 3. Edit content
- **Quick edits**: Directly edit the `.html` files
- **Template-based edits**: Modify `build.js` (page content) and `templates/` (header/footer), then run `npm run build`

### 4. Customize colors & fonts
- Edit `css/style.css`
- The accent color is defined in `:root` as `--accent: #C41230;`

## Features

✅ **Responsive design** — mobile-friendly navigation and layout  
✅ **Accessible** — semantic HTML, ARIA labels, keyboard navigation  
✅ **Template system** — avoid duplication with header/footer templates  
✅ **Profile photo** — placeholder SVG (ready to replace)  
✅ **PDF CV download** — direct link to downloadable PDF  
✅ **Multi-page** — separate pages for about, research, experience, projects, education, contact  

## Next Steps

- [ ] Replace `assets/profile.svg` with your actual photo
- [ ] Generate and replace `assets/cv-resume.pdf` with a real PDF CV
- [ ] Add projects with images/screenshots
- [ ] Add a publications or blog section
- [ ] Deploy to GitHub Pages, Netlify, or Vercel

## Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select branch `main` and folder `/` (root)
4. Your site will be live at `https://yourusername.github.io/repo-name/`

### Netlify / Vercel
1. Connect your GitHub repository
2. Build command: (leave empty, files are pre-built)
3. Publish directory: `/` (root)

## License

MIT — feel free to use this as a template for your own site.

---

**Built with:** HTML, CSS, vanilla JavaScript  
**Original CV:** See `CV.html` for the source content