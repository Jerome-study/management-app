import { cn } from "@utils/cn";

interface CardHeaderProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export default CardHeader;
