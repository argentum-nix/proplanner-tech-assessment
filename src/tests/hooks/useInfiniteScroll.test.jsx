import { describe, test, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import {
  observe,
  intersectionCallback,
  MockIntersectionObserver,
} from "../mocks/IntersectionObserver.mock";

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

describe("useInfiniteScroll hook", () => {
  test("should call the callback when the observed element is intersecting", () => {
    const mockCallback = vi.fn();
    const { result } = renderHook(() => useInfiniteScroll(mockCallback));
    const node = document.createElement("div");
    act(() => {
      result.current(node);
      intersectionCallback([{ isIntersecting: true }]);
    });
    expect(observe).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalled();
  });
});
