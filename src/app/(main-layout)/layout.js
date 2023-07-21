import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            
            <nav>
                <a href="/">Home </a>
                <a href="/about"> About </a>
                <a href="/login"> Login </a>
                <a href="/dashboard"> Dashboard </a>
                <a href="/dashboard/addItem"> Add-Item </a>
                <a href="/dashboard/manageItem"> Manage-Item </a>
            </nav>

            {children}

            <footer>
                This website is developed by Emon
            </footer>

        </div>
    );
};

export default layout;