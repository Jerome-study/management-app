import { cn } from "@utils/cn";

interface FieldSetProps extends React.ComponentProps<"fieldset"> {
  children?: React.ReactNode;
}

const FieldSet = ({ children, className, ...props }: FieldSetProps) => {
  return (
    <fieldset className={cn("grid gap-1", className)} {...props}>
      {children}
    </fieldset>
  );
};

export default FieldSet;
