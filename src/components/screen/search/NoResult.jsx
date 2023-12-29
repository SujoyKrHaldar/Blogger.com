import Image from "../../shared/Image";

function NoResult() {
  return (
    <div className="text-center space-y-4 py-8">
      <div className="w-[250px] h-auto mx-auto">
        <Image src="./no-result.png" />
      </div>
      <h2 className="text-2xl font-bold">Sorry, No result found</h2>
      <p className="max-w-lg mx-auto  leading-7">
        Make sure all words are spelled correctly. Try different keywords. Try
        more general keywords.
      </p>
    </div>
  );
}

export default NoResult;
