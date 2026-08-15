import type { ResponseStatus } from "@prisma/client";
import { StatusBadge } from "@/components/StatusBadge";
import { formatDate } from "@/lib/format";

type PublishedResponse = {
  responseStatus: ResponseStatus;
  responseRationale: string;
  responseNextStep: string;
  responsePublishedAt: Date;
};

export function ResponseCard({
  response,
  responseByDate,
  responseOwnerName,
  responseOwnerRole,
}: {
  response: PublishedResponse | null;
  responseByDate: Date;
  responseOwnerName: string;
  responseOwnerRole: string;
}) {
  if (!response) {
    return (
      <div className="rounded-xl border border-border bg-surface-muted p-6">
        <p className="text-sm font-semibold tracking-wide text-muted uppercase">
          Official response
        </p>
        <p className="mt-2 text-foreground">
          Not yet published. {responseOwnerName} ({responseOwnerRole}) has
          committed to a public response by{" "}
          <span className="font-medium">{formatDate(responseByDate)}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold tracking-wide text-muted uppercase">
          Official response
        </p>
        <StatusBadge status={response.responseStatus} />
      </div>

      <h3 className="mt-4 text-sm font-medium text-muted">Decision rationale</h3>
      <p className="mt-1 text-foreground">{response.responseRationale}</p>

      <h3 className="mt-4 text-sm font-medium text-muted">Next step</h3>
      <p className="mt-1 text-foreground">{response.responseNextStep}</p>

      <p className="mt-4 text-sm text-muted">
        Published {formatDate(response.responsePublishedAt)} by {responseOwnerName},{" "}
        {responseOwnerRole}
      </p>
    </div>
  );
}
