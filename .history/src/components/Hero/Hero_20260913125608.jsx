```jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "HEADPHONE",
        description:
            "Experience premium sound with powerful bass and crystal clear audio.",
        btnText: "Shop Now",
    },
    {
        id: 2,
        img: Image2,
        subtitle: "VR Headset",
        title: "Virtual",
        title2: "REALITY",
        description:
            "Experience the future of gaming and entertainment.",
        btnText: "Explore VR",
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Smart Look",
        title: "Modern",
        title2: "DESIGN",
        description:
            "Elegant and functional design for your everyday lifestyle.",
        btnText: "View Collection",
    },
];

const Hero = () => {
    return (
        <section className="container mx-auto px-4 py-6 md:py-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop
                className="hero-swiper"
            >
                {HeroData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative min-h-[480px] md:min-h-[560px] overflow-hidden rounded-[30px] bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-[#151515] dark:via-[#1c1c1c] dark:to-[#101010] transition-colors duration-500">

                            {/* Background Circle */}
                            <div className="absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-red-500/10 blur-2xl md:h-[500px] md:w-[500px]" />

                            <div className="absolute -bottom-32 -left-20 h-[300px] w-[300px] rounded-full bg-red-500/5 blur-3xl" />

                            {/* Content */}
                            <div className="relative z-10 flex min-h-[480px] flex-col items-center justify-between px-6 py-10 md:min-h-[560px] md:flex-row md:px-14 lg:px-20">

                                {/* Text */}
                                <div className="order-2 w-full text-center md:order-1 md:w-1/2 md:text-left">

                                    <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-red-500 md:text-base">
                                        {slide.subtitle}
                                    </p>

                                    <h1 className="text-5xl font-extrabold leading-none text-gray-900 dark:text-white md:text-7xl lg:text-8xl">
                                        {slide.title}
                                    </h1>

                                    <h2 className="mt-1 text-5xl font-black leading-none tracking-tight text-gray-200 dark:text-[#292929] md:text-7xl lg:text-8xl">
                                        {slide.title2}
                                    </h2>

                                    <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-600 dark:text-gray-400 md:mx-0 md:text-base">
                                        {slide.description}
                                    </p>

                                    <button className="group mt-7 inline-flex items-center gap-3 rounded-full bg-red-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/40">
                                        {slide.btnText}

                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </button>
                                </div>

                                {/* Image */}
                                <div className="relative order-1 flex w-full items-center justify-center md:order-2 md:w-1/2">

                                    {/* Image Circle */}
                                    <div className="absolute h-[250px] w-[250px] rounded-full bg-white/70 shadow-xl dark:bg-white/5 md:h-[400px] md:w-[400px]" />

                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className="relative z-10 w-[250px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 md:w-[420px] lg:w-[500px]"
                                    />
                                </div>
                            </div>

                            {/* Small Decorative Line */}
                            <div className="absolute bottom-0 left-0 h-1 w-32 bg-red-500 md:w-48" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Custom CSS */}
            <style>{`
                .hero-swiper .swiper-button-next,
                .hero-swiper .swiper-button-prev {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.9);
                    color: #ef4444;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                }

                .dark .hero-swiper .swiper-button-next,
                .dark .hero-swiper .swiper-button-prev {
                    background: rgba(40, 40, 40, 0.9);
                    color: #f87171;
                }

                .hero-swiper .swiper-button-next::after,
                .hero-swiper .swiper-button-prev::after {
                    font-size: 16px;
                    font-weight: bold;
                }

                .hero-swiper .swiper-button-next:hover,
                .hero-swiper .swiper-button-prev:hover {
                    background: #ef4444;
                    color: white;
                }

                .hero-swiper .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: #999;
                    opacity: 0.5;
                }

                .hero-swiper .swiper-pagination-bullet-active {
                    width: 24px;
                    border-radius: 10px;
                    background: #ef4444;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default Hero;
 
