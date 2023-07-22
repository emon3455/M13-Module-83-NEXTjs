import Link from 'next/link';
import React from 'react';

const sideNavLink = [

    {
        path: "/dashboard/addItem",
        title: "add Item"
    },
    {
        path: "/dashboard/manageItem",
        title: "Manage Item"
    },
    {
        path: "/",
        title: "Home"
    },
    
]

const SideNav = () => {
    return (
        <aside className='p-4'>
            <h3 className='text-2xl font-bold mb-10'>Web-Hero</h3>
            <ul className='flex flex-col font-semibold space-y-5'>
                {
                    sideNavLink.map(({path,title},indx)=><Link href={path} key={indx}>{title}</Link>)
                }
            </ul>
        </aside>
    );
};

export default SideNav;