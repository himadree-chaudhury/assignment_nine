import Marquee from "react-fast-marquee";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "James Carter",
      image: "https://i.imgur.com/JDYyN3j.jpg",
      review:
        "Unforgettable experience! The guide was amazing, the scenery breathtaking, and everything was perfectly organized. Highly recommend this adventure tour!",
    },
    {
      id: 2,
      name: "Daniel Hughes",
      image: "https://i.imgur.com/neu0a3Q.jpg",
      review:
        "Loved every moment! Smooth booking process, great customer support, and thrilling activities. Viator never disappoints for adventure seekers!",
    },
    {
      id: 3,
      name: "Emily Johnson",
      image: "https://i.imgur.com/y0UoHie.jpg",
      review:
        "An incredible adventure! The tour was well-organized, the guides were fantastic, and the experience was simply unforgettable!",
    },
    {
      id: 4,
      name: "Ethan Thompson",
      image: "https://i.imgur.com/QG0Lmdm.jpg",
      review:
        "Adrenaline rush! The ziplining was insane, and the hiking trails were stunning. Viator made my adventure dreams come true!",
    },
    {
      id: 5,
      name: "Ryan Walker",
      image: "https://i.imgur.com/tuyVWPL.jpg",
      review:
        "Great experience! The itinerary was packed with adventure, and safety was a priority. A must-try for thrill-seekers!",
    },
    {
      id: 6,
      name: "Sophia Martinez",
      image: "https://i.imgur.com/q2fuzap.jpg",
      review:
        "Everything was perfect! From stunning locations to well-planned activities, Viator made this an adventure of a lifetime!",
    },
    {
      id: 7,
      name: "Michael Anderson",
      image: "https://i.imgur.com/wu6yLYU.jpg",
      review:
        "Incredible tour! Everything was well-planned, from transportation to activities. The guides were knowledgeable and super friendly. Will book again!",
    },
    {
      id: 8,
      name: "Joshua Miller",
      image: "https://i.imgur.com/bNzDVgw.jpg",
      review:
        "Booking was easy, and the adventure was unforgettable! Highly recommended for anyone who loves exploring off-the-beaten-path locations.",
    },
    {
      id: 9,
      name: "Olivia Davis",
      image: "https://i.imgur.com/U6ROKWW.jpg",
      review:
        "Best experience ever! The guides were so friendly, and the activities were beyond exciting. I’m already planning my next trip!",
    },
  ];
  return (
    <div className="py-10 ">
      <Marquee
        gradient={true}
        gradientWidth={20}
        pauseOnHover={true}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="w-72 h-72 bg-white rounded-lg shadow-lg p-5 mx-4 flex flex-col items-center text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mb-3"
            />
            <div className="flex justify-center mt-2 text-yellow-500">
              ★ ★ ★ ★ ★
            </div>
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-600">{review.review}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
