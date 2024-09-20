import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

interface IProps {
  title?: string | ReactNode;
  children: ReactNode;
}
export default function PopModal({ title, children }: IProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.click();
    }
  });
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Popover className="hidden md:flex relative  flex-col items-end">
      <PopoverButton
        ref={ref}
        className={`${isHovered ? "text-hover" : ""} focus:outline-none`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-hover={isHovered}
      >
        {title || (
          <MdOutlineShoppingCart className="hidden md:block text-2xl hover:text-hover" />
        )}
      </PopoverButton>
      {isHovered && (
        <PopoverPanel
          static
          anchor="bottom"
          className={`flex flex-col gap-2`}
          onMouseEnter={() => setIsHovered(true)} // Keep open when hovering over panel
          onMouseLeave={() => setIsHovered(false)} // Close when leaving panel
        >
          {children}
        </PopoverPanel>
      )}
    </Popover>
  );
}
