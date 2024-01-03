import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LOGIN, SHOW_NOTIFICATION } from "../../../../global";
import { authService } from "../../../../service";
import Input from "../../../shared/Input";
import SubmitBtn from "../../../shared/SubmitBtn";

function PasswordUpdateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const updatePassword = async (data) => {
    setLoading(true);

    try {
      const { newPassword, oldPassword } = data;

      const userData = await authService.updatePassword(
        newPassword,
        oldPassword
      );

      if (userData) {
        dispatch(LOGIN(userData));
        dispatch(
          SHOW_NOTIFICATION({
            message: "Password updated successfully",
            type: "SUCCESS",
          })
        );
      }
    } catch (error) {
      dispatch(
        SHOW_NOTIFICATION({
          message: error,
          type: "ERROR",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8 border-t border-b border-gray-300">
      <h2 className="text-2xl font-bold mb-6">Update Password</h2>

      <form
        onSubmit={handleSubmit(updatePassword)}
        className="space-y-4 max-w-md"
      >
        <Input
          type="password"
          placeholder="Old Password"
          error={errors?.oldPassword}
          errorMessage={errors?.oldPassword?.message}
          {...register("oldPassword", {
            required: "Old password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
          })}
        />

        <Input
          type="password"
          placeholder="New Password"
          description="Set a minimum 8 character long password"
          error={errors?.newPassword}
          errorMessage={errors?.newPassword?.message}
          {...register("newPassword", {
            required: "New password is required.",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long.",
            },
          })}
        />

        <SubmitBtn
          error={errors?.password || errors?.email}
          btnText="Save Changes"
          textOnLoad="Saving"
          loading={loading}
          className="bg-green-800 text-white rounded-full w-"
        />
      </form>

      <p className="text-sm mt-4">
        Cant remember your current password?{" "}
        <span className="text-green-700 font-semibold">Reset password</span>
      </p>
    </div>
  );
}

export default PasswordUpdateForm;
