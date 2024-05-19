import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("<Alert/>", () => {
  test("should render error alert and its contents", () => {
    render(
      <Alert
        message={"Alert message body"}
        header={"Alert header"}
        type={"error"}
      />
    );
    expect(screen.getByText("Alert header")).toBeDefined();
    expect(screen.getByText("Alert message body")).toBeDefined();
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByRole("img", { hidden: true }).className).toContain(
      "fa-circle-xmark"
    );
  });

  test("should render warning alert and its contents", () => {
    render(
      <Alert
        message={"Alert message body"}
        header={"Alert header"}
        type={"warning"}
      />
    );
    expect(screen.getByText("Alert header")).toBeDefined();
    expect(screen.getByText("Alert message body")).toBeDefined();
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByRole("img", { hidden: true }).className).toContain(
      "fa-triangle-exclamation"
    );
  });

  test("should fallback to error type alert when no valid type is provided", () => {
    render(<Alert message={"Alert message body"} type={"someUndefinedType"} />);
    expect(screen.getByText("Alert message body")).toBeDefined();
    expect(screen.getByRole("img", { hidden: true })).toBeDefined();
    expect(screen.getByRole("img", { hidden: true }).className).toContain(
      "fa-circle-xmark"
    );
  });
});
