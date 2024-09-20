import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function Description({ children }: IProps) {
  return (
    <p className="text-black font-bold text-2xl text-center">{children}</p>
  );
}
