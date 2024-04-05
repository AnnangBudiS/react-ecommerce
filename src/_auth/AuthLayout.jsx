import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthCtx";

import authImage from "../assets/auth.png";

const AuthLayout = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  if (token) return navigate("/");

  return (
    <div className="flex min-h-screen items-center  gap-32 bg-gray-200">
      <div className="h-screen w-1/3 bg-blue-700 rounded-r-[94px] shadow-2xl ">
        <img src={authImage} alt="" />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
