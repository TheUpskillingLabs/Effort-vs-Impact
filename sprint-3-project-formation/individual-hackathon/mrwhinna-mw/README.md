# Community Commons

A civic-engagement game: browse federal rules that are open for public comment, write a three-sentence comment from a template, file it on regulations.gov — and every comment you file raises a building in a town you can walk around. Each building keeps a timeline of what happened to the rule you commented on.

Prototype. The dockets are illustrative placeholders, not live regulations.gov data.

## What's in here

| File | What it is |
| --- | --- |
| `index.html` | The app. Self-contained — no build step, no dependencies. |
| `app.html` | Identical copy of the app, embedded by the survey's live previews. |
| `survey.html` | Six-question feedback survey, each question beside the live screen it asks about. |
| `survey-collector.gs` | Google Apps Script that collects survey responses into one Google Sheet. |

## Publish on GitHub Pages

1. Commit these files to the root of `main`.
2. Settings → Pages → Source: **Deploy from a branch** → `main`, folder `/ (root)`.
3. Live at `https://<user>.github.io/<repo>/` — the survey is at `/survey.html`.

## Collecting survey responses into one sheet

The survey works with no setup (answers stay on the respondent's device, downloadable as CSV). To pool everyone's answers into a single sheet:

1. Create a new Google Sheet.
2. Extensions → **Apps Script**. Delete the placeholder code, paste in all of `survey-collector.gs`, save.
3. **Deploy → New deployment** → type **Web app**. Execute as **Me**; Who has access **Anyone**. Deploy, authorize, and copy the `…/exec` URL.
4. Point the survey at it — either edit one line near the top of `survey.html`:

   ```html
   <!-- find data-props on the survey's script tag and set: -->
   "endpointUrl": { "default": "https://script.google.com/macros/s/…/exec" }
   ```

   …or skip editing entirely and share the link with the endpoint as a query parameter:

   ```
   https://<user>.github.io/<repo>/survey.html?endpoint=https://script.google.com/macros/s/…/exec
   ```

5. Send the link out. Each submission appends a row. Download everything with **File → Download → Comma-separated values (.csv)**.

Notes: responses are also kept locally as a backup, so a respondent can still export their own CSV if the sheet is unreachable. The endpoint URL is public by design — it can only append rows, never read the sheet. The survey collects no names, emails, or identifiers.

## How to play

- Pick a rule under **What's open** and write your comment — starter sentences are prefilled; change what isn't true for you.
- Copy it, file it on regulations.gov, then confirm. You get a building.
- On **Your town**, walk with the arrow keys or `W A S D`. Stand beside a building and press `Enter` to see the policy's status. Drag a building to move it to another plot.

## License

MIT
