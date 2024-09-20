import { useState } from "react";
import { IImage } from "../interfaces";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BigButton from "../elements/BigButton";
import SlideText from "./SlideText";
import Search from "./Search";

interface IProps {
  images: IImage[];
}
export default function ImageSlider({ images }: IProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  function showNext() {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex((prevIndex) => prevIndex + 1);
  }

  function showPrevious() {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
      return;
    }
    setImageIndex((prevIndex) => prevIndex - 1);
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      {searchOpen && <Search setSearchOpen={setSearchOpen} />}
      <div className="image-container w-full h-full flex md:hidden overflow-scroll no-scrollbar">
        {images.map((image, index) => (
          <div
            className="w-full flex-shrink-0 flex-grow-0"
            style={{
              transform: `translateX(-${imageIndex * 100}%)`,
            }}
            key={image.title + image.url[0]}
          >
            <img
              src={image.url[0]}
              alt={image.title}
              style={{
                transform: `translateX(-${imageIndex * 100}%)`,
              }}
              className="transition-all duration-300 object-cover object-right w-full flex-shrink-0 flex-grow-0 block"
            />
            {index === 0 && (
              <SlideText
                setSearchOpen={setSearchOpen}
                title="Stuck in neutral?"
                description="Accelerate your future with lessons from McLaren Racing."
              >
                <a
                  href="#"
                  className="max-w-[420px] border border-black block font-semibold text-center bg-black text-white p-4 w-4/5"
                >
                  Take the course
                </a>
              </SlideText>
            )}
            {index === 1 && (
              <SlideText
                setSearchOpen={setSearchOpen}
                title="Skills that drive you forward"
                description="Technology and the world of work change fast — with us, you're
                faster. Get the skills to achieve goals and stay competitive."
              >
                <div className="flex flex-col items-start gap-2">
                  <a
                    href="#"
                    className="w-4/5 max-w-[420px] border border-black block font-semibold text-center bg-black text-white p-4"
                  >
                    Plan for Individuals
                  </a>
                  <a
                    href="#"
                    className="max-w-[420px] w-4/5 border border-black block font-semibold text-center text-black bg-white p-4"
                  >
                    Plans for Organizations
                  </a>
                </div>
              </SlideText>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-full hidden md:flex overflow-hidden">
        {images.map((image) => (
          <div
            key={image.title}
            style={{
              transform: `translateX(-${imageIndex * 100}%)`,
              backgroundImage: `url(${image.url[1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="transition-all duration-300 object-cover object-center w-full flex-shrink-0 flex-grow-0 block"
          >
            {/* First Box */}
            <div
              className={`${
                imageIndex === 0 ? "opacity-100" : "opacity-0"
              } left-24  absolute top-1/2 transform -translate-y-1/2 bg-white border shadow-lg w-96 p-4 `}
            >
              <h2 className="text-3xl font-bold">Stuck in neutral?</h2>
              <p className="font-medium py-3 max-w-80">
                Accelerate your future with lessons from McLaren Racing.
              </p>
              <BigButton>Take the course</BigButton>
            </div>
            {/* Second Box */}
            <div
              className={`${
                imageIndex === 1 ? "opacity-100" : "opacity-0"
              } left-24 absolute top-1/2 transform -translate-y-1/2 bg-white border shadow-lg w-[450px] p-4  duration-300`}
            >
              <h2 className="text-3xl font-bold">
                Skills that drive you forward
              </h2>
              <p className="font-medium py-3 max-w-80">
                Technology and the world of work change fast — with us, you're
                faster. Get the skills to achieve goals and stay competitive.
              </p>
              <div className="flex items-center gap-2">
                <BigButton>Plan for Individuals</BigButton>
                <a
                  href="#"
                  className="border border-black w-full block font-semibold text-center text-black bg-white p-4"
                >
                  Plans for Organizations
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={showPrevious}
        className="hidden md:block absolute top-1/2 -translate-y-1/2 left-5 bg-black text-white p-2 rounded-full"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={showNext}
        className="hidden md:block absolute top-1/2 -translate-y-1/2 right-5 bg-black text-white p-2 rounded-full"
      >
        <FaAngleRight />
      </button>
      <div className="text-4xl text-black">hello</div>
    </div>
  );
}
