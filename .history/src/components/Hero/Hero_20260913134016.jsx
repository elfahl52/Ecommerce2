import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";

import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

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
        description: "Experience the future of gaming and entertainment.",
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
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true,
            offset: 40,
        });
    }, []);

    return (
        <section className="container mx-auto px-2 py-3 sm:px-4 sm:py-5 lg:px-6 lg:py-8 dark:bg-gray-700">
            <div className="relative">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop
                >
                    {HeroData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="
                                    relative min-h-[570px] overflow-hidden rounded-2xl
                                    bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200
                                    dark:from-[#111] dark:via-[#191919] dark:to-[#0b0b0b]
                                    sm:min-h-[520px] sm:rounded-3xl
                                    lg:min-h-[500px]
                                "
                            >
                                {/* Background */}
                                <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-red-500/10 blur-3xl sm:h-72 sm:w-72 lg:h-[450px] lg:w-[450px]" />

                                <div className="absolute -bottom-28 -left-20 h-56 w-56 rounded-full bg-red-500/5 blur-3xl sm:h-72 sm:w-72" />

                                {/* Accent */}
                                <div className="absolute left-0 top-0 h-1 w-16 bg-red-500 sm:w-28 lg:w-40" />

                                {/* Content */}
                                <div
                                    className="
                                        relative z-10 flex min-h-[570px] flex-col
                                        items-center justify-center px-5 py-12
                                        sm:min-h-[520px] sm:px-8 sm:py-10
                                        md:min-h-[500px] md:flex-row md:px-10 md:py-8
                                        lg:px-14 xl:px-20
                                    "
                                >
                                    {/* Text */}
                                    <div
                                        className="
                                            order-2 flex w-full flex-col items-center
                                            text-center md:order-1 md:w-1/2
                                            md:items-start md:text-left
                                        "
                                    >
                                        <p
                                            data-aos="fade-up"
                                            className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-red-500 sm:text-sm lg:text-base"
                                        >
                                            {slide.subtitle}
                                        </p>

                                        <h1
                                            data-aos="fade-up"
                                            data-aos-delay="100"
                                            className="text-[clamp(2.5rem,8vw,4.8rem)] font-extrabold leading-[.9] tracking-tight text-gray-900 dark:text-white lg:text-[clamp(3.8rem,5vw,5.5rem)]"
                                        >
                                            {slide.title}
                                        </h1>

                                        <h2
                                            data-aos="fade-right"
                                            data-aos-delay="200"
                                            className="text-[clamp(2.5rem,8vw,4.8rem)] font-black leading-[.9] tracking-tighter text-gray-200 dark:text-[#292929] lg:text-[clamp(3.8rem,5vw,5.5rem)]"
                                        >
                                            {slide.title2}
                                        </h2>

                                        <p
                                            data-aos="fade-up"
                                            data-aos-delay="300"
                                            className="mt-4 max-w-sm text-xs leading-5 text-gray-600 dark:text-gray-400 sm:text-sm sm:leading-6 lg:mt-5 lg:text-base"
                                        >
                                            {slide.description}
                                        </p>

                                        <button
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:bg-red-600 hover:shadow-red-500/40 active:scale-95 sm:mt-6 sm:px-7 sm:py-3.5 sm:text-sm"
                                        >
                                            {slide.btnText}
                                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <div
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                        className="relative order-1 flex h-[220px] w-full items-center justify-center md:order-2 md:h-[380px] md:w-1/2 lg:h-[440px]"
                                    >
                                        <div className="absolute h-[180px] w-[180px] rounded-full bg-white/70 shadow-xl dark:bg-white/5 sm:h-[230px] sm:w-[230px] md:h-[280px] md:w-[280px] lg:h-[350px] lg:w-[350px] xl:h-[400px] xl:w-[400px]" />

                                        <img
                                            src={slide.img}
                                            alt={slide.title}
                                            loading="lazy"
                                            className="relative z-10 w-[200px] max-w-[80%] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 sm:w-[260px] md:w-[320px] lg:w-[400px] xl:w-[450px]"
                                        />
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 h-1 w-20 bg-red-500 sm:w-32 lg:w-44" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Left Arrow */}
                <button
                    className="
                        absolute left-3 top-1/2 z-20 hidden -translate-y-1/2
                        items-center justify-center rounded-full
                        bg-white/90 p-3 text-red-500 shadow-lg
                        transition-all duration-300
                        hover:bg-red-500 hover:text-white
                        md:flex
                        dark:bg-gray-800/90 dark:text-red-400
                        dark:hover:bg-red-500 dark:hover:text-white
                    "
                    onClick={() =>
                        document
                            .querySelector(".swiper")
                            ?.swiper.slidePrev()
                    }
                >
                    <FaChevronLeft className="text-sm" />
                </button>

                {/* Right Arrow */}
                <button
                    className="
                        absolute right-3 top-1/2 z-20 hidden -translate-y-1/2
                        items-center justify-center rounded-full
                        bg-white/90 p-3 text-red-500 shadow-lg
                        transition-all duration-300
                        hover:bg-red-500 hover:text-white
                        md:flex
                        dark:bg-gray-800/90 dark:text-red-400
                        dark:hover:bg-red-500 dark:hover:text-white
                    "
                    onClick={() =>
                        document
                            .querySelector(".swiper")
                            ?.swiper.slideNext()
                    }
                >
                    <FaChevronRight className="text-sm" />
                </button>
            </div>
        </section>
    );
};

export default Hero;