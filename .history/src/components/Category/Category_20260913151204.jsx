import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

const Category = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Earphone */}
                    <div className="relative h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-700 p-6 text-white">
                        <div className="relative z-10">
                            <p className="text-sm text-gray-300">Enjoy</p>
                            <h2 className="text-2xl font-bold">
                                With
                            </h2>
                            <h2 className="text-3xl font-black text-gray-400">
                                Earphone
                            </h2>

                            <button className="mt-4 rounded-full bg-red-500 px-5 py-2 text-sm font-semibold transition hover:bg-red-600">
                                Browse
                            </button>
                        </div>

                        <img
                            src={Image1}
                            alt="Earphone"
                            className="absolute bottom-0 right-[-20px] w-[210px] object-contain"
                        />
                    </div>

                    {/* Watch */}
                    <div className="relative h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 text-white">
                        <div className="relative z-10">
                            <p className="text-sm text-white/80">Enjoy</p>
                            <h2 className="text-2xl font-bold">
                                With
                            </h2>
                            <h2 className="text-3xl font-black text-white/80">
                                Gadget
                            </h2>

                            <button className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                                Browse
                            </button>
                        </div>

                        <img
                            src={Image2}
                            alt="Watch"
                            className="absolute bottom-2 right-[-15px] w-[190px] object-contain"
                        />
                    </div>

                    {/* Laptop */}
                    <div className="relative h-[300px] overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 to-red-600 p-6 text-white">
                        <div className="relative z-10">
                            <p className="text-sm text-white/80">Enjoy</p>
                            <h2 className="text-2xl font-bold">
                                With
                            </h2>
                            <h2 className="text-3xl font-black text-white/80">
                                Laptop
                            </h2>

                            <button className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-red-500 transition hover:bg-gray-100">
                                Browse
                            </button>
                        </div>

                        <img
                            src={Image3}
                            alt="MacBook"
                            className="absolute bottom-3 right-[-10px] w-[220px] object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Category;