export type TimelineStageState = "complete" | "current" | "upcoming";

export interface TimelineStage {
  key: string;
  label: string;
  date: Date | null;
  state: TimelineStageState;
}

export function buildTimeline(item: {
  commentOpenAt: Date;
  synthesisPublishedAt: Date | null;
  responsePublishedAt: Date | null;
}): TimelineStage[] {
  const openStarted = new Date() >= item.commentOpenAt;
  const synthesisDone = Boolean(item.synthesisPublishedAt);
  const responseDone = Boolean(item.responsePublishedAt);

  return [
    {
      key: "open",
      label: "Open for input",
      date: item.commentOpenAt,
      state: openStarted ? "complete" : "upcoming",
    },
    {
      key: "synthesis",
      label: "Synthesis published",
      date: item.synthesisPublishedAt,
      state: synthesisDone ? "complete" : openStarted ? "current" : "upcoming",
    },
    {
      key: "reviewing",
      label: "Board reviewing",
      date: null,
      state: responseDone ? "complete" : synthesisDone ? "current" : "upcoming",
    },
    {
      key: "response",
      label: "Official response",
      date: item.responsePublishedAt,
      state: responseDone ? "complete" : "upcoming",
    },
  ];
}
