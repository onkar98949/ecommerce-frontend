import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { UserContext } from '../Context/UserContext';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [display, setDisplay] = useState({});
  const { setUserInfo, userInfo } = useContext(UserContext)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    const isNotfound = location.pathname === '/not-found';
    if(isNotfound){ return setDisplay({display:"none"})}
    const isProductPage = location.pathname !== '/';
    setDisplay(isProductPage ? { position: 'relative', backgroundColor:'rgba(0, 0, 0, 0.645)'} : {});
  }, [location.pathname]);

  useEffect(() => {
    fetch('https://ecommerce-backend-q9en.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    }).catch(()=>{
      console.log("User not loggedIn");
    }
    )
  }, []);

  async function logout() {
    fetch('https://ecommerce-backend-q9en.onrender.com/logout', {
      credentials: 'include',
      method: "POST",
    })
    setUserInfo(null);
  }

  const email = userInfo?.email;

  return (
    <div className='navdiv' style={display}>
      <span className='logo'><i class="ri-store-3-line"></i> STORE</span>
      <div className='navitems'>
        <ul>
          
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          {email ? (
              <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&usqp=CAU"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/user-profile"
                        className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-black')}
                      >
                      Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                      to={'/login'}
                      onClick={() => {logout();}}
                      className={classNames(active ? 'bg-gray-300' : '', 'block px-4 py-2 text-sm text-black')}
                      >
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <li onClick={()=>{navigate('/login')}} className='hover:cursor-pointer border-2 rounded'><p >Login</p></li>
          )}
          <li className='homebtn'><Link to='/'><i class="ri-home-3-line"></i></Link></li>
          <li className='flex'><Link to='/cart'><i class="ri-shopping-cart-line"></i><span>{items.length}</span></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar