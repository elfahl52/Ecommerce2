import React from 'react'
import {Link} from 'react-router-dom'
const MenuLinks = [
    
    {
        id: 1,
        name: 'Home',
        href: '/#'
    },
    {
        id: 2,
        name: 'Shop',
        href: '/'
    },
    {
        id: 3,
        name: 'About',
        href: '/about'
    },
    {
        id: 4,
        name: 'Blogs',
        href: '/blogs'
    }
]

function Navbar() {

    return (
        <div className='bg-white shadow-md dark:bg-gray-900 dark:text-white duration-300 relative z-50'>
            <div className='py-4'>
                <div className='container'>
                    {/* LOGO and Links */}
                    <div className='flex items-center justify-between'>
                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl'>e<span className='text-secondary italic'>S</span>hop</a>
                        {/* Menu Items */}
                        <div className='hidden md:flex items-center space-x-6'>
                            <ul className='flex items-center space-x-6 '>
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={data.id} ><Link to={data.href} className='text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary'>{data.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}
                    <div>
                        {/* search bar section */}
                        <div className='hidden md:flex items-center space-x-4'>
                            <div className='relative'>
                                <input type="text" placeholder='Search' className='border border-gray-300 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' />
                                <button className='absolute right-0 top-0 mt-1 mr-2 text-gray-500 hover:text-primary'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
