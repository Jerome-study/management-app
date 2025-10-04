import { Routes, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import { ROUTES } from "const/ROUTES";
import LandingPage from "pages/LandingPage";
import Register from "features/auth/pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={ROUTES.public.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.public.REGISTER} element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
