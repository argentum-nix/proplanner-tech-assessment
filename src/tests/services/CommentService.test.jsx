import { describe, test, expect, vi } from "vitest";
import { getCommentsByRange } from "../../services/CommentService";
import { createFetchResponse } from "../mocks/fetch.mock";

global.fetch = vi.fn();

describe("CommentService", () => {
  test("make a GET request and return the resulting data", async () => {
    const expectedResult = [
      {
        id: 1,
        postId: 1,
        name: "name 1",
        email: "email1",
        body: "some body text 1",
      },
      {
        id: 2,
        postId: 2,
        name: "name 2",
        email: "email2",
        body: "some body text 2",
      },
      {
        id: 3,
        postId: 3,
        name: "name 3",
        email: "email3",
        body: "some body text 3",
      },
    ];
    fetch.mockResolvedValue(createFetchResponse(expectedResult));
    const comments = await getCommentsByRange(0, 3);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/comments?_start=0&_limit=3"
    );
    expect(comments).toStrictEqual(expectedResult);
  });
});
