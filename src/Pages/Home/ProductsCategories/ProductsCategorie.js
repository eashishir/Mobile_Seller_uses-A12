import React from 'react';

const ProductsCategorie = () => {
  
    
   
    return (
        <div>
            <h2 className='text-center text-info font-bold text-2xl'>Our Products Categories</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10   mask-squircle">
                    <img src='' alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">name</h2>
                    
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCategorie;