# German Job Website - SvelteKit Replica

## Overview
This is a pixel-perfect replica of a German job website landing page built with SvelteKit and Tailwind CSS. The application features a clean, modern design with a mint green color scheme and professional illustrations.

## Project Architecture

### Tech Stack
- **Framework**: SvelteKit (latest)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **Node.js**: v20

### Project Structure
```
app/
├── src/
│   ├── lib/
│   │   ├── components/          # Illustration wrapper components
│   │   │   ├── HandshakeIllustration.svelte
│   │   │   ├── PersonWithCVIllustration.svelte
│   │   │   ├── LaptopSceneIllustration.svelte
│   │   │   └── ApplicationScreenIllustration.svelte
│   │   └── assets/              # Static assets
│   ├── routes/
│   │   ├── +layout.svelte       # Root layout with CSS import
│   │   └── +page.svelte         # Main landing page
│   ├── app.css                   # Tailwind CSS imports
│   └── app.html                  # HTML template
├── static/                       # Static assets served directly
│   ├── handshake.png             # Undraw agreement illustration
│   ├── personal-file.png         # Undraw personal file illustration
│   ├── task.png                  # Undraw task illustration
│   └── profile-data.png          # Undraw profile data illustration
├── vite.config.ts               # Vite configuration with Tailwind plugin
├── svelte.config.js             # SvelteKit configuration
└── package.json                 # Dependencies
```

## Features

### Hero Section
- Large headline: "Deine Job webseite"
- Teal CTA button: "Kostenlos Registrieren"
- Handshake illustration on mint green background
- Login link in top-right corner

### Tab Navigation
Three tabs with active state styling:
1. Jobsuchende (active by default)
2. Arbeitgeber
3. Bewerberkbos

### Three-Step Workflow
1. **Erstelle deinen Lebenslauf** - Create your CV with person and document illustration
2. **Finde passende Jobs** - Find matching jobs with laptop scene illustration
3. **Mit nur einem Klick bewerben** - Apply with one click with application screen illustration

Each step features:
- Alternating left/right layout
- Professional undraw.co illustration assets
- Curved connecting lines between steps
- Responsive design

## Design Specifications

### Colors
- Primary Teal: `#4DB8AC`
- Mint Background: `#E8F5F3`
- Dark Text: `#2C3E50`
- Gray Text: `#6B7280`
- Light Gray: `#A0AEC0`

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800

### Responsive Breakpoints
- Mobile-first design
- Tablet: `md:` (768px)
- Desktop: Large screens

## Development

### Run Development Server
```bash
cd app
npm run dev
```

Server runs on: `http://localhost:5000`

### Build for Production
```bash
cd app
npm run build
```

### Preview Production Build
```bash
cd app
npm run preview
```

## Recent Changes
- **2025-10-27**: Project completed with professional illustrations
  - Created pixel-perfect replica of German job website design
  - Integrated professional undraw.co PNG illustration assets
  - Implemented responsive layout with Tailwind CSS v4
  - Fixed German grammar in step descriptions
  - Ensured all three steps have unique, meaningful text
  - Added allowedHosts configuration for Replit deployment
  - Replaced custom SVG components with high-quality undraw images

## Notes
- Professional undraw.co illustrations integrated as PNG assets
- Design follows SvelteKit 5 best practices with runes syntax
- Fully responsive across all device sizes
- Accessible semantic HTML structure
- Clean, maintainable component architecture
- Static assets optimized for fast loading
