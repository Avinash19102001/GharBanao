import { lazy } from "react";

const Login = lazy(() => import("../components/auth/Login"));
const Register= lazy(()=>import("../components/auth/Register"))
const ForgotPassword=lazy(()=>import("../components/auth/ForgotPassword"))

const AuthRoutes = [
  {
    path: "/",
    
    element: <Login />,
  },
  {
    path: "/register",
    element:<Register />
  },
  {
    path: "/forgotpassword",
    element:<ForgotPassword />
  },
  
];

export default AuthRoutes;
