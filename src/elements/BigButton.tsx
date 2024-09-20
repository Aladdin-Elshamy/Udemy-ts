import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function BigButton({ children }: IProps) {
  return (
    <a
      href="#"
      className="w-full block font-semibold text-center bg-black text-white p-4"
    >
      {children}
    </a>
  );
}
