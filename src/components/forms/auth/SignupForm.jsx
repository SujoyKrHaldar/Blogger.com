import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LOGIN, SHOW_NOTIFICATION } from "../../../global";
import { authService } from "../../../service";
import Input from "../../shared/Input";
import ShowError from "../../shared/ShowError";
import SubmitBtn from "../../shared/SubmitBtn";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  const signupEvent = async (data) => {
    setError(false);
    setLoading(true);

    try {
      const session = await authService.createUser(data);
      if (session) {
        const { userData } = await authService.getCurrentUser();

        if (userData) {
          dispatch(LOGIN(userData));
          dispatch(
            SHOW_NOTIFICATION({
              message: `Welcome ${userData.name}. Now setup your Profile.`,
              type: "SUCCESS",
            })
          );
          sessionStorage.setItem("isLoggedin", true);
        }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit(signupEvent)} className="space-y-4">
          <Input
            label="Name"
            placeholder="Jhon doe"
            error={errors?.name || error}
            errorMessage={errors?.name?.message}
            {...register("name", {
              required: "Name is required.",
            })}
          />

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

          <SubmitBtn
            error={errors?.name || errors?.email || errors?.password}
            btnText="Get started"
            loading={loading}
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

export default SignupForm;
