import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@utils/cn";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle"
  | "body"
  | "caption";

type TypograhyFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

interface TypograhyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  component?: keyof React.JSX.IntrinsicElements;
  color?: "default" | "primary" | "success" | "danger" | "warning";
  fontWeight?: TypograhyFontWeight;
}

const typograhyVariant = cva("w-auto h-auto", {
  variants: {
    color: {
      default: "text-base",
      primary: "text-primary",
      success: "text-success",
      danger: "text-danger",
      warning: "text-warning",
    },
    variant: {
      h1: "text-4xl font-bold tracking-tight",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-medium",
      subtitle: "text-lg font-normal",
      body: "text-base font-normal",
      caption: "text-sm font-normal",
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
    color: "default",
    variant: "body",
    fontWeight: undefined,
  },
});

const Typograhy = ({
  variant,
  component,
  children,
  color,
  fontWeight,
  className,
  ...props
}: TypograhyProps) => {
  const Component = (
    component ? component : variant?.startsWith("h") ? variant : "p"
  ) as React.JSX.ElementType;
  return (
    <Component
      className={cn(
        typograhyVariant({ color, variant, fontWeight }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typograhy;
