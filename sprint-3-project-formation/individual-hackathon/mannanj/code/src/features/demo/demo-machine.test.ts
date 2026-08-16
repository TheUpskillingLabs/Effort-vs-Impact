import { buildShareableNeed, demoReducer, initialDemoState } from "./demo-machine";

describe("demoReducer", () => {
  it("moves the prepared need from discovered to confirmed to sent", () => {
    const confirmed = demoReducer(initialDemoState, { type: "confirmNeed" });
    expect(confirmed.need.status).toBe("confirmed");

    const sent = demoReducer(confirmed, {
      type: "sendNeed",
      sentAt: "August 15",
    });
    expect(sent.need.status).toBe("sent");
    expect(sent.need.sentAt).toBe("August 15");
  });

  it("keeps personal notes out of the office share model", () => {
    const withNotes = demoReducer(initialDemoState, {
      type: "setNotes",
      notes: "Remember to check the sign after work.",
    });

    expect(withNotes.need.notes).toBe("Remember to check the sign after work.");
    expect(buildShareableNeed(withNotes.need)).not.toHaveProperty("notes");
  });

  it("shares only the contact details the constituent selects", () => {
    const withName = demoReducer(initialDemoState, {
      type: "setIncludedContact",
      field: "name",
      included: true,
    });
    const withNameAndEmail = demoReducer(withName, {
      type: "setIncludedContact",
      field: "email",
      included: true,
    });

    expect(buildShareableNeed(withNameAndEmail.need).contact).toEqual({
      name: "Mannan",
      email: "mannan@example.com",
    });
    expect(buildShareableNeed(withNameAndEmail.need).contact).not.toHaveProperty(
      "address",
    );
  });

  it("records update subscription and restores the initial demo", () => {
    const subscribed = demoReducer(initialDemoState, { type: "subscribe" });
    expect(subscribed.need.subscribed).toBe(true);
    expect(demoReducer(subscribed, { type: "reset" })).toEqual(initialDemoState);
  });
});
