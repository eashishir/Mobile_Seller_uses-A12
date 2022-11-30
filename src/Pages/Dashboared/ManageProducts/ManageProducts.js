import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);

    const closeModal = () => {
        setDeleteProduct(null);
    }

   
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['addProducts'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addProducts', {
                    headers: {
                        authorization: ` bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/addProducts/${product._id}` , {
         method: 'DELETE',
         headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
        })
        .then(res => res.json())
        .then(data => {
         if(data.deletedCount > 0){
            toast.success(`Product ${product.productName}  are deleted successfully`)
            refetch();
         }
        
        })
     }


    if (isLoading) {
        return <progress className="progress w-56"></progress>
    }
    return (
        <div>
            <h3 className="text-3xl font-bold mb-5">Manage Products: {products?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Prouct Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {   
                           products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <th><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={product.image} />
                                    </div>
                                </div></th>
                                <td>{product.productName}</td>
                                <td>{product.email}</td>
                                <td>{product.reSellPrice}</td>
                                <td>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                   
                                </td>

                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Are you sure want to delete?`}
                    successAction = {handleDeleteProduct}
                    successButtonName='Delete'
                    modalData= {deleteProduct}
                    message= {`If you delete ${deleteProduct.productName}.It con't undone`}
                    closeModal={closeModal}
                    >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageProducts;