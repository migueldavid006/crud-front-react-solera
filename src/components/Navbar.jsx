import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <header>
           <nav  className='flex justify-start items-center  h-16 bg-white text-black  shadow-sm' >
              
                <Link className=' m-5' to="/autos">autos</Link>
                 <Link className=' m-5' to="/salud">salud</Link>
                 <Link className=' m-5' to="/hogar">hogar</Link>
                 <Link className=' m-5' to="/hogar">hogar</Link>
                 <Link className=' m-5' to="/todos">todos</Link>
           
            </nav>
        </header>
    </>
  )
}

export default Navbar