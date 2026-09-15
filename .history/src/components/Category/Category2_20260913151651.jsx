import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "../../assets/category/speaker.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

// 📦 Data-driven approach
const categories = [
  {
    id: 1,
    title: "Earphone",
    subtitle: "Premium Sound",
    description: "Immerse yourself in crystal-clear audio",
    image: Image1,
    alt: "Wireless earphone",
    bg: "from-gray-900 to-gray-700 dark:from-gray-950 dark:to-gray-800",
    textColor: "text-gray-400",
    buttonBg: "bg-red-500 hover:bg-red-600",
    buttonTextColor: "text-white",
    aos: "fade-right",
    delay: 0,
    colSpan: "",
    imageSize: "w-[210px] sm:w-[230px]",
    glowColor: "bg-white/10",
  },
  {
    id: 2,
    title: "Smart Watch",
    subtitle: "Stay Connected",
    description: "Track your fitness in style",
    image: Image2,
    alt: "Smart watch",
    bg: "from-yellow-400 to-yellow-500 dark:from-yellow-600 dark:to-yellow-700",
    textColor: "text-white/80",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonTextColor: "text-gray-700",
    aos: "fade-up",
    delay: 150,
    colSpan: "",
    imageSize: "w-[190px] sm:w-[210px]",
    glowColor: "bg-white/20",
  },
  {
    id: 3,
    title: "MacBook",
    subtitle: "Power & Performance",
    description: "Create without limits",
    image: Image3,
    alt: "MacBook laptop",
    bg: "from-red-500 to-red-600 dark:from-red-700 dark:to-red-900",
    textColor: "text-white/80",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonTextColor: "text-red-500",
    aos: "fade-left",
    delay: 300,
    colSpan: "lg:col-span-2",
    imageSize: "w-[280px] sm:w-[300px] lg:w-[360px]",
    glowColor: "bg-white/10",
    glowSize: "h-56 w-56",
  },
];

// 🧩 Reusable Card Component
const CategoryCard = ({
  title,
  subtitle,
  description,
  image,
  alt,
  bg,
  textColor,
  buttonBg,
  buttonTextColor,
  aos,
  delay,
  colSpan,
  imageSize,
  glowColor,
  glowSize = "h-40 w-40",
  onClick,
}) => (
  <article
    data-aos={aos}
    data-aos-delay={delay}
    className={`
      group relative h-[300px] overflow-hidden rounded-3xl
      bg-gradient-to-br ${bg}
      p-6 text-white shadow-lg
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl
      ${colSpan}
    `}
    role="region"
    aria-label={`${title} category`}
  >
    {/* Content */}
    <div className="relative z-20 max-w-[60%]">
      <p className="text-sm text-white/70">{subtitle}</p>
      <h2 className="mt-1 text-2xl font-bold leading-tight">
        {title}
      </h2>
      <p className={`mt-2 text-sm ${textColor} hidden sm:block`}>
        {description}
      </p>
      <button
        onClick={onClick}
        className={`
          mt-4 rounded-full ${buttonBg} ${buttonTextColor}
          px-5 py-2 text-sm font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-white/50
        `}
        aria-label={`Browse ${title} products`}
      >
        Browse →
      </button>
    </div>

    {/* Image */}
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className={`
        absolute bottom-0 right-[-20px]
        z-10 ${imageSize} object-contain
        drop-shadow-2xl
        transition-transform duration-500
        group-hover:scale-110 group-hover:rotate-[-3deg]
      `}
    />

    {/* Glow Effect */}
    <div
      className={`
        absolute -bottom-16 -right-16
        ${glowSize} rounded-full
        ${glowColor} blur-3xl
        transition-all duration-500
        group-hover:scale-125
      `}
      aria-hidden="true"
    />
  </article>
);

// 🎯 Main Component
const Category = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  const handleBrowse = (category) => {
    setActiveCategory(category.id);
    console.log(`Browsing: ${category.title}`);
    // Navigate to category page
    // window.location.href = `/category/${category.title.toLowerCase()}`;
  };

  return (
    <section className="py-8 sm:py-12" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2
            id="categories-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Shop by Category
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Explore our top product categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              {...cat}
              onClick={() => handleBrowse(cat)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;