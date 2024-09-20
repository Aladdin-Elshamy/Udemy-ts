import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
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
import NestedDropdownMenu from "./NestedDropdownMenu";
export default function DropdownMenu() {
  const [open, setOpen] = useState("");
  return (
    <aside className="bg-white border w-64 h-[600px] shadow-lg">
      <ul className="flex flex-col gap-2 py-4">
        <li
          onMouseEnter={() => setOpen("Web Development")}
          onMouseLeave={() => console.log(open)}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Web Development</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("Mobile Development")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Mobile Development</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("Game Development")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Game Development</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("Entreprenuership")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Entreprenuership</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("Business Analytics & Intelligence")}
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
          onMouseEnter={() => setOpen("Finance")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Finance</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("IT Certifications")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>IT Certifications</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("Personal Transformation")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Personal Transformation</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("Graphic Design & Illustration")}
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
          onMouseEnter={() => setOpen("Digital Marketing")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>Digital Marketing</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
        <li
          onMouseEnter={() => setOpen("All Categories")}
          className="cursor-pointer flex justify-between px-4 py-1 items-center"
        >
          <p>All Categories</p>
          <span>
            <FaAngleRight className="text-xs" />
          </span>
        </li>
      </ul>
      <NestedDropdownMenu open={open} setOpen={setOpen}>
        {open === "Web Development" && <WebList />}
        {open === "Mobile Development" && <MobileList />}
        {open === "Game Development" && <GameList />}
        {open === "Entreprenuership" && <EntrepreneurshipList />}
        {open === "Business Analytics & Intelligence" && <BusinessList />}
        {open === "Finance" && <FinanceList />}
        {open === "IT Certifications" && <ITList />}
        {open === "Personal Transformation" && <PersonalTransformationList />}
        {open === "Graphic Design & Illustration" && <GraphicList />}
        {open === "Digital Marketing" && <MarketingList />}
        {open === "All Categories" && <CategoriesList />}
      </NestedDropdownMenu>
    </aside>
  );
}
