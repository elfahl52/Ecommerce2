import React from 'react'

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
                                        <li key={data.id} ><a href={data.href} className='text-gray-600 font-bold hover:text-secondary dark:text-gray-300 dark:hover:text-secondary'>{data.name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
