 import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/1200/500?random=1",
      title: "الشريحة الأولى",
      description: "وصف مميز للمنتج الأول",
    },
    {
      id: 2,
      image: "https://picsum.photos/1200/500?random=2",
      title: "الشريحة الثانية",
      description: "وصف مميز للمنتج الثاني",
    },
    {
      id: 3,
      image: "https://picsum.photos/1200/500?random=3",
      title: "الشريحة الثالثة",
      description: "وصف مميز للمنتج الثالث",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-2xl">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 text-center px-4">
                  {slide.title}
                </h2>
                <p className="text-white text-lg md:text-xl mb-6 text-center px-4">
                  {slide.description}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                  تسوق الآن
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;