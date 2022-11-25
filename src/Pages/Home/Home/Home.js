import React from 'react';
import Banner from '../Banner/Banner';
import ProductsCategorie from '../ProductsCategories/ProductsCategorie';

import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
         <ProductsCategorie></ProductsCategorie>
          <ReviewSection></ReviewSection>
         
        </div>
    );
};

export default Home;