import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countDec, countIncre, remove } from '../store/cartSlice';
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import {loadStripe} from '@stripe/stripe-js';


const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total)

  const handleInc = (id) => {
    dispatch(countIncre(id));
  }
  const handleDec = (id) => {
    dispatch(countDec(id));
  }

  const handleRemove = (product) => {
    dispatch(remove(product));
    notify("Product removed")
  }

  const notify = (notification) =>{
    toast.success(notification,{
        style:{
            fontWeight:"500",
            fontFamily:"Roboto",
        }
    })
  };

  const checkout =async()=>{
    try{
      const stripe = await loadStripe(process.env.SECRET_PUBLISHABLE_KEY)
      const res = await fetch("https://ecommerce-backend-q9en.onrender.com/checkout",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
          },
          mode:"cors",
          body:JSON.stringify({
              products
          })
      })

      const session = await res.json();
      const result = stripe.redirectToCheckout({
        sessionId:session.id
      })

    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
      {products.length?(<>
        <div className="flex max-w-5xl h-full flex-col mx-auto bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <p className="text-2xl font-sans font-semibold text-gray-900">Shopping cart</p>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.thumbnail}
                      alt='product-image'
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-lg font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-4">${product.price * product.quantity}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                    </div>
                    <div className="flex flex-1 items-center justify-between text-sm">
                      <p className="text-gray-500">Discount {product.discountPercentage}%</p>
                      <div className='h-full items-center ml-4 flex'>
                        <button onClick={() => { handleDec(product.id) }} className="flex items-center justify-center rounded-md w-7 border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700">-</button>
                        <span className='m-5 text-center text-lg'>{product.quantity}</span>
                        <button onClick={() => { handleInc(product.id) }} className="flex items-center justify-center w-7 rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700">+</button>
                      </div>
                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => { handleRemove(product) }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className='text-lg'>Subtotal</p>
          <p className='text-lg'>${total}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
        <div className="mt-6">
          <a
            onClick={()=>{checkout()}}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => { navigate('/products') }}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
      </div>
      </>):(<div className='h-[90vh] w-full'><img className='h-[100%] w-1/2 mx-auto' src='https://static.vecteezy.com/system/resources/previews/004/964/514/non_2x/young-man-shopping-push-empty-shopping-trolley-free-vector.jpg'/></div>)}
      </>
  )
}

export default Cart