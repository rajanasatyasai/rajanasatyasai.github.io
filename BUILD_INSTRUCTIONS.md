# Build System Instructions

## Prerequisites

The build system requires Node.js. If you don't have it installed:

### Install Node.js

**Option 1: Official installer**
- Download from: https://nodejs.org/
- Install the LTS (Long Term Support) version
- Verify installation: `node --version`

**Option 2: Using winget (Windows)**
```powershell
winget install OpenJS.NodeJS.LTS
```

## Using the Build System

Once Node.js is installed:

### Build pages from templates
```powershell
node build.js
# Or using npm:
npm run build
```

This regenerates all pages (about.html, research.html, experience.html, projects.html, education.html, contact.html) from the templates and content defined in `build.js`.

### Run local development server
```powershell
npm run serve
```
Then visit: http://localhost:8000/

## When to use the build system

✅ Use templates/build when:
- You want to update header/footer across all pages at once
- You're making bulk content changes
- You want to add new pages with consistent structure

❌ Just edit HTML directly when:
- Making small content tweaks to individual pages
- The build system adds unnecessary complexity for your workflow

## Current Status

✅ Templates created in `templates/`
✅ Build script ready in `build.js`
✅ Package.json configured
⚠️ Node.js not yet installed (optional - HTML files work without it)

The website works perfectly without Node.js - the build system is just a convenience tool for managing multiple pages more easily!
