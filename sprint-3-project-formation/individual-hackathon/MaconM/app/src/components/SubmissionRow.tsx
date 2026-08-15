"use client";

import { useTransition } from "react";

type Theme = { id: string; title: string };

export function SubmissionRow({
  themes,
  currentThemeId,
  consent,
  featured,
  onAssignTheme,
  onSetFeatured,
}: {
  themes: Theme[];
  currentThemeId: string | null;
  consent: boolean;
  featured: boolean;
  onAssignTheme: (formData: FormData) => Promise<void>;
  onSetFeatured: (featured: boolean) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-wrap items-center gap-4">
      <select
        defaultValue={currentThemeId ?? ""}
        disabled={isPending}
        onChange={(e) => {
          const formData = new FormData();
          formData.set("themeId", e.target.value);
          startTransition(() => onAssignTheme(formData));
        }}
        className="rounded-md border border-border bg-surface px-2 py-1.5 text-sm text-foreground focus:border-primary disabled:opacity-60"
      >
        <option value="">Unassigned</option>
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.title}
          </option>
        ))}
      </select>

      <label className="flex items-center gap-1.5 text-xs text-muted">
        <input
          type="checkbox"
          checked={featured}
          disabled={isPending || !consent}
          onChange={(e) => {
            const next = e.target.checked;
            startTransition(() => onSetFeatured(next));
          }}
        />
        Feature as public quote{!consent && " (no consent given)"}
      </label>
    </div>
  );
}
