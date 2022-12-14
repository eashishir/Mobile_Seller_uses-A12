import React from 'react';
import img from '../../../assets/shishir.jpg'

const ReviewSection = () => {
    return (
         
        <div>
            <h2  className=' text-3xl text-center text-secondary font-bold'>Our page review states</h2>
            <div className="">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title font-bold text-green-600">Total Likes</div>
                    <div className="stat-value text-primary">5K</div>
                    <div className="stat-desc font-bold">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title font-bold text-green-600">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc font-bold">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">99%</div>
                    <div className="stat-title font-bold text-green-600">Delevary done</div>
                    <div className="stat-desc text-secondary font-bold">10 Delevary remaining</div>
                </div>

            </div>
        </div>
    );
};

export default ReviewSection;