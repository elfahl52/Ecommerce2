import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

const Category = () => {
    const categories = [
        {
            id: 1,
            title: "Earphone",
            subtitle: "Enjoy With",
            image: Image1,
            bg: "from-gray-900 to-gray-700",
        },
        {
            id: 2,
            title: "Smart Watch",
            subtitle: "Stay Connected With",
            image: Image2,
            bg: "from-red-500 to-red-700",
        },
        {
            id: 3,
            title: "MacBook",
            subtitle: "Work With",
            image: Image3,
            bg: "from-gray-700 to-gray-900",
        },
    ];

    return (
        <section className="py-8 sm:py-10 lg:py-12 dark:">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`
                                group relative h-[300px] overflow-hidden
                                rounded-3xl bg-gradient-to-br ${category.bg}
                                p-6 text-white shadow-lg
                                transition-all duration-300
                                hover:-translate-y-1 hover:shadow-xl
                            `}
                        >
                            {/* Content */}
                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <p className="text-sm font-medium text-white/70">
                                        {category.subtitle}
                                    </p>

                                    <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                                        {category.title}
                                    </h2>

                                    <button
                                        className="
                                            mt-5 rounded-full bg-white
                                            px-5 py-2 text-sm font-semibold
                                            text-gray-900 transition
                                            hover:bg-gray-100
                                        "
                                    >
                                        Browse
                                    </button>
                                </div>
                            </div>

                            {/* Image */}
                            <img
                                src={category.image}
                                alt={category.title}
                                loading="lazy"
                                className="
                                    absolute bottom-0 right-0 z-0
                                    w-[220px] object-contain
                                    transition-transform duration-500
                                    group-hover:scale-110
                                    sm:w-[230px]
                                "
                            />

                            {/* Decoration */}
                            <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;

