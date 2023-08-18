import Navbar from "./component-ohu/Navbar";
import VideoPlayer from "./component-ohu/VideoPlayer";
import Regis from "./component-ohu/Regis";
import Footer from "./component-ohu/Footer";
import Countdown from "./component-ohu/Countdown";
import Hero from "./component-ohu/Hero";
import Kegiatan from "./component-ohu/Kegiatan";
import Popup from "./component-ohu/Popup";

export default function Home() {
    
    return (
        <html className="scroll-smooth overflow-x-hidden">
            <section className="w-[100vw]  overflow-hidden h-fit">
                <Popup />
                <Hero />
                <Navbar />
                <VideoPlayer />
                <Regis />
                <Kegiatan />
                <Countdown />
                <Footer />
            </section>
        </html>
    );
}
