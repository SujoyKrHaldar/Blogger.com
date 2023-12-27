/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconClose, IconSearch } from "../../assets/icons";

function SearchInput({
  query,
  placeholder = "Search here",
  className = "px-6 py-1 rounded-full bg-white",
}) {
  const [searchValue, setSearchValue] = useState(query || "");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search?query=" + searchValue.trim().replaceAll(" ", "+"));
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
