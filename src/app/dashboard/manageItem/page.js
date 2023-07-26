import React from 'react';
import ManageProduct from './ManageProduct';
import getAllProducts from '@/utils/getAllProducts';

export const metadata = {
    title: 'Manage Item | Dashboard',
    description: 'First NextJS APP',
}

const ManageItem = async () => {

    const products = await getAllProducts();

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center text-violet-600 mt-5'>Manage Product Page</h2>

            <ManageProduct products={products}></ManageProduct>

        </div>
    );
};

export default ManageItem;