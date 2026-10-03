# Posts

Add future technical posts here as MDX files. Keep the frontmatter shape aligned with `src/data/posts.ts`:

```md
---
title: Building Reliable AI Pipelines
date: 2026-10-03
excerpt: A short description of the note.
readingTime: 6 min read
tags:
  - AI engineering
  - MLOps
---

The post content goes here.
```

When the first post is ready, add an MDX loader for this directory and expose posts through the existing `/posts` route. Until then, the page intentionally shows an empty state rather than sample content.
