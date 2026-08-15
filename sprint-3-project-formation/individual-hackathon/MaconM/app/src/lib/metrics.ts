import { daysUntil } from "@/lib/format";

export function buildDashboardMetrics(item: {
  responseByDate: Date;
  synthesisPublishedAt: Date | null;
  responsePublishedAt: Date | null;
}, submissionCount: number) {
  return {
    submissionsReceived: submissionCount,
    daysRemaining: daysUntil(item.responseByDate),
    synthesisPublished: Boolean(item.synthesisPublishedAt),
    responsePublished: Boolean(item.responsePublishedAt),
  };
}
