// import styles bundle
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <h1 className="animate__animated animate__fadeIn font-extrabold text-7xl">
        Himadree Chaudhury
      </h1>

      <div
        data-aos="fade-up"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        data-aos-offset="300"
        data-aos-anchor-placement="center-bottom"
      ></div>
    </>
  );
}

export default App;
