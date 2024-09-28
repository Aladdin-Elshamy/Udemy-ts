import { MdOutlineLanguage } from "react-icons/md";
import LinkBtn from "../elements/LinkBtn";

export default function BtnLinks() {
  return (
    <li className="items-center lg:gap-3 md:gap-2 font-bold hidden md:flex flex-shrink">
      <LinkBtn
        href="#"
        variant="white"
        align={"center"}
        width={"fit"}
        className="text-base"
      >
        Log in
      </LinkBtn>
      <LinkBtn
        href="#"
        variant="black"
        align={"center"}
        width={"fit"}
        className="text-base"
      >
        Sign up
      </LinkBtn>
      <LinkBtn
        href="#"
        width={"fit"}
        align={"center"}
        variant="white"
        className="py-[10px] px-2"
      >
        <MdOutlineLanguage className="text-xl" />
      </LinkBtn>
    </li>
  );
}
