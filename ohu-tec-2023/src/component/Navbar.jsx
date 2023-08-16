import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'


const Navbar = () => {
    const [openNavbar, setopenNavbar] = useState(false)
   
    function MobileNavbar() {
        return (

            <motion.div
                initial={{ opacity: 0.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 150, opacity: 0.0 }}
                transition={{ duration: 0.2 }}
                className='fixed w-[40vw] h-fit bg-white right-10 top-14 rounded-2xl shadow-lg shadow-gray-800 px-5 py-5 flex flex-col gap-2 ' >

                <p className='cursor-pointer'>Challenge</p>
              
                <p className='cursor-pointer'>Oprek</p>
            
                <p className='cursor-pointer'>Register</p>
              
                <p className='cursor-pointer'>Login</p>
            </motion.div >

        )
    }
    return (
        <div className='bg-gray-200 w-screen h-14 flex justify-between items-center px-10 overflow-clip fixed    bg-opacity-90 '>
            {/** navbar for dekstop */}
            <div className='w-full md:flex items-center justify-between hidden'>
                <p>Logo</p>
                <div className='flex gap-5 '>
                    <p className='cursor-pointer'>Challenge</p>
                    <p className='cursor-pointer'>Oprek</p>
                    <p className='cursor-pointer'>Register</p>
                    <p className='cursor-pointer'>Login</p>
                </div>
            </div>
            {/** navbar for mobile */}
            <div className='md:hidden w-full h-full flex justify-between items-center'>
                <p>Logo</p>
                <AnimatePresence>
                    {!openNavbar && (
                        <motion.button 
                        initial ={{rotate:180 , opacity:1}}
                        animate = {openNavbar? {rotate:0 , opacity:1} : {}}
                        exit = {{rotate:180 , opacity:0}}
                       
                        className='w-fit h-fit' onClick={() => setopenNavbar(!openNavbar)}>
                            <span class="my-2 block h-[2px] w-[30px] bg-black origin-top-left transition duration-300 ease-in-out"></span>
                            <span class="my-2 block h-[2px] w-[30px] bg-black transition duration-300 ease-in-out"></span>
                            <span class="my-1 block h-[2px] w-[30px] bg-black origin-bottom-left transition duration-300 ease-in-out"></span>
                        </motion.button>
                    )}
                    {openNavbar && (
                        <motion.button 
                        initial ={{rotate:180 , opacity:0}}
                        whileInView = {openNavbar? {rotate:0 , opacity:1  }:{}}
                        exit = {{rotate:180 , opacity:0}}
                        className='w-fit h-fit' onClick={() => setopenNavbar(!openNavbar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </motion.button>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {openNavbar && (<MobileNavbar></MobileNavbar>)}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Navbar