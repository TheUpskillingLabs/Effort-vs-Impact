import { notFound } from "next/navigation";
import { getAgendaItem, getThemesWithQuotes, getSubmissionCount } from "@/lib/data";
import { buildTimeline } from "@/lib/timeline";
import { formatDate } from "@/lib/format";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Timeline } from "@/components/Timeline";
import { WhatWeHeard } from "@/components/WhatWeHeard";
import { ResponseCard } from "@/components/ResponseCard";
import { FeedbackForm } from "@/components/FeedbackForm";

export const dynamic = "force-dynamic";

export default async function Home() {
  const item = await getAgendaItem();
  if (!item) {
    notFound();
  }

  const [themes, submissionCount] = await Promise.all([
    getThemesWithQuotes(item.id),
    getSubmissionCount(item.id),
  ]);

  const stages = buildTimeline(item);
  const commentPeriodClosed = Boolean(item.responsePublishedAt);

  const publishedResponse =
    item.responsePublishedAt && item.responseStatus && item.responseRationale && item.responseNextStep
      ? {
          responseStatus: item.responseStatus,
          responseRationale: item.responseRationale,
          responseNextStep: item.responseNextStep,
          responsePublishedAt: item.responsePublishedAt,
        }
      : null;

  return (
    <>
      <SiteHeader variant="public" />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        <section>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Agenda item · Public comment
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {item.title}
          </h1>

          <dl className="mt-5 grid grid-cols-2 gap-4 rounded-xl border border-border bg-surface p-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium text-muted uppercase">Comment opened</dt>
              <dd className="mt-0.5 text-sm font-medium text-foreground">
                {formatDate(item.commentOpenAt)}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-muted uppercase">Response due</dt>
              <dd className="mt-0.5 text-sm font-medium text-foreground">
                {formatDate(item.responseByDate)}
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-2">
              <dt className="text-xs font-medium text-muted uppercase">Response owner</dt>
              <dd className="mt-0.5 text-sm font-medium text-foreground">
                {item.responseOwnerName}
                <span className="block font-normal text-muted">{item.responseOwnerRole}</span>
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6">
          <h2 className="text-sm font-semibold tracking-wide text-muted uppercase">
            What&apos;s being decided
          </h2>
          <p className="mt-2 text-foreground">{item.context}</p>
          <div className="mt-4 rounded-lg border-l-4 border-accent bg-surface-muted p-4">
            <p className="text-sm font-medium text-muted uppercase">Decision question</p>
            <p className="mt-1 font-medium text-foreground">{item.decisionQuestion}</p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold tracking-wide text-muted uppercase">
            Where this stands
          </h2>
          <div className="mt-4 rounded-xl border border-border bg-surface p-6">
            <Timeline stages={stages} />
          </div>
        </section>

        {themes.length > 0 && item.synthesisPublishedAt && (
          <section>
            <WhatWeHeard themes={themes} totalSubmissions={submissionCount} />
          </section>
        )}

        <section>
          <ResponseCard
            response={publishedResponse}
            responseByDate={item.responseByDate}
            responseOwnerName={item.responseOwnerName}
            responseOwnerRole={item.responseOwnerRole}
          />
        </section>

        {!commentPeriodClosed && (
          <section>
            <h2 className="text-xl font-semibold text-foreground">Share your feedback</h2>
            <p className="mt-1 text-sm text-muted">
              Name, email, and neighborhood are optional. Your email, if provided, is never
              shown publicly — it&apos;s only used if the board needs to follow up with you
              directly.
            </p>
            <div className="mt-4">
              <FeedbackForm agendaItemId={item.id} />
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
