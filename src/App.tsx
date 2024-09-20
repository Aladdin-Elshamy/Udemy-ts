import "./index.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import { images } from "./data";
function App() {
  return (
    <>
      <header className="sticky top-0 z-30">
        <Navbar />
      </header>
      <div className="lg:container h-96 pt-0 ">
        <ImageSlider images={images} />
      </div>
    </>
  );
}

export default App;
