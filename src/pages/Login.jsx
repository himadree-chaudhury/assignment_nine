import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../provider/ContextProvider";

const Login = () => {
  const {
    userLogIn,
    createUserWithGoogle,
    setUser,
    setEmailField,
  } = useContext(Context);
  const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state)

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(email,password)
  };

  const handleGoogleLogIn = () => {
    createUserWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const emailOnChange = (e) => {
    const email = e.target.value;
    setEmailField(email);
  };

  return (
    <section className="max-w-screen-2xl p-4 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white p-8 w-96 rounded-xl shadow-md space-y-3">
          <form onSubmit={handleSignIn} className="flex flex-col gap-3 ">
            <h1 className="text-center font-bold text-3xl">Welcome Back</h1>
            <p className="text-center ">Log-in and get in touch.</p>
            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="0 0 32 32"
                height="20"
              >
                <g data-name="Layer 3" id="Layer_3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                onChange={emailOnChange}
                placeholder="Enter your Email"
                className="ml-3 border-none outline-none w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                viewBox="-64 0 512 512"
                height="20"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
              </svg>
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="ml-3 border-none outline-none w-full"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div className="flex items-center">
                <input type="radio" className="mr-1" />
                <label>Remember me</label>
              </div>
              <Link to={"/auth/resetPassword"} className="text-green-500">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="flex items-center justify-center mt-4 bg-green-800 text-white font-bold rounded-lg h-12 w-full hover:bg-green-700 transition cursor-pointer"
            >
              Sign In
            </button>
          </form>
          {/* Sign Up Link */}
          <p className="text-center text-gray-700 text-sm">
            Do not have an account?
            <Link
              to={"/auth/register"}
              className="text-green-500 cursor-pointer"
            >
              Sign Up
            </Link>
          </p>

          <p className="text-center text-gray-500 text-sm">Or With</p>

          {/* Social Sign-In Buttons */}
          <div className="flex gap-3">
            <Link
              onClick={handleGoogleLogIn}
              className="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:border-green-500 transition"
            >
              <FcGoogle className="text-xl" />
              <span className="ml-2">Google</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
