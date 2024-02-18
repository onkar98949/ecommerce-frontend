import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
    
        const fetchProducts = async () => {
            const res = await fetch('https://dummyjson.com/products/category/lighting?limit=4');
            const data = await res.json();
            setProducts(data.products)
        }
        fetchProducts();

    }, [])

    const handleAdd =(product)=>{
       dispatch( add(product));
      
    }

    return (

        <div className="bg-white mb-5">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative   rounded  p-2">
                
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt="product-image"
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold capitalize text-gray-800 truncate text-wrap">
                      <a href={`/productpage/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-900"><button className='btn'onClick={()=>{handleAdd(product)}}>Add to Cart</button></p> */}
                  </div>
                  <p className="text-lg font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        // <div>
        // <h1 className='text-center font-sans font-semibold text-3xl mt-6'>PRODUCTS</h1>
        // <div className='productsWrapperdiv'>
           
        //     {products.slice(0, 4).map((product) => (
               
        //         <div className='card' key={product.id}>
        //              <Link to={`/productpage/${product.id}`}>
        //             <img src={product.thumbnail} alt='imageproduct' className='mx-auto' />
        //             <h4>{product.title}</h4>
        //             <h5>${Math.round(product.price)}</h5>
        //             </Link>
        //             <button className='btn' onClick={()=>{handleAdd(product)}}>Add to Cart</button>
        //         </div>
        
        //     ))}
        // </div>
        // <div className='w-full text-center mb-10'><Link to='/products'><p className='linkbtn'>VIEW MORE</p></Link></div>
        // <br/>
        // </div>
    )
}

export default Products