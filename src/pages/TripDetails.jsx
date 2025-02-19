import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { CiClock2, CiMobile1 } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const TripDetails = () => {
  // *Dynamic Page Title
  const location = useLocation();
  const locationTitle = decodeURIComponent(location.pathname).slice(1);
  useEffect(() => {
    document.title = locationTitle;
  }, [locationTitle]);

  // *Get URL Params & Loader Data
  const { title } = useParams();
  const trips = useLoaderData();
  // *Find The Trip By Title That Matches The URL Params
  const trip = trips.find((trip) => trip.AdventureTitle === title);

  // *Destructuring Trip Object
  const {
    AdventureTitle,
    Image,
    CategoryName,
    ShortDescription,
    AdventureCost,
    BookingAvailability,
    Location,
    Duration,
    AdventureLevel,
    IncludedItems,
    EcoFriendlyFeatures,
    MaxGroupSize,
    SpecialInstructions,
  } = trip;

  // *Check Availability Function
  const checkAvailability = (e) => {
    e.preventDefault();
    const number = e.target.person.value;
    if (BookingAvailability) {
      if (number > MaxGroupSize || number < 0) {
        // *Toastify Notification
        toast.warn("Sorry! Not available", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      } else {
        // *Toastify Notification
        toast.success("Available !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      }
    }
  };

  // *State For Modal Visibility
  const [showModal, setShowModal] = useState(false);

  // *Handle Expert Click Function
  const handleExpertClick = () => {
    const now = new Date();
    const hours = now.getHours();
    // *Check If The Current Time Is Between 10 AM to 8 PM
    if (hours >= 10 && hours < 20) {
      window.open("https://meet.google.com/new", "_blank");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="max-w-screen-2xl p-4 mx-auto">
      <section>
        <div>
          {/* Title */}
          <h1 className="font-bold text-4xl">{AdventureTitle}</h1>
          {/* Category, Level & Location */}
          <div className="flex gap-5 text-sm text-gray-500 my-2">
            <p>🎯{CategoryName}</p>
            <p>|</p>
            <p>⚓{AdventureLevel}</p>
            <p>|</p>
            <p>🚩{Location}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
            {/* Image */}
            <img
              className="col-span-4 rounded-xl w-full h-full object-cover"
              src={Image}
              alt={AdventureTitle}
            />
            <div className="col-span-2 ">
              <div className="p-4 border border-gray-200 rounded-xl h-full flex flex-col space-y-3">
                <div className="grow">
                  {/* Price */}
                  <h1 className="font-bold text-2xl">
                    From ${AdventureCost}{" "}
                    <span className="font-semibold text-lg">per person</span>
                  </h1>
                  {/* Group Size */}
                  <p>Maximum Group Size : {MaxGroupSize}</p>
                  <p className="font-semibold underline">
                    Lowest Price Guarantee
                  </p>
                </div>
                <h1 className="font-bold text-xl grow">
                  Select Date and Travelers
                </h1>
                {/* Availability Check Form */}
                <form
                  onSubmit={checkAvailability}
                  className="flex flex-col space-y-3 grow"
                >
                  {/* Date Input */}
                  <input
                    className="border border-gray-400 rounded-lg px-6 py-2
                  "
                    type="date"
                    name="date"
                  />
                  {/* Person Input */}
                  <input
                    className="border border-gray-400 rounded-lg px-6 py-2
                  "
                    type="number"
                    name="person"
                    placeholder="2 Adults"
                  />
                  {/* Availability Check BUtton */}
                  <button className="px-6 py-2 text-white bg-green-800 font-semibold rounded-lg cursor-pointer">
                    Check Availability
                  </button>
                </form>
                <div className="bg-green-100 p-4 rounded-lg grow space-y-3">
                  <p>
                    ✅
                    <span className="font-bold underline">
                      Free cancellation
                    </span>
                    up to 24 hours before the experience starts (local time)
                  </p>
                  <p>
                    ✅
                    <span className="font-bold underline">
                      Reserve Now and Pay Later
                    </span>
                    - Secure your spot while staying flexible
                  </p>
                  {/* Talk With Expert Button */}
                  <Link
                    onClick={handleExpertClick}
                    className="px-6 py-2 flex justify-center text-white bg-green-800 font-semibold rounded-lg "
                  >
                    Talk with Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-gray-200 my-5" />
          <div className="flex gap-1 md:gap-5 items-center">
            {/* Duration */}
            <p className="flex items-center gap-1 text-lg font-semibold">
              <CiClock2 className="text-green-500 text-5xl md:text-2xl" />
              {Duration} (approx.)
            </p>
            {/* Ticket */}
            <p className="flex items-center gap-2 text-lg font-semibold">
              <CiMobile1 className="text-green-500 text-5xl md:text-2xl" />
              Mobile Ticket
            </p>
            {/* Language */}
            <p className="flex items-center gap-2 text-lg font-semibold">
              <BiConversation className="text-green-500 text-5xl md:text-2xl" />
              Offered : English
            </p>
          </div>
          <hr className="text-gray-200 my-5" />
        </div>
        {/* Description */}
        <h1 className="font-bold text-3xl my-3">Overview 🧾</h1>
        <p className="leading-tight text-justify">{ShortDescription}</p>
        {/* EcoFriendly Features */}
        <h1 className="font-bold text-2xl mt-16 mb-5">
          Why Travelers Choose This Tour 🤔
        </h1>
        <ul className="list-disc ml-5">
          {EcoFriendlyFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        {/* Included Features */}
        <h1 className="font-bold text-2xl  mt-8 mb-5">What is Included? 🤷‍♂️</h1>
        {IncludedItems.map((item, idx) => (
          <p key={idx}>✅ {item}</p>
        ))}
        {/* Instructions */}
        <h1 className="font-bold text-2xl mt-8 mb-5">Special Instruction ⚠️</h1>
        {SpecialInstructions.map((instruction, idx) => (
          <p key={idx}>❗{instruction}</p>
        ))}
      </section>
      {/* Modal For Expert Consultation */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Expert Consultation Hours</h2>
            <p>
              Our experts are available from{" "}
              <span className="font-bold underline">10:00 AM to 8:00 PM</span>{" "}
              (Local Time).
            </p>
            <p>Please Try then.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-green-800 text-white rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripDetails;
