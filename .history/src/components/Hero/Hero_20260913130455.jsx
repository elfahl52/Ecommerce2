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
        <section className="container mx-auto px-3 py-4 sm:px-4 sm:py-4 lg:py-8">
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
                        <div
                            className="
                                relative
                                min-h-[620px]
                                overflow-hidden
                                rounded-2xl
                                bg-gradient-to-br
                                from-gray-100
                                via-gray-50
                                to-gray-200
                                dark:from-[#111111]
                                dark:via-[#191919]
                                dark:to-[#0b0b0b]
                                transition-colors
                                duration-500
                                sm:min-h-[560px]
                                sm:rounded-3xl
                                lg:min-h-[540px]
                            "
                        >
                            {/* Background Decorations */}

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -right-24
                                    -top-24
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-red-500/10
                                    blur-3xl
                                    sm:h-80
                                    sm:w-80
                                    lg:h-[500px]
                                    lg:w-[500px]
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    -bottom-32
                                    -left-24
                                    h-64
                                    w-64
                                    rounded-full
                                    bg-red-500/5
                                    blur-3xl
                                    sm:h-80
                                    sm:w-80
                                "
                            />

                            {/* Red Accent */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-1
                                    w-20
                                    bg-red-500
                                    sm:w-32
                                    lg:w-44
                                "
                            />

                            {/* Main Content */}
                            <div
                                className="
                                    relative
                                    z-10
                                    flex
                                    min-h-[620px]
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-4
                                    px-4
                                    pb-12
                                    pt-8
                                    sm:min-h-[560px]
                                    sm:gap-6
                                    sm:px-8
                                    sm:pt-10
                                    md:flex-row
                                    md:justify-between
                                    md:gap-0
                                    md:px-10
                                    lg:min-h-[540px]
                                    lg:px-16
                                    xl:px-20
                                "
                            >
                                {/* ================= TEXT ================= */}

                                <div
                                    className="
                                        order-2
                                        flex
                                        w-full
                                        flex-col
                                        items-center
                                        text-center
                                        md:order-1
                                        md:w-[52%]
                                        md:items-start
                                        md:text-left
                                        lg:w-1/2
                                    "
                                >
                                    {/* Subtitle */}
                                    <p
                                        className="
                                            mb-2
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-[3px]
                                            text-red-500
                                            sm:text-sm
                                            sm:tracking-[4px]
                                            lg:text-base
                                        "
                                    >
                                        {slide.subtitle}
                                    </p>

                                    {/* Main Title */}
                                    <h1
                                        className="
                                            font-extrabold
                                            leading-[0.9]
                                            tracking-tight
                                            text-gray-900
                                            dark:text-white
                                            text-[clamp(2.7rem,8vw,5rem)]
                                            lg:text-[clamp(4rem,6vw,6rem)]
                                        "
                                    >
                                        {slide.title}
                                    </h1>

                                    {/* Background Title */}
                                    <h2
                                        className="
                                            -mt-1
                                            font-black
                                            leading-[0.9]
                                            tracking-tighter
                                            text-gray-200
                                            dark:text-[#292929]
                                            text-[clamp(2.7rem,8vw,5rem)]
                                            lg:text-[clamp(4rem,6vw,6rem)]
                                        "
                                    >
                                        {slide.title2}
                                    </h2>

                                    {/* Description */}
                                    <p
                                        className="
                                            mt-4
                                            max-w-[340px]
                                            text-xs
                                            leading-5
                                            text-gray-600
                                            dark:text-gray-400
                                            sm:mt-5
                                            sm:text-sm
                                            sm:leading-6
                                            md:max-w-md
                                            lg:text-base
                                        "
                                    >
                                        {slide.description}
                                    </p>

                                    {/* Button */}
                                    <button
                                        className="
                                            group
                                            mt-5
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-red-500
                                            px-6
                                            py-3
                                            text-xs
                                            font-semibold
                                            text-white
                                            shadow-lg
                                            shadow-red-500/20
                                            transition-all
                                            duration-300
                                            hover:bg-red-600
                                            hover:shadow-red-500/40
                                            active:scale-95
                                            sm:mt-6
                                            sm:px-7
                                            sm:py-3.5
                                            sm:text-sm
                                        "
                                    >
                                        {slide.btnText}

                                        <span
                                            className="
                                                text-base
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                            "
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>

                                {/* ================= IMAGE ================= */}

                                <div
                                    className="
                                        relative
                                        order-1
                                        flex
                                        h-[250px]
                                        w-full
                                        items-center
                                        justify-center
                                        md:order-2
                                        md:h-full
                                        md:w-[48%]
                                        lg:w-1/2
                                    "
                                >
                                    {/* Circle */}
                                    <div
                                        className="
                                            absolute
                                            h-[190px]
                                            w-[190px]
                                            rounded-full
                                            bg-white/70
                                            shadow-xl
                                            dark:bg-white/5
                                            sm:h-[250px]
                                            sm:w-[250px]
                                            md:h-[300px]
                                            md:w-[300px]
                                            lg:h-[380px]
                                            lg:w-[380px]
                                            xl:h-[430px]
                                            xl:w-[430px]
                                        "
                                    />

                                    {/* Image */}
                                    <img
                                        src={slide.img}
                                        alt={slide.title}
                                        className="
                                            relative
                                            z-10
                                            w-[210px]
                                            max-w-[80%]
                                            object-contain
                                            drop-shadow-2xl
                                            transition-transform
                                            duration-500
                                            hover:scale-105
                                            sm:w-[280px]
                                            md:w-[340px]
                                            lg:w-[420px]
                                            xl:w-[480px]
                                        "
                                    />
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1
                                    w-24
                                    bg-red-500
                                    sm:w-36
                                    lg:w-48
                                "
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Swiper Custom CSS */}
            <style>{`
                /* =========================
                   Navigation
                ========================= */

                .hero-swiper .swiper-button-next,
                .hero-swiper .swiper-button-prev {
                    width: 40px;
                    height: 40px;
                    border-radius: 9999px;
                    background: rgba(255, 255, 255, 0.9);
                    color: #ef4444;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                }

                .hero-swiper .swiper-button-next::after,
                .hero-swiper .swiper-button-prev::after {
                    font-size: 14px;
                    font-weight: 700;
                }

                .hero-swiper .swiper-button-next:hover,
                .hero-swiper .swiper-button-prev:hover {
                    background: #ef4444;
                    color: white;
                    transform: scale(1.05);
                }

                /* Dark Mode */

                .dark .hero-swiper .swiper-button-next,
                .dark .hero-swiper .swiper-button-prev {
                    background: rgba(40, 40, 40, 0.9);
                    color: #f87171;
                }

                .dark .hero-swiper .swiper-button-next:hover,
                .dark .hero-swiper .swiper-button-prev:hover {
                    background: #ef4444;
                    color: white;
                }

                /* =========================
                   Pagination
                ========================= */

                .hero-swiper .swiper-pagination {
                    bottom: 15px !important;
                }

                .hero-swiper .swiper-pagination-bullet {
                    width: 7px;
                    height: 7px;
                    background: #888;
                    opacity: 0.5;
                    transition: all 0.3s ease;
                }

                .hero-swiper .swiper-pagination-bullet-active {
                    width: 22px;
                    border-radius: 9999px;
                    background: #ef4444;
                    opacity: 1;
                }

                /* =========================
                   Small Screens
                ========================= */

                @media (max-width: 639px) {
                    .hero-swiper .swiper-button-next,
                    .hero-swiper .swiper-button-prev {
                        display: none;
                    }

                    .hero-swiper .swiper-pagination {
                        bottom: 12px !important;
                    }
                }

                /* =========================
                   Tablet
                ========================= */

                @media (min-width: 640px) and (max-width: 1023px) {
                    .hero-swiper .swiper-button-next,
                    .hero-swiper .swiper-button-prev {
                        width: 36px;
                        height: 36px;
                    }

                    .hero-swiper .swiper-button-next::after,
                    .hero-swiper .swiper-button-prev::after {
                        font-size: 13px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;

