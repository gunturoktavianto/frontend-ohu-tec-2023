'use client'
import React from 'react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'
import { motion } from 'framer-motion'

const VideoPlayer = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col items-center justify-center w-[80vw] gap-2'>
                <h1 className='text-5xl font-semibold text-center'>Techno Entrepreneur Club</h1>
                <h1 className='text-2xl font-medium'>OPEN HOUSE UNIT 2023</h1>
                <video controls className='w-30 h-39' width='500' >
                   
                    <p className='text-xl text-white'>not compatible</p>
                </video>
            </motion.div>

        </div>
    )
}

export default VideoPlayer