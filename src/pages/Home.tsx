import Features from "../components/Features";
import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import PartnersSection from "../components/Partners";
import UdemyBusiness from "../components/UdemyBusiness";
import { images } from "../data";

export default function Home() {
  return (
    <>
      <Header />
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
