import { useEffect, useState } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TripCard from "./tripCard";

const Trips = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("tripData.json")
      .then((res) => res.json())
      .then((data) => setTrips(data));
    AOS.init();
  }, []);

  // Mountain Treks, Wildlife Safaris, Forest Expeditions, Camping Retreats, Desert Exploration, Kayaking in Mangroves, Glacier Trekking, Snorkeling or Diving in Marine Reserves, Volcano Hiking

  const mountainTrips = trips.filter(
    (trip) => trip.CategoryName === "Mountain Treks"
  );
  const wildlifeTrips = trips.filter(
    (trip) => trip.CategoryName === "Wildlife Safaris"
  );
  const forestTrips = trips.filter(
    (trip) => trip.CategoryName === "Forest Expeditions"
  );
  const campingTrips = trips.filter(
    (trip) => trip.CategoryName === "Camping Retreats"
  );
  const desertTrips = trips.filter(
    (trip) => trip.CategoryName === "Desert Exploration"
  );
  const mangrovesTrips = trips.filter(
    (trip) => trip.CategoryName === "Kayaking in Mangroves"
  );
  const glacierTrips = trips.filter(
    (trip) => trip.CategoryName === "Glacier Trekking"
  );
  const snorkelingTrips = trips.filter(
    (trip) => trip.CategoryName === "Snorkeling"
  );
  const volcanoTrips = trips.filter(
    (trip) => trip.CategoryName === "Volcano Hiking"
  );

  return (
    <div className="space-y-5">
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Mountain Treks
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {mountainTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Wildlife Safaris
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {wildlifeTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Forest Expeditions
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {forestTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Camping Retreats
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {campingTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Desert Exploration
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {desertTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Kayaking in Mangroves
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {mangrovesTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Glacier Trekking
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {glacierTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Diving in Marine Reserves
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {snorkelingTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5 animate__animated animate__headShake">
        Volcano Hiking
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="top-bottom"
      >
        {volcanoTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
    </div>
  );
};

export default Trips;
