# MechaCAD Solutions - Project Documentation

## Project Overview
**MechaCAD Solutions** — Professional single-page website for Sri Lanka's premier engineering and digital manufacturing firm.

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 3.x (custom theme configured)
- **Fonts**: Inter + JetBrains Mono (via Google Fonts)
- **Icons**: Inline SVG icons

## Brand Identity
- **Color Theme**: Industrial-Tech (Carbon Grey, Blueprint Blue, Metallic Silver)
- **Primary Dark**: `#0D0D0D` (carbon-950)
- **Blueprint Blue**: `#2563EB` (blueprint-600) 
- **Accent**: `#00D4FF` (accent)
- **Typography**: Inter (body) + JetBrains Mono (labels/code)

## Project Structure
```
src/
  components/
    Navbar.tsx        — Sticky nav with active section detection
    Hero.tsx          — Full-screen hero with stats
    About.tsx         — Company description + feature cards
    Services.tsx      — Tabbed service showcase (4 core services)
    Portfolio.tsx     — Filterable portfolio grid (6 projects)
    Reviews.tsx       — 6 client testimonials + client logos
    Contact.tsx       — WhatsApp-integrated contact form
    Footer.tsx        — Full footer with links and info
  App.tsx             — Main app assembly with floating WhatsApp button
  index.css           — Global styles + Tailwind + custom utilities
  main.tsx            — Entry point

tailwind.config.js    — Custom brand colors, animations, shadows
```

## Key Features
1. **Scrollable single-page layout** with smooth anchor navigation
2. **Sticky navbar** with active section highlighting
3. **Hero section** with animated stats counter
4. **Services tabs** — 3D Modeling, 3D Printing, Laser Cutting, Automation
5. **Portfolio gallery** with category filtering
6. **Customer reviews** grid with star ratings
7. **Contact form** that integrates with WhatsApp (`075 613 3530`)
8. **Floating WhatsApp button** (bottom-right, always visible)
9. **Blueprint grid background** effects throughout
10. **Custom Tailwind theme** with brand colors

## Business Contact
- **WhatsApp/Phone**: 075 613 3530
- **Email**: info@mechacad.lk
- **Location**: Sri Lanka

## Services Covered
1. **3D Modeling**: Character, Engineering CAD, General Design
2. **3D Printing**: FDM (PLA+, PETG, Carbon Fiber, TPU) + Resin
3. **Laser Cutting**: Steel (SS up to 6mm, MS up to 15mm, Aluminum), Acrylic, Engraving
4. **Automation**: PLC (Omron, Siemens, Allen Bradley, Mitsubishi)

## Portfolio Projects Featured
- Mercedes-Benz W140 Console Parts (Reverse Engineering)
- 3D Printed Karaduwa (Cultural Heritage)
- Sound Professional Enclosures (Industrial)
- Raspberry Pi 2-Axis Robotics Base (Robotics)
- 3D LED Sign Boards (Branding)
- Custom Trophies & Awards (Premium)

## Build Commands
```bash
npm install    # Install dependencies
npm run build  # Production build to dist/
npm run dev    # Development server
```

## Notes for Future Development
- The portfolio images use Pixabay CDN URLs (always accessible)
- WhatsApp number is hardcoded as `075 613 3530` → `+94 756 133 530`
- Form submission opens WhatsApp with pre-filled message
- All animations are CSS-based (no external animation libraries used)
- The site is fully responsive (mobile, tablet, desktop)
