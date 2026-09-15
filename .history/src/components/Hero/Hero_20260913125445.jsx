import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استيراد ملفات التنسيق الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// استيراد الصور المحلية (تأكد من صحة المسارات حسب مشروعك)
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets//macbook.png"; 

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "HEADPHONE",
    description: "lorem His Life will forever be Changed dolor sit amet.",
    btnText: "Shop By Category",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "VR Headset",
    title: "Virtual",
    title2: "REALITY",
    description: "Experience the future of gaming and entertainment.",
    btnText: "Explore VR",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Smart Look",
    title: "Modern",
    title2: "DESIGN",
    description: "Elegant and functional design for everyday use.",
    btnText: "View Collection",
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
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="rounded-3xl overflow-hidden"
      >
        {HeroData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* الخلفية الرئيسية للشريحة - تتغير تلقائياً بين الفاتح والداكن */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-[#f0f2f5] dark:bg-[#1a1a1a] rounded-3xl p-8 md:p-16 min-h-[500px] relative overflow-hidden transition-colors duration-300">
              
              {/* النصوص */}
              <div className="md:w-1/2 z-10 text-left space-y-2 md:space-y-4 order-2 md:order-1">
                {/* Subtitle */}
                <p className="text-gray-800 dark:text-gray-300 font-semibold text-sm md:text-base tracking-wide">
                  {slide.subtitle}
                </p>
                
                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white leading-tight">
                  {slide.title}
                </h1>
                
                {/* Large Background Title */}
                <h2 className="text-6xl md:text-8xl font-black text-white dark:text-gray-800 leading-none -mt-2 md:-mt-4 opacity-90">
                  {slide.title2}
                </h2>
                
                {/* Button */}
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 mt-6 shadow-lg hover:shadow-red-500/30">
                  {slide.btnText}
                </button>
              </div>

              {/* الصورة */}
              <div className="md:w-1/2 flex justify-center items-center order-1 md:order-2 relative z-20">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full max-w-lg object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* زخرفة خلفية دائرية (اختياري لجمالية أكثر) */}
              <div className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white dark:bg-gray-800 rounded-full opacity-20 blur-3xl -z-0 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;