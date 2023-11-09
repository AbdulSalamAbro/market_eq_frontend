import { ComponentProps, FC, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "px-[22.79px]",
        "desktop:px-[30px]",
        "py-[15.19px]",
        "desktop:py-5",
        "bg-white",
        "bg-opacity-5",
        "border",
        "border-slate-700",
        "border-opacity-5",
        "justify-center",
        "items-center",
        "gap-[7.60px]",
        "inline-flex",
        "text-slate-700",
        "text-xs",
        "font-normal",
        "capitalize",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof button> {
  children: ReactNode;
  label?: string;
  leftIcon?: SVGSVGElement;
  rightIcon?: SVGSVGElement;
}

export const Button: FC<ButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  label,
  intent,
  className,
}) => {
  return <button>Button</button>;
};
