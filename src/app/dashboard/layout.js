import SideNav from '@/components/SideNav';
import React from 'react';

export const metadata = {
    title: 'Dashboard',
    description: 'First NextJS APP',
}

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex'>

            <div className="w-1/5">
                <SideNav></SideNav>
            </div>

            <div className="w-4/5">
                {children}
            </div>

        </div>
    );
};

export default DashboardLayout;