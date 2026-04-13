---
title: Verify Machine Setup
---

# Verify Machine Setup

## Purpose

Confirm the machine can run a full development workflow before starting new work.

## When to use it

- After finishing machine setup
- After major tool upgrades

## Prerequisites

- Machine setup steps completed

## Steps

1. Open a fresh terminal.
2. Run environment checks:

```bash
git --version
fnm --version
node --version
pnpm --version
code --version
ssh -T git@github.com
```

3. Clone a test repository and run install script.

## Verify it works

- All version checks return expected values.
- Repository clone and dependency install succeed.

## Common mistakes

- Validating from old shell sessions
- Missing PATH setup for one tool

## Notes / best practices

- Keep this checklist quick and deterministic.

## Related processes

- [Fresh Machine Overview](../getting-started/fresh-machine-overview.md)
- [Troubleshooting](../troubleshooting/README.md)