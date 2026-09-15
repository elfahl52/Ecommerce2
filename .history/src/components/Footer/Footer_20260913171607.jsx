import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div>
            <h4 className="text-4xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
              ESHOP
            </h4>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your one-stop destination for premium electronics and gadgets. Quality products, delivered fast.
            </p>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
              Made with <span className="text-red-500">♥</span> by{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase">
                Khaled Elfahl
              </span>
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service / Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Address / Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:support@eshop.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  support@eshop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} <span className="font-semibold text-gray-900 dark:text-white">ESHOP</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;