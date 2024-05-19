import DataRow from "../components/DataRow";
import { useComments } from "../hooks/useComments";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import Alert from "./Alert";

const DataTable = () => {
  const { comments, error, fetchMoreComments } = useComments();
  const lastCommentRef = useInfiniteScroll(fetchMoreComments);

  return (
    <div className="max-h-[800px] overflow-auto bg-white shadow-md flex flex-col px-2 py-1 rounded-md">
      {error ? (
        <Alert message={error} />
      ) : (
        comments.map((d, index) => {
          if (index === comments.length - 1) {
            return <DataRow innerRef={lastCommentRef} key={d.id} data={d} />;
          } else {
            return <DataRow key={d.id} data={d} />;
          }
        })
      )}
    </div>
  );
};

export default DataTable;
