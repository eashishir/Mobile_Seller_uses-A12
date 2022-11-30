import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5">My orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Pay</th>



                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((book, i) => <tr key={book._id} className="hover">
                                <th>{i+1}</th>
                                <td>{book.productName}</td>
                                <td>{book.buyer}</td>
                                <td>{book.email}</td>
                                <td>{book.Phone}</td>
                                <td>${book.price}</td>
                                <td>{book.meetingAddress}</td>
                                <td>{
                                    book.price && !book.paid  &&<Link
                                     to={`/dashboard/payment/${book._id}`}>
                                        <button className='btn btn-xs btn-primary'>Pay</button>
                                        </Link>
                                    
                                    }
                                    {
                                        book.price && book.paid && <button className='btn btn-xs btn-success'>Paid</button>
                                    }
                                    
                                    
                                    </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;