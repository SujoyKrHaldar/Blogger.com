import SearchInput from "../../shared/SearchInput";

function SearchDefault() {
  return (
    <section className="flex items-center">
      <div className="container w-full">
        <div className="space-y-8 text-center -mt-24">
          <h1 className=" text-8xl font-bold text-green-800">Blogger</h1>

          <SearchInput
            placeholder="Search your posts here"
            className="w-full max-w-xl mx-auto px-6 py-4 rounded-full 
             bg-white border-2 border-black"
          />
        </div>
      </div>

      <div className="bg-white w-full h-[70px] absolute bottom-0 border-t border-b border-gray-500 py-4"></div>
    </section>
  );
}

export default SearchDefault;
