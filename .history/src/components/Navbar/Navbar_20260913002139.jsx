import React from 'react'

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
                        <div> 
                            <ul className='flex space-x-6'>
                                {
                                    MenuLinks.map((data))
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
