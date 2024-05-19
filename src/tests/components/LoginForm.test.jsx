import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import LoginForm from "../../components/LoginForm";

describe("<LoginForm/>", () => {
  test("should render login form and its contents", () => {
    render(<LoginForm />);
    expect(screen.getByText("ProLogin")).toBeDefined();
    expect(
      screen.getByText("Please enter your account details.")
    ).toBeDefined();
    expect(screen.getByText("Login")).toBeDefined();
    expect(screen.getByText("Password")).toBeDefined();
    expect(screen.getByPlaceholderText("Enter your email")).toBeDefined();
    expect(screen.getByPlaceholderText("••••••••••••••")).toBeDefined();
    expect(screen.getByRole("button", { name: "Login" })).toBeDefined();
    expect(
      screen.getByRole("button", { name: "Toggle password visibility" })
    ).toBeDefined();
  });

  test("should show password as text when eye icon is clicked once", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    const passwordInput = screen.getByPlaceholderText("••••••••••••••");
    await user.type(passwordInput, "test");
    await user.click(
      screen.getByRole("button", { name: "Toggle password visibility" })
    );
    expect(passwordInput.type).toEqual("text");
  });

  test("should alert user if email format is incorrect", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByPlaceholderText("Enter your email"), "test");
    await user.click(screen.getByRole("button", { name: "Login" }));
    expect(
      screen.getByText("Please provide a valid email address")
    ).toBeDefined();
  });

  test("should alert user if password format is incorrect", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByPlaceholderText("••••••••••••••"), "test");
    await user.click(screen.getByRole("button", { name: "Login" }));
    expect(
      screen.getByText(
        "The password must include both letters and numbers, and be at least 6 characters long"
      )
    ).toBeDefined();
  });

  test("should alert user if login failed", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(
      screen.getByPlaceholderText("Enter your email"),
      "test@gmail.com"
    );
    await user.type(screen.getByPlaceholderText("••••••••••••••"), "test23232");
    await user.click(screen.getByRole("button", { name: "Login" }));
    expect(screen.getByText("Login failed :(")).toBeDefined();
  });
});
