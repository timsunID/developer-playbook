---
title: Start a New Project
---

# Start a New Project

## Purpose

Provide a single reusable flow to start a new project from scratch.

## When to use it

- Beginning a new codebase
- Creating a proof of concept

## Prerequisites

- Machine setup complete
- Project name and stack chosen

## Steps

1. Create a project folder in your standard dev structure.
2. Run the relevant setup process from [Project Setup](../project-setup/README.md).
3. Initialize git and first commit:

```bash
git init
git add .
git commit -m "chore: initialize project"
```

4. Create remote repository and push initial branch.

## Verify it works

- Project runs locally.
- Git history and remote are configured.

## Common mistakes

- Skipping project naming standards
- Forgetting initial README and environment notes

## Notes / best practices

- Capture decisions early in docs to avoid rework later.

## Related processes

- [Create React Vite TypeScript App](../project-setup/create-react-vite-typescript-app.md)
- [Node Package Manager Standards](../standards/node-package-manager-standards.md)