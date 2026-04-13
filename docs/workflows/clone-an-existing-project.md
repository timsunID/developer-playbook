---
title: Clone an Existing Project
---

# Clone an Existing Project

## Purpose

Set up an existing repository locally using consistent steps.

## When to use it

- Joining an existing codebase
- Restoring work environment on a new machine

## Prerequisites

- SSH configured for GitHub
- Access to repository

## Steps

1. Clone repository using SSH:

```bash
git clone git@github.com:OWNER/REPO.git
cd REPO
```

2. Install dependencies with the project package manager.
3. Run local checks (dev server/tests/lint) as defined by the repository.

## Verify it works

- Install completes successfully.
- Project runs and checks pass.

## Common mistakes

- Cloning with HTTPS when SSH is expected
- Ignoring required Node version before install

## Notes / best practices

- Read project README before running setup commands.

## Related processes

- [Set Up SSH for GitHub](../machine-setup/setup-ssh-for-github.md)
- [pnpm Not Found](../troubleshooting/pnpm-not-found.md)