import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="max-w-screen-2xl p-4 mx-auto">
      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-3 bg-white p-8 w-96 rounded-xl shadow-md">
          <h1 className="text-center font-bold text-3xl">Get Exploring</h1>
          <p className="text-center ">
            Create one below. Quick and easy - promise!
          </p>
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Name</label>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-green-500">
            <svg
              height="60"
              viewBox="0 -9 32 32"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></path>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Enter your Name"
              className="ml-3 border-none outline-none w-full"
            />
          </div>

          {/* Image Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Image Link</label>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-green-500">
            <svg viewBox="0 0 344 384" height="20" width="18">
              <path
                d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
                fill="#000000"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Enter Image Link (Imgur)"
              className="ml-3 border-none outline-none w-full"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Email</label>
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
              placeholder="Enter your Email"
              className="ml-3 border-none outline-none w-full"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-semibold">Password</label>
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
              placeholder="Enter your Password"
              className="ml-3 border-none outline-none w-full"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-baseline text-sm text-gray-700">
            <div className="flex items-baseline gap-2">
              <input type="radio" className="" />
              <label>
                Accept our Terms of Use, and Privacy & Cookies Statement.
              </label>
            </div>
          </div>

          {/* Sign In Button */}
          <Link className="flex items-center justify-center mt-4 bg-green-800 text-white font-bold rounded-lg h-12 w-full hover:bg-green-700 transition">
            Sign In
          </Link>

          {/* Sign Up Link */}
          <p className="text-center text-gray-700 text-sm">
            Do not have an account?{" "}
            <span className="text-green-500 cursor-pointer">Sign Up</span>
          </p>

          <p className="text-center text-gray-500 text-sm">Or With</p>

          {/* Social Sign-In Buttons */}
          <div className="flex gap-3">
            <Link className="flex items-center justify-center w-full h-12 border border-gray-300 rounded-lg hover:border-green-500 transition">
              <FaGoogle />
              <span className="ml-2">Google</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
