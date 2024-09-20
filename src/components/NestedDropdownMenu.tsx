import { ReactNode } from "react";

interface IProps {
  open: string;
  setOpen: (open: string) => void;
  children: ReactNode;
}
export default function NestedDropdownMenu({ open, children }: IProps) {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } left-64 h-[700px] w-80 absolute top-8 border shadow-lg bg-white z-50`}
    >
      {children}
    </div>
  );
}
