import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from "../shared/Input";
import SubmitBtn from "../shared/SubmitBtn";
import { AiFillLock } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import {
  LOGIN,
  DISABLE_PROFILE,
  SHOW_NOTIFICATION,
  ACTIVATE_PROFILE,
} from "../../global";
import { authService, userProfile } from "../../service";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const loginEvent = async (data) => {
    setError(false);
    setLoading(true);

    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          const profile = await userProfile.getProfile(userData.$id);
          if (profile) {
            dispatch(ACTIVATE_PROFILE());
          } else {
            dispatch(DISABLE_PROFILE());
          }

          dispatch(LOGIN(userData));
          dispatch(
            SHOW_NOTIFICATION({
              message: `Welcome back ${userData.name} ✌️`,
              type: "SUCCESS",
            })
          );
        }
      }
    } catch (error) {
      setError(error);
      dispatch(
        SHOW_NOTIFICATION({
          message: "Login failed.",
          type: "ERROR",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full space-y-4">
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

        <form onSubmit={handleSubmit(loginEvent)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="johndoe@xyz.com"
            error={errors?.email || error}
            errorMessage={errors?.email?.message}
            {...register("email", {
              required: "Email is required.",
              validate: (value) =>
                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value) ||
                "Please enter a valid Email.",
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="8+ characters"
            error={errors?.password || error}
            errorMessage={errors?.password?.message}
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long.",
              },
            })}
          />
          {/* <p className="text-sm font-semibold">Forgot password</p> */}

          <SubmitBtn
            btnText="Login"
            textOnLoad="Logging you in"
            defaultIcon={<AiFillLock />}
            loading={loading}
          />
        </form>
      </div>
    </>
  );
}

export default LoginForm;
