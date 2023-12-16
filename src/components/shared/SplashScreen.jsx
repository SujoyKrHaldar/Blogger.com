import { SvgBackground } from "../../assets";

/* eslint-disable react/prop-types */
function SplashScreen({ loading, title = "Blogger.com", background = true }) {
  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white duration-1000 ease-in-out
      ${
        loading
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <h1
        className={`text-green-700 font-bold text-3xl animate-pulse duration-1000 ease-in-out scale-125
        ${loading ? "scale-125" : "scale-110"}
      `}
      >
        {title}
      </h1>

      {background && (
        <div
          className={`absolute w-full h-full inset-0 -z-10 duration-300 ease-in-out
        ${loading ? "scale-110 opacity-20" : "scale-125 opacity-0"}`}
        >
          <SvgBackground className="block" />
        </div>
      )}
    </section>
  );
}

export default SplashScreen;
