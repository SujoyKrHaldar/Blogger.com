import { Link } from "react-router-dom";
import { useQueryParams } from "../../../hooks";

function SearchNavbar() {
  const query = useQueryParams("query");
  const tab = useQueryParams("tab");

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

  return (
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
  );
}

export default SearchNavbar;
