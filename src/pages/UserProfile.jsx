import { useContext } from "react";
import { Context } from "../provider/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import "animate.css";

const UserProfile = () => {
  const location = useLocation();
  console.log(location.state);
  const { user } = useContext(Context);
  const {
    displayName,
    email,
    emailVerified,
    phoneNumber,
    photoURL,
    providerId,
  } = user;
  return (
    <section className="max-w-screen-2xl p-4 mx-auto">
      <div>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <div>
            <img
              className="w-[15rem] lg:w-[25rem] h-[15rem] lg:h-[25rem] object-cover rounded-full"
              src={photoURL}
              alt={displayName}
            />
          </div>
          <div>
            <h1 className="font-extrabold text-5xl">
              <span className="animate__animated  animate__jackInTheBox ">
                Hello,
              </span>
              <span className="block lg:text-7xl animate__animated animate__rotateInUpRight">
                {displayName}
              </span>
            </h1>
            <p className="text-gray-800">This is Profile Details Page</p>
          </div>
        </div>
        <hr
          className="text-gray-300 my-6
        "
        />
        <div className=" text-lg mb-8">
          <div className="flex gap-3">
            <div className="flex gap-3">
              <div>
                <h1>📧 Email</h1>
                <h1>👤 Verified</h1>
                <h1>📞 Phone</h1>
                <h1>🤝 Authenticity</h1>
              </div>
              <div>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
            </div>
            <div className="font-semibold">
              <h1>{email}</h1>
              <h1>{emailVerified === true ? "Yes" : "No"}</h1>
              <h1>{phoneNumber ? phoneNumber : "Unknown"}</h1>
              <h1>{providerId}</h1>
            </div>
          </div>
        </div>
        <div>
          <Link
            to={"/auth/updateProfile"}
            className="text-white font-bold px-8 py-3 rounded-xl bg-green-800 hover:bg-green-700 cursor-pointer duration-300 transition-all"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
