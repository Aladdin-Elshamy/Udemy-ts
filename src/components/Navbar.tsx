import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingCart, MdOutlineLanguage } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

import { UdemyLogo } from "../utilities/utili.icons";
import { ChangeEvent, FormEvent, useState } from "react";
import Aside from "./Aside";
import Search from "./Search";
import PopModal from "./PopModal";
import PopContent from "../ui/PopContent";
import DropdownMenu from "./DropdownMenu";
export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [asideOpen, setAsideOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [course, setCourse] = useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCourse(e.target.value);
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
      {asideOpen && (
        <div className="fixed top-0 md:none left-0 w-full h-full md:hidden bg-black opacity-50"></div>
      )}

      <nav className="px-5 py-4 shadow-lg top-0 bg-white">
        <ul className="flex items-center justify-between gap-2 [&>li]:cursor-pointer [&>li]:flex-shrink-0 ">
          <li className="md:hidden" onClick={() => setAsideOpen(true)}>
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
            <span className="block p-2">Categories</span>

            <div
              className={`${
                isHovered ? "block" : "hidden"
              } pt-6 cursor-default text-black absolute z-20`}
            >
              <DropdownMenu />
            </div>
          </li>
          <li className="w-5/12 flex-shrink hidden md:block px-1">
            <form action="" className="w-full relative" onSubmit={handleSubmit}>
              <button
                className={`${
                  course
                    ? "cursor-pointer text-black"
                    : "cursor-not-allowed text-gray-400"
                }`}
                disabled={!course}
              >
                <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-xl" />
              </button>
              <input
                type="text"
                placeholder="Search for anything"
                className="border border-black w-full py-2 pl-12 rounded-full focus:outline-none"
                onChange={handleChange}
              />
            </form>
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
              onClick={() => setSearchOpen(true)}
              className="text-xl md:hidden hover:text-hover"
            />
            <MdOutlineShoppingCart className="text-xl md:hidden hover:text-hover" />
            <PopModal>
              <div className="pt-8 font-medium w-52">
                <div className="flex flex-col gap-2 p-2 text-center bg-white shadow-lg border">
                  <p className="text-gray-400">Your cart is empty</p>
                  <a href="#" className="text-primary text-sm">
                    keep shopping
                  </a>
                </div>
              </div>
            </PopModal>
          </li>
          <li className="items-center lg:gap-3 md:gap-2 font-bold hidden md:flex">
            <button className="border border-black px-4 py-2 hover:bg-gray-200">
              Log in
            </button>
            <button className="border border-black px-4 py-2 bg-black text-white hover:opacity-70">
              Sign up
            </button>
            <button className="border border-black px-2 py-[10px] hover:bg-gray-200">
              <MdOutlineLanguage className="text-xl" />
            </button>
          </li>
        </ul>
      </nav>
      <Aside asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
      {searchOpen && <Search setSearchOpen={setSearchOpen} />}
    </>
  );
}
