/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSearchPost, useSearchProfile } from "../../../hooks";
import ArticleCard from "../../shared/ArticleCard";
import SearchInput from "../../shared/SearchInput";
import UserCard from "../../shared/UserCard";
import SearchedResult from "./SearchedResult";

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
  const { loading: loadingPost, post } = useSearchPost(query);
  const { loading: loadingPeople, author } = useSearchProfile(query);

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

      {tab === "article" && (
        <SearchedResult data={post} loading={loadingPost}>
          {post.map((data) => (
            <ArticleCard key={data.$id} data={data} />
          ))}
        </SearchedResult>
      )}

      {tab === "author" && (
        <SearchedResult
          data={author}
          loading={loadingPeople}
          loadingCardHeight="h-[300px]"
        >
          {author.map((data) => (
            <UserCard key={data.$id} user={data} />
          ))}
        </SearchedResult>
      )}
    </section>
  );
}

export default SearchContent;
