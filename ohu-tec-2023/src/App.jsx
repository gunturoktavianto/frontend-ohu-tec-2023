import RegistrationInfo from "./components/RegistrationInfo";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Kegiatan from "./components/Kegiatan";
import Footer from "./components/Footer";
import PriceList from "./components/Pricelist";

function App() {
    return (
        <div className="app scroll-smooth">
            <Navbar />
            <Hero />
            <Kegiatan />
            <RegistrationInfo />
            <PriceList />
            <Footer />
        </div>
    );
}

export default App;
