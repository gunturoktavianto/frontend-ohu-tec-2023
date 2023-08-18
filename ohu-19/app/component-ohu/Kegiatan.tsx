'use client'
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
}

const Kegiatan = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        const updateWidth = () => {
            setWindowWidth(getWindowWidth);
        }
        window.addEventListener('resize', updateWidth);

        return (() => {
        })
        // window.addEventListener("resize", handleResize)
    })
    function arrowStyle(windowWidth) {
        if (windowWidth >= 640) {
            return { "--swiper-navigation-sides-offset": "30vw" }
        } else if (windowWidth >= 570) {
            return { "--swiper-navigation-sides-offset": "10vw" }
        }
    }
    return (
        <div className='w-screen pt-5 font-Poppins md:h-[50vw]'>
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex flex-col items-center justify-center w-full gap-3 px-5 pb-10 text-center'>
                <h1 className='text-2xl font-bold lg:text-4xl '>What we do in TEC?</h1>
                <p className='mx-2 mt-4 md:text-2xl text-center max-w-[60vw]'>Lorem ipsum dolor sit amet consectetur. Tortor cras mattis sit id maecenas dictum interdum luctus in. Nibh malesuada non mauris non risus. Vel gravida eget justo aenean ultricies auctor risus.</p>
            </motion.div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                style={arrowStyle(windowWidth)}

            >
                <SwiperSlide>
                    <div className='flex justify-center w-screen'>
                        <div className='w-[60vw] h-[80vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]'>
                            <div className='w-full bg-red-200 h-1/2'></div>
                            <div className='flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-16'>
                                <h2 className='font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg '>Accelerate Business Acumen</h2>
                                <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'>Lorem ipsum dolor sit amet consectetur. Aenean placerat ac facilisis purus. Ut fermentum aliquam venenatis sapien. At tempus et lacus sit sed vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center w-screen'>
                        <div className='w-[60vw] h-[80vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]'>
                            <div className='w-full bg-red-200 h-1/2'></div>
                            <div className='flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-16'>
                                <h2 className='font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg '>Accelerate Business Acumen</h2>
                                <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'>Lorem ipsum dolor sit amet consectetur. Aenean placerat ac facilisis purus. Ut fermentum aliquam venenatis sapien. At tempus et lacus sit sed vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center w-screen'>
                        <div className='w-[60vw] h-[80vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]'>
                            <div className='w-full bg-red-200 h-1/2'></div>
                            <div className='flex flex-col items-center justify-center w-full px-2 text-center h-1/2 lg:justify-normal lg:pt-5 lg:px-16'>
                                <h2 className='font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg '>Accelerate Business Acumen</h2>
                                <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'>Lorem ipsum dolor sit amet consectetur. Aenean placerat ac facilisis purus. Ut fermentum aliquam venenatis sapien. At tempus et lacus sit sed vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Kegiatan