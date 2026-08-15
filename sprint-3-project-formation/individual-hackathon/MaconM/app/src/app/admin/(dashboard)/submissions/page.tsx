import { prisma } from "@/lib/db";
import { getAgendaItemOrThrow } from "@/lib/data";
import { assignSubmissionTheme, setSubmissionFeatured } from "@/app/admin/actions";
import { SubmissionRow } from "@/components/SubmissionRow";
import { formatDate } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function AdminSubmissionsPage() {
  const item = await getAgendaItemOrThrow();
  const [submissions, themes] = await Promise.all([
    prisma.submission.findMany({
      where: { agendaItemId: item.id },
      orderBy: { createdAt: "desc" },
    }),
    prisma.theme.findMany({
      where: { agendaItemId: item.id },
      orderBy: { position: "asc" },
      select: { id: true, title: true },
    }),
  ]);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Submissions</h1>
        <p className="mt-1 text-sm text-muted">
          {submissions.length} received. Assign each to a theme, and mark strong,
          consented comments to feature as public quotes.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {submissions.map((submission) => {
          const assignThemeAction = assignSubmissionTheme.bind(null, submission.id);
          const setFeaturedAction = setSubmissionFeatured.bind(null, submission.id);
          return (
            <div key={submission.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                <span>{formatDate(submission.createdAt)}</span>
                <span>{submission.consent ? "Consented to be quoted" : "No quote consent"}</span>
              </div>

              <p className="mt-3 text-foreground">{submission.comment}</p>

              <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted">
                <div>
                  <dt className="inline font-medium">Name: </dt>
                  <dd className="inline">{submission.name ?? "Anonymous"}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Neighborhood: </dt>
                  <dd className="inline">{submission.neighborhood ?? "—"}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Email (private, for follow-up only): </dt>
                  <dd className="inline">{submission.email ?? "—"}</dd>
                </div>
              </dl>

              <div className="mt-4 border-t border-border pt-4">
                <SubmissionRow
                  themes={themes}
                  currentThemeId={submission.themeId}
                  consent={submission.consent}
                  featured={submission.featured}
                  onAssignTheme={assignThemeAction}
                  onSetFeatured={setFeaturedAction}
                />
              </div>
            </div>
          );
        })}
        {submissions.length === 0 && (
          <p className="text-sm text-muted italic">No submissions yet.</p>
        )}
      </div>
    </>
  );
}
