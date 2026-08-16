"use client";

import { useCallback, useEffect, useReducer, useState } from "react";

import {
  buildShareableNeed,
  demoReducer,
  initialDemoState,
  type CivicNeed,
  type DemoAction,
  type DemoState,
} from "./demo-machine";

const STORAGE_KEY = "constituent-needs-demo";
const SCRAMBLE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+?";
const ANALYSIS_STEPS = [
  "Organizing places and recurring experiences",
  "Matching possible needs to local responsibilities",
  "Preparing the details an office would need",
] as const;

export function DemoExperience() {
  const [state, dispatch] = useReducer(demoReducer, initialDemoState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const parsed: unknown = saved ? JSON.parse(saved) : null;
      if (isDemoState(parsed)) {
        dispatch({ type: "hydrate", state: parsed });
      }
    } catch {
      // Browser storage is a convenience for the demo, never a requirement.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Continue with in-memory state if browser storage is unavailable.
    }
  }, [hydrated, state]);

  if (state.step === "welcome") {
    return <WelcomeScreen dispatch={dispatch} />;
  }

  if (state.step === "analyzing") {
    return <AnalysisScreen dispatch={dispatch} />;
  }

  if (state.step === "review") {
    return <ReviewScreen state={state} dispatch={dispatch} />;
  }

  if (state.step === "share") {
    return <ShareScreen state={state} dispatch={dispatch} />;
  }

  return <HomeScreen state={state} dispatch={dispatch} />;
}

type ScreenProps = {
  dispatch: React.Dispatch<DemoAction>;
};

type SignedInScreenProps = ScreenProps & {
  state: DemoState;
};

function WelcomeScreen({ dispatch }: ScreenProps) {
  return (
    <main className="welcome-screen view-enter">
      <section className="welcome-panel" aria-label="Sign in">
        <p className="welcome-copy">
          See how information you already have could become a clear request for
          your local representative—with you in control.
        </p>
        <div className="welcome-actions">
          <button
            className="button button-primary button-wide"
            type="button"
            onClick={() => dispatch({ type: "startAnalysis" })}
          >
            <span className="google-mark" aria-hidden="true">
              G
            </span>
            Continue with Google
          </button>
        </div>
      </section>
    </main>
  );
}

function AnalysisScreen({ dispatch }: ScreenProps) {
  const [complete, setComplete] = useState(false);
  const finishSequence = useCallback(() => setComplete(true), []);

  return (
    <main className="analysis-screen view-enter">
      <section
        className={`analysis-panel${complete ? " is-complete" : ""}`}
        aria-labelledby="analysis-title"
      >
        <div className="analysis-shapes" aria-hidden="true">
          <span className="analysis-shape analysis-shape-circle" />
          <span className="analysis-shape analysis-shape-square" />
          <span className="analysis-shape analysis-shape-diamond" />
        </div>
        <div className="analysis-content">
          <h1 id="analysis-title">Scanning for needs</h1>
          <ul className="analysis-list" aria-label="Analysis progress">
            {ANALYSIS_STEPS.map((step, index) => (
              <ScrambleLine
                key={step}
                index={index + 1}
                text={step}
                delayMs={180 + index * 920}
                onComplete={index === ANALYSIS_STEPS.length - 1 ? finishSequence : undefined}
              />
            ))}
          </ul>
        </div>
        {complete ? (
          <button
            className="button button-primary analysis-complete-action"
            type="button"
            onClick={() => dispatch({ type: "finishAnalysis" })}
          >
            Check my results
            <span className="analysis-action-arrow" aria-hidden="true">
              →
            </span>
          </button>
        ) : null}
      </section>
    </main>
  );
}

function ScrambleLine({
  index,
  text,
  delayMs,
  onComplete,
}: {
  index: number;
  text: string;
  delayMs: number;
  onComplete?: () => void;
}) {
  const [displayText, setDisplayText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      if (reduceMotion) {
        setVisible(true);
        setDisplayText(text);
        onComplete?.();
        return;
      }

      const startedAt = Date.now();
      const durationMs = 720;
      setVisible(true);

      const updateText = () => {
        const progress = Math.min((Date.now() - startedAt) / durationMs, 1);
        const lockedCharacters = Math.floor(progress * text.length);
        const nextText = [...text]
          .map((character, characterIndex) => {
            if (character === " ") return " ";
            if (characterIndex < lockedCharacters) return character;
            const randomIndex = Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length);
            return SCRAMBLE_CHARACTERS[randomIndex];
          })
          .join("");

        setDisplayText(progress === 1 ? text : nextText);

        if (progress === 1 && intervalId !== undefined) {
          window.clearInterval(intervalId);
          onComplete?.();
        }
      };

      updateText();
      intervalId = window.setInterval(updateText, 36);
    }, reduceMotion ? 0 : delayMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [delayMs, onComplete, text]);

  return (
    <li className={`analysis-line${visible ? " is-visible" : ""}`} aria-label={text}>
      <span className="analysis-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
      <span className="analysis-scramble" aria-hidden="true">
        {displayText}
      </span>
    </li>
  );
}

function HomeScreen({ state, dispatch }: SignedInScreenProps) {
  const { need } = state;
  const isMine = need.status === "confirmed" || need.status === "sent";

  return (
    <div className="app-frame view-enter">
      <AppHeader
        profileName={state.profileName}
        onReset={() => dispatch({ type: "reset" })}
      />
      <main className="dashboard">
        {need.status === "sent" ? (
          <div className="notice" role="status">
            <span className="notice-mark" aria-hidden="true">
              ✓
            </span>
            <div>
              <strong>Demo request sent</strong>
              <p>No real message left this prototype.</p>
            </div>
          </div>
        ) : null}

        {need.status === "dismissed" ? (
          <div className="notice notice-quiet" role="status">
            <div>
              <strong>Suggestion removed</strong>
              <p>It will not become one of your needs.</p>
            </div>
            <button
              className="button-link"
              type="button"
              onClick={() => dispatch({ type: "undoDismiss" })}
            >
              Undo
            </button>
          </div>
        ) : null}

        <section className="home-summary" aria-label="Actions and updates">
          <div className="next-action-summary">
            {need.status === "discovered" ? (
              <>
                <h2>{need.title}</h2>
                <span className="next-action-description">{need.summary}</span>
                <button
                  className="button-link summary-action-link"
                  type="button"
                  onClick={() => dispatch({ type: "openNeed" })}
                >
                  Review →
                </button>
              </>
            ) : need.status === "confirmed" ? (
              <>
                <h2>{need.title}</h2>
                <span className="next-action-description">{need.summary}</span>
                <button
                  className="button-link summary-action-link"
                  type="button"
                  onClick={() => dispatch({ type: "openShare" })}
                >
                  Send →
                </button>
              </>
            ) : (
              <>
                <h2>No action needed</h2>
                <span>{need.status === "sent" ? "Request sent" : "Nothing waiting"}</span>
              </>
            )}
          </div>
          <div className="follow-up-summary">
            <p>Latest updates</p>
            <ul>
              <li>
                <strong>Bus stop lighting</strong>
                <span>Site inspection scheduled · Aug 20</span>
              </li>
              <li>
                <strong>Crosswalk timing</strong>
                <span>Transportation review opened</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="needs-section" aria-labelledby="my-needs-title">
          <div className="section-heading">
            <h2 id="my-needs-title">My needs</h2>
          </div>

          {isMine ? (
            <NeedCard need={need} dispatch={dispatch} />
          ) : (
            <div className="empty-state">
              <span>A need you confirm will stay here.</span>
            </div>
          )}
        </section>

        <section className="needs-section" aria-labelledby="discovered-title">
          <div className="section-heading">
            <h2 id="discovered-title">Needs discovered</h2>
          </div>

          {need.status === "discovered" ? (
            <article className="need-card need-card-discovered">
              <div className="need-card-copy">
                <h3>{need.title}</h3>
                <p>{need.summary}</p>
              </div>
              <div className="need-card-action">
                <button
                  className="button button-primary"
                  type="button"
                  aria-label={`Review ${need.title}`}
                  onClick={() => dispatch({ type: "openNeed" })}
                >
                  Review
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ) : (
            <div className="empty-state empty-state-compact">
              <p>You are all caught up.</p>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}

function NeedCard({ need, dispatch }: { need: CivicNeed } & ScreenProps) {
  const isSent = need.status === "sent";

  return (
    <article className="need-card">
      <div className="need-card-copy">
        {isSent ? (
          <div className="status-row">
            <p className="status-label">Sent</p>
            {need.sentAt ? <span>{need.sentAt}</span> : null}
          </div>
        ) : null}
        <h3>{need.title}</h3>
        <p>{need.outcome}</p>
      </div>
      <div className="need-card-action">
        {isSent ? (
          need.subscribed ? (
            <p className="subscribed-state" role="status">
              <span aria-hidden="true">✓</span>
              Subscribed to updates
            </p>
          ) : (
            <button
              className="button button-secondary"
              type="button"
              onClick={() => dispatch({ type: "subscribe" })}
            >
              Subscribe to updates
            </button>
          )
        ) : (
          <button
            className="button button-primary"
            type="button"
            onClick={() => dispatch({ type: "openShare" })}
          >
            Review and send
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </article>
  );
}

function ReviewScreen({ state, dispatch }: SignedInScreenProps) {
  const { need } = state;
  const isValid = Boolean(
    need.summary.trim() && need.location.trim() && need.outcome.trim(),
  );

  return (
    <div className="app-frame view-enter">
      <AppHeader
        profileName={state.profileName}
        onReset={() => dispatch({ type: "reset" })}
      />
      <main className="flow-page">
        <section className="flow-heading" aria-labelledby="need-title">
          <button
            className="back-button flow-back"
            type="button"
            aria-label="Back"
            onClick={() => dispatch({ type: "goHome" })}
          >
            ← Back
          </button>
          <h1 id="need-title">{need.title}</h1>
        </section>

        <section className="prepared-card" aria-label="Need details">
          <dl className="need-summary">
            <EditableSummaryRow
              label="What is happening"
              value={need.summary}
              multiline
              onChange={(summary) =>
                dispatch({
                  type: "setDetails",
                  summary,
                  location: need.location,
                  outcome: need.outcome,
                })
              }
            />
            <EditableSummaryRow
              label="Where"
              value={need.location}
              onChange={(location) =>
                dispatch({
                  type: "setDetails",
                  summary: need.summary,
                  location,
                  outcome: need.outcome,
                })
              }
            />
            <EditableSummaryRow
              label="What you need"
              value={need.outcome}
              multiline
              onChange={(outcome) =>
                dispatch({
                  type: "setDetails",
                  summary: need.summary,
                  location: need.location,
                  outcome,
                })
              }
            />
            <SummaryRow label="Category" value={need.category} />
            <SummaryRow label="Best destination" value={need.destination} />
          </dl>
        </section>

        <section className="notes-panel" aria-labelledby="notes-title">
          <div>
            <h2 id="notes-title">Notes</h2>
            <span>Optional</span>
          </div>
          <textarea
            id="notes"
            aria-label="Notes (optional)"
            placeholder="Anything you want to remember about this need…"
            value={need.notes}
            onChange={(event) =>
              dispatch({ type: "setNotes", notes: event.target.value })
            }
          />
        </section>

        {!isValid ? (
          <p className="validation-message" role="alert">
            Restore the missing prepared detail before confirming.
          </p>
        ) : null}

        <div className="flow-actions">
          <div className="dismiss-action">
            <button
              className="dismiss-mark"
              type="button"
              aria-label="Dismiss this need"
              onClick={() => dispatch({ type: "dismissNeed" })}
            >
              ×
            </button>
            <button
              className="button-link button-link-muted"
              type="button"
              onClick={() => dispatch({ type: "dismissNeed" })}
            >
              Discard
            </button>
          </div>
          <button
            className="button button-primary confirm-action"
            type="button"
            disabled={!isValid}
            onClick={() => dispatch({ type: "confirmNeed" })}
          >
            <span className="confirm-mark" aria-hidden="true">
              ✓
            </span>
            Confirm
          </button>
        </div>
      </main>
    </div>
  );
}

function ShareScreen({ state, dispatch }: SignedInScreenProps) {
  const shared = buildShareableNeed(state.need);

  return (
    <div className="app-frame view-enter">
      <AppHeader
        profileName={state.profileName}
        backLabel="Back to my needs"
        onBack={() => dispatch({ type: "goHome" })}
        onReset={() => dispatch({ type: "reset" })}
      />
      <main className="flow-page share-page">
        <div className="flow-progress" aria-label="Send progress">
          <span>Share</span>
          <span>Final review</span>
        </div>
        <article className="share-document">
          <header>
            <p>Constituent need</p>
            <span>Confirmed by {shared.constituent}</span>
          </header>
          <h2>{shared.title}</h2>
          <dl className="need-summary share-summary">
            <SummaryRow label="Need" value={shared.summary} />
            <SummaryRow label="Location" value={shared.location} />
            <SummaryRow label="Requested outcome" value={shared.outcome} />
            <SummaryRow label="Category" value={shared.category} />
          </dl>
          <footer>
            <span>To</span>
            <strong>{shared.destination}</strong>
          </footer>
        </article>

        <div className="send-block">
          <p>Sending approves sharing the request shown above.</p>
          <button
            className="button button-primary button-send"
            type="button"
            onClick={() =>
              dispatch({ type: "sendNeed", sentAt: "Sent today" })
            }
          >
            Send to district office
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </main>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function EditableSummaryRow({
  label,
  value,
  multiline = false,
  onChange,
}: {
  label: string;
  value: string;
  multiline?: boolean;
  onChange: (value: string) => void;
}) {
  const [editing, setEditing] = useState(false);

  const finishEditing = () => setEditing(false);
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.key === "Escape" || (!multiline && event.key === "Enter")) {
      event.preventDefault();
      event.currentTarget.blur();
    }
  };

  return (
    <div className="editable-summary-row">
      <dt>{label}</dt>
      <dd>
        {editing ? (
          multiline ? (
            <textarea
              aria-label={label}
              autoFocus
              value={value}
              onBlur={finishEditing}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={handleKeyDown}
            />
          ) : (
            <input
              aria-label={label}
              autoFocus
              value={value}
              onBlur={finishEditing}
              onChange={(event) => onChange(event.target.value)}
              onKeyDown={handleKeyDown}
            />
          )
        ) : (
          <button
            className="editable-summary-value"
            type="button"
            aria-label={`Edit ${label}`}
            onClick={() => setEditing(true)}
          >
            <span>{value}</span>
            <span className="edit-mark" aria-hidden="true">
              ✎
            </span>
          </button>
        )}
      </dd>
    </div>
  );
}

function AppHeader({
  profileName,
  backLabel,
  onBack,
  onReset,
}: {
  profileName: string;
  backLabel?: string;
  onBack?: () => void;
  onReset: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="app-header">
      {onBack ? (
        <button className="back-button" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span>
          {backLabel}
        </button>
      ) : null}
      <div className="profile-menu-shell">
        <button
          className="profile-chip"
          type="button"
          aria-label={`Profile menu for ${profileName}`}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{profileName.slice(0, 1)}</span>
          {profileName}
        </button>
        {menuOpen ? (
          <div className="profile-menu">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onReset();
              }}
            >
              Reset demo
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function isDemoState(value: unknown): value is DemoState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<DemoState>;
  return (
    typeof candidate.profileName === "string" &&
    typeof candidate.step === "string" &&
    Boolean(candidate.need) &&
    candidate.need?.id === "rose-hill-sign"
  );
}
