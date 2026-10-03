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

## Deploy

This is a Next.js App Router project and does not require a separate backend.
Deploy it to Vercel by importing the repository or running:

```bash
npx vercel login
npx vercel --prod
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL using the example in `.env.example`.
This value is used by metadata, `sitemap.xml`, and `robots.txt`.
