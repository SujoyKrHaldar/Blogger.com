import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IconLock } from "../../assets/icons";
import {
  ACTIVATE_PROFILE,
  DISABLE_PROFILE,
  LOGIN,
  SHOW_NOTIFICATION,
} from "../../global";
import { authService } from "../../service";
import Input from "../shared/Input";
import ShowError from "../shared/ShowError";
import SubmitBtn from "../shared/SubmitBtn";

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
        const { userData, profileData } = await authService.getCurrentUser();
        if (userData) {
          profileData
            ? dispatch(ACTIVATE_PROFILE(profileData))
            : dispatch(DISABLE_PROFILE());

          dispatch(LOGIN(userData));
          dispatch(
            SHOW_NOTIFICATION({
              message: `Welcome back ${userData.name} ✌️`,
              type: "SUCCESS",
            })
          );
          sessionStorage.setItem("isLoggedin", true);
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
        <ShowError
          error={error}
          errorMessage={error}
          closeError={() => setError("")}
        />

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
            error={errors?.password || errors?.email}
            btnText="Login"
            textOnLoad="Logging you in"
            defaultIcon={<IconLock />}
            loading={loading}
          />
        </form>
      </div>
    </>
  );
}

export default LoginForm;
