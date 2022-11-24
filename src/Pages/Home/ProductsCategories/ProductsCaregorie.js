import React from 'react';

const ProductsCaregorie = () => {
    return (
        <div>
            <h2 className='text-center text-info font-bold text-2xl'>Our Products Categories</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10  mask-squircle">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCaregorie;