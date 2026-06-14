# Minahil Yaseen — Software Engineer Portfolio

A premium, dark-themed portfolio built with React, TypeScript, Tailwind CSS,
Framer Motion, and Three.js (via React Three Fiber).

## Tech Stack

- **React 18 + TypeScript** — component architecture
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling with custom design tokens (colors, fonts, animations)
- **Framer Motion** — scroll reveals, hover interactions, page-load animation
- **React Three Fiber / Drei / Three.js** — floating 3D glass spheres, torus, and
  wireframe shapes in the hero background
- **Lenis** — buttery smooth scrolling
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable UI: Navbar, SceneBackground, ProjectCard,
│                     # ParticleField, StatCounter, CursorGlow, PageLoader
├── sections/         # Page sections: Hero, About, Skills, Experience,
│                     # Projects, Services, Education, Contact, Footer
├── hooks/            # useSmoothScroll (Lenis), useMousePosition
├── lib/
│   ├── data.ts       # ALL editable content — name, bio, skills, projects,
│   │                 # experience, education, contact info
│   └── iconMap.ts    # maps icon-name strings to Lucide components
├── App.tsx
├── main.tsx
└── index.css         # design tokens, glassmorphism, gradients, utilities
```

## Editing Content

Almost everything text-based (name, bio, project list, skills, experience,
education, contact details) lives in **`src/lib/data.ts`**. Edit that file to
update the site without touching component code.

## Adding a Resume

Drop a `resume.pdf` file into the `public/` folder — the "Download Resume"
button in the hero links to `/resume.pdf`.

## Adding Real Project Images

Each project card currently shows a gradient placeholder with a project
number. To add real screenshots:

1. Place images in `public/projects/` (e.g. `ecommerce.png`).
2. In `src/components/ProjectCard.tsx`, replace the placeholder `<div>` in
   the "Preview area" with an `<img src={...} />` tag, and add an `image`
   field to the `Project` type / data entries in `src/lib/data.ts`.

## Notes

- The Skills and Projects sections use scroll-driven horizontal motion: as
  you scroll down the page, the cards glide left across a sticky viewport.
- 3D shapes in the hero respond gently to mouse movement.
- All animations respect `prefers-reduced-motion`.
- Update social links, email, and phone in `src/lib/data.ts` →
  `personalInfo`.
