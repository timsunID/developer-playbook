---
title: Install Node with fnm
---

# Install Node with fnm

## Purpose

Install and activate a stable Node.js version through fnm.

## When to use it

- New machine setup
- Node.js missing or wrong version

## Prerequisites

- [Install fnm](./install-fnm.md)

## Steps

1. Install the latest LTS version:

```bash
fnm install --lts
fnm default lts-latest
fnm use lts-latest
```

2. Restart terminal if required by your shell setup.

## Verify it works

```bash
node --version
npm --version
```

## Common mistakes

- Installing Node outside fnm
- Forgetting to set a default Node version

## Notes / best practices

- Use `.node-version` files in projects when version pinning is needed.

## Related processes

- [Enable Corepack and pnpm](./enable-corepack-and-pnpm.md)
- [Node Package Manager Standards](../standards/node-package-manager-standards.md)