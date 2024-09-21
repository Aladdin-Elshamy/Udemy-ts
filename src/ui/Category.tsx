import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function Category({ children }: IProps) {
  return <ul className="flex flex-col gap-2">{children}</ul>;
}
