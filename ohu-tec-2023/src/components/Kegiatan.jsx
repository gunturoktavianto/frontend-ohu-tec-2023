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
    function arrowStyle (windowWidth)  {
        if (windowWidth >= 640) {
            return {"--swiper-navigation-sides-offset" : "30vw"}
        }else if (windowWidth >= 570){
            return  {"--swiper-navigation-sides-offset" : "10vw"} 
        }
    }
    return (
        <div className='w-screen font-Poppins pt-5'>
            <div className='w-full flex flex-col justify-center items-center text-center px-5 '>
                <h1 className='font-bold text-2xl lg:text-4xl '>What we do in TEC?</h1>
                <p className='mt-4 mx-2 text-center'>Lorem ipsum dolor sit amet consectetur. Tortor cras mattis sit id maecenas dictum interdum luctus in. Nibh malesuada non mauris non risus. Vel gravida eget justo aenean ultricies auctor risus.</p>
            </div>
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
                <div className='w-screen flex justify-center'>
                    <div className='w-[60vw] h-[80vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]'>
                        <div className='w-full h-1/2 bg-red-200'></div>
                        <div className='w-full h-1/2 flex items-center 
                            justify-center lg:justify-normal lg:pt-5 lg:px-16 text-center flex-col px-2'>
                            <h2 className='font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg '>Accelerate Business Acumen</h2>
                            <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'>Lorem ipsum dolor sit amet consectetur. Aenean placerat ac facilisis purus. Ut fermentum aliquam venenatis sapien. At tempus et lacus sit sed vestibulum.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-screen flex justify-center'>
                    <div className='w-[60vw] h-[80vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]'>
                        <div className='w-full h-1/2 bg-red-200'></div>
                        <div className='w-full h-1/2 flex items-center 
                            justify-center lg:justify-normal lg:pt-5 lg:px-16 text-center flex-col px-2'>
                            <h2 className='font-bold text-sm sm:text-[15px] lg:text-[16px] min-[1300px]:text-lg '>Accelerate Business Acumen</h2>
                            <p className='text-[10px] sm:text-[12px] lg:text-sm min-[1300px]:text-[16px] min-[1300px]:pt-7'>Lorem ipsum dolor sit amet consectetur. Aenean placerat ac facilisis purus. Ut fermentum aliquam venenatis sapien. At tempus et lacus sit sed vestibulum.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-screen flex justify-center'>
                    <div className='w-[60vw] h-[80vw] bg-gray-200 rounded-2xl flex flex-col overflow-clip sm:w-[30vw] sm:h-[40vw] lg:w-[30vw] lg:h-[30vw]'>
                        <div className='w-full h-1/2 bg-red-200'></div>
                        <div className='w-full h-1/2 flex items-center 
                            justify-center lg:justify-normal lg:pt-5 lg:px-16 text-center flex-col px-2'>
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