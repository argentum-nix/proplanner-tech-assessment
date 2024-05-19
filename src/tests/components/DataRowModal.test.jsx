import { describe, test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import DataRowModal from "../../components/DataRowModal";

const mockData = {
  id: 1,
  name: "Name Surname",
  email: "email@somedomain.com",
  body: "Model body content",
};

describe("<DataRowModal/>", () => {
  test("should render modal and its contents", () => {
    render(<DataRowModal data={mockData} />);
    expect(screen.getByText("Details")).toBeDefined();
    expect(screen.getByText("Fields:")).toBeDefined();
    expect(screen.getByText("ID")).toBeDefined();
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("Name")).toBeDefined();
    expect(screen.getByText("Name Surname")).toBeDefined();
    expect(screen.getByText("Email")).toBeDefined();
    expect(screen.getByText("email@somedomain.com")).toBeDefined();
    expect(screen.getByText("Body:")).toBeDefined();
    expect(screen.getByText("Model body content")).toBeDefined();
    expect(screen.getByRole("button", { "aria-label": "Close" })).toBeDefined();
    expect(screen.getByRole("img", { hidden: true }).className).toContain(
      "fa-xmark"
    );
  });

  test("should call onClose function when the close button is clicked", async () => {
    const user = userEvent.setup();
    const mockOnClose = vi.fn();
    render(<DataRowModal data={mockData} onClose={mockOnClose} />);
    await user.click(screen.getByRole("button", { "aria-label": "Close" }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
