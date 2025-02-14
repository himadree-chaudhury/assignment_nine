import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// *Import Carousel Images
import carousel_one from "../assets/carousel-1.jpg";
import carousel_two from "../assets/carousel-2.jpg";
import carousel_three from "../assets/carousel-3.jpg";
import carousel_four from "../assets/carousel-4.jpg";
import carousel_five from "../assets/carousel-5.jpg";
import carousel_six from "../assets/carousel-6.jpg";
import carousel_seven from "../assets/carousel-4.jpg";

const Header = () => {
  return (
    <div>
      <div className="relative">
        <div>
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
            <SwiperSlide>
              <img src={carousel_one} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel_two} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel_three} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel_four} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel_five} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel_six} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carousel_seven} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute top-40 z-10 text-center mx-auto w-full px-5 space-y-3">
          <h1 className="font-extrabold text-5xl text-white">
            Do more with EcoQuest
          </h1>
          <p className="font-bold text-2xl text-white">
            Plan better with 300,000+ travel experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
