# Revanth Ajoe A — Portfolio

Personal portfolio for Revanth Ajoe A, an AI/ML Engineer and Software Developer.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validate and build

```bash
npm run lint
npm run build
npm run start
```

## Content and resume

- Profile and contact details: `src/data/profile.ts`
- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Education, skills, achievements, and certifications: `src/data/resume.ts`
- Resume PDF: `public/resume.pdf`

## Deploy to GitHub Pages

This is a static Next.js App Router export and does not require a separate backend.
The workflow in `.github/workflows/deploy.yml` builds and deploys the `out` directory to GitHub Pages.

For a local production build:

```bash
$env:NEXT_PUBLIC_SITE_URL="https://revanthajoe.github.io"
npm ci
npm run build
```

The site is deployed at https://revanthajoe.github.io.
