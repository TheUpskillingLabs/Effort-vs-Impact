import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DemoExperience } from "./demo-experience";

describe("DemoExperience", () => {
  it("completes the Rose Hill need with minimal constituent effort", async () => {
    const user = userEvent.setup();
    render(<DemoExperience />);

    expect(
      screen.getByRole("heading", { name: /your needs, ready to be heard/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /continue with google/i }),
    );
    expect(
      screen.getByRole("heading", { name: /looking for needs/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /view what we found/i }),
    );
    expect(
      screen.getByRole("heading", { name: /needs discovered/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /review fix rose hill sign/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "Notes (optional)" }),
      "Check it on the evening walk.",
    );
    await user.click(
      screen.getByRole("button", { name: /confirm this need/i }),
    );
    expect(screen.getByText(/ready to send/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /review and send/i }),
    );
    expect(
      screen.queryByText("Check it on the evening walk."),
    ).not.toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: /send to district office/i }),
    );
    expect(screen.getByText(/^sent$/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /subscribe to updates/i }),
    );
    expect(screen.getByText(/subscribed/i)).toBeInTheDocument();
  });
});
