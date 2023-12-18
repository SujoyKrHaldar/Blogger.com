/* eslint-disable react/prop-types */
import { IconError, IconClose } from "../../assets/icons";

function ShowError({ error, errorMessage, closeError }) {
  return (
    <div
      className={`w-full px-5 pr-3 bg-red-500 text-white rounded-lg duration-200 ease-in-out
    ${error ? "pt-3 pb-4 h-auto opacity-100" : "py-0 h-0 opacity-0"}`}
    >
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IconError />
            <p className="text-sm font-semibold">Something went wrong</p>
          </div>
          <div
            onClick={closeError}
            className="rounded-full duration-200 hover:bg-red-400 p-1 cursor-pointer"
          >
            <IconClose />
          </div>
        </div>
        <p className="text-xs">{errorMessage}</p>
      </div>
    </div>
  );
}

export default ShowError;
