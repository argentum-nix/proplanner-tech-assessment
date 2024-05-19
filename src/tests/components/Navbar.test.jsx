import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("<Navbar/>", () => {
  test("should render navbar and its contents", () => {
    render(<Navbar />);
    expect(screen.getByText("ProPlanner")).toBeDefined();
    expect(screen.getByRole("button", { name: /Logout/ })).toBeDefined();
  });
});
