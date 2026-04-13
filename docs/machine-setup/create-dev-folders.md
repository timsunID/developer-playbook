---
title: Create Dev Folders
---

# Create Dev Folders

## Purpose

Create a standard local directory layout for projects and reusable assets.

## When to use it

- Fresh machine setup
- Organizing an existing machine

## Prerequisites

- Machine setup baseline complete

## Steps

1. Choose a root dev path (example: `~/Development`).
2. Create standard folders:

```bash
mkdir -p ~/Development/clients
mkdir -p ~/Development/personal
mkdir -p ~/Development/sandboxes
mkdir -p ~/Development/templates
```

3. Move existing repositories into the new structure if needed.

## Verify it works

- Standard directories exist and are writable.
- New projects are created in the expected location.

## Common mistakes

- Inconsistent directory naming over time
- Mixing personal and client code in one folder

## Notes / best practices

- Keep naming stable so scripts and habits remain consistent.

## Related processes

- [Start a New Project](../workflows/start-a-new-project.md)
- [Clone an Existing Project](../workflows/clone-an-existing-project.md)