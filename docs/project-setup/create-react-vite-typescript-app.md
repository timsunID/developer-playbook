---
title: Create React Vite TypeScript App
---

# Create React Vite TypeScript App

## Purpose

Create a new React + TypeScript app using Vite as the baseline project template.

## When to use it

- Starting a new frontend project
- Creating a sandbox app quickly

## Prerequisites

- Node.js and pnpm installed
- Project destination folder selected

## Steps

1. Create the project:

```bash
pnpm create vite@latest my-app --template react-ts
```

2. Move into the project directory and install dependencies:

```bash
cd my-app
pnpm install
```

3. Start the dev server:

```bash
pnpm dev
```

## Verify it works

- Vite dev server starts without errors.
- App loads in the browser.

## Common mistakes

- Running the scaffold command in the wrong directory
- Forgetting to install dependencies before `pnpm dev`

## Notes / best practices

- Rename `my-app` using your project naming standard.

## Related processes

- [Add Tailwind to Vite React](./add-tailwind-to-vite-react.md)
- [Start a New Project](../workflows/start-a-new-project.md)