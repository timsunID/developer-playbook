---
title: Node Package Manager Standards
---

# Node Package Manager Standards

## Purpose

Define consistent Node.js package management rules across projects.

## When to use it

- Starting new Node.js projects
- Auditing an existing repository setup

## Standard

- Use `pnpm` as the default package manager.
- Enable pnpm through Corepack, not global npm installs.
- Commit `pnpm-lock.yaml`.
- Avoid mixing lockfiles (`package-lock.json`, `yarn.lock`).

## Verify it works

- `pnpm --version` is available.
- Only `pnpm-lock.yaml` exists in Node projects.

## Common mistakes

- Installing pnpm globally via npm
- Mixing package managers in one repository

## Notes / best practices

- Pin Node version for each project when needed.
- Document exceptions clearly.

## Related processes

- [Enable Corepack and pnpm](../machine-setup/enable-corepack-and-pnpm.md)
- [pnpm Not Found](../troubleshooting/pnpm-not-found.md)