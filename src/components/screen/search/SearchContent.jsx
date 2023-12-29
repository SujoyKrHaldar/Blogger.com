/* eslint-disable react/prop-types */
import SearchInput from "../../shared/SearchInput";
import SearchedPeople from "./SearchedPeople";
import SearchedPost from "./SearchedPost";
import { Link } from "react-router-dom";

const tabs = [
  {
    name: "Articles",
    tab: "article",
  },
  {
    name: "Author",
    tab: "author",
  },
];

function SearchContent({ query, tab }) {
  return (
    <section>
      <div className="w-full border-b border-gray-300 bg-gray-100 pt-12">
        <div className="container space-y-6">
          <SearchInput
            tab={tab}
            query={query}
            placeholder="Search article title, author name ..."
            className="bg-white border border-gray-200 px-4 py-4 rounded-full 
            w-full max-w-2xl"
          />

          <div className="w-full h-fit flex items-end">
            {tabs.map((data) => (
              <Link
                key={data.name}
                to={`/search?query=${query.trim().replaceAll(" ", "+")}&tab=${
                  data.tab
                }`}
              >
                <p
                  className={`py-2 px-8 cursor-pointer border-l border-t border-r duration-300 ease-in-out ${
                    tab === data.tab
                      ? "border-gray-200 bg-white"
                      : "border-transparent bg-transparent"
                  }`}
                >
                  {data.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {tab === "article" && <SearchedPost query={query} />}
      {tab === "author" && <SearchedPeople query={query} />}
    </section>
  );
}

export default SearchContent;
