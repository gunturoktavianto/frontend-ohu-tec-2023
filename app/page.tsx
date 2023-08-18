import Navbar from "./component-ohu/Navbar";
import VideoPlayer from "./component-ohu/VideoPlayer";
import Regis from "./component-ohu/Regis";
import Footer from "./component-ohu/Footer";
import Countdown from "./component-ohu/Countdown";
import Hero from "./component-ohu/Hero";
import Kegiatan from "./component-ohu/Kegiatan";

export default function Home() {
    
    return (
        <html className="scroll-smooth">
            <section className="w-[99vw] overflow-hidden h-fit">
                <Hero></Hero>
                <Navbar></Navbar>
                <VideoPlayer></VideoPlayer>
                <Regis></Regis>
                <Kegiatan></Kegiatan>
                <Countdown></Countdown>
                <Footer></Footer>
            </section>
        </html>
    );
}
