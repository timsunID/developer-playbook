---
title: Enable Corepack and pnpm
---

# Enable Corepack and pnpm

## Purpose

Enable Corepack and activate pnpm so package management is consistent.

## When to use it

- After Node installation on a fresh machine
- pnpm command not recognized

## Prerequisites

- Node.js installed via fnm

## Steps

1. Enable Corepack:

```bash
corepack enable
```

2. Activate latest pnpm:

```bash
corepack prepare pnpm@latest --activate
```

## Verify it works

```bash
pnpm --version
```

## Common mistakes

- Running pnpm before enabling Corepack
- Using a stale terminal session

## Notes / best practices

- Commit lockfiles and use pnpm consistently across projects.

## Related processes

- [Node Package Manager Standards](../standards/node-package-manager-standards.md)
- [pnpm Not Found](../troubleshooting/pnpm-not-found.md)