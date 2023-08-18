"use client";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollY) {
                // if scroll down hide the navbar
                setShow(false);
            } else {
                // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className="fixed top-0 z-10 flex items-center justify-center w-screen">
            <motion.div
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-[70vw] md:w-fit md:px-10 h-fit absolute top-0  bg-black rounded-b-2xl flex justify-center items-center shadow-md shadow-gray-800 transition-all duration-300${
                    !show &&
                    "-translate-y-10 md:-translate-y-0 bg-white  bg-opacity-10 backdrop-blur-lg drop-shadow-lg "
                } `}
            >
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="py-3">
                            <NavigationMenuTrigger className={`text-2xl text-white bg-transparent ${!show && "text-black"}`}>
                                <p className="">TEC</p>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="w-[250px] h-fit flex ">
                                    <AspectRatio
                                        ratio={10 / 12}
                                        className=" bg-muted"
                                    >
                                        <Image
                                            src="https://w0.peakpx.com/wallpaper/330/348/HD-wallpaper-blue-eye-cute-alone-anime-girl.jpg"
                                            alt="Photo by Drew Beamer"
                                            fill
                                            className="object-cover w-1/2 rounded-md"
                                        />
                                    </AspectRatio>
                                    <div className="w-1/2 ">
                                        <Button className="flex flex-col text-black bg-white h-1/3 hover:text-white">
                                            <a
                                                href="#videoplayer"
                                                className="font-semibold"
                                            >
                                                Teaser
                                            </a>
                                            <a
                                                href="#videoplayer"
                                                className="text-xs font-light"
                                            >
                                                Open House Unit TEC 2023
                                            </a>
                                        </Button>
                                        <Button className="flex flex-col text-black bg-white h-1/3 hover:text-white">
                                            <a
                                                href="#kegiatan"
                                                className="font-semibold"
                                            >
                                                What we do?
                                            </a>
                                            <a
                                                href="#kegiatan"
                                                className="text-xs font-light"
                                            >
                                                TEC Past Activities
                                            </a>
                                        </Button>
                                        <Button className="flex flex-col text-black bg-white h-1/3 hover:text-white">
                                            <a
                                                href="#footer"
                                                className="font-semibold"
                                            >
                                                TEC SosMed
                                            </a>
                                            <a
                                                href="#footer"
                                                className="text-xs font-light"
                                            >
                                                Check on footer!
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem className="scroll-smooth">
                            <a className="scroll-smooth" href="#countdown">
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Countdown
                                </NavigationMenuLink>
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </motion.div>
        </div>
    );
};

export default Navbar;
