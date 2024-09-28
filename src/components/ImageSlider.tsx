import { Fragment, useState } from "react";
import { IImage } from "../interfaces";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Search from "./Search";
import DeskSlide from "./DeskSlide";
import MobSlide from "./MobSlide";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import SlideNavBtns from "../elements/SlideNavBtns";
interface IProps {
  images: IImage[];
}
export default function ImageSlider({ images }: IProps) {
  const searchOpen = useSelector((state: RootState) => state.search.open);
  const [imageIndex, setImageIndex] = useState(0);
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
    <div className="w-full h-full relative overflow-x-hidden">
      {searchOpen && <Search />}
      <div className="image-container w-full h-full flex md:hidden overflow-scroll no-scrollbar">
        {images.map((image, index) => (
          <Fragment key={image.title + image.url[0]}>
            <MobSlide image={image} imageIndex={imageIndex} index={index} />
          </Fragment>
        ))}
      </div>
      <div className="w-full h-full hidden md:flex overflow-x-hidden">
        {images.map((image, index) => (
          <Fragment key={image.title + image.url[0]}>
            <DeskSlide image={image} imageIndex={imageIndex} index={index} />
          </Fragment>
        ))}
      </div>
      {/* Navigation Buttons */}
      <SlideNavBtns onClick={showPrevious} direction="left">
        <FaAngleLeft />
      </SlideNavBtns>
      <SlideNavBtns onClick={showNext} direction="right">
        <FaAngleRight />
      </SlideNavBtns>
    </div>
  );
}
