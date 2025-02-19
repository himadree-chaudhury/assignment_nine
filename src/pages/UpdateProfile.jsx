import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../provider/ContextProvider";

const UpdateProfile = () => {
  // * Dynamic Page Title
  const location = useLocation();
  useEffect(() => {
    const titles = {
      "/auth/updateProfile": "Update Profile",
    };
    document.title = titles[location.pathname] || "EcoQuest";
  }, [location.pathname]);

  // * Context API State & Function
  const { user, updateUser } = useContext(Context);

  // *Navigate To The User Profile Page After Successful Update
  const navigate = useNavigate();

  // *Handle Update User Function
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    if (name === user.displayName || photo === user.photoURL) {
      return;
    }
    if (name === "" && photo !== "") {
      // *Firebase Update User Function
      updateUser({ photoURL: photo })
        .then(() => {
          navigate("/auth/userProfile");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (name !== "" && photo === "") {
      // *Firebase Update User Function
      updateUser({ displayName: name })
        .then(() => {
          navigate("/auth/userProfile");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // *Firebase Update User Function
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          navigate("/auth/userProfile");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <section className="max-w-screen-2xl p-4 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white p-8 w-96 rounded-xl shadow-md space-y-3">
          {/* Form */}
          <form onSubmit={handleUpdateUser} className="flex flex-col gap-3 ">
            <h1 className="text-center font-bold text-3xl">
              Ready to refresh?
            </h1>
            <p className="text-center ">Update & create a bold new profile.</p>
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Name</label>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-green-500">
              {/* Name SVG */}
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
              {/* Name Field */}
              <input
                type="text"
                name="name"
                placeholder="Enter your new Name"
                className="ml-3 border-none outline-none w-full"
              />
            </div>
            {/* Image Link Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Image Link</label>
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-green-500">
              {/* Image Link SVG */}
              <svg viewBox="0 0 344 384" height="20" width="18">
                <path
                  d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
                  fill="#000000"
                ></path>
              </svg>
              {/* Image Link Field */}
              <input
                type="text"
                name="photo"
                placeholder="Enter new Image Link"
                className="ml-3 border-none outline-none w-full"
              />
            </div>
            {/* Update Button */}
            <button
              type="submit"
              className="flex items-center justify-center mt-4 bg-green-800 text-white font-bold rounded-lg h-12 w-full hover:bg-green-700 transition cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
