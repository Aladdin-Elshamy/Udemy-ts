import { ReactNode } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface IProps {
  title: string;
  description: string;
  children: ReactNode;
  setSearchOpen: (open: boolean) => void;
}
export default function SlideText({
  title,
  description,
  children,
  setSearchOpen,
}: IProps) {
  return (
    <>
      <div className={`container pt-4 flex gap-4 flex-col min-h-[280px]`}>
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="font-mediumw-4/5">{description}</p>
        {children}
        <button
          className="mb-4 border justify-center border-black min-w-[252px] max-w-[420px] flex items-center gap-4 px-4 py-2 mt-4"
          onClick={() => setSearchOpen(true)}
        >
          <p className="text-gray-600 ">What do you want to learn?</p>
          <IoSearchSharp className="text-gray-600" />
        </button>
      </div>
    </>
  );
}
