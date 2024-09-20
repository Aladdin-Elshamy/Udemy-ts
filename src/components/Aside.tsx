import { useState } from "react";
import { Close } from "../utilities/utili.icons";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";
import NestedAside from "./NestedAside";
import LangAside from "./LangAside";
import WebList from "../elements/WebList";
import MobileList from "../elements/MobileList";
import GameList from "../elements/GameList";
import BusinessList from "../elements/BusinessList";
import EntrepreneurshipList from "../elements/EntrepreneurshipList";
import FinanceList from "../elements/FinanceList";
import ITList from "../elements/ITList";
import PersonalTransformationList from "../elements/PersonalTransformationList";
import GraphicList from "../elements/GraphicList";
import MarketingList from "../elements/Marketing";
import CategoriesList from "../elements/CategoriesList";
interface IProps {
  asideOpen: boolean;
  setAsideOpen: (open: boolean) => void;
}
export default function Aside({ asideOpen, setAsideOpen }: IProps) {
  const [open, setOpen] = useState("");
  const [langAsideOpen, setLangAsideOpen] = useState(false);
  return (
    <>
      <aside
        className={`${
          asideOpen ? "left-0" : "left-[-100%]"
        } overflow-x-hidden bg-white w-3/5 max-w-[280px] ${
          open || langAsideOpen ? "min-h-screen" : "max-h-screen"
        }  transition-all duration-300 z-20 fixed top-0 left-0 md:hidden`}
      >
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <div className="flex flex-col gap-2 py-2 border-b-2">
            <a href="#" className="text-primary px-4 py-1 font-medium">
              Log in
            </a>
            <a href="#" className="text-primary px-4 py-1 font-medium">
              Sign up
            </a>
          </div>
          <ul className="flex flex-col gap-2 py-2 border-b-2">
            <span className="px-4 pb-1 font-bold text-sm text-gray-500">
              Most popular
            </span>
            <li
              onClick={() => setOpen("Web Development")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Web Development</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Mobile Development")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Mobile Development</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Game Development")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Game Development</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Entreprenuership")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Entreprenuership</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Business Analytics & Intelligence")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>
                Business Analytics & <br /> Intelligence
              </p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Finance")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Finance</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("IT Certifications")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>IT Certifications</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Personal Transformation")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Personal Transformation</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Graphic Design & Illustration")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>
                Graphic Design &<br /> Illustration
              </p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("Digital Marketing")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>Digital Marketing</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
            <li
              onClick={() => setOpen("All Categories")}
              className="cursor-pointer flex justify-between px-4 py-1 items-center"
            >
              <p>All Categories</p>
              <span>
                <FaAngleRight className="text-xs" />
              </span>
            </li>
          </ul>

          <ul
            className={`${
              open ? "hidden" : "flex"
            } flex-col gap-2 px-2 border-b-2 pb-6`}
          >
            <span className="px-4 pb-1 font-bold text-sm text-gray-500">
              More from Udemy
            </span>
            <li className="px-4 py-1 cursor-pointer">
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
              onClick={() => setLangAsideOpen(true)}
              className="flex ml-4 items-center gap-2 w-32 border border-black px-4 py-2 hover:bg-gray-200"
            >
              <MdOutlineLanguage className="text-xl" />
              <span>English</span>
            </button>
          </ul>
          <NestedAside open={open} setOpen={setOpen}>
            {open === "Web Development" && <WebList />}
            {open === "Mobile Development" && <MobileList />}
            {open === "Game Development" && <GameList />}
            {open === "Entreprenuership" && <EntrepreneurshipList />}
            {open === "Business Analytics & Intelligence" && <BusinessList />}
            {open === "Finance" && <FinanceList />}
            {open === "IT Certifications" && <ITList />}
            {open === "Personal Transformation" && (
              <PersonalTransformationList />
            )}
            {open === "Graphic Design & Illustration" && <GraphicList />}
            {open === "Digital Marketing" && <MarketingList />}
            {open === "All Categories" && <CategoriesList />}
          </NestedAside>
          <LangAside
            langAsideOpen={langAsideOpen}
            setLangAsideOpen={setLangAsideOpen}
          />
        </div>
      </aside>
      <button
        className={`${
          asideOpen ? "opacity-100 delay-300" : "opacity-0 delay-0"
        } aside-close bg-white p-4 rounded-full transition-all duration-300 z-20 fixed top-2 left-72 md:hidden border`}
        onClick={() => setAsideOpen(false)}
      >
        <Close className="text-black" />
      </button>
    </>
  );
}
