import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
      <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600">Success!</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Placed Successfully!</h1>
          <p class="mt-6 text-base leading-7 text-gray-600">Sale is live, Continue shopping and get 30% off</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link to='/' class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go to home</Link>
            <Link to='/contact' class="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success