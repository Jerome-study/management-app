import { cn } from "@utils/cn";

interface CardProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn("rounded-md bg-surface p-4", className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
