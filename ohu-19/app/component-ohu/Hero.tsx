import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>

            <div className='flex flex-col items-center justify-center w-[80vw] gap-2'>
                <h1 className='text-5xl font-semibold text-center'>Techno Entrepreneur Club</h1>
                <h1 className='text-2xl font-medium'>OPEN HOUSE UNIT 2023</h1>
                <video controls autoPlay className='w-30 h-39' width='500' >
                    <source src="OHU_TEC.mp4" />
                    <p className='text-xl text-white'>not compatible</p>
                </video>
            </div>

        </div>
    )
}

export default Hero