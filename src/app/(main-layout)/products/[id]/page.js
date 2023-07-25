import getSingleProduct from '@/utils/getSingleProduct';
import React from 'react';

const SingleProduct = async ({ params }) => {

    const product = await getSingleProduct(params.id);

    return (
        <div key={product.id} className='max-w-2xl mx-auto rounded-2xl my-10 border-2 border-red-400 p-2'>

            <h2>Product Name: {product.title}</h2>
            <p>Price: ${product.price}</p>

            <h4>Features:</h4>
            <ul className='ms-2'>
                {
                    product.features.map((feature, indx) => <li key={indx}>{indx + 1}. {feature}</li>)
                }
            </ul>
        </div>
    );
};

export default SingleProduct;