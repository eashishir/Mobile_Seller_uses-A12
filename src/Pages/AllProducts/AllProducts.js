import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Home/ProductsCategories/BookingModal/BookingModal';

const AllProducts = () => {
    const products = useLoaderData();
    const [modalProduct, setModalProduct] = useState(null);

    return (

        <section>
            <div>
                <h1 className='text-center text-dark font-bold text-2xl m-5'>Avilable <small className='tex-4xl text-secondary font-bold'>Products</small></h1>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    {
                        products?.map(product => {
                            return (

                                <div key={product._id} className="card w-96 bg-white shadow-xl m-5 ">
                                    <figure><img src={product.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title font-bold">
                                            {product.productName}

                                        </h2>
                                        <div className="badge badge-secondary">Resell Price: $ {product.reseelPrice}</div>
                                        <div className="badge badge-secondary">Orginal Price: $ {product.orginalPrice}</div>
                                        <div className="badge badge-primary">Product Use: {product.use}</div>
                                        <div className="badge badge-primary">Post Date: {product.time}</div>


                                        <div className="card-actions justify-between">
                                            <div className="badge badge-success"> Seller Name:{product.sellerName}</div>
                                            <div className="badge badge-outline">Location :{product.location}</div>
                                        </div>

                                        <label onClick={() => setModalProduct(product)}
                                            htmlFor="booking-modal" className="btn  btn-sm">Book Now</label>
                                    </div>

                                </div>



                            )
                        })
                    }
                </div>
            </div>
            {
                modalProduct &&
                <BookingModal
                    modalProduct={modalProduct}
                    setModalProduct={setModalProduct}

                ></BookingModal>
            }

        </section>

    );
};

export default AllProducts;




