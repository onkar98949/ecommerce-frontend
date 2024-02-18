import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const PersonalDetails = () => {
    const navigate = useNavigate();

    const [phone,setPhone] = useState('');
    const [pincode,setPincode] = useState('');
    const [city,setCity]= useState('');
    const [address,setAddress] =useState('');
    const [name,setName] = useState('');
    const [files,setFiles] =useState('');
    const [previewImage, setPreviewImage] = useState('https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.set('phone', phone);
        data.set('name', name);
        data.set('city', city);
        data.set('pincode', pincode);
        data.set('address', address);
        if(files?.[0]){
            data.set('file', files[0]);
        }
        
        const response  = await fetch('https://ecommerce-backend-q9en.onrender.com/personal-details',{
            method:'POST',
            body:data ,
            credentials:'include',
        })

        if(response.status===200){
            navigate('/')
        }else{
            notify('All details required')
        }
    }

    const notify = (notification) =>{
        toast.success(notification,{
            style:{
                fontWeight:"500",
                fontFamily:"Roboto",
            }
        })
    };

  return (
    <div>
        <div><Toaster /></div>
        <div className='userprofile flex outline-none'>
            <div className='flex my-4 mx-auto'>

                <div className='contact-div1 my-3'>
                    <div className='textdiv profilediv'>
                        <h3 className="text-3xl font-semibold mb-10 text-center">Personal Details</h3>
                        <img className='photodiv mx-auto object-cover mt-5 rounded-full border-2 border-black' src={previewImage} alt="Image" />
                        <input className='mt-4' type='file' onChange={(e) => { setFiles(e.target.files);  setPreviewImage(URL.createObjectURL(e.target.files[0]))}}/>
                    </div>

                </div>

                <div className='contact-div2 my-3'>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-12">
                         <div className="border-b border-gray-900/10">

                                <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e)=>{setName(e.target.value)}}
                                                value={name}
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Phone
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e)=>{setPhone(e.target.value)}}
                                                value={phone}
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e)=>{setPincode(e.target.value)}}
                                                value={pincode}
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                onChange={(e)=>{setCity(e.target.value)}}
                                                value={city}
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>


                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                onChange={(e)=>{setAddress(e.target.value)}}
                                                value={address}
                                                cols="30" rows="6"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full h-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>

                           
                        </div>

                        <div className="my-3 flex items-center justify-end gap-x-6">
                            {/* <button onClick={()=>{navigate('/user-profile')}} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button> */}
                            <button
                                type="submit"
                                className="rounded-md mt-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save & Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalDetails