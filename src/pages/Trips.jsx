import { useEffect, useState } from "react";
import TripCard from "./TripCard";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <h1 className="font-bold text-2xl text-center my-5">Mountain Treks</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {mountainTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">Wildlife Safaris</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {wildlifeTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">
        Forest Expeditions
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {forestTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">Camping Retreats</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {campingTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">
        Desert Exploration
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {desertTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">
        Kayaking in Mangroves
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {mangrovesTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">Glacier Trekking</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {glacierTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">
        Diving in Marine Reserves
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {snorkelingTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <h1 className="font-bold text-2xl text-center my-5">Volcano Hiking</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      >
        {volcanoTrips.map((trip) => (
          <TripCard key={trip.ID} trip={trip}></TripCard>
        ))}
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem dicta dolorum fuga ullam culpa, assumenda corporis minima explicabo, nam, unde quia. Et autem veritatis aliquam nam eum eligendi, repellat voluptates ipsam maxime sed animi iusto sequi neque odit eveniet ad consequuntur mollitia nostrum magni deleniti. Distinctio vero perferendis ad molestiae totam. At quisquam unde hic amet eaque minus eos nam saepe. Voluptatem ad earum quis consequatur labore eligendi libero fugit consequuntur voluptatum commodi, aliquam ex placeat maiores. Natus voluptatem, iure eum ea eligendi, sequi magnam veniam saepe minima neque ad, eveniet recusandae esse laboriosam reprehenderit. Repudiandae voluptatem illum quos similique quasi quas saepe maiores odit, facilis suscipit ratione dicta nostrum nam voluptates in minima ipsam libero, rem laborum? Eos suscipit beatae sequi neque adipisci enim assumenda voluptatem veritatis doloribus aut repudiandae, totam vitae a perferendis. Dolorum deleniti quo architecto, a quam rerum natus eum blanditiis vitae facere voluptatem voluptas explicabo accusantium dolore ab illo amet ipsum laudantium soluta quaerat porro fugiat ullam. Velit et aut, tenetur repellendus beatae earum mollitia, voluptatem molestias, nisi ad suscipit ipsa optio inventore a corporis libero ipsam in numquam officiis veniam! Optio blanditiis autem dignissimos amet accusantium quidem vitae reprehenderit distinctio cum vel perspiciatis beatae eveniet provident, ab dolorum ipsam ex exercitationem quasi possimus voluptate necessitatibus delectus. Doloribus aspernatur repudiandae, ad sed cum voluptatibus quis aliquid iure numquam ut corrupti qui eos? Cumque eos excepturi dicta. Minus vero sapiente repellat labore vel itaque laborum ullam iure ad, fugiat quae quo repellendus unde, numquam commodi earum at consectetur, amet nisi laboriosam illo porro. Officia porro voluptate labore laudantium consequatur, beatae necessitatibus enim reprehenderit, pariatur eaque nemo eligendi. Vel sit sed harum quibusdam quidem provident, temporibus dicta magnam neque libero, nihil, saepe facilis tempore incidunt. Doloremque dignissimos rem explicabo, autem minus porro maiores aut mollitia consequatur? Quos quas, nobis sunt earum dolor, repellendus nesciunt voluptates blanditiis, in perspiciatis doloremque officiis atque alias magni aut illum quo corrupti eius totam? Tempora impedit placeat incidunt corrupti vel ab quam molestias animi ut suscipit, dicta fuga eum deleniti distinctio, ratione sequi labore, alias dolorum iusto minima illo modi asperiores doloremque. Corrupti deserunt rem ex ab doloribus. Similique, deleniti aliquid ab corrupti vel inventore quasi iste voluptatibus suscipit consectetur laborum modi, dolores fugiat eligendi, odit voluptas necessitatibus corporis dolore labore provident. Unde sunt minima explicabo saepe, est soluta voluptatum et quis molestias praesentium corrupti quia, vitae officia esse illo repellat magni itaque non culpa nesciunt? Reiciendis in a ducimus quaerat consectetur laboriosam, hic deserunt maiores veniam explicabo rem culpa fuga, maxime, dolorum adipisci obcaecati expedita ipsam quos id deleniti nemo aspernatur suscipit aliquam harum? Hic voluptates explicabo excepturi numquam voluptas sapiente accusantium omnis debitis dolor, neque, ut sequi porro possimus modi nesciunt quas eligendi cupiditate, incidunt tempora quidem ab. Accusamus voluptatem iste consequuntur qui inventore. Reprehenderit, rerum. Iure, consectetur suscipit consequatur officia, at voluptate quae in assumenda nostrum nesciunt, fugiat consequuntur quo voluptates soluta quisquam iste ad reiciendis. Facere dolores omnis expedita reiciendis sed corporis accusamus alias maxime consectetur, laudantium, eveniet fugit inventore, aliquid repellendus impedit quidem nesciunt beatae. Esse magni exercitationem voluptatem odit ipsum cupiditate tenetur, autem aliquid voluptatibus dolorem maiores voluptate adipisci odio harum aperiam mollitia animi unde. Quae officia eos obcaecati sunt tempora similique fuga dolor, distinctio excepturi quaerat cupiditate repellat facere provident, accusantium fugit voluptas quasi veritatis eveniet exercitationem magnam quibusdam, perferendis sequi porro. Harum quia assumenda necessitatibus similique. Suscipit odio deleniti fuga perspiciatis perferendis quasi est! Corrupti quia quidem numquam voluptatem. Iusto nemo ullam odit officia esse earum labore eum quae ut aut, vero aliquam omnis iste facere tenetur illo praesentium totam culpa. Quis assumenda esse impedit qui, iure deleniti aliquid ducimus nostrum aut provident minima libero doloribus autem placeat modi quas minus nihil perferendis cum reprehenderit necessitatibus amet mollitia quo architecto. Quisquam nulla aliquam dignissimos, aut itaque et minima reprehenderit, alias accusantium, doloribus accusamus sit culpa unde nisi nesciunt eaque at voluptatum amet maxime. Itaque dolore nulla suscipit dolor officiis temporibus vitae cupiditate iusto ullam beatae inventore ex ut qui soluta illum magnam consequuntur, ad iure ipsa et eaque fugit! Aperiam earum eius ratione fugit quam nemo dicta optio, excepturi vero porro! Adipisci facilis debitis natus rerum aut. Atque ut facilis laudantium velit, magni voluptas harum enim fugit rerum possimus vitae deserunt cupiditate quo distinctio veritatis sapiente provident facere nesciunt? Dignissimos ratione neque magnam, dolore dolorem aliquam numquam, iusto maxime sequi animi totam. Impedit et incidunt ducimus facere! Consequatur voluptates rem aliquam odit adipisci placeat, sunt at magni nemo labore praesentium! Asperiores, voluptatem. Vel, quia ipsam iure quasi praesentium aspernatur odit cumque eos, labore consequatur eius facilis porro excepturi beatae quis dolorem dicta soluta officia ea illo exercitationem voluptatibus nobis. Error distinctio illo, ea repudiandae animi eum! Adipisci cupiditate consectetur blanditiis maxime libero saepe placeat id debitis commodi ducimus corporis reiciendis vitae facere, eveniet quo odio architecto suscipit impedit sequi illum numquam veritatis? Voluptatibus ipsam rerum suscipit velit. Facere id quaerat eaque repellat in? Quo saepe iure animi ea! Perferendis quis ad optio esse dignissimos a vero laudantium expedita, tempore labore. Ratione consectetur soluta similique, ducimus pariatur ut neque explicabo cumque officiis. Id aliquid facere laboriosam sint molestias corporis repellat optio consequuntur itaque possimus, assumenda dicta exercitationem ex? Earum, id distinctio? Asperiores officiis sapiente quas alias cum deleniti aperiam a sed nam voluptatibus! At distinctio ut, enim doloremque amet sit, laboriosam in commodi ratione quod officiis. Rem porro earum autem itaque assumenda, optio repellendus vel enim exercitationem obcaecati fugiat corporis excepturi pariatur nostrum fuga saepe, neque quasi vero quaerat iure quis provident magni? Optio magni dolorem blanditiis sit repellendus voluptas odit, sunt distinctio provident? Quis perspiciatis exercitationem, dolore non omnis sunt vitae quos consectetur rem aliquid eum voluptates unde quo repudiandae laborum repellendus repellat voluptate hic commodi. Recusandae libero minus nisi ad! Accusamus, hic dignissimos quaerat veniam ducimus culpa cupiditate exercitationem quo eligendi repellat velit laudantium, commodi neque vel nesciunt aliquid nobis dolores illo. Quae sapiente distinctio deserunt, suscipit possimus, amet illo qui assumenda quos iure numquam ab asperiores non omnis ipsum, corrupti at.</p>
    </div>
  );
};

export default Trips;
