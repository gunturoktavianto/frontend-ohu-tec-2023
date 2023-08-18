"use client";
import React from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";

const VideoPlayer = () => {
    let factor = 0.3;
    return (
        <div
            id="videoplayer"
            className="flex flex-col items-center justify-center w-screen h-screen"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-[80vw] gap-2"
            >
                <h1 className="text-5xl font-semibold text-center">
                    Techno Entrepreneur Club
                </h1>
                <h1 className="text-2xl font-medium">OPEN HOUSE UNIT 2023</h1>
                <div className="px-30 ">
                    
                        <ReactPlayer  url="https://youtu.be/NlIj4a213h0" />
                    
                </div>
            </motion.div>
        </div>
    );
};

export default VideoPlayer;
