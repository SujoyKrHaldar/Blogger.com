/* eslint-disable react/prop-types */
import SkeletonCard from "../../loading-screen/SkeletonCard";
import { useLocation } from "react-router-dom";
import NoResult from "./NoResult";

function SearchedResult({
  loading,
  data,
  children,
  loadingCardHeight = "h-[400px]",
}) {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const query = searchQuery.get("query");

  return (
    <div className="container py-8 w-full h-full">
      {loading ? (
        <div className="space-y-6">
          <p>
            <span className="font-semibold">{query}</span> searching...
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((data, id) => (
              <SkeletonCard height={loadingCardHeight} key={id} />
            ))}
          </div>
        </div>
      ) : data.length > 0 ? (
        <div className="space-y-6">
          <p>
            <span className="font-semibold">{query}</span>, {data.length} Result
            found
          </p>
          <div className="grid grid-cols-4 gap-2">{children}</div>
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default SearchedResult;
