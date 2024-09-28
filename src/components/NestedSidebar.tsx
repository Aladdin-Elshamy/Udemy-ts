import { FaAngleLeft } from "react-icons/fa6";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setClose } from "../app/features/NestedSidebar/NestedSidebarSlice";

interface IProps {
  children: ReactNode;
}
export default function NestedSidebar({ children }: IProps) {
  const open = useSelector((state: RootState) => state.nestedSidebar.open);
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
      {open !== null && children}
    </div>
  );
}
