import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostkey = process.env.REACT_APP_imgbb_key;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    

    const handleAdProducts = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
      fetch(url , {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgData => {
       if(imgData.success){
        console.log(imgData.data.url)
        const product = {
            productName: data.name,
            email: user.email,
            reSellPrice: data.price,
            condition: data.condition,
            Phone: data.number,
            UseYear: data.usesYear,
            newPrice: data.newPrice,
            location: data.location,
            image: imgData.data.url
        }
        // save information to the database 
        fetch('https://my-assignment12-server.vercel.app/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast.success(`${user?.displayName} Your Product is Added Successfully`)
            navigate('/dashboard/manageproducts')
        })
       }
      })
    }
    return (
        <div className='w-96 p-7 bg-success mt-5 rounded'>
            <h2 className="text-4xl">Add Products</h2>
            <form onSubmit={handleSubmit(handleAdProducts)} >
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type='text'
                        {...register("name", {
                            required: " Product Name is required"
                        }
                        )}

                        className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text'
                            {...register("email", {
                               
                            })}
                            defaultValue={user?.email} disabled
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Resell Price</span>
                    </label>
                    <input type='text'
                        {...register("price", {
                            required: "Price is required"
                        }
                        )}

                        className="input input-bordered w-1/2 " />
                        {errors.price && <p className='text-red-600'>{errors.price.message}</p>}

                </div>
                <label className="label">
                    <span className="label-text">Conditioin Type</span>
                </label>
                <select {...register("condition", { required: true })} className='w-1/2'>

                    <option value="Excelent">Excelent</option>
                    <option value="Good">Good</option>
                    <option value="Fear">Fear</option>
                </select>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type='text'
                        {...register("number", {
                            required: "Number is required"
                        }
                        )}

                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Year of purchase</span>
                    </label>
                    <input type='text'
                        {...register("usesYear", {
                            required: "Price is required"
                        }
                        )}

                        className="input input-bordered w-1/2 " />
                        {errors.usesYear && <p className='text-red-600'>{errors.usesYear.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">New Price</span>
                    </label>
                    <input type='text'
                        {...register("newPrice", {
                            required: "Price is required"
                        }
                        )}

                        className="input input-bordered w-1/2 " />

                </div>

                <label className="label">
                    <span className="label-text">Locatioin</span>
                </label>
                <select {...register("location", { required: true })} className='w-1/2'>
                    <option value="Dhaka">Dhaka</option>
                    <option value="chittagoang">chittagoang</option>
                    <option value="Cumilla">Cumilla</option>
                </select>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type='file'
                        {...register("image", {
                            required: " Photo Name is required"
                        }
                        )}

                        className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-600'>{errors.img.message}</p>}

                </div>




                <input className='btn btn-black w-full mt-4' value="SignUp" type="submit" />
                {/* <div>
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </div> */}
            </form>
        </div>
    );
};

export default AddProducts;