import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "success" | "danger" | "warning";
  size?: "small" | "medium" | "large";
}

const Button = ({
  children,
  color,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ color, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

const buttonVariants = cva(
  "flex items-center justify-center rounded-md py-2 px-3 ",
  {
    variants: {
      color: {
        primary: "bg-primary text-white",
        success: "bg-success text-white",
        danger: "bg-danger text-white",
        warning: "bg-warning text-white",
      },
      size: {
        small: "text-sm px-3 py-1.5",
        medium: "text-base px-4 py-2",
        large: "text-lg px-5 py-3",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "medium",
    },
  }
);
