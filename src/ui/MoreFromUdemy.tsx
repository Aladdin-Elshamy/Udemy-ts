import { MdOutlineLanguage } from "react-icons/md";
import CategorySpan from "../elements/CategorySpan";

interface IProps {
  open: number | null;
  setLangSidebarOpen: (open: boolean) => void;
}
export default function MoreFromUdemy({ open, setLangSidebarOpen }: IProps) {
  return (
    <ul
      className={`${
        open ? "hidden" : "flex"
      } flex-col gap-2 pt-2 border-b-2 pb-6`}
    >
      <CategorySpan title="More from Udemy" />
      <li className="px-4 pb-1 cursor-pointer">
        <a href="#">Udemy Business</a>
      </li>
      <li className="px-4 py-1 cursor-pointer">
        <a href="#">Get the app</a>
      </li>
      <li className="px-4 py-1 cursor-pointer">
        <a href="#">Invite friends</a>
      </li>
      <li className="px-4 py-1 cursor-pointer">
        <a href="#">Help and Support</a>
      </li>
      <button
        onClick={() => setLangSidebarOpen(true)}
        className="flex ml-4 items-center gap-2 w-32 border border-black px-4 py-2 hover:bg-gray-200"
      >
        <MdOutlineLanguage className="text-xl" />
        <span>English</span>
      </button>
    </ul>
  );
}
