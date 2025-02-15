import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const { AdventureTitle, Image, EcoFriendlyFeatures} = trip;

    // Mountain Treks, Wildlife Safaris, Forest Expeditions, Camping Retreats, Desert Exploration, Kayaking in Mangroves, Glacier Trekking, Snorkeling or Diving in Marine Reserves, Volcano Hiking 
    
  return (
    <div className="space-y-3 flex flex-col">
      <div className="">
        <img
          className="h-40 w-full object-cover"
          src={Image}
          alt={AdventureTitle}
        />
      </div>
      <div className="grow">
        <div className="text-sm leading-tight text-gray-700 grow">
          {EcoFriendlyFeatures.map((feature, idx) => (
            <span key={idx} className=" pr-3 ">
              * {feature}
            </span>
          ))}
        </div>
        <h1 className="font-bold text-xl">{AdventureTitle}</h1>
      </div>
      <Link
        to={`adventures/${AdventureTitle}`}
        className="px-6 py-2 text-white bg-green-800 font-semibold rounded-lg self-start"
      >
        Explore Now !
      </Link>
    </div>
  );
};

export default TripCard;

TripCard.propTypes = {
  trip: PropTypes.object,
};
