import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            
            <Navbar></Navbar>

            {children}

            <footer className='text-center'>
                This website is developed by Emon
            </footer>

        </div>
    );
};

export default layout;