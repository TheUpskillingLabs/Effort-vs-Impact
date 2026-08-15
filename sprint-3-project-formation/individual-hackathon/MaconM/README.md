# MaconM — HearBack

Individual Hackathon submission folder for [MaconM](https://github.com/MaconM).

Part of [Sprint 3: Project Formation](../../README.md) (8/16–8/31).

## HearBack

**You spoke. Here's what the board heard — and what it decided.**

HearBack is a small civic-feedback pilot built from the *Closing the Loop*
frame hypothesis: public comment loses legitimacy when there's no visible
answer, so the fix isn't a bigger microphone — it's a closed loop. HearBack
takes one local board agenda item and makes the whole path from resident
comment to official decision visible in one place: who owns the reply, when
it's due, what was heard in aggregate, and whether the answer is yes, no, or
not yet.

- **Live site:** https://hearback-upskilling-labs-effort-vs-impact.vercel.app
- **Source:** https://github.com/MaconM/hearback

### What it does

- Residents read the agenda item, the decision question, and a public
  timeline (comment open → synthesis published → response due), then submit
  a comment — no login or identity required.
- A board admin (password-protected) reviews submissions, groups them into
  themes, publishes a short "what we heard" synthesis, and posts a dated
  yes / no / not yet decision with rationale.
- Every stage is timestamped and public, so residents can see their comment
  counted without digging through meeting minutes.

### Stack

Next.js (App Router) · Prisma · Postgres (Neon) · deployed on Vercel.
