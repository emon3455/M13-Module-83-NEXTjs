import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

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
                    navigationLink.map(({path,title},indx)=><NavLink exact={path === "/"} activeClassName="text-blue-600" key={indx} href={path}>{title}</NavLink>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;