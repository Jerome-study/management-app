import { cn } from "@utils/cn";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <div className={cn("font-normal text-xs opacity-40", className)} {...props}>
      {children}
    </div>
  );
};

export default CardDescription;
