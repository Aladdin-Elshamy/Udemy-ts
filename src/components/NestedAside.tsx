import { FaAngleLeft } from "react-icons/fa6";
import { ReactNode } from "react";

interface IProps {
  open: string;
  setOpen: (open: string) => void;
  children: ReactNode;
}
export default function NestedAside({ open, setOpen, children }: IProps) {
  return (
    <div
      className={`${
        open ? "right-0" : "right-[-100%]"
      } top-0 absolute transition-all duration-300 bg-white w-full h-full z-40`}
    >
      <button
        className="flex items-center bg-gray-100 w-full px-4 gap-2 py-4"
        onClick={() => setOpen("")}
      >
        <FaAngleLeft />
        <p>Menu</p>
      </button>
      {children}
    </div>
  );
}
