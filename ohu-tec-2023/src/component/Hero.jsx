import React from 'react'

const Hero = () => {
    return (
        <div className='w-screen h-screen '>
            <div className='flex pt-7 px-10 h-full flex-col md:flex-row' >
                <div className='flex flex-col w-full md:w-1/2 '>
                    <p>Global , Enrich , High Impact</p>
                    <p className='text-3xl font-bold'>Be a part of <br /> TEC INTESHIP 2023</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Elit vestibulum faucibus porttitor libero potenti. Tempor vulputate id mattis ultrices imperdiet lorem gravida feugiat.</p>
                    <button className='bg-red-200 w-1/4 rounded-xl my-2'>Join Now</button>
                </div>
                <div className='w-full h-fit items-center flex justify-center py-5'>
                    <div className=' bg-gray-200 w-64 h-64 rounded-full '>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center animate-bounce pt-10 '>
                    {/* icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10  cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Hero