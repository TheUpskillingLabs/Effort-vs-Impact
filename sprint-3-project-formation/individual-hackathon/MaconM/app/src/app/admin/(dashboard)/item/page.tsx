import { getAgendaItemOrThrow } from "@/lib/data";
import { updateAgendaItem } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

function toDateInputValue(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export default async function AdminItemPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const item = await getAgendaItemOrThrow();
  const { saved } = await searchParams;
  const action = updateAgendaItem.bind(null, item.id);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Agenda item</h1>
        <p className="mt-1 text-sm text-muted">
          What residents see on the public page: the issue, the decision question, key
          dates, and who owns the reply.
        </p>
      </div>

      {saved && (
        <p className="rounded-md bg-status-proceed-bg px-4 py-2 text-sm text-status-proceed">
          Saved.
        </p>
      )}

      <form action={action} className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6">
        <FormField label="Title" htmlFor="title">
          <input
            id="title"
            name="title"
            defaultValue={item.title}
            required
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
          />
        </FormField>

        <FormField label="Plain-language context" htmlFor="context" hint="Why this item exists, written for residents, not for staff.">
          <textarea
            id="context"
            name="context"
            defaultValue={item.context}
            required
            rows={4}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
          />
        </FormField>

        <FormField label="Decision question" htmlFor="decisionQuestion">
          <textarea
            id="decisionQuestion"
            name="decisionQuestion"
            defaultValue={item.decisionQuestion}
            required
            rows={2}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
          />
        </FormField>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Comment opens" htmlFor="commentOpenAt">
            <input
              id="commentOpenAt"
              name="commentOpenAt"
              type="date"
              defaultValue={toDateInputValue(item.commentOpenAt)}
              required
              className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
            />
          </FormField>
          <FormField label="Response due by" htmlFor="responseByDate">
            <input
              id="responseByDate"
              name="responseByDate"
              type="date"
              defaultValue={toDateInputValue(item.responseByDate)}
              required
              className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
            />
          </FormField>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Response owner name" htmlFor="responseOwnerName" hint="Shown publicly.">
            <input
              id="responseOwnerName"
              name="responseOwnerName"
              defaultValue={item.responseOwnerName}
              required
              className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
            />
          </FormField>
          <FormField label="Response owner role" htmlFor="responseOwnerRole" hint="Shown publicly.">
            <input
              id="responseOwnerRole"
              name="responseOwnerRole"
              defaultValue={item.responseOwnerRole}
              required
              className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
            />
          </FormField>
        </div>

        <button
          type="submit"
          className="self-start rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground hover:bg-primary-hover"
        >
          Save changes
        </button>
      </form>
    </>
  );
}

function FormField({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
