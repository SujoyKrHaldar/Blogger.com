import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from "../shared/Input";
import SubmitBtn from "../shared/SubmitBtn";
import { IoMdClose } from "react-icons/io";
import { LOGIN, SHOW_NOTIFICATION } from "../../global";
import { authService } from "../../service";

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
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(LOGIN(userData));
          dispatch(
            SHOW_NOTIFICATION({
              message: `Welcome ${userData.name} ✌️. Now setup your Public Profile.`,
              type: "SUCCESS",
            })
          );
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
      <div className="w-full space-y-4 ">
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
        <form onSubmit={handleSubmit(signupEvent)} className="space-y-4">
          {/* <div className="flex gap-2">
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
              label="Username"
              placeholder="Jhondoe007"
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
          </div> */}

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

          <SubmitBtn btnText="Get started" loading={loading} />
        </form>
      </div>
    </>
  );
}

export default SignupForm;
