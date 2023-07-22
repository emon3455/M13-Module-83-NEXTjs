import Link from 'next/link';
import React from 'react';

const navigationLink = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/blogs",
        title: "Blogs"
    },
    {
        path: "/dashboard",
        title: "Dashboard"
    },
    
]

const Navbar = () => {
    return (
        <nav className='flex justify-center flex-col md:flex-row md:justify-between  container mx-auto'>
            <h1 className='md:w-2/4 text-center md:text-left text-2xl font-bold text-red-400'>Web Hero</h1>

            <ul className='flex md:w-2/4 justify-around font-semibold'>
                {
                    navigationLink.map(({path,title},indx)=><Link key={indx} href={path}>{title}</Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;