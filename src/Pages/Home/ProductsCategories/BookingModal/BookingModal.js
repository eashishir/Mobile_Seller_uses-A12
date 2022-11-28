import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const BookingModal = ({ modalProduct , setModalProduct}) => {
    const { productName, reseelPrice } = modalProduct
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const meeting = form.meeting.value;
        const price = form.price.value;

        const booking = {
            productName,
            email,
            Phone: number,
            meetingAddress: meeting,
            price,
            buyer: name
        }
       fetch('http://localhost:5000/bookings', {
        method: 'POST' ,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.acknowledged)  { setModalProduct(null);
        toast.success('Booking Confirmed')}
       })



      
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        
                        <label className="label">
                            <span className="label-text">User Name:</span>
                        </label>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Email:</span>
                        </label>
                        <input name='email' type="text" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <label className="label">
                            <span className="label-text">Price : $</span>
                        </label>
                        <input name='price' type="text" defaultValue={reseelPrice} disabled className="input w-full input-bordered " />
                       
                        <input name='number' type="text" placeholder="Your Number" className="input w-full input-bordered" />
                     
                        <input name='meeting' type="text" placeholder="Meeting Address" className="input w-full input-bordered" />
                        
                        <input type="Submit" className=" btn btn-accent input w-full" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;