import React from 'react';
import Banner from '../Banner/Banner';


import ProductsCategories from '../ProductsCategories/ProductsCategories';

import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
         <ProductsCategories></ProductsCategories>
          <ReviewSection></ReviewSection>
         
        </div>
    );
};

export default Home;