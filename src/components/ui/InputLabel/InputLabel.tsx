import { cn } from "@utils/cn";
import { cva } from "class-variance-authority";

interface InputLabelProps extends React.ComponentProps<"label"> {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
}

const InputLabel = ({
  children,
  size,
  className,
  ...props
}: InputLabelProps) => {
  return (
    <label className={cn(LabelVariantProps({ size }), className)} {...props}>
      {children}
    </label>
  );
};

const LabelVariantProps = cva("text-text opacity-40 font-normal", {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-sm",
      large: "text-base",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export default InputLabel;
