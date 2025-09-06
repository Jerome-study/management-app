import { cn } from "@utils/cn";

interface FormProps extends React.ComponentProps<"form"> {
  children?: React.ReactNode;
}

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form className={cn("grid gap-3", className)} {...props}>
      {children}
    </form>
  );
};

export default Form;
