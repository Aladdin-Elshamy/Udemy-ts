import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
export default function BigButton({ children, className }: IProps) {
  return (
    <a
      href="#"
      className={`hover:opacity-70 w-full border border-black block font-semibold text-center bg-black text-white p-4 ${className}`}
    >
      {children}
    </a>
  );
}
