import React from 'react';

export const metadata = {
    title: 'Dashboard',
    description: 'First NextJS APP',
}

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div className="">
                This is Dashboard side Layout
            </div>
            {children}
            
        </div>
    );
};

export default DashboardLayout;