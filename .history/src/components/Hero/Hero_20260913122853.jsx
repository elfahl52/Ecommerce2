import React from "react";
import Slider from "react-slick";

// ⚠️ هام جداً: استيراد ملفات التنسيق الخاصة بـ slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // إعدادات السلايدر
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  // بيانات الشرائح
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
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="relative">
              {/* الصورة */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl"
              />

              {/* النص فوق الصورة */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-2xl">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-white text-lg md:text-xl mb-6">
                  {slide.description}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                  تسوق الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;