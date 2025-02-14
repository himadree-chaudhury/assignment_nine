import Header from "../components/Header";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import icon_1 from "../assets/support.png";
import icon_2 from "../assets/reward.png";
import icon_3 from "../assets/review.png";
import icon_4 from "../assets/plan.png";
import { Link } from "react-router-dom";
import Trips from "../pages/Trips";

const HomeLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <Header></Header>
      {/* Why Choose Us Section */}
      <section className="max-w-screen-2xl p-4 mx-auto">
        <h1 className="font-bold text-3xl text-center my-12">
          Why Book With EcoQuest ?
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-baseline"
          data-aos="zoom-out-up"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
          data-aos-offset="300"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="flex flex-col justify-end items-center space-y-1">
            <img className="w-20" src={icon_1} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">
              24/7 customer support
            </h1>
            <p className="text-center">
              No matter the time zone, we’re here to help.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <img className="w-20" src={icon_2} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">Earn rewards</h1>
            <p className="text-center">
              Explore, earn, redeem, and repeat with our loyalty program.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <img className="w-20" src={icon_3} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">
              Millions of review
            </h1>
            <p className="text-center">
              Plan and book with confidence using reviews from fellow travelers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <img className="w-20" src={icon_4} alt="Customer Support" />
            <h1 className="font-bold text-2xl text-center">Plan your way</h1>
            <p className="text-center">
              Stay flexible with free cancellation and the option to reserve now
              and pay later at no additional cost.
            </p>
          </div>
        </div>
      </section>

      {/* Account Section For Login or Signup */}
      <section className="max-w-screen-md p-4 mx-auto">
        <div className="bg-gray-200 p-1 rounded-md">
          <div className="text-center my-5 space-y-3">
            <h1 className="font-bold text-3xl">
              Log in to manage bookings & EcoQuest Rewards
            </h1>
            <p>
              Do not have an account yet?
              <Link className="font-semibold px-1 underline">Sign up</Link>
            </p>
            <div className="my-10">
              <Link className="text-white py-2 px-24 rounded-lg bg-black">
                Log In
              </Link>
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
          <div>
            <Trips></Trips>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLayout;
