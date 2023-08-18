import React from "react";

const Hero = () => {
    return (
        <div className="w-screen h-screen pt-20 ">
            <div className="flex flex-col h-full px-10 pt-7 md:flex-row md:justify-center md:items-center md:px-20 md:w-screen md:translate-x-10 md:-translate-y-20">
                <div className="flex flex-col w-full md:w-3/4 ">
                    <p className="md:text-3xl">Global, Enrich, High Impact</p>
                    <p className="text-3xl font-bold md:text-6xl">
                        Be a part of <br /> TEC INTERNSHIP 2023
                    </p>
                    <p className="md:text-2xl">
                        Lorem ipsum dolor sit amet consectetur. Elit vestibulum
                        faucibus porttitor libero potenti. Tempor vulputate id
                        mattis ultrices imperdiet lorem gravida feugiat.
                    </p>
                    <a href="#countdown">
                        
                        <button className="w-1/4 my-2 bg-red-200 rounded-xl md:my-5 md:h-10">Join Now</button>
                    </a>
                </div>
                <div className="flex items-center justify-center w-full py-5 h-fit">
                    <div className="w-64 h-64 bg-gray-200 rounded-full md:w-96 md:h-96"></div>
                </div>
                <div className="hidden md:scroll-smooth md:fixed md:flex md:items-center md:justify-center md:w-full md:pt-10 md:animate-bounce md:bottom-10">
                    <a href="#videoplayer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 cursor-pointer md:w-16 md:h-16"
                        >
                            {/* icon */}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
