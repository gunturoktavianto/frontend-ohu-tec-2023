import Image from 'next/image'
import Navbar from './component-ohu/Navbar'
import Hero from './component-ohu/Hero'
import Regis from './component-ohu/Regis'
import Info from './component-ohu/Info'
import Footer from './component-ohu/Footer'
import Countdown from './component-ohu/Countdown'

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Regis></Regis>
        
        <Countdown></Countdown>
        <Footer></Footer>
    </>
  )
}
