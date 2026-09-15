import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

const Category = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="py-8 sm:py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Earphone */}
                    <div
                        data-aos="fade-right"
                        className="
                            group relative h-[300px] overflow-hidden rounded-3xl
                            bg-gradient-to-br from-gray-900 to-gray-700
                            p-6 text-white shadow-lg
                            transition-all duration-500
                            hover:-translate-y-2 hover:shadow-2xl
                            dark:from-gray-950 dark:to-gray-800
                        "
                    >
                        <div className="relative z-20">
                            <p className="text-sm text-gray-300">Enjoy</p>

                            <h2 className="text-2xl font-bold">
                                With
                            </h2>

                            <h2 className="text-3xl font-black text-gray-400">
                                Earphone
                            </h2>

                            <button
                                className="
                                    mt-4 rounded-full bg-red-500
                                    px-5 py-2 text-sm font-semibold
                                    transition-all duration-300
                                    hover:bg-red-600
                                    hover:scale-105
                                "
                            >
                                Browse
                            </button>
                        </div>

                        <img
                            src={Image1}
                            alt="Earphone"
                            className="
                                absolute bottom-0 right-[-25px]
                                z-10 w-[210px] object-contain
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                        />

                        <div className="
                            absolute -bottom-16 -right-16
                            h-40 w-40 rounded-full
                            bg-white/10 blur-3xl
                        " />
                    </div>

                    {/* Watch */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className="
                            group relative h-[300px] overflow-hidden rounded-3xl
                            bg-gradient-to-br from-yellow-400 to-yellow-500
                            p-6 text-white shadow-lg
                            transition-all duration-500
                            hover:-translate-y-2 hover:shadow-2xl
                            dark:from-yellow-600 dark:to-yellow-700
                        "
                    >
                        <div className="relative z-20">
                            <p className="text-sm text-white/80">Enjoy</p>

                            <h2 className="text-2xl font-bold">
                                With
                            </h2>

                            <h2 className="text-3xl font-black text-white/80">
                                Gadget
                            </h2>

                            <button
                                className="
                                    mt-4 rounded-full bg-white
                                    px-5 py-2 text-sm font-semibold
                                    text-gray-700
                                    transition-all duration-300
                                    hover:bg-gray-100
                                    hover:scale-105
                                "
                            >
                                Browse
                            </button>
                        </div>

                        <img
                            src={Image2}
                            alt="Watch"
                            className="
                                absolute bottom-2 right-[-20px]
                                z-10 w-[190px] object-contain
                                transition-transform duration-500
                                group-hover:scale-110
                            "
                        />

                        <div className="
                            absolute -bottom-16 -right-16
                            h-40 w-40 rounded-full
                            bg-white/20 blur-3xl
                        " />
                    </div>

                    {/* Laptop */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="300"
                        className="
                            group relative h-[300px] overflow-hidden
                            rounded-3xl lg:col-span-2
                            bg-gradient-to-br from-red-500 to-red-600
                            p-6 text-white shadow-lg
                            transition-all duration-500
                            hover:-translate-y-2 hover:shadow-2xl
                            dark:from-red-700 dark:to-red-900
                        "
                    >
                        <div className="relative z-20">
                            <p className="text-sm text-white/80">Enjoy</p>

                            <h2 className="text-2xl font-bold">
                                With
                            </h2>

                            <h2 className="text-3xl font-black text-white/80">
                                Laptop
                            </h2>

                            <button
                                className="
                                    mt-4 rounded-full bg-white
                                    px-5 py-2 text-sm font-semibold
                                    text-red-500
                                    transition-all duration-300
                                    hover:bg-gray-100
                                    hover:scale-105
                                "
                            >
                                Browse
                            </button>
                        </div>

                        <img
                            src={Image3}
                            alt="MacBook"
                            className="
                                absolute bottom-0 right-[-20px]
                                z-10 w-[280px] object-contain
                                transition-transform duration-500
                                group-hover:scale-105
                                sm:w-[300px]
                                lg:w-[360px]
                            "
                        />

                        <div className="
                            absolute -bottom-20 -right-20
                            h-56 w-56 rounded-full
                            bg-white/10 blur-3xl
                        " />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Category;