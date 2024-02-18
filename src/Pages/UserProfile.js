import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const UserProfile = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [name, setName] = useState();
    const [pincode, setPincode] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [cover, setCover] = useState();
    const [isLoading,setIsLoading] = useState(true);
    

    useEffect(() => {
        fetch('https://ecommerce-backend-q9en.onrender.com/account', {
            credentials: 'include',
        })
        .then(response => {
            if (response.status === 403) {
                return navigate('/personal-details')
            }
            response.json().then(userInfo => {
                setEmail(userInfo.email);
                setPhone(userInfo.phone)
                setPincode(userInfo.pincode);
                setCity(userInfo.city);
                setAddress(userInfo.address);
                setCover(userInfo.cover);
                setName(userInfo.pincode)
            })
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    setTimeout(()=>{
        setIsLoading(false)
    },1000)


    // const notify = (notification) => {
    //     toast.success(notification, {
    //         style: {
    //             fontWeight: "500",
    //             fontFamily: "Roboto",
    //         }
    //     })
    // };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     notify("Message Sent")
    // }

    return (
        <>
        {!isLoading?(
            <div>
            <div><Toaster /></div>
            <div className='userprofile flex outline-none'>
                <div className='flex mt-10 mx-auto shadow-lg ring-1 ring-inset bg-gray-100 ring-gray-400 p-2 rounded'>

                    <div className='contact-div1 my-3'>
                        <div className='textdiv profilediv'>
                            <h3 className="text-3xl font-semibold mb-10 text-center">User Profile</h3>
                            <img className='photodiv mx-auto object-cover mt-5 rounded-full border-2 border-black' src={cover ? 'http://localhost:8000/' + cover : 'https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg'} alt="Image" />
                        </div>

                    </div>

                    <div className='contact-div2 mt-12'>
                        <form>
                            <div className="space-y-12">
                              
                            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">                          
                                    <div className="sm:col-span-4 mt-2 flex items-center">
                                        <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                                        Email:-
                                        </label>
                                        <div>
                                            <input
                                                readOnly
                                                value={email}
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block border-none w-full font-mono rounded-md py-1.5 bg-gray-100 text-gray-900 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6"> */}
                                        <div className="sm:col-span-4 flex items-center">
                                            <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
                                            Name:-
                                            </label>
                                            <div>
                                                <input
                                                    readOnly
                                                    value={name}
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md bg-gray-100 border-none py-1.5 text-gray-900 font-mono placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4 flex items-center">
                                            <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
                                            Phone:-
                                            </label>
                                            <div>
                                                <input
                                                    readOnly
                                                    value={phone}
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 font-mono placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4 flex items-center">
                                            <label htmlFor="postal-code" className="block text-lg font-medium leading-6 text-gray-900">
                                             Pincode:-
                                            </label>
                                            <div>
                                                <input
                                                    readOnly
                                                    value={pincode}
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="block w-1/2 rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 font-mono placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3 sm:col-start-1 flex items-center">
                                            <label htmlFor="city" className="block text-lg font-medium leading-6 text-gray-900">
                                             City:-
                                            </label>
                                            <div>
                                                <input
                                                    readOnly
                                                    value={city}
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="block w-full rounded-md border-0 bg-gray-100 py-1.5 text-gray-900 font-mono placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                                />
                                            </div>
                                        </div>


                                        <div className="col-span-full">
                                            <label htmlFor="street-address" className="block mt-1 text-lg font-medium leading-6 text-gray-900">
                                            Street address:-
                                            </label>
                                            <div>
                                            <textarea
                                                readOnly
                                                value={address}
                                                cols="30" rows="6"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="block w-full h-16 pl-0 rounded-md bg-gray-100 mt-2 py-1.5 font-mono text-gray-900 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                            />
                                            </div>
                                        </div>
                                       
                                    </div>
                            </div>


                            <div className="my-3 flex items-center justify-end gap-x-6">
                                {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button> */}
                                <button
                                    onClick={()=>{navigate('/edit-profile')}}
                                    type="submit"
                                    className="rounded-md mr-10 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <i class="ri-pencil-line"></i> Edit Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        ):(<div><div className="spinner"></div></div>)}
        </>
    )
}

export default UserProfile