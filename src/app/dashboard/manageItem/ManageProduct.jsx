"use client"
import React, { useState, useTransition } from 'react';
import UpdateProductModal from './UpdateProductModal';
import { useRouter } from 'next/navigation';

const ManageProduct = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    const [ isPending, startTransition] = useTransition();
    const router = useRouter();

    // Function to open the modal and set the selected product
    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleRefresh=()=>{
        startTransition(()=>{
            router.refresh();
        })
    }

    const handleDelete = async (id) => {
        try{
            const res= await fetch(`http://localhost:5000/products/${id}`,{
                method: "DELETE",
            })

            const result = await res.json();

            if(result){
                console.log(result);
                // for refresh
                startTransition(()=>{
                    router.refresh();
                })
            }

        }
        catch(error){
            console.log(error.message);
        }
    };

    return (
        <div id='manageProduct'>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, indx) => (
                            <tr key={product.id}>
                                <th>{indx + 1}</th>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td className='space-x-2 space-y-2'>

                                    <button 
                                    className="btn btn-sm btn-warning" 
                                    onClick={() => handleOpenModal(product)}
                                    >
                                        Update
                                    </button>

                                    <button onClick={()=>handleDelete(product.id)} className='btn btn-sm btn-error'>
                                        Delete
                                    </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Render the modal based on the showModal state */}
            {showModal && (
                <UpdateProductModal
                    product={selectedProduct}
                    closeModal={handleCloseModal}
                    handleRefresh={handleRefresh}
                />
            )}
            
        </div>
    );
};

export default ManageProduct;
