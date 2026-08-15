# HearBack

**You spoke. Here's what the board heard — and what it decided.**

HearBack is a civic feedback tool that closes the loop between public comment
and an official public response, one agenda item at a time. It's built
around a specific failure mode in public meetings: residents submit
testimony, and the only artifact that comes back is minutes almost nobody
reads. HearBack makes three things visible instead — who owns the reply,
what was heard in aggregate, and a dated yes / no / not-yet decision.

This is a pilot scoped to a **single agenda item**, not a general-purpose
civic engagement platform. See [Scope](#scope--whats-intentionally-out) for
why, and what's deliberately left out.

## Roles

HearBack has two roles and no user accounts for residents.

### Resident (public, no login)

- Views the agenda item's plain-language context, the specific decision
  question, and key dates on the public landing page (`/`).
- Submits feedback: a comment is required; name, email, and neighborhood are
  all optional.
- Sees the same public timeline everyone sees: **Open for input → Synthesis
  published → Board reviewing → Official response**.
- Once the synthesis is published, sees the aggregated themes, a submission
  count, and a handful of anonymized quotes — never names or emails.
- Once the response is published, sees the decision (Proceed / Do not
  proceed / Not yet), the rationale, the next step, and the publish date.

### Board Admin (single shared password)

- Signs in at `/admin/login` with one shared password (see
  [Local setup](#local-setup)).
- Edits the agenda item's title, context, decision question, dates, and the
  named response owner (`/admin/item`).
- Reviews every submission, including the private email address if one was
  left, and assigns submissions to themes (`/admin/submissions`).
- Creates and edits themes (`/admin/themes`).
- Publishes the synthesis (makes themes + featured quotes public) and
  publishes the official response (`/admin`), which also shows dashboard
  metrics: submissions received, days remaining until the response is due,
  and whether the synthesis/response have been published.

Admin routes are protected by middleware (`src/proxy.ts`) that checks a
signed, expiring session cookie set on login. There's no per-admin identity
— this matches a single ANC chair or staffer running the pilot, not a
multi-admin org.

## Data model

Three tables, defined in [`prisma/schema.prisma`](prisma/schema.prisma):

```
AgendaItem
├── title, context, decisionQuestion
├── commentOpenAt, responseByDate
├── responseOwnerName, responseOwnerRole      (shown publicly — accountability should be visible)
├── synthesisPublishedAt                       (set when admin publishes "What we heard")
├── responsePublishedAt, responseStatus,       (set when admin publishes the official response)
│   responseRationale, responseNextStep
├── themes[]        1—many → Theme
└── submissions[]    1—many → Submission

Theme
├── title, description, position
├── agendaItem      many—1 → AgendaItem
└── submissions[]    1—many → Submission

Submission
├── name?, email?, neighborhood?    (all optional — public comment never requires identity)
├── comment                          (required)
├── consent                          (consent to have an anonymized excerpt published)
├── featured                         (admin-selected quote; can only be true if consent is true)
├── theme?          many—1 → Theme (nullable — unassigned until an admin sorts it)
└── agendaItem      many—1 → AgendaItem
```

`ResponseStatus` is an enum: `PROCEED`, `DO_NOT_PROCEED`, `NOT_YET`.

**HearBack always operates on the first `AgendaItem` row** (see
`src/lib/data.ts`) rather than a list — there's no multi-item admin UI. The
schema still models `AgendaItem` as a real table, and `Theme`/`Submission`
as real foreign-key relations, so extending to multiple items later is a
routing change, not a data migration.

The public timeline's four stages aren't a stored field — they're derived
from timestamps in `src/lib/timeline.ts`: "Open for input" from
`commentOpenAt`, "Synthesis published" from `synthesisPublishedAt`, "Board
reviewing" is implied (synthesis published, response not yet), and
"Official response" from `responsePublishedAt`.

### Privacy

- `Submission.email` is **never rendered on any public page** — it's
  visible only to the Board Admin, stored so a human can manually follow up
  (see [Scope](#scope--whats-intentionally-out) — automated email
  notifications aren't built yet, but the data is there for it).
- Public submissions are anonymous by default: name, email, and
  neighborhood are all optional, and only the neighborhood (never name) is
  ever shown alongside a public quote.
- A submission can only be `featured` (shown as a public quote) if its
  author checked the consent box. The admin UI enforces this — the
  "feature as quote" checkbox is disabled without consent.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript), Tailwind CSS
- [Prisma](https://www.prisma.io) + SQLite for a persistent, zero-config
  local database
- No auth library / ORM-adjacent services — admin sessions are a signed
  HMAC cookie (`src/lib/auth.ts`), no external dependency

## Local setup

Requires Node 20+.

```bash
npm install

cp .env.example .env
# edit .env: set ADMIN_PASSWORD, and generate a SESSION_SECRET with:
#   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

npm run db:migrate   # applies prisma/migrations, creates prisma/dev.db
npm run db:seed      # loads the fictional pedestrian-safety pilot item

npm run dev           # http://localhost:3000
```

Visit `/` for the public page, `/admin/login` for the Board Admin
dashboard (password from `.env`).

Other useful commands:

```bash
npm run build      # production build
npm run lint       # eslint
npx prisma studio  # browse/edit the SQLite database directly
```

## Seed data

`prisma/seed.ts` loads one fictional agenda item — pedestrian safety
improvements near "Maple Street Elementary" — with 5 themes and 15 mock
submissions, so the app is fully populated (including a few featured
quotes) without any manual data entry. Re-running `npm run db:seed` wipes
and reloads it, so it's safe to experiment in the admin dashboard and reset
whenever.

## Scope — what's intentionally out

This is a pilot for one agenda item on one board, built to test whether
making the response loop visible changes anything — not a general civic
engagement platform. Deliberately out of scope for now:

- **Multiple agenda items / a public item list.** One item at a time is
  the point (see the project's frame hypothesis: a smaller closed loop
  beats a bigger open mic).
- **Automated email notifications** when synthesis/response publish.
  Emails are collected and shown to the admin for manual follow-up; wiring
  up actual delivery is future work the data model already supports.
- **Clustering / voting on submissions** (e.g., a Pol.is-style "how many
  people agree with this comment" view). Themes are currently
  admin-assigned by hand — a good next iteration once there's real usage
  to justify it.
- **Multi-admin accounts.** One shared password suits a single
  commissioner/staffer running the pilot; per-admin identity would matter
  once more than one person is publishing.
