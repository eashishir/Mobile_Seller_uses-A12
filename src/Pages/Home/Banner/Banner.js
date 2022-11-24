import React from 'react';


const Banner = () => {
    return (
        <div className="hero  min-h-screen m-2 rounded" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/gradient-mobile-isometric-technology-background_52683-4499.jpg?size=626&ext=jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-2xl font-bold text-info">We provide fast,friendly 
                    and affordable  service our prettiest customer's.</p>
                    <button className="btn btn-primary">Get Started</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;