import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TripCard = ({ trip, direction }) => {
  // *Destructuring Trip Data
  const { AdventureTitle, Image, EcoFriendlyFeatures } = trip;

  return (
    <div style={{ direction: "ltr" }} className="space-y-3 flex flex-col">
      {/* Trip Image */}
      <div>
        <img
          className="h-40 w-full object-cover rounded-lg"
          src={Image}
          alt={AdventureTitle}
        />
      </div>
      <div className="grow">
        {/* Trip Title */}
        <h1 className="font-bold text-xl">{AdventureTitle}</h1>
        {/* Trip EcoFriendly Features */}
        <div className="text-xs leading-tight text-gray-700 grow">
          {EcoFriendlyFeatures.map((feature, idx) => (
            <span key={idx} className=" pr-3 ">
              <span className="text-green-800">*</span>
              {feature}
            </span>
          ))}
        </div>
      </div>
      {/* Explore More Button */}
      <Link
        to={`/${AdventureTitle}`}
        className={`px-6 py-2 text-white bg-green-800 font-semibold rounded-lg ${
          direction === "right" ? "self-start" : "self-end"
        }`}
      >
        Explore Now !
      </Link>
    </div>
  );
};

export default TripCard;

TripCard.propTypes = {
  trip: PropTypes.object,
  direction: PropTypes.string,
};
