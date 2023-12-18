import { useState } from "react";
import { Input, MetaTags, SubmitBtn, Image, ShowError } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { userProfile, assetService } from "../../service";
import { ACTIVATE_PROFILE, SHOW_NOTIFICATION } from "../../global";
import { SvgBackground } from "../../assets";
import { IconClose, IconError } from "../../assets/icons";

function GetStarted() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  const [error, setError] = useState(false);

  const [formSubmitLoading, setformSubmitLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  const [file, setFile] = useState();
  const [profilePreview, setProfilePreview] = useState();

  // console.log(file);

  const previewCapturedImage = (e) => {
    const file = e.target.files[0];
    setValue("image", file);
    trigger("image");
    setFile(file);

    // if (file && file.size < 5242880)
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadstart = () => setImgLoading(true);
      reader.onload = () => {
        setProfilePreview(reader.result);
      };
      reader.onloadend = () => setImgLoading(false);
    }
  };

  const createProfile = async (data) => {
    setError(false);
    setformSubmitLoading(true);

    try {
      let fileInfo;
      const userId = userData.$id;

      // TODO:
      // 1. Initially while creating profile if username is not taken - profile pic will be saved and got its id and then only we create
      //    a user Profile. its working
      // 2. But is username is taken so it will not create a profile but still image is saved inside storage. Everytime we try to run it img will be saved.
      //    Need to fix this, if image is there no need to re uploading that.

      if (file) {
        fileInfo = await assetService.upload(file);
      }

      console.log(fileInfo);

      const profileData = {
        ...data,
        name: userData.name,
        email: userData.email,
        profilePicId: fileInfo?.$id,
      };

      const profile = await userProfile.createProfile(profileData, userId);

      if (profile) {
        dispatch(
          SHOW_NOTIFICATION({
            message: "Profile created successfully.",
            type: "SUCCESS",
          })
        );
        dispatch(ACTIVATE_PROFILE(profile));
      }
    } catch (error) {
      setError(error);
    } finally {
      setformSubmitLoading(false);
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
        <SvgBackground />

        <div className="container w-full h-full  ">
          <div className="max-w-lg p-12 border border-gray-300 rounded-xl bg-gray-100 mx-auto space-y-6">
            <ShowError
              error={error}
              errorMessage={error}
              closeError={() => setError("")}
            />

            <form onSubmit={handleSubmit(createProfile)} className="space-y-4">
              <div className="text-center space-y-4">
                <h1 className="text-3xl">
                  Hello,{" "}
                  <span className="text-green-700 font-bold">
                    {userData?.name}
                  </span>
                </h1>
                <p>Do you like this Profile Photo?</p>
              </div>

              <div className="text-center space-y-4">
                <div
                  className={`bg-white border-4   ${
                    errors.image ? "border-red-500" : "border-green-700"
                  }  w-32 h-32 mx-auto rounded-full overflow-hidden p-1`}
                >
                  <div
                    className={`bg-green-700 duration-500 rounded-full ease-in-out 
                    w-full h-full absolute inset-0 z-10 flex items-center justify-center
                    ${imgLoading ? "opacity-100  animate-pulse " : "opacity-0"}
                  `}
                  ></div>

                  <Image
                    src={profilePreview || "/default-avatar.png"}
                    alt={userData.name || "Avatar"}
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Controller
                    name="image"
                    control={control}
                    rules={{
                      validate: {
                        validImage: (value) => {
                          if (value?.size > 5242880) {
                            return "Image size should be less than 5MB.";
                          }
                          return true;
                        },
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          className="hidden"
                          id="choose-profile-pic"
                          type="file"
                          onChange={previewCapturedImage}
                          onBlur={field.onBlur}
                        />
                      </>
                    )}
                  />

                  {file && (
                    <div
                      className={`flex items-center gap-2 justify-center ${
                        errors.image ? "text-red-600" : "text-green-500"
                      }`}
                    >
                      <p className="text-sm">{file.name}</p>

                      <div
                        onClick={() => {
                          setFile();
                          setProfilePreview("");
                        }}
                        className=" cursor-pointer text-lg"
                      >
                        <IconClose />
                      </div>
                    </div>
                  )}

                  {errors.image && (
                    <div className="flex items-center gap-1 justify-center">
                      <div className="text-red-600">
                        <IconError />
                      </div>
                      <p className="w-fit text-red-600 text-xs font-medium">
                        {errors.image.message}
                      </p>
                    </div>
                  )}

                  <label
                    className=" cursor-pointer w-fit mx-auto block"
                    htmlFor="choose-profile-pic"
                  >
                    <p className="font-semibold">Choose a new one</p>
                  </label>
                </div>
              </div>

              <Input
                label="Username*"
                placeholder="Jhondoe007"
                description="Choose your unique username by adding letters, numbers. https://blogger.com/author/@username"
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
                error={errors?.username || errors?.bio}
                btnText="Create Profile"
                loading={formSubmitLoading}
                textOnLoad="Creating your profile. Please wait"
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
