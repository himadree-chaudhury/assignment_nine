import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const { AdventureTitle, Image, EcoFriendlyFeatures} = trip;

    // Mountain Treks, Wildlife Safaris, Forest Expeditions, Camping Retreats, Desert Exploration, Kayaking in Mangroves, Glacier Trekking, Snorkeling or Diving in Marine Reserves, Volcano Hiking 
    
  return (
    <div className="space-y-3 flex flex-col">
          <div>
            <img className="h-40 w-full object-cover" src={Image} alt={AdventureTitle} />
          </div>
          <div className="grow">
            {EcoFriendlyFeatures.map((feature, idx) => (
              <span key={idx} className="text-sm pr-1">
                {feature}
              </span>
            ))}
            <h1 className="font-bold text-xl">{AdventureTitle}</h1>
          </div>
          <Link to={`adventures/${AdventureTitle}`} className="text-black bg-green-300 px-8 py-2 rounded-lg self-start">Explore Now !</Link>

    </div>
  );
};

export default TripCard;

TripCard.propTypes = {
  trip: PropTypes.object,
};
