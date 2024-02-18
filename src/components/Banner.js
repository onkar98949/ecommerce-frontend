import React from 'react';
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='banner'>
        <div className='banner_innerdiv'>

          <h1>Discover Quality Products</h1>
          <h2>Trendsetting Fashion for Every Style Quality Fabrics, Unmatched Style – Shop Now!</h2>
          <Link to='/contact'><p className='linkbtn hover:bg-transparent'> Contact us </p></Link>

        </div>
      </section>
  )
}

export default Banner