import React from "react";
import { Link } from "react-router-dom";
import {
    FaSearch,
    FaShoppingCart,
    FaChevronDown,
    FaSun,
    FaMoon,
} from "react-icons/fa";

import darkLogo from "../../assets/website/dark.png";
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
        href: "/shop",
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
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") || "light"
    );

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
        );
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-sm duration-300">
            <div className="container mx-auto px-4">
                <div className="h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={lightLogo}
                            alt="eShop"
                            className="w-24 dark:hidden"
                        />

                        <img
                            src={darkLogo}
                            alt="eShop"
                            className="w-24 hidden dark:block"
                        />
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden md:flex items-center gap-7">

                        {MenuLinks.map((item) => (
                            <Link
                                key={item.id}
                                to={item.href}
                                className="text-sm text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Quick Links */}
                        <div className="relative group">

                            <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-secondary duration-200">
                                Quick Links
                                <FaChevronDown className="text-[9px]" />
                            </button>

                            {/* Dropdown */}
                            <div className="absolute top-6 left-0 hidden group-hover:block w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2">
                                <Link
                                    to="/products"
                                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Products
                                </Link>

                                <Link
                                    to="/contact"
                                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Contact
                                </Link>

                                <Link
                                    to="/login"
                                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Login
                                </Link>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-5">

                        {/* Search */}
                        <button className="text-gray-600 dark:text-gray-300 hover:text-secondary duration-200">
                            <FaSearch />
                        </button>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative text-gray-600 dark:text-gray-300 hover:text-secondary duration-200"
                        >
                            <FaShoppingCart />

                            <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center rounded-full bg-secondary text-white text-[9px]">
                                0
                            </span>
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-5 rounded-full bg-gray-200 dark:bg-gray-700 relative duration-300"
                        >
                            <span
                                className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center duration-300 ${
                                    theme === "dark"
                                        ? "translate-x-5"
                                        : "translate-x-0.5"
                                }`}
                            >
                                {theme === "dark" ? (
                                    <FaMoon className="text-[9px] text-gray-700" />
                                ) : (
                                    <FaSun className="text-[9px] text-yellow-500" />
                                )}
                            </span>
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;