import React from 'react';



const PageError = () => {
    return (
        <div className='m-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.nicepng.com/png/detail/334-3348426_search-result-icons-error-404-girlfriend-not-found.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-warning font-bold">Hello there</h1>
                        <p className="mb-5 text-black font-bold"> The page you were trying to reach on a website couldn't be found on their server.</p>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default PageError;