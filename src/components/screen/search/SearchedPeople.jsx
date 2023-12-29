/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useSearchProfile } from "../../../hooks";
import SkeletonCard from "../../loading-screen/SkeletonCard";
import UserCard from "../../shared/UserCard";
import NoResult from "./NoResult";

function SearchedPeople({ query }) {
  const { loading, author } = useSearchProfile(query);

  return (
    <div className="container py-8 w-full h-full">
      {loading ? (
        <div className="space-y-6">
          <p>
            <span className="font-semibold">{query}</span> searching...
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((data, id) => (
              <SkeletonCard height="h-[300px]" key={id} />
            ))}
          </div>
        </div>
      ) : author.length > 0 ? (
        <div className="space-y-6">
          <p>
            <span className="font-semibold">{query}</span>, {author.length}{" "}
            Result found
          </p>
          <div className="grid grid-cols-4 gap-2">
            {author.map((data) => (
              <UserCard key={data.$id} user={data} />
            ))}
          </div>
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default SearchedPeople;
