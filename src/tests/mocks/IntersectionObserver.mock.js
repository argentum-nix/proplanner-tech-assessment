import { vi } from "vitest";

const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();
let intersectionCallback;

const MockIntersectionObserver = vi.fn((callback) => {
  intersectionCallback = callback;
  return {
    observe,
    unobserve,
    disconnect,
  };
});

export {
  observe,
  unobserve,
  disconnect,
  intersectionCallback,
  MockIntersectionObserver,
};
