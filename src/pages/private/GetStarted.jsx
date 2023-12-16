import { useState } from "react";
import {
  Input,
  MetaTags,
  SubmitBtn,
  Image,
  Notification,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { userProfile } from "../../service";
import {
  ACTIVATE_PROFILE,
  SHOW_NOTIFICATION,
  SHOW_LOADING,
} from "../../global";

function GetStarted() {
  const { userData } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createProfile = async (data) => {
    setError(false);
    setLoading(true);
    dispatch(
      SHOW_LOADING({
        message: "Creating profile. Please wait",
        type: "SUCCESS",
      })
    );

    const userId = userData.$id;
    const profileData = {
      ...data,
      name: userData.name,
      email: userData.email,
    };

    try {
      const profile = await userProfile.createProfile(profileData, userId);

      if (profile) {
        dispatch(
          SHOW_NOTIFICATION({
            message: "Profile created successfully.",
            type: "SUCCESS",
          })
        );
        dispatch(ACTIVATE_PROFILE());
      }
    } catch (error) {
      setError(error);
      dispatch(
        SHOW_NOTIFICATION({
          message: "Profile setup failed.",
          type: "ERROR",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Setup your profile - Blogger.com"
        description="manage account"
        conicalRoute="/get-started"
      />

      <section className="z-50 bg-white flex items-center">
        <div className="container w-full h-full  flex items-center justify-between gap-12">
          <div className="z-10 fixed w-full h-fit inset-0 ">
            <Notification />
          </div>

          <div className="space-y-2">
            <p className="uppercase tracking-[0.5rem]">Profile Setup</p>

            <h1 className="text-green-700"> {userData.name}</h1>

            <p className="text-lg leading-[2rem] pt-2 max-w-[600px]">
              Setup your Profile to be accessed by other creators here. Also
              access your own Dashboard and do many things like creating new
              posts, comment in others post. Get Started.
            </p>
          </div>

          <div className="max-w-lg p-12 border border-gray-300 rounded-xl bg-gray-100 mx-auto space-y-6">
            {error && (
              <div className="w-full py-3 pl-4 pr-2 bg-red-500 text-white rounded-xl flex items-center justify-between">
                <p className="text-sm">{error}</p>

                <div
                  onClick={() => setError("")}
                  className="rounded-full duration-200 hover:bg-red-400 p-2 cursor-pointer"
                >
                  <IoMdClose />
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(createProfile)} className="space-y-4">
              <div className="text-center space-y-2">
                <div className="bg-white border-4 border-green-700 w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <Image
                    src="/default-avatar.png"
                    alt="avatar"
                    className="scale-125"
                  />
                </div>
                <p>Choose Different Photo</p>
              </div>

              <Input
                label="Username*"
                placeholder="Jhondoe007"
                description="https://blogger.com/author/@username"
                error={errors?.username || error}
                errorMessage={errors?.username?.message}
                {...register("username", {
                  required: "Username is required.",
                  maxLength: {
                    value: 15,
                    message: "Username must be maximum 15 characters long.",
                  },
                  validate: {
                    noSpaces: (value) => {
                      return (
                        !/\s/.test(value) || "Username cannot contain spaces."
                      );
                    },
                    validFormat: (value) => {
                      return (
                        /^[a-zA-Z0-9_]+$/.test(value) ||
                        "Username can only contain letters, numbers, and underscores."
                      );
                    },
                  },
                })}
              />

              <Input
                label="Bio*"
                description="Write a short bio for your Profile."
                placeholder="Eg. Software Engineer"
                error={errors?.bio || error}
                errorMessage={errors?.bio?.message}
                {...register("bio", {
                  required: "Bio is required.",
                  maxLength: {
                    value: 100,
                    message: "Maximum length esceeds.",
                  },
                })}
              />

              <SubmitBtn
                btnText="Create Profile"
                loading={loading}
                textOnLoad="Creating Profile ..."
              />
            </form>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
