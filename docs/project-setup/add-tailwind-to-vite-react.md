---
title: Add Tailwind to Vite React
---

# Add Tailwind to Vite React

## Purpose

Add Tailwind CSS to a React + Vite project with a clean default setup.

## When to use it

- New project styling baseline
- Existing Vite React app needs utility-first styling

## Prerequisites

- Existing React + Vite + TypeScript project

## Steps

1. Install Tailwind and required dependencies:

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

2. Configure Tailwind content paths in `tailwind.config.*`.
3. Add Tailwind directives to your global CSS file.

## Verify it works

- Utility classes apply correctly in the app.
- Build succeeds without CSS processing errors.

## Common mistakes

- Missing content paths in Tailwind config
- Adding directives to the wrong CSS entry file

## Notes / best practices

- Keep Tailwind setup minimal at first.

## Related processes

- [Create React Vite TypeScript App](./create-react-vite-typescript-app.md)
- [Start a New Project](../workflows/start-a-new-project.md)