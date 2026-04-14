---
title: War Chest
---

# War Chest

Reusable code snippets with language-aware syntax highlighting and copy support.

## How to add snippets

1. Add a clear heading per snippet.
2. Use fenced code blocks with the right language tag (`bash`, `powershell`, `ts`, `json`, etc.).
3. Optionally set a title so the block is easier to scan.

## Shell snippets

### Create and enter a new project directory

```bash title="new-project.sh"
PROJECT_NAME="$1"
mkdir -p "$HOME/dev/$PROJECT_NAME"
cd "$HOME/dev/$PROJECT_NAME"
```

### Ensure `pnpm` is available (PowerShell)

```powershell title="ensure-pnpm.ps1"
if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
  corepack enable
  corepack prepare pnpm@latest --activate
}

pnpm --version
```

## TypeScript snippets

### `fetch` helper with typed JSON response

```ts title="fetchJson.ts"
export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}
```

## Git snippets

### Sync branch with remote safely

```bash title="sync-branch.sh"
git fetch origin
git status
git rebase origin/main
```

## JSON snippets

### Basic `tsconfig` starter

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noEmit": true
  }
}
```
