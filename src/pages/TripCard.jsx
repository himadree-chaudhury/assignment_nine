import PropTypes from "prop-types";

const TripCard = ({ trip }) => {
  const { AdventureTitle, Image, EcoFriendlyFeatures} = trip;

    // Mountain Treks, Wildlife Safaris, Forest Expeditions, Camping Retreats, Desert Exploration, Kayaking in Mangroves, Glacier Trekking, Snorkeling or Diving in Marine Reserves, Volcano Hiking 
    
  return (
    <div className="">
          <div>
            <img className="h-40 object-contain" src={Image} alt={AdventureTitle} />
          </div>
          <div>
            {EcoFriendlyFeatures.map((feature, idx) => (
              <span key={idx} className="text-sm pr-1">
                {feature}
              </span>
            ))}
            <h1 className="font-bold text-xl">{AdventureTitle}</h1>
          </div>

    </div>
  );
};

export default TripCard;

TripCard.propTypes = {
  trip: PropTypes.object,
};
