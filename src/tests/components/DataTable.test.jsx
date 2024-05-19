import { describe, test, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import DataTable from "../../components/DataTable";
import { MockIntersectionObserver } from "../mocks/IntersectionObserver.mock";
import { createFetchResponse } from "../mocks/fetch.mock";

global.fetch = vi.fn();
vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

describe("<DataTable/>", () => {
  test("should render data table and its contents", async () => {
    const expectedResult = [
      {
        id: 1,
        postId: 1,
        name: "name1",
        email: "email1",
        body: "some body text1",
      },
      {
        id: 2,
        postId: 2,
        name: "name2",
        email: "email2",
        body: "some body text2",
      },
      {
        id: 3,
        postId: 3,
        name: "name3",
        email: "email3",
        body: "some body text3",
      },
    ];
    fetch.mockResolvedValue(createFetchResponse(expectedResult));
    await act(async () => {
      render(<DataTable />);
    });
    expect(screen.getByText("1")).toBeDefined();
    expect(screen.getByText("name1")).toBeDefined();
    expect(screen.getByText("email1")).toBeDefined();
    expect(screen.getByText("2")).toBeDefined();
    expect(screen.getByText("name2")).toBeDefined();
    expect(screen.getByText("email2")).toBeDefined();
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText("name3")).toBeDefined();
    expect(screen.getByText("email3")).toBeDefined();
  });

  test("should render error alert if service responds with an error", async () => {
    fetch.mockRejectedValue(new Error("Fetch error"));
    await act(async () => {
      render(<DataTable />);
    });
    expect(screen.getByText("Failed to fetch the data")).toBeDefined();
  });
});
