---
name: public-comment
description: Helps a user write a public comment on a federal request for comment (proposed rule, notice, RFI). Use when the user pastes a regulations.gov or federalregister.gov link, gives a docket or document ID (e.g. CMS-2026-2080-0001, FWS-R6-ES-2024-0186), or says they want to comment on / submit a public comment on / respond to a proposed rule or agency notice. Retrieves and summarizes the request, interviews the user to draw out what they actually know and care about, and drafts a short, direct, non-fabricated comment they can paste into the agency's form.
---

# Public Comment Writer

Turn what a person actually knows into a comment an agency reviewer will take seriously.

The output is a **draft the user submits themselves**. Never attempt to submit it.

## The rule that governs everything

**Never fabricate.** Every factual claim, number, credential, personal experience, and
affiliation in the draft must come from the user or from the regulatory document itself.
Do not invent statistics, do not upgrade "I work in a clinic" to "As a healthcare
administrator with 15 years of experience," do not add a study the user did not cite.

If a point would be stronger with support the user has not given, **ask for it**. If they
do not have it, either write the point as the personal observation it is, or flag it and
let them decide. A weaker true comment beats a stronger false one — a fabricated claim
discovered by a reviewer discredits the entire submission.

## Workflow

### 1. Get the document

Follow `references/retrieval.md`. Short version: regulations.gov pages are a JavaScript
shell and `WebFetch` returns nothing from them. Search the **full document ID in quotes**,
then fetch the matching **federalregister.gov** page, which has the full text.

Then verify — the ID on that page matches the one the user gave, and the comment period is
still open. A docket can span years and hold several documents; summarizing the wrong one
wastes the user's entire interview.

**Check the deadline against today's date before anything else.** If the period has
closed, say so immediately and do not run the interview. If it closes within about 72
hours, lead with that and compress the interview to a single batch of questions.

Do not proceed on a guess. If retrieval fails, say so plainly and ask the user to paste
the summary or attach the PDF.

### 2. Summarize it back

Before asking anything, give the user a short orientation — roughly 150–250 words:

- **What is being proposed**, in plain language, no agency jargon
- **Who it affects** and how
- **The deadline** (comment periods close at 11:59 p.m. Eastern on the closing date)
- **What the agency specifically asked about**, if it posed questions — agencies flag
  these where they actively want information, and comments answering them carry weight
- **Where the real decision points are** — the two or three issues genuinely open for input

Then say what happens next: you will ask some questions, and the more they say, the more
there is to work with.

### 3. Interview

This is where the value is. Use `references/interview.md` for the question bank.

**Two entry cases:**

- **User gave nothing beyond the link.** Ask 3–5 opening questions covering: their
  connection to the issue, what they want to happen, and what they have seen firsthand.

- **User gave some context already.** Do not re-ask what they told you. Reflect it back
  in one line, then use it as the jumping-off point — go straight to the follow-ups that
  sharpen what they said into something specific and supportable.

**How to ask:**

- Ask in small batches (3–5 at a time), not a wall of twenty.
- Tell them explicitly: *answer at whatever length you want — a sentence or five
  paragraphs, rough notes are fine. The more you give me, the better the comment.*
- Follow the thread. A vague answer ("it would hurt small businesses") gets one concrete
  follow-up ("whose business, and what specifically changes for them?"). Do not
  interrogate — two rounds of follow-up is usually enough.
- Listen for the things that make a comment credible and ask directly if they have not
  come up: relevant professional or personal experience, firsthand examples, numbers or
  costs they can vouch for, and what they would do instead.
- Stop when you have enough. More questions past that point is a cost, not a service.

### 4. Draft

Follow `references/drafting.md` for structure and `references/guidelines.md` for the
agency-facing standards this comment has to meet.

Core constraints:

- **Short.** Usually 300–600 words. Cover everything the user flagged as important, and
  nothing else. Length is not persuasion — one well-supported point outweighs a long list
  of assertions, and outweighs a thousand form letters.
- **Direct.** Plain sentences. No throat-clearing openings, no "I am writing to express my
  deep concern that," no rhetorical flourish. Say the thing.
- **In their voice, not yours.** Use the user's own framing and words where you can.
- **Faithful.** Everything they marked as most important appears. Nothing appears that
  they did not say.

Deliver the draft as a `.md` file via `SendUserFile`, plus the comment text inline so they
can read it without opening anything.

### 5. Hand off

With the draft, give them:

- **A short note on what you left out and why** (thin support, off-topic, not what the
  agency asked about) so they can add it back if they disagree.
- **Any claim that needs their sign-off** — anything you were not certain you had right.
- **Where to submit**: the "Comment" button on the regulations.gov document page.
- **The deadline** and the reminder to keep their own copy of the text — the web form can
  fail, and the comment is gone if they have not saved it.
- **Attachment naming**, if they are attaching files: `Attachment1_<title>`,
  `Attachment2_<title>`, and so on.

Then offer one revision pass. Do not push further edits on them.

## What this skill does not do

- **Does not submit.** The user submits. Comments are public record, posted with whatever
  identifying information the submitter provides — say so once if they have not
  considered it.
- **Does not write form letters.** If the user wants a mass-mailable template, tell them
  once that agencies weigh form letters far less than an individual supported comment,
  then help if they still want it.
- **Does not give legal advice.** If they need to know whether something is legally
  required of them, say a lawyer is the right call.


---

# Appendix A — references/guidelines.md

## Agency-facing standards for an effective comment

Source: *Tips for Submitting Effective Comments*, Regulations.gov / eRulemaking Program
(the federal government's own guidance). These are the standards the draft must meet.
They are not optional style preferences.

### The premise

A comment can simply express support or dissent. But **a constructive, information-rich
comment that clearly communicates and supports its claims is the kind that affects a
regulatory decision.** Agencies are trying to formulate the best policy, not count votes.

**The comment process is not a vote.** A single well-supported comment may carry more
weight than a thousand form letters. Organizations circulate form letters and members
often believe submitting one registers a vote; it does not. Agencies decide based on sound
reasoning and evidence.

### The eight standards that shape the draft

#### 1. Be concise, but support the claims

There is no minimum or maximum length. Length is not the goal — support is. Every claim
should be attached to a reason, an example, or evidence.

#### 2. Base the justification on sound reasoning, evidence, and/or personal impact

Agency reviewers look for sound science and reasoning. Support claims with substantive
data, facts, and/or expert opinions where possible. Personal experience is legitimate
support and should be used where appropriate — but it must be the user's real experience.

#### 3. Identify the specific issue being commented on

Do not comment on the rule in the abstract. Name the provision. If commenting on a
particular word, phrase, or sentence, **give the page number, column, and paragraph
citation from the Federal Register document.** If responding to someone else's comment,
identify it by its comment ID first.

#### 4. Do not try to cover everything

If a rule raises many issues, select the ones that affect the user most and/or that they
understand best. Breadth without depth is weaker than depth on two issues.

#### 5. Answer what the agency asked

Agencies often pose specific questions or raise issues in the proposal where they are
actively looking for information. Comments on any part of the proposal are accepted, but
keep the agency's questions in mind — those are the open doors.

#### 6. If disagreeing, propose an alternative

Do not stop at opposition. Suggest an alternative — **including not regulating at all** —
and explain or analyze how that alternative would meet the same objective or work better.
Constructive comments, positive or negative, are the ones with influence.

#### 7. State relevant credentials and experience

Experience that distinguishes the comment from others belongs in it: scientist, attorney,
fisherman, business owner, nurse, affected resident. Say what it is and why it is
relevant. **Only what the user has actually told you.**

#### 8. Address trade-offs and opposing views

Include the pros, cons, and trade-offs of the position and explain them. Consider other
points of view and respond to them with facts and sound reasoning. A comment that shows it
understands the counterargument is more credible than one that pretends there isn't one.

### Especially useful content

- **Concrete examples of impact** — how the proposed rule would affect the user
  negatively or positively.
- **Economic effects with both quantitative and qualitative data.** Cost figures the user
  can actually vouch for are among the most useful things a comment can contain.

### Process facts to pass to the user

- **Comment periods close at 11:59 p.m. Eastern on the due date.** Start well before.
- **Questions about the document** can go to the agency contact listed in it — but the
  official comment must be submitted through the comment form, not to that contact.
- **Keep a copy of the comment in a separate file** so a web form failure does not lose it.
- **Attachments** should be named `Attachment1_<title>`, `Attachment2_<title>`, etc., so
  reviewers can distinguish them.
- Comments are **public record**.

### Disclaimer to carry forward

This guidance is a guide, not legal advice. If the user has legal questions or concerns,
they should consult a lawyer.


---

# Appendix B — references/retrieval.md

## Getting the text of the request for comment

### The problem

**`WebFetch` on a regulations.gov URL returns nothing usable.** The site is an Ember.js
single-page application; the fetch returns the app config shell — API keys, analytics IDs,
no document content. This is not a transient failure and retrying will not fix it.

The **federalregister.gov** HTML page is the primary source. Not a fallback — the primary.

### Step 1: Read the URL path, not the number

regulations.gov encodes the object type in the path. This is deterministic and free:

| Path | Meaning |
|---|---|
| `/document/<id>` | An **agency document** — the request for comment |
| `/comment/<id>` | A **public comment** someone else submitted |
| `/docket/<id>` | The **docket**, i.e. the folder holding an entire rulemaking |

**Do not infer type from the trailing sequence number.** A high number does not mean it is
a public comment. Long-running dockets accumulate tens of thousands of public submissions,
and a *new agency document* filed into that docket gets the next number in line. Real
example: `FWS-R6-ES-2024-0186-76185` is the agency's July 2026 supplemental proposed rule,
not a comment, despite the 76,185.

If the user gave a bare ID with no URL, do not guess. Resolve it by search (step 2) and
confirm by the check in step 4.

### Step 2: Search the full document ID, in quotes

This is the highest-yield move and it should be the first search:

> `"FWS-R6-ES-2024-0186-76185"`

Federal Register pages embed the regulations.gov document ID in their "Submit a public
comment" link and in the Regulations.gov Data sidebar, so an exact-phrase search maps
ID → Federal Register page in one hop.

**Searching the docket ID alone is unreliable.** A docket spans years — an original
proposal, comment-period extensions, supplemental proposals — and search ranks the oldest
and most-linked first. Searching `FWS-R6-ES-2024-0186 federal register` surfaces a January
2025 proposal whose comment period closed long ago. Summarizing that instead of the live
document wastes the user's entire interview.

Fall back to `<docket-id> <agency name> federal register` only if the exact-ID search
fails, and then apply step 3 carefully.

### Step 3: Pick the right document if there are several

When the docket has multiple Federal Register entries, choose by:

1. **Comment period still open** — `comments_close_on` in the future
2. **Most recent publication date**
3. **Document type** — a proposed rule or notice, not a comment-period-extension notice
   (an extension changes only the date; the substance is in the document it extends)

If two are live, ask the user which one they mean rather than picking.

### Step 4: Fetch the Federal Register page

Ask the fetch for, at minimum:

- Title, agency, docket ID, RIN, publication date
- **Comment close date**
- The `SUMMARY` and `DATES` sections
- **The regulations.gov document ID its comment button points to** — this is the
  verification (see step 5)
- Any explicit list of questions the agency wants answered

**Section headings vary by agency.** Ask for content, not headings, and name the likely
candidates so the fetch lands first try: `SUPPLEMENTARY INFORMATION`, `Information
Requested`, `Public Comments`, `Request for Comments`, `Solicitation of Comments`.

**Fetch more than once.** Federal Register pages for major rules are very long. One fetch
for the summary, deadline, and agency questions; a second, targeted, once you know which
provisions the user cares about. Three passes on a big rule is normal, not a failure.

**If the page 500s**, it is not always transient. Try the govinfo PDF or the Justia mirror
(below) before asking the user.

### Step 5: Verify before you summarize

- [ ] **ID match** — the regulations.gov ID on the Federal Register page matches the one
      the user gave. If it does not, you have the wrong document in the same docket.
- [ ] **Type** — an agency document, not a public comment. If the user did link a comment,
      say so, find the document it responds to, and confirm with them before continuing.
- [ ] **Deadline vs. today** — check the actual current date.
- [ ] **Agency questions** — captured, if there are any.
- [ ] **Substance** — enough to describe the proposal in plain language without guessing.

#### Act on the deadline

- **Closed.** Say so immediately. Do not run the interview. Comments submitted late are
  generally not considered. Offer to look for a related open docket.
- **Under ~72 hours.** Lead with the deadline. Compress the interview to one batch of
  questions, draft fast, and remind them that the period closes at 11:59 p.m. Eastern.
- **Comfortable.** Proceed normally.

### Fallbacks, in order

- **The govinfo.gov PDF** — `govinfo.gov/content/pkg/FR-YYYY-MM-DD/pdf/YYYY-NNNNN.pdf`,
  usually in search results. Needed anyway for the **page, column, and paragraph** citation
  the guidelines call for: the Federal Register HTML does not show print page numbers.
- **`regulations.justia.com`** — mirrors Federal Register text, useful when
  federalregister.gov errors.
- **The agency's own fact sheet.** CMS, EPA, FWS and others publish plain-language
  summaries that make better orientation material than the rule. Good for the summary
  step; cite the rule itself, never the fact sheet, for specifics.
- **APIs — expect these to be blocked.** `api.regulations.gov/v4` needs an api.data.gov key
  and `DEMO_KEY` is shared and rate-limited (HTTP 429). The Federal Register API returns
  `comments_close_on` and `regulations_dot_gov_info` cleanly but is often proxy-rejected
  (403), and `conditions[...]` filter parameters may be silently stripped, which returns
  unfiltered results that look valid. Do not build on either. If an API call returns
  results that ignore your filters, discard them.
- **Ask the user.** If they have the page open, ask them to paste the summary or attach the
  PDF. This is a normal outcome, not a failure — say it plainly and move on.


---

# Appendix C — references/interview.md

## Drawing out what the user actually knows

The user came with a reaction. The comment needs reasons, examples, and support. The
interview is the conversion.

### Framing to give them, once, up front

> Answer at whatever length you want — a sentence or five paragraphs. Rough notes, half-
> formed thoughts, a story that seems tangential: all of it is useful. The more you give
> me, the more there is to build the comment from. I'll cut what doesn't fit.

Say this at the start of the first question batch. Do not repeat it every round.

### Structure

Ask **3–5 questions per batch**, two or three batches total. Never a wall of twenty.

**If the user gave only a link:** start at Round 1.

**If the user already gave context:** skip anything they answered. Reflect what they said
back in one line — *"So the core of it is X, and you've seen it firsthand at Y"* — then
jump to the follow-ups that sharpen it. Their opening statement is the jumping-off point,
not something to make them repeat.

---

### Round 1 — position and stake

Pick 3–5. Adapt the wording to the specific rule; do not read them out mechanically.

- What's your reaction to this — do you want it to go ahead, be changed, or be dropped?
- How does this reach you? Your work, your household, where you live, something you're
  responsible for?
- What's the part that matters most to you? If the agency changed one thing, what?
- Have you seen this problem, or this kind of rule, play out before?
- Is there anything in the proposal you agree with, even if you oppose the rest?

That last one matters more than it looks. A comment that concedes the reasonable parts
reads as credible; a comment that opposes everything reads as reflexive.

### Round 2 — support

This is the round that determines whether the comment lands. Pull from these based on
what Round 1 opened up.

**Concrete experience**

- Can you walk me through a specific instance? What happened, roughly when, who was affected?
- Is this something you've seen once, or a pattern?

**Numbers**

- Are there costs, hours, headcount, or volumes you can put a figure on?
- Is that a figure you'd be comfortable standing behind in a public document?

Ask the second question every time a number appears. A number the user is guessing at
should be written as an estimate or left out — never presented as fact.

**Credentials**

- What's your professional or personal background here — is there experience that makes
  your read on this different from a general member of the public?
- Are you commenting as yourself, or for an organization?

**Evidence**

- Is there research, reporting, or agency data you're drawing on? Do you have the source?

If they name a source but not a citation, offer to look it up — and only use it if you can
verify it says what they think it says. Never cite a source you have not confirmed.

**The alternative**

- If not this, then what? What should the agency do instead?
- Would a narrower version work — a different threshold, a longer timeline, an exemption?

The guidelines are explicit that opposition without an alternative is weak. Do not skip
this for a user who opposes the rule.

### Round 3 — the counterargument, and only if needed

- What's the strongest case for the other side, and what's wrong with it?
- Is there a downside to what you're proposing that you'd acknowledge?
- Anything you want in there that I haven't asked about?

### Adapting to what the agency asked

If the retrieval step found specific questions the agency posed, work them into the
interview directly: *"The agency specifically asked whether X — do you have a view on
that?"* Those answers get priority placement in the draft. They are where the agency has
said it wants information.

### Handling vagueness

One follow-up per vague answer. Then move on.

| They said | Ask |
|---|---|
| "It'll hurt small businesses" | "Whose business, and what specifically changes for them?" |
| "This is government overreach" | "Which provision goes too far, and what would the right line be?" |
| "The science doesn't support it" | "Which part — is there a study or data point you're thinking of?" |
| "It's about time" | "What's been going wrong that this would fix?" |
| "It'll cost a fortune" | "Any sense of the scale — for you, or for a place like yours?" |

Two rounds of follow-up on one point is the ceiling. Past that you are interrogating, and
the answer probably isn't there.

### When to stop

Stop when you have: a clear position, at least one concrete piece of support, and — for a
user who opposes — an alternative. That is enough for a good comment.

Do not keep asking to fill out a template. An honest 350-word comment with one real
example beats a padded 800-word one.

### What not to ask

- Anything the answer to is already in the document. Look it up.
- Personal detail the comment does not need. Comments are public record.
- Leading questions that put a position in their mouth. If they are undecided, help them
  think, do not steer.


---

# Appendix D — references/drafting.md

## Writing the comment

### Shape

**300–600 words** for most comments. Go shorter if the user gave you one point — a tight
200-word comment on a single provision is a good comment. Go longer only when the user has
real substance on several issues, and stop at roughly 1,000.

```
[Docket ID / document title, one line]

Opening — 2–4 sentences
  Who you are and why this reaches you. Position stated plainly.

Body — 1–3 short sections, one per issue
  Provision → what happens → support (example, number, experience) → what should change.

Alternative — required if opposing
  What the agency should do instead, and why it meets the same goal.

Counterpoint — 1–3 sentences, where the user gave you one
  The other side, and the response.

Close — 1–2 sentences
  What action is requested. No summary of everything above.
```

Skip any section without real material. An empty section is padding.

### Style

Direct and brief. That is the whole instruction, but it means specific things:

**Cut these openings.** "I am writing to express my strong concern regarding..." / "As a
concerned citizen, I would like to take this opportunity to..." / "Thank you for the
opportunity to comment." Start with the substance.

**Write:** *I've managed a rural pharmacy in western Nebraska for eleven years. The
reporting requirement in § 423.2265(b) would take about six hours a month I don't have.*

**Not:** *As a longtime member of the pharmacy community, I am deeply troubled by the
potentially burdensome implications that the proposed reporting requirements may have on
small independent pharmacies such as my own.*

Other rules:

- One idea per paragraph. Three or four sentences each.
- Active voice. Concrete nouns.
- No hedging stacks — "may potentially somewhat" is one weak word doing three jobs.
- No rhetorical questions, no exclamation points, no all-caps.
- Cite provisions precisely: section number, or page/column/paragraph from the Federal
  Register PDF. Vague reference reads as not having read the rule.
- Use the user's own phrases where they were good. Their voice is more credible than a
  polished neutral one.

### Fidelity

Two failures to avoid, in both directions:

**Adding.** No fact, figure, credential, experience, source, or affiliation the user did
not give you. Not for smoothness, not for balance, not for a stronger close. If a
transition needs a claim to work, rewrite the transition.

Watch specifically for: inflating a stated role into a title; turning "a while back" into
a date; turning "a lot of people" into a number; adding a plausible-sounding study;
extending one incident into a pattern.

**Dropping.** Everything the user marked as most important has to be in there. If
something they cared about didn't make the draft — too thin to support, off-topic,
duplicative — say so explicitly in the handoff and let them overrule you.

### Estimates and uncertainty

When the user gave a number they weren't sure about, mark it as what it is: *roughly six
hours a month*, *in my estimate, about a dozen households*. Do not launder an estimate
into a fact, and do not throw out a useful approximation for being approximate.

### Prioritizing

Lead with the strongest material, in this order:

1. **Answers to questions the agency explicitly asked** — where they said they want input.
2. **Firsthand experience with specifics** — what only this commenter can supply.
3. **Quantified impact** the user can vouch for.
4. **Reasoned argument** from the rule's own logic or stated purpose.
5. **Position without support** — include only if it's the user's central point, and keep
   it to a sentence.

### Delivery

- Write the comment to a `.md` file and send it with `SendUserFile`.
- Put the comment text inline in the response too, so they can read it without opening
  anything.
- Plain text, no markdown headers or bold inside the comment body — it goes into a plain
  web form and formatting will not survive.
- Give the word count.
- Keep your own commentary out of the file. The file is the comment; notes go in the chat.

### Self-check before sending

- [ ] Every factual claim traces to the user or the regulatory document
- [ ] Everything the user called most important is present
- [ ] Provisions cited specifically
- [ ] An alternative is proposed, if the comment opposes
- [ ] No boilerplate opening, no padding
- [ ] Reads like the user, not like a template
- [ ] Under 600 words unless there was genuine reason to go longer
