import getAllCategories from '@/utils/getAllCategories';
import Link from 'next/link';
import React from 'react';

const Category = async () => {

    const categories = await getAllCategories();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                categories.map(category=><div className='text-lg p-2 border-2 border-blue-400 rounded-lg' key={category.id}
                >
                    <h4>Category: {category.name}</h4>
                    <Link href="" className='mt-3 block'>
                        <button className='bg-red-400 p-1 text-white rounded-lg'>Details</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default Category;