import Typograhy from "@components/ui/Typograhy/Typograhy";
import { Link } from "react-router-dom";
import { ROUTES } from "const/ROUTES";

const LandingPage = () => {
  return (
    <>
      <Link to={ROUTES.public.LOGIN}>
        <Typograhy>Login</Typograhy>
      </Link>
      <Link to={ROUTES.public.REGISTER}>
        <Typograhy>Register</Typograhy>
      </Link>
    </>
  );
};

export default LandingPage;
