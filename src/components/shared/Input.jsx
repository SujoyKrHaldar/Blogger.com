/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useId, useState } from "react";
import { IconError, IconEyeInvisible, IconEyeOpen } from "../../assets/icons";

const Input = forwardRef(
  (
    {
      label,
      className = "rounded-full",
      type = "text",
      description = "",
      error = null,
      errorMessage = "",
      ...props
    },
    ref
  ) => {
    const [currentType, setType] = useState(type);
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
            <input
              id={id}
              ref={ref}
              type={type === "password" ? currentType : type}
              className={`px-5 py-3 block w-full h-full border outline-none 
              placeholder:font-light placeholder:text-sm font-regular 
            ${
              error
                ? "border-2 border-red-600 text-red-600 placeholder:text-red-600"
                : "border-black text-black placeholder:text-gray-800"
            } ${className}`}
              {...props}
            />
            {type === "password" && (
              <div
                className={`cursor-pointer w-7 text-2xl
            ${
              error ? "text-red-600" : "text-gray-400"
            } absolute bottom-[12px] right-[12px]`}
              >
                {currentType === "password" ? (
                  <div onClick={() => setType("text")}>
                    <IconEyeInvisible />
                  </div>
                ) : (
                  <div onClick={() => setType(type)}>
                    <IconEyeOpen />
                  </div>
                )}
              </div>
            )}
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

export default Input;
