
import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

import darkLogo from "../../";
import lightLogo from "../../assets/light.png";

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        href: "/",
    },
    {
        id: 2,
        name: "Shop",
        href: "/",
    },
    {
        id: 3,
        name: "About",
        href: "/about",
    },
    {
        id: 4,
        name: "Blogs",
        href: "/blogs",
    },
];

function Navbar() {
    return (
        <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-300 relative z-50">

            <div className="py-4">
                <div className="container">

                    {/* Logo + Menu + Right Section */}
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link to="/">
                            <img
                                src={lightLogo}
                                alt="eShop"
                                className="w-28 dark:hidden"
                            />

                            <img
                                src={darkLogo}
                                alt="eShop"
                                className="w-28 hidden dark:block"
                            />
                        </Link>

                        {/* Menu */}
                        <div className="hidden md:flex items-center">
                            <ul className="flex items-center space-x-6">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <Link
                                            to={data.href}
                                            className="text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary duration-200"
                                        >
                                            {data.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">

                            {/* Search */}
                            <div className="hidden md:flex items-center">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-40 border border-gray-300 rounded-full py-1 px-4 pr-9 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                                    />

                                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>

                            {/* Cart */}
                            <Link
                                to="/cart"
                                className="relative text-gray-600 dark:text-gray-300 hover:text-secondary duration-200"
                            >
                                <FaShoppingCart className="text-xl" />

                                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
