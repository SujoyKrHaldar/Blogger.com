import { MetaTags, SearchContent, SearchDefault } from "../../components";
import { useQueryParams } from "../../hooks";

function Search() {
  const query = useQueryParams("query");
  const tab = useQueryParams("tab");

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
