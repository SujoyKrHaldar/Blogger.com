import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVATE_PROFILE, SHOW_NOTIFICATION } from "../../../global";
import { assetService, userProfile } from "../../../service";
import Input from "../../shared/Input";
import ShowError from "../../shared/ShowError";
import SubmitBtn from "../../shared/SubmitBtn";
import Textarea from "../../shared/Textarea";
import UploadProfilePhoto from "../../shared/UploadProfilePhoto";

function SetupProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  const [error, setError] = useState(false);
  const [formSubmitLoading, setformSubmitLoading] = useState(false);

  const [uploadFile, setUploadFile] = useState();
  const [uploadError, setUploadError] = useState(false);

  const createProfile = async (data) => {
    setError(false);
    setformSubmitLoading(true);
    setUploadError(false);

    let fileInfo;

    try {
      if (uploadFile) fileInfo = await assetService.upload(uploadFile);

      const profileData = {
        ...data,
        name: userData.name,
        email: userData.email,
        profilePicId: fileInfo?.$id,
      };

      const profile = await userProfile.createProfile(
        profileData,
        userData.$id
      );

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
      if (fileInfo) await assetService.delete(fileInfo.$id);
    } finally {
      setformSubmitLoading(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit(createProfile)} className="space-y-4">
          <p className="text-center">Do you like this Profile Photo?</p>

          <UploadProfilePhoto
            passError={setUploadError}
            passFile={setUploadFile}
          />

          <Input
            label="Username"
            className="rounded-2xl"
            placeholder="How do you like people to call you?"
            description="Choose your unique username by adding letters, numbers. https://blogger.com/author/@username"
            error={errors?.username || error}
            errorMessage={errors?.username?.message}
            {...register("username", {
              required: "Username is required.",
              maxLength: {
                value: 20,
                message: "Username must be maximum 20 characters long.",
              },
              validate: {
                noSpaces: (value) => {
                  return !/\s/.test(value) || "Username cannot contain spaces.";
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

          <Textarea
            label="Bio"
            description="Write a short bio for your Profile."
            placeholder="Eg: Software Engineer"
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
            error={uploadError || errors?.username || errors?.bio}
            btnText="Create Profile"
            loading={formSubmitLoading}
            textOnLoad="Creating your profile. Please wait"
          />
        </form>

        <ShowError
          error={error}
          errorMessage={error}
          closeError={() => setError("")}
        />
      </div>
    </>
  );
}

export default SetupProfileForm;
