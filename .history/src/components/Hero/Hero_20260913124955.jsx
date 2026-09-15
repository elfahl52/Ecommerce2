import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ⚠️ استيراد ملفات التنسيق الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// استيراد الصور المحلية كما في صورتك
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/"; // تأكد من مسار الصورة الثالثة

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Book",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl"
      >
        {HeroData.map((item) => (
          <SwiperSlide key={item.id}>
            {/* تصميم السلايدر (نص على اليسار وصورة على اليمين) */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-6 md:p-12 gap-8 min-h-[400px]">
              
              {/* قسم النصوص */}
              <div className="flex-1 text-center md:text-left space-y-4 z-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-500">
                  {item.subtitle}
                </h3>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                  {item.title}{" "}
                  <span className="text-orange-500">{item.title2}</span>
                </h1>
                <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-sm md:text-base">
                  {item.description}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg mt-4">
                  Shop Now
                </button>
              </div>

              {/* قسم الصورة */}
              <div className="flex-1 flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;