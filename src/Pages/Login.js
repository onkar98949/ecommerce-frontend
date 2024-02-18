import React ,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../Context/UserContext';

const Login = () => {
    const navigate= useNavigate();
    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {setUserInfo} = useContext(UserContext);

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
        const response = await fetch('https://ecommerce-backend-q9en.onrender.com/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials:'include',
          })
      
          if (response.ok) {
            const res = await fetch('https://ecommerce-backend-q9en.onrender.com/account', {
            headers: { 'Content-Type': 'application/json' },
            credentials:'include',
            })

            if(res.status===403){
              navigate('/personal-details')
            }

            response.json().then(userInfo => {
              setUserInfo(userInfo)
            })
            navigate('/')  
          } else {
             notify('Wrong credentials');
          }

    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Toaster/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>
        </div>
      </div>
        
        // <div className='signup-maindiv flex items-center'>
        //     <div className="container">
        //         <div className="signup-content">
        //             <div className="signup-form">
        //                 <h2 className="form-title">Login</h2>
        //                 <form onSubmit={handleSubmit} method="POST" className="register-form">
                            
        //                     <div className='form-group'>
        //                         <label><i class="ri-mail-fill"></i></label>
        //                         <input type="email" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        //                     </div>
        //                     <div className='form-group'>
        //                         <label><i class="ri-lock-fill"></i></label>
        //                         <input type="password" name="pass" id="pass" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        //                     </div>
        //                     <div>
        //                         <button type='submit' className='submitbtn'>Login</button>
        //                     </div>
        //                 </form>
        //             </div>
        //             <div className="signup-image">
        //                 <div><img src='https://img.freepik.com/free-vector/business-man-celebrating-working-achievement_3446-704.jpg' alt="sing up image" /></div>
        //                 <Link to={'/register'} className='font-serif text-blue-800 underline ml-10 mt-5'>New member? Register</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login