/* eslint-disable react/prop-types */
import Image from "../../shared/Image";

function AuthUI({
  title,
  FormComponent,
  children,
  imgSrc,
  imgAlt = "Auth Image",
  objectPosition = "object-center",
}) {
  return (
    <section className="flex items-center">
      <div className="absolute top-0 right-0 w-[40%] h-full border-l border-gray-500 overflow-hidden">
        <Image objectPosition={objectPosition} src={imgSrc} alt={imgAlt} />
      </div>
      <div className="container space-y-8">
        <div className="max-w-md py-16">
          <h1 className="mb-8">{title}</h1>
          {FormComponent}
          <p className="text-xs text-gray-500 mt-4">
            By{" "}
            <span className="text-black font-semibold">
              {title.toLowerCase()},
            </span>{" "}
            you are agreed to our{" "}
            <span className="text-black font-semibold">Terms</span> and{" "}
            <span className="text-black font-semibold">Conditions</span>.
          </p>
        </div>
      </div>

      <div className="bg-white w-full absolute bottom-0  border-t border-gray-500 py-4">
        {children}
      </div>
    </section>
  );
}

export default AuthUI;
