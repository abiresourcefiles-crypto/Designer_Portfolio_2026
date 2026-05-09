# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Existing guidance sources
- `README.md` is the primary setup guide.
- No `WARP.md`, `CLAUDE.md`, `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md` files are present.

## Development commands
Run from repository root:

- Install dependencies:
  - `npm install`
- Start local dev server (Vite on port 3000, host 0.0.0.0):
  - `npm run dev`
- Type-check / lint (project uses TypeScript `--noEmit` as lint gate):
  - `npm run lint`
- Production build:
  - `npm run build`
- Preview production build:
  - `npm run preview`
- Clean build artifacts:
  - `npm run clean` (uses `rm -rf dist`, Unix-style)
  - On PowerShell, if needed: `Remove-Item -Recurse -Force dist`

## Tests
- There is currently no test framework or test script configured in `package.json`.
- No `*.test.*` / `*.spec.*` files are present.
- Running a single test is not applicable until a test runner is added.

## Environment and runtime configuration
- Required env var: `GEMINI_API_KEY` (documented in `README.md` and `.env.example`).
- Typical local setup is to create `.env.local` and set `GEMINI_API_KEY`.
- `vite.config.ts` injects `GEMINI_API_KEY` into client code via:
  - `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY) }`
- `APP_URL` appears in `.env.example` for hosted/runtime context but is not referenced in app source.

## High-level architecture
- Stack: Vite + React 19 + TypeScript + Tailwind CSS v4.
- App bootstrap flow:
  - `index.html` mounts `#root`
  - `src/main.tsx` renders `<App />`
  - `src/App.tsx` composes the page shell (sticky top nav + main content) and mounts `@vercel/analytics`.
- Primary UI implementation is in `src/components/heroes/Home.tsx`:
  - This file is a monolithic, section-based page composition.
  - It defines and composes `HeroSection`, `CaseStudies`, `Experience`, `ToolsStack`, `Gallery`, and `Footer`.
  - The default export (`VariationWithCaseStudies`) renders these sections in order.
- `public/` contains local image assets consumed by `Home.tsx` (case study/tool/gallery images).
- `src/index.css` sets Tailwind/theme tokens and global typography/color defaults.
- Path alias: `@` resolves to repository root (configured in `vite.config.ts` and `tsconfig.json`).

## Codebase-specific notes for agents
- `src/components/FloatingActionMenu.tsx` exists but is currently unused by `App.tsx` / `Home.tsx`.
- `Home.tsx` is the key file for product/content edits; most visible changes will happen there.
- This project currently behaves as a client-rendered single-page portfolio; no active Express server code is present in source despite `express` in dependencies.
