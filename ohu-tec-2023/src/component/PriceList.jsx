import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function getWindowWidth() {
    const { innerWidth: width } = window;
    return width;
}

const PriceList = () => {
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
        <div className='items-center justify-center w-screen h-screen py-20 font-Poppins'>
            <div className='flex flex-col items-center justify-center w-full px-5 text-center h-1/2'>
                <h1 className='text-2xl font-bold lg:text-4xl '>Comitment Fee</h1>
                <p className='mx-2 mt-4 text-center'>Lorem ipsum dolor sit amet consectetur. Tortor cras mattis sit id maecenas dictum interdum luctus in. Nibh malesuada non mauris non risus. Vel gravida eget justo aenean ultricies auctor risus.</p>
            </div>
            <div className='w-screen -translate-y-10 h-1/2 md:-translate-y-24'>
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
                        <div className='flex justify-center w-screen py-10'>
                            <div className='w-[50vw] h-fit bg-gray-200 rounded-2xl flex flex-col overflow-clip shadow-xl shadow-gray-400 max-w-[400px]'>

                                <div className='flex flex-col items-center justify-center w-full px-5 py-5 text-center full lg:justify-normal lg:pt-5 lg:px-16'>
                                    <h2 className='font-bold text-[20px] lg:text-[25px]  min-[1300px]:text-lg '>Paket Sendirian</h2>
                                    <p className='text-[100px]'>🫂</p>
                                    <p className='text-3xl font-semibold font-Poppins '>Rp 50.000 <span className='text-xl font-medium'>with</span></p>
                                    <p className='w-3/4 pb-3 font-bold text-right'>Rp 50.000/orang</p>
                                    <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center w-screen py-10'>
                            <div className='w-[50vw] h-fit bg-gray-200 rounded-2xl flex flex-col overflow-clip shadow-xl shadow-gray-400 max-w-[400px]'>

                                <div className='flex flex-col items-center justify-center w-full px-5 py-5 text-center full lg:justify-normal lg:pt-5 lg:px-16'>
                                    <h2 className='font-bold text-[20px] lg:text-[25px]  min-[1300px]:text-lg '>Paket Berdua</h2>
                                    <p className='text-[100px]'>🧑‍🤝‍🧑</p>
                                    <p className='text-3xl font-semibold font-Poppins '>Rp 80.000 <span className='text-xl font-medium'>with</span></p>
                                    <p className='w-3/4 pb-3 font-bold text-right'>Rp 40.000/orang</p>
                                    <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center w-screen py-10'>
                            <div className='w-[50vw] h-fit bg-gray-200 rounded-2xl flex flex-col overflow-clip shadow-xl shadow-gray-400 max-w-[400px]'>

                                <div className='flex flex-col items-center justify-center w-full px-5 py-5 text-center full lg:justify-normal lg:pt-5 lg:px-16'>
                                    <h2 className='font-bold text-[20px] lg:text-[25px]  min-[1300px]:text-lg '>Paket Berempat</h2>
                                    <p className='text-[80px]'>👯🤼</p>
                                    <p className='text-3xl font-semibold font-Poppins '>Rp 120.000 <span className='text-xl font-medium'>with</span></p>
                                    <p className='w-3/4 pb-3 font-bold text-right'>Rp 30.000/orang</p>
                                    <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default PriceList