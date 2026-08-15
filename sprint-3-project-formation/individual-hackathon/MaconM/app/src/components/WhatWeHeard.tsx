type ThemeWithQuotes = {
  id: string;
  title: string;
  description: string;
  submissions: { id: string; comment: string; neighborhood: string | null }[];
  _count: { submissions: number };
};

export function WhatWeHeard({
  themes,
  totalSubmissions,
}: {
  themes: ThemeWithQuotes[];
  totalSubmissions: number;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-semibold text-foreground">What we heard</h2>
        <p className="text-sm text-muted">
          {totalSubmissions} {totalSubmissions === 1 ? "submission" : "submissions"} received
        </p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {themes.map((theme) => (
          <div key={theme.id} className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-medium text-foreground">{theme.title}</h3>
              <span className="shrink-0 rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted">
                {theme._count.submissions}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted">{theme.description}</p>

            {theme.submissions.length > 0 && (
              <ul className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                {theme.submissions.map((s) => (
                  <li key={s.id} className="text-sm text-foreground">
                    <span aria-hidden="true" className="text-muted">
                      &ldquo;
                    </span>
                    {s.comment}
                    <span aria-hidden="true" className="text-muted">
                      &rdquo;
                    </span>
                    {s.neighborhood && (
                      <span className="block text-xs text-muted">— {s.neighborhood}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
