import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ReactNode, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

interface IProps {
  title?: string | ReactNode;
  children: ReactNode;
}
export default function PopModal({ title, children }: IProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Popover
      className="relative hidden md:flex flex-col items-end"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-open={isHovered}
    >
      <PopoverButton
        data-open={isHovered}
        data-focus={isHovered}
        className={`${isHovered ? "text-hover" : ""} focus:outline-none`}
      >
        {title || (
          <MdOutlineShoppingCart className="hidden md:block text-2xl hover:text-hover" />
        )}
      </PopoverButton>
      {
        <PopoverPanel
          static
          anchor="bottom"
          className={`flex flex-col gap-2`}
          data-open={isHovered}
        >
          {isHovered && children}
        </PopoverPanel>
      }
    </Popover>
  );
}
