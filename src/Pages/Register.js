import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const [ name , setName ] = useState('');
    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const notify = (notification) =>{
        toast.error(notification,{
            style:{
                fontWeight:"500",
                fontFamily:"Roboto",
            }
        })
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch('https://ecommerce-backend-q9en.onrender.com/register', {
            method: 'POST',
            body: JSON.stringify({ email, password , name }),
            headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json();
        if (response.status === 200) {
            navigate('/login');
        } else {
            console.log({data});
        }
    }

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  value={name} onChange={(e)=>{setName(e.target.value)}}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email} onChange={(e)=>{setEmail(e.target.value)}}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password} onChange={(e)=>{setPassword(e.target.value)}}
                  required
                  className="block outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex mt-4 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
        // <div className='signup-maindiv flex items-center'>
        //      <Toaster/>
        //     <div className="container">
        //         <div className="signup-content">
        //             <div className="signup-form">
        //                 <h2 className="form-title">Sign up</h2>
        //                 <form onSubmit={handleSubmit} className="register-form">
        //                     <div className='form-group'>
        //                         <label ><i class="ri-user-fill"></i></label>
        //                         <div>
        //                         <input type="text" name="name" id="name" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        //                         </div>
        //                     </div>
                           
        //                     <div className='form-group'>
        //                         <label><i class="ri-mail-fill"></i></label>
        //                         <div>
        //                         <input type="email" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                
        //                         </div>
        //                     </div>
        //                     <div className='form-group'>
        //                         <label><i class="ri-lock-fill"></i></label>
        //                         <div>
        //                         <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        //                         </div>
        //                     </div>
                            
        //                     <div>
        //                        <button type='submit' className='submitbtn'>Next</button>
        //                     </div>
        //                 </form>
        //             </div>
        //             <div className="signup-image">
        //                 <div><img src='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg' alt="sing up image" /></div>
        //                 <Link to={'/login'} className='font-serif text-blue-800 underline ml-10 mt-5'>Already a member? Login</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Register