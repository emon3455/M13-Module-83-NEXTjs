import React, { useState } from 'react';
import Modal from 'react-modal';

const UpdateProductModal = ({ product, closeModal, handleRefresh}) => {

    const handleSubmit =async (e) => {
        e.preventDefault();
        
        const title = e.target.title.value;
        const price = e.target.price.value;
        console.log(title,price);

        if(title && price){
            const data={
                title,
                price
            }
    
            try{
                const res= await fetch(`http://localhost:5000/products/${product.id}`,{
                    method: "PATCH",
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(data)
                })

                const result = await res.json();

                if(result){
                    console.log(result);
                    e.target.reset();

                    handleRefresh();

                    closeModal();
                }
    
            }
            catch(error){
                console.log(error.message);
            }
        }
    };

    return (
        <Modal isOpen={true} onRequestClose={closeModal} className="max-w-xl  mx-auto bg-gray-50 p-4 rounded-lg">
            <form onSubmit={handleSubmit}>
                <h3 className="font-bold text-lg text-violet-500 text-center">Update Product Info</h3>
                <div className="form-control">
                    <label htmlFor="title" className="label">
                        Title
                        <input
                            type="text"
                            className="input input-bordered"
                            defaultValue={product.title}
                            name='title'
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="price" className="label">
                        Price
                        <input
                            type="number"
                            name="price"
                            className="input input-bordered"
                            defaultValue={product.price}
                        />
                    </label>
                </div>

                <div className="modal-action">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default UpdateProductModal;
