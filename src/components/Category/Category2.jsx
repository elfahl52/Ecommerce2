 import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";

const categories = [
  {
    id: 1,
    title: "Laptop",
    subtitle: "Enjoy With",
    image: Image1,
    alt: "Laptop", // Updated to match title
    bg: "bg-red-500",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonTextColor: "text-red-500",
    aos: "fade-right",
    delay: 0,
    imageSize: "w-[280px] sm:w-[320px]",
    imagePosition: "right-0",
    glowColor: "bg-white/10",
    size: "lg:col-span-2",
  },
  {
    id: 2, 
    title: "Earphone",
    subtitle: "Enjoy With",
    image: Image2,
    alt: "Earphones", // Updated to match title
    bg: "bg-gray-900",
    buttonBg: "bg-red-500 hover:bg-red-600",
    buttonTextColor: "text-white",
    aos: "fade-up",
    delay: 150,
    imageSize: "w-[200px] sm:w-[220px]",
    imagePosition: "right-[-10px]",
    glowColor: "bg-white/5",
    size: "lg:col-span-1",
  },
  {
    id: 3,
    title: "Gadget",
    subtitle: "Enjoy With",
    image: Image3,
    alt: "Smart Gadgets", // Updated to match title
    bg: "bg-yellow-400",
    buttonBg: "bg-white hover:bg-gray-100",
    buttonTextColor: "text-yellow-600",
    aos: "fade-left",
    delay: 300,
    imageSize: "w-[180px] sm:w-[200px]",
    imagePosition: "right-[-15px]",
    glowColor: "bg-white/20",
    size: "lg:col-span-1",
  },
];

const CategoryCard = ({
  title,
  subtitle,
  image,
  alt,
  bg,
  buttonBg,
  buttonTextColor,
  aos,
  delay,
  imageSize,
  imagePosition,
  glowColor,
  size,
}) => {
  return (
    <article
      data-aos={aos}
      data-aos-delay={delay}
      className={`group relative h-[350px] overflow-hidden rounded-3xl p-6 text-white shadow-lg sm:h-[400px] ${bg} ${size} transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl`}
    >
      <div className="relative z-20">
        <p className="text-sm text-white/90">{subtitle}</p>
        <h2 className="mt-1 text-3xl font-bold leading-tight sm:text-4xl">
          {title}
        </h2>
        <button
          aria-label={`Browse ${title}`}
          className={`mt-5 rounded-full px-6 py-2.5 text-sm font-semibold shadow-md ${buttonBg} ${buttonTextColor} transition-all duration-300 hover:scale-105 active:scale-95`}
        >
          Browse
        </button>
      </div>
      
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={`absolute bottom-0 z-10 ${imagePosition} ${imageSize} object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110`}
      />
      
      <div
        className={`absolute -bottom-20 -right-20 h-40 w-40 rounded-full ${glowColor} blur-3xl transition-transform duration-700 group-hover:scale-125`}
      />
    </article>
  );
};

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <section className="bg-amber-50 overflow-hidden py-10 sm:py-16 dark:bg-gray-800">
      <div className="container mx-auto overflow-hidden px-4">
        <div className="grid grid-cols-1 gap-6 overflow-hidden lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;