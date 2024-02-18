import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { add } from '../store/cartSlice';
import toast, { Toaster } from 'react-hot-toast';


const ProductPage = () => {
    const [product,setProduct] = useState({});
    const dispatch = useDispatch();

    const notify = (notification) =>{
        toast.success(notification,{
            style:{
                fontWeight:"500",
                fontFamily:"Roboto",
            }
        })
    };
    
    const handleAdd = (product) => {
        dispatch(add(product));
        notify("Product Added")
    }

    const { id } = useParams();
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(response=>{
            setProduct(response);
        })
    },[])

    return (
        <div>
             <div><Toaster/></div>
            <div className='ppdiv'>
                <div className='product-pagediv mx-auto'>
                    <div className='pp-div1'>
                        <img src={product.thumbnail} alt='product-image' />
                    </div>
                    <div className='pp-div2'>
                        <h1>{product.title}</h1>
                        <div className='rating-div'>
                            <p className='rating'>{product.rating}<i class="ri-star-fill text-yellow-400"></i></p>
                            <p className='response'>(102) Reviews</p>
                        </div>
                        <h2>Price: ${product.price}<span className='text-yellow-400 text-lg ml-4'>({product.discountPercentage}% Discount)</span></h2>
                        <p className='product-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam adipisci dicta eaque, magnam, expedita optio cumque blanditiis impedit accusantium facere? A, deserunt?Ipsam numquam adipisci dicta eaque, magnam, expedita optio cumque blanditiis impedit accusantium facere? A, deserunt?</p>
                        <div className='brand-div mt-7'>
                            <p>Category: <span>{product.category}</span></p>
                            <p>Brand: <span>{product.brand}</span></p>
                        </div>
                        <div className='mt-6'>
                                <button onClick={()=>{handleAdd(product)}} className='pp-cartbtn'>Add to Cart</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage