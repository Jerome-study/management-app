import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils/cn";

type TypograhyFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning";
  size?: "small" | "medium" | "large";
  fontWeight?: TypograhyFontWeight;
  startIcon?: React.ReactNode;
}

const Button = ({
  children,
  color,
  size,
  fontWeight,
  className,
  startIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ color, size, fontWeight }), className)}
      {...props}
    >
      <div className="flex gap-2">
        {startIcon}
        {children}
      </div>
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "flex items-center justify-center rounded-md py-2 px-3 disabled:opacity-[0.5]",
  {
    variants: {
      color: {
        primary: "bg-primary text-white",
        success: "bg-success text-white",
        danger: "bg-danger text-white",
        warning: "bg-warning text-white",
        secondary: "bg-secondary text-white",
      },
      size: {
        small: "text-sm px-3 py-1.5",
        medium: "text-base px-4 py-2",
        large: "text-lg px-5 py-3",
      },
      fontWeight: {
        100: "font-thin",
        200: "font-extralight",
        300: "font-light",
        400: "font-normal",
        500: "font-medium",
        600: "font-semibold",
        700: "font-bold",
        800: "font-extrabold",
        900: "font-black",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "medium",
      fontWeight: undefined,
    },
  }
);
