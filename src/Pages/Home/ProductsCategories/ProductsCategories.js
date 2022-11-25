import React, { useEffect, useState } from 'react';
import ProductsCategorie from './ProductsCategorie';


const ProductsCategories = () => {
    cosnt [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

   
    
    return (
        <div>
           {/* {
            categories.map(categorie => <ProductsCategorie
            key={categorie._id}
            categorie={categorie}
            ></ProductsCategorie> )
           } */}
        </div>
    );
};

export default ProductsCategories;