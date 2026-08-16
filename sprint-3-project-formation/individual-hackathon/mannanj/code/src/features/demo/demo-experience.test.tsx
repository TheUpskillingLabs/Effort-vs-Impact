import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DemoExperience } from "./demo-experience";

describe("DemoExperience", () => {
  it("completes the Rose Hill need with minimal constituent effort", async () => {
    const user = userEvent.setup();
    render(<DemoExperience />);

    expect(
      screen.queryByRole("heading", { name: /your needs, ready to be heard/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/uses example information/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/a constituent needs demo/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /skip sign-in/i }),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /continue with google/i }),
    );
    expect(
      screen.getByRole("heading", { name: /scanning for needs/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/working from your information/i),
    ).not.toBeInTheDocument();

    await user.click(
      await screen.findByRole(
        "button",
        { name: /check my results/i },
        { timeout: 3_500 },
      ),
    );
    expect(
      screen.getByRole("heading", { name: /unverified needs/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /a clearer signal/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/confirmed by you/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/waiting for your review/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("01", { exact: true })).not.toBeInTheDocument();
    expect(screen.queryByText("02", { exact: true })).not.toBeInTheDocument();
    expect(
      screen.queryByText("Your civic needs", { exact: true }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Possible need", { exact: true })).not.toBeInTheDocument();
    expect(
      screen.queryByText("Most details already prepared", { exact: true }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /actions and updates/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Next action", { exact: true })).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^review →$/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Latest updates", { exact: true })).toBeInTheDocument();
    expect(screen.getByText("Bus stop lighting", { exact: true })).toBeInTheDocument();
    expect(screen.getByText("Crosswalk timing", { exact: true })).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /review fix rose hill sign/i }),
    );
    expect(
      screen.queryByLabelText(/need review progress/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("1 of 1", { exact: true })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^back$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^discard$/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /dismiss this need/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^verify$/i })).toBeInTheDocument();
    expect(screen.queryByText("Possible need", { exact: true })).not.toBeInTheDocument();
    expect(
      screen.queryByText(/we prepared the useful details/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Prepared for you", { exact: true })).not.toBeInTheDocument();
    expect(screen.queryByText("Enough to act on", { exact: true })).not.toBeInTheDocument();
    expect(screen.queryByText("Make a correction", { exact: true })).not.toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /include your name/i }),
    ).not.toBeChecked();
    expect(
      screen.getByRole("checkbox", { name: /include your email/i }),
    ).not.toBeChecked();
    expect(
      screen.getByRole("checkbox", { name: /include your address/i }),
    ).not.toBeChecked();

    await user.click(
      screen.getByRole("button", { name: /edit what is happening/i }),
    );
    expect(
      screen.getByRole("textbox", { name: "What is happening" }),
    ).toHaveValue(
      "The Rose Hill neighborhood sign is damaged and difficult to read from the road.",
    );
    await user.clear(
      screen.getByRole("textbox", { name: "What is happening" }),
    );
    await user.type(
      screen.getByRole("textbox", { name: "What is happening" }),
      "The Rose Hill sign is damaged.",
    );
    await user.type(
      screen.getByRole("textbox", { name: "Notes (optional)" }),
      "Check it on the evening walk.",
    );
    await user.click(
      screen.getByRole("checkbox", { name: /include your name/i }),
    );
    await user.click(
      screen.getByRole("checkbox", { name: /include your email/i }),
    );
    await user.click(
      screen.getByRole("checkbox", { name: /include your address/i }),
    );
    await user.click(
      screen.getByRole("button", { name: /^verify$/i }),
    );
    expect(screen.queryByText(/^ready to send$/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /^review and send fix rose hill sign$/i,
      }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /^review and send fix rose hill sign$/i,
      }),
    );
    expect(
      screen.getByRole("textbox", { name: "Notes (optional)" }),
    ).toHaveValue("Check it on the evening walk.");
    expect(
      screen.getByRole("button", { name: /edit what is happening/i }),
    ).toHaveTextContent("The Rose Hill sign is damaged.");
    expect(
      screen.getByRole("checkbox", { name: /include your name/i }),
    ).toBeChecked();
    expect(
      screen.getByRole("checkbox", { name: /include your email/i }),
    ).toBeChecked();
    expect(
      screen.getByRole("checkbox", { name: /include your address/i }),
    ).toBeChecked();
    expect(
      screen.queryByRole("heading", { name: /one clear request/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/review exactly what your district office/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/demo only—no message will be sent/i),
    ).not.toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: /send to district office/i }),
    );
    expect(screen.getByText(/^sent$/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /subscribe to updates/i }),
    );
    expect(screen.getByText(/subscribed/i)).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: /reset demo/i }),
    ).not.toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: /profile menu for mannan/i }),
    );
    await user.click(screen.getByRole("button", { name: /reset demo/i }));
    expect(
      screen.getByRole("button", { name: /continue with google/i }),
    ).toBeInTheDocument();
  });

  it("decodes the analysis steps one at a time", () => {
    vi.useFakeTimers();

    try {
      render(<DemoExperience />);
      fireEvent.click(
        screen.getByRole("button", { name: /continue with google/i }),
      );

      expect(
        screen.queryByText("Organizing places and recurring experiences"),
      ).not.toBeInTheDocument();

      act(() => vi.advanceTimersByTime(1_000));
      expect(
        screen.getByText("Organizing places and recurring experiences"),
      ).toBeInTheDocument();
      expect(
        screen.queryByText("Matching possible needs to local responsibilities"),
      ).not.toBeInTheDocument();

      act(() => vi.advanceTimersByTime(900));
      expect(
        screen.getByText("Matching possible needs to local responsibilities"),
      ).toBeInTheDocument();
      expect(
        screen.queryByText("Preparing the details an office would need"),
      ).not.toBeInTheDocument();

      act(() => vi.advanceTimersByTime(900));
      expect(
        screen.getByText("Preparing the details an office would need"),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /check my results/i }),
      ).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });
});
