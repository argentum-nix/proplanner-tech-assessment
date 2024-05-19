import { useEffect, useState } from "react";
import { getCommentsByRange } from "../services/CommentService";

export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 25;

  useEffect(() => {
    fetchMoreComments();
  }, []);

  const fetchMoreComments = async () => {
    if (!hasMore) return;

    try {
      const data = await getCommentsByRange(start, limit);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setComments([...comments, ...data]);
        setStart(start + limit);
      }
    } catch (error) {
      setHasMore(false);
      setError("Failed to fetch the data");
    }
  };

  return { comments, error, fetchMoreComments };
};
