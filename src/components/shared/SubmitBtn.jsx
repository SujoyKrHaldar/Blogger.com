/* eslint-disable react/prop-types */
function SubmitBtn({
  loading,
  error = null,
  defaultIcon = "",
  btnText = "Submit",
  textOnLoad = "Please wait",
  loader = null,
  className = "bg-green-800 text-white rounded-full",
}) {
  return (
    <button
      type="submit"
      className={`w-full px-5 pt-4 pb-4 flex items-center gap-3 justify-center
      ${error ? "opacity-60 pointer-events-none" : "opacity-100 cursor-pointer"}
      ${className}`}
    >
      {loading ? (
        !loader ? (
          <div className="animate-spin h-4 w-4 border-2 border-gray-500 border-l-white rounded-full"></div>
        ) : null
      ) : (
        <div className="text-gray-100 text-md pt-[0.7px]">{defaultIcon}</div>
      )}
      <p className="text-sm">{loading ? textOnLoad : btnText}</p>
    </button>
  );
}

export default SubmitBtn;
