import React from 'react'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Promo from '../components/Promo'
import Newsletter from '../components/Newsletter'
import Banner from '../components/Banner'
import Stats from '../components/Stats'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Promo />
      <Newsletter />
      <Products />
      <Stats/>
      <Footer />
    </div>
  )
}

export default Home