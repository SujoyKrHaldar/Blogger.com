import { Link } from "react-router-dom";
import { SvgBackground } from "../../assets";
import { MetaTags, SetupProfileForm } from "../../components";
import { useSelector } from "react-redux";

function Setup() {
  const { userData } = useSelector((state) => state.auth);

  return (
    <>
      <MetaTags
        title="Setup profile • Blogger.com"
        description="Setup public profile"
        conicalRoute="/setup"
      />

      <section className="z-50 bg-white flex items-center">
        <SvgBackground />

        <div className="max-w-lg p-12 border border-gray-300 rounded-xl bg-gray-100 mx-auto space-y-4">
          <h1 className="text-3xl text-center">
            Hello,{" "}
            <span className="text-green-700 font-bold">{userData?.name}</span>
          </h1>

          <SetupProfileForm />

          <p className="text-xs text-gray-500 mt-4">
            By{" "}
            <span className="text-black font-semibold">
              clicking Create Profile
            </span>{" "}
            you agree to our our{" "}
            <span className="text-black font-semibold">Terms</span> and{" "}
            <span className="text-black font-semibold">Conditions</span>.
            Changes made to your name and profile picture are visible only on
            Blogger.
          </p>

          <Link className="block w-fit" to="/feed">
            <p className="text-sm font-medium">Create Profile Later</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Setup;
