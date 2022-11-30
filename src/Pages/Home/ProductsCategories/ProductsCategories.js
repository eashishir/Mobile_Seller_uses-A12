import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const ProductsCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://my-assignment12-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories);



    return (
        <section className='my-16'>
            <div>
                <h2 className='text-center text-dark font-bold text-2xl'>Our Products <small className='text-2xl text-green-600'>Categories</small></h2>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 '>
                    {
                        categories?.map(category => {
                            return (
                                <div key={category._id} className="card w-96 bg-black shadow-xl">
                                    <figure className="px-10 pt-10 ">
                                        <img src={category.logo} alt="Shoes" className="rounded-xl w-24" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title text-white font-bold">{category.name}</h2>

                                        <div className="card-actions">
                                            <Link to={`/products/${category.categoryId}`}><button className="btn btn-outline btn-accent">Check Out</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                

            </div>
            
        </section>
    );
};

export default ProductsCategories;