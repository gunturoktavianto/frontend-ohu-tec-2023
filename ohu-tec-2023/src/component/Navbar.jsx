import React from 'react'

const Navbar = () => {
  
  return (
    <div className='bg-gray-200 w-screen h-10 flex justify-between items-center px-10 overflow-clip'>
        <p>Logo</p>
        <div className='flex gap-5 '>
            <p  className='cursor-pointer'>Challenge</p>
            <p  className='cursor-pointer'>Oprek</p>
            <p  className='cursor-pointer'>Register</p>
            <p  className='cursor-pointer'>Login</p>
        </div>

    </div>
  )
}

export default Navbar