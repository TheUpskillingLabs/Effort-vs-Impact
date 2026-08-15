import type { ResponseStatus } from "@prisma/client";

const STATUS_LABEL: Record<ResponseStatus, string> = {
  PROCEED: "Proceed",
  DO_NOT_PROCEED: "Do not proceed",
  NOT_YET: "Not yet",
};

const STATUS_CLASSES: Record<ResponseStatus, string> = {
  PROCEED: "bg-status-proceed-bg text-status-proceed",
  DO_NOT_PROCEED: "bg-status-do-not-proceed-bg text-status-do-not-proceed",
  NOT_YET: "bg-status-not-yet-bg text-status-not-yet",
};

export function StatusBadge({ status }: { status: ResponseStatus }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold " +
        STATUS_CLASSES[status]
      }
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
