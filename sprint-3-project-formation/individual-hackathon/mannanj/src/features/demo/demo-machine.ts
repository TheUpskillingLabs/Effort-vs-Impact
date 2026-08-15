export type DemoStep = "welcome" | "analyzing" | "home" | "review" | "share";

export type NeedStatus = "discovered" | "confirmed" | "sent" | "dismissed";

export type CivicNeed = {
  id: "rose-hill-sign";
  title: string;
  summary: string;
  location: string;
  outcome: string;
  category: string;
  destination: string;
  notes: string;
  status: NeedStatus;
  subscribed: boolean;
  sentAt: string | null;
};

export type DemoState = {
  step: DemoStep;
  profileName: string;
  need: CivicNeed;
};

export type DemoAction =
  | { type: "startAnalysis" }
  | { type: "finishAnalysis" }
  | { type: "openNeed" }
  | { type: "setDetails"; summary: string; location: string; outcome: string }
  | { type: "setNotes"; notes: string }
  | { type: "confirmNeed" }
  | { type: "openShare" }
  | { type: "sendNeed"; sentAt: string }
  | { type: "subscribe" }
  | { type: "goHome" }
  | { type: "dismissNeed" }
  | { type: "undoDismiss" }
  | { type: "hydrate"; state: DemoState }
  | { type: "reset" };

export const initialDemoState: DemoState = {
  step: "welcome",
  profileName: "Mannan",
  need: {
    id: "rose-hill-sign",
    title: "Fix Rose Hill sign",
    summary:
      "The Rose Hill neighborhood sign is damaged and difficult to read from the road.",
    location: "Rose Hill Drive & Franconia Road, Alexandria, VA 22310",
    outcome: "Repair or replace the sign so the neighborhood entrance is clear again.",
    category: "Neighborhood maintenance",
    destination: "Franconia District constituent services",
    notes: "",
    status: "discovered",
    subscribed: false,
    sentAt: null,
  },
};

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case "startAnalysis":
      return { ...state, step: "analyzing" };
    case "finishAnalysis":
      return { ...state, step: "home" };
    case "openNeed":
      return { ...state, step: "review" };
    case "setDetails":
      return {
        ...state,
        need: {
          ...state.need,
          summary: action.summary,
          location: action.location,
          outcome: action.outcome,
        },
      };
    case "setNotes":
      return { ...state, need: { ...state.need, notes: action.notes } };
    case "confirmNeed":
      return {
        ...state,
        step: "home",
        need: { ...state.need, status: "confirmed" },
      };
    case "openShare":
      return { ...state, step: "share" };
    case "sendNeed":
      return {
        ...state,
        step: "home",
        need: { ...state.need, status: "sent", sentAt: action.sentAt },
      };
    case "subscribe":
      return {
        ...state,
        need: { ...state.need, subscribed: true },
      };
    case "goHome":
      return { ...state, step: "home" };
    case "dismissNeed":
      return {
        ...state,
        step: "home",
        need: { ...state.need, status: "dismissed" },
      };
    case "undoDismiss":
      return {
        ...state,
        need: { ...state.need, status: "discovered" },
      };
    case "hydrate":
      return action.state;
    case "reset":
      return initialDemoState;
  }
}

export function buildShareableNeed(need: CivicNeed) {
  return {
    title: need.title,
    summary: need.summary,
    location: need.location,
    outcome: need.outcome,
    category: need.category,
    destination: need.destination,
    constituent: initialDemoState.profileName,
  };
}
