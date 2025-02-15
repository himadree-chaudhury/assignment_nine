import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiClock2, CiMobile1 } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";

const TripDetails = () => {
  const { title } = useParams();
  console.log(title);
  const trips = useLoaderData();
  const trip = trips.find((trip) => trip.AdventureTitle === title);

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

  const checkAvailability = (e) => {
    e.preventDefault();
    const number = e.target.person.value;
    if (BookingAvailability) {
      if (number > MaxGroupSize || number < 0) {
        console.log(number);
      } else {
        console.log(number);
      }
    }
    console.log(number);
  };

  return (
    <div className="max-w-screen-2xl p-4 mx-auto">
      <section>
        <div>
          <h1 className="font-bold text-4xl">{AdventureTitle}</h1>
          <div className="flex gap-5 text-sm text-gray-500 my-2">
            <p>{CategoryName}</p>
            <p>|</p>
            <p>{AdventureLevel}</p>
            <p>|</p>
            <p>{Location}</p>
          </div>
          <div className="grid grid-cols-6 gap-2">
            <img
              className="col-span-4 rounded-xl w-full h-full object-cover"
              src={Image}
              alt={AdventureTitle}
            />
            <div className="col-span-2 ">
              <div className="p-4 border border-gray-200 rounded-xl shadow-xl h-full flex flex-col space-y-3">
                <div className="grow">
                  <h1 className="font-bold text-2xl">
                    From ${AdventureCost}{" "}
                    <span className="font-semibold text-lg">per person</span>
                  </h1>
                  <p>Maximum Group Size : {MaxGroupSize}</p>
                  <p className="font-semibold underline">
                    Lowest Price Guarantee
                  </p>
                </div>
                <h1 className="font-bold text-xl grow">
                  Select Date and Travelers
                </h1>
                <form
                  onSubmit={checkAvailability}
                  className="flex flex-col space-y-3 grow"
                >
                  <input
                    className="border border-gray-400 rounded-lg px-6 py-2
                  "
                    type="date"
                  />
                  <input
                    className="border border-gray-400 rounded-lg px-6 py-2
                  "
                    type="number"
                    name="person"
                    placeholder="2 Adults"
                  />
                  <button className="px-6 py-2 text-white bg-green-800 font-semibold rounded-lg">
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
                  <Link className="px-6 py-2 flex justify-center text-white bg-green-800 font-semibold rounded-lg ">
                    Talk with Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-gray-200 my-5" />

          <div className="flex gap-5 items-center">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <CiClock2 className="text-green-500" />
              {Duration} (approx.)
            </p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              <CiMobile1 className="text-green-500" />
              Mobile Ticket
            </p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              <BiConversation className="text-green-500" />
              Offered in : English
            </p>
          </div>
          <hr className="text-gray-200 my-5" />
        </div>
        <h1 className="font-bold text-3xl my-3">Overview 🧾</h1>
        <p className="leading-tight text-justify">{ShortDescription}</p>
        <h1 className="font-bold text-2xl mt-16 mb-5">
          Why Travelers Choose This Tour 🤔
        </h1>
        <ul className="list-disc ml-5">
          {EcoFriendlyFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <h1 className="font-bold text-2xl  mt-8 mb-5">What is Included? 🤷‍♂️</h1>
        {IncludedItems.map((item, idx) => (
          <p key={idx}>✅ {item}</p>
        ))}
        <h1 className="font-bold text-2xl mt-8 mb-5">Special Instruction ⚠️</h1>
        {SpecialInstructions.map((instruction, idx) => (
          <p key={idx}>❗{instruction}</p>
        ))}
      </section>
    </div>
  );
};

export default TripDetails;
