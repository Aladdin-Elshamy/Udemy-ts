import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  direction: "left" | "right";
}
export default function SlideNavBtns({ children, direction, ...rest }: IProps) {
  return (
    <button
      {...rest}
      className={`${direction}-5 hidden md:block absolute top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full`}
    >
      {children}
    </button>
  );
}
