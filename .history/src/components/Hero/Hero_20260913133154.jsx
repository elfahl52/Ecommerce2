 
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
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
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <section className="container mx-auto px-3 py-4 sm:px-4 lg:py-8">
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
            >
                {HeroData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="
                                relative min-h-[620px] overflow-hidden rounded-2xl
                                bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200
                                dark:from-[#111] dark:via-[#191919] dark:to-[#0b0b0b]
                                sm:min-h-[560px] sm:rounded-3xl lg:min-h-[540px]
                            "
                        >
                            {/* Background */}
                            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px]" />

                            <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-red-500/5 blur-3xl sm:h-80 sm:w-80" />

                            {/* Top Accent */}
                            <div className="absolute left-0 top-0 h-1 w-20 bg-red-500 sm:w-32 lg:w-44" />

                            {/* Content */}
                            <div
                                className="
                                    relative z-10 flex min-h-[620px] flex-col
                                    items-center justify-center gap-4 px-4 pb-12 pt-8
                                    sm:min-h-[560px] sm:gap-6 sm:px-8
                                    md:flex-row md:justify-between md:gap-0
                                    md:px-10 lg:min-h-[540px] lg:px-16 xl:px-20
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
                                        className="
                                            mb-2 text-xs font-semibold uppercase
                                            tracking-[3px] text-red-500
                                            sm:text-sm lg:text-base
                                        "
                                    >
                                        {slide.subtitle}
                                    </p>

                                    <h1
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                        className="
                                            text-[clamp(2.7rem,8vw,5rem)]
                                            font-extrabold leading-[.9]
                                            tracking-tight text-gray-900
                                            dark:text-white
                                            lg:text-[clamp(4rem,6vw,6rem)]
                                        "
                                    >
                                        {slide.title}
                                    </h1>

                                    <h2
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                        className="
                                            -mt-1 text-[clamp(2.7rem,8vw,5rem)]
                                            font-black leading-[.9]
                                            tracking-tighter text-gray-200
                                            dark:text-[#292929]
                                            lg:text-[clamp(4rem,6vw,6rem)]
                                        "
                                    >
                                        {slide.title2}
                                    </h2>

                                    <p
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        className="
                                            mt-4 max-w-[340px] text-xs
                                            leading-5 text-gray-600
                                            dark:text-gray-400
                                            sm:text-sm sm:leading-6 lg:text-base
                                        "
                                    >
                                        {slide.description}
                                    </p>

                                    <button
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                        className="
                                            group mt-5 inline-flex items-center gap-2
                                            rounded-full bg-red-500 px-6 py-3
                                            text-xs font-semibold text-white
                                            shadow-lg shadow-red-500/20
                                            transition duration-300
                                            hover:bg-red-600
                                            hover:shadow-red-500/40
                                            active:scale-95
                                            sm:mt-6 sm:px-7 sm:py-3.5 sm:text-sm
                                        "
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
                                    className="
                                        relative order-1 flex h-[250px] w-full
                                        items-center justify-center
                                        md:order-2 md:h-full md:w-1/2
                                    "
                                >
                                    <div
                                        className="
                                            absolute h-[190px] w-[190px]
                                            rounded-full bg-white/70 shadow-xl
                                            dark:bg-white/5
                                            sm:h-[250px] sm:w-[250px]
                                            md:h-[300px] md:w-[300px]
                                            lg:h-[380px] lg:w-[380px]
                                            xl:h-[430px] xl:w-[430px]
                                        "
                                    />

                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        loading="lazy"
                                        className="
                                            relative z-10 w-[210px]
                                            max-w-[80%] object-contain
                                            drop-shadow-2xl transition-transform
                                            duration-500 hover:scale-105
                                            sm:w-[280px] md:w-[340px]
                                            lg:w-[420px] xl:w-[480px]
                                        "
                                    />
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 h-1 w-24 bg-red-500 sm:w-36 lg:w-48" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
```
