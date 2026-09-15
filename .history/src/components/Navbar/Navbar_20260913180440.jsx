import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaChevronDown, FaHeart, FaBars, FaTimes } from "react-icons/fa";

import DarkMode from "./DarkMode";

const MenuLinks = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Shop", href: "/shop" },
    { id: 3, name: "About", href: "/about" },
    { id: 4, name: "Blog", href: "/blog" },
];

const DropdownLinks = [
    { id: 1, name: "Contact", href: "/contact" },
    { id: 2, name: "FAQ", href: "/faq" },
    { id: 3, name: "Support", href: "/support" },
    { id: 4, name: "Privacy Policy", href: "/privacy" },
];
function Navbar({ cartCount = 0, wishlistCount = 0 }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                                <Link
                                    key={data.id}
                                    to={data.href}
                                    className="text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary"
                                >
                                    {data.name}
                                </Link>
                            ))}

                            {/*  Dropdown  */}
                            <div className="relative group">
                                <button className="text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary flex items-center gap-1">
                                    More
                                    <FaChevronDown className="text-xs" />
                                </button>

                                {/* dropdown  menu list */}
                                <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border dark:border-gray-700">
                                    {DropdownLinks.map((data) => (
                                        <Link
                                            key={data.id}
                                            to={data.href}
                                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                        >
                                            {data.name}
                                        </Link>
                                    ))}
                               
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-3 sm:gap-4">

                            {/* Search */}
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-36 border border-gray-300 rounded-full py-1 px-4 pr-9 outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                                />
                                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {/* Wishlist */}
                            <Link to="/wishlist" className="relative hidden sm:block text-gray-600 dark:text-gray-300 hover:text-secondary">
                                <FaHeart className="text-xl" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {wishlistCount}
                                </span>
                            </Link>

                            {/* Cart */}
                            <Link to="/cart" className="relative hidden sm:block text-gray-600 dark:text-gray-300 hover:text-secondary">
                                <FaShoppingCart className="text-xl" />
                                <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            </Link>

                            {/* Dark Mode Toggle */}
                            <div className="hidden sm:block">
                                <DarkMode />
                            </div>

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                aria-label="Open menu"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 md:hidden"
                            >
                                {isMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
                            isMenuOpen ? 'mt-4 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                            <div className="flex flex-col gap-2">
                                {[...MenuLinks, ...DropdownLinks].map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-red-50 hover:text-red-500 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-red-400"
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <div className="mt-2 flex items-center justify-between gap-3 border-t border-gray-200 pt-3 dark:border-gray-700">
                                    <Link
                                        to="/wishlist"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-500 dark:bg-red-500/10"
                                    >
                                        <FaHeart className="text-sm" />
                                        Wishlist ({wishlistCount})
                                    </Link>

                                    <Link
                                        to="/cart"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white dark:bg-white dark:text-gray-900"
                                    >
                                        <FaShoppingCart className="text-sm" />
                                        Cart ({cartCount})
                                    </Link>
                                </div>

                                <div className="pt-2">
                                    <DarkMode />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;