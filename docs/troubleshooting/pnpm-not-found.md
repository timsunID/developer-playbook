---
title: pnpm Not Found
---

# pnpm Not Found

## Symptom

Running `pnpm` returns command not found.

## Likely cause

- Corepack not enabled
- pnpm not prepared/activated
- Old shell session

## Fix steps

1. Enable Corepack:

```bash
corepack enable
```

2. Activate pnpm:

```bash
corepack prepare pnpm@latest --activate
```

3. Restart terminal.

## Verify

```bash
pnpm --version
```

## Related processes

- [Enable Corepack and pnpm](../machine-setup/enable-corepack-and-pnpm.md)
- [Node Package Manager Standards](../standards/node-package-manager-standards.md)