import { describe, test, expect } from "vitest";
import { authenticateUser } from "../../services/AuthService";

describe("AuthService", () => {
  test("should authenticate when valid credentials are provided", async () => {
    const data = { email: "prologin@prologin.com", password: "ProLogin123456" };
    const response = await authenticateUser(data);
    expect(response).toEqual({ success: true });
  });

  test("should throw error when trying to auth with invalid credentials", async () => {
    const data = { email: "invalid@invalid.com", password: "Invalid123" };
    await expect(authenticateUser(data)).rejects.toThrow("Wrong credentials");
  });
});
