import getAllProducts from '@/utils/getAllProducts';
import Link from 'next/link';
import React from 'react';

const ProductsPage = async ({searchParams}) => {

    console.log(searchParams);
    const products = await getAllProducts(searchParams.categoryId);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2 my-5 container mx-auto'>
            {
                products.map(product=><div key={product.id} className='border-2 border-red-400 p-2'>

                    <h2>Product Name: {product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <Link href={`/products/${product.id}`}>
                        <button className='bg-red-400 p-1 text-white rounded-lg'>Details</button>
                    </Link>
                </div>)
            }
        </div>
    );
};

export default ProductsPage;