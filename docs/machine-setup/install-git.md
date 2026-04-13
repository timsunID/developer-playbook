---
title: Install Git
---

# Install Git

## Purpose

Install Git and confirm command-line availability.

## When to use it

- First-time machine setup
- Git command not available

## Prerequisites

- Admin access
- Internet connection

## Steps

1. Install Git using your platform package manager or installer.
2. Open a new terminal session.
3. Configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Verify it works

```bash
git --version
git config --global --list
```

## Common mistakes

- Not reopening the terminal after install
- Missing global user identity configuration

## Notes / best practices

- Keep global config minimal.
- Add repo-specific overrides only when required.

## Related processes

- [Set up SSH for GitHub](./setup-ssh-for-github.md)
- [Verify Machine Setup](./verify-machine-setup.md)