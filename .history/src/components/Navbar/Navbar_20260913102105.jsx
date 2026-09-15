import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";


import DarkMode from "./DarkMode";

const MenuLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Shop", href: "/shop" },
    { id: 3, name: "About", href: "/about" },
    { id: 4, name: "Blogs", href: "/blogs" },
];

function Navbar() {
    return (
        <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-300 relative z-50">
            <div className="py-4">
                <div className="container">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link to="/" className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl">
                            e<span className="text-secondary italic">S</span>hop
                        </Link>

                        {/* Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            {MenuLinks.map((data) => (
                                <Link key={data.id} to={data.href} className="text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary">
                                    {data.name}
                                </Link>
                            ))}
                            {/* dropdown */}
                            <div className="relative group">
                                <button className="text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary">
                                    More
                                <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <Link to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                        Contact
                                    </Link>
                                    <Link to="/faq" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                        FAQ
                                    </Link>
                                </div>
                                </button>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">

                            {/* Search */}
                            <div className="relative hidden md:block">
                                <input type="text" placeholder="Search" className="w-36 border border-gray-300 rounded-full py-1 px-4 pr-9 outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700" />
                                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>


                            {/* Cart */}
                            <Link to="/cart" className="relative text-gray-600 dark:text-gray-300 hover:text-secondary">
                                <FaShoppingCart className="text-xl" />
                                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </Link>

                            {/* Dark Mode Toggle */}
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;