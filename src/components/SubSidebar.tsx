import { FaAngleLeft } from "react-icons/fa6";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setClose } from "../app/features/NestedSidebar/NestedSidebarSlice";
interface IProps {
  open: number | null;
  setOpen: (open: number | null) => void;
  openedCategory: string;
  children: ReactNode;
}
export default function SubSidebar({
  open,
  children,
  setOpen,
  openedCategory,
}: IProps) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        open !== null ? "right-0" : "right-[-100%]"
      } top-0 absolute transition-all duration-300 bg-white w-full h-full z-40 text-sm sm:text-base`}
    >
      <button
        className="flex items-center bg-gray-100 w-full px-4 gap-2 py-4"
        onClick={() => dispatch(setClose())}
      >
        <FaAngleLeft />
        <p>Menu</p>
      </button>
      <button
        className="flex items-center w-full px-4 gap-2 py-4 border-b-2"
        onClick={() => setOpen(null)}
      >
        <FaAngleLeft />
        <p>All Categories</p>
      </button>
      <h3 className="px-6 pt-4 pb-1 font-bold">All {openedCategory}</h3>

      {open !== null && children}
    </div>
  );
}
