import { useContext } from "react";
import { Context } from "../provider/ContextProvider";

const PasswordReset = () => {
  const { updateUserPassword } = useContext(Context);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    console.log(email);
    updateUserPassword(email)
      .then(() => {
        console.log("Great");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="max-w-screen-2xl p-4 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white p-8 w-96 rounded-xl shadow-md space-y-3">
          <form onSubmit={handlePasswordReset} className="flex flex-col gap-3 ">
            <h1 className="text-center font-bold text-3xl">
              Reset Your Password
            </h1>
            <p className="text-center ">
              Ensure a Secure Connection Before Proceeding.
            </p>
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
                name="email"
                placeholder="Enter your Email"
                className="ml-3 border-none outline-none w-full"
              />
            </div>

            {/* Password Reset Button */}
            <button
              type="submit"
              className="flex items-center justify-center mt-4 bg-green-800 text-white font-bold rounded-lg h-12 w-full hover:bg-green-700 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PasswordReset;
