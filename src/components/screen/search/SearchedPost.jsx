/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSearchPost } from "../../../hooks";
import SkeletonCard from "../../loading-screen/SkeletonCard";
import ArticleCard from "../../shared/ArticleCard";
import NoResult from "./NoResult";

function SearchedPost({ query }) {
  const { loading, post } = useSearchPost(query);

  return (
    <div className="container py-8 w-full h-full">
      {loading ? (
        <div className="space-y-6">
          <p>
            <span className="font-semibold">{query}</span> searching...
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((data, id) => (
              <SkeletonCard key={id} />
            ))}
          </div>
        </div>
      ) : post.length > 0 ? (
        <div className="space-y-6">
          <p>
            <span className="font-semibold">{query}</span>, {post.length} Result
            found
          </p>
          <div className="grid grid-cols-4 gap-2">
            {post.map((data) => (
              <ArticleCard key={data.$id} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default SearchedPost;
