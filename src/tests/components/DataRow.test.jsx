import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import DataRow from "../../components/DataRow";

const mockData = { id: 1, name: "Name Surname", email: "email@somedomain.com" };

describe("<DataRow/>", () => {
  test("should render table row and its contents", () => {
    render(<DataRow data={mockData} />);
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("Name Surname")).toBeDefined();
    expect(screen.getByText("email@somedomain.com")).toBeDefined();
    expect(
      screen.getByRole("button", { "aria-label": "Show more" })
    ).toBeDefined();
    expect(screen.getByRole("img", { hidden: true }).className).toContain(
      "fa-eye"
    );
  });

  test("should render a modal when the eye button is clicked", async () => {
    const user = userEvent.setup();
    render(<DataRow data={mockData} />);
    await user.click(screen.getByRole("button", { "aria-label": "Show more" }));
    expect(screen.getByRole("dialog"));
  });
});
