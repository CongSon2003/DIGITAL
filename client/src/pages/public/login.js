import { apiLogin } from "apis";
import { Breadcrumb } from "component";
import withBase from "HOCS/withBase";
import React, { useEffect, useState } from "react"; // Adjust the import based on your file structure
import { useForm } from "react-hook-form";
import { login } from "store/user/userSlice";
import Swal from "sweetalert2";

const Login = ({ dispatch, navigate }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLogin, setIsErrorLogin] = useState(false);
  const [textErrorLogin, setTextErrorLogin] = useState("");
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  useEffect(() => {
    // Your effect logic here
  }, []);
  const handleLogin = async (data) => {
    const result = await apiLogin(data);
    if (result?.success) {
      // Dispatch lưu vào localStorage:
      dispatch(login({ isLoggedIn: true, accessToken: result?.accessToken }));
      setIsLoading(false);
      Swal.fire({
        title: result.success ? "Good job!" : "Oops...",
        text: result.success
          ? "Login successfully"
          : "Email or Password incorrect!",
        icon: result.success ? "success" : "error",
      }).then(() => {
        navigate('/')
      });
    } else {
      setIsErrorLogin(true);
      setTextErrorLogin("Email or Password incorrect!");
      setIsLoading(false);
    }
  };
  console.log(textErrorLogin);
  return (
    <div className="w-full flex flex-col gap-5">
      <Breadcrumb title={"Login"} pages={"Login"} />
      {/* Assuming pages is an array */}
      <div className="w-full bg-white flex justify-center font-[Poppins] pb-[20px]">
        <div className="w-1/2 relative p-5 flex flex-col gap-5 justify-center items-center animate-fade-in">
          <h3 className="uppercase font-semibold text-xl text-[#505050]">
            Login Account
          </h3>
          <form
            method="POST"
            onSubmit={handleSubmit((data) => handleLogin(data))}
            className="w-full flex flex-col gap-[15px]"
          >
            {isErrorLogin && (
              <p className="px-[12px] py-[6px] border-2 border-solid border-red-200 text-sm">
                {textErrorLogin}
              </p>
            )}
            <div className="w-full">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#505050]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                autoComplete="email"
                className="w-full py-2 px-3 border bg-[#f6f6f6] rounded"
                placeholder="Enter your Email"
              />
              <small className="text-main">{errors?.email?.message}</small>
            </div>
            <div className="w-full">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#505050]"
              >
                Password
              </label>
              <input
                id="password"
                {...register("password", {
                  required: "This is required",
                })}
                type="password"
                autoComplete="current-password"
                className="w-full py-2 px-3 border bg-[#f6f6f6] rounded"
                placeholder="Enter your Password"
              />
              <small className="text-main">{errors?.password?.message}</small>
            </div>
            <button
              type="submit"
              className="uppercase hover:bg-[#474747] w-full bg-main py-2 text-white rounded"
            >
              {isLoading ? "Loading..." : "SIGN IN"}
            </button>
          </form>
          <div className="flex justify-between items-center w-full">
            <p className="hover:text-main hover:underline cursor-pointer text-blue-500">
              Forgot your password?
            </p>
            <p className="hover:text-main text-blue-500 hover:underline cursor-pointer">
              Create Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBase(Login);
