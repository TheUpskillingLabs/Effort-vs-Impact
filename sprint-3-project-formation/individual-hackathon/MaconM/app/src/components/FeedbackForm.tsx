"use client";

import { useActionState } from "react";
import { submitFeedback, type FeedbackFormState } from "@/app/actions";

const initialState: FeedbackFormState = { status: "idle" };

export function FeedbackForm({ agendaItemId }: { agendaItemId: string }) {
  const action = submitFeedback.bind(null, agendaItemId);
  const [state, formAction, isPending] = useActionState(action, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-status-proceed bg-status-proceed-bg p-6">
        <p className="font-medium text-status-proceed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Name (optional)" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
          />
        </Field>
        <Field label="Email (optional)" htmlFor="email" hint="Never shown publicly">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
          />
        </Field>
        <Field label="Neighborhood (optional)" htmlFor="neighborhood">
          <input
            id="neighborhood"
            name="neighborhood"
            type="text"
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
          />
        </Field>
      </div>

      <Field label="Your comment" htmlFor="comment" required>
        <textarea
          id="comment"
          name="comment"
          required
          rows={5}
          placeholder="What would you like the board to know?"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
        />
      </Field>

      <label htmlFor="consent" className="flex items-start gap-2.5 text-sm text-foreground">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:border-primary"
        />
        <span>
          I understand my comment may appear publicly and anonymously in the &ldquo;What we
          heard&rdquo; summary. My name and email are never published.
        </span>
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-sm text-status-do-not-proceed">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="self-start rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60"
      >
        {isPending ? "Submitting…" : "Submit feedback"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
