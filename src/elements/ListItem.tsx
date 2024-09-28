import { LiHTMLAttributes, ReactNode } from "react";
import { FaAngleRight } from "react-icons/fa6";

interface IProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  hideArrow?: boolean;
  version?: "mobile" | "desktop";
}
export default function ListItem({
  hideArrow = false,
  children,
  version = "mobile",
  ...rest
}: IProps) {
  return (
    <li
      className={`${hideArrow ? "px-6" : "px-4"} ${
        version === "desktop" ? "cursor-pointer" : ""
      } flex justify-between py-1 items-center`}
      {...rest}
    >
      {children}

      {!hideArrow && (
        <span>
          <FaAngleRight className="text-xs" />
        </span>
      )}
    </li>
  );
}
