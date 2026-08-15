import { getAgendaItemOrThrow, getThemesWithQuotes } from "@/lib/data";
import { createTheme, updateTheme, deleteTheme } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function AdminThemesPage() {
  const item = await getAgendaItemOrThrow();
  const themes = await getThemesWithQuotes(item.id);
  const createThemeAction = createTheme.bind(null, item.id);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Themes</h1>
        <p className="mt-1 text-sm text-muted">
          Group submissions into 3–5 themes for the public &ldquo;What we heard&rdquo;
          summary. Assign submissions to a theme from the Submissions tab.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {themes.map((theme) => {
          const updateThemeAction = updateTheme.bind(null, theme.id);
          const deleteThemeAction = deleteTheme.bind(null, theme.id);
          return (
            <div key={theme.id} className="rounded-xl border border-border bg-surface p-5">
              <form action={updateThemeAction} className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-muted">
                    {theme._count.submissions} submission
                    {theme._count.submissions === 1 ? "" : "s"} assigned
                  </span>
                  <span className="text-xs text-muted">
                    {theme.submissions.length} featured quote
                    {theme.submissions.length === 1 ? "" : "s"}
                  </span>
                </div>
                <input
                  name="title"
                  defaultValue={theme.title}
                  required
                  className="w-full rounded-md border border-border bg-surface px-3 py-2 font-medium text-foreground focus:border-primary"
                />
                <textarea
                  name="description"
                  defaultValue={theme.description}
                  required
                  rows={2}
                  className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary"
                />
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
                  >
                    Save
                  </button>
                </div>
              </form>
              <form action={deleteThemeAction} className="mt-2">
                <button type="submit" className="text-xs text-status-do-not-proceed underline">
                  Delete theme
                </button>
              </form>
            </div>
          );
        })}
        {themes.length === 0 && (
          <p className="text-sm text-muted italic">No themes yet. Create one below.</p>
        )}
      </div>

      <form
        action={createThemeAction}
        className="flex flex-col gap-3 rounded-xl border border-dashed border-border bg-surface-muted p-5"
      >
        <h2 className="font-medium text-foreground">New theme</h2>
        <input
          name="title"
          placeholder="Theme title"
          required
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
        />
        <textarea
          name="description"
          placeholder="One or two sentences summarizing this theme"
          required
          rows={2}
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
        />
        <button
          type="submit"
          className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
        >
          Add theme
        </button>
      </form>
    </>
  );
}
