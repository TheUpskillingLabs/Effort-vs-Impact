# Constituent Needs Demo Flow Contract

## Job and boundary

- User: a constituent reviewing needs inferred from example personal information.
- Job-to-be-done: confirm, correct, discard, send, and follow one civic need with as little constituent effort as possible.
- Entry condition: the demo begins before sign-in with mock information only.
- Successful outcome: the user confirms a prepared need, reviews exactly what an office receives, sends the mock request, and can subscribe to updates.
- Explicit non-goals: real Google authentication, data upload, real representative contact, aggregation, or a production case-management system.

## Preserve-functionality inventory

| Capability | Current entry point | Required after consistency pass | Evidence/test |
|---|---|---|---|
| Sequential scanning animation | Loading screen | Yes; motion stops before results CTA | Unit timer test and browser geometry check |
| Review inferred need | Home, Next action, discovered card | Yes; both entry points open the same review state | Unit flow test |
| Inline correction | Review detail rows | Yes; displayed value and pencil are one target | Unit flow test and pointer check |
| Private notes | Review screen | Yes; notes never enter the shared document | Unit flow test |
| Discard suggestion | Review screen | Yes; red × and Discard invoke the same transition | Unit flow test |
| Confirm need | Review screen | Yes | Unit flow test |
| Review and mock-send | Confirmed need card | Yes | Unit flow test |
| Subscribe to updates | Sent need card | Yes | Unit flow test |
| Reset demo | Profile menu | Yes | Unit flow test |
| Browser persistence | All signed-in states | Yes | Local-storage reducer boundary |

## Canonical language and behavior

| Concept | Canonical label | Order | View behavior | Edit behavior | Validation/automation |
|---|---|---:|---|---|---|
| Pending work | Next action | 1 | One need and one action | Opens review | Prepared automatically |
| Past activity | Latest updates | 2 | Two compact status rows | Read-only | Mock data |
| Confirmed items | My needs | 3 | Confirmed or sent card | Opens send review | Stored locally |
| Inferred items | Needs discovered | 4 | Compact outlined card | Opens review | Mock discovery |
| Need description | What is happening | 1 | Inline value with pencil | Click value or pencil | Required |
| Location | Where | 2 | Inline value with pencil | Click value or pencil | Required |
| Requested result | What you need | 3 | Inline value with pencil | Click value or pencil | Required |
| Reject inference | Discard | Final left action | Red × plus link | Immediate local transition | Undo available at home |
| Accept inference | Confirm | Final right action | Green check plus label | Immediate local transition | Disabled if a required value is blank |

## State model

| State | Visible UI | Allowed actions | Data authority | Exit transitions |
|---|---|---|---|---|
| Welcome | Short explanation and Google continuation | Continue | Initial mock state | Analyzing |
| Analyzing | Shapes, three decoding rows, then CTA | Check results after completion | Timed client state | Home |
| Home/discovered | Actions, updates, empty My needs, discovered card | Review, profile/reset | Reducer plus local storage | Review, welcome |
| Review | Back, title, editable values, notes, Discard, Confirm | Edit, discard, confirm, back | Reducer draft persisted locally | Home |
| Home/confirmed | Actions, updates, confirmed card | Review and send | Reducer plus local storage | Share |
| Share | Office-facing document | Back, mock-send | Derived share object | Home/sent |
| Home/sent | Sent status and subscription | Subscribe, reset | Reducer plus local storage | Home, welcome |

## Transition contract

| From → To | Trigger | Feedback | Write/event effect | Focus | Recovery |
|---|---|---|---|---|---|
| Welcome → Analyzing | Continue with Google | Scanning motion begins | Step only | Scanning heading | Reset from later profile menu |
| Analyzing → Home | Check my results | Home enters | Step only | Home content | Reset |
| Home → Review | Either review entry | Review page enters | Step only | Back/title area | Back returns home |
| Review → Review edited | Click a value | Native input replaces value | Updates reducer/local storage | Input autofocus | Blur or Escape closes editor |
| Review → Home confirmed | Confirm | Need moves to My needs | Status becomes confirmed | Home content | Reset |
| Review → Home dismissed | × or Discard | Quiet undo notice | Status becomes dismissed | Undo control | Undo restores discovered |
| Confirmed → Share | Review and send | Office document enters | Step only | Document | Back returns home |
| Share → Sent | Send to district office | Sent notice | Mock sent timestamp | Home status | Reset |

## Responsive and accessibility contract

- Supported widths: 390px mobile and 1440px desktop, with fluid behavior between them.
- Longest content: full Rose Hill address and prepared description must wrap without clipping.
- Large-text expectation: controls remain reachable and cards stack at narrow widths.
- Keyboard sequence: page controls follow visual order; inline edit autofocuses; Escape closes an editor.
- Focus restoration: browser-default focus is acceptable for this throwaway mock; no focus may be trapped.
- Accessible names and state announcements: icon-only × is named “Dismiss this need”; profile exposes expanded state; notices use status semantics.

## Acceptance evidence

- Focused tests: `pnpm test`
- Full repository gates: `pnpm typecheck`, `pnpm lint`, `pnpm build`
- Browser/device matrix: Chromium at 1440×1000 and 390×844.
- Preserved-functionality check: complete confirm/send/subscribe/reset flow plus discard and inline editing.
