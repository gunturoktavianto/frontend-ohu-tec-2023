import Image from 'next/image'
import Navbar from './component-ohu/Navbar'
import VideoPlayer from './component-ohu/VideoPlayer'
import Regis from './component-ohu/Regis'
import Info from './component-ohu/Info'
import Footer from './component-ohu/Footer'
import Countdown from './component-ohu/Countdown'
import Hero from './component-ohu/Hero'
import PriceList from './component-ohu/Pricelist'
import Kegiatan from './component-ohu/Kegiatan'

export default function Home() {
  return (
    <section className='w-screen overflow-hidden h-fit'>
        <Navbar></Navbar>
        <VideoPlayer></VideoPlayer>
        <Regis></Regis>      
        <Countdown></Countdown>
        <PriceList></PriceList>
        <Kegiatan></Kegiatan>
        <Footer></Footer>
    </section>
  )
}
