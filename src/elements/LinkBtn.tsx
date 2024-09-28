import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import { cn } from "../utilities/utili.functions";

const linkBtnStyles = cva("border font-bold border-black px-4 py-2 text-sm", {
  variants: {
    variant: {
      black: "bg-black text-white hover:opacity-70",
      white: "bg-transparent border border-black text-black hover:bg-gray-200",
    },
    align: {
      left: "text-left",
      center: "text-center",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    variant: "black",
    align: "left",
    width: "full",
  },
});

interface IProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkBtnStyles> {}

export default function LinkBtn({
  className,
  variant,
  align,
  width,
  ...props
}: IProps) {
  return (
    <a
      {...props}
      className={cn(linkBtnStyles({ variant, align, width, className }))}
    />
  );
}
