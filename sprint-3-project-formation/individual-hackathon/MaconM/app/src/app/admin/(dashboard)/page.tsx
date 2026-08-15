import { getAgendaItemOrThrow, getSubmissionCount } from "@/lib/data";
import { buildDashboardMetrics } from "@/lib/metrics";
import { publishSynthesis, unpublishSynthesis, publishResponse } from "@/app/admin/actions";
import { StatusBadge } from "@/components/StatusBadge";
import { formatDate } from "@/lib/format";
import type { ResponseStatus } from "@prisma/client";

export const dynamic = "force-dynamic";

function MetricTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-foreground">{value}</p>
    </div>
  );
}

const STATUS_OPTIONS: { value: ResponseStatus; label: string }[] = [
  { value: "PROCEED", label: "Proceed" },
  { value: "DO_NOT_PROCEED", label: "Do not proceed" },
  { value: "NOT_YET", label: "Not yet" },
];

export default async function AdminDashboardPage() {
  const item = await getAgendaItemOrThrow();
  const submissionCount = await getSubmissionCount(item.id);
  const metrics = buildDashboardMetrics(item, submissionCount);

  const publishSynthesisAction = publishSynthesis.bind(null, item.id);
  const unpublishSynthesisAction = unpublishSynthesis.bind(null, item.id);
  const publishResponseAction = publishResponse.bind(null, item.id);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">{item.title}</p>
      </div>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricTile label="Submissions received" value={String(metrics.submissionsReceived)} />
        <MetricTile
          label="Days remaining"
          value={metrics.daysRemaining < 0 ? "Past due" : String(metrics.daysRemaining)}
        />
        <MetricTile label="Synthesis published" value={metrics.synthesisPublished ? "Yes" : "No"} />
        <MetricTile label="Response published" value={metrics.responsePublished ? "Yes" : "No"} />
      </section>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="font-medium text-foreground">1. Publish &ldquo;What we heard&rdquo;</h2>
        <p className="mt-1 text-sm text-muted">
          Makes your themes and any featured quotes visible on the public page. Assign
          submissions to themes first, on the Submissions and Themes tabs.
        </p>
        <div className="mt-4 flex items-center gap-3">
          {metrics.synthesisPublished ? (
            <>
              <span className="text-sm text-status-proceed">
                Published {item.synthesisPublishedAt && formatDate(item.synthesisPublishedAt)}
              </span>
              {!metrics.responsePublished && (
                <form action={unpublishSynthesisAction}>
                  <button type="submit" className="text-sm text-muted underline hover:text-foreground">
                    Unpublish
                  </button>
                </form>
              )}
            </>
          ) : (
            <form action={publishSynthesisAction}>
              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
              >
                Publish synthesis
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-surface p-6">
        <h2 className="font-medium text-foreground">2. Publish the official response</h2>
        <p className="mt-1 text-sm text-muted">
          This is the public, dated answer residents are waiting for. Requires the
          synthesis to be published first.
        </p>

        {metrics.responsePublished ? (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <StatusBadge status={item.responseStatus!} />
            <span className="text-sm text-muted">
              Published {item.responsePublishedAt && formatDate(item.responsePublishedAt)}
            </span>
          </div>
        ) : !metrics.synthesisPublished ? (
          <p className="mt-4 text-sm text-muted italic">
            Publish the synthesis before you can publish a response.
          </p>
        ) : (
          <form action={publishResponseAction} className="mt-4 flex flex-col gap-4">
            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-sm font-medium text-foreground">Decision status</legend>
              <div className="flex flex-wrap gap-4">
                {STATUS_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 text-sm text-foreground">
                    <input type="radio" name="responseStatus" value={opt.value} required />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="responseRationale" className="text-sm font-medium text-foreground">
                Decision rationale
              </label>
              <textarea
                id="responseRationale"
                name="responseRationale"
                required
                rows={3}
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="responseNextStep" className="text-sm font-medium text-foreground">
                Next step
              </label>
              <textarea
                id="responseNextStep"
                name="responseNextStep"
                required
                rows={2}
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="self-start rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
            >
              Publish response
            </button>
          </form>
        )}
      </section>
    </>
  );
}
