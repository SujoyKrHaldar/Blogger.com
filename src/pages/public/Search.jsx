import { useLocation } from "react-router-dom";
import { MetaTags, SearchInput } from "../../components";

function Search() {
  let query;

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);

  query = searchQuery.get("query");

  return (
    <>
      <MetaTags title="Search millions of blogs" conicalRoute="/search" />

      {/* <section className="min-h-full">
        <div className="h-[300px]">
          <div className="absolute inset-0 w-full h-full border-b border-gray-500">
            <Image src="https://images.unsplash.com/photo-1632096936824-565d39f8e5eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>

          <div className="container w-full h-full flex items-end justify-center">
            <div className="text-center w-full">
              <h1 className="text-white ">{query || "Search Blogger"}</h1>

              <div
                className="w-full max-w-xl mx-auto flex items-center gap-4 bg-white px-6 py-4 rounded-full 
            border border-black translate-y-[25px] "
              >
                <div className="text-2xl text-black">
                  <IoIosSearch />
                </div>
                <form className="w-full" onSubmit={(e) => handleSearch(e)}>
                  <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search"
                    className="outline-none placeholder:text-gray-500  w-full"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="flex items-center">
        <div className="container w-full">
          <div className="space-y-8 text-center mb-8">
            <h1 className=" text-8xl font-bold text-green-800">Blogger</h1>

            <SearchInput
              query={query}
              placeholder="Search your posts here"
              className="w-full max-w-xl mx-auto px-6 py-4 rounded-full 
             bg-white border-2 border-black"
            />
          </div>
        </div>

        <div className="bg-white w-full h-[70px] absolute bottom-0 border-t border-b border-gray-500 py-4"></div>
      </section>
    </>
  );
}

export default Search;
