import { describe, test, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useComments } from "../../hooks/useComments";
import { createFetchResponse } from "../mocks/fetch.mock";

global.fetch = vi.fn();

describe("useComments hook", () => {
  test("call CommentService and try return up to 25 comments", async () => {
    const expectedResult = [
      {
        id: 1,
        postId: 1,
        name: "name1",
        email: "email1",
        body: "some body text1",
      },
    ];
    fetch.mockResolvedValue(createFetchResponse(expectedResult));
    const { result } = renderHook(() => useComments());
    await act(async () => {
      await result.current.fetchMoreComments();
    });
    expect(result.current.comments).toStrictEqual(expectedResult);
    expect(result.current.error).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=25"
    );
  });

  test("return an error if the service could not fetch the data", async () => {
    fetch.mockRejectedValue(new Error("Fetch error"));
    const { result } = renderHook(() => useComments());
    await act(async () => {
      await result.current.fetchMoreComments();
    });
    expect(result.current.comments).toStrictEqual([]);
    expect(result.current.error).toEqual("Failed to fetch the data");
  });
});
