import { useLocation } from "react-router-dom";
import { MetaTags, SearchContent, SearchDefault } from "../../components";

function Search() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const query = searchQuery.get("query");
  const tab = searchQuery.get("tab");

  return (
    <>
      <MetaTags title="Search millions of blogs" conicalRoute="/search" />
      {query && tab ? (
        <SearchContent query={query} tab={tab} />
      ) : (
        <SearchDefault />
      )}
    </>
  );
}

export default Search;
