 
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 bg-white text-gray-700 transition-colors duration-500 dark:bg-[#111827] dark:text-gray-300">

      {/* Newsletter */}
      <div className="container mx-auto px-4">

        <div
          data-aos="fade-up"
          className="relative -top-10 overflow-hidden rounded-3xl bg-blue-600 px-6 py-10 text-white shadow-xl sm:px-10"
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="text-center lg:text-left">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-200">
                Stay Updated
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Get the latest offers
              </h2>

              <p className="mt-2 text-sm text-blue-100">
                Subscribe and never miss our latest deals.
              </p>
            </div>

            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border-0 bg-white px-5 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="rounded-xl bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95"
              >
                Subscribe
              </button>
            </form>

          </div>
        </div>


        {/* Main Footer */}
        <div className="grid gap-12 pb-14 pt-2 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div
            data-aos="fade-up"
            className="lg:col-span-2"
          >
            <Link
              to="/"
              className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white"
            >
              E<span className="text-blue-600">SHOP</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
              Discover the latest electronics, smart gadgets and
              accessories. We bring quality products and great prices
              directly to you.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:border-gray-700"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white dark:border-gray-700"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white dark:border-gray-700"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white dark:border-gray-700"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white dark:border-gray-700"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>


          {/* Shop */}
          <div data-aos="fade-up" data-aos-delay="100">

            <h3 className="mb-5 font-bold text-gray-900 dark:text-white">
              Shop
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="transition hover:text-blue-600"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="transition hover:text-blue-600"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/deals"
                  className="transition hover:text-blue-600"
                >
                  Special Deals
                </Link>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div data-aos="fade-up" data-aos-delay="200">

            <h3 className="mb-5 font-bold text-gray-900 dark:text-white">
              Support
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition hover:text-blue-600"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping"
                  className="transition hover:text-blue-600"
                >
                  Shipping
                </Link>
              </li>

              <li>
                <Link
                  to="/returns"
                  className="transition hover:text-blue-600"
                >
                  Returns
                </Link>
              </li>

            </ul>
          </div>


          {/* Company */}
          <div data-aos="fade-up" data-aos-delay="300">

            <h3 className="mb-5 font-bold text-gray-900 dark:text-white">
              Company
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="transition hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="transition hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="transition hover:text-blue-600"
                >
                  Terms
                </Link>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-gray-200 py-7 dark:border-gray-800 sm:flex-row">

          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} ESHOP. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with ❤️ by{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Khaled Elfahl
            </span>
          </p>

          <button
            onClick={scrollTop}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-gray-300"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
```
