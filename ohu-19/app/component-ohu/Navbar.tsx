"use client"
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {motion} from 'framer-motion'

const Navbar = () => {

  return (
    <div className='fixed top-0 z-10 flex items-center justify-center w-screen'>
      <motion.div 
      initial = {{y:-50}}
      whileInView={{y:0}}
      transition={{duration:1}}
      className='w-[70vw] md:w-fit md:px-10 h-fit absolute top-0  bg-black rounded-b-2xl flex justify-center items-center shadow-md shadow-gray-800 '>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='py-3'>
              <NavigationMenuTrigger className='text-2xl text-white bg-transparent'>
                <p className=''>TEC</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='w-[250px] h-fit flex '>
                  <AspectRatio ratio={10 / 12} className=" bg-muted">
                    <Image
                      src="https://w0.peakpx.com/wallpaper/330/348/HD-wallpaper-blue-eye-cute-alone-anime-girl.jpg"
                      alt="Photo by Drew Beamer"
                      fill
                      className="object-cover w-1/2 rounded-md"
                    />
                  </AspectRatio>
                  <div className='w-1/2 '>
                    <Button className='flex flex-col text-black bg-white h-1/3 hover:text-white'>
                      <p className='font-semibold'>Opening</p>
                      <p className='text-xs font-light'>Footage persembahan oleh TEC</p>
                    </Button>
                    <Button className='flex flex-col text-black bg-white h-1/3 hover:text-white'>
                      <p className='font-semibold'>TEC SosMed</p>
                      <p className='text-xs font-light'>Sosial media TEC dan OHU TEC</p>
                    </Button>
                    <Button className='flex flex-col text-black bg-white h-1/3 hover:text-white'>
                      <p className='font-semibold'>Info Challenge</p>
                      <p className='text-xs font-light'>Informasi terkait challenge</p>
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-xl text-white bg-transparent cursor-pointer'>
                Countdown
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='px-3 py-5 cursor-pointer w-fit hover:bg-slate-800 hover:text-white'>
                  <p className='text-3xl font-semibold'>Check Countdown</p>
                  <p className='font-normal'>Detik detik open regristrasi TEC ITB !</p>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

      </motion.div>
    </div>
  )
}

export default Navbar