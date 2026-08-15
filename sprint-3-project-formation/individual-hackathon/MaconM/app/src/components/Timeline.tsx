import { TimelineStage } from "@/lib/timeline";
import { formatDate } from "@/lib/format";

function StageDot({ state }: { state: TimelineStage["state"] }) {
  if (state === "complete") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.415l-7.5 7.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414L8.5 12.086l6.79-6.796a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  if (state === "current") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
    );
  }
  return <span className="h-8 w-8 shrink-0 rounded-full border-2 border-border bg-surface" />;
}

export function Timeline({ stages }: { stages: TimelineStage[] }) {
  return (
    <ol aria-label="Timeline" className="flex flex-col sm:flex-row">
      {stages.map((stage, i) => {
        const isLast = i === stages.length - 1;
        const connectorFilled = stage.state === "complete";
        return (
          <li key={stage.key} className="flex sm:flex-1 sm:flex-col">
            {/* Row on mobile: dot + connector down. Column on desktop: dot + connector right. */}
            <div className="flex flex-col items-center sm:flex-row sm:w-full">
              <StageDot state={stage.state} />
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={
                    "sm:mt-0 sm:ml-2 sm:h-0.5 sm:flex-1 sm:w-auto " +
                    "my-1 h-6 w-0.5 " +
                    (connectorFilled ? "bg-primary" : "bg-border")
                  }
                />
              )}
            </div>
            <div className="mb-6 ml-0 pt-1 sm:mb-0 sm:mt-2 sm:pt-0 sm:pr-2">
              <p
                className={
                  "text-sm font-medium " +
                  (stage.state === "upcoming" ? "text-muted" : "text-foreground")
                }
              >
                {stage.label}
              </p>
              {stage.date && <p className="text-xs text-muted">{formatDate(stage.date)}</p>}
              {!stage.date && stage.state === "current" && (
                <p className="text-xs text-muted">In progress</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
