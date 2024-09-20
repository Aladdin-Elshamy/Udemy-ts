import "./index.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import { images } from "./data";
function App() {
  return (
    <>
      <header>
        <Navbar />
        <div className="lg:container h-96 pt-0 ">
          <ImageSlider images={images} />
        </div>
      </header>
    </>
  );
}

export default App;
