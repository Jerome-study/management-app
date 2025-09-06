import { cn } from "@utils/cn";

interface CardTitleProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

const CardTitle = ({ children, className, ...props }: CardTitleProps) => {
  return (
    <div
      className={cn("font-semibold text-base text-text", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardTitle;
