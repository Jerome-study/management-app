import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";
import React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  inputSize?: "small" | "medium" | "large";
}

const Input = ({ inputSize, className, ...props }: InputProps) => {
  return (
    <input
      className={cn(InputVariantProps({ inputSize }), className)}
      {...props}
    />
  );
};

const InputVariantProps = cva(
  "border border-border rounded-sm focus:outline-primary",
  {
    variants: {
      inputSize: {
        small: "text-sm px-2 py-1",
        medium: "text-base px-3 py-2",
        large: "text-lg px-4 py-3",
      },
    },
    defaultVariants: {
      inputSize: "medium",
    },
  }
);

export default Input;
