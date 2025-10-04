import Typograhy from "@components/ui/Typograhy/Typograhy";
import { ROUTES } from "const/ROUTES";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  type: "Login" | "Register";
  children?: React.ReactNode;
}

const AuthLayout = ({ children, type }: AuthLayoutProps) => {
  return (
    <div className="min-h-dvh bg-background flex items-center justify-center md:p-5">
      <div className="grid grid-cols-1 mx-auto w-full  max-w-[1440px] bg-white border border-border min-h-dvh md:h-[900px] md:min-h-0  md:rounded-xl md:grid-cols-12">
        <div className="col-span-7 hidden md:block">
          <img
            src={"https://picsum.photos/id/20/1920"}
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>
        <div className="col-span-5 py-10 px-5 md:px-10 flex flex-col gap-5 h-full">
          {/* Header */}
          <Typograhy variant="h3" className="mt-10">
            {type === "Login" ? "Nice to see you again!" : "Become one of us!"}
          </Typograhy>
          {/* Form */}
          {children}
          <div className="flex gap-2 justify-center">
            <Typograhy className="text-xs">Already have an account?</Typograhy>
            <Link
              to={
                type === "Login" ? ROUTES.public.REGISTER : ROUTES.public.LOGIN
              }
              className="p-0 m-0"
            >
              <Typograhy color="info" className="text-xs">
                {type === "Login" ? "Sign up now" : "Sign in now"}
              </Typograhy>
            </Link>
          </div>
          {/* Footer */}
          <div className="flex-1 flex items-end justify-end">
            <Typograhy fontWeight={200} className="text-xs">
              @2025
            </Typograhy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
