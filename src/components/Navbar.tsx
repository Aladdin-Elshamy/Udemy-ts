import { RxHamburgerMenu } from "react-icons/rx";
import { UdemyLogo } from "../utilities/utili.icons";
import DropdownMenu from "./DropdownMenu";
import HeaderSearch from "../ui/HeaderSearch";
import PopModal from "./PopModal";
import PopContent from "../ui/PopContent";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartPopup from "../ui/CartPopup";
import { useState } from "react";
import BtnLinks from "../ui/BtnLinks";
import { useDispatch } from "react-redux";
import { setSearchOpen } from "../app/features/Search/SearchSlice";

interface IProps {
  setSidebarOpen: (value: boolean) => void;
}
export default function Navbar({ setSidebarOpen }: IProps) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="px-5 py-4 shadow-lg top-0 bg-white">
      <ul className="flex items-center justify-between gap-2 [&>li]:cursor-pointer [&>li]:flex-shrink-0">
        <li className="md:hidden" onClick={() => setSidebarOpen(true)}>
          <RxHamburgerMenu className="text-xl" />
        </li>
        <li>
          <UdemyLogo />
        </li>
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden md:block hover:text-hover relative"
        >
          <span className="block px-1 py-2">Categories</span>
          <div
            className={`${
              isHovered ? "block" : "hidden"
            } pt-6 cursor-default text-black md:-left-16 lg:-left-0 absolute z-20`}
          >
            <DropdownMenu />
          </div>
        </li>
        <li className="w-5/12 flex-shrink hidden md:block px-1">
          <HeaderSearch />
        </li>
        <li className="hidden xl:block">
          <PopModal title="Udemy Business">
            <PopContent
              description={
                "Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
              }
              button={"Try Udemy Business"}
            />
          </PopModal>
        </li>
        <li className="hidden lg:block hover:text-hover">
          <PopModal title="Teach on Udemy">
            <PopContent
              description={
                "Turn what you know into an opportunity and reach millions around the world."
              }
              button={"Learn more"}
            />
          </PopModal>
        </li>
        <li className="flex items-center gap-4">
          <IoSearchSharp
            onClick={() => dispatch(setSearchOpen())}
            className="text-xl md:hidden hover:text-hover"
          />
          <MdOutlineShoppingCart className="text-xl md:hidden hover:text-hover" />
          <PopModal>
            <CartPopup />
          </PopModal>
        </li>
        <BtnLinks />
      </ul>
    </nav>
  );
}
