import { ReactNode } from "react";

interface IProps {
  open: string;
  setOpen: (open: string) => void;
  children: ReactNode;
}
export default function SubDropdown({ open, children }: IProps) {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } left-[223px] lg:left-[319px] h-[600px] w-56 lg:w-72 absolute top-[-1px] border bg-white z-50`}
    >
      {children}
    </div>
  );
}
