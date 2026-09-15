import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "../../assets/category/ps-console.png"; // PlayStation
import Image2 from "../../assets/category/vr.png"; // VR Headset
import Image3 from "../../assets/category/speaker.png"; // Smart Speaker

// 📦 Data-driven approach
const categories = [
  {
    id: 1,
    title: "PlayStation",
    subtitle: "Enjoy With",
    description: "Gaming Console",
    image: Image1,
    alt: "PlayStation console",
    bg: "bg-red-500",
    textColor: "text-white/80",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonTextColor: "text-red-500",
    aos: "fade-right",
    delay: 0,
    colSpan: "lg:col-span-2",
    imageSize: "w-[280px] sm:w-[320px] lg:w-[400px]",
    imagePosition: "right-0",
    glowColor: "bg-white/10",
    glowSize: "h-64 w-64",
    height: "h-[350px] sm:h-[400px]",
  },
  {
    id: 2,
    title: "VR Headset",
    subtitle: "Enjoy With",
    description: "Virtual Reality",
    image: Image2,
    alt: "VR headset",
    bg: "bg-gray-900",
    textColor: "text-white/80",
    buttonBg: "bg-red-500 hover:bg-red-600",
    buttonTextColor: "text-white",
    aos: "fade-up",
    delay: 150,
    colSpan: "",
    imageSize: "w-[200px] sm:w-[220px]",
    imagePosition: "right-[-10px]",
    glowColor: "bg-white/5",
    glowSize: "h-48 w-48",
    height: "h-[350px] sm:h-[400px]",
  },
  {
    id: 3,
    title: "Smart Speaker",
    subtitle: "Enjoy With",
    description: "Smart Home",
    image: Image3,
    alt: "Smart speaker",
    bg: "bg-yellow-400",
    textColor: "text-white/80",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonTextColor: "text-yellow-600",
    aos: "fade-left",
    delay: 300,
    colSpan: "",
    imageSize: "w-[180px] sm:w-[200px]",
    imagePosition: "right-[-15px]",
    glowColor: "bg-white/20",
    glowSize: "h-40 w-40",
    height: "h-[350px] sm:h-[400px]",
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
  imagePosition,
  glowColor,
  glowSize = "h-40 w-40",
  height,
  onClick,
}) => (
  <article
    data-aos={aos}
    data-aos-delay={delay}
    className={`
      group relative ${height} overflow-hidden rounded-3xl
      ${bg}
      p-6 text-white shadow-lg
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl
      ${colSpan}
    `}
    role="region"
    aria-label={`${title} category`}
  >
    {/* Content */}
    <div className="relative z-20 max-w-[55%]">
      <p className="text-sm text-white/90">{subtitle}</p>
      <h2 className="mt-1 text-3xl sm:text-4xl font-bold leading-tight">
        {title}
      </h2>
      <p className={`mt-2 text-sm ${textColor} hidden sm:block`}>
        {description}
      </p>
      <button
        onClick={onClick}
        className={`
          mt-5 rounded-full ${buttonBg} ${buttonTextColor}
          px-6 py-2.5 text-sm font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-white/50
          shadow-md
        `}
        aria-label={`Browse ${title} products`}
      >
        Browse
      </button>
    </div>

    {/* Image */}
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className={`
        absolute bottom-0 ${imagePosition}
        z-10 ${imageSize} object-contain
        drop-shadow-2xl
        transition-transform duration-500
        group-hover:scale-110
      `}
    />

    {/* Glow Effect */}
    <div
      className={`
        absolute -bottom-20 -right-20
        ${glowSize} rounded-full
        ${glowColor} blur-3xl
        transition-all duration-500
        group-hover:scale-125
      `}
      aria-hidden="true"
    />
  </article>
);

//  Main Component
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
    <section className="py-10 sm:py-16" aria-labelledby="categories-heading">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2
            id="categories-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Shop by Category
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Explore our top product categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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