import { ReactNode } from "react";
import SlideBoxHeader from "../elements/SlideBoxHeader";
import SlideBoxParagraph from "../elements/SlideBoxParagraph";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearchOpen } from "../app/features/Search/SearchSlice";

interface IProps {
  children: ReactNode;
  title: string;
  description: string;
  version?: "mobile" | "desktop";
  width?: string;
}
export default function SlideBox({
  version = "desktop",
  title,
  width,
  description,
  children,
}: IProps) {
  const dispatch = useDispatch();
  return version === "desktop" ? (
    <div
      className={`${width} left-24 absolute top-1/2 transform -translate-y-1/2 bg-white border shadow-lg p-4`}
    >
      <SlideBoxHeader title={title} />
      <SlideBoxParagraph description={description} />
      {children}
    </div>
  ) : (
    <div className={`container pt-4 flex gap-4 flex-col min-h-[280px]`}>
      <SlideBoxHeader title={title} />
      <SlideBoxParagraph description={description} />
      {children}
      <button
        className="mb-4 border justify-center border-black max-w-[420px] flex items-center gap-4 px-2 py-2 mt-4"
        onClick={() => dispatch(setSearchOpen())}
      >
        <p className="text-gray-600 ">What do you want to learn?</p>
        <IoSearchSharp className="text-gray-600" />
      </button>
    </div>
  );
}
