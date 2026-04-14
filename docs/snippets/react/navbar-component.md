---
title: Responsive Navbar Component
---

# Responsive Navbar Component

## When to use

- Need a reusable app shell navbar.
- Want desktop links with a mobile menu toggle.

## Snippet

```tsx title="Navbar.tsx"
import { useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: string;
  items: NavItem[];
};

export function Navbar({ brand, items }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="text-lg font-semibold text-slate-900">
          {brand}
        </a>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className="hidden gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-slate-200 px-4 py-3 md:hidden">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
```

## Usage

```tsx title="App.tsx"
import { Navbar } from './Navbar';

export default function App() {
  return (
    <>
      <Navbar
        brand="Developer Playbook"
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Snippets', href: '/snippets' },
          { label: 'GitHub', href: 'https://github.com' },
        ]}
      />
      <main className="mx-auto max-w-6xl p-4">Page content</main>
    </>
  );
}
```
