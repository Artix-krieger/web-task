import {BannerSection, ExtraSection, FooterSection, HeroSection, Navbar, ProductSection} from "./components/index.js";

function App() {
    return (
        <div className="bg-stone-50 flex flex-col">
            <Navbar/>
            <HeroSection/>
            <BannerSection/>
            <ProductSection/>
            <ExtraSection/>
            <FooterSection/>
        </div>
    );
}
export default App