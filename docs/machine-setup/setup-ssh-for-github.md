---
title: Set Up SSH for GitHub
---

# Set Up SSH for GitHub

## Purpose

Configure SSH authentication so GitHub operations work without HTTPS credential prompts.

## When to use it

- New machine setup
- GitHub authentication not working over SSH

## Prerequisites

- Git installed
- GitHub account access

## Steps

1. Generate a new SSH key pair:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

2. Start ssh-agent and add the key:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

3. Copy the public key and add it to GitHub account SSH keys.
4. Test the connection:

```bash
ssh -T git@github.com
```

## Verify it works

- GitHub returns a successful authentication message.
- Cloning via SSH works:

```bash
git clone git@github.com:OWNER/REPO.git
```

## Common mistakes

- Uploading the private key instead of public key
- Using wrong key path with `ssh-add`
- Testing without restarting shell/agent setup

## Notes / best practices

- Keep one key per machine when possible.
- Protect private key with a passphrase.

## Related processes

- [Install Git](./install-git.md)
- [Clone an Existing Project](../workflows/clone-an-existing-project.md)