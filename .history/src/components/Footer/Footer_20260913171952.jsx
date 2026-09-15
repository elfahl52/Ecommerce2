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
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gray-50 text-gray-700 transition-colors duration-500 dark:bg-gray-950 dark:text-gray-300">

      {/* Top Section */}
      <div className="container mx-auto px-6 py-14 lg:py-20">

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div data-aos="fade-up">

            <Link
              to="/"
              className="inline-block text-4xl font-black tracking-tight text-gray-900 transition hover:scale-105 dark:text-white"
            >
              E<span className="text-blue-600">SHOP</span>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-gray-600 dark:text-gray-400">
              Your one-stop destination for premium electronics and
              smart gadgets. Discover quality products at the best prices.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-blue-600 dark:hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-pink-600 dark:hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500 hover:text-white dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-sky-500 dark:hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-white dark:hover:text-gray-900"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:text-white dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
              >
                <FaLinkedinIn />
              </a>

            </div>

            <p className="mt-7 text-sm text-gray-500 dark:text-gray-500">
              Made with{" "}
              <span className="text-red-500">♥</span>{" "}
              by{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Khaled Elfahl
              </span>
            </p>
          </div>


          {/* Important Links */}
          <div data-aos="fade-up" data-aos-delay="100">

            <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
              Important Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Blog
                </Link>
              </li>

            </ul>
          </div>


          {/* Customer Service */}
          <div data-aos="fade-up" data-aos-delay="200">

            <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
              Customer Service
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/faq"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/shipping"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="group flex items-center gap-2 transition hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">

            <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h3>

            <ul className="space-y-5">

              <li className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    123 Tech Street,
                    <br />
                    Silicon Valley, CA 94000
                  </p>
                </div>

              </li>


              <li className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+1234567890"
                    className="mt-1 block text-sm text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

              </li>


              <li className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </p>

                  <a
                    href="mailto:support@eshop.com"
                    className="mt-1 block text-sm text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    support@eshop.com
                  </a>
                </div>

              </li>

            </ul>

          </div>

        </div>


        {/* Newsletter */}
        <div
          data-aos="fade-up"
          className="mt-16 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-8"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Subscribe to our newsletter
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Get the latest products, offers and updates directly in your inbox.
              </p>

            </div>


            <form className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              ESHOP
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">

            <Link
              to="/privacy"
              className="transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              Support
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;