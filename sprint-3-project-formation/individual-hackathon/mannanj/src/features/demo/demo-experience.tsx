"use client";

import { useEffect, useReducer, useState } from "react";

import {
  buildShareableNeed,
  demoReducer,
  initialDemoState,
  type CivicNeed,
  type DemoAction,
  type DemoState,
} from "./demo-machine";

const STORAGE_KEY = "constituent-needs-demo";

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
      <section className="welcome-panel" aria-labelledby="welcome-title">
        <p className="eyebrow">A constituent needs demo</p>
        <h1 id="welcome-title">Your needs, ready to be heard.</h1>
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
          <button
            className="button-link"
            type="button"
            onClick={() => dispatch({ type: "startAnalysis" })}
          >
            Skip sign-in and explore
          </button>
        </div>
        <p className="demo-caption">Uses example information. Nothing is uploaded.</p>
      </section>
    </main>
  );
}

function AnalysisScreen({ dispatch }: ScreenProps) {
  return (
    <main className="analysis-screen view-enter">
      <section className="analysis-panel" aria-labelledby="analysis-title">
        <div className="analysis-orbit" aria-hidden="true">
          <span />
        </div>
        <p className="eyebrow">Working from your information</p>
        <h1 id="analysis-title">Looking for needs you should not have to explain from scratch.</h1>
        <ul className="analysis-list" aria-label="Analysis progress">
          <li>
            <span aria-hidden="true">01</span>
            Organizing places and recurring experiences
          </li>
          <li>
            <span aria-hidden="true">02</span>
            Matching possible needs to local responsibilities
          </li>
          <li>
            <span aria-hidden="true">03</span>
            Preparing the details an office would need
          </li>
        </ul>
        <button
          className="button button-primary"
          type="button"
          onClick={() => dispatch({ type: "finishAnalysis" })}
        >
          View what we found
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </main>
  );
}

function HomeScreen({ state, dispatch }: SignedInScreenProps) {
  const { need } = state;
  const isMine = need.status === "confirmed" || need.status === "sent";

  return (
    <div className="app-frame view-enter">
      <AppHeader profileName={state.profileName} />
      <main className="dashboard">
        <section className="dashboard-intro" aria-labelledby="home-title">
          <p className="eyebrow">Home</p>
          <h1 id="home-title">A clearer signal, without another form.</h1>
          <p>
            We prepared what we could. You only need to check that we got it
            right.
          </p>
        </section>

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

        <section className="needs-section" aria-labelledby="my-needs-title">
          <div className="section-heading">
            <div>
              <p className="section-index">01</p>
              <h2 id="my-needs-title">My needs</h2>
            </div>
            <p>Confirmed by you</p>
          </div>

          {isMine ? (
            <NeedCard need={need} dispatch={dispatch} />
          ) : (
            <div className="empty-state">
              <p>Nothing confirmed yet.</p>
              <span>A need you confirm will stay here.</span>
            </div>
          )}
        </section>

        <section className="needs-section" aria-labelledby="discovered-title">
          <div className="section-heading">
            <div>
              <p className="section-index">02</p>
              <h2 id="discovered-title">Needs discovered</h2>
            </div>
            <p>Waiting for your review</p>
          </div>

          {need.status === "discovered" ? (
            <article className="need-card need-card-discovered">
              <div className="need-card-copy">
                <p className="status-label">Possible need</p>
                <h3>{need.title}</h3>
                <p>{need.summary}</p>
              </div>
              <div className="need-card-action">
                <span>Most details already prepared</span>
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

        <button
          className="reset-button"
          type="button"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset demo
        </button>
      </main>
    </div>
  );
}

function NeedCard({ need, dispatch }: { need: CivicNeed } & ScreenProps) {
  const isSent = need.status === "sent";

  return (
    <article className="need-card">
      <div className="need-card-copy">
        <div className="status-row">
          <p className="status-label">{isSent ? "Sent" : "Ready to send"}</p>
          {isSent && need.sentAt ? <span>{need.sentAt}</span> : null}
        </div>
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
        backLabel="Back to home"
        onBack={() => dispatch({ type: "goHome" })}
      />
      <main className="flow-page">
        <div className="flow-progress" aria-label="Need review progress">
          <span>Review</span>
          <span>1 of 1</span>
        </div>
        <section className="flow-heading" aria-labelledby="need-title">
          <p className="eyebrow">Possible need</p>
          <h1 id="need-title">{need.title}</h1>
          <p>We prepared the useful details. Check them, then confirm.</p>
        </section>

        <section className="prepared-card" aria-labelledby="prepared-title">
          <div className="prepared-heading">
            <h2 id="prepared-title">Prepared for you</h2>
            <span>Enough to act on</span>
          </div>
          <dl className="need-summary">
            <SummaryRow label="What is happening" value={need.summary} />
            <SummaryRow label="Where" value={need.location} />
            <SummaryRow label="What you need" value={need.outcome} />
            <SummaryRow label="Category" value={need.category} />
            <SummaryRow label="Best destination" value={need.destination} />
          </dl>

          <details className="correction-panel">
            <summary>Make a correction</summary>
            <div className="correction-fields">
              <label>
                What is happening
                <textarea
                  value={need.summary}
                  onChange={(event) =>
                    dispatch({
                      type: "setDetails",
                      summary: event.target.value,
                      location: need.location,
                      outcome: need.outcome,
                    })
                  }
                />
              </label>
              <label>
                Where
                <input
                  value={need.location}
                  onChange={(event) =>
                    dispatch({
                      type: "setDetails",
                      summary: need.summary,
                      location: event.target.value,
                      outcome: need.outcome,
                    })
                  }
                />
              </label>
              <label>
                What you need
                <textarea
                  value={need.outcome}
                  onChange={(event) =>
                    dispatch({
                      type: "setDetails",
                      summary: need.summary,
                      location: need.location,
                      outcome: event.target.value,
                    })
                  }
                />
              </label>
            </div>
          </details>
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
          <button
            className="button button-primary"
            type="button"
            disabled={!isValid}
            onClick={() => dispatch({ type: "confirmNeed" })}
          >
            Confirm this need
            <span aria-hidden="true">→</span>
          </button>
          <button
            className="button-link button-link-muted"
            type="button"
            onClick={() => dispatch({ type: "dismissNeed" })}
          >
            This is not a need for me
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
      />
      <main className="flow-page share-page">
        <div className="flow-progress" aria-label="Send progress">
          <span>Share</span>
          <span>Final review</span>
        </div>
        <section className="flow-heading" aria-labelledby="share-title">
          <p className="eyebrow">Ready to send</p>
          <h1 id="share-title">One clear request, already prepared.</h1>
          <p>Review exactly what your district office would receive.</p>
        </section>

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
          <span className="demo-disclosure">
            Demo only—no message will be sent.
          </span>
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

function AppHeader({
  profileName,
  backLabel,
  onBack,
}: {
  profileName: string;
  backLabel?: string;
  onBack?: () => void;
}) {
  return (
    <header className="app-header">
      <div>
        {onBack ? (
          <button className="back-button" type="button" onClick={onBack}>
            <span aria-hidden="true">←</span>
            {backLabel}
          </button>
        ) : (
          <span className="header-context">Your civic needs</span>
        )}
      </div>
      <div className="profile-chip" aria-label={`Signed in as ${profileName}`}>
        <span aria-hidden="true">{profileName.slice(0, 1)}</span>
        {profileName}
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
