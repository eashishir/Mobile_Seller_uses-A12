import React from 'react';
import Banner from '../Banner/Banner';
import ProductsCaregorie from '../ProductsCategories/ProductsCaregorie';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div className='mx-5'>
          <Banner></Banner>
          <ProductsCaregorie></ProductsCaregorie>
          <ReviewSection></ReviewSection>
         
        </div>
    );
};

export default Home;