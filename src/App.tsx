import "./index.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import { images } from "./data";
import PartnersSection from "./components/Partners";
import Features from "./components/Features";
import UdemyBusiness from "./components/UdemyBusiness";
function App() {
  return (
    <>
      <header className="sticky top-0 z-30">
        <Navbar />
      </header>
      <div className="lg:container h-full md:h-96 pt-0 ">
        <ImageSlider images={images} />
      </div>
      <main>
        <PartnersSection />
        <Features />
        <UdemyBusiness />
      </main>
    </>
  );
}

export default App;
