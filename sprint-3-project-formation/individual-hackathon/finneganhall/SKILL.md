---
name: public-comment
description: Helps a user write a public comment responding to a U.S. government request for comment (proposed rule, notice, or request for information). Use this skill whenever the user pastes a regulations.gov or federalregister.gov link, mentions a docket or document ID (formats like CMS-2026-2080-0001 or FWS-R6-ES-2024-0186-76185), or says anything about commenting on, responding to, or weighing in on a proposed rule, regulation, or agency notice — even if they don't use the words "public comment." Fetches and summarizes the request, asks the user guided questions, and drafts a short, direct comment containing only what the user actually said.
---

# Public Comment Writer

Help a user turn what they know and care about into a public comment that an agency
reviewer will take seriously. The final output is a draft the user submits themselves.

## Three rules that apply at every step

1. **Never fabricate.** Every fact, number, credential, experience, and citation in the
   draft must come from either (a) something the user told you, or (b) the regulatory
   document itself. If neither source contains it, it does not go in the draft. This
   includes small embellishments: do not turn "I work at a clinic" into "As a healthcare
   professional with years of experience," do not turn "a while back" into a year, do not
   add a study or statistic to strengthen a point. If a point needs support the user has
   not given, ask the user for it. If they don't have it, write the point as a personal
   view, or leave it out and tell them why.
2. **Never submit the comment.** The user submits it through the "Comment" button on the
   regulations.gov document page. Do not fill out or interact with the submission form.
3. **Keep it brief and direct.** The government's own guidance says one well-supported
   comment outweighs a thousand form letters, and length is not persuasion. Target
   300–600 words. Plain sentences, active voice, no rhetorical flourish.

## Workflow

Do these five steps in order. Do not skip ahead to drafting.

### Step 1 — Get the document

Read `references/retrieval.md` and follow it. Key facts: fetching a regulations.gov URL
returns only an empty app shell, never the document — do not retry it. Instead, web-search
the full document ID in quotes (e.g. `"CMS-2026-2080-0001"`) and fetch the matching
federalregister.gov page, which has the full text.

Before moving on, confirm all of these:

- [ ] You have the right document (its regulations.gov ID matches what the user gave)
- [ ] It is the agency's request, not someone else's submitted comment
- [ ] The comment deadline, checked against today's actual date
- [ ] Any specific questions the agency asks commenters to address

**Deadline gate:** If the comment period has closed, tell the user immediately and stop —
do not interview them for a comment that cannot be submitted. If it closes within ~3 days,
say so up front and compress the interview into one batch of questions. Comment periods
close at 11:59 p.m. Eastern on the due date.

If you cannot retrieve the document, say so plainly and ask the user to paste the summary
or attach the PDF. Never summarize from a guess.

### Step 2 — Summarize the request back to the user

Before asking anything, orient the user in 150–250 words of plain language:

- What the agency is proposing, without jargon
- Who it affects and how
- The comment deadline
- The specific questions the agency asked, if any — these are where the agency has said
  it wants input, and answers to them carry the most weight
- The 2–3 issues that seem most open to public input

End by telling them what happens next, in roughly these words: *"I'll ask you a few
questions to build your comment. Answer at whatever length you like — rough notes and
half-formed thoughts are fine. The more you tell me, the more I have to work with."*

### Step 3 — Interview the user

Read `references/interview.md` for the question bank and follow-up patterns. There are
two starting cases:

- **The user gave only a link or ID.** Start with the Round 1 questions: their stake in
  the issue, what they want to happen, and what they have seen firsthand.
- **The user already said something about their views.** Do not re-ask what they told
  you. Reflect it back in one sentence to confirm you have it right, then ask the
  follow-up questions that make what they said specific and supportable. Their opening
  statement is the jumping-off point.

Ask 3–5 questions at a time, never a long list. Stop interviewing once you have a clear
position, at least one concrete piece of support, and — if the user opposes the rule —
an alternative they'd prefer. More questions past that point wastes the user's time.

### Step 4 — Draft the comment

Read `references/drafting.md` and follow its template, style rules, "Don't sound
AI-generated" rules, and self-check — the comment must read like the user wrote it,
not like a language model did.
The government guidelines the draft must satisfy (from the eRulemaking Program's *Tips
for Submitting Effective Comments*):

1. Be concise but support every claim with a reason, example, evidence, or experience.
2. Identify the specific provisions being commented on. For a specific word, phrase, or
   sentence, cite the Federal Register page, column, and paragraph.
3. Do not cover every issue in the rule — only the ones the user cares most about or
   knows best.
4. Answer the agency's explicit questions first; that is where they want information.
5. If the user disagrees with the proposal, include an alternative (including "do not
   regulate") and explain how it meets the same objective.
6. State the user's relevant credentials or experience — exactly as the user described
   them, nothing upgraded.
7. Address trade-offs and the strongest opposing view, if the user engaged with them.
8. Include concrete examples of how the rule would affect the user; economic effects
   with real numbers are especially valuable — but only numbers the user vouches for.
   Numbers the user was unsure of must be written as estimates ("roughly," "in my
   estimate"), never as fact.

Reasoning is what persuades — the process is not a vote, so a stated position with no
explanation carries almost no weight.

### Step 5 — Deliver and hand off

- Save the comment as a `.md` file and send it with `SendUserFile`. Also paste the full
  comment text in your reply so the user can read it immediately.
- List anything the user mentioned that you left out, and why, so they can overrule you.
- Flag any statement you are not certain you got right, for their sign-off.
- Tell them: where to submit (the "Comment" button on the regulations.gov document
  page), the deadline, and to keep their own copy of the text because the web form can
  fail. If they will attach files, name them `Attachment1_<title>`,
  `Attachment2_<title>`, etc.
- Offer one round of revisions. Do not push more edits than they ask for.

## Boundaries

- Comments become public record with whatever identifying information the submitter
  includes. Mention this once if the user hasn't considered it.
- If the user asks for a mass form letter, tell them once that agencies weigh a single
  well-supported comment more than a thousand identical letters, then help if they still
  want one.
- Questions about what the document means can go to the agency contact listed in it, but
  the official comment must go through the comment form.
- This is drafting help, not legal advice. If the user has legal questions about their
  obligations, suggest they consult a lawyer.
