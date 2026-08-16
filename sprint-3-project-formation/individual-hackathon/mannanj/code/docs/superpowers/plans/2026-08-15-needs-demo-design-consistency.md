# Needs Demo Design Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace accumulated one-off spacing rules with a quiet, consistent visual system across the complete constituent-needs demo.

**Architecture:** Keep the existing React state machine and screen components intact. Centralize visual tokens in CSS, apply a small set of card/type/action contracts to every state, and enforce the most failure-prone alignment rules with behavior tests plus wide/mobile browser checks.

**Tech Stack:** Next.js, React, TypeScript, CSS, Vitest, Testing Library, Playwright, OpenNext Cloudflare.

---

### Task 1: Lock the cross-screen contract

**Files:**
- Create: `docs/superpowers/specs/2026-08-15-needs-demo-flow-contract.md`
- Modify: `src/features/demo/demo-experience.test.tsx`

- [x] **Step 1: Inventory every state and action**

Record welcome, analyzing, discovered, review, confirmed, share, sent, dismissed, subscription, persistence, and reset behavior in the flow contract.

- [ ] **Step 2: Add canonical-label regression assertions**

Assert `Next action`, `Latest updates`, `My needs`, `Needs discovered`, `Back`, `Discard`, and `Confirm`, and assert removed helper labels remain absent.

- [ ] **Step 3: Run the focused test and confirm it passes**

Run: `pnpm test -- --run src/features/demo/demo-experience.test.tsx`

Expected: all demo experience tests pass.

### Task 2: Establish the visual token contract

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add shared layout tokens**

Add a restrained spacing scale, one card border, and one card radius under `:root`:

```css
--space-1: 0.5rem;
--space-2: 0.75rem;
--space-3: 1rem;
--space-4: 1.5rem;
--space-5: 2rem;
--space-6: 3rem;
--card-border: #e2e2dc;
--card-radius: 8px;
```

- [ ] **Step 2: Replace isolated card radius and border values**

Use `var(--card-border)` and `var(--card-radius)` for summary cards, the discovered card, and the My needs empty state. Keep cards white; use color only for semantic markers such as the yellow review exclamation, red discard ×, and green confirm check.

- [ ] **Step 3: Normalize type roles**

Keep one uppercase micro-label size, one section-heading size, one card-title size, one body size, and one action size. Delete selectors for removed copy and labels.

### Task 3: Normalize the loading and home screens

**Files:**
- Modify: `src/features/demo/demo-experience.tsx`
- Modify: `src/app/globals.css`
- Test: `src/features/demo/demo-experience.test.tsx`

- [ ] **Step 1: Make loading completion geometrically stable**

Keep shapes left, result rows center, and CTA right. When complete, stop shape motion and align the CTA top and bottom with the three-row list.

- [ ] **Step 2: Make summary cards content-sized and balanced**

Use three rows in Next action with one equal gap: label, title, action. Remove explanatory copy. Use identical padding, border, and radius on both summary cards without forcing unnecessary height.

- [ ] **Step 3: Normalize section rhythm**

Use one heading-to-card gap for My needs and Needs discovered, and one section-to-section gap. Keep “A need you confirm will stay here.” at its existing type size on the left.

- [ ] **Step 4: Normalize the discovered card**

Vertically center title, description, and Review button. Use the shared white card and faint outline, match left/right inset, preserve the tapered yellow exclamation, and keep equal gaps inside the button.

- [ ] **Step 5: Run focused tests**

Run: `pnpm test -- --run src/features/demo/demo-experience.test.tsx`

Expected: pass.

### Task 4: Normalize review and share screens

**Files:**
- Modify: `src/features/demo/demo-experience.tsx`
- Modify: `src/app/globals.css`
- Test: `src/features/demo/demo-experience.test.tsx`

- [ ] **Step 1: Keep one review hierarchy**

Render continuous-underlined `← Back`, the need title, the detail card, optional notes, then one final action row. Do not restore progress metadata or explanatory headings.

- [ ] **Step 2: Normalize editable rows**

Keep the value and pencil as one pointer target, enlarge the pencil consistently, preserve inline autofocus editing, and maintain equal row padding.

- [ ] **Step 3: Normalize final actions**

Place plain red `× Discard` left and green-check `Confirm` right. Avoid extra circles, arrows, or labels.

- [ ] **Step 4: Confirm the share document uses the same type and spacing roles**

Retain only office-facing information and the mock-send action; keep notes out of the document.

- [ ] **Step 5: Run focused tests**

Run: `pnpm test -- --run src/features/demo/demo-experience.test.tsx`

Expected: pass.

### Task 5: Verify, sync, and publish

**Files:**
- Modify: `/private/tmp/verify-needs-local.py`
- Modify: `/Users/manblack/Documents/mannan20/.worktrees/needs-demo/src/app/needs/demo-experience.tsx`
- Modify: `/Users/manblack/Documents/mannan20/.worktrees/needs-demo/src/app/needs/needs.css`

- [ ] **Step 1: Run repository gates**

Run: `pnpm test && pnpm typecheck && pnpm lint && pnpm build`

Expected: all commands exit 0.

- [ ] **Step 2: Verify desktop and mobile flow**

Run the browser flow at 1440×1000 and 390×844. Assert the loading CTA aligns with the result list, cards use identical borders/radii, the profile stays right-aligned, inline edit uses a pointer, and the complete confirm/send/subscribe/reset path succeeds.

- [ ] **Step 3: Sync the verified files**

Copy only the demo component and stylesheet to the `mannan20` worktree. Do not stage generated `public/data` files.

- [ ] **Step 4: Build and deploy**

Run: `bun run typecheck && bun run cf:build && bunx opennextjs-cloudflare deploy --env production`

Expected: Cloudflare returns a new worker version and `https://mannan.is/needs` serves the updated demo.

- [ ] **Step 5: Update both pull requests**

Commit and push the scoped `mannan20` files to PR #4 and the class-submission component, stylesheet, test, and documentation to PR #13.

