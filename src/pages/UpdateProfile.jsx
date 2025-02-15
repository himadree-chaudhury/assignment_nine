import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../provider/ContextProvider";

const UpdateProfile = () => {
    const location = useLocation();
    console.log(location.state)
  const navigate = useNavigate();

  const { user, updateUser } = useContext(Context);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    if (name === user.displayName || photo === user.photoURL) {
      return;
    }
    if (name === "" && photo !== "") {
      updateUser({ photoURL: photo })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (name !== "" && photo === "") {
      updateUser({ displayName: name })
        .then(() => {
          navigate("/auth/userProfile");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
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
                type="text"
                name="name"
                placeholder="Enter your new Name"
                className="ml-3 border-none outline-none w-full"
              />
            </div>

            {/* Photo Link Input */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold">Image Link</label>
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
