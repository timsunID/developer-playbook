---
title: Corepack Not Found
---

# Corepack Not Found

## Symptom

Running `corepack` returns command not found.

## Likely cause

- Node.js is missing or outdated.
- Current shell session does not include updated PATH.

## Fix steps

1. Verify Node installation:

```bash
node --version
```

2. Install or switch to a supported Node version with fnm.
3. Restart terminal.
4. Re-run:

```bash
corepack enable
```

## Verify

```bash
corepack --version
```

## Related processes

- [Install Node with fnm](../machine-setup/install-node-with-fnm.md)
- [Enable Corepack and pnpm](../machine-setup/enable-corepack-and-pnpm.md)