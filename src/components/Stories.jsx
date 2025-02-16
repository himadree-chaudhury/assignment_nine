import {  useRef } from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Lost in Paris: A Solo Adventure to Remember",
    image: "https://i.imgur.com/v0MQqli.jpg",
    description:
      "A spontaneous trip to Paris turns into an unforgettable adventure of self-discovery, as I wander through charming streets, savor local delicacies, and embrace the art of getting lost.",
  },
  {
    title: "Overcoming Fear: My First Scuba Dive in Thailand",
    image: "https://i.imgur.com/MlbgvY3.jpg",
    description:
      "Facing fears head-on, I take a deep breath and dive into Thailand’s oceans, encountering vibrant marine life, colorful coral reefs, and a newfound love for the deep blue sea.",
  },
  {
    title: "Grand Canyon Journey: A Grandfather’s Last Wish",
    image: "https://i.imgur.com/vPuanTo.jpg",
    description:
      "Honoring my grandfather’s final wish, I embark on an emotional journey through the breathtaking Grand Canyon, where every step brings cherished memories and a deep appreciation for nature.",
  },
  {
    title: "Getting Lost in Tokyo Led to an Epic Night",
    image: "https://i.imgur.com/1x74esc.jpg",
    description:
      "One wrong turn in Tokyo leads me to an extraordinary night filled with neon-lit streets, hidden gems, incredible street food, and unforgettable encounters with locals who redefine hospitality.",
  },
  {
    title: "Reaching the Peaks: A Life-Changing Swiss Alps Hike",
    image: "https://i.imgur.com/jh0hoqu.jpg",
    description:
      "A breathtaking journey through the Swiss Alps tests my endurance, rewards me with panoramic views, and teaches me the beauty of patience, perseverance, and pushing beyond my limits.",
  },
  {
    title: "Chance Encounter in Rome: A Love Story Begins",
    image: "https://i.imgur.com/UYSnTW4.jpg",
    description:
      "A simple walk through Rome’s cobblestone streets turns into an enchanting evening, where fate introduces me to a stranger, sparking a love story I never expected to unfold.",
  },
  {
    title: "Wild Encounters: A Transformative Safari in Africa",
    image: "https://i.imgur.com/6Pum0UU.jpg",
    description:
      "Exploring the vast landscapes of Africa, I witness majestic wildlife up close, learn about conservation efforts, and find myself deeply connected to the raw beauty of nature.",
  },
  {
    title: "Secrets of Machu Picchu: A Journey of Discovery",
    image: "https://i.imgur.com/M9jFQ1R.jpg",
    description:
      "Trekking through the mystical ruins of Machu Picchu, I uncover the secrets of the Incas, immerse myself in ancient history, and experience a profound moment of personal transformation.",
  },
  {
    title: "Chasing the Northern Lights: A Dreamlike Arctic Adventure",
    image: "https://i.imgur.com/m2xTYcS.jpg",
    description:
      "Under Norway’s dazzling aurora borealis, I stand in awe as dancing lights illuminate the Arctic sky, fulfilling a lifelong dream and capturing a moment of pure, magical wonder.",
  },
];

const Stories = () => {
  const scrollRef = useRef(null);



  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 p-2 rounded-full z-10 cursor-pointer border founded-full"
        >
          <FaChevronLeft />
        </button>
        <div className=" w-full px-2 md:px-10 lg:px-16">
          <div
            ref={scrollRef}
            className="flex space-x-6 p-4 no-scrollbar overflow-x-hidden"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 rounded-2xl shadow-lg p-4"
                
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
                <Link className="text-green-700">Read More</Link>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 p-2 rounded-full z-10 cursor-pointer border founded-full"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Stories;
