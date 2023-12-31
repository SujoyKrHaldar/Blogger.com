/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconClose, IconSearch } from "../../assets/icons";
import { useQueryParams } from "../../hooks";

function SearchInput({
  placeholder = "Search here",
  className = "px-6 py-1 rounded-full bg-white",
}) {
  const query = useQueryParams("query");
  const tab = useQueryParams("tab");

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState(query || "");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedQuery = searchValue.toLowerCase().trim().replaceAll(" ", "+");
    const searchedTab = tab ? tab : "article";
    navigate(`/search?query=${searchedQuery}&tab=${searchedTab}`);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className={`text-2xl text-black duration-200 ease-in-out ${
          searchValue.length > 0 ? "opacity-100" : "opacity-30"
        }`}
      >
        <IconSearch />
      </div>
      <form className="w-full" onSubmit={(e) => handleSearch(e)}>
        <input
          autoFocus={true}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
          className="outline-none placeholder:text-gray-500 placeholder:text-sm text-base text-gray-700 bg-transparent w-full h-full"
        />
      </form>

      <div
        onClick={() => setSearchValue("")}
        className={`text-2xl text-gray-500 duration-200 ease-in-out cursor-pointer ${
          searchValue.length > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <IconClose />
      </div>
    </div>
  );
}

export default SearchInput;
