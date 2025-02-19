import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../provider/ContextProvider";
import Header from "../components/Header";
import Trips from "../components/Trips";
import Stories from "../components/Stories";

// *Import Icons For Why Choose Us Section
import icon_1 from "../assets/support.png";
import icon_2 from "../assets/reward.png";
import icon_3 from "../assets/review.png";
import icon_4 from "../assets/plan.png";

const HomeLayout = () => {
  // *Dynamic Page Title
  const location = useLocation();
  useEffect(() => {
    const titles = {
      "/": "EcoQuest",
    };
    document.title = titles[location.pathname] || "EcoQuest";
  }, [location.pathname]);

  // *Context API State & Function
  const { user, userLogOut } = useContext(Context);

  return (
    <div className="">
      {/* Header Component */}
      <Header></Header>
      {/* Why Choose Us Section */}
      <section className="max-w-screen-2xl p-4 mx-auto">
        <h1 className="font-bold text-3xl text-center my-12">
          Why Book With EcoQuest ?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-baseline">
          {/* Card-1 */}
          <div className="flex flex-col justify-end items-center space-y-1 hover:-translate-y-2 hover:shadow-lg rounded-lg transition-all duration-200 py-5 px-2">
            <img className="w-20" src={icon_1} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">
              24/7 customer support
            </h1>
            <p className="text-center">
              No matter the time zone, we are here to help
            </p>
          </div>
          {/* Card-2 */}
          <div className="flex flex-col justify-center items-center space-y-1 hover:-translate-y-2 hover:shadow-lg rounded-lg transition-all duration-200 py-5 px-2">
            <img className="w-20" src={icon_2} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">Earn rewards</h1>
            <p className="text-center">
              Explore, earn, redeem, and repeat with our loyalty program
            </p>
          </div>
          {/* Card-3 */}
          <div className="flex flex-col justify-center items-center space-y-1 hover:-translate-y-2 hover:shadow-lg rounded-lg transition-all duration-200 py-5 px-2">
            <img className="w-20" src={icon_3} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">
              Millions of review
            </h1>
            <p className="text-center">
              Plan and book with confidence using reviews from fellow travelers
            </p>
          </div>
          {/* Card-4 */}
          <div className="flex flex-col justify-center items-center space-y-1 hover:-translate-y-2 hover:shadow-lg rounded-lg transition-all duration-200 py-5 px-2">
            <img className="w-20" src={icon_4} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">Plan your way</h1>
            <p className="text-center">
              Stay flexible with free cancellation and the option pay later
            </p>
          </div>
        </div>
      </section>

      {/* Account Section For User Account Interaction */}
      <section className="max-w-screen-md p-4 mx-auto">
        <div className="bg-gray-200 p-1 rounded-md">
          <div className="text-center my-5 space-y-3">
            {/* Conditional Title */}
            <h1 className="font-bold text-3xl">
              {user
                ? `Welcome ${user.displayName}`
                : "Log in to manage bookings & EcoQuest Rewards"}
            </h1>
            {/* User Functionality */}
            {user ? (
              <p>
                Want to update your profile?
                <Link
                  to={"auth/updateProfile"}
                  className="font-semibold px-1 underline"
                >
                  Update Profile
                </Link>
              </p>
            ) : (
              <p>
                Do not have an account yet?
                <Link
                  to={"/auth/register"}
                  className="font-semibold px-1 underline"
                >
                  Sign up
                </Link>
              </p>
            )}
            {/* Button For User Functionality */}
            <div className="my-10">
              {user ? (
                <Link
                  onClick={userLogOut}
                  className="text-white py-2 px-24 rounded-lg bg-black"
                >
                  Log Out
                </Link>
              ) : (
                <Link
                  to={"auth/login"}
                  className="text-white py-2 px-24 rounded-lg bg-black"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Adventure Section */}
      <section className="max-w-screen-2xl p-4 mx-auto">
        <h1 className="font-bold text-3xl text-center my-12">
          Top Attractions
        </h1>
        <div>
          {/* Trips Component */}
          <div>
            <Trips></Trips>
          </div>
        </div>
      </section>
      {/* Stories Section */}
      <section className="max-w-screen-2xl p-4 mx-auto">
        <h2 className="font-bold text-3xl text-center my-12">
          Stories That Inspire
        </h2>
        {/* Story Component */}
        <Stories></Stories>
      </section>
    </div>
  );
};

export default HomeLayout;
