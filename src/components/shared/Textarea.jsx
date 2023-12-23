/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useId } from "react";
import { IconError } from "../../assets/icons";

const Textarea = forwardRef(
  (
    {
      label,
      className = "rounded-2xl",
      description = "",
      error = null,
      errorMessage = "",
      resize = "resize-none",
      maxLength = "100",
      rows="3",
      ...props
    },
    ref
  ) => {
    const id = useId();

    return (
      <>
        <div className="w-full space-y-2">
          {label && (
            <label htmlFor={id} className="font-semibold">
              {label}
            </label>
          )}

          <div className="space-y-2">
            <textarea
              rows={rows}
              maxLength={maxLength}
              id={id}
              ref={ref}
              {...props}
              className={`px-5 py-3 block w-full h-full border outline-none placeholder:font-light 
              placeholder:text-sm font-regular ${className} ${resize}
              ${
                error
                  ? "border-2 border-red-600 text-red-600 placeholder:text-red-600"
                  : "border-black text-black placeholder:text-gray-800"
              } `}
            />

            {description && !error && (
              <p className="text-xs text-gray-500">{description}</p>
            )}
          </div>

          {error && errorMessage && (
            <div className="flex items-center gap-1">
              <div className="text-red-600">
                <IconError />
              </div>
              <p className="w-fit text-red-600 text-xs font-medium">
                {errorMessage}
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
);

export default Textarea;
